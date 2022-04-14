import { Component, OnInit } from '@angular/core';
import { DropDownModel } from '../model/DropDownModel';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  trayType:any;
  valueType:any;
  fileToUpload: File | null = null;
  constructor() { }

  ngOnInit(): void {
    var dropDown= new DropDownModel();
    this.trayType = dropDown['TrayType'];
    this.valueType = dropDown['ValveType'];
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
 }


}
