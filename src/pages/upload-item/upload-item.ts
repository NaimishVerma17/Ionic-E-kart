import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'page-upload-item',
  templateUrl: 'upload-item.html',
})
export class UploadItemPage {

  formGroup:FormGroup;
  productName:FormControl;
  productCategory:FormControl;
  productDescription:FormControl;

  constructor() {
    this.productName=new FormControl("",[Validators.required]);
    this.productCategory=new FormControl("",[Validators.required]);
    this.productDescription=new FormControl("",[Validators.required]);
    this.formGroup=new FormGroup({
      "product_name":this.productName,
      "product_category":this.productCategory,
      "product_description":this.productDescription
    });
  }

  addProduct(){
    console.log(this.formGroup.value);
  }

}
