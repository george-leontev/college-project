from fastapi.routing import APIRouter

from src.data_models.product_data_model import ProductDataModel
from src.data_access.init_database import Session

router = APIRouter(prefix="/api", tags=["Products"])


@router.get("/products")
async def get_products():
    with Session() as session:
        return session.query(ProductDataModel).all()


@router.get("/products/{id}", description='Get product item by id')
async def get_product(id: int):
    with Session() as session:
        return session.query(ProductDataModel).get(id)
