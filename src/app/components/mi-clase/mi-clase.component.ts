import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { QrComponent } from 'src/app/components/qr/qr.component';  

@Component({
  selector: 'app-mi-clase',
  templateUrl: './mi-clase.component.html',
  styleUrls: ['./mi-clase.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MiClaseComponent implements OnInit {

  public bloqueInicio!: number;
  public bloqueTermino!: number;
  public dia!: string;
  public horaFin!: string;
  public horaInicio!: string;
  public idAsignatura!: string;
  public nombreAsignatura!: string;
  public nombreProfesor!: string;
  public seccion!: string;
  public sede!: string;

  constructor(private route: ActivatedRoute, private activatedRoute: ActivatedRoute, private router: Router,private qrComponent: QrComponent ) { }

  ngOnInit() {
    this.qrComponent.datosQRListos.subscribe(objetoDatosQR => {
      this.bloqueInicio = objetoDatosQR.bloqueInicio;
      this.bloqueTermino = objetoDatosQR.bloqueTermino;
      this.dia = objetoDatosQR.dia;
      this.horaFin = objetoDatosQR.horaFin;
      this.horaInicio = objetoDatosQR.horaInicio;
      this.idAsignatura = objetoDatosQR.idAsignatura;
      this.nombreAsignatura = objetoDatosQR.nombreAsignatura;
      this.nombreProfesor = objetoDatosQR.nombreProfesor;
      this.seccion = objetoDatosQR.seccion;
      this.sede = objetoDatosQR.sede;
    });
  }





  volver() {
    this.router.navigate(['/inicio']);
  }
}

