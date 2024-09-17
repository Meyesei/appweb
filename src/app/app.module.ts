import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { LibroService } from './libro/libro.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroComponent } from './libro/libro.component';
import { LibroNewComponent } from './libro/libro-new/libro-new.component';
import { LibroListComponent } from './libro/libro-list/libro-list.component';
import { LibroEditComponent } from './libro/libro-edit/libro-edit.component';
import { LibroDetailsComponent } from './libro/libro-details/libro-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    LibroNewComponent,
    LibroListComponent,
    LibroEditComponent,
    LibroDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
LibroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
