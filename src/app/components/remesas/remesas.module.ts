import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RemesasComponent } from './remesas.component';
import { InfoClienteComponent } from '../info-cliente/info-cliente.component';

const routes: Routes = [{ path: '', component: RemesasComponent }];

@NgModule({
  declarations: [RemesasComponent, InfoClienteComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PagoRemesasModule {}
