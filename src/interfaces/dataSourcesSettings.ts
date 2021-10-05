export interface DataSourceSettings {
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
  AreaRegion: AreaRegion;
  ICapabilitiesValues: ICapabilitiesValues;
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

interface FileFormat {
  BMP: number;
  DEJAVU: number;
  EXIF: number;
  FPX: number;
  JFIF: number;
  JP2: number;
  JPX: number;
  PDF: number;
  PDFA: number;
  PDFA2: number;
  PICT: number;
  PNG: number;
  SPIFF: number;
  TIFF: number;
  TIFFMULTI: number;
  XBM: number;
}
