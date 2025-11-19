import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-libertad-malo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './control-libertad-malo.component.html',
})
export class ControlLibertadMaloComponent {
  content = '';
  showModal = signal(false);

  saveText() {
    this.showModal.set(true);
    setTimeout(() => {
      this.showModal.set(false);
    }, 5000);
  }
}

