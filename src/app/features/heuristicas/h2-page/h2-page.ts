import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderHeuristicaComponent } from '../../../components/header-heuristica/header-heuristica.component';
import { MundoRealMaloComponent } from '../mundo-real-malo.component';
import { MundoRealBuenoComponent } from '../mundo-real-bueno.component';

@Component({
  selector: 'app-h2-page',
  standalone: true,
  imports: [CommonModule, HeaderHeuristicaComponent, MundoRealMaloComponent, MundoRealBuenoComponent],
  template: `
    <div class="max-w-6xl mx-auto py-10 px-4">
      <app-header-heuristica
        numeroHeuristica="2"
        titulo="Correspondencia con el Mundo Real"
        concepto="La interfaz debe hablar el idioma del usuario, utilizando conceptos, metáforas e iconos del mundo real en lugar de terminología técnica interna del sistema."
      ></app-header-heuristica>

      <div class="grid gap-8 md:grid-cols-2">
        <div>
          <h3 class="text-lg font-semibold mb-2">🔴 Ejemplo Malo: Terminología Técnica</h3>
          <p class="text-sm text-gray-600 mb-4">
            Usa nombres de operaciones y abreviaturas que solo entienden desarrolladores.
          </p>
          <app-mundo-real-malo></app-mundo-real-malo>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-2">✅ Ejemplo Bueno: Lenguaje del Usuario</h3>
          <p class="text-sm text-gray-600 mb-4">
            Usa iconos y acciones familiares como Escritorio, Carpeta, Copiar o Papelera.
          </p>
          <app-mundo-real-bueno></app-mundo-real-bueno>
        </div>
      </div>
    </div>
  `,
})
export class H2Page {}
