import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'; // importando as rotas 
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { TituloComponent } from './titulo/titulo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AluguelComponent } from './Aluguel/Aluguel.component';
import { CompraComponent } from './Compra/Compra.component';
import { LoginComponent } from './login/login.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [				
      AppComponent,
      DashboardComponent,
      NavComponent,
      TituloComponent,
      AluguelComponent,
      CompraComponent,
      LoginComponent
   ],
  imports: [
    MatExpansionModule,
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
