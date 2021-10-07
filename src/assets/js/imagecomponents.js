

var _webServiceURL ='http://localhost/IC.Web.Imaging/api';
// var _webServiceURL = "../../../ImageManagerService.svc";
var _imgEdit = null;
var _imgScan = new ImgScan();
var _imgThumbnails = new ImgThumbnails();
var _isMobile = true;


ICLoader.Initialize(_webServiceURL, function () {
    var _license = "";
    _imgEdit = new ImgEdit('imgEdit1');
    _imgScan = new ImgScan('imgScan1');
    _imgThumbnails = new ImgThumbnails('ImgThumbnails1');
    _imgThumbnails.ImgEditComponent = _imgEdit;
    _imgScan.ImgEditComponent = _imgEdit;
    _imgScan.SendImageInChunks = true;
    _imgEdit.WebServiceURL = _webServiceURL;
    _imgEdit.set_licenseValue(_license);
    GetDataSources(true);
});

function saveLocalData(_settings){
    if (typeof Storage !== "undefined" && ICUtils.isLocalStorageSupported()) {
        if (_settings !== null) {
            localStorage.setItem("DataSources", JSON.stringify(_settings));
        }
    }
    else {
        IEUtils.messageAlert("Local storage is not supported or not enabled. Check if your browser is not in Private mode.", 2);
    }
}


async function SendSources() {
    console.log('calling');
    const result = await GetDataSources();
    console.log(result);
    // expected output: "resolved"
  }

function GetDataSources(isTwain){

    if (_imgScan.ConnectionStatus !== ImgScan.ICWSocketStatus.CONNECTED) {
        _imgScan.OpenConnection(function () {
            _imgScan.GetScannerSources(function (sources) {
                if ((sources !== null) && (sources.length > 0)) {
                    // console.log("Sources 1 ", sources);

                    //Set settings of each source

                    let dataSourcesSettings = new Array();
                    
                    sources.forEach(function callback(currentSource, index) {
                        dataSourcesSettings.push(currentSource);
                    });
                    console.log("Data sources total ", dataSourcesSettings);
                    saveLocalData(dataSourcesSettings);
                }
                else {
                    alert('No scanner sources found.');
                }
            });
        });
    }
    else {
        _imgScan.GetScannerSources(function (sources) {
            if ((sources !== null) && (sources.length > 0)) {
                let dataSourcesSettings = new Array();

                sources.forEach(function callback(currentSource, index) {
                    dataSourcesSettings.push(currentSource);
                });
                console.log("Data sources total ", dataSourcesSettings);
                saveLocalData(dataSourcesSettings);
                // return dataSourcesSettings;
            }
            else {
                alert('No scanner sources found.');
                // return null;
            }
        });
    }

}

function _getSourceSettings(source){

    if (_imgScan.ConnectionStatus !== ImgScan.ICWSocketStatus.CONNECTED) {
        _imgScan.OpenConnection(function () {
            _imgScan.GetScannerSources(function (sources) {
                if ((sources !== null) && (sources.length > 0)) {

                    //Set settings of each source

                    _imgScan.GetScannerCaps(source, function (caps) {
                        console.log("Capabilities of scanner ", JSON.stringify(caps));
                    });
                }
                else {
                    alert('No scanner sources found.');
                }
            });
        });
    }
    else {
        _imgScan.GetScannerSources(function (sources) {
            if ((sources !== null) && (sources.length > 0)) {
                _imgScan.GetScannerCaps(source, function (caps) {
                    console.log("Capabilities of scanner ", JSON.stringify(caps));
                });
            }
            else {
                alert('No scanner sources found.');
            }
        });
    }
}

