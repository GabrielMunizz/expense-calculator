import { AnyAction } from 'redux';
import { ADD_EMAIL } from '../actions';

const INITIAL_STATE = {    
    email: '',
    password: '',   
}

export const user = (state = INITIAL_STATE, action: AnyAction) => {
  switch(action.type) {
    case ADD_EMAIL:
      return {
        ...state,
        ...action.payload
      }
      default:
        return state;
  }
};
