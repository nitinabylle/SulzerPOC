import { Component, OnInit, Input, ViewChildren, QueryList, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { DropDownModel } from '../model/DropDownModel';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements  OnInit {
   trayType:any;
   valueType:any;
   fileToUpload: File | null = null;
  ngOnInit(): void {
    var dropDown= new DropDownModel();
    this.trayType = dropDown['TrayType'];
    this.valueType = dropDown['ValveType'];
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
 }

}