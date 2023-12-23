from sqlalchemy import Column, Integer, String, Integer
from app.database import Base

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, nullable=False, unique=True, primary_key=True)
    name = Column(Integer, nullable=False)
    email = Column(String, nullable=True)
    password = Column(String, nullable=False)


class News(Base):
    __tablename__ = 'news'

    id = Column(Integer, nullable=False, unique=True, primary_key=True)
    news_link = Column(String, nullable=False)
    news_title = Column(String, nullable=False)
    news_info = Column(String, nullable=False)

# class Location(Base):
#     __tablename__ = 'location'

#     id = Column(Integer, nullable=False, unique=True, primary_key=True)
#     latitude = Column(String, nullable=False)
#     longitude = Column(String, nullable=False)






