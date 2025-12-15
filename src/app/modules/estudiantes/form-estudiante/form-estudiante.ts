import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-estudiante',
  imports: [],
  templateUrl: './form-estudiante.html',
  styleUrls: ['./form-estudiante.css'],
})
export class FormEstudiante {
 @Output() cerrar = new EventEmitter<void>();

  cancelar() {
    this.cerrar.emit();
  }

  guardar() {
    // lógica de guardado
    this.cerrar.emit();
  }

}
