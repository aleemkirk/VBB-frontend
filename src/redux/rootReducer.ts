import { combineReducers } from 'redux';
import { user } from './user/user.reducer';

const rootReducer = combineReducers({ user });

export default rootReducer;
export type AppTate = ReturnType<typeof rootReducer>;
