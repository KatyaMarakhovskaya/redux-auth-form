import {AUTH_CHANGE_EMAIL_TXT,AUTH_CHANGE_PASS_TXT} from './actions';

const defaultState = {
  email: '',
  password: ''
};

export const authReducer = (state = defaultState, action) => {
  console.log(state)
  switch (action.type) {
    case AUTH_CHANGE_EMAIL_TXT:
      return{
        ...state,
        email:action.payload
      };

    case AUTH_CHANGE_PASS_TXT:
      return{
        ...state,
        pass:action.payload
      };

  }

  return state;
};
