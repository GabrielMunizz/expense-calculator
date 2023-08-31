import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Dispatch, ReduxState } from '../utils/types';
import { fetchPrices } from '../redux/actions';

function WalletForm() {
  const dispatch: Dispatch = useDispatch();

  const coins = useSelector((state: ReduxState) => state.wallet.currencies);

  useEffect(() => {
    const addCoins = async () => {
      await dispatch(fetchPrices());
    };
    addCoins();
  }, []);

  return (
    <form>
      <h3>Valor da despesa:</h3>
      <input type="text" name="" data-testid="value-input" />
      <h3>Descrição do gasto:</h3>
      <input type="text" data-testid="description-input" />
      <label htmlFor="coins">
        Moeda:
        <select name="" id="coins">
          {coins.map((coin) => <option key={ coin } value={ coin }>{coin}</option>)}
        </select>
      </label>
    </form>
  );
}

export default WalletForm;
