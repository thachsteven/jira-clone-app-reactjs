import { USLOGIN } from '../constants/Jira/Jira';

const { USER_LOGIN } = require('../../util/constants/settingSystem');

let usLogin = {};

if (localStorage.getItem(USER_LOGIN)) {
  usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userLogin: usLogin,
};

export const UserLoginJiraReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case USLOGIN: {
      state.userLogin = action.userLogin;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
