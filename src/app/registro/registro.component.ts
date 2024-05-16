import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  siteKey:string;
  constructor(private authService: AuthService){
    this.siteKey="6LfWcd4pAAAAAHVpMmX_SbDBtL4Sc90rtLwwX7nw";
  }
  registroForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)])
  });

    resultado: string | undefined;
  
  submit() {
    if (this.registroForm.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }
  registrar(email:string, password: string){
    this.authService.registrarUsuario(email,password)
  }

}
