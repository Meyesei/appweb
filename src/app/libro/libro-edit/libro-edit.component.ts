import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Libro } from '../libro';

@Component({
  selector: 'app-libro-edit',
  templateUrl: './libro-edit.component.html',
  styleUrls: ['./libro-edit.component.css']
})
export class LibroEditComponent  implements OnInit{
  @Input() libro: Libro | undefined;
  libroEdit: Libro = new Libro();
constructor(){}
ngOnInit(): void {
  
}
}
