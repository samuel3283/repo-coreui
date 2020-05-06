import {Component } from '@angular/core';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(
    public router: Router
  ) {
  
  }
	  
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  
  public logout() {
	  console.log("Logout...");
	  /*
      if (localStorage.removeItem('token') == null) {
		this.router.navigate(['login']);
	  }*/
	  localStorage.removeItem('token');
	  this.router.navigate(['login']);
  }
  
}
