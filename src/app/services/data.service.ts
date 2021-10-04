import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _httpClient: HttpClient) { }

  getData() {

    // const httpOptions : any    = {
    //   headers: new HttpHeaders({
    //     'MESSAGE': 'GET_SOURCES'
    //   })
    // };

    // const params = new HttpParams()
    //       .set('MESSAGE', 'GET_SOURCES');
    
    //  this._httpClient.get('http://localhost:4649',  {observe: 'response', headers: httpOptions, params})
    // .subscribe(resp => {
    //   console.log("Headers obtenidos ", resp);
    // })

    const httpOptions : any    = {
      headers: new HttpHeaders({
        'MESSAGE': 'GET_SOURCES'
      })
    };

    const body = { title: 'Angular POST Request Example' };

    const params = new HttpParams()
          .set('MESSAGE', 'GET_SOURCES');
    
     return this._httpClient.get('http://localhost:4649', {
       observe: 'response',  
       params, 
       responseType: 'text',
      })
  }

  postData() {

    const httpOptions : any    = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Origin': '*'
      })
    };

    const headers = new HttpHeaders()
  .set('MESSAGE', 'SCAN_IMAGE')
  .set('Access-Control-Allow-Origin', '*');

    return this._httpClient.post("http://localhost:4649", httpOptions);
  }
}
