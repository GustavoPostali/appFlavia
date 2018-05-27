import { Injectable } from '@angular/core';

/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const userData_key_string: string = 'userData';


@Injectable()
export class UserDataProvider {


  constructor() {

  }

  setUserData(userName?:string, userEmail?:string){
  	let userData: any = {
  		userName: '',
  		userEmail: ''
  	}
  	if(userName){
  		userData.userName = userName;
  	}
  	if(userEmail){
  		userData.userEmail = userEmail;	
  	}
  	localStorage.setItem(userData_key_string,JSON.stringify(userData));
  	
  }

  getUserData(): any{
  	return JSON.parse(localStorage.getItem(userData_key_string));
  }
  clearUserData(): any{
  	this.setUserData('','');
  }

}
