from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal, engine
import models, schemas
from fastapi.middleware.cors import CORSMiddleware
models.Base.metadata.create_all(bind=engine)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all (for now)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# DB connection
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# ✅ Add Employee
@app.post("/employees")
def add_employee(emp: schemas.EmployeeCreate, db: Session = Depends(get_db)):

    # ✅ Check duplicate employee_id
    existing_id = db.query(models.Employee).filter(
        models.Employee.employee_id == emp.employee_id
    ).first()

    if existing_id:
        raise HTTPException(status_code=400, detail="Employee ID already exists")


    # ✅ Check duplicate email (optional but good)
    existing_email = db.query(models.Employee).filter(
        models.Employee.email == emp.email
    ).first()

    if existing_email:
        raise HTTPException(status_code=400, detail="Email already exists")


    # ✅ Create employee
    new_emp = models.Employee(
        employee_id=emp.employee_id,
        name=emp.name,
        email=emp.email,
        department=emp.department
    )

    db.add(new_emp)
    db.commit()
    db.refresh(new_emp)

    return new_emp


# ✅ Get Employees
@app.get("/employees")
def get_employees(db: Session = Depends(get_db)):
    return db.query(models.Employee).all()


# ✅ Delete Employee
@app.delete("/employees/{id}")
def delete_employee(id: int, db: Session = Depends(get_db)):
    emp = db.query(models.Employee).filter(models.Employee.id == id).first()
    if not emp:
        raise HTTPException(status_code=404, detail="Not found")

    db.delete(emp)
    db.commit()
    return {"message": "Deleted"}


# ✅ Add Attendance
@app.post("/attendance")
def add_attendance(att: schemas.AttendanceCreate, db: Session = Depends(get_db)):

    # ✅ Check if employee exists
    emp = db.query(models.Employee).filter(
        models.Employee.employee_id == att.employee_id
    ).first()

    if not emp:
        raise HTTPException(status_code=404, detail="Employee not found")


    # ✅ Check duplicate attendance for same date
    existing = db.query(models.Attendance).filter(
        models.Attendance.employee_id == att.employee_id,
        models.Attendance.date == att.date
    ).first()

    if existing:
        raise HTTPException(status_code=400, detail="Attendance already marked")


    # ✅ Add new attendance
    new_att = models.Attendance(
        employee_id=att.employee_id,
        date=att.date,
        status=att.status
    )

    db.add(new_att)
    db.commit()

    return new_att


# ✅ Get Attendance
@app.get("/attendance/{employee_id}")
def get_attendance(employee_id: str, db: Session = Depends(get_db)):
    
    records = db.query(models.Attendance).filter(
        models.Attendance.employee_id == employee_id
    ).all()

    if not records:
        raise HTTPException(status_code=404, detail="No attendance found")

    return records