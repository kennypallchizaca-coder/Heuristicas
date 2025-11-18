import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-estado-sistema-malo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="p-6 max-w-md mx-auto bg-white rounded shadow">
      <h2 class="text-xl mb-4">Subir Archivo</h2>

      <input type="file" (change)="onFileSelect($event)" class="mb-4" />

      <button (click)="uploadFile()" class="bg-blue-500 text-white px-4 py-2 rounded">
        Subir
      </button>

      <div class="mt-4">
        <p>Resultado aparecerá aquí...</p>
      </div>
    </div>
  `,
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

