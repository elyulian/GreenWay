import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  constructor(private authService: AuthService){
  }
  registroForm:FormGroup = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('')
  
  })

  registrar(email:string, password: string){
    this.authService.registrarUsuario(email,password)
  }

}
