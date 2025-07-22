import { Expense } from "./Expense";

export function ExpenseList({ expenses, onDeleteItem }) {
  return (
    <div className="ExpenseList">
      <h2>📝 Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <Expense
            key={expense.id}
            expense={expense}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
}
