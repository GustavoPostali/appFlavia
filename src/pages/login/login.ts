import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';

import { Facebook } from '@ionic-native/facebook';
import { TabsPage } from '../tabs/tabs';

import { UserDataProvider } from '../../providers/user-data/user-data';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	isLoggedIn : Boolean = false;
	users: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb : Facebook, public events: Events, public userDataProvider : UserDataProvider) {
  	events.subscribe('user:logout', () => {
      this.isLoggedIn = false;
      this.navCtrl.push(LoginPage);
      this.navCtrl.setRoot(LoginPage);
    });


  	fb.getLoginStatus()
  		.then(res => {
  			if(res.status === 'connected'){
  				this.isLoggedIn = true;
          this.goToTabsPage();
  			}else{
  				this.isLoggedIn = false;
  			}
  		})
  		.catch(e => console.log(e));

  }
  goToTabsPage(){
    this.navCtrl.push(TabsPage);
    this.navCtrl.setRoot(TabsPage);
  }

  login(){
  	this.fb.login(['email','public_profile'])
  		.then(res => {
  			if(res.status === 'connected'){
  				this.isLoggedIn = true;
  				this.getUserDetail(res.authResponse.userID);
          this.goToTabsPage();
  			}else{
  				this.isLoggedIn = false;
  			}
  		})
  		.catch(e => {
        this.navCtrl.popToRoot();
        console.log('Error logging into Facebook', e)
      });
  }

  getUserDetail(userid){
  	this.fb.api("/"+userid+"/?fields=email,name",["public_profile"])
  		.then( res => {
  			this.users = res;
        this.userDataProvider.setUserData(this.users.name,this.users.email);
        console.log(this.userDataProvider.getUserData());
  		})
  		.catch(e => {
  			console.log(e);
  		});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
