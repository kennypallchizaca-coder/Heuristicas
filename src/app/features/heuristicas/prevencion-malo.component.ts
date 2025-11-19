import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prevencion-malo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prevencion-malo.component.html',
})
export class PrevencionMaloComponent {
  accountNumber = '';
  amount = '';

  transfer() {
    console.log('Transferencia realizada');
  }
}

