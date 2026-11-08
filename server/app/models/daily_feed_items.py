import uuid

from traitlets import Integer
from server.app.models.memory import Memory
from server.app.models.user import User
from sqlalchemy import String, Date, ForeignKey, Uuid,DateTime, func, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.db.base import Base
from datetime import datetime, date

class DailyFeedItems(Base):
    __table_args__ = (
        UniqueConstraint(
            "user_id",
            "memory_id",
            name="unique_daily_feed_item_per_user"
        ),
             UniqueConstraint(
            "user_id",
            "feed_date",
            "position",
            name="unique_daily_feed_position"
        ),
    )

    id: Mapped[uuid.UUID] = mapped_column(Uuid(as_uuid=True),primary_key=True, default=uuid.uuid4)
    user_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("user.id", ondelete="CASCADE"),nullable=False, index=True)
    memory_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("memory.id", ondelete="CASCADE"),nullable=False, index=True)
    position: Mapped[int] = mapped_column(Integer, nullable=False)
    feed_date: Mapped[date] = mapped_column(Date, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    viewed_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    
    user: Mapped["User"] = relationship(back_populates="daily_feed_items")
    memory: Mapped["Memory"] = relationship(back_populates="daily_feed_items") 