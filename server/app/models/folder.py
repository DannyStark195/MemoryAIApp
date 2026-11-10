import datetime
import uuid
from sqlalchemy import String, ForeignKey, Uuid,DateTime, func, UniqueConstraint, Text, CheckConstraint
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.base import Base


class Folder(Base):
    __tablename__ = "folder"

    __table_args__ = (
        UniqueConstraint(
            "user_id",
            "name",
            name="unique_folder_per_user"
        ),
        CheckConstraint(
            "access_status IN ('active', 'unavailable', 'revoked')",
            name="valid_folder_access_status"
        ),
    )

    id: Mapped[uuid.UUID] = mapped_column(Uuid(as_uuid=True),primary_key=True, default=uuid.uuid4)
    user_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("user.id", ondelete="CASCADE"),nullable=False, index=True)
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    directory_path: Mapped[str] = mapped_column(Text, nullable=False)
    access_status: Mapped[str] = mapped_column(String(30), nullable=False, default="active", server_default="active")
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(),onupdate=func.now())

    user: Mapped["User"] = relationship(back_populates="folder")
    memories: Mapped[list["Memory"]] = relationship(back_populates="folder")