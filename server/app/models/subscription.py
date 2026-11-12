import uuid
from datetime import datetime
from sqlalchemy import String, Boolean, DateTime, func
from sqlalchemy import Uuid
from sqlalchemy.orm import Mapped, mapped_column, relationship, UniqueConstraint, CheckConstraint
from app.db.base import Base

class Subscription(Base):
    __tablename__ = "subscription"

    __table_args__ =(
        UniqueConstraint('user_id', name='unique_subscription_user_id'),
        CheckConstraint('status IN ("active", "trial", "expired")', name='check_subscription_status'),
        CheckConstraint('trial_type IN ("standard", "waitlist")', name='check_subscription_trial_type')
    )

    id: Mapped[uuid.UUID] = mapped_column(Uuid(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id: Mapped[uuid.UUID] = mapped_column(Uuid(as_uuid=True), nullable=False, index=True)
    trail_type: Mapped[str | None] = mapped_column(String(50), nullable=True)
    status: Mapped[str] = mapped_column(String(50), nullable=False, default="trial")
    trial_start_date: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    trial_end_date: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    current_period_start: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    current_period_end: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())


    user: Mapped["User"] = relationship(back_populates="subscription")
    payments: Mapped["Payment | None"] = relationship(back_populates="subscription")