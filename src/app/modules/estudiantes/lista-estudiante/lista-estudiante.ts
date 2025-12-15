import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormEstudiante } from '../form-estudiante/form-estudiante';
import { Estudiante } from '../../../core/services/estudiante';
import { signal } from '@angular/core';

@Component({
  selector: 'app-lista-estudiante',
  imports: [CommonModule, RouterModule, FormEstudiante],
  templateUrl: './lista-estudiante.html',
  styleUrls: ['./lista-estudiante.css'],
})
export class ListaEstudiante {

estudiantes = signal<any[]>([]);

estudiantesService = inject(Estudiante);

 mostrarFormulario = false;


ngOnInit() {
  this.listaEstudiantes()
}

listaEstudiantes() {
  this.estudiantesService.obtenerEstudiantes().subscribe({
    next: (lista: any) => {
      const data = lista?.data ?? lista ?? [];
      this.estudiantes.set(data);
      console.log('Estudiantes cargados:', data);
    },
    error: (err) => {
      console.error('Error al obtener estudiantes:', err);
    }
  });
}


agregarEstudiante() {
  this.mostrarFormulario = true;
}

cerrarFormulario() {
    this.mostrarFormulario = false;
  }

editarEstudiante(id: number) {
  try {
    
  } catch (error) {
    
  }
}

cambiarEstado(id: number) {
  try {
    
  } catch (error) {
    
  }
}

exportarPdf() {}

exportarExcel(tipo: any) {}

nuevoEstudiante() {}

}
