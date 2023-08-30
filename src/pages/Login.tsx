import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addEmail } from '../redux/actions';
import { FormType, initialFormState } from '../utils/types';

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
    <form
      onSubmit={ (event) => {
        event.preventDefault();
        dispatch(addEmail(form));
        navigate('/carteira');
      } }
    >
      <img src="" alt="" />
      <input
        data-testid="email-input"
        type="email"
        name="email"
        onChange={ handleChange }
      />
      <input
        data-testid="password-input"
        type="password"
        name="password"
        onChange={ handleChange }
      />
      <button disabled={ !isValid }>Entrar</button>
    </form>
  );
}

export default Login;
