import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';
import * as S from '../styles/styles';

function Wallet() {
  return (
    <>
      <Header />
      <S.Main>
        <section>
          <div>
            <Table />
          </div>
          <div>
            <WalletForm />
          </div>
        </section>
      </S.Main>
    </>
  );
}

export default Wallet;
