from sqlalchemy import String, Integer
from sqlalchemy.orm import Mapped, mapped_column

from src.data_models.base_data_model import BaseDataModel



class ProductDataModel(BaseDataModel):
    __tablename__ = "product"
    __table_args__ = {"schema": "business"}

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(32))
    breed: Mapped[str] = mapped_column(String(32))
    specialization: Mapped[str] = mapped_column(String(64))
    age: Mapped[str] = mapped_column(String(32))
    homeland: Mapped[str] = mapped_column(String(32))
    full_description: Mapped[str] = mapped_column(String(512))
    image: Mapped[str] = mapped_column(String(64))
