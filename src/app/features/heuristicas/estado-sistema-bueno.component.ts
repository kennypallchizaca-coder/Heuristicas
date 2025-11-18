import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type EstadoSubida = 'idle' | 'preparing' | 'uploading' | 'completed';

@Component({
  selector: 'app-estado-sistema-bueno',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg border">
      <div class="flex items-center mb-4">
        <span class="text-2xl mr-3">📁</span>
        <h2 class="text-xl font-semibold">Subir Archivo</h2>
      </div>

      <div class="mb-4">
        <input
          type="file"
          (change)="onFileSelect($event)"
          class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />

        @if (selectedFile) {
          <div class="mt-2 flex items-center text-sm text-green-600">
            <span class="mr-2">✅</span>
            Archivo seleccionado: {{ selectedFile.name }}
          </div>
        }
      </div>

      <button
        (click)="uploadFile()"
        [disabled]="!selectedFile || isUploading()"
        class="w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center"
        [ngClass]="{
          'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer':
            selectedFile && !isUploading() && !uploadComplete(),
          'bg-gray-300 text-gray-500 cursor-not-allowed': !selectedFile,
          'bg-orange-500 text-white cursor-not-allowed': isUploading(),
          'bg-green-500 text-white': uploadComplete()
        }"
      >
        @if (isUploading()) {
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Subiendo... {{ progress() }}%
        } @else if (uploadComplete()) {
          <span class="mr-2">✅</span>
          ¡Subido Exitosamente!
        } @else {
          <span class="mr-2">📤</span>
          {{ selectedFile ? 'Subir Archivo' : 'Selecciona un archivo' }}
        }
      </button>

      @if (isUploading() || uploadComplete()) {
        <div class="mt-4">
          <div class="flex justify-between text-sm text-gray-600 mb-1">
            <span>Progreso de subida</span>
            <span>{{ progress() }}%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div
              class="h-2 rounded-full transition-all duration-300 ease-out"
              [ngClass]="{
                'bg-gradient-to-r from-blue-400 to-blue-600': progress() < 100,
                'bg-gradient-to-r from-green-400 to-green-600': progress() === 100
              }"
              [style.width.%]="progress()"
            ></div>
          </div>
        </div>
      }

      <div
        class="mt-4 p-3 rounded-lg"
        [ngClass]="{
          'bg-blue-50 border border-blue-200': currentStatus() === 'preparing',
          'bg-orange-50 border border-orange-200': currentStatus() === 'uploading',
          'bg-green-50 border border-green-200': currentStatus() === 'completed',
          'bg-gray-50 border border-gray-200': currentStatus() === 'idle'
        }"
      >
        <div class="flex items-center text-sm">
          <span class="mr-2">{{ getStatusIcon() }}</span>
          <span class="font-medium">{{ getStatusMessage() }}</span>
        </div>
      </div>
    </div>
  `,
})
export class EstadoSistemaBuenoComponent {
  selectedFile: File | null = null;
  isUploading = signal(false);
  uploadComplete = signal(false);
  progress = signal(0);
  currentStatus = signal<EstadoSubida>('idle');

  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement | null;
    this.selectedFile = input?.files?.[0] ?? null;
    if (this.selectedFile) {
      this.currentStatus.set('preparing');
      this.uploadComplete.set(false);
      this.progress.set(0);
    }
  }

  uploadFile() {
    if (!this.selectedFile || this.isUploading()) return;

    this.isUploading.set(true);
    this.currentStatus.set('uploading');
    this.progress.set(0);

    const interval = setInterval(() => {
      const currentProgress = this.progress();
      if (currentProgress < 100) {
        const increment = Math.random() * 15 + 5;
        const newProgress = Math.min(currentProgress + increment, 100);
        this.progress.set(Math.floor(newProgress));
      } else {
        clearInterval(interval);
        this.isUploading.set(false);
        this.uploadComplete.set(true);
        this.currentStatus.set('completed');
      }
    }, 200);
  }

  getStatusIcon(): string {
    switch (this.currentStatus()) {
      case 'preparing':
        return '📋';
      case 'uploading':
        return '⬆️';
      case 'completed':
        return '✅';
      default:
        return '💤';
    }
  }

  getStatusMessage(): string {
    switch (this.currentStatus()) {
      case 'preparing':
        return 'Listo para subir - Haz clic en el botón';
      case 'uploading':
        return `Subiendo archivo... ${this.progress()}% completado`;
      case 'completed':
        return '¡Archivo subido exitosamente al servidor!';
      default:
        return 'Esperando selección de archivo...';
    }
  }
}