function _scanImage(_scanSettings, _TWAINSettings){
    console.log("Custom data in javascript ", _TWAINSettings.TwainCapabilities.CustomDSData);
    // if (_settings !== null) {
        if (_imgScan.ConnectionStatus !== ImgScan.ICWSocketStatus.CONNECTED) {
            _imgScan.OpenConnection(function () {
                _imgScan.GetScannerSources(function (sources) {
                    if ((sources !== null) && (sources.length > 0)) {
                        // loadSources(sources);
                        console.log("Sources 1 ", sources);
                        
                        //Set settings of each source
    
                        _imgScan.GetScannerCaps('TWAIN2 FreeImage Software Scanner', function (caps) {
                            console.log("Capabilities of scanner ", JSON.stringify(caps))
                            dataSourcesSettings = caps;
                            _updateScannerSettings(_scanSettings, _TWAINSettings);
                        });
                    }
                    else {
                        alert('No scanner sources found.');
                    }
                });
            });
        }
}

function _updateScannerSettings(_scanSettings, _TWAINSettings){

    _imgScan.ActiveSourceName = 'TWAIN2 FreeImage Software Scanner';
    _imgScan.DeviceSettings = new ImgScan.ICDeviceSettings();
    _imgScan.DeviceSettings.ImageRotation = ImgScan.ICImagePageRotationType.None;
    _imgScan.DeviceSettings.ImageAcquireMode = _scanSettings.ImageAcquireMode;
    _imgScan.DeviceSettings.FileNamePrefix = _scanSettings.FileNamePrefix;
    _imgScan.DeviceSettings.OutputFormat = _scanSettings.OutputFormat;
    _imgScan.DeviceSettings.OutputCompression = _scanSettings.OutputCompression;
    _imgScan.DeviceSettings.ImageBinarizationFilter = _scanSettings.BinarizationFilter;
    _imgScan.DeviceSettings.BlankPageTolerance = _scanSettings.BlankPageTolerance;
    _imgScan.DeviceSettings.ImagePageSeparation = _scanSettings.ImagePageSeparation;
    _imgScan.DeviceSettings.BarcodeTypes.push(_scanSettings.BarcodeTypes[0]);
    _imgScan.DeviceSettings.BarcodeSeparationValue = _scanSettings.BarcodeSeparationValue;
    _imgScan.DeviceSettings.PageCountSeparationValue = _scanSettings.PageCountSeparationValue;
    _imgScan.DeviceSettings.RemoveBlankPages = _scanSettings.RemoveBlankPages;
    _imgScan.DeviceSettings.RemoveBarcodePage = _scanSettings.RemoveBarcodePage;
    _imgScan.DeviceSettings.ShowScannerUI = _scanSettings.ShowScannerUI;
    _imgScan.DeviceSettings.IsBarcodeInFirstPage = _scanSettings.IsBarcodeInFirstPage;
    _imgScan.DeviceSettings.EnablePreview = _scanSettings.EnablePreview;
    _imgScan.DeviceSettings.OutputDirectory = _scanSettings.OutputDirectory;
    _imgScan.DeviceDriverType = _scanSettings.DeviceDriverType;

    // Set the TWAIN Settings

    _imgScan.SetTwainSettings = new ImgScan.TwainValues();
    _imgScan.SetTwainSettings.TwainCapabilities = new ImgScan.Capabilities();
    _imgScan.SetTwainSettings.TwainCapabilities.IsAutoDeskewEnabled = _TWAINSettings.TwainCapabilities.IsAutoDeskewEnabled;
    _imgScan.SetTwainSettings.TwainCapabilities.IsDuplexEnabled = _TWAINSettings.TwainCapabilities.IsDuplexEnabled;
    _imgScan.SetTwainSettings.TwainCapabilities.IsAutoBorderDetectionEnabled = _TWAINSettings.TwainCapabilities.IsAutoBorderDetectionEnabled;
    _imgScan.SetTwainSettings.TwainCapabilities.IsAutoScanEnabled = _TWAINSettings.TwainCapabilities.IsAutoScanEnabled;
    _imgScan.SetTwainSettings.TwainCapabilities.IsAutoFeedEnabled = _TWAINSettings.TwainCapabilities.IsAutoFeedEnabled;
    _imgScan.SetTwainSettings.TwainCapabilities.IsFeederEnabled = _TWAINSettings.TwainCapabilities.IsFeederEnabled;
    _imgScan.SetTwainSettings.TwainCapabilities.IsAutoRotationEnabled = _TWAINSettings.TwainCapabilities.IsAutoRotationEnabled;
    _imgScan.SetTwainSettings.TwainICapabilities = new ImgScan.ImageCapabilities();
    _imgScan.SetTwainSettings.TwainICapabilities.UnitsValue = ImgScan.ICAP_UNITS.INCHES;
    _imgScan.SetTwainSettings.TwainICapabilities.ImageXferMech = _TWAINSettings.TwainICapabilities.ImageXferMech;
    _imgScan.SetTwainSettings.TwainICapabilities.ImageFileFormatValue = _TWAINSettings.TwainICapabilities.ImageFileFormatValue;
    _imgScan.SetTwainSettings.TwainICapabilities.PaperOrientationValue = _TWAINSettings.TwainICapabilities.PaperOrientationValue;
    _imgScan.SetTwainSettings.TwainICapabilities.PaperSizeValue = _TWAINSettings.TwainICapabilities.PaperSizeValue;
    _imgScan.SetTwainSettings.TwainICapabilities.XResolutionValue = _TWAINSettings.TwainICapabilities.XResolutionValue;
    _imgScan.SetTwainSettings.TwainICapabilities.YResolutionValue = _TWAINSettings.TwainICapabilities.XResolutionValue;
    _imgScan.SetTwainSettings.TwainICapabilities.PixelTypeValue = _TWAINSettings.TwainICapabilities.PixelTypeValue;
    _imgScan.SetTwainSettings.TwainICapabilities.IsAutoBrightEnabled = _TWAINSettings.TwainICapabilities.IsAutoBrightEnabled;
    _imgScan.SetTwainSettings.TwainICapabilities.IsAutoRemoveBlankPagesEnabled = _TWAINSettings.TwainICapabilities.IsAutoRemoveBlankPagesEnabled;
    _imgScan.SetTwainSettings.TwainICapabilities.BrightnessValue = _TWAINSettings.TwainICapabilities.BrightnessValue;
    _imgScan.SetTwainSettings.TwainICapabilities.ContrastValue = _TWAINSettings.TwainICapabilities.ContrastValue;
    _imgScan.SetTwainSettings.TwainICapabilities.UnitsValue = ImgScan.ICAP_UNITS.INCHES;
    _imgScan.Acquire();
}

function loadImage(){
	_imgEdit.DisplayUrl('http://www.scielo.org.co/pdf/recis/v7n3/v7n3a6.pdf');
}

function ZoomIn(){
    _imgEdit.MoreZoom();
}

function ZoomOut(){
    _imgEdit.LessZoom();
}

function ZoomTo(){
    _imgEdit.EnableSelectionType = ImgEdit.ICSelectionType.ZOOMSELECTION;
}

function NextPage(){
    _imgEdit.NextPage();
}

function PreviousPage(){
    _imgEdit.PreviousPage();
}

function RotateRight(){
    _imgEdit.RotateRight();
}

function RotateLeft(){
    _imgEdit.RotateLeft();
}

function BestFit(){
    _imgEdit.FitTo(ImgEdit.ICImageFit.BESTFIT, true);
}

function FitToWidth(){
    _imgEdit.FitTo(ImgEdit.ICImageFit.FITTOWIDTH, true);
}

function FitToHeight(){
    _imgEdit.FitTo(ImgEdit.ICImageFit.FITTOHEIGHT, true);
}

function Magnifying(){
    _imgEdit.EnableSelectionType = ImgEdit.ICSelectionType.MAGNIFYINGGLASS;
}

function DeletePage(){
    _imgEdit.DeletePage(_imgEdit.SelectedPage);
}

