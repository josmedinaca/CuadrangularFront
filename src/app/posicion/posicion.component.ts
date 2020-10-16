import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-posicion',
  templateUrl: './posicion.component.html',
  styleUrls: ['./posicion.component.css']
})
export class PosicionComponent implements OnInit {
  ItemsArray:any= [];
  constructor(private  httpClient: HttpClient) { }
  
  ngOnInit() {
  }
  searchEntity(){
    
    
    this.httpClient.get('http://localhost:8082/registro/score', {
    }).subscribe(
        _data => {
          console.log('GET Request is successful ');
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
