import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prevencion-bueno',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prevencion-bueno.component.html',
})
export class PrevencionBuenoComponent {
  accountNumber = '';
  amount = 0;

  accountValid = signal<boolean | null>(null);
  processing = signal(false);

  validateAccount() {
    const cleaned = this.accountNumber.replace(/[^0-9]/g, '');
    if (cleaned.length <= 16) {
      const formatted = cleaned.replace(/(.{4})/g, '$1-').replace(/-$/, '');
      this.accountNumber = formatted;
    }
    this.accountValid.set(cleaned.length === 16);
  }

  // Validación visual principalmente por restricciones del input
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  validateAmount() {}

  readyToTransfer(): boolean {
    return this.accountValid() === true && this.amount > 0 && this.amount <= 10000;
  }

  transfer() {
    if (!this.readyToTransfer()) return;

    const confirmMessage =
      this.amount > 5000
        ? `¿Confirmar transferencia de $${this.amount}? MONTO ALTO - Esta acción no se puede deshacer.`
        : `¿Confirmar transferencia de $${this.amount}?`;

    if (confirm(confirmMessage)) {
      this.processing.set(true);
      setTimeout(() => {
        this.processing.set(false);
        alert('Transferencia completada');
      }, 2000);
    }
  }
}

