from fastapi import APIRouter

from app.api.v1.routes import (
#     auth,
#     users,
    memories,
#     files,
#     categories,
#     folders,
#     notifications
)
from sqlalchemy import text
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import Depends

from app.db.session import get_db

router = APIRouter()
router.include_router(memories.router, prefix="/memories", tags=["Memories"])

@router.get("/health")
async def health_check():
    return {
        "success": True,
        "message": "Recall API is healthy",
        "data": {
            "status": "operational"
        }
    }

@router.get("/health/database")
async def database_health(db: AsyncSession = Depends(get_db)):
    await db.execute(text("SELECT 1"))

    return {
        "success": True,
        "message": "Database connection successful",
        "data": {
            "database": "PostgreSQL",
            "status": "connected"
        }
    }
