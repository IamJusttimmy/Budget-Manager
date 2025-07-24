import { useState } from "react";
import { Button } from "../App";

export function AddExpense({ onAddExpenses }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description || !amount)
      return window.confirm("Please fill in all fields");

    const expenseCategory = category ? category : "other";
    const newExpenses = {
      id: Date.now() + Math.random(),
      description,
      amount: Number(amount),
      category: expenseCategory,
    };

    onAddExpenses(newExpenses);
    setDescription("");
    setAmount("");
    setCategory("");
  }

  return (
    <div>
      <h2>💸 Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={30}
        />

        <label>Amount(₦):</label>
        <input
          type="number"
          placeholder="0"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <label>Category (optional):</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <Button>Add Expense</Button>
      </form>
    </div>
  );
}
