import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';
import { subscribeOn } from 'rxjs/operators';

@Component({
	selector: 'app-medico',
	templateUrl: './medico.component.html',
	styles: [],
})
export class MedicoComponent implements OnInit {
	medicos: any[] = [];
	constructor(public _medicoServices: MedicoService) {}

	ngOnInit(): void {}

	saludarMedico(nombre: string) {
		return `Hola ${nombre}`;
	}

	obtenerMedicos() {
		this._medicoServices.getMedicos().subscribe((medicos: any[]) => (this.medicos = medicos));
	}
}
