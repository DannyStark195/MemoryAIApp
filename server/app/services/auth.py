from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.user import User
from app.schemas.user import UserBase
from app.core.security import hash_password

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

    # except IntegrityError:
    #     await db.rollback()
    #     raise ValueError("Email already registered")

    except Exception:
        await db.rollback()
        raise
    