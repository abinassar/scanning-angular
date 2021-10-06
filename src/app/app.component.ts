import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { TWAINDefaultSettings, 
        TWAINScanSettings,  
        ScanDefaultSettings,
        ScanGeneralSettings} from '../interfaces/dataSourcesSettings';
declare const myTest: any;
declare const loadImage: any;
declare const ZoomIn: any;
declare const ZoomOut: any;
declare const ZoomTo: any;
declare const CheckConnection: any;
declare const loadSources: any;
declare const initDevice: any;
declare const sendData: any;
declare const _getDataSources: any;
declare const _getSourceSettings: any;
declare const _scanImage: any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scanning-angular-app';

  stringReponse : string | null | undefined;
  TWAINSettings : TWAINScanSettings | undefined;
  ScanSettings : ScanGeneralSettings | undefined;
  // dataSourceSettings : TWAINScanSettings | undefined;
  testNumber : number | undefined;

  constructor(private _dataService: DataService){
    // this.getData();
    // this.postData();
  }

  ngOnInit(): void {

    // this.dataSourceSettings = loadSources();
    // console.log("Data source settings ", this.dataSourceSettings);

    // this.testNumber = sendData();
    // console.log("Received data ", this.testNumber);

    // console.log("TWAIN default settings ", TWAINSettingsDefault);
    // this.dataSourceSettings = TWAINSettingsDefault;

    // console.log("Custom data ", this.dataSourceSettings.TwainCapabilities.CustomDSData);

    CheckConnection();
    // TODO: 
    // Use this websocket to communicate with the backend

    // this._dataService.getData().subscribe(resp => {

    //   this.stringReponse = resp.body || '{}';
    //   const obj = JSON.parse(this.stringReponse);
    //   console.log("response", obj)});
  }

  loadSources(){
    // this.dataSourceSettings = loadSources(true);
    loadSources(true);
    // console.log("Data sources settings ", JSON.stringify(this.dataSourceSettings));
  }

  _getSourceSettings(){
    _getSourceSettings('TWAIN2 FreeImage Software Scanner');
    // _getSourceSettings('HP Photosmart C4100 TWAIN');
  }

  _getDataSources(){
    // _getDataSources(true);

    let data = _getDataSources(true);

    console.log("data source data", data)

  }

  _scanImage() {
    this.TWAINSettings = TWAINDefaultSettings;
    this.ScanSettings = ScanDefaultSettings;
    _scanImage(this.ScanSettings , this.TWAINSettings);
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
