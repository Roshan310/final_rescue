from sqlalchemy.orm import Session
from typing import List
from .. import hashing, models
from fastapi import APIRouter, Depends
from ..database import get_db

from ..schemas import UserCreate, UserOut


router = APIRouter(prefix='/users')

@router.get('/', response_model=List[UserOut])
def get_all_users(db: Session = Depends(get_db)):
    users = db.query(models.User).all()
    return users

@router.post('/', response_model=UserOut)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    user.password = hashing.hash(user.password)
    new_user = models.User(**user.model_dump())
    db.add(new_user)
    db.commit()
    return new_user


