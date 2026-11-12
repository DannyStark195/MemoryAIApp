import uuid
from datetime import datetime
from sqlalchemy import String, Boolean, DateTime, func
from sqlalchemy import Uuid
from sqlalchemy.orm import Mapped, mapped_column, relationship, UniqueConstraint, CheckConstraint, Numeric
from app.db.base import Base
from decimal import Decimal

class Payment(Base):
    __tablename__ = "payment"

    __table_args__ =(
        UniqueConstraint('subscription_id', name='unique_payment_subscription_id'),
        CheckConstraint('status IN ("pending", "completed", "failed")', name='check_payment_status')
    )

    id: Mapped[uuid.UUID | None] = mapped_column(Uuid(as_uuid=True), primary_key=True, default=uuid.uuid4)
    subscription_id: Mapped[uuid.UUID | None] = mapped_column(Uuid(as_uuid=True), nullable=False, index=True)
    amount: Mapped[Decimal] = mapped_column(Numeric(10, 2), nullable=False)
    status: Mapped[str] = mapped_column(String(50), nullable=False, default="pending")
    payment_reference: Mapped[str | None] = mapped_column(String(255), nullable=True)
    paid_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())

    user: Mapped["User | None"] = relationship(back_populates="payment")
    subscription: Mapped["Subscription | None"] = relationship(back_populates="payment")