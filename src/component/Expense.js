export function Expense({ expense, onDeleteItem }) {
  return (
    <li>
      <span>{expense.description}</span>
      <span>₦{expense.amount}</span>
      <span>{expense.category}</span>
      <button
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => onDeleteItem(expense.id)}
      >
        ❌
      </button>
    </li>
  );
}
