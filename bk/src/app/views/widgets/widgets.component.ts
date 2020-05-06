import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  templateUrl: 'widgets.component.html'
})
export class WidgetsComponent implements OnInit {
	@ViewChild('myModalAdd') public myModalAdd: ModalDirective;
	@ViewChild('myModalUpd') public myModalUpd: ModalDirective;
	titulo: any;
	estado = 1;
	currentPage = 1;
	page: number;
	servicios = [
	{id: 1,  description: 'Consumo de Agua'	},
	{id: 2, description: 'Botón de Pánico'	}	
	];
	listUsuarios = [
	{id: 1,  nombres: 'Marco Vega', email: 'mvega@gmail.com', servicio: 'Consumo de Agua', estado: 1 },	
	{id: 2,  nombres: 'Marco Vega2', email: 'mvega@gmail.com', servicio: 'Consumo de Agua', estado: 0 },	
	{id: 3,  nombres: 'Marco Vega3', email: 'mvega@gmail.com', servicio: 'Consumo de Agua', estado: 1 },	
	{id: 4,  nombres: 'Marco Vega4', email: 'mvega@gmail.com', servicio: 'Consumo de Agua', estado: 0 },	
	{id: 5,  nombres: 'Marco Vega5', email: 'mvega@gmail.com', servicio: 'Consumo de Agua', estado: 1 },	
	{id: 6,  nombres: 'Marco Vega6', email: 'mvega@gmail.com', servicio: 'Consumo de Agua', estado: 1},	
	{id: 7,  nombres: 'Marco Vega7', email: 'mvega@gmail.com', servicio: 'Consumo de Agua', estado: 0 },
	{id: 8,  nombres: 'Marco Vega8', email: 'mvega@gmail.com', servicio: 'Consumo de Agua', estado: 1},	
	{id: 9,  nombres: 'Marco Vega9', email: 'mvega@gmail.com', servicio: 'Consumo de Agua', estado: 1},	
	{id: 10,  nombres: 'Marco Vega10', email: 'mvega@gmail.com', servicio: 'Consumo de Agua', estado: 1},	
	{id: 11,  nombres: 'Marco Vega11', email: 'mvega@gmail.com', servicio: 'Consumo de Agua', estado: 1},	
	{id: 12,  nombres: 'Marco Vega12', email: 'mvega@gmail.com', servicio: 'Consumo de Agua', estado: 1}	
	];
		
    returnedUsuarios = [];		
	usuario = { nombres: '', apellidos:'', email:'', telefono:'', servicio:this.servicios[0], 
				dispositivo:'', tipoDocumento:'DNI', numeroDocumento:'', devices: [] };
	paginationNumber = 10;	
    contentArray = new Array(90).fill('');
    returnedArray: string[];
 
 
	constructor() {
		this.titulo = '';
		this.usuario = { nombres: '', apellidos:'', email:'', telefono:'', servicio:this.servicios[0], 
						dispositivo:'', tipoDocumento:'DNI', numeroDocumento:'', devices: [] };
		

	}

	ngOnInit() {
		if(this.listUsuarios.length > 0 ) {
			this.returnedUsuarios = this.listUsuarios.slice(0, this.paginationNumber);
			console.log("returnedUsuarios==========");
			console.log(this.returnedUsuarios );
		}
	}
	
	public pageChanged(event: PageChangedEvent) {
		console.log("event");
		console.log(event);
		this.page = event.page;
		const startItem = (event.page - 1) * event.itemsPerPage;
		const endItem = event.page * event.itemsPerPage;
		this.returnedUsuarios = this.listUsuarios.slice(startItem, endItem);
		this.returnedArray = this.contentArray.slice(startItem, endItem);
    }
  
	public edit(item) {
		this.titulo = 'Actualiza Datos de Usuarios';
		this.myModalUpd.show();
	}
	public closeEdit() {
		this.myModalUpd.hide();
	}

	public close() {
		this.myModalAdd.hide();
	}
	public open() {
		this.titulo = 'Registro de Usuarios';
		this.myModalAdd.show();
	}
	public deleteItem(item) {
		console.log('deleteItem');
		console.log(item);
		for (let order of this.usuario.devices) {
			if (item.dispositivo === order.dispositivo) {
				this.usuario.devices.splice(this.usuario.devices.indexOf(order), 1);
				break;
			}
		}
		this.usuario.dispositivo = '';

	}

	public addItem() {
		 console.log('AntDevices');
		 console.log(this.usuario);
		 let item = { servicio: this.usuario.servicio.id, description: this.usuario.servicio.description,
					  dispositivo: this.usuario.dispositivo };
		 this.usuario.devices.push(item);
		 console.log('DesDevices');
		 console.log(this.usuario.devices);
		 this.usuario.dispositivo = '';
	}
	
	
	
	/*
    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
	*/
	
}
