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
  templateUrl: './h4-page.html',
})
export class H4Page {}
