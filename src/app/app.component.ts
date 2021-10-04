import { Component } from '@angular/core';
import { DataService } from './services/data.service';
declare const myTest: any;
declare const loadImage: any;
declare const ZoomIn: any;
declare const ZoomOut: any;
declare const ZoomTo: any;
declare const CheckConnection: any;
declare const loadSources: any;
declare const initDevice: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scanning-angular-app';

  stringReponse : string | null | undefined;

  constructor(private _dataService: DataService){
    // this.getData();
    // this.postData();
  }

  ngOnInit(): void {

    CheckConnection();
    // TODO: 
    // Use this websocket to communicate with the backend

    // this._dataService.getData().subscribe(resp => {

    //   this.stringReponse = resp.body || '{}';
    //   const obj = JSON.parse(this.stringReponse);
    //   console.log("response", obj)});
  }

  loadSources(){
    loadSources(true);
  }

  initDevice(){
    initDevice();
  }

  onClick(){
      myTest();
  }

  ZoomIn(){
    ZoomIn();
  }

  ZoomOut(){
    ZoomOut();
  }

  ZoomTo(){
    ZoomTo();
  }

  loadImage(){
    loadImage();
  }

  CheckConnection(){
    CheckConnection();
  }

  getData(){
    // this._dataService.getData().subscribe(
    //   (data) => console.log("Esta es la data del servidor websocket", data)
    // )
    // this._dataService.getData().subscribe(Resp => {
    //   console.log("Get data source from angular ", Resp);
    // })
  }

  postData(){
    // this._dataService.getData().subscribe(
    //   (data) => console.log("Esta es la data del servidor websocket", data)
    // )
  }

}
