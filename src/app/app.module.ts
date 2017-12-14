import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { SharedModule } from './shared/shared.module'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { routing } from "./app.routing";
import { ServerApi } from "./server.apis";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    routing,
    FormsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    ServerApi
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
