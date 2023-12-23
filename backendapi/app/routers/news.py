from fastapi import APIRouter, Depends
from ..scraper import get_all_news
from sqlalchemy.orm import Session
from ..database import get_db
from .. import models, scraper

router = APIRouter(prefix='/news', tags=['News'])

@router.get('/')
def get_news():
    all_news = scraper.get_all_news()
    return all_news





