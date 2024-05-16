import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire/compat';
import { RegistroComponent } from './registro/registro.component';
import { RutasComponent } from './rutas/rutas.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { RutasDetalleComponent } from './rutas-detalle/rutas-detalle.component';
import { getFirestore, provideFirestore } from '@angular/fire/firestore'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    RutasComponent,
    ServiciosComponent,
    ContactanosComponent,
    RutasDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    //modulo para inicializar y no arroje un nullpointerexception
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp({"projectId":"greenway-8d7b7","appId":"1:69540180751:web:7462da8b9de0d769ddc47a","databaseURL":"https://greenway-8d7b7-default-rtdb.firebaseio.com","storageBucket":"greenway-8d7b7.appspot.com","apiKey":"AIzaSyAR8G6a2GCUUyuW-NQPBRnplqaAP7vKels","authDomain":"greenway-8d7b7.firebaseapp.com","messagingSenderId":"69540180751","measurementId":"G-D97JJKE87T"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
