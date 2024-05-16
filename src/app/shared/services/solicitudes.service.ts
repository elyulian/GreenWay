import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import Solicitud from '../interfaces/solicitud';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {


  constructor(private firestore: Firestore) { }

  addPlace(solicitud: Solicitud) {
    const placeRef = collection(this.firestore, 'solicitud');
    return addDoc(placeRef, solicitud);
  }

  getPlaces(): Observable<Solicitud[]> {
    const placeRef = collection(this.firestore, 'solicitud');
    return collectionData(placeRef, { idField: 'id' }) as Observable<Solicitud[]>;
  }

  deletePlace(solicitud: Solicitud) {
    const placeDocRef = doc(this.firestore, `solicitud/${solicitud.id}`);
    return deleteDoc(placeDocRef);
  }
}
