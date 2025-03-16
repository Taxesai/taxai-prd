def calculate_tax(income, tax_withheld):
    tax_rate = 0.1  # Simplified tax rate
    estimated_tax = income * tax_rate
    return tax_withheld - estimated_tax
