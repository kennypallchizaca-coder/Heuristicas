import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro-malo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registro-malo.component.html',
})
export class RegistroMaloComponent {
  nombre = '';
  email = '';
  password = '';

  onSubmit() {
    setTimeout(() => {
      console.log('Usuario registrado');
    }, 3000);
  }
}

