import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './pages/services/services.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ServicePageComponent } from './pages/services/service-page/service-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicePageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    FaqComponent,

    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
