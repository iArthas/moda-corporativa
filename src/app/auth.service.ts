// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  login(username: string, password: string): boolean {
    // Aquí podrías hacer la autenticación real, por ahora solo simularemos
    if (username === 'usuario' && password === '123') {
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    this.loggedIn = false;
  }
}
