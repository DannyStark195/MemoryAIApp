import uuid

from sqlalchemy import String, ForeignKey, Uuid,DateTime, func, UniqueConstraint, CheckConstraint, Text, Integer
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.db.base import Base
from datetime import datetime

class MemoryResurfacingEvent(Base):
    __tablename__ = "memory_resurfacing_event"

    __table_args__ = (
        CheckConstraint(
            "period IN ('morning', 'afternoon', 'night')",
            name="valid_event_period"
        ),
        CheckConstraint(
            "status IN ('scheduled', 'sent', 'failed', 'cancelled')",
            name="valid_event_status"
        ),
    )

    id: Mapped[uuid.UUID] = mapped_column(Uuid(as_uuid=True),primary_key=True, default=uuid.uuid4)
    user_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("user.id", ondelete="CASCADE"),nullable=False, index=True)
    memory_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("memory.id", ondelete="CASCADE"),nullable=False, index=True)
    resurfaced_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), server_default=func.now())
    period: Mapped[str] = mapped_column(String(30), nullable=False)
    status: Mapped[str] = mapped_column(String(30), nullable=False, default="scheduled", server_default="scheduled")
    scheduled_for: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
    scheduled_date: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
    failure_reason: Mapped[str | None] = mapped_column(Text, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    
    user: Mapped["User"] = relationship(back_populates="memory_resurfacing_event")
    memory: Mapped["Memory"] = relationship(back_populates="memory_resurfacing_event")