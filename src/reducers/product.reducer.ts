import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Product } from '../models/product.model';
import { Action } from '../actions';
import * as ProductsAction from '../actions/products.action'

export interface ProductState extends EntityState<Product> {

}

export const productAdapter: EntityAdapter<Product> = createEntityAdapter({
  selectId: (product: Product) => product.id
});
export const initialState: ProductState = productAdapter.getInitialState();

export function productReducer(state: ProductState = initialState, action: Action): ProductState {

  switch (action.type) {

    case ProductsAction.LIST_PRODUCT_COMPLETE: {
      const products = action.payload.products;
      return productAdapter.addMany(products, state);
    }

    case ProductsAction.ADD_PRODUCT: {
      const product = action.payload;
      return productAdapter.addOne(product, state);
    }

    case ProductsAction.DELETE_PRODUCT: {
      const product = action.payload;
      const productId = product.id;
      return productAdapter.removeOne(productId, state);
    }

    default :
      return state;
  }
}
