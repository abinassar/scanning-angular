import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { TWAINDefaultSettings, 
        TWAINScanSettings,  
        ScanDefaultSettings,
        ScanGeneralSettings} from '../models/sources-settings.model';
import { interval, Subscription } from 'rxjs';
import { ImageCompression, SaveFileType, } from 'src/models/image-format.model';
import { FileOutputFormat,
        fileFormatAndCompression } from '../models/image-format.model';



declare const myTest: any;
declare const loadImage: any;
declare const zoomIn: any;
declare const zoomOut: any;
declare const zoomTo: any;
declare const loadSources: any;
declare const initDevice: any;
declare const getDataSources: any;
declare const getSourceSettings: any;
declare const scanImage: any;
declare const nextPage: any;
declare const previousPage: any;
declare const bestFit: any;
declare const fitToWidth: any;
declare const fitToHeight: any;
declare const magnifying: any;
declare const deletePage: any;
declare const dataSettings: any;
declare const getImageFileFormat: any;
declare const saveLocalImage: any;

declare let dataSourcesSettingsdos: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'scanning-angular-app';
  subscription!: Subscription;
  stringReponse : string | null | undefined;
  TWAINSettings : TWAINScanSettings = TWAINDefaultSettings;
  ScanSettings : ScanGeneralSettings = ScanDefaultSettings;
  dataSourceSelected : string = "TWAIN2 FreeImage Software Scanner";
  dataSourcesSettings: any;
  indexSelectedSource: number = 0;
  fileFormatAndCompression = fileFormatAndCompression;
  imageFormatIndex: number = 0;
  constructor(private _dataService: DataService){}

  ngOnInit(): void {



    console.log("Image format ", fileFormatAndCompression[1].imageFormat);

    console.log("Image format ", fileFormatAndCompression[1].imageCompression);

    //Function to get data sources of every 100 miliseconds

    const source = interval(100);
    this.subscription = source.subscribe(()=>{
      this.getDataSources();
      if (this.dataSourcesSettings !== undefined) {
        localStorage.setItem("DataSources", JSON.stringify(this.dataSourcesSettings));
      }
    })

  

  }

  getImageFileFormat(){
    getImageFileFormat();
  }

  getDataSources(){
    this.dataSourcesSettings = dataSettings;
  }  

  saveLocalImage(){
    saveLocalImage("pruebaLOCAL", 40, 3, 2);
  }

  changeSource(event: any){
    this.dataSourceSelected = event.source.selected.viewValue;
    this.indexSelectedSource = this.dataSourcesSettings[0].SourceName.findIndex(
      (source: any) => source === this.dataSourceSelected
    )
  }

  changeImageFormat(event: any){
    console.log("Index of image format ", event);
  }

  getImageFormatIndex(index: number){
    this.imageFormatIndex = index;
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

  getSourceSettings(){
    getSourceSettings('TWAIN2 FreeImage Software Scanner');
  }

  getLocalData(){
    let localData = localStorage.getItem("DataSources");
    console.log("Data del local estorage ", localData);
    // return localData;
  }

  _getLocalData(){
  }

  scanImage() {
    this.ScanSettings.SourceName = this.dataSourceSelected;
    // console.log("TWAIN settings ", this.TWAINSettings);
    // console.log("Scan settings ", this.ScanSettings);
    scanImage(this.ScanSettings , this.TWAINSettings);
  }

  initDevice(){
    initDevice();
  }

  // Functions to edit images

  nextPage(){
    nextPage();
  }

  previousPage(){
    previousPage();
  }

  bestFit(){
    bestFit();
  }

  fitToWidth(){
    fitToWidth();
  }

  magnifying(){
    magnifying();
  }

  fitToHeight(){
    fitToHeight();
  }

  zoomIn(){
    zoomIn();
  }

  zoomOut(){
    zoomOut();
  }

  zoomTo(){
    zoomTo();
  }

  loadImage(){
    loadImage();
  }

  deletePage(){
    deletePage();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
