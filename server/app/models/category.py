import uuid
from server.app.models.memory import Memory
from server.app.models.user import User
from sqlalchemy import String, ForeignKey, Uuid,DateTime, func, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.db.base import Base

class Category(Base):
    __table_args__ = (
        UniqueConstraint(
            "user_id",
            "name",
            name="unique_category_per_user"
        ),
    )

    id: Mapped[uuid.UUID] = mapped_column(Uuid(as_uuid=True),primary_key=True, default=uuid.uuid4)
    user_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("user.id", ondelete="CASCADE"),nullable=False, index=True)
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())

    user: Mapped["User | None"] = relationship(back_populates="category")
    memories: Mapped[list["Memory"]] = relationship(back_populates="category")