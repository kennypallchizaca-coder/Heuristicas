import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-mundo-real-bueno',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mundo-real-bueno.component.html',
})
export class MundoRealBuenoComponent {
  lastOperation = signal('');

  executeOperation(action: string) {
    this.lastOperation.set(action);
  }
}

