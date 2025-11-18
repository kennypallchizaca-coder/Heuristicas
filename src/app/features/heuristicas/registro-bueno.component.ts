import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type EstadoValidacion = 'valid' | 'invalid' | 'neutral';

@Component({
  selector: 'app-registro-bueno',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div
      class="max-w-md mx-auto mt-8 p-6 bg-white rounded-xl shadow-2xl border border-gray-200"
    >
      <div class="flex items-center mb-6">
        <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
          <span class="text-white font-bold">👤</span>
        </div>
        <h2 class="text-2xl font-bold text-gray-800">Registro de Usuario</h2>
      </div>

      <div class="mb-6">
        <div class="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progreso</span>
          <span>{{ calcularProgreso() }}%</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div
            class="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-500 ease-out"
            [style.width.%]="calcularProgreso()"
          ></div>
        </div>
      </div>

      <form (ngSubmit)="onSubmit()">
        <div class="mb-4">
          <div class="relative">
            <input
              type="text"
              [(ngModel)]="nombre"
              name="nombre"
              (input)="validarNombre()"
              placeholder="Nombre completo"
              class="w-full p-3 border-2 rounded-lg transition-all duration-200"
              [class]="getInputClass('nombre')"
            />

            <div class="absolute right-3 top-3">
              @if (validaciones().nombre === 'valid') {
                <span class="text-green-500 text-xl">✓</span>
              } @else if (validaciones().nombre === 'invalid') {
                <span class="text-red-500 text-xl">✗</span>
              }
            </div>
          </div>

          @if (validaciones().nombre === 'invalid') {
            <p class="text-red-500 text-sm mt-1 flex items-center">
              <span class="mr-1">⚠️</span>
              El nombre debe tener al menos 3 caracteres
            </p>
          }
        </div>

        <div class="mb-4">
          <div class="relative">
            <input
              type="email"
              [(ngModel)]="email"
              name="email"
              (input)="validarEmail()"
              placeholder="correo@ejemplo.com"
              class="w-full p-3 border-2 rounded-lg transition-all duration-200"
              [class]="getInputClass('email')"
            />

            <div class="absolute right-3 top-3">
              @if (validaciones().email === 'valid') {
                <span class="text-green-500 text-xl">✓</span>
              } @else if (validaciones().email === 'invalid') {
                <span class="text-red-500 text-xl">✗</span>
              }
            </div>
          </div>

          @if (validaciones().email === 'invalid') {
            <p class="text-red-500 text-sm mt-1 flex items-center">
              <span class="mr-1">⚠️</span>
              Ingresa un email válido
            </p>
          }
        </div>

        <div class="mb-6">
          <div class="relative">
            <input
              type="password"
              [(ngModel)]="password"
              name="password"
              (input)="validarPassword()"
              placeholder="Contraseña segura"
              class="w-full p-3 border-2 rounded-lg transition-all duration-200"
              [class]="getInputClass('password')"
            />

            <div class="absolute right-3 top-3">
              @if (validaciones().password === 'valid') {
                <span class="text-green-500 text-xl">✓</span>
              } @else if (validaciones().password === 'invalid') {
                <span class="text-red-500 text-xl">✗</span>
              }
            </div>
          </div>

          @if (password.length > 0) {
            <div class="mt-2">
              <div class="flex space-x-1">
                @for (nivel of [1, 2, 3, 4]; track nivel) {
                  <div class="h-2 flex-1 rounded" [class]="getPasswordStrengthClass(nivel)"></div>
                }
              </div>
              <p class="text-sm mt-1" [class]="getPasswordTextClass()">
                {{ getPasswordStrengthText() }}
              </p>
            </div>
          }
        </div>

        <button
          type="submit"
          [disabled]="!formularioValido() || enviando()"
          class="w-full p-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center"
          [class]="getButtonClass()"
        >
          @if (enviando()) {
            <svg
              class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
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
            Procesando...
          } @else if (registroExitoso()) {
            <span class="mr-2">✅</span>
            ¡Registrado exitosamente!
          } @else {
            <span class="mr-2">🚀</span>
            Crear Cuenta
          }
        </button>
      </form>

      @if (mensaje()) {
        <div class="mt-4 p-3 rounded-lg" [class]="getMensajeClass()">
          <div class="flex items-center">
            <span class="mr-2">{{ mensaje()?.tipo === 'success' ? '✅' : '⚠️' }}</span>
            {{ mensaje()?.texto }}
          </div>
        </div>
      }
    </div>
  `,
})
export class RegistroBuenoComponent {
  nombre = '';
  email = '';
  password = '';

  enviando = signal(false);
  registroExitoso = signal(false);
  mensaje = signal<{ tipo: 'success' | 'error'; texto: string } | null>(null);

  validaciones = signal<{
    nombre: EstadoValidacion;
    email: EstadoValidacion;
    password: EstadoValidacion;
  }>({
    nombre: 'neutral',
    email: 'neutral',
    password: 'neutral',
  });

  passwordStrength = signal(0);

  validarNombre() {
    const valido = this.nombre.trim().length >= 3;
    this.validaciones.update((v) => ({ ...v, nombre: valido ? 'valid' : 'invalid' }));
  }

  validarEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valido = emailRegex.test(this.email);
    this.validaciones.update((v) => ({ ...v, email: valido ? 'valid' : 'invalid' }));
  }

  validarPassword() {
    const value = this.password;
    let strength = 0;
    if (value.length >= 8) strength++;
    if (/[A-Z]/.test(value)) strength++;
    if (/[0-9]/.test(value)) strength++;
    if (/[^A-Za-z0-9]/.test(value)) strength++;

    this.passwordStrength.set(strength);
    const valido = strength >= 3;
    this.validaciones.update((v) => ({ ...v, password: valido ? 'valid' : 'invalid' }));
  }

  calcularProgreso(): number {
    const validCount = Object.values(this.validaciones()).filter((v) => v === 'valid').length;
    return Math.round((validCount / 3) * 100);
  }

  formularioValido(): boolean {
    return Object.values(this.validaciones()).every((v) => v === 'valid');
  }

  getInputClass(campo: 'nombre' | 'email' | 'password'): string {
    const estado = this.validaciones()[campo];
    const baseClass = 'focus:outline-none focus:ring-2';

    switch (estado) {
      case 'valid':
        return `${baseClass} border-green-500 focus:border-green-500 focus:ring-green-200`;
      case 'invalid':
        return `${baseClass} border-red-500 focus:border-red-500 focus:ring-red-200`;
      default:
        return `${baseClass} border-gray-300 focus:border-blue-500 focus:ring-blue-200`;
    }
  }

  getPasswordStrengthClass(nivel: number): string {
    if (nivel <= this.passwordStrength()) {
      switch (this.passwordStrength()) {
        case 1:
          return 'bg-red-400';
        case 2:
          return 'bg-orange-400';
        case 3:
          return 'bg-yellow-400';
        case 4:
          return 'bg-green-400';
        default:
          return 'bg-gray-200';
      }
    }
    return 'bg-gray-200';
  }

  getPasswordStrengthText(): string {
    switch (this.passwordStrength()) {
      case 1:
        return '🔴 Débil - Agrega mayúsculas y números';
      case 2:
        return '🟠 Regular - Incluye símbolos especiales';
      case 3:
        return '🟡 Buena - Muy bien, es segura';
      case 4:
        return '🟢 Excelente - Contraseña muy segura';
      default:
        return 'Mínimo 8 caracteres';
    }
  }

  getPasswordTextClass(): string {
    switch (this.passwordStrength()) {
      case 1:
        return 'text-red-500';
      case 2:
        return 'text-orange-500';
      case 3:
        return 'text-yellow-600';
      case 4:
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  }

  getButtonClass(): string {
    if (this.enviando()) {
      return 'bg-blue-400 cursor-not-allowed text-white';
    }
    if (this.registroExitoso()) {
      return 'bg-green-500 text-white';
    }
    if (this.formularioValido()) {
      return 'bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105';
    }
    return 'bg-gray-300 cursor-not-allowed text-gray-500';
  }

  getMensajeClass(): string {
    const tipo = this.mensaje()?.tipo;
    return tipo === 'success'
      ? 'bg-green-50 border border-green-200 text-green-800'
      : 'bg-red-50 border border-red-200 text-red-800';
  }

  onSubmit() {
    if (!this.formularioValido() || this.enviando()) return;

    this.enviando.set(true);
    this.mensaje.set(null);

    setTimeout(() => {
      this.enviando.set(false);
      this.registroExitoso.set(true);
      this.mensaje.set({
        tipo: 'success',
        texto: '¡Cuenta creada exitosamente! Revisa tu email para confirmar.',
      });
    }, 2000);
  }
}

