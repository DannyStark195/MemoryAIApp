from typing import Generic, TypeVar
from pydantic import BaseModel


T = TypeVar("T")


class APIResponse(BaseModel, Generic[T]):
    success: bool
    message: str
    data: T | None = None


class ErrorDetail(BaseModel):
    code: str
    details: object | None = None


class ErrorResponse(BaseModel):
    success: bool = False
    message: str
    error: ErrorDetail