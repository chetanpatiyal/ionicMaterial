import { Component } from '@angular/core';
import { NavController,NavParams, ViewController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { Storage } from '@ionic/storage';
import { ActionSheetController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page


  loginForm:FormGroup;
  formEmail:AbstractControl;
  formPassword:AbstractControl;


  constructor(public navCtrl: NavController,public viewCtrl: ViewController,
    public loginService:LoginServiceProvider, public storage:Storage,public navParams: NavParams,
    public formbuilder:FormBuilder) {


    this.loginForm = formbuilder.group({
    formEmail:['',Validators.compose([Validators.required])],
    formPassword:['',Validators.compose([Validators.required])]
  });

      this.formEmail = this.loginForm.controls['formEmail'];
      this.formPassword = this.loginForm.controls['formPassword'];
    
  }
  dismiss(){
    this.viewCtrl.dismiss();  
  }
  register(){
    this.navCtrl.push(SignupPage);
  }
  login(){
    this.loginService.login().subscribe(res =>{
      this.storage.set('userdata', res.json())
      this.dismiss();
    })
    };
}

