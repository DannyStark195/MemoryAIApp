
import uuid
from datetime import datetime
from sqlalchemy import DateTime, ForeignKey, String, Uuid, func
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.base import Base


class UserSession(Base):
    __tablename__ = "user_session"

    id: Mapped[uuid.UUID] = mapped_column(Uuid,primary_key=True, default=uuid.uuid4,)

    user_id: Mapped[uuid.UUID] = mapped_column(Uuid,ForeignKey("user.id", ondelete="CASCADE"), nullable=False,index=True,)

    token_hash: Mapped[str] = mapped_column(String(64),unique=True, nullable=False,)

    family_id: Mapped[uuid.UUID] = mapped_column(Uuid,nullable=False,index=True,)

    expires_at: Mapped[datetime] = mapped_column(DateTime(timezone=True),nullable=False,)

    revoked_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True),nullable=True,)

    replaced_by_id: Mapped[uuid.UUID | None] = mapped_column(
        Uuid,ForeignKey("user_session.id", ondelete="SET NULL"),nullable=True,unique=True,)

    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True),server_default=func.now(),nullable=False,)

    # Relationships
    user: Mapped["User"] = relationship(back_populates="sessions")

    replaced_by: Mapped["UserSession | None"] = relationship(remote_side="UserSession.id",foreign_keys=[replaced_by_id],)
