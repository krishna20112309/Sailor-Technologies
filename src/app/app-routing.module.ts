import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
