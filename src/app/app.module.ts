import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ShareModule } from './share/share.module';
import { DessertstoreModule } from './features/dessertstore/dessertstore.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ShareModule,
    DessertstoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
