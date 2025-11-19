import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-estado-sistema-malo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './estado-sistema-malo.component.html',
})
export class EstadoSistemaMaloComponent {
  selectedFile: File | null = null;

  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement | null;
    this.selectedFile = input?.files?.[0] ?? null;
  }

  uploadFile() {
    if (!this.selectedFile) return;

    setTimeout(() => {
      console.log('Archivo subido');
    }, 3000);
  }
}

