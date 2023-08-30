import { styled } from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.colors.photo_background};
  border: 1px solid black;
  border-radius: 5px;
  border-color: ${(props) => props.theme.colors.main_text_color};
  width: 500px;
  height: 500px;

  & h1 {
    font-size: 40px;
    color: ${(props) => props.theme.colors.text_details};
  }
  
  & img {
    width: 200px;
  }

  & button {
    border: none;
    border-radius: 3px;
    color: ${(props) => props.theme.colors.main_text_color};
    background-color: ${(props) => props.theme.colors.loginBtn_color};
    width: 100px;
    height: 30px;
    margin-top: 10px;
    font-size: 20px;
    transition: 0.3s ease;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;
