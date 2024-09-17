import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Libro } from '../libro';

@Component({
  selector: 'app-libro-new',
  templateUrl: './libro-new.component.html',
  styleUrls: ['./libro-new.component.css']
})
export class LibroNewComponent implements OnInit{
  @Output() createNewLibroEvent = new EventEmitter();

  newLibro = new Libro;

  constructor() {}

  ngOnInit(): void {
    
  }

  create(){
    this.createNewLibroEvent.emit(this.newLibro);
    this.newLibro = new Libro();
  }

}
