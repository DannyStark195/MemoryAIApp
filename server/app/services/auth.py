from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.exc import IntegrityError
from app.models.user import User
from app.models.user_session import UserSession
from app.schemas.user import UserBase
from app.schemas.auth import LoginRequest
from app.core.security import hash_password, verify_password, create_access_token, create_refresh_token, hash_refresh_token
from app.core.config import settings
import uuid
from datetime import datetime, timedelta, timezone
async def signup_user(db:AsyncSession, user_data: UserBase) -> User:
    result = await db.execute(
        select(User).where(User.email == user_data.email)
    )

    existing_user = result.scalar_one_or_none()
    if existing_user:
        raise ValueError("Email already exists")

    new_user = User(
        email=user_data.email,
        hashed_password=hash_password(user_data.password),
        display_name=user_data.display_name
    )

    try:
        db.add(new_user)
        await db.commit()
        await db.refresh(new_user)

        return new_user

    except IntegrityError:
        await db.rollback()
        raise ValueError("Email already registered")

    except Exception:
        await db.rollback()
        raise

async def login_user(db: AsyncSession, login_data: LoginRequest) -> dict:
    result = await db.execute(
        select(User).where(User.email==login_data.email)
    )

    existing_user = result.scalar_one_or_none()

    if not existing_user:
        raise ValueError("Invalid email or password")

    if not verify_password(login_data.password, existing_user.hashed_password):
        raise ValueError("Invalid email or password")

    new_access_token = create_access_token(existing_user.id)
    new_refresh_token = create_refresh_token()
    new_session = UserSession(
        user_id=existing_user.id,
        token_hash=hash_refresh_token(new_refresh_token),
        family_id=uuid.uuid4(),
        expires_at=datetime.now(timezone.utc) + timedelta(days=settings.REFRESH_TOKEN_EXPIRE_DAYS)
    )

    try:
        db.add(new_session)
        await db.commit()
        await db.refresh(new_session)

        return {
            "access_token": new_access_token,
            "refresh_token": new_refresh_token,
            "token_type": "bearer"
        }
    
    except Exception:
        await db.rollback()
        raise

async def rotate_refresh_token(db: AsyncSession, refresh_token: str) -> dict:
    token_hash = hash_refresh_token(refresh_token)

    result = await db.execute(
        select(UserSession).where(UserSession.token_hash == token_hash)
        .with_for_update()
    )

    old_session = result.scalar_one_or_none()

    if not old_session:
        raise ValueError("Invalid refresh token")
