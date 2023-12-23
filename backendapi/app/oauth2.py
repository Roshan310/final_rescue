from datetime import datetime, timedelta
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from fastapi import Depends, HTTPException, status
from sqlalchemy.orm import Session
from . import database, models, schemas

oauth2_scheme = OAuth2PasswordBearer('/login')

ALGORITHM = 'HS256'
SECRET_KEY = 'thisisnotsecretpleaseforgiveme'
ACCESS_TOKEN_EXPIRE_MINUTES = 30

def create_token(data: dict):
    to_encode = data.copy()
    
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({'exp': expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def verify_token(token: str, credential_exception):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        id = payload.get("user_id")
        if id is None:
            raise credential_exception
        token_data = schemas.TokenData(id=id)

    except JWTError:
        raise credential_exception

    return token_data

def get_current_user(token: str = Depends(oauth2_scheme), db: Session = database.get_db):
    credential_exception = HTTPException(status_code = status.HTTP_401_UNAUTHORIZED, detail='Not authenticated')
    token_data = verify_token(token, credential_exception)
    user = db.query(models.User).filter(models.User.id == token_data.id).first()
    return user
