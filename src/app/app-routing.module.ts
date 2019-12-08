import { HomeComponent } from './features/dessertstore/home/home.component';
import { MainlayoutComponent } from './share/layout/mainlayout/mainlayout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'desertstore', pathMatch: 'full' },
  { path: 'desertstore', loadChildren: () => import('./features/dessertstore/dessertstore.module').then(m => m.DessertstoreModule) }
  // {
  //   path: 'desertstore', component: MainlayoutComponent,
  //   children: [
  //     { path: '', redirectTo: 'home', pathMatch: 'full' },
  //     { path: 'home', component: HomeComponent }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
