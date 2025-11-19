import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-mundo-real-malo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mundo-real-malo.component.html',
})
export class MundoRealMaloComponent {
  lastOperation = signal('');

  executeOperation(op: string) {
    this.lastOperation.set(`Ejecutado: ${op}`);
  }
}

