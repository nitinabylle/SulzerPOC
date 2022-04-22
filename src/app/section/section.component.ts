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
  deckType:any;
  DownComer: any;
  SectionType: any;
  elementContain:SectionModel;
  section:SectionContentModel;
  fileToUpload: File | null = null;
  mySelectTrayType:number;
  mySelectDeckType:number;
  innerDiameter: number;
  constructor(
    private _services: AppService
  ) { }

  ngOnInit(): void {
    var dropDown= new DropDownModel();
    let url = window.location.href.split(/[/, ]+/).pop();
    this._services.getSectionContain(url).subscribe(result=>{
      this.section = Object.assign(new SectionContentModel(), result) ;
      this.elementContain = this._services.getSectionElement();
      this.innerDiameter=2700;
      this.trayType =  dropDown['TrayType'];
      this.valueType = dropDown['ValveType'];
      this.PanelLayout = dropDown['PanelLayout'];
      this.deckType = dropDown['DeckType'];
      this.DownComer = dropDown['DownComer'];
      this.SectionType = dropDown['SectionType'];
      this.mySelectTrayType = this.trayType.find(x=>x.name.toUpperCase()==this.section[0].TrayType.toUpperCase()).id;
      this.mySelectDeckType = this.deckType.find(x=>x.name.toUpperCase()==this.section[0].DeckType.toUpperCase()).id;
    });
    
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
 }


}
