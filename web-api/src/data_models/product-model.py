from data_models.base_model import BaseDataModel

from sqlalchemy import String, Integer
from sqlalchemy.orm import Mapped, mapped_column


class ProductDataModel(BaseDataModel):
    __tablename__ = "product"

    id: Mapped[str] = mapped_column(String(64))
    name: Mapped[str] = mapped_column(String(32))
    breed: Mapped[str] = mapped_column(String(32))
    specialization: Mapped[str] = mapped_column(String(64))
    age: Mapped[str] = mapped_column(String(32))
    homeland: Mapped[str] = mapped_column(String(32))
    fullDescription: Mapped[str] = mapped_column(String(512))
    description: Mapped[str] = mapped_column(String(32))
    image: Mapped[str] = mapped_column(String(64))
