import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-materia',
  imports: [],
  templateUrl: './form-materia.html',
  styleUrls: ['./form-materia.css'],
})
export class FormMateria {
 @Output() cerrar = new EventEmitter<void>();

  cancelar() {
    this.cerrar.emit();
  }

  guardar() {
    // lógica de guardado
    this.cerrar.emit();
  }
}
