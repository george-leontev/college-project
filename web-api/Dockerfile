FROM python

WORKDIR /app

COPY requirements.txt /app

COPY src /app/src

RUN python3 -m pip install -r requirements.txt

CMD [ "uvicorn", "src.main:app", "--port", "8000", "--host", "0.0.0.0" ]
