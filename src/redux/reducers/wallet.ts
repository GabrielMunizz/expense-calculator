import { AnyAction } from 'redux';
import { ADD_EXPENSE, REQUEST_SUCCESSFULL } from '../actions';

const INITIAL_WALLET = {
  currencies: [''], // array de string
  expenses: [{
    id: {},
    value: {},
    currency: {},
    method: {},
    tag: {},
    description: {},
    exchangeRates: {},
  }], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica se uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que está sendo editada
};

const wallet = (state = INITIAL_WALLET, action: AnyAction) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        ...action.payload,
      };
    case REQUEST_SUCCESSFULL:
      return {
        ...state,
        currencies: action.payload,
      };
    default:
      return state;
  }
};

export default wallet;
