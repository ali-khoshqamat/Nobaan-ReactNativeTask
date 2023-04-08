import {
  UserActionTypes,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  UserState,
} from "./userTypes";

export const registerSuccess = (user: UserState): UserActionTypes => {
  return {
    type: REGISTER_SUCCESS,
    payload: user,
  };
};

export const registerFailure = (error: string): UserActionTypes => {
  return {
    type: REGISTER_FAILURE,
    payload: error,
  };
};

export const register = (user: UserState) => async (dispatch: any) => {
  try {
    // Make API call to register user
    // ...

    dispatch(registerSuccess(user));
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};



export const updateUserProfile = (user: UserState): UserActionTypes => {
  return {
    type: REGISTER_SUCCESS,
    payload: user,
  };
};
