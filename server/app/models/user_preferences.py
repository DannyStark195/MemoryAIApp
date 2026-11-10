import uuid

from sqlalchemy import String, ForeignKey, Uuid,DateTime, func, UniqueConstraint, Boolean, Integer
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.db.base import Base
from datetime import datetime

class UserPreferences(Base):
    __tablename__ = "user_preferences"

    __table_args__ = (
        UniqueConstraint(
            "user_id",
            name="unique_user_preferences"
        ),
    )

    id: Mapped[uuid.UUID] = mapped_column(Uuid(as_uuid=True),primary_key=True, default=uuid.uuid4)
    user_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("user.id", ondelete="CASCADE"),nullable=False, index=True)
    daily_feed_limit: Mapped[int] = mapped_column(Integer, default=3, server_default="3", nullable=False)
    timezone: Mapped[str] = mapped_column(String(50), default="Africa/Lagos", server_default="Africa/Lagos", nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    user: Mapped["User"] = relationship(back_populates="user_preferences")