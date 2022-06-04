import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   loginForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
        email:new FormControl('',[Validators.required, Validators.email]),
        password : new FormControl('',{validators:[Validators.required,Validators.minLength(6)]})
    });
  }
  onSubmit(){
    console.log(this.loginForm)
  }
  
}
