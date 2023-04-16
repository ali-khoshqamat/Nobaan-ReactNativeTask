export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export interface UserState {
  email: string;
  password: string;
  fullName: string;
  isLoading: boolean;
  profileImage: string;
  error?: string;
}

interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
  payload: UserState;
}

interface RegisterFailureAction {
  type: typeof REGISTER_FAILURE;
  payload: string;
}

export type UserActionTypes = RegisterSuccessAction | RegisterFailureAction;
