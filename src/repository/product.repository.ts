import { Injectable } from "@angular/core";
import {
  getAccessoriesProducts,
  getBooksProducts,
  getElectronicsProducts,
  getFurnitureProducts,
  getIsAllProductsLoaded,
  getIsAllProductsLoading,
  getLoggedInUser, getLoggedInUserProducts,
  getOtherHouseHoldProducts,
  getVehiclesProducts,
  RootState
} from "../reducers";
import { Store } from "@ngrx/store";
import { User } from "../models/user.model";
import { Categories, Product } from "../models/product.model";
import { CommonUtils } from "../utils/common.utils";
import {
  AddProduct,
  DeleteProduct,
  ListProductComplete,
  ListProductSent
} from "../actions/products.action";
import { AppService } from "../services/app.service";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subject } from "rxjs/Subject";

@Injectable()
export class ProductRepository {

  userId: string;

  constructor(private store: Store<RootState>,
              private appService: AppService) {
    this.store.select(getLoggedInUser).subscribe((user: User) => {
      if (user) {
        this.userId = user.id;
      }
    });
  }

  addProduct(productInfo: any) {
    if (!productInfo) {
      return;
    }
    let result = new BehaviorSubject<boolean>(false);
    let productDetails: Product = {
      ...productInfo,
      userId: this.userId,
      id: CommonUtils.generateRandomId(15)
    };
    this.appService.set(productDetails).then(() => {
      this.store.dispatch(new AddProduct(productDetails));
      result.next(true);
    }).catch(e => result.next(false));
    return result as Observable<boolean>;
  }

  fetchProducts() {
    let productsLoaded$ = this.store.select(getIsAllProductsLoaded);
    let productsLoading$ = this.store.select(getIsAllProductsLoading);

    productsLoaded$.combineLatest(productsLoading$, (loaded, loading) => loaded || loading)
      .take(1)
      .subscribe(status => {
        if (!status) {
          this.store.dispatch(new ListProductSent());
          this.appService.getProductRef().on("value", products => {
            if (products.val()) {
              const productItems = products.val();
              let productkeys = Object.keys(productItems);
              let productValues = productkeys.map(key => productItems[key]);
              this.store.dispatch(new ListProductComplete({products: productValues, loggedInUserId: this.userId}));
            }

          });
        }
      });

  }

  getLoggedInUserProducts(): Observable<Product[]> {
    return this.store.select(getLoggedInUserProducts);
  }

  getCategoryProducts(category: string) {
    if (category === Categories.CATEGORY_ACCESSORIES)
      return this.store.select(getAccessoriesProducts);
    else if (category === Categories.CATEGORY_BOOKS)
      return this.store.select(getBooksProducts);
    else if (category === Categories.CATEGORY_ELECTRONICS)
      return this.store.select(getElectronicsProducts);
    else if (category === Categories.CATEGORY_FURNITURE)
      return this.store.select(getFurnitureProducts);
    else if (category === Categories.CATEGORY_VEHICLES)
      return this.store.select(getVehiclesProducts);
    else
      return this.store.select(getOtherHouseHoldProducts);
  }

  getUserDetails(uid: string): Observable<User> {
    let userDetails = new BehaviorSubject<User>(null);
    this.appService.getUserDetailRef(uid).on("value", (user) => {
      userDetails.next(user.val() as User);
    });
    return userDetails as Observable<User>;
  }

  deleteProduct(prod: Product): Observable<boolean> {
    let res = new Subject<boolean>();
    this.appService.getProductRef().child(prod.id).remove().then(s => {
      this.store.dispatch(new DeleteProduct(prod));
      res.next(true);
    }).catch(e => res.next(false));
    return res as Observable<boolean>
  }

}
