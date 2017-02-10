export const expenseArray = expenses => (
  Object.keys(expenses).map(key => expenses[key])
);
