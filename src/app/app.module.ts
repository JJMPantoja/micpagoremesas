import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RemesasComponent } from './components/remesas/remesas.component';
import { PagoRemesasModule } from './components/remesas/remesas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagoRemesasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
