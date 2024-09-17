import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Libro  } from '../libro';

@Component({
  selector: 'app-libro-list',
  templateUrl: './libro-list.component.html',
  styleUrls: ['./libro-list.component.css']
})
export class LibroListComponent implements OnInit{

  @Input() libros: any;
  @Output() destroyLibroEvent = EventEmitter();

  constructor(){}

  ngOnInit(){}

  destroy(libro: Libro){
    const response = confirm('delete?')
    if(response) {
this.destroyLibroEvent.emit(libro);
    }
this.destroyLibroEvent.emit(libro);
}
}
