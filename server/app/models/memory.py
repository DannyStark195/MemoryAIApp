import uuid
from datetime import datetime
from sqlalchemy import String, DateTime, ForeignKey, Text, func, Uuid
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.db.base import Base


class Memory(Base):
    __tablename__ = "memory"

    id: Mapped[uuid.UUID] = mapped_column(Uuid(as_uuid=True),primary_key=True, default=uuid.uuid4)
    user_id: Mapped[uuid.UUID] = mapped_column(Uuid(as_uuid=True), ForeignKey("user.id"), nullable=False, index=True)
    file_id: Mapped[uuid.UUID] = mapped_column(Uuid(as_uuid=True), ForeignKey("file.id", ondelete="RESTRICT"), nullable=False, index=True)
    title: Mapped[str] = mapped_column(String(255), nullable=False)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    last_resurfaced_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
    folder_id: Mapped[uuid.UUID | None] = mapped_column(  ForeignKey("folder.id", ondelete="SET NULL"), nullable=True, index=True)
    category_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("category.id", ondelete="RESTICT"), nullable=False, index=True)

    user:Mapped["User"] = relationship(back_populates="memory")
    file:Mapped["File"] = relationship(back_populates="memory")
    folder: Mapped["Folder | None"] = relationship(back_populates="memory")
    category: Mapped["Category"] = relationship(back_populates="memory")
    memory_resurfacing_events: Mapped[list["MemoryResurfacingEvent"]] = relationship(back_populates="memory")
