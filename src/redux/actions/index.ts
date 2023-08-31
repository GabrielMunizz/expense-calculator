export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const addEmail = (payload: object) => ({
  type: ADD_EMAIL,
  payload,
});

export const addExpense = (payload: object) => ({
  type: ADD_EXPENSE,
  payload,
});
