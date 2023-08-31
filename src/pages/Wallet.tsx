import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import * as S from '../styles/styles';

function Wallet() {
  return (
    <>
      <Header />
      <S.Main>
        <WalletForm />
      </S.Main>
    </>
  );
}

export default Wallet;
