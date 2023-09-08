import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemesasComponent } from './components/remesas/remesas.component';

const routes: Routes = [
  {path: '', component: RemesasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
