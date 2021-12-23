import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AluguelComponent } from './Aluguel/Aluguel.component';
import { CompraComponent } from './Compra/Compra.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CadastroComponent } from './Cadastro/Cadastro.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [

  { path:'', redirectTo: 'dashboard', pathMatch: 'full'},
  { path:'dashboard', component: DashboardComponent},
  { path:'Aluguel', component: AluguelComponent},
  { path:'Compra', component: CompraComponent},
  { path:'Cadastrar', component: CadastroComponent},
  { path:'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
