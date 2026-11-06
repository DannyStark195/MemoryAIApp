from fastapi import FastAPI, Request
from fastapi.exceptions import RequestValidationError
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from starlette.exceptions import HTTPException as StarletteHTTPException

from app.core.config import settings
from app.core.exceptions import APIException
from app.api.v1.router import router


app = FastAPI(
    title=settings.APP_NAME,
    debug=settings.DEBUG
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.exception_handler(APIException)
async def api_exception_handler(
    request: Request,
    exc: APIException
):
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "success": False,
            "message": exc.message,
            "error": {
                "code": exc.code,
                "details": exc.details
            }
        }
    )


@app.exception_handler(StarletteHTTPException)
async def http_exception_handler(
    request: Request,
    exc: StarletteHTTPException
):
    return JSONResponse(
        status_code=exc.status_code,
        headers=exc.headers,
        content={
            "success": False,
            "message": str(exc.detail),
            "error": {
                "code": f"HTTP_{exc.status_code}",
                "details": None
            }
        }
    )

@app.exception_handler(RequestValidationError)
async def validation_exception_handler(
    request: Request,
    exc: RequestValidationError
):
    return JSONResponse(
        status_code=422,
        content={
            "success": False,
            "message": "Request validation failed",
            "error": {
                "code": "VALIDATION_ERROR",
                "details": exc.errors()
            }
        }
    )


@app.exception_handler(Exception)
async def general_exception_handler(
    request: Request,
    exc: Exception
):
    # Log the exception in production.
    return JSONResponse(
        status_code=500,
        content={
            "success": False,
            "message": "An unexpected server error occurred",
            "error": {
                "code": "INTERNAL_SERVER_ERROR",
                "details": None
            }
        }
    )


# Health check
@app.get("/")
async def root():
    return {
        "success": True,
        "message": "Recall API is running",
        "data": None
    }

app.include_router(
    router,
    prefix="/api/v1"
)