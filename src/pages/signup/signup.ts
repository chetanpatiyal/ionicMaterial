import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';



@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  formgroup:FormGroup;
  formname:AbstractControl;
  formemail:AbstractControl;
  formpassword:AbstractControl;


  constructor(public navCtrl: NavController, public viewctrl:ViewController,
  public navParams: NavParams,
    public formbuilder:FormBuilder) {

this.formgroup = formbuilder.group({
        formname:['',Validators.required,Validators.minLength(15)],
        formemail:['',Validators.required],
        formpassword:['',Validators.required,Validators.minLength(12)]
      });

      this.formname = this.formgroup.controls['formname'];
      this.formemail = this.formgroup.controls['formemail'];
      this.formpassword = this.formgroup.controls['formpassword'];
  }








  dismiss(){
    this.viewctrl.dismiss();
  }
}
