import { Component, OnInit } from '@angular/core';
import { LibroService } from './libro.service';
import { Libro } from './libro';
import { libro } from '/libro';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
  libros: Libro[] = [
    new Libro(1, "The Bonus", "De Swan", "Romance"),
    new Libro(2, "Blancanieves", "Morden", "Misterio"),
    new Libro(3, "The Bonus", "De Swan", "Suspenso"),
    new Libro(4, "The Bonus", "De Swan", "Drama")
  ];

constructor(
  private _libroService: LibroService
) {}

ngOnInit(): void {
  // this.getLibros();
}

getLibros(){
  // this. _libroService.getLibros()
  // then(libros => this.libros = libros);
}

create(libro: Libro){
this.libros.push(libro);
}

}

destroy(libro: Libro) {
const i = this.libros.indexOf(libro);
this.libros.splice(i, 1);
}


function then(arg0: (libros: any) => any) {
  throw new Error('Function not implemented.');
}

function destroy(libro: any, Libro: typeof Libro) {
  throw new Error('Function not implemented.');
}

