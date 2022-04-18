import { Component, OnInit } from '@angular/core';
import { DropDownModel } from '../model/DropDownModel';
import { SectionContentModel, SectionModel } from '../model/SectionModel';
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
  DeckType:any;
  DownComer: any;
  elementContain:SectionModel;
  section:SectionContentModel;
  fileToUpload: File | null = null;
  constructor(
    private _services: AppService
  ) { }

  ngOnInit(): void {
    var dropDown= new DropDownModel();
    this.section =Object.assign(new SectionContentModel() ,this._services.getSectionContain());
    this.elementContain = this._services.getSectionElement();
    this.trayType = dropDown['TrayType'];
    this.valueType = dropDown['ValveType'];
    this.PanelLayout = dropDown['PanelLayout'];
    this.DeckType = dropDown['DeckType'];
    this.DownComer = dropDown['DownComer']
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
 }


}
