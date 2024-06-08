import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.schema import CreateSchema
from sqlalchemy_utils import database_exists, drop_database, create_database

from src.data_models.base_data_model import BaseDataModel
from src.data_models.product_data_model import ProductDataModel

is_production = os.environ.get("ENV") == "production"

engine = create_engine(
    f"postgresql+psycopg2://postgres:abcdef@{'database-server' if is_production else 'localhost'}:5432/college_project"
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
    products = [
        ProductDataModel(
            name='Puppy guitar player',
            breed='Minidog',
            specialization='Mastering musical instruments',
            age='7 months',
            homeland='England (Eurasia)',
            full_description='The guitarist puppy is a unique and talented rocker. He loves to wag his tail and is always ready to keep company at a rehearsal or concert. But most importantly, this puppy loves music! He happily sings along to his favorite performers.',
            image="/images/guitar-dog.jpg"
        ),
        ProductDataModel(
            name='Dog soup maker',
            breed='Ultra dog',
            specialization='Culinary professor',
            age='3 year',
            homeland='San-Marina(Europe)',
            full_description='Country of origin: Russia (Eurasia). A soup cook dog is not just a pet, it is an experienced cook with exceptional abilities. She intuitively understands the perfect combination of ingredients and knows how to cook each dish to perfection using only her tongue and tail.',
            image="/images/soup-dog.jpg"
        ),
        ProductDataModel(
            name='Cat programmer',
            breed='Ultra smart cat',
            specialization='Downloading viruses.',
            age='9 months',
            homeland='USA (North America)',
            full_description='Are you dreaming of a cybersecurity specialist who will not only protect your data, but also make you laugh heartily? Meet the Programmer Cat - the most brilliant and funniest cat in the world of technology! It can turn complex security protocols into understandable comic books and vulnerability discovery into a fun game. It makes keeping your data safe a source of endless surprises and uncontrollable laughter. The cat has a disadvantage: he cannot use a computer mouse, it irritates him. But this does not prevent him from being a real expert in the field of cybersecurity.',
            image="/images/programmer-cat.png"
        ),
        ProductDataModel(
            name='Dog with sausage',
            breed='Megadog',
            specialization='Eats sausages',
            age='2.5 years',
            homeland='Austria (Europe)',
            full_description='The sausage dog is an exceptional specimen and has the softest fur. He is well trained: his favorite command is “Put it in your mouth”! And he happily performs various tricks, for example, “Give me your paw” or “Roll over to the other side.” He does not shed, does not bark, does not leave stains on the carpet, loves to hug and give his love, is always ready to keep company on a walk or on the sofa, and gets along well with children and other pets.',
            image="/images/sausage-dog.jpg"
        ),
        ProductDataModel(
            name='Champion cat',
            breed='Megacat',
            specialization='Athlete',
            age='2 years',
            homeland='Russia (Eurasia)',
            full_description='Champion Cat - This amazing cat is an unrivaled master of sports, capable of performing the most difficult exercises with amazing ease and grace. Unparalleled Athletic Abilities: Licensed professional cat athlete with years of experience. Exceptional strength, speed and endurance. Ability to perform challenging exercises including high jumping, steeplechase running and climbing walls.',
            image="/images/champion-cat.jpg"
        ),
        ProductDataModel(
            name='Kitty with hairdryer',
            breed='Minicat',
            specialization='Hair Styling',
            age='1 year',
            homeland='Colombia (South America)',
            full_description='Is a kitty with a hairdryer the perfect hair styling companion? This cat is a born hairdresser. She is charming and also has the superpower to tame the most unruly curls. Not only will it dry your hair, but it will also create stunning styling, be it elegant curls or a daring mohawk. So why settle for a regular hairdryer when you can have a fashionable and fluffy assistant? Get our blow dry kitty today and get ready for perfect styling and endless cozy moments!',
            image="/images/hairdryer-cat.jpg"
        ),
        ProductDataModel(
            name='Delivery cat',
            breed='Fastest cat',
            specialization='Car courier',
            age='2.5 year',
            homeland='El Salvador (South America)',
            full_description='Delivery cat - fast delivery and fun moments. He is an affordable way to turn your parcel delivery into an arena of courier comfort and endless laughter. Takes on all the difficult work. Our cat has a number of unique abilities that make parcel delivery special: Barking - to notify recipients that their package has arrived (or is almost there). Fluffy paws - for signing receipts in the most adorable way.',
            image="/images/delivery-cat.jpg"
        ),
        ProductDataModel(
            name='Cat-fisher.',
            breed='Megacat',
            specialization='Professionally engaged in the production of fish and seafood',
            age='1 year',
            homeland='Iceland (Europe)',
            full_description="The fisherman cat is a fluffy sea pet. Passion - fishing! Unfortunately, this cat's previous owner had to give him up due to a fish allergy. He loves to purr and rub against his legs, is always ready to keep company on a walk or on a cozy windowsill, gets along well with children and other pets, and has an inexhaustible supply of patience for tracking and catching fish. He is ready to sit for hours by an aquarium or pond, waiting for prey. If you are looking for a fun, loyal and loving pet with a unique personality, then this fishing cat will be your perfect choice!",
            image="/images/fish-cat.jpg"
        ),
        ProductDataModel(
            name='Horse + Pug',
            breed='Megamops',
            specialization='Sleeping, professionally playing with toys',
            age='2 year',
            homeland='China (Asia)',
            full_description='Country of origin: China (Asia). A pug and a horse are a unique duo: an adorable pug and his toy rocking horse. This pug is a cowboy in canine form. And his toy rocking horse is the embodiment of a childhood dream of racing across the vast prairies. P.S. The cowboy pug and the horse are only sold together as they are inseparable friends.',
            image="/images/ponny-pug.jpg"
        ),
        ProductDataModel(
            name='Miracle fish',
            breed='Comedian Fish',
            specialization='Fulfillment of desires',
            age='1 month',
            homeland='Japan (Asia)',
            full_description='Comedian Goldfish not only entertain, they are also true masters of disguise. They can turn ordinary seaweed into makeshift hats and seashells into fun glasses. These fish will take on all the hard work of entertaining you.',
            image="/images/miracle-fish.jpg"
        )
    ]
    with Session() as session:
        session.add_all(products)
        session.commit()


def init_database():
    init_schema()
    init_data()
