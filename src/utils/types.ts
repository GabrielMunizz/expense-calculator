export type FormType = {
  email: string;
  password: string;
};

export const initialFormState = {
  email: '',
  password: '',
};

export type ReduxState = {
  user: FormType,
};
