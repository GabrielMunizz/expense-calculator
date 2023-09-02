import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testes referentes ao componente Wallet', () => {
  it('Testa para ver se o componente Wallet possui os inputs: value, description, currency, method e tag', () => {
    const initialEntries = ['/carteira'];
    renderWithRouterAndRedux(<App />, { initialEntries });

    const valueInput = screen.getByTestId(/value-input/);
    const descriptionInput = screen.getByTestId(/description-input/);
    const currencyInput = screen.getByTestId(/currency-input/);
    const methodInput = screen.getByTestId(/method-input/);
    const tagInput = screen.getByTestId(/tag-input/);

    expect(valueInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(currencyInput).toBeInTheDocument();
    expect(methodInput).toBeInTheDocument();
    expect(tagInput).toBeInTheDocument();
  });

  it('Testa para ver se ao adicionar uma despesa, ela aparece no header', async () => {
    const initialEntries = ['/carteira'];
    renderWithRouterAndRedux(<App />, { initialEntries });

    const totalExpenses = screen.getByTestId('total-field');
    const valueInput = screen.getByTestId(/value-input/);
    const descriptionInput = screen.getByTestId(/description-input/);
    const currencyInput = screen.getByTestId(/currency-input/);
    const methodInput = screen.getByTestId(/method-input/);
    const tagInput = screen.getByTestId(/tag-input/);
    const addExpenseBtn = screen.getByRole('button', { name: /adicionar despesa/i });
  });
});
