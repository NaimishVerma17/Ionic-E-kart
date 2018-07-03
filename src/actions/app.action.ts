import { Action } from "./index";
import { User } from "../models/user.model";

export const LOGIN = "[Login] login";
export const LOGIN_SUCCESS = "[Login] success";
export const LOGIN_FAIL = "[Login] fail";
export const LOGOUT_SUCCESS = "[Logout] success";

export class Login implements Action {
  readonly type = LOGIN;
}

export class LoginComplete implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: User) {
  }
}

export class LoginFiled implements Action {
  readonly type = LOGIN_FAIL;
}

export class LogoutSuccess implements Action {
  readonly type = LOGOUT_SUCCESS;
}

