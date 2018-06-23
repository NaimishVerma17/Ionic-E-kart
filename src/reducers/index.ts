import {
  _getIsUserLoggedIn,
  _getLoggedInUser,
  _getLoggedInUserLoaded,
  _getLoggedInUserLoading,
  appReducer,
  AppState
} from "./app.reducer";
import {ActionReducerMap, createSelector} from "@ngrx/store"
import {productReducer, ProductState} from "./product.reducer";
import {productCategoryReducer, ProductCategoryState} from "./product-category.reducer";


export interface RootState {
  appState: AppState,
  product:ProductState,
  productCategory:ProductCategoryState
}

export const rootReducer: ActionReducerMap<RootState> = {
  appState: appReducer,
  product:productReducer,
  productCategory:productCategoryReducer
};

export const getAppState = (state: RootState) => state.appState;
export const getIsUserLoggedIn = createSelector(getAppState, _getIsUserLoggedIn);
export const getLoggedInUser = createSelector(getAppState, _getLoggedInUser);
export const getLoggedInUserLoading = createSelector(getAppState, _getLoggedInUserLoading);
export const getLoggedInUserLoaded = createSelector(getAppState, _getLoggedInUserLoaded);
