import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DropDownModel } from 'src/app/model/DropDownModel';

@Injectable({
    providedIn: 'root'
})

export class AppService {

    constructor(private http: HttpClient) { }

    rootURL = '/api';

    getSectionContain() {
        //return this.http.get(this.rootURL + '/contain'); open to call Api
        return new DropDownModel();
    }
}