import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit { 

  registerForm: FormGroup;
  messages = '';

  constructor(
    public formBuilder: FormBuilder,
    public router: Router
  ) {
	this.messages = '';
    if(this.isLoggedIn()) {
		console.log("Usuario logueado");
        this.router.navigate(['dashboard']);		
	} else {
		console.log("Not logueado");
	}
	  
    this.registerForm= this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

ngOnInit() {
	this.messages = '';
}

public login() {
	console.log("Form:")
	console.log(this.registerForm.value)
	
	if(this.registerForm.value.email=='admin') {
		console.log("LOGIN OK")	
		localStorage.setItem('token', this.registerForm.value.email)
        this.router.navigate(['dashboard']);
	} else {
		console.log("LOGIN ERROR")	
		this.messages = 'Usuario y/o contraseña no válidos.'
	}	
	
}

public isLoggedIn(): boolean {
    let authToken = localStorage.getItem('token');
    return (authToken !== null) ? true : false;
}
  
}
