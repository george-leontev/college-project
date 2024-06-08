from src.data_access.init_database import init_database

from fastapi import FastAPI
from fastapi.responses import RedirectResponse


init_database()

app = FastAPI()

@app.get('/')
async def default():
    return RedirectResponse('/docs')
