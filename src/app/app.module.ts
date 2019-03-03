import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreacionComponent } from './creacion/creacion.component';
import { ListadoComponent } from './listado/listado.component';
import { ListComponent } from './list/list.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    CreacionComponent,
    ListadoComponent,
    ListComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
