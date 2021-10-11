

var _webServiceURL ='http://localhost/IC.Web.Imaging/api';
// var _webServiceURL = "../../../ImageManagerService.svc";
var _imgEdit = null;
var _imgScan = new ImgScan();
var _imgThumbnails = new ImgThumbnails();
var _isMobile = true;
var dataSettings;


ICLoader.Initialize(_webServiceURL, function () {
    var _license = "";
    _imgEdit = new ImgEdit('imgEdit');
    _imgScan = new ImgScan('imgScan');
    _imgThumbnails = new ImgThumbnails('ImgThumbnails');
    _imgThumbnails.ImgEditComponent = _imgEdit;
    _imgScan.ImgEditComponent = _imgEdit;
    _imgScan.SendImageInChunks = true;
    _imgEdit.WebServiceURL = _webServiceURL;
    _imgEdit.set_licenseValue(_license);
    getDataSources(true);
});

function saveLocalData(_settings, key){
    if (typeof Storage !== "undefined" && ICUtils.isLocalStorageSupported()) {
        if (_settings !== null) {
            localStorage.setItem(key, JSON.stringify(_settings));
        }
    }
    else {
        IEUtils.messageAlert("Local storage is not supported or not enabled. Check if your browser is not in Private mode.", 2);
    }
}

function getImageFileFormat(){
    let imageFormat = _imgEdit.ImageFileProperties.ImageFileFormat;
    console.log("Image format ", imageFormat);
}

function saveLocalImage(_fileName, _imageFormat, _imageCompression, _pageOptions){
    
    // _fileName += _imgEdit.ImageFileProperties.ImageFileExtension;

    _fileName += ".pdf";

    _imgEdit.ImageOCRLanguage = 0;
    _imgEdit.ICImageOCRType = 3;
    _imgEdit.SavePDFAsSearchable = false;
    _imgEdit.SavePDFAsPDFA = false;
    _imgEdit.SaveOutputType = ImgEdit.ICImageIOType.Local;
    _imgEdit.SavePNGFlags = ImgEdit.ICPNGImageFlags.BESTCOMPRESSION;
    _imgEdit.DownloadFile = true;
    _imgEdit.SaveImageAs(_fileName, _imageFormat, _imageCompression, _pageOptions);
}

