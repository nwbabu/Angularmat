import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {MaterialModule} from './material.module'
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MenudemoComponent } from './menudemo/menudemo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import {AuthService} from './auth.service';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {
    path: 'home',
    component:HomeComponent,canActivate:[AuthService]
  },
  {
    path: 'about',
    component: AboutComponent,canActivate:[AuthService],canDeactivate:[AuthService]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MenudemoComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
