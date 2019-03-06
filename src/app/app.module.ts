import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreacionComponent } from './creacion/creacion.component';

import { ListComponent } from './list/list.component';
import { BoardComponent } from './board/board.component';
import { TaskComponent } from './task/task.component';
import { DataManagerService } from './data-manager.service';
import { ListadoComponent } from './listado/listado.component';
import { CronoComponent } from './crono/crono.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { RegisterViewComponent } from './register-view/register-view.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CreacionComponent,

    ListComponent,
    BoardComponent,
    TaskComponent,
    ListadoComponent,
    CronoComponent,
    LoginViewComponent,
    RegisterViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DataManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
