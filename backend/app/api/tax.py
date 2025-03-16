from fastapi import APIRouter
from app.services.tax_engine import calculate_tax

router = APIRouter()

@router.get("/calculate-tax/")
def calculate(user_income: float, tax_withheld: float):
    refund = calculate_tax(user_income, tax_withheld)
    return {"estimated_refund": refund}
