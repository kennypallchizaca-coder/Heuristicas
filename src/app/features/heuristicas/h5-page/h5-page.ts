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
  templateUrl: './h5-page.html',
})
export class H5Page {}
