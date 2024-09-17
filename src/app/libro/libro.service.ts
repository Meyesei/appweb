import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Libro } from './libro';

import "rxjs";
import { Observable } from 'rxjs';

@Injectable()
export class LibroService {

  constructor(
    private _http: Http
  ) { }

  create(libro: Libro) {
    return this._http.post('/libros', libro)
    .map((data: { json: () => any; }) => data.json()).toPromise()
  }

  detroy(libro: Libro) {
    return this._http.delete('/libros/' + libro.id)
    .map((data: { json: () => any; }) => data.json()).toPromise()
  }

  update(libro: Libro) {
   return this._http.put('/libros/' + libro.id, libro)
    .map((data: { json: () => any; }) => data.json()).toPromise()
  }

  getLibros() {
    return this._http.get('/libros/')
    .map((data: { json: () => any; }) => data.json()).toPromise()
  }

  getLibro(libro: Libro) {
    return this._http.get('/libros/')
    .map((data: { json: () => any; }) => data.json()).toPromise()
  }

}
