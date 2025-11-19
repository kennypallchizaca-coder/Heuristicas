import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderHeuristicaComponent } from '../../../components/header-heuristica/header-heuristica.component';
import { ControlLibertadMaloComponent } from '../control-libertad-malo.component';
import { ControlLibertadBuenoComponent } from '../control-libertad-bueno.component';

@Component({
  selector: 'app-h3-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderHeuristicaComponent,
    ControlLibertadMaloComponent,
    ControlLibertadBuenoComponent,
  ],
  templateUrl: './h3-page.html',
})
export class H3Page {}
