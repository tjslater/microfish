import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material';
import {MatSliderModule} from '@angular/material';
import { MaterialRothkoComponent } from './material-rothko/material-rothko.component';
import { AppRoutingModule } from './app-routing.module';
import { RothkoComponent } from './rothko/rothko.component';


@NgModule({
  declarations: [
    AppComponent,
    MaterialRothkoComponent,
    RothkoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatSliderModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
