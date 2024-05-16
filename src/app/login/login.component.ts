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

formularioIngreso = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)])
});
  resultado: string | undefined;
  siteKey:string;

  submit() {
    if (this.formularioIngreso.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }
  constructor(private authService: AuthService){
    this.siteKey="6LfWcd4pAAAAAHVpMmX_SbDBtL4Sc90rtLwwX7nw";

  }
  
  login(email:string, password:string){
    this.authService.loginWithEmailAndPassword(email,password);
  }
  loginGoogle(){
    this.authService.loginConGoogle();
  }

}
