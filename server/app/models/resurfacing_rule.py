import uuid
from datetime import datetime

from server.app.models.user import User
from sqlalchemy import String, Boolean, BigInteger, DateTime, ForeignKey, Text, CheckConstraint, func, Uuid
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.db.base import Base

class ResurfacingRule(Base):
    __table_args__ = (
        UniqueConstraint(
            "user_id",
            "period",
            name="unique_resurfacing_rule_per_user"
        )
        CheckContsaints(
            "period IN ('morning', 'afternoon', 'evening')",
            name="valid_resurfacing_period"
        )
    )

    id: Mapped[uuid.UUID] = mapped_column(Uuid(as_uuid=True),primary_key=True, default=uuid.uuid4)
    user_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("user.id", ondelete="CASCADE"),nullable=False, index=True)
    period: Mapped[str] = mapped_column(String(30), nullable=False)
    is_enabled: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())

    user:Mapped["User"] = relationship(
        back_populates="resurfacing_rule"
    )