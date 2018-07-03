import { Injectable } from "@angular/core";
import { getLoggedInUser, RootState } from "../reducers";
import { Store } from "@ngrx/store";
import { User } from "../models/user.model";

@Injectable()
export class ProductRepository {

  userId: string;

  constructor(private store: Store<RootState>) {
    this.store.select(getLoggedInUser).subscribe((user: User) => {
      this.userId = user.id;
    })
  }

  addProduct(productInfo: any) {

  }

}
