import uuid
from datetime import datetime

from server.app.models.user import User
from sqlalchemy import String, Boolean, BigInteger, DateTime, ForeignKey, Text, CheckConstraint, func, Uuid
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.db.base import Base

class File(Base):
    __table_args__ = (
        CheckConstraint("storage_type IN ('device', 'cloud')", name='valid_storage_type'),
    )

    id: Mapped[uuid.Uuid] = mapped_column(Uuid(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id: Mapped[uuid.Uuid] = mapped_column(Uuid(as_uuid=True), ForeignKey("user.id", ondelete="CASCADE"), nullable=False)
    filename: Mapped[str] = mapped_column(String(255), nullable=False)
    mime_type: Mapped[str] = mapped_column(String(100), nullable=False)
    file_size: Mapped[int] = mapped_column(BigInteger, nullable=False)
    storage_type: Mapped[str] = mapped_column(String(20), nullable=False)
    storage_key: Mapped[str | None] = mapped_column(Text, nullable=True)
    device_uri = Mapped[str | None] = mapped_column(Text, nullable=True)
    checksum: Mapped[str | None] = mapped_column(String(128), nullable=True)
    is_available: Mapped[bool | None] = mapped_column(Boolean, nullable=True, default=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    user: Mapped["User"] = relationship(
        back_populates="file"
    )

    memories: Mapped[list["Memory"]] = relationship(
        back_populates="file"
    )
    

