export function Expense({ expense, onDeleteItem }) {
  return (
    <li>
      <span>{expense.description}</span>
      <span>₦{expense.amount}</span>
      <span>{expense.category}</span>
      <button onClick={() => onDeleteItem(expense.id)}>❌</button>
    </li>
  );
}
