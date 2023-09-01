import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  Dispatch,
  ReduxState,
  WalletFormType,
  initialWalletForm,
} from '../utils/types';
import { fetchPrices, fetchRates } from '../redux/actions';

function WalletForm() {
  const coins = useSelector((state: ReduxState) => state.wallet.currencies);
  const [walletForm, setWalletForm] = useState<WalletFormType>(initialWalletForm);
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    const addCoins = async () => {
      await dispatch(fetchPrices());
    };
    addCoins();
  }, []);

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = target;
    setWalletForm({ ...walletForm, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(fetchRates(walletForm));
    setWalletForm(initialWalletForm);
  };
  return (
    <form onSubmit={ handleSubmit }>
      <h3>Valor da despesa:</h3>
      <input
        type="text"
        name="value"
        value={ walletForm.value }
        data-testid="value-input"
        onChange={ handleChange }
      />
      <h3>Descrição do gasto:</h3>
      <input
        type="text"
        name="description"
        value={ walletForm.description }
        data-testid="description-input"
        onChange={ handleChange }
      />
      <label htmlFor="coins">
        Moeda:
        <select
          name="currency"
          id="coins"
          value={ walletForm.currency }
          data-testid="currency-input"
          onChange={ handleChange }
        >
          {coins.map((coin) => (
            <option key={ coin } value={ coin }>
              {coin}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="payMethod">
        Método de pagamento:
        <select
          name="method"
          id="payMethod"
          data-testid="method-input"
          value={ walletForm.method }
          onChange={ handleChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <label htmlFor="expenseCategory">
          <select
            name="tag"
            id="expenseCategory"
            value={ walletForm.tag }
            data-testid="tag-input"
            onChange={ handleChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </label>
      <button>Adicionar despesa</button>
    </form>
  );
}

export default WalletForm;
