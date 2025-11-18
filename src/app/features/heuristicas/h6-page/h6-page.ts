import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderHeuristicaComponent } from '../../../components/header-heuristica/header-heuristica.component';
import { ReconocimientoMaloComponent } from '../reconocimiento-malo.component';
import { ReconocimientoBuenoComponent } from '../reconocimiento-bueno.component';

@Component({
  selector: 'app-h6-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderHeuristicaComponent,
    ReconocimientoMaloComponent,
    ReconocimientoBuenoComponent,
  ],
  template: `
    <div class="max-w-6xl mx-auto py-10 px-4">
      <app-header-heuristica
        numeroHeuristica="6"
        titulo="Reconocimiento antes que Recordar"
        concepto="La interfaz debe favorecer el reconocimiento mostrando opciones, listas e iconos visibles, en lugar de obligar al usuario a recordar códigos, comandos o información de una pantalla a otra."
      ></app-header-heuristica>

      <div class="grid gap-8 md:grid-cols-2">
        <div>
          <h3 class="text-lg font-semibold mb-2">🔴 Ejemplo Malo: Códigos y Memoria</h3>
          <p class="text-sm text-gray-600 mb-4">
            El usuario debe recordar abreviaciones de tamaño, tipo de masa e ingredientes.
          </p>
          <app-reconocimiento-malo></app-reconocimiento-malo>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-2">✅ Ejemplo Bueno: Selección Visual</h3>
          <p class="text-sm text-gray-600 mb-4">
            Permite elegir tamaño, masa e ingredientes mediante tarjetas visuales e iconos.
          </p>
          <app-reconocimiento-bueno></app-reconocimiento-bueno>
        </div>
      </div>
    </div>
  `,
})
export class H6Page {}
