import sqlite3

conn = sqlite3.connect("database/tax_filing.db")
cursor = conn.cursor()

cursor.execute('''
CREATE TABLE IF NOT EXISTS tax_filing (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_income REAL,
    tax_withheld REAL,
    estimated_refund REAL
)
''')

conn.commit()
conn.close()
