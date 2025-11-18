import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderHeuristicaComponent } from '../../../components/header-heuristica/header-heuristica.component';
import { ConsistenciaMaloComponent } from '../consistencia-malo.component';
import { ConsistenciaBuenoComponent } from '../consistencia-bueno.component';

@Component({
  selector: 'app-h4-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderHeuristicaComponent,
    ConsistenciaMaloComponent,
    ConsistenciaBuenoComponent,
  ],
  template: `
    <div class="max-w-6xl mx-auto py-10 px-4">
      <app-header-heuristica
        numeroHeuristica="4"
        titulo="Consistencia y Estándares"
        concepto="La interfaz debe ser coherente: elementos similares deben verse y comportarse de la misma forma, siguiendo patrones y estándares reconocidos para reducir la carga cognitiva."
      ></app-header-heuristica>

      <div class="grid gap-8 md:grid-cols-2">
        <div>
          <h3 class="text-lg font-semibold mb-2">🔴 Ejemplo Malo: Inconsistencia Visual</h3>
          <p class="text-sm text-gray-600 mb-4">
            Múltiples botones de &quot;guardar&quot; con estilos, tamaños e iconos distintos.
          </p>
          <app-consistencia-malo></app-consistencia-malo>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-2">✅ Ejemplo Bueno: Patrones Uniformes</h3>
          <p class="text-sm text-gray-600 mb-4">
            Acciones similares comparten el mismo estilo de botón e iconografía.
          </p>
          <app-consistencia-bueno></app-consistencia-bueno>
        </div>
      </div>
    </div>
  `,
})
export class H4Page {}
