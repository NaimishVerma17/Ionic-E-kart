import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadedItemsPage } from './uploaded-items';

@NgModule({
  declarations: [
    UploadedItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(UploadedItemsPage),
  ],
})
export class UploadedItemsPageModule {}
