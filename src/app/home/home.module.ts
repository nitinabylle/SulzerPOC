import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TreeviewModule } from '../treeview/treeview.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    TreeviewModule,
    FormsModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }