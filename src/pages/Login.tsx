import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addEmail } from '../redux/actions';
import { FormType, initialFormState } from '../utils/types';
import loginImage from '../images/login2.png';
import * as S from '../styles/styles';

function Login() {
  const [form, setForm] = useState<FormType>(initialFormState);
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const isValid = form.password.length >= 6 && form.email.match(regex);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <S.Main>
      <S.Form
        onSubmit={ (event) => {
          event.preventDefault();
          dispatch(addEmail(form));
          navigate('/carteira');
        } }
      >
        <h1>TrybeWallet</h1>
        <img src={ loginImage } alt="Login" />
        <div>
          <h3>Login:</h3>
          <input
            data-testid="email-input"
            type="email"
            name="email"
            onChange={ handleChange }
            placeholder="E-mail"
          />
        </div>
        <div>
          <h3>Password:</h3>
          <input
            data-testid="password-input"
            type="password"
            name="password"
            onChange={ handleChange }
          />
        </div>
        <button disabled={ !isValid }>Entrar</button>
      </S.Form>
    </S.Main>
  );
}

export default Login;
