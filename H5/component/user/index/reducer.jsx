import { USER_INIT } from './action';

export const userIndex = (state={},action) => {
  switch(action.type){
      case USER_INIT:
          return Object.assign({},state,action.user);
      default :
          return state;
  }
};