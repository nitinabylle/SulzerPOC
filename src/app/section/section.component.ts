import { Component, OnInit } from '@angular/core';
import { DropDownModel } from '../model/DropDownModel';
import { AppService } from '../shared/service-proxies/service.proxies';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  trayType:any;
  valueType:any;
  PanelLayout:any;
  fileToUpload: File | null = null;
  constructor(
    private _services: AppService
  ) { }

  ngOnInit(): void {
    var dropDown= this._services.getSectionContain();
    this.trayType = dropDown['TrayType'];
    this.valueType = dropDown['ValveType'];
    this.PanelLayout = dropDown['PanelLayout'];
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
 }


}
