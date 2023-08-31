import { useSelector } from 'react-redux';
import * as S from '../styles/styles';
import trybeLogo from '../images/trybeLogo.jpeg';
import { ReduxState } from '../utils/types';

function Header() {
  const { user } = useSelector((state: ReduxState) => state);
  return (
    <S.Header>
      <img src={ trybeLogo } alt="Trybe Logo" />
      <h1>TrybeWallet</h1>
      <section className="infoContent">
        <div className="userInfoContainer">
          <h3>E-mail: </h3>
          <h3 data-testid="email-field">{user.email}</h3>
        </div>
        <div className="expenseContainer">
          <h3>Despesa:</h3>
          <h3 data-testid="total-field">0</h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </div>
      </section>
    </S.Header>
  );
}

export default Header;
