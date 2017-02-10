export const createExpense = (expense, success) => {
  $.ajax({
    datatype: 'json',
    url: '/api/expenses',
    type: 'POST',
    data: {expense: expense},
    success
  });
};

export const updateExpense = (expense, success) => {
  $.ajax({
    datatype: 'json',
    url: `/api/expenses/${expense.id}`,
    type: 'PATCH',
    data: {expense: expense},
    success
  });
};

export const deleteExpense = (id, success) => {
  $.ajax({
    datatype: 'json',
    url: `/api/expenses/${id}`,
    type: 'DELETE',
    success
  });
};

export const fetchExpenses = (success) => {
  $.ajax({
    datatype: 'json',
    url: `/api/expenses`,
    type: 'GET',
    success
  });
};

export const adminFetchExpenses = (userId, success) => {
  $.ajax({
    datatype: 'json',
    url: `/api/expenses`,
    type: 'GET',
    data: {user_id: userId},
    success
  });
};