function getDataSources(isTwain){

    if (_imgScan.ConnectionStatus !== ImgScan.ICWSocketStatus.CONNECTED) {
        _imgScan.OpenConnection(function () {
            _imgScan.GetScannerSources(function (sources) {
                if ((sources !== null) && (sources.length > 0)) {

                    dataSourcesSettings = [];

                    for (let index = 0; index < sources.length; index++) {
                        
                        _imgScan.GetScannerCaps(sources[index], function (caps) {

                            sourceObj = {};
                            sourceObj = {
                                SourceName: sources,
                                SourceSettings: caps
                            };
                            this.dataSourcesSettings.push(sourceObj);
                        });
                        
                    }
                    // Set settings of the data sources
                    dataSettings = dataSourcesSettings;
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

                console.log("Sources ", sources);

                dataSourcesSettings = [];

                for (let index = 0; index < sources.length; index++) {
                    
                    _imgScan.GetScannerCaps(sources[index], function (caps) {

                        sourceObj = {};
                        sourceObj = {
                            SourceName: sources,
                            SourceSettings: caps
                        };

                        this.dataSourcesSettings.push(sourceObj);
                    });
                    
                }
                // Set settings of the data sources
                dataSettings = dataSourcesSettings;
            }
            else {
                alert('No scanner sources found.');
            }
        });
}

}

function getSourceSettings(source){

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

function scanImage(scanSettings, TWAINSettings){

        if (_imgScan.ConnectionStatus !== ImgScan.ICWSocketStatus.CONNECTED) {
            _imgScan.OpenConnection(function () {
                _imgScan.GetScannerSources(function (sources) {
                    if ((sources !== null) && (sources.length > 0)) {
                        
                        //Set settings of each source
    
                        _imgScan.GetScannerCaps(scanSettings.SourceName, function (caps) {
                            dataSourcesSettings = caps;
                            
                            updateScannerSettings(scanSettings, TWAINSettings);
                        });
                    }
                    else {
                        alert('No scanner sources found.');
                    }
                });
            });
        }
        _imgScan.GetScannerSources(function (sources) {
            if ((sources !== null) && (sources.length > 0)) {
                
                //Set settings of each source

                _imgScan.GetScannerCaps(scanSettings.SourceName, function (caps) {
                    dataSourcesSettings = caps;
                    updateScannerSettings(scanSettings, TWAINSettings);
                });
            }
            else {
                alert('No scanner sources found.');
            }
        });
}

function updateScannerSettings(scanSettings, TWAINSettings){

    console.log("Source name Javascript ", scanSettings.SourceName);
    _imgScan.ActiveSourceName = scanSettings.SourceName;
    _imgScan.DeviceSettings = new ImgScan.ICDeviceSettings();
    _imgScan.DeviceSettings.ImageRotation = ImgScan.ICImagePageRotationType.None;
    _imgScan.DeviceSettings.ImageAcquireMode = scanSettings.ImageAcquireMode;
    _imgScan.DeviceSettings.FileNamePrefix = scanSettings.FileNamePrefix;
    _imgScan.DeviceSettings.OutputFormat = scanSettings.OutputFormat;
    _imgScan.DeviceSettings.OutputCompression = scanSettings.OutputCompression;
    _imgScan.DeviceSettings.ImageBinarizationFilter = scanSettings.BinarizationFilter;
    _imgScan.DeviceSettings.BlankPageTolerance = scanSettings.BlankPageTolerance;
    _imgScan.DeviceSettings.ImagePageSeparation = scanSettings.ImagePageSeparation;
    _imgScan.DeviceSettings.BarcodeTypes.push(scanSettings.BarcodeTypes[0]);
    _imgScan.DeviceSettings.BarcodeSeparationValue = scanSettings.BarcodeSeparationValue;
    _imgScan.DeviceSettings.PageCountSeparationValue = scanSettings.PageCountSeparationValue;
    _imgScan.DeviceSettings.RemoveBlankPages = scanSettings.RemoveBlankPages;
    _imgScan.DeviceSettings.RemoveBarcodePage = scanSettings.RemoveBarcodePage;
    _imgScan.DeviceSettings.ShowScannerUI = scanSettings.ShowScannerUI;
    _imgScan.DeviceSettings.IsBarcodeInFirstPage = scanSettings.IsBarcodeInFirstPage;
    _imgScan.DeviceSettings.EnablePreview = scanSettings.EnablePreview;
    _imgScan.DeviceSettings.OutputDirectory = scanSettings.OutputDirectory;
    _imgScan.DeviceDriverType = scanSettings.DeviceDriverType;

    // Set the TWAIN Settings

    _imgScan.SetTwainSettings = new ImgScan.TwainValues();
    _imgScan.SetTwainSettings.TwainCapabilities = new ImgScan.Capabilities();
    _imgScan.SetTwainSettings.TwainCapabilities.IsAutoDeskewEnabled = TWAINSettings.TwainCapabilities.IsAutoDeskewEnabled;
    _imgScan.SetTwainSettings.TwainCapabilities.IsDuplexEnabled = TWAINSettings.TwainCapabilities.IsDuplexEnabled;
    _imgScan.SetTwainSettings.TwainCapabilities.IsAutoBorderDetectionEnabled = TWAINSettings.TwainCapabilities.IsAutoBorderDetectionEnabled;
    _imgScan.SetTwainSettings.TwainCapabilities.IsAutoScanEnabled = TWAINSettings.TwainCapabilities.IsAutoScanEnabled;
    _imgScan.SetTwainSettings.TwainCapabilities.IsAutoFeedEnabled = TWAINSettings.TwainCapabilities.IsAutoFeedEnabled;
    _imgScan.SetTwainSettings.TwainCapabilities.IsFeederEnabled = TWAINSettings.TwainCapabilities.IsFeederEnabled;
    _imgScan.SetTwainSettings.TwainCapabilities.IsAutoRotationEnabled = TWAINSettings.TwainCapabilities.IsAutoRotationEnabled;
    _imgScan.SetTwainSettings.TwainICapabilities = new ImgScan.ImageCapabilities();
    _imgScan.SetTwainSettings.TwainICapabilities.UnitsValue = ImgScan.ICAP_UNITS.INCHES;
    _imgScan.SetTwainSettings.TwainICapabilities.ImageXferMech = TWAINSettings.TwainICapabilities.ImageXferMech;
    _imgScan.SetTwainSettings.TwainICapabilities.ImageFileFormatValue = TWAINSettings.TwainICapabilities.ImageFileFormatValue;
    _imgScan.SetTwainSettings.TwainICapabilities.PaperOrientationValue = TWAINSettings.TwainICapabilities.PaperOrientationValue;
    _imgScan.SetTwainSettings.TwainICapabilities.PaperSizeValue = TWAINSettings.TwainICapabilities.PaperSizeValue;
    _imgScan.SetTwainSettings.TwainICapabilities.XResolutionValue = TWAINSettings.TwainICapabilities.XResolutionValue;
    _imgScan.SetTwainSettings.TwainICapabilities.YResolutionValue = TWAINSettings.TwainICapabilities.XResolutionValue;
    _imgScan.SetTwainSettings.TwainICapabilities.PixelTypeValue = TWAINSettings.TwainICapabilities.PixelTypeValue;
    _imgScan.SetTwainSettings.TwainICapabilities.IsAutoBrightEnabled = TWAINSettings.TwainICapabilities.IsAutoBrightEnabled;
    _imgScan.SetTwainSettings.TwainICapabilities.IsAutoRemoveBlankPagesEnabled = TWAINSettings.TwainICapabilities.IsAutoRemoveBlankPagesEnabled;
    _imgScan.SetTwainSettings.TwainICapabilities.BrightnessValue = TWAINSettings.TwainICapabilities.BrightnessValue;
    _imgScan.SetTwainSettings.TwainICapabilities.ContrastValue = TWAINSettings.TwainICapabilities.ContrastValue;
    _imgScan.SetTwainSettings.TwainICapabilities.UnitsValue = ImgScan.ICAP_UNITS.INCHES;
    _imgScan.Acquire();
}

function loadImage(){
	_imgEdit.DisplayUrl('http://www.scielo.org.co/pdf/recis/v7n3/v7n3a6.pdf');
}

function ZoomIn(){
    _imgEdit.MoreZoom();
}

function zoomOut(){
    _imgEdit.LessZoom();
}

function zoomTo(){
    _imgEdit.EnableSelectionType = ImgEdit.ICSelectionType.ZOOMSELECTION;
}

function nextPage(){
    _imgEdit.NextPage();
}

function previousPage(){
    _imgEdit.PreviousPage();
}

function rotateRight(){
    _imgEdit.RotateRight();
}

function rotateLeft(){
    _imgEdit.RotateLeft();
}

function bestFit(){
    _imgEdit.FitTo(ImgEdit.ICImageFit.BESTFIT, true);
}

function fitToWidth(){
    _imgEdit.FitTo(ImgEdit.ICImageFit.FITTOWIDTH, true);
}

function fitToHeight(){
    _imgEdit.FitTo(ImgEdit.ICImageFit.FITTOHEIGHT, true);
}

function magnifying(){
    _imgEdit.EnableSelectionType = ImgEdit.ICSelectionType.MAGNIFYINGGLASS;
}

function deletePage(){
    _imgEdit.DeletePage(_imgEdit.SelectedPage);
}

