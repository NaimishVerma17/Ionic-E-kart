import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadItemPage } from './upload-item';

@NgModule({
  declarations: [
    UploadItemPage,
  ],
  imports: [
    IonicPageModule.forChild(UploadItemPage),
  ],
})
export class UploadItemPageModule {}
