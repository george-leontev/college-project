from fastapi import FastAPI


app = FastAPI()

@app.get('/')
async def default():
    return 'Hello world'
