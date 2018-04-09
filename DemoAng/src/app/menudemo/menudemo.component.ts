import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menudemo',
  templateUrl: './menudemo.component.html',
  styleUrls: ['./menudemo.component.css']
})
export class MenudemoComponent implements OnInit {

  constructor( private route:Router
    
  ) { }

  ngOnInit() {
  }
  goHome() {
    console.log("Calling Home")
    this.route.navigate(['home']); 
  }
  goLogin() {
    this.route.navigate(['login']); 
  }
  goAbout() {
    this.route.navigate(['about']); 
  }
}
