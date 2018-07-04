import { Component } from "@angular/core";
import { ActionSheetController, NavParams, ViewController } from "ionic-angular";
import { Product } from "../../models/product.model";

@Component({
  selector: "page-product-details",
  templateUrl: "product-details.html",
})
export class ProductDetailsPage {
  product: Product;

  constructor(public navParams: NavParams,
              private viewCtrl: ViewController,
              private actionSheetCtrl:ActionSheetController) {
    this.product = this.navParams.get("product");
    console.log(this.product)
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  purchaseClicked(){

  }
}
