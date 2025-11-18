import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderHeuristicaComponent } from '../../../components/header-heuristica/header-heuristica.component';
import { PrevencionMaloComponent } from '../prevencion-malo.component';
import { PrevencionBuenoComponent } from '../prevencion-bueno.component';

@Component({
  selector: 'app-h5-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderHeuristicaComponent,
    PrevencionMaloComponent,
    PrevencionBuenoComponent,
  ],
  template: `
    <div class="max-w-6xl mx-auto py-10 px-4">
      <app-header-heuristica
        numeroHeuristica="5"
        titulo="Prevención de Errores"
        concepto="Es mejor diseñar la interfaz para prevenir errores antes de que ocurran — validando datos, usando restricciones y confirmaciones — que depender únicamente de mensajes de error posteriores."
      ></app-header-heuristica>

      <div class="grid gap-8 md:grid-cols-2">
        <div>
          <h3 class="text-lg font-semibold mb-2">🔴 Ejemplo Malo: Transferencia sin Validaciones</h3>
          <p class="text-sm text-gray-600 mb-4">
            Permite enviar montos inválidos o cuentas incorrectas sin advertencias.
          </p>
          <app-prevencion-malo></app-prevencion-malo>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-2">
            ✅ Ejemplo Bueno: Transferencia con Validación y Confirmación
          </h3>
          <p class="text-sm text-gray-600 mb-4">
            Valida formato de cuenta, límites de monto y muestra confirmaciones adicionales para
            montos altos.
          </p>
          <app-prevencion-bueno></app-prevencion-bueno>
        </div>
      </div>
    </div>
  `,
})
export class H5Page {}
