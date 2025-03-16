from fastapi import FastAPI
from app.api import tax

app = FastAPI()

app.include_router(tax.router)

@app.get("/")
def read_root():
    return {"message": "Tax AI Filing API is running!"}
