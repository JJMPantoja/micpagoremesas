import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-remesas',
  templateUrl: './remesas.component.html',
  styleUrls: ['./remesas.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class RemesasComponent {

  pagoRemesas = {
    flagClaveEnvio : false,
    flagExisteId : false,
    flagExisteMtcn : false,
  }

  buscaClaveEnvio(){
    this.pagoRemesas.flagClaveEnvio = true;
  }

  buscaNoId(){
    this.pagoRemesas.flagExisteId = true;
  }

  consultaMtcn(){
    this.pagoRemesas.flagExisteMtcn = true;
  }
   
}
