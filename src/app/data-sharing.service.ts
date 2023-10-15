import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private datosQR = new BehaviorSubject<any>(null);
  datosQR$ = this.datosQR.asObservable();
  private datosActualizados = new BehaviorSubject<boolean>(false);
  datosActualizados$ = this.datosActualizados.asObservable();

  actualizarDatosQR(datos: any) {
    this.datosQR.next(datos);
    this.datosActualizados.next(true);
    console.log(datos);
  }

  resetearEstado() {
    this.datosActualizados.next(false);
  }
}
