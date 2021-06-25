import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'fnol',
    pathMatch: 'full',
  },
  {
    path: 'fnol',
    loadChildren: () => import('./fnol/fnol.module').then((m) => m.FnolModule),
  },
  {
    path: '**',
    component: EmptyRouteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
