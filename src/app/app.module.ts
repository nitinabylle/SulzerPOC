import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { TreeviewModule } from './treeview/treeview.module';
import { HeaderComponent } from './core/header/header.component';
import {LeftNavComponent} from './core/left-nav/left-nav.component';
import { SectionComponent } from './section/section.component'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HomeModule,
    TreeviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
