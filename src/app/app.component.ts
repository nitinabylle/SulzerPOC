import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SectionContentModel } from './model/SectionModel';
import { AppService } from './shared/service-proxies/service.proxies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SulpriceApp';
  isFullView=false;
  isLoad= false;
  section:SectionContentModel;
  currentItem:string;
  options=[
    {"code":"1","label":"Yellow"},
    {"code":"2","label":"Blue"},
    {"code":"3","label":"Green"},
    {"code":"4","label":"Black"},
    {"code":"5","label":"Red"},
    {"code":"6","label":"Purple"},
    {"code":"7","label":"Pink"},
  ]
  constructor(
    private _services: AppService
  ) { }
  ngOnInit(): void {
    this._services.getSectionContain().subscribe(result=>{
      this.isLoad = true;
      this.section = Object.assign(new SectionContentModel(), result) ;
      this.currentItem = this.section[0].ProjectNo.toString();
    });
  }
}
