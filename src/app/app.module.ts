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
import { AppService } from './shared/service-proxies/service.proxies';
import { HttpClientModule } from '@angular/common/http';



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
    TreeviewModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
