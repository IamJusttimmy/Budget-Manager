export function BudgetSummary({ budget, budgetFor, expense }) {
  const totalSpent = expense.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  const remainingBudget = Number(budget) - Number(totalSpent);

  return (
    <div>
      <h2>📊 {budgetFor} Summary</h2>
      <div className="BudgetSummary">
        <span>Total Budget: ₦{budget}</span>
        <span>Total Spent: ₦{totalSpent}</span>
        <p
          className={
            remainingBudget > 0
              ? "positive"
              : remainingBudget < 0
              ? "negative"
              : ""
          }
        >
          Remaining Budget: ₦{remainingBudget}
        </p>
        {remainingBudget < 0 && (
          <p className="negative">❗❗❗You are over your budget.</p>
        )}
      </div>
    </div>
  );
}
