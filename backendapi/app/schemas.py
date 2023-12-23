from pydantic import BaseModel, EmailStr
from typing import Optional


class UserCreate(BaseModel):
    name: str
    email: EmailStr 
    password: str

class UserLogin(BaseModel):
    name: str
    password: str

class UserOut(BaseModel):
    name: str

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    id: Optional[int] = None

class Location(BaseModel):
    latitude: str
    longitude: str