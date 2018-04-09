import { Injectable } from '@angular/core';
import {CanActivate,CanDeactivate} from '@angular/router';
import { AboutComponent } from './about/about.component';

@Injectable()
export class AuthService implements CanActivate,CanDeactivate<AboutComponent> {

  constructor() { }
  canActivate():boolean
  {
     return confirm('Are You want go to home page');
  }
  canDeactivate(template:AboutComponent):boolean
  {
     return confirm('Are You want go from  About page');
  }

}
