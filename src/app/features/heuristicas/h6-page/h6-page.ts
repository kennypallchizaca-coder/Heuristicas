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
  templateUrl: './h6-page.html',
})
export class H6Page {}
