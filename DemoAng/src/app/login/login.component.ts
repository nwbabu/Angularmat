import { Component, OnInit } from '@angular/core';
import { login } from '../Logininfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:login={Login:'',password:''}
  showError:boolean=false;
  errorDisplay:string;
  constructor() { }

  ngOnInit() {
    this.showError=false;
  }
 login():void
 {
   console.log('login Successfully!!!!!!');
   console.log(this.model.Login);
   console.log(this.model.password);
   if(this.model.Login=='' && this.model.password=='')
   {
     this.showError=true;
     setTimeout(()=>{
      this.errorDisplay='Login and Password required';
      this.showError=false;
     },3000);
     console.log(this.showError);
   }
   else
   {
    console.log(this.showError);
   }
 }

}
