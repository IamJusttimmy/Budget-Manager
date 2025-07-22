import { Button } from "../App";

export function SetBudget({
  budgetFor,
  budget,
  setBudget,
  setBudgetFor,
  onSubmit,
}) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Budget for:</label>
        <input
          type="text"
          value={budgetFor}
          onChange={(e) => setBudgetFor(e.target.value)}
        />

        <label>Budget(₦):</label>
        <input
          type="number"
          placeholder="0"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
        />

        <Button>Set Budget</Button>
      </form>
    </div>
  );
}
