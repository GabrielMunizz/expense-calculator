import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type FormType = {
  email: string;
  password: string;
};

export type WalletFormType = {
  id: number,
  value: string,
  currency: string,
  method: string,
  tag: string,
  description: string,
};

export type FilteredWallet = {
  id: number;
  value: string;
  currency: string;
  method: string;
  tag: string;
  description: string;
  exchangeRates: {
    [key: string]: {
      ask: string;
      name: string;
    };
  };
}[];

export type WalletType = {
  currencies: [string], // array de string
  expenses: [{
    id: number,
    value: string,
    currency: string,
    method: string,
    tag: string,
    description: string,
    exchangeRates: {
      [key: string]: {
        ask: string,
        name: string,
      }
    },
  }],
  editor: boolean,
  idToEdit: number,
};

export const initialFormState = {
  email: '',
  password: '',
};

export const initialWalletForm = {
  id: 0,
  value: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  description: '',
};

export type ReduxState = {
  user: FormType,
  wallet: WalletType,
};

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;
