import { useState } from "react";
import { ExpenseList } from "./component/ExpenseList";
import { AddExpense } from "./component/AddExpense";
import { BudgetSummary } from "./component/BudgetSummary";
import { SetBudget } from "./component/SetBudget";
import { Logo } from "./component/Logo";

export function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export default function App() {
  const [budget, setBudget] = useState("");
  const [budgetFor, setBudgetFor] = useState("");
  const [isBudgetset, setIsBudgetSet] = useState(false);
  const [expenses, setExpenses] = useState([]);

  function handleAddBudget(e) {
    e.preventDefault();
    if (!budgetFor || !budget) {
      window.confirm("Add a budget");
      return;
    }
    if (budgetFor && budget) {
      setIsBudgetSet(true);
    }
  }

  function handleAddExpense(expense) {
    setExpenses((expenses) => [...expenses, expense]);
  }

  function handleDeleteItem(id) {
    setExpenses((expense) => expense.filter((expense) => expense.id !== id));
  }

  function setNewBudget() {
    const confirm = window.confirm("Want to set a new budget?");
    if (confirm) {
      setBudget("");
      setBudgetFor("");
      setIsBudgetSet(false);
      setExpenses([]);
    }
  }

  return (
    <div className="app-container">
      <Logo />
      {!isBudgetset && (
        <SetBudget
          budgetFor={budgetFor}
          budget={budget}
          setBudget={setBudget}
          setBudgetFor={setBudgetFor}
          onSubmit={handleAddBudget}
        />
      )}
      {isBudgetset && (
        <div>
          <BudgetSummary
            budget={budget}
            budgetFor={budgetFor}
            expense={expenses}
          />
          <AddExpense onAddExpenses={handleAddExpense} />
          {expenses.length > 0 && (
            <ExpenseList expenses={expenses} onDeleteItem={handleDeleteItem} />
          )}
          <Button onClick={setNewBudget}>Set New Budget</Button>
        </div>
      )}
    </div>
  );
}
