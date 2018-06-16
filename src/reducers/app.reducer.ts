import {User} from "../models/user.model";
import * as AppActions from '../actions/app.action'
import {Action} from "../actions";

export interface AppState {
  loggedInUser: User;
  loggedInUserLoaded: boolean,
  loggedInUserLoading: boolean,
  isLoggedIn: boolean;
}

export const initialState: AppState = {
  loggedInUser: null,
  loggedInUserLoaded: false,
  loggedInUserLoading: false,
  isLoggedIn: false
};


export function appReducer(state: AppState = initialState, action: Action): AppState {
  switch (action.type) {
    case AppActions.LOGIN_SUCCESS: {
      return {
        ...state,
        loggedInUser: action.payload,
        loggedInUserLoaded: true,
        loggedInUserLoading: false,
        isLoggedIn: true
      }
    }

    case AppActions.LOGIN: {
      return {
        ...state,
        loggedInUserLoading: true
      }
    }

    case AppActions.LOGIN_FAIL: {
      return {
        ...state,
        loggedInUserLoading: false
      }
    }
  }
}

export const _getLoggedInUser = (state: AppState) => state.loggedInUser;
export const _getLoggedInUserLoaded = (state: AppState) => state.loggedInUserLoaded;
export const _getLoggedInUserLoading = (state: AppState) => state.loggedInUserLoading;
export const _getIsUserLoggedIn = (state: AppState) => state.isLoggedIn;
