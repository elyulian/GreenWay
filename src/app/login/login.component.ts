import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

LoginForm:FormGroup = new FormGroup({
  email: new FormControl('',Validators.required),
  password: new FormControl()

})


  constructor(private authService: AuthService){
  }
  
  login(email:string, password:string){
    this.authService.loginWithEmailAndPassword(email,password);
  }
  loginGoogle(){
    this.authService.loginConGoogle();
  }

}
