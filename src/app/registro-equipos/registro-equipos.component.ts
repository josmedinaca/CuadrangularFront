import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Equipo } from '../interfaces/Equipo';
@Component({
  selector: 'app-registro-equipos',
  templateUrl: './registro-equipos.component.html',
  styleUrls: ['./registro-equipos.component.css']
})
export class RegistroEquiposComponent implements OnInit {
  entityForm: Equipo;

  constructor(private  httpClient: HttpClient) { }

  ngOnInit() {
    this.entityForm = {} as Equipo;
  }
  saveEntity(){
    this.httpClient.post('http://localhost:8082/registro/equipo', {
      nombre1: this.entityForm.nombreA,
      ciudad1: this.entityForm.ciudadA,
      correo1: this.entityForm.correoA,
      nombre2: this.entityForm.nombreB,
      ciudad2: this.entityForm.ciudadB,
      correo2: this.entityForm.correoB,
      nombre3: this.entityForm.nombreC,
      ciudad3: this.entityForm.ciudadC,
      correo3: this.entityForm.correoC,
      nombre4: this.entityForm.nombreD,
      ciudad4: this.entityForm.ciudadD,
      correo4: this.entityForm.correoD
    })
      .subscribe(
        _data => {
          console.log('POST Request is successful ');
          Swal.fire('OK', '¡Equipos registrados!', 'success').then(function() {
            location.href = "#";
        });
        },
        error => {
          //alert('Error, intenta de nuevo.');
          
        Swal.fire('Oops...', '¡Datos no registrados!', 'error').then(function() {
            location.reload();
        });
          console.log('Error', error); 
          

        }

      );
  }
}
