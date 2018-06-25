import {
  _getIsUserLoggedIn,
  _getLoggedInUser,
  _getLoggedInUserLoaded,
  _getLoggedInUserLoading,
  appReducer,
  AppState
} from "./app.reducer";
import {ActionReducerMap, createSelector} from "@ngrx/store"
import {productReducer, ProductState, productAdapter} from "./product.reducer";
import {
  _getAccessoriesProductIds,
  _getBooksProductIds,
  _getElectronicsProductIds,
  _getFurnitureProductIds,
  _getIsAllProductsLoaded,
  _getIsAllProductsLoading,
  _getLoggedInUserProductIds,
  _getOtherHouseHoldProductIds,
  _getVehiclesProductIds,
  productCategoryReducer,
  ProductCategoryState
} from "./product-category.reducer";


export interface RootState {
  appState: AppState,
  product: ProductState,
  productCategory: ProductCategoryState
}

export const rootReducer: ActionReducerMap<RootState> = {
  appState: appReducer,
  product: productReducer,
  productCategory: productCategoryReducer
};

// App state selectors
export const getAppState = (state: RootState) => state.appState;
export const getIsUserLoggedIn = createSelector(getAppState, _getIsUserLoggedIn);
export const getLoggedInUser = createSelector(getAppState, _getLoggedInUser);
export const getLoggedInUserLoading = createSelector(getAppState, _getLoggedInUserLoading);
export const getLoggedInUserLoaded = createSelector(getAppState, _getLoggedInUserLoaded);

// Product Entity selectors;
export const getProductState = (state: RootState) => state.product;
export const {
  selectIds: getProductIds,
  selectEntities: getProductEntities,
  selectAll: getAllProducts,
  selectTotal: getTotalProducts,
} = productAdapter.getSelectors(getProductState);

// Product category selectors
export const getProductsCategoryState = (state: RootState) => state.productCategory;
export const getIsAllProductsLoaded = createSelector(getProductsCategoryState, _getIsAllProductsLoaded);
export const getIsAllProductsLoading = createSelector(getProductsCategoryState, _getIsAllProductsLoading);
export const getLoggedInUserProductIds = createSelector(getProductsCategoryState, _getLoggedInUserProductIds);
export const getFurnitureProductIds = createSelector(getProductsCategoryState, _getFurnitureProductIds);
export const getElectronicsProductIds = createSelector(getProductsCategoryState, _getElectronicsProductIds);
export const getVehiclesProductIds = createSelector(getProductsCategoryState, _getVehiclesProductIds);
export const getBooksProductIds = createSelector(getProductsCategoryState, _getBooksProductIds);
export const getAccessoriesProductIds = createSelector(getProductsCategoryState, _getAccessoriesProductIds);
export const getOtherHouseHoldProductIds = createSelector(getProductsCategoryState, _getOtherHouseHoldProductIds);

export const getLoggedInUserProducts =
  createSelector(getLoggedInUserProductIds,
    getProductEntities,
    (ids, entities) => ids.map(id => entities[id]).filter(prod => !!prod)
  );
export const getFurnitureProducts =
  createSelector(getFurnitureProductIds,
    getProductEntities,
    (ids, entities) => ids.map(id => entities[id]).filter(prod => !!prod)
  );
export const getElectronicsProducts =
  createSelector(getElectronicsProductIds,
    getProductEntities,
    (ids, entities) => ids.map(id => entities[id]).filter(prod => !!prod)
  );
export const getVehiclesProducts =
  createSelector(getVehiclesProductIds,
    getProductEntities,
    (ids, entities) => ids.map(id => entities[id]).filter(prod => !!prod)
  );
export const getBooksProducts =
  createSelector(getBooksProductIds,
    getProductEntities,
    (ids, entities) => ids.map(id => entities[id]).filter(prod => !!prod)
  );
export const getAccessoriesProducts =
  createSelector(getAccessoriesProductIds,
    getProductEntities,
    (ids, entities) => ids.map(id => entities[id]).filter(prod => !!prod)
  );
export const getOtherHouseHoldProducts =
  createSelector(getOtherHouseHoldProductIds,
    getProductEntities,
    (ids, entities) => ids.map(id => entities[id]).filter(prod => !!prod)
  );


