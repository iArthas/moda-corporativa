import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PerfilComponent } from './perfil/perfil.component'; // Asegúrate de importar el componente PerfilComponent
import { AuthGuard } from './auth.guard'; // Asegúrate de importar el guardia AuthGuard
import { LoginComponent } from './login/login.component'; // Importa el componente LoginComponent

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] }, // Coloca esta ruta antes de la ruta wildcard
  { path: 'login', component: LoginComponent }, // Agrega la ruta para el componente LoginComponent
  { path: '**', component: NotFoundComponent } // La ruta wildcard debe estar al final
];

