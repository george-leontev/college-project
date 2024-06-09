from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import RedirectResponse

from src.data_access.init_database import init_database
from src.routers.product_router import router as product_router
from fastapi.staticfiles import StaticFiles


init_database()

app = FastAPI(title="KIT college project")

origins = [
    "http://localhost:3000",
    "http://91.144.143.40:15020"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/", tags=["Root"])
async def default():
    return RedirectResponse("/docs")

app.include_router(product_router)