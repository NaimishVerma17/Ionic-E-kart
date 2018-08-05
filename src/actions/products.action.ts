import {Action} from './index';
import {Product} from '../models/product.model';

export const ADD_PRODUCT = '[Product] Add Product';
export const DELETE_PRODUCT = '[Product] Delete Product';
export const LIST_PRODUCT_COMPLETE = '[Product] List Product Complete';
export const LIST_PRODUCT_SENT = '[Product] List Product Sent';


export class AddProduct implements Action {
  readonly type = ADD_PRODUCT;

  constructor(public payload: Product) {
  }
}

export class DeleteProduct implements Action {
  readonly type = DELETE_PRODUCT;

  constructor(public payload: Product) {
  }
}

export class ListProductSent implements Action {
  readonly type = LIST_PRODUCT_SENT;
}

export class ListProductComplete implements Action {
  readonly type = LIST_PRODUCT_COMPLETE;

  constructor(public payload: { products: Product[], loggedInUserId: string }) {
  }
}
