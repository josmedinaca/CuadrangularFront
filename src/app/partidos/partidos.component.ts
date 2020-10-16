import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent implements OnInit {
  inputsgolL:any=[];
  inputsgolA:any=[];
  ids:any=[]
  ItemsArray:any= [];

  constructor(private  httpClient: HttpClient) { }

  ngOnInit() {
  }
  searchEntity(event: any){
    
    event.target.hidden = true;
    this.httpClient.get('http://localhost:8082/registro/partido', {
    }).subscribe(
        _data => {
          console.log('POST Request is successful ');
          this.ItemsArray = _data;
          Swal.fire('OK', '¡Datos cargados con exito!', 'success');

        },
        error => {
         // alert('Error, intenta de nuevo.');
          
         Swal.fire('Oops...', '¡Datos no registrados!', 'error').then(function() {
          location.reload();
      });
          console.log('Error', error); 
         // location.reload();

        }

      );
  }
  updateEntity(){
    
    this.httpClient.post('http://localhost:8082/update/partido', {
      id: this.ids,
      golesLocal: this.inputsgolL,
      golesAdv: this.inputsgolA,
    }).subscribe(
        _data => {
          console.log('POST Request is successful ');
          this.ItemsArray = _data;
          Swal.fire('OK', '¡Datos cargados con exito!', 'success');

        },
        error => {
         // alert('Error, intenta de nuevo.');
          
         Swal.fire('Oops...', '¡Datos no registrados!', 'error').then(function() {
          location.reload();
      });
          console.log('Error', error); 
         // location.reload();

        }

      );
  }
}
