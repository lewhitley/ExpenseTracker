export const CREATE_EXPENSE = "CREATE_EXPENSE";
export const UPDATE_EXPENSE = "UPDATE_EXPENSE";
export const DELETE_EXPENSE = "DELETE_EXPENSE";
export const FETCH_EXPENSES = "FETCH_EXPENSES";
export const FETCH_ADMIN_EXPENSES = "FETCH_ADMIN_EXPENSES";
export const RECEIVE_EXPENSES = "RECEIVE_EXPENSES";
export const RECEIVE_ADMIN_EXPENSES = "RECEIVE_ADMIN_EXPENSES";

export const createExpense = expense => ({
  type: CREATE_EXPENSE,
  expense
});

export const updateExpense = expense => ({
  type: UPDATE_EXPENSE,
  expense
});

export const deleteExpense = id => ({
  type: DELETE_EXPENSE,
  id
});

export const fetchExpenses = () => ({
  type: FETCH_EXPENSES
});

export const fetchAdminExpenses = () => ({
  type: FETCH_ADMIN_EXPENSES
});

export const receiveExpenses = expenses => ({
  type: RECEIVE_EXPENSES,
  expenses
});

export const receiveAdminExpenses = expenses => ({
  type: RECEIVE_ADMIN_EXPENSES,
  expenses
});
