import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import Swal from 'sweetalert2';


@Component({
  selector: 'app-remesas',
  templateUrl: './remesas.component.html',
  styleUrls: ['./remesas.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class RemesasComponent {

  usersID = ['123','111','222'];

  pagoRemesas = {
    clienteNuevo : false,
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
      numeroIdentificacion : '',
      paisExpedicion : '',
      fechaExpedicion : '2021-06-15',
      departamentoEmite : 'default',
      fechaVencimiento : '',
      nacionalidad : '',
      paisNacimiento : '',
      numeroCliente : '',
      primerApellido : '',
      segundoApellido : '',
      apellidoCasado : '',
      primerNombre : '',
      segundoNombre : '',
      genero : '',
      fechaNacimiento : '',
      estadoCivil : '',
      ocupacion : '1',
      telefono : '',
      correoElectronico : ''
    },
    domicilio : {
      calle : '',
      numeroExterior : '',
      numeroInterior : '',
      colonia : '',
      pais : '',
      departamento : 'default',
      municipio : 'default',
      codigoPostal : ''
    },
    informacionAdicional : {
      origenRecursos : 'default',
      motivo : 'default',
      parentezcoRemitente : 'default',
      usoDinero : 'default',
      transaccionalidad : 'default',
      ingresoMensual : '',
      empresaLabora : ''

    }

  };

  onSelectChange(event:Event){
    const seleccionado = (event.target as HTMLSelectElement).value;
    /* -------------- Por si se quiere el texto del option -------------
    let seleccionadoTexto = (event.target as HTMLSelectElement).selectedOptions[0];
    */
    this.pagoRemesas.informacionCliente.tipoIdentificacion = seleccionado ?? '';
  }

  buscaClaveEnvio(){
    this.pagoRemesas.flagClaveEnvio = true;
    this.pagoRemesas.informacionRemesa.estatusRemesa = 'MTCN disponible para cobro';
    this.pagoRemesas.informacionCliente.paisExpedicion = '1';
  }

  buscaNoId() {
    this.usersID.includes(this.pagoRemesas.informacionCliente.numeroIdentificacion) ? this.llenaFormulario() : console.log('NO EXISTE USUARIO');
  }

  llenaFormulario(){
    //Info Cliente
    this.pagoRemesas.flagExisteId = true;
    this.pagoRemesas.informacionCliente.fechaExpedicion = '2021-06-15';
    this.pagoRemesas.informacionCliente.fechaVencimiento = '2025-06-15';
    this.pagoRemesas.informacionCliente.departamentoEmite = 'default';
    this.pagoRemesas.informacionCliente.nacionalidad = '1';
    this.pagoRemesas.informacionCliente.paisNacimiento = '1';
    this.pagoRemesas.informacionCliente.numeroCliente = '62436810';
    this.pagoRemesas.informacionCliente.primerApellido = 'PEQUEÑO';
    this.pagoRemesas.informacionCliente.numeroCliente = 'MARTINEZ';
    this.pagoRemesas.informacionCliente.primerNombre = 'Antonio';
    this.pagoRemesas.informacionCliente.genero = '1';
    this.pagoRemesas.informacionCliente.fechaNacimiento = '1989-07-12';
    this.pagoRemesas.informacionCliente.estadoCivil = '2';
    this.pagoRemesas.informacionCliente.ocupacion = '1';
    this.pagoRemesas.informacionCliente.telefono = '7441702481';

    //Domicilio
    this.pagoRemesas.domicilio.colonia = 'CENTRO';
    this.pagoRemesas.domicilio.calle = 'CENTRO';
    this.pagoRemesas.domicilio.numeroExterior = '704';
    this.pagoRemesas.domicilio.numeroInterior = '99';
    this.pagoRemesas.domicilio.pais = '1';
    this.pagoRemesas.domicilio.codigoPostal = '67890';

    //Info ADICIONAL
  }

  consultaMtcn(){
    this.pagoRemesas.flagExisteMtcn = true;
  }

  pagarRemesa(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn successButtonSweetAlert',
        cancelButton: 'btn cancelButtonSweetAlert',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons.fire({
        title:'¿Seguro que desea pagar este giro?',
        icon: 'question',
        showCancelButton: true,
        cancelButtonColor: '#fff',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#24654b',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Pago realizado correctamente',
          showConfirmButton: true,
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#24654b',
        });
      }
    });
  }

   
}
