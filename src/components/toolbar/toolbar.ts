import {Component, Input} from '@angular/core';

@Component({
  selector: 'ek-toolbar',
  template:`
  <ion-header>
    <ion-navbar>
      <div class="navbar-container">
        <div *ngIf="showMenuIcon">
          <ion-buttons >
            <ion-icon name="menu"></ion-icon>
          </ion-buttons>
        </div>
        <div class="navbar-container__title">
          <ion-title text-center text-sm>
            {{toolbarTitle}}
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
