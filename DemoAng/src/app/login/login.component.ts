import { Component, OnInit,Inject } from '@angular/core';
import { login } from '../Logininfo';
import { MatSnackBar, MatDialog } from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:login={Login:'',password:''}
  showError:boolean=false;
  errorDisplay:string;
  animal: string;
  name: string;
  constructor(private snackbar:MatSnackBar,private dialog:MatDialog) { }

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
      this.snackbar.open('LoginId and password are empty!!!!!', 'Undo', {
      duration: 3000
    });
   }
   else
   {
    console.log(this.showError);
   }
 }
 openDialog(): void {

      console.log('Model dialog box is opening');
  };


}


