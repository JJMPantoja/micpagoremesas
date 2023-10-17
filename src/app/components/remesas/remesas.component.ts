import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-remesas',
  templateUrl: './remesas.component.html',
  styleUrls: ['./remesas.component.scss'],
})
export class RemesasComponent {
  /* The `usersID` variable is an array that stores the IDs of different users. It is used to filter
  and search for specific users based on their ID. */
  public usersID = ['123', '111'];

  /* The `users` array is storing information about different users.  */
  public users = [
    {
      registrado: true,
      idUser: '123',
      fechaExpedicion: '2021-06-15',
      fechaVencimiento: '2025-06-15',
      departamentoEmite: 'default',
      nacionalidad: '1',
      paisNacimiento: '1',
      numeroCliente: '62436810',
      primerApellido: 'PEQUEÑO',
      segundoApellido: 'MARTINEZ',
      primerNombre: 'ANTONIO',
      genero: '1',
      fechaNacimiento: '1989-07-12',
      estadoCivil: '2',
      ocupacion: '1',
      telefono: '7441702481',
      //Domicilio
      colonia: 'CENTRO',
      calle: 'CENTRO',
      numeroExterior: '704',
      numeroInterior: '99',
      pais: '1',
      codigoPostal: '67890',
    },
    {
      registrado: false,
      idUser: '321',
      fechaExpedicion: '',
      fechaVencimiento: '',
      departamentoEmite: 'default',
      nacionalidad: '',
      paisNacimiento: '',
      numeroCliente: '',
      primerApellido: '',
      segundoApellido: '',
      primerNombre: '',
      genero: '',
      fechaNacimiento: '',
      estadoCivil: '',
      ocupacion: '',
      telefono: '',
      //Domicilio
      colonia: '',
      calle: '',
      numeroExterior: '999',
      numeroInterior: '999',
      pais: '',
      codigoPostal: '',
    },
  ];

  /* The `pagoRemesas` object is a data structure that stores information related to a remittance
  payment. It has the following properties: */
  public pagoRemesas = {
    clienteNuevo: false,
    flagClaveEnvio: false,
    flagExisteId: false,
    flagExisteMtcn: false,
    flagRegistrado: false,
    informacionRemesa: {
      claveEnvio: '',
      remitente: '',
      origenEnvio: '',
      monto: '',
      estatusRemesa: '',
      fechaEnvio: '',
    },
    informacionCliente: {
      tipoIdentificacion: 'default',
      numeroIdentificacion: '',
      paisExpedicion: '',
      fechaExpedicion: '',
      departamentoEmite: '',
      fechaVencimiento: '',
      nacionalidad: '',
      paisNacimiento: '',
      numeroCliente: '',
      primerApellido: '',
      segundoApellido: '',
      apellidoCasado: '',
      primerNombre: '',
      segundoNombre: '',
      genero: '',
      fechaNacimiento: '',
      estadoCivil: '',
      ocupacion: '1',
      telefono: '',
      correoElectronico: '',
    },
    domicilio: {
      calle: '',
      numeroExterior: '',
      numeroInterior: '',
      colonia: '',
      pais: '',
      departamento: 'default',
      municipio: 'default',
      codigoPostal: '',
    },
    informacionAdicional: {
      origenRecursos: 'default',
      motivo: 'default',
      parentezcoRemitente: 'default',
      usoDinero: 'default',
      transaccionalidad: 'default',
      ingresoMensual: '',
      empresaLabora: '',
    },
  };

  /**
   * The function updates the tipoIdentificacion property of the pagoRemesas object based on the
   * selected value from a dropdown menu.
   * @param {Event} event - The event parameter is of type Event, which represents an event that occurs
   * in the DOM (Document Object Model). It can be any type of event, such as a click, change, or
   * submit event.
   */
  onSelectChange(event: Event) {
    const seleccionado = (event.target as HTMLSelectElement).value;
    this.pagoRemesas.informacionCliente.tipoIdentificacion = seleccionado ?? '';
  }

  /**
   * The function buscaClaveEnvio sets various properties of the pagoRemesas object.
   */
  buscaClaveEnvio() {
    this.pagoRemesas.flagClaveEnvio = true;
    this.pagoRemesas.informacionRemesa.estatusRemesa =
      'MTCN disponible para cobro';
    this.pagoRemesas.informacionCliente.paisExpedicion = '1';
  }

