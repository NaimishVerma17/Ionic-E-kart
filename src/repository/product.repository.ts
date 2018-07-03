import { Injectable } from "@angular/core";
import {
  getIsAllProductsLoaded,
  getIsAllProductsLoading,
  getLoggedInUser,
  RootState
} from "../reducers";
import { Store } from "@ngrx/store";
import { User } from "../models/user.model";
import { Product } from "../models/product.model";
import { CommonUtils } from "../utils/common.utils";
import { AddProduct, ListProductComplete } from "../actions/products.action";
import { LayoutServices } from "../services/layout.services";
import { AppService } from "../services/app.service";

@Injectable()
export class ProductRepository {

  userId: string;

  constructor(private store: Store<RootState>,
              private appService: AppService,
              private layoutService: LayoutServices) {
    this.store.select(getLoggedInUser).subscribe((user: User) => {
      if (user) {
        //this.userId = user.id;

      }
    });
  }

  addProduct(productInfo: any) {
    let result: boolean;
    let productDetails: Product = {
      ...productInfo,
      userId: this.userId,
      id: CommonUtils.generateRandomId(15)
    };
    this.appService.set(productDetails).then(() => {
      this.store.dispatch(new AddProduct(productDetails));
      this.layoutService.showToast("Product added successfully");
    }).catch(e => this.layoutService.showToast(e.message));
  }

  fetchProducts() {
    let productsLoaded$ = this.store.select(getIsAllProductsLoaded);
    let productsLoading$ = this.store.select(getIsAllProductsLoading);

    productsLoaded$.combineLatest(productsLoading$, (loaded, loading) => loaded || loading)
      .take(1)
      .subscribe(status => {
        if (!status) {
          this.appService.getProductRef().on("value", products => {
            console.log(products.val());
            const productItems = products.val();
            let productkeys = Object.keys(productItems);
            let productValues = productkeys.map(key => productItems[key]);
            console.log(productValues);
            this.store.dispatch(new ListProductComplete({ products: productValues, loggedInUserId: this.userId }));
          });
        }
      });

  }
}
