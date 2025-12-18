import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicePageComponent } from './pages/services/service-page/service-page.component';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
  },    
  {
    path: 'lets-talk',
    loadComponent: () =>
      import('./pages/lets-talk/lets-talk.component').then(
        m => m.LetsTalkComponent
      ),
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component').then(
        m => m.ServicesComponent
      ),
  },
  {
  path: 'services/:slug',
  component: ServicePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
