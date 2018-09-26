import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RothkoComponent} from './rothko/rothko.component';
import {AppComponent} from './app.component';



const routes: Routes = [
  { path: 'rothko', component: RothkoComponent },
  { path: '', redirectTo: '/rothko', pathMatch: 'full' },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
