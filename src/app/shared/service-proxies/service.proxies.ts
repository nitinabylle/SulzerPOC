import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DropDownModel } from 'src/app/model/DropDownModel';
import { SectionModel } from 'src/app/model/SectionModel';

@Injectable({
    providedIn: 'root'
})

export class AppService {

    constructor(private http: HttpClient) { }

    rootURL = '/api';

    /**
     * 
     * @returns below methods can be merged
     */
    getSectionContain() {
        //return this.http.get(this.rootURL + '/contain'); open to call Api
        //return new DropDownModel();
        return [{"ProjectNo":9000017,"innerDiameter":2700,"QuotationNo":1,"ColumnNo":2,"SectionNo":1,"SequenceNo":1,"TrayType":"Conventional","TrayTypeCode":"BDH","DeckType":"Valve","TrayPanelLayout":"ex","TrayConstructionTypeCode":"01","TrayDowncomerType":0,"TrayArticleNo":"10004284","TrayMatNo":null,"TrayQuantity":10,"TraySpacing":6.095999804928006e+002,"TrayValveQuantity":677,"TraySubTypeCode":null,"TrayValveLift":1.270000000000000e+001,"TrayNo_NFA":1}];
    }

    getSectionElement() {
        //return this.http.get(this.rootURL + '/contain'); open to call Api
        return new SectionModel();
    }
}