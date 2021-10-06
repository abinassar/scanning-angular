import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Http Cliente
import { HttpClientModule } from '@angular/common/http';
import { ScanViewerComponent } from './shared/Components/scan-viewer/scan-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    ScanViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
