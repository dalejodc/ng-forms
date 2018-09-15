import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';
import { HeaderComponent } from './components/header/header.component';
import { NoValidatedComponent } from './components/no-validated/no-validated.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemplateComponent,
    DataComponent,
    HeaderComponent,
    NoValidatedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
