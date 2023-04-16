import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  UserState,
  UserActionTypes,
} from "./userTypes";

const initialState: UserState = {
  email: "",
  password: "",
  fullName: "",
  profileImage: "",
  isLoading: false,
};

const userReducer = (
  state = initialState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        // isLoading: false,
        error: undefined,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
