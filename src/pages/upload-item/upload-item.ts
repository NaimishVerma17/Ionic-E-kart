import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ProductRepository } from "../../repository/product.repository";
import { LayoutServices } from "../../services/layout.services";
import { Camera, CameraOptions } from "@ionic-native/camera";

@Component({
  selector: "page-upload-item",
  templateUrl: "upload-item.html",
})
export class UploadItemPage {

  formGroup: FormGroup;
  name: FormControl;
  category: FormControl;
  description: FormControl;
  cost: FormControl;
  imageUrl;

  constructor(private productRepo: ProductRepository, private layoutService: LayoutServices, private camera: Camera) {
    this.name = new FormControl("", [Validators.required]);
    this.category = new FormControl("", [Validators.required]);
    this.description = new FormControl("", [Validators.required]);
    this.cost = new FormControl("", [Validators.required]);
    this.formGroup = new FormGroup({
      "name": this.name,
      "category": this.category,
      "description": this.description,
      "cost": this.cost
    });
  }

  addProduct() {
    console.log(this.formGroup.value);
    let product = {
      ...this.formGroup.value,
      imageUrl: this.imageUrl
    };
    this.productRepo.addProduct(product).subscribe(status => {
      if (status) {
        this.layoutService.showToast("Product added successfully!");
        this.formGroup.reset();
      } else {
        this.layoutService.showToast("Something went wrong, please try again!");
      }
    });
  }

  takePicture() {
    const cameraConfig: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      allowEdit: true,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true
    };
    this.camera.getPicture(cameraConfig).then(imageData => {

      console.log(imageData);
      this.productRepo.uploadProductImage(imageData).subscribe(url => {
        console.log("imageurl",url);
        this.imageUrl = url;
      });
    })
  }
}
