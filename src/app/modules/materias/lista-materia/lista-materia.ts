import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Materia } from '../../../core/services/materia';
import { FormMateria } from '../form-materia/form-materia';

@Component({
  selector: 'app-lista-materia',
  imports: [CommonModule,RouterModule,FormMateria],
  templateUrl: './lista-materia.html',
  styleUrls: ['./lista-materia.css'],
})
export class ListaMateria {
materias= signal<any[]>([]);

mostrarFormulario = false;

materiasService = inject(Materia);

ngOnInit() {
  this.listaMaterias()
}

async listaMaterias() {

    await this.materiasService.obetenerMaterias().subscribe({
next: (response: any) => {
      const data = response?.data ?? response ?? [];
      this.materias.set(data);
      console.log('Materias cargadas:', data);  
    }, 
  error: (error) => {
    console.error('Error al obtener materias:', error);
 
  }});
}

cerrarFormulario() {
    this.mostrarFormulario = false;
  }

editarMateria(id: number) {}

cambiarEstado(id: number) {
  try {
    
  } catch (error) {
    
  }
}

nuevaMateria() {
  this.mostrarFormulario = true;
}

exportarPdf() {}

exportarExcel(tipo: any) {}
}
