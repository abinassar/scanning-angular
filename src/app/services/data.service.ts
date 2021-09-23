import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _httpClient: HttpClient) { }

  getData() {

    const headers = new HttpHeaders()
  .set('MESSAGE', 'OPEN_TWAIN_DMS')
  .set('Access-Control-Allow-Origin', '*');

    return this._httpClient.get("http://localhost:4649/Echo", { 'Headers': headers });
  }
}
