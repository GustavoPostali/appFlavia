import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Events } from 'ionic-angular';

import { Facebook } from '@ionic-native/facebook';

import { UserDataProvider } from '../../providers/user-data/user-data';


@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html'
})
export class LogoutPage {

  constructor(public navCtrl: NavController, private fb: Facebook, public events: Events, public userDataProvider : UserDataProvider) {

  }

  logout(){
  	this.fb.logout()
  		.then(res => {
        this.userDataProvider.clearUserData();
  			this.events.publish('user:logout');
  		})
  		.catch(e => console.log('Error logout from Facebook', e));
  }
}
