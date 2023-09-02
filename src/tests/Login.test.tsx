import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testes referentes a tela de Login', () => {
  it('Testa para ver se existe um título na tela de Login', () => {
    renderWithRouterAndRedux(<App />);

    const title = screen.getByRole('heading', { name: /trybewallet/i });

    expect(title).toBeInTheDocument();
  });

  it('Testa para ver se existe input de email, senha e botão de Login', () => {
    renderWithRouterAndRedux(<App />);

    const emailInput = screen.getByPlaceholderText(/E-mail/);
    const passwordInput = screen.getByTestId(/password-input/);
    const button = screen.getByRole('button', { name: /entrar/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('Testa para ver se o botão está desabilitado', async () => {
    renderWithRouterAndRedux(<App />);

    const emailInput = screen.getByPlaceholderText(/E-mail/);
    const passwordInput = screen.getByTestId('password-input');
    const button = screen.getByRole('button', { name: /entrar/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    await userEvent.click(button);

    expect(emailInput).toBeInTheDocument();
  });

  it('Testa para ver se ao digitar email no formato "teste@teste.com" e senha com 6 caracteres, o usuario vai para a tela da wallet', async () => {
    renderWithRouterAndRedux(<App />);

    const emailInput = screen.getByPlaceholderText(/E-mail/);
    const passwordInput = screen.getByTestId('password-input');
    const button = screen.getByRole('button', { name: /entrar/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    await userEvent.type(emailInput, 'teste@teste.com');
    await userEvent.type(passwordInput, '123456');
    await userEvent.click(button);

    expect(screen.getByRole('heading', { name: /teste@teste\.com/i })).toBeInTheDocument();
  });
});
