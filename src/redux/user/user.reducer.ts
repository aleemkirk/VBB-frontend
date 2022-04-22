import { LOGOUT, LogoutAction } from '../logout/logout.types';
import { UserActions, SET_USER, User } from './user.types';

const initUser = {
  email: '',
  name: '',
  username: '',
  timeZone: '',
  dateOfBirth: '',
  isStudent: false,
  isLibrarian: false,
  isMentor: false,
};

export const user = (
  state = initUser,
  action: UserActions | LogoutAction
): User => {
  switch (action.type) {
    case LOGOUT:
      return initUser;
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};
