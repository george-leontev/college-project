from fastapi import FastAPI
from fastapi.responses import RedirectResponse

from src.data_access.init_database import init_database
from src.routers.product_router import router as product_router


init_database()

app = FastAPI(title="KIT college project")


@app.get("/", tags=["Root"])
async def default():
    return RedirectResponse("/docs")

app.include_router(product_router)