from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.schema import CreateSchema
from sqlalchemy_utils import database_exists, drop_database, create_database

from src.data_models.base_data_model import BaseDataModel
from src.data_models.product_data_model import ProductDataModel


engine = create_engine(
    "postgresql+psycopg2://postgres:abcdef@college_database:5432/college_database"
)

Session = sessionmaker(bind=engine)


def init_schema():
    if database_exists(engine.url):
        drop_database(engine.url)

    create_database(engine.url)

    with engine.connect() as connection:
        connection.execute(CreateSchema("business", if_not_exists=True))
        connection.commit()

    BaseDataModel.metadata.create_all(bind=engine)


def init_data():
    with Session() as session:
        session.add_all(
            [
                ProductDataModel(
                    name="Puppy guitar player",
                    breed="Minidog",
                    specialization="Mastering musical instruments",
                    age="1 year",
                    homeland="England (Europe)",
                    full_description="The guitarist puppy is a unique and talented rocker.",
                    image="/images/guitar-dog.jpg",
                )
            ]
        )
        session.commit()


def init_database():
    init_schema()
    init_data()
