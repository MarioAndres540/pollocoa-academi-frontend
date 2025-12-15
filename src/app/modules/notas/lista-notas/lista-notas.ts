import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Nota } from '../../../core/services/nota';
import { Estudiante as EstudianteModel, Materia as MateriaModel, INota } from '../../../core/models/nota.model';
import { Estudiante } from '../../../core/services/estudiante';
import { Materia } from '../../../core/services/materia';
import { FormNotas } from '../form-notas/form-notas';

@Component({
  selector: 'app-lista-notas',
  imports: [FormsModule, CommonModule, FormNotas],
  templateUrl: './lista-notas.html',
  styleUrls: ['./lista-notas.css'],
})
export class ListaNotas {

  notas = signal<INota[]>([]);

  notasService = inject(Nota);
  estudiantesService = inject(Estudiante);
  materiaService = inject(Materia);

  estudiantesActivos: EstudianteModel[] = [];
  estudiantesInactivos: EstudianteModel[] = [];

  materiasActivas: MateriaModel[] = [];
  materiasInactivas: MateriaModel[] = [];

  filtroEstudiante: string = '';
  filtroMateria: string = '';

   mostrarFormulario = false;

  ngOnInit() {
    this.listarNotas();
  }

  private isActiveEntity(entity: any): boolean {
    if (entity == null) return false;
    if ('isActive' in entity) return !!entity.isActive;
    if ('active' in entity) return !!entity.active;
    if ('estado' in entity) return String(entity.estado).toLowerCase() === 'activo';
    return true;
  }
async listarNotas() {
  try {
    const lista = await this.notasService.obtenerNotas().toPromise();
    console.log('✅ Respuesta backend:', lista);

    const data = lista?.data ?? [];
    this.notas.set(data);

    // Extraer estudiantes y materias únicas
    const estMap = new Map<string, EstudianteModel>();
    const matMap = new Map<string, MateriaModel>();

    data.forEach((n: any) => {
      if (n.estudiante?.id) estMap.set(n.estudiante.id, n.estudiante);
      if (n.materia?.id) matMap.set(n.materia.id, n.materia);
    });

    this.estudiantesActivos = Array.from(estMap.values());
    this.materiasActivas = Array.from(matMap.values());

  } catch (error) {
    console.error('❌ Error al obtener notas:', error);
  }
}

  editarNota(id: number) {}
  cambiarEstado(id: number) {}
  exportarPdf() {}
  exportarExcel(tipo: any) {}
  nuevaNota() {}

notasFiltradas = computed(() => {
  const notas = this.notas();

  const activeEstIds = new Set(this.estudiantesActivos.map(e => e.id));
  const activeMatIds = new Set(this.materiasActivas.map(m => m.id));

  return notas.filter(nota => {
    const estId = nota.estudiante?.id;
    const matId = nota.materia?.id;

    const pasaFiltroEst = this.filtroEstudiante
      ? estId === this.filtroEstudiante
      : activeEstIds.has(estId);

    const pasaFiltroMat = this.filtroMateria
      ? matId === this.filtroMateria
      : activeMatIds.has(matId);

    return pasaFiltroEst && pasaFiltroMat;
  });
});


  
agregarNota() {
  this.mostrarFormulario = true;
}

  cerrarFormulario() {
    this.mostrarFormulario = false;
  }
}
