import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reconocimiento-malo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reconocimiento-malo.component.html',
})
export class ReconocimientoMaloComponent {
  size = '';
  crust = '';
  toppings = '';
}

