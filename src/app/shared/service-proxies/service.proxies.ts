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
        return new DropDownModel();
    }

    getSectionElement() {
        //return this.http.get(this.rootURL + '/contain'); open to call Api
        return new SectionModel();
    }
}