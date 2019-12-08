import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DessertstoreRoutingModule } from './dessertstore-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    DessertstoreRoutingModule
  ]
})
export class DessertstoreModule { }
