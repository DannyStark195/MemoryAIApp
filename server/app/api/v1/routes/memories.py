from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_memories():
    return {"message": "Get memories"}