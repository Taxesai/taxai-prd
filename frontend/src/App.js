import React, { useState } from "react";

function App() {
  const [income, setIncome] = useState("");
  const [withheld, setWithheld] = useState("");
  const [refund, setRefund] = useState(null);

  const calculateTax = async () => {
    const response = await fetch(`http://127.0.0.1:8000/calculate-tax/?user_income=${income}&tax_withheld=${withheld}`);
    const data = await response.json();
    setRefund(data.estimated_refund);
  };

  return (
    <div>
      <h1>AI Tax Filing MVP</h1>
      <input type="number" placeholder="Income" onChange={(e) => setIncome(e.target.value)} />
      <input type="number" placeholder="Tax Withheld" onChange={(e) => setWithheld(e.target.value)} />
      <button onClick={calculateTax}>Calculate Refund</button>
      {refund && <p>Estimated Refund: ${refund}</p>}
    </div>
  );
}

export default App;
