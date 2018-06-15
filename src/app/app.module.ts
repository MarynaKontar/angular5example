import { BrowserModule } from '@angular/platform-browser';

// use for adding animations(home.component.ts: animations)
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

// use for two way data binding (двусторонней привязки данных)
import { FormsModule } from '@angular/forms';

// to share data between components
import {DataService} from './data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// появляются после создания компонентов home и about (через терминал: $ ng generate component home )
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
