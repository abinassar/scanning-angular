export interface TWAINScanSettings {
  TwainCapabilities: TwainCapabilities;
  TwainICapabilities: TwainICapabilities;
}

export interface TwainICapabilities {
  ImageXferMech: number;
  ImageFileFormatValue: number;
  PaperOrientationValue: number;
  PaperSizeValue: number;
  XResolutionValue: number;
  YResolutionValue: number;
  PixelTypeValue: number;
  IsAutoBrightEnabled?: any;
  IsAutoRemoveBlankPagesEnabled?: any;
  UnitsValue: number;
  BrightnessValue: number;
  ContrastValue: number;
  AreaRegion?: AreaRegion;
  ICapabilitiesValues?: ICapabilitiesValues;
}

export interface ICapabilitiesValues {
  ImageXferMechs: number[];
  ImageFileFormats: number[];
  PaperSizes: number[];
  PixelTypes: number[];
  PaperOrientations: number[];
  XResolutions: number[];
  YResolutions: number[];
}

export interface AreaRegion {
  Units: number;
  Top: number;
  Left: number;
  Bottom: number;
  Right: number;
}

export interface TwainCapabilities {
  CustomDSData: boolean;
  ImageXferCount: number;
  IsAutoDeskewEnabled?: any;
  IsAutoBorderDetectionEnabled?: any;
  IsAutoRotationEnabled?: any;
  IsDuplexEnabled: boolean;
  DuplexTypeValue: number;
  IsFeederEnabled: boolean;
  IsAutoFeedEnabled: boolean;
  IsAutoScanEnabled?: any;
  AbortWhenNoPaperDetected: boolean;
  ShowProgressIndicator: boolean;
}

export interface ScanGeneralSettings {
  SourceName: string;
  ImageAcquireMode?: number;
  FileNamePrefix?: string;
  OutputFormat?: number;
  OutputCompression?: number;
  BinarizationFilter?: number;
  PageCountSeparationValue?: number;
  RemoveBlankPages?: boolean;
  BlankPageRemoveBorders?: boolean;
  BlankPageRemoveEmptyData?: boolean;
  ImageRotation?: number;
  RemoveImagePageBorders?: boolean;
  SavePDFAsPDFA?: boolean;
  BlankPageMargin?: number;
  StopOnFirstResult?: boolean;
  ExtensiveSearch?: boolean;
  EnableCheckDigit?: boolean;
  ShowScannerUI: boolean;
  BlankPageTolerance?: number;
  OutputDirectory?: string;
  EnablePreview?: boolean;
  InsertAtPosition?: number;
  RaiseFeederEmptyError?: boolean;
  SaveJPGQuality?: number;
  ImagePageSeparation?: number;
  BarcodeTypes?: number[];
  BarcodeOrientations?: any[];
  BarcodeSeparationValue?: string;
  IsBarcodeInFirstPage?: boolean;
  RemoveBarcodePage?: boolean;
  ImageFileDirectory?: string;
  DeviceDriverType?: number;
}

export let ScanDefaultSettings: ScanGeneralSettings = {
  "SourceName": 'TWAIN2 FreeImage Software Scanner',
  "ImageAcquireMode": 0,
  "FileNamePrefix": "IMG",
  "OutputFormat": 0,
  "OutputCompression": 0,
  "BinarizationFilter": 0,
  "BlankPageTolerance": 0,
  "ImagePageSeparation": 0,
  "BarcodeTypes": [0],
  "BarcodeSeparationValue": "",
  "PageCountSeparationValue": 0,
  "RemoveBlankPages": false,
  "RemoveBarcodePage": false,
  "ShowScannerUI": false,
  "IsBarcodeInFirstPage": false,
  "EnablePreview": true,
  "OutputDirectory": "",
  "DeviceDriverType": 0
}

export let TWAINDefaultSettings: TWAINScanSettings = {
    "TwainCapabilities": {
      "CustomDSData": false,
      "ImageXferCount": -1,
      "IsAutoDeskewEnabled": false,
      "IsAutoBorderDetectionEnabled": false,
      "IsAutoRotationEnabled": false,
      "IsDuplexEnabled": false,
      "DuplexTypeValue": 0,
      "IsFeederEnabled": true,
      "IsAutoFeedEnabled": true,
      "IsAutoScanEnabled": false,
      "AbortWhenNoPaperDetected": false,
      "ShowProgressIndicator": false
    },
    "TwainICapabilities": {
      "ImageXferMech": 0,
      "ImageFileFormatValue": 2,
      "PaperOrientationValue": 0,
      "PaperSizeValue": 0,
      "XResolutionValue": 100,
      "YResolutionValue": 100,
      "PixelTypeValue": 2,
      "IsAutoBrightEnabled": false,
      "IsAutoRemoveBlankPagesEnabled": 0,
      "UnitsValue": 0,
      "BrightnessValue": 0,
      "ContrastValue": 0
    }
}
