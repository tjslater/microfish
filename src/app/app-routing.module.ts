import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RothkoComponent} from './rothko/rothko.component';


const routes: Routes = [
  {
    path: 'rothko', component: RothkoComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
