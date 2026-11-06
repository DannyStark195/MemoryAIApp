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

router = APIRouter()
router.include_router(memories.router, prefix="/memories", tags=["Memories"])