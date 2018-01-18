import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {
  public accountInfo;
  constructor(public http: Http) {
    console.log('Hello LoginServiceProvider Provider');
  }
  login(){
  let data= {
      "name": "admin",
      "pass": "admin123!"
  };
   return this.http.post("http://www.cynautix.com/demomarketplace/user/login?_format=hal_json",data);
  }

  register(){
    let data = {
      "name":"eaan",
      "email":"email@gmail.com"
    };
    return this.http.post("http://www.cynautix.com/demomarketplace/user/login?_format=hal_json",data);
  }

  setUserData(data){
    this.accountInfo = data;
  }

  getUserData(){
    return this.accountInfo;
  }
}
