import {SET_CURRENT_USER} from '../reducers/user';

class UserActions {
  static set = payload => (dispatch, getState) => {
    return dispatch({
      payload,
      type: SET_CURRENT_USER,
    });
  };
}

export default UserActions;
