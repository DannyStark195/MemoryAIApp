import uuid
from datetime import datetime

from server.app.models.user import User
from server.app.models.file import File
from sqlalchemy import String, Boolean, BigInteger, DateTime, ForeignKey, Text, CheckConstraint, func, Uuid
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.db.base import Base

class Memory(Base):
    id: Mapped[uuid.UUID] = mapped_column(Uuid(as_uuid=True),primary_key=True, default=uuid.uuid4)
    user_id: Mapped[uuid.UUID] = mapped_column(Uuid(as_uuid=True), ForeignKey("user.id"), nullable=False, index=True)
    file_id: Mapped[uuid.UUID] = mapped_column(Uuid(as_uuid=True), ForeignKey("file.id", ondelete="RESTRICT"), nullable=False, index=True)
    title: Mapped[str] = mapped_column(String(255), nullable=False)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    last_resurfaced_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    user:Mapped["User"] = relationship(backpopulates="memory")
    file:Mapped["File"] = relationship(backpopulates="memory")

