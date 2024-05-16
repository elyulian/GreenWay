import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';


@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent {

  constructor(
    private authService: AuthService,
  ) {

  }

  ngOnInit(): void {
  }


  cerrarSession(){
    this.authService.logOut();
  }

}
