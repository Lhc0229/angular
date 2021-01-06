import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PonserComponent} from './ponser/ponser.component'

const routes: Routes = [
  {
    path: 'ponser',
    component: PonserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
