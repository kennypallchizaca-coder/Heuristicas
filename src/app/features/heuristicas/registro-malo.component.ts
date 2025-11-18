import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro-malo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 class="text-2xl mb-4">Registro de Usuario</h2>

      <form (ngSubmit)="onSubmit()">
        <input
          type="text"
          [(ngModel)]="nombre"
          name="nombre"
          placeholder="Nombre completo"
          class="w-full p-2 border mb-4"
        />

        <input
          type="email"
          [(ngModel)]="email"
          name="email"
          placeholder="Email"
          class="w-full p-2 border mb-4"
        />

        <input
          type="password"
          [(ngModel)]="password"
          name="password"
          placeholder="Contraseña"
          class="w-full p-2 border mb-4"
        />

        <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded">
          Registrar
        </button>
      </form>
    </div>
  `,
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

