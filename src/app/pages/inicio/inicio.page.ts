import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { QrComponent } from 'src/app/components/qr/qr.component';
import { MiClaseComponent } from 'src/app/components/mi-clase/mi-clase.component';
import { ForoComponent } from 'src/app/components/foro/foro.component';
import { MisDatosComponent } from 'src/app/components/mis-datos/mis-datos.component';
import { Router,ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { DataSharingService } from '../../data-sharing.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, 
    CommonModule, 
    FormsModule,
    QrComponent,
    MiClaseComponent,
    ForoComponent,
    MisDatosComponent]
})

export class InicioPage implements OnInit {

  datosActualizados = false;
  componente_actual = '';
  public nombreUsuario!: string;

  public constructor(private loadingController: LoadingController, private navCtrl: NavController, private router: Router,private route: ActivatedRoute,private dataSharingService: DataSharingService) { }


  ngOnInit() {

    this.dataSharingService.datosActualizados$.subscribe(actualizado => {
      this.datosActualizados = actualizado;
      if (this.datosActualizados=true) {
        this.componente_actual  = 'miClase'
          }
        });
      }
      cambiarComponete(event:any){
        this.componente_actual  = event.detail.value
      }
    }
  


