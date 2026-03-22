from pydantic import BaseModel, EmailStr
from datetime import date

class EmployeeCreate(BaseModel):
    employee_id: str
    name: str
    email: EmailStr
    department: str


class AttendanceCreate(BaseModel):
    employee_id: str   # string
    date: date
    status: str