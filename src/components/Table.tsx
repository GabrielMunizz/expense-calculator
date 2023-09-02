import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, ReduxState } from '../utils/types';
import { filterExpenses } from '../redux/actions';

function Table() {
  const expenses = useSelector((state: ReduxState) => state.wallet.expenses);
  const dispatch: Dispatch = useDispatch();
  const handleDelete = (id: number) => {
    const filteredExpenses = expenses.filter(
      (expense) => Number(expense.id) !== id,
    );
    dispatch(filterExpenses(filteredExpenses));
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={ expense.id }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{Number(expense.value).toFixed(2)}</td>
            <td>{expense.currency}</td>
            <td>
              {Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}
            </td>
            <td>
              {(
                Number(expense.exchangeRates[expense.currency].ask)
                * Number(expense.value)
              ).toFixed(2)}
            </td>
            <td>{expense.exchangeRates[expense.currency].name}</td>
            <td>
              <button onClick={ () => handleDelete(expense.id) } data-testid="delete-btn">
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
