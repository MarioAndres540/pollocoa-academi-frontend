import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-notas',
  imports: [],
  templateUrl: './form-notas.html',
  styleUrls: ['./form-notas.scss'],
})
export class FormNotas {
   @Output() cerrar = new EventEmitter<void>();

  cancelar() {
    this.cerrar.emit();
  }

  guardar() {
    // lógica de guardado
    this.cerrar.emit();
  }

}