  /**
   * The function "buscaNoId" filters the "users" array to find a user with a matching "idUser"
   * property and then logs the user information or a message if the user does not exist.
   */
  buscaNoId() {
    const usuario = this.users.filter(
      (user) =>
        user.idUser === this.pagoRemesas.informacionCliente.numeroIdentificacion
    );
    console.log('USUARIO : ', usuario);
    usuario ? this.llenaFormulario(usuario) : console.log('NO EXISTE USUARIO');
  }

  /**
   * The function "llenaFormulario" fills in a form with user information.
   * @param {any} usuario - The "usuario" parameter is an object that contains information about a
   * user. It has properties such as "registrado" (a flag indicating if the user is registered),
   * "fechaExpedicion" (date of issuance), "fechaVencimiento" (expiration date), "departamentoEmite
   */
  llenaFormulario(usuario: any) {
    //Info Cliente
    this.pagoRemesas.flagRegistrado = usuario[0].registrado;
    this.pagoRemesas.flagExisteId = true;
    this.pagoRemesas.informacionCliente.fechaExpedicion =
      usuario[0].fechaExpedicion;
    this.pagoRemesas.informacionCliente.fechaVencimiento =
      usuario[0].fechaVencimiento;
    this.pagoRemesas.informacionCliente.departamentoEmite =
      usuario[0].departamentoEmite;
    this.pagoRemesas.informacionCliente.nacionalidad = usuario[0].nacionalidad;
    this.pagoRemesas.informacionCliente.paisNacimiento =
      usuario[0].paisNacimiento;
    this.pagoRemesas.informacionCliente.numeroCliente =
      usuario[0].numeroCliente;
    this.pagoRemesas.informacionCliente.primerApellido =
      usuario[0].primerApellido;
    this.pagoRemesas.informacionCliente.segundoApellido =
      usuario[0].segundoApellido;
    this.pagoRemesas.informacionCliente.primerNombre = usuario[0].primerNombre;
    this.pagoRemesas.informacionCliente.genero = usuario[0].genero;
    this.pagoRemesas.informacionCliente.fechaNacimiento =
      usuario[0].fechaNacimiento;
    this.pagoRemesas.informacionCliente.estadoCivil = usuario[0].estadoCivil;
    this.pagoRemesas.informacionCliente.ocupacion = usuario[0].ocupacion;
    this.pagoRemesas.informacionCliente.telefono = usuario[0].telefono;

    //Domicilio
    this.pagoRemesas.domicilio.colonia = usuario[0].colonia;
    this.pagoRemesas.domicilio.calle = usuario[0].calle;
    this.pagoRemesas.domicilio.numeroExterior = usuario[0].numeroExterior;
    this.pagoRemesas.domicilio.numeroInterior = usuario[0].numeroInterior;
    this.pagoRemesas.domicilio.pais = usuario[0].pais;
    this.pagoRemesas.domicilio.codigoPostal = usuario[0].codigoPostal;

    //Info ADICIONAL
  }

  /**
   * The function consultaMtcn sets the flagExisteMtcn property to true in the pagoRemesas object.
   */
  consultaMtcn() {
    this.pagoRemesas.flagExisteMtcn = true;
  }

  /**
   * The function "pagarRemesa" displays a confirmation dialog using SweetAlert and if the user
   * confirms, it shows a success message.
   */
  pagarRemesa() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn successButtonSweetAlert',
        cancelButton: 'btn cancelButtonSweetAlert',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: '¿Seguro que desea pagar este giro?',
        icon: 'question',
        showCancelButton: true,
        cancelButtonColor: '#fff',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#24654b',
      })
      .then((result) => {
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

  /**
   * The function `registrarCliente()` displays a confirmation dialog using the SweetAlert library and
   * shows a success message if the user confirms.
   */
  registrarCliente() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn successButtonSweetAlert',
        cancelButton: 'btn cancelButtonSweetAlert',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: '¿Seguro que deseas  crear este cliente?',
        icon: 'question',
        showCancelButton: true,
        cancelButtonColor: '#fff',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#24654b',
      })
      .then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire({
            icon: 'success',
            title: 'Cliente registrado con éxito',
            showConfirmButton: true,
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#24654b',
          });
        }
      });
  }
}
