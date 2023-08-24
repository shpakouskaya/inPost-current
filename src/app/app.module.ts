import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QrGenerationComponent } from './components/qr-generation/qr-generation.component';
import { StepsComponent } from './components/steps/steps.component';
import {QrCodeService} from "./services/qr-code.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    QrGenerationComponent,
    StepsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [QrCodeService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
