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
declare const loadSources: any;
declare const initDevice: any;
declare const GetDataSources: any;
declare const _getSourceSettings: any;
declare const _scanImage: any;
declare const NextPage: any;
declare const PreviousPage: any;
declare const BestFit: any;
declare const FitToWidth: any;
declare const FitToHeight: any;
declare const Magnifying: any;
declare const DeletePage: any;
declare const variableGlobal: any;


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
  dataArray: any;
  // dataSourceSettings : TWAINScanSettings | undefined;
  testNumber : number | undefined;

  constructor(private _dataService: DataService){}

  ngOnInit(): void {
    // console.log("Getting data sources");}

  this._getLocalData();

  }

  NextPage(){
    NextPage();
  }

  getSourcesAlt(){
    const asyncSources = async () => {
      const result = await GetDataSources(true);
      console.log("Result ", result)
      // return result
    }

    asyncSources();

    // const fetchEmployees = async ()=> {
    //   const api = 'http://dummy.restapiexample.com/api/v1/employees'
    //   try {
    //       const response = await fetch(api)
    //       return 
    //   } catch (error) {
    //       if (error) {
    //           return error.message
    //       }
    //   }
  // }

  }


  PreviousPage(){
    PreviousPage();
  }

  BestFit(){
    BestFit();
  }

  FitToWidth(){
    FitToWidth();
  }

  Magnifying(){
    Magnifying();
  }

  FitToHeight(){
    FitToHeight();
  }

  _getSourceSettings(){
    _getSourceSettings('TWAIN2 FreeImage Software Scanner');
    // _getSourceSettings('HP Photosmart C4100 TWAIN');
  }

  _getDataSources(){
    GetDataSources(true);
    // console.log("Data sources ", dataSources);
  }

  _getLocalData(){
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

  DeletePage(){
    DeletePage();
  }

}
