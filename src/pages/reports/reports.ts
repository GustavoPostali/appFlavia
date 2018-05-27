import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FormPage } from '../form/form';

@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html'
})
export class ReportsPage {

  constructor(public navCtrl: NavController) {
  }


  goToFormPage(){
    this.navCtrl.push(FormPage);
  }
}
