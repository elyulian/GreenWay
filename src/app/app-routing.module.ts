import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { authGuard } from './shared/guards/auth.guard';
import { ServiciosComponent } from './servicios/servicios.component';
import { RutasComponent } from './rutas/rutas.component';
import { RutasDetalleComponent } from './rutas-detalle/rutas-detalle.component';
import { ContactanosComponent } from './contactanos/contactanos.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [authGuard]},
  {path: 'registro',component: RegistroComponent},
  {path: 'servicios', component: ServiciosComponent, canActivate: [authGuard]},
  {path: 'rutas', component: RutasComponent, canActivate: [authGuard]},
  {path: 'rutas/:rutaId', component: RutasDetalleComponent, canActivate: [authGuard]},
  {path: 'contactanos',component: ContactanosComponent, canActivate: [authGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
