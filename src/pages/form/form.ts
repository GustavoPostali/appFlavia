import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { UserDataProvider } from '../../providers/user-data/user-data';
/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {

  teste = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private http : HttpClient, private userDataProvider : UserDataProvider, public alertCtrl : AlertController) {
  }

  submitForm(){
  	let form = this.userDataProvider.getUserData();
    let headers = new HttpHeaders().set('Content-Type','application/json');

    this.http.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify(form), { headers })
      .subscribe(res => {
        this.teste = JSON.stringify(res);
        console.log(res);
      }, err => {
        let alert = this.alertCtrl.create({
        title : 'Problema de conexão',
        subTitle : 'Verifique a conexão com a internet e tente novamente',
        buttons : [{
          text : 'Ok',
          handler : () => {
            let navTransition = alert.dismiss();
          }
        }]
      })
      alert.present();
      })
    }
  }
