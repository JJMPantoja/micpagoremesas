import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-remesas',
  templateUrl: './remesas.component.html',
  styleUrls: ['./remesas.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class RemesasComponent {

  pagoRemesas = {
    flagClaveEnvio : false,
    flagExisteId : false,
    flagExisteMtcn : false,
    informacionRemesa : {
      claveEnvio : '',
      remitente : '',
      origenEnvio : '',
      monto : '',
      estatusRemesa : '',
      fechaEnvio : ''
    },
    informacionCliente : {
      tipoIdentificacion : 'default',
      paisExpedicion : '',
      numeroIdentificacion : ''
    }
  }

  onSelectChange(event:any){
    let seleccionado = (event.target as HTMLSelectElement).value;
    /* -------------- Por si se quiere el texto del option -------------
    let seleccionadoTexto = (event.target as HTMLSelectElement).selectedOptions[0];
    */
    this.pagoRemesas.informacionCliente.tipoIdentificacion = seleccionado ?? ''
    console.log('ng model :  ' + this.pagoRemesas.informacionCliente.tipoIdentificacion)
  }

  buscaClaveEnvio(){
    this.pagoRemesas.flagClaveEnvio = true;
    this.pagoRemesas.informacionRemesa.estatusRemesa = "MTCN disponible para cobro";
    this.pagoRemesas.informacionCliente.paisExpedicion = "1"
  }

  buscaNoId(){
    this.pagoRemesas.flagExisteId = true;
  }

  consultaMtcn(){
    this.pagoRemesas.flagExisteMtcn = true;
  }

   
}
