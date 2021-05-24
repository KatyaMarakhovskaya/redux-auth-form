import {REG_CHANGE_EMAIL_TXT,REG_CHANGE_PASS_TXT,REG_CHANGE_REPEAT_PASS_TXT} from './actions';


const defaultState = {
  email: '',
  password: '',
  repeatPassword:''
};

export const regReducer = (state = defaultState, action) => {

  console.log(state)

  switch (action.type) {
    case REG_CHANGE_EMAIL_TXT:
    return{
      ...state,
      email:action.payload
    };

    case REG_CHANGE_PASS_TXT:
    return{
      ...state,
      password:action.payload
    };

    case REG_CHANGE_REPEAT_PASS_TXT:
    return{
      ...state,
      repeatPassword:action.payload
    };
  }

  return state;
}
