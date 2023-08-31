import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type FormType = {
  email: string;
  password: string;
};

export type WalletType = {
  currencies: [string], // array de string
  expenses: [{
    id: object,
    value: object,
    currency: object,
    method: object,
    tag: object,
    description: object,
    exchangeRates: object,
  }],
  editor: boolean,
  idToEdit: number,
};

export const initialFormState = {
  email: '',
  password: '',
};

export type ReduxState = {
  user: FormType,
  wallet: WalletType,
};

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;
