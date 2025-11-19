import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type EstadoSubida = 'idle' | 'preparing' | 'uploading' | 'completed';

@Component({
  selector: 'app-estado-sistema-bueno',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './estado-sistema-bueno.component.html',
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

