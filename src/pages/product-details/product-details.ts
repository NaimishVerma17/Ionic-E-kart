import { Component } from "@angular/core";
import { NavParams, ViewController } from "ionic-angular";
import { Product } from "../../models/product.model";
import { ProductRepository } from "../../repository/product.repository";
import { User } from "../../models/user.model";
import { AppService } from "../../services/app.service";

@Component({
  selector: "page-product-details",
  templateUrl: "product-details.html",
})
export class ProductDetailsPage {
  product: Product;
  user: User;

  constructor(private navParams: NavParams,
              private viewCtrl: ViewController,
              private productRepo: ProductRepository) {

    this.product = this.navParams.get("product");

    this.productRepo.getUserDetails(this.product.userId).subscribe((user: User) => {
      this.user = user;
    });
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }
}
