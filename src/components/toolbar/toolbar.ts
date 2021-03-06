import {Component, Input} from '@angular/core';

@Component({
  selector: 'ek-toolbar',
  template:`
    <ion-header>
      <ion-navbar padding>
        <div class='navbar-container'>
          <div *ngIf='showMenuIcon'>
            <ion-buttons>
              <button ion-button menuToggle>
                <ion-icon name='menu'></ion-icon>
              </button>

            </ion-buttons>
          </div>
          <div class='navbar-container__title'>
            <ion-title text-center>
              {{toolbarTitle | uppercase}}
            </ion-title>
          </div>
        </div>
      </ion-navbar>
    </ion-header>
  `
})
export class ToolbarComponent {

  @Input() toolbarTitle:string;
  @Input() showMenuIcon:boolean;

}
