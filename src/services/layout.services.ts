import {ToastController} from 'ionic-angular';
import {Injectable} from '@angular/core';

@Injectable()
export class LayoutServices {
  constructor(private toastCtrl: ToastController) {
  }

  showToast(text: string) {
    const toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
    });
    toast.present();
  }
}
