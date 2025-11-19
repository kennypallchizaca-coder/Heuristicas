import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderHeuristicaComponent } from '../../../components/header-heuristica/header-heuristica.component';
import { MundoRealMaloComponent } from '../mundo-real-malo.component';
import { MundoRealBuenoComponent } from '../mundo-real-bueno.component';

@Component({
  selector: 'app-h2-page',
  standalone: true,
  imports: [CommonModule, HeaderHeuristicaComponent, MundoRealMaloComponent, MundoRealBuenoComponent],
  templateUrl: './h2-page.html',
})
export class H2Page {}
