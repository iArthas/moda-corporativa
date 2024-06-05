import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule} from '@angular/forms';


@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    if (this.authService.login(this.username, this.password)) {
      // Inicio de sesión exitoso, redirige al componente de perfil
      this.router.navigate(['/perfil']);
    } else {
      // Error de inicio de sesión, manejar según sea necesario (por ejemplo, mostrar un mensaje de error)
    }
  }
}
