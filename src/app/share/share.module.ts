import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './layout/nav/nav.component';
import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';



@NgModule({
  declarations: [NavComponent, MainlayoutComponent, FooterComponent],
  imports: [
    CommonModule, RouterModule
  ]
})
export class ShareModule { }
