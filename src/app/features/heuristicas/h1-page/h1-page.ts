import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderHeuristicaComponent } from '../../../components/header-heuristica/header-heuristica.component';
import { EstadoSistemaMaloComponent } from '../estado-sistema-malo.component';
import { EstadoSistemaBuenoComponent } from '../estado-sistema-bueno.component';
import { RegistroMaloComponent } from '../registro-malo.component';
import { RegistroBuenoComponent } from '../registro-bueno.component';

@Component({
  selector: 'app-h1-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderHeuristicaComponent,
    EstadoSistemaMaloComponent,
    EstadoSistemaBuenoComponent,
    RegistroMaloComponent,
    RegistroBuenoComponent,
  ],
  templateUrl: './h1-page.html',
})
export class H1Page {}
