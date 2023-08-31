import { ReduxState, Dispatch } from '../../utils/types';
import { getPrices } from '../../utils/functions';

export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFULL = 'REQUEST_SUCCESSFULL';

export const addEmail = (payload: object) => ({
  type: ADD_EMAIL,
  payload,
});

export const addExpense = (payload: object) => ({
  type: ADD_EXPENSE,
  payload,
});

export const requestStarted = () => {
  return { type: REQUEST_STARTED };
};

export const requestSuccessfull = (payload: object) => {
  return {
    type: REQUEST_SUCCESSFULL,
    payload,
  };
};

type GetState = () => ReduxState;

export const fetchPrices = () => {
  return async (dispatch: Dispatch) => {
    dispatch(requestStarted());

    const prices = await getPrices();
    delete prices.USDT;
    const coins = Object.keys(prices);
    dispatch(requestSuccessfull(coins));
  };
};
