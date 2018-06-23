import {Action} from "../actions";
import * as ProductsAction from "../actions/products.action"
import {Categories, Product} from "../models/product.model";

export interface ProductCategoryState {
  loggedInUserProducts: string[];
  allProductsLoaded: boolean;
  allProductsLoading: boolean;
  electronics: string[];
  furniture: string[];
  vehicles: string[];
  accessories: string[];
  books: string[];
  otherHouseHolds: string[];
}

export const initialState: ProductCategoryState = {
  loggedInUserProducts: [],
  allProductsLoaded: false,
  allProductsLoading: false,
  electronics: [],
  furniture: [],
  vehicles: [],
  accessories: [],
  books: [],
  otherHouseHolds: [],
};

export function productCategoryReducer(state: ProductCategoryState = initialState, action: Action): ProductCategoryState {
  switch (action.type) {
    case ProductsAction.LIST_PRODUCT_SENT: {
      return {
        ...state,
        allProductsLoading: true
      }
    }

    case ProductsAction.LIST_PRODUCT_COMPLETE: {
      const products = action.payload.products;
      const loggedInUserId = action.payload.loggedInUserId;
      let electronicProductsId: string[] = [];
      let furnitureProductsId: string[] = [];
      let vehiclesProductsId: string[] = [];
      let accessoriesProductsId: string[] = [];
      let booksProductsId: string[] = [];
      let otherHouseHoldProductsId: string[] = [];
      let loggedInUserProductsId: string[] = [];

      if (products) {
        products.forEach((product: Product) => {
          if (product.category === Categories.CATEGORY_ELECTRONICS)
            electronicProductsId.push(product.id);
          else if (product.category === Categories.CATEGORY_FURNITURE)
            furnitureProductsId.push(product.id);
          else if (product.category === Categories.CATEGORY_VEHICLES)
            vehiclesProductsId.push(product.id);
          else if (product.category === Categories.CATEGORY_ACCESSORIES)
            accessoriesProductsId.push(product.id);
          else if (product.category === Categories.CATEGORY_BOOKS)
            booksProductsId.push(product.id);
          else otherHouseHoldProductsId.push(product.id);
        });
      }
      loggedInUserProductsId = products
        .filter((product: Product) => product.userId === loggedInUserId)
        .map(product => product.id);

      return {
        ...state,
        loggedInUserProducts: loggedInUserProductsId,
        allProductsLoading: false,
        allProductsLoaded: true,
        electronics: electronicProductsId,
        furniture: furnitureProductsId,
        vehicles: vehiclesProductsId,
        accessories: accessoriesProductsId,
        books: booksProductsId,
        otherHouseHolds: otherHouseHoldProductsId
      };
    }

    case ProductsAction.ADD_PRODUCT: {
      const product: Product = action.payload;
      const productCategory = product.category;
      const productId = product.id;
      const savedIds = state[productCategory];
      const loggedInUserProductIds = state.loggedInUserProducts;

      return {
        ...state,
        loggedInUserProducts: [...loggedInUserProductIds, productId],
        [productCategory]: [...savedIds, productId],
      };
    }

    case ProductsAction.DELETE_PRODUCT: {
      const product: Product = action.payload;
      const productCategory = product.category;
      const productId = product.id;
      const savedIds = state[productCategory].filter(id => id !== productId);
      const loggedInUserProductIds = state.loggedInUserProducts.filter(id => id !== productId);

      return{
        ...state,
        loggedInUserProducts:loggedInUserProductIds,
        [productCategory]:savedIds
      };
    }

    default:
      return state;
  }
}
