import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { TWAINDefaultSettings, 
        TWAINScanSettings,  
        ScanDefaultSettings,
        ScanGeneralSettings} from '../interfaces/dataSourcesSettings';
import { MatRadioButton } from '@angular/material/radio';
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
declare const GetDataSourcesDos: any;
declare const _imgScan: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scanning-angular-app';

  stringReponse : string | null | undefined;
  TWAINSettings : TWAINScanSettings = TWAINDefaultSettings;
  ScanSettings : ScanGeneralSettings = ScanDefaultSettings;
  dataSourceSelected : string = "TWAIN2 FreeImage Software Scanner";
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
  

  changeSource(event: any){
    this.dataSourceSelected = event.source.selected.viewValue;
    console.log("Valor seleccionado ", event.source.selected.viewValue)
  }

  changeScannerUI(event: any){
    let checkedButton = event.source;
    this.ScanSettings.ShowScannerUI = checkedButton.checked;
  }

  changeADF(event: any){
    let checkedButton = event.source;
    this.TWAINSettings.TwainCapabilities.IsAutoScanEnabled = checkedButton.checked;
  }

  changeAutoRemoveBlankPage(event: any){
    let checkedButton = event.source;
    this.TWAINSettings.TwainICapabilities.IsAutoRemoveBlankPagesEnabled = checkedButton.checked;
  }

  changeDuplexScan(event: any){
    let checkedButton = event.source;
    this.TWAINSettings.TwainCapabilities.IsDuplexEnabled = checkedButton.checked;
  }

  changePixelType(event: any){
    let pixelType = parseInt(event.value);
    this.TWAINSettings.TwainICapabilities.PixelTypeValue = pixelType;
  }

  changeResolution(event: any){
    this.TWAINSettings.TwainICapabilities.XResolutionValue =  parseInt(event.source.selected.viewValue);
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


  GetDataSourcesDos(){
    // let sourcesObtenidos = GetDataSourcesDos();
    // console.log("Sources obtenidos ", sourcesObtenidos);
    // GetDataSourcesDos();

    _imgScan.GetScannerSources(function (sources: any) {
      if ((sources !== null) && (sources.length > 0)) {
          // console.log("Sources 1 ", sources);

          //Set settings of each source

          // let dataSourcesSettings = new Array();
          
          // sources.forEach(function callback(currentSource, index) {
          //     dataSourcesSettings.push(currentSource);
          // });
          console.log("Data sources DOS ", sources);
          
          // return sources;
          // saveLocalData(dataSourcesSettings);
      }
      else {
          alert('No scanner sources found.');
      }
  });

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
    this.ScanSettings.SourceName = this.dataSourceSelected;
    console.log("TWAIN settings ", this.TWAINSettings);
    console.log("Scan settings ", this.ScanSettings);
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
