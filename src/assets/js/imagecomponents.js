

var _webServiceURL ='http://localhost/IC.Web.Imaging/api';
// var _webServiceURL = "../../../ImageManagerService.svc";
var _imgEdit = null;
var _imgScan = new ImgScan();

var _isMobile = true;

// var _webServiceURL = "../../ImageManagerService.svc";
// var _webServiceURL = "http://localhost/IC.Web.Imaging/api";


ICLoader.Initialize(_webServiceURL, function () {
    var _license = "";
    _imgEdit = new ImgEdit('imgEdit1');
    _imgScan = new ImgScan('imgScan1');
    _imgScan.ImgEditComponent = _imgEdit;
    _imgScan.SendImageInChunks = true;
    _imgEdit.WebServiceURL = _webServiceURL;
    _imgEdit.set_licenseValue(_license);
});

function loadSources(isTwain) {
    let dataSourcesSettings;
    _imgScan.DeviceDriverType = _driverType = isTwain ? ImgScan.ICDeviceDriverType.TWAIN : ImgScan.ICDeviceDriverType.WIA;

    if (_imgScan.ConnectionStatus !== ImgScan.ICWSocketStatus.CONNECTED) {
        _imgScan.OpenConnection(function () {
            _imgScan.GetScannerSources(function (sources) {
                if ((sources !== null) && (sources.length > 0)) {
                    // loadSources(sources);
                    console.log("Sources 1 ", sources);
                }
                else {
                    alert('No scanner sources found.');
                }
            });
            // var pixelType = ImgScan.ICAP_PIXELTYPE;
            // console.log("pixel type "+ pixelType);

            // these are the general settings that any scanner can have
            acquireMode = ImgScan.ICImageAcquireMode;
            fileFormat = ImgScan.ICAP_IMAGEFILEFORMAT;
            outputFormat = ImgScan.ICImageOutputFormat;
            outputCompression = ImgScan.ICImageCompression;
            imageBinarization = ImgScan.ICImageBinarizationFilterType;
            imagePageSeparation = ImgScan.ICImagePageSeparationType;
            barcodeType = ImgScan.ICImageBarcodeType;
            devDriverType = ImgScan.ICDeviceDriverType;
            imageTransferMode = ImgScan.ICAP_XFERMECH;
            paperOrientation = ImgScan.ICAP_ORIENTATION;
            paperSizes = ImgScan.ICAP_SUPPORTEDSIZES;
            autoRemoveBlank = ImgScan.ICAP_AUTODISCARDBLANKPAGES;
            console.log("Acquire mode ", acquireMode);
            console.log("image file format ", fileFormat);
            console.log("Output formats ", outputFormat);
            console.log("Output compression ", outputCompression);
            console.log("Image binarization ", imageBinarization);
            console.log("Image page separation ", imagePageSeparation);
            console.log("Image barcode type ", barcodeType);
            console.log("Image device driver type ", devDriverType);
            console.log("Image transfer mode ", imageTransferMode);
            console.log("Image paper orientation ", paperOrientation);
            console.log("Image paper size ", paperSizes);
            console.log("Image auto remove blank ", autoRemoveBlank);


            _imgScan.GetScannerCaps('TWAIN2 FreeImage Software Scanner', function (caps) {
                // console.log("Capabilities of scanner ", JSON.stringify(caps))
                dataSourcesSettings = caps;
                loadTwainDeviceOptions(caps, null);
                updateScannerSettings();
                // console.log("Data source settings ", JSON.stringify(dataSourcesSettings));
            });
            // getEnumValue(obj, caps.TwainICapabilities.ICapabilitiesValues.PixelTypes[a]);
        });
    }
    else {
        _imgScan.GetScannerSources(function (sources) {
            if ((sources !== null) && (sources.length > 0)) {
                // loadSources(sources);
                console.log("Sources 2 ", sources);
            }
            else {
                alert('No scanner sources found.');
            }
        });
    }
    // return dataSourcesSettings;
}

function loadTwainDeviceOptions(caps, settings) {

    console.log("Image File Formats ", caps.TwainICapabilities.ICapabilitiesValues.ImageFileFormats);
    console.log("Pixel type ", caps.TwainICapabilities.PixelTypeValue);
    console.log("X Resolution ", caps.TwainICapabilities.XResolutionValue);
    console.log("Duplex value ", caps.TwainCapabilities.DuplexTypeValue);
    console.log("Auto bright ", caps.TwainICapabilities.IsAutoBrightEnabled);
    console.log("brightness value ", caps.TwainICapabilities.BrightnessValue);
    console.log("Contrast value ", caps.TwainICapabilities.ContrastValue);
}

function updateScannerSettings() {
    _imgScan.ActiveSourceName = 'TWAIN2 FreeImage Software Scanner';
    _imgScan.DeviceSettings = new ImgScan.ICDeviceSettings();
    console.log("Scan settings before update ", _imgScan.DeviceSettings);
    _imgScan.DeviceSettings.ImageRotation = ImgScan.ICImagePageRotationType.None;
    _imgScan.DeviceSettings.ImageAcquireMode = 0;
    _imgScan.DeviceSettings.FileNamePrefix = "";
    _imgScan.DeviceSettings.OutputFormat = 0;
    _imgScan.DeviceSettings.OutputCompression = 0;
    _imgScan.DeviceSettings.ImageBinarizationFilter = 0;
    _imgScan.DeviceSettings.BlankPageTolerance = 0;
    _imgScan.DeviceSettings.ImagePageSeparation = 0;
    _imgScan.DeviceSettings.ImagePageSeparation = 0;
    _imgScan.DeviceSettings.BarcodeTypes.push(0);
    _imgScan.DeviceSettings.BarcodeSeparationValue = "";
    // if (!isNaN(parseInt($("#txtPageCount").val())))
    //     _imgScan.DeviceSettings.PageCountSeparationValue = parseInt($("#txtPageCount").val());
    // else
        _imgScan.DeviceSettings.PageCountSeparationValue = 0;
    _imgScan.DeviceSettings.RemoveBlankPages = false;
    _imgScan.DeviceSettings.RemoveBarcodePage = false;
    _imgScan.DeviceSettings.ShowScannerUI = false;
    _imgScan.DeviceSettings.IsBarcodeInFirstPage = false;
    _imgScan.DeviceSettings.EnablePreview = true;
    _imgScan.DeviceSettings.OutputDirectory = "";
    _imgScan.DeviceDriverType = 0;
    console.log("Scan settings after update ", _imgScan.DeviceSettings);
    //Update Capabilities
    UpdateDeviceTWAINSettings();
    // if (_imgScan.DeviceDriverType === ImgScan.ICDeviceDriverType.TWAIN)
    // { UpdateDeviceTWAINSettings(); }
    // else
    // { UpdateDeviceWIASettings(); }
}

function UpdateDeviceTWAINSettings() {
    _imgScan.SetTwainSettings = new ImgScan.TwainValues();
    console.log("settings before update ", _imgScan.SetTwainSettings);
    _imgScan.SetTwainSettings.TwainCapabilities = new ImgScan.Capabilities();
    _imgScan.SetTwainSettings.TwainCapabilities.IsAutoDeskewEnabled = false;
    _imgScan.SetTwainSettings.TwainCapabilities.IsDuplexEnabled = false;
    _imgScan.SetTwainSettings.TwainCapabilities.IsAutoBorderDetectionEnabled = false;
    _imgScan.SetTwainSettings.TwainCapabilities.IsAutoScanEnabled = false;
    _imgScan.SetTwainSettings.TwainCapabilities.IsAutoFeedEnabled = true;
    _imgScan.SetTwainSettings.TwainCapabilities.IsFeederEnabled = true;
    _imgScan.SetTwainSettings.TwainCapabilities.IsAutoRotationEnabled = false;
    _imgScan.SetTwainSettings.TwainICapabilities = new ImgScan.ImageCapabilities();
    _imgScan.SetTwainSettings.TwainICapabilities.UnitsValue = ImgScan.ICAP_UNITS.INCHES;
    _imgScan.SetTwainSettings.TwainICapabilities.ImageXferMech = 0;
    _imgScan.SetTwainSettings.TwainICapabilities.ImageFileFormatValue = 0;
    _imgScan.SetTwainSettings.TwainICapabilities.PaperOrientationValue = 0;
    _imgScan.SetTwainSettings.TwainICapabilities.PaperSizeValue = 0;
    _imgScan.SetTwainSettings.TwainICapabilities.XResolutionValue = 50;
    _imgScan.SetTwainSettings.TwainICapabilities.YResolutionValue = 50;
    _imgScan.SetTwainSettings.TwainICapabilities.PixelTypeValue = 0;
    _imgScan.SetTwainSettings.TwainICapabilities.IsAutoBrightEnabled = false;
    _imgScan.SetTwainSettings.TwainICapabilities.IsAutoRemoveBlankPagesEnabled = 0;
    _imgScan.SetTwainSettings.TwainICapabilities.BrightnessValue = 0;
    _imgScan.SetTwainSettings.TwainICapabilities.ContrastValue = 0;
    console.log("settings after update ", _imgScan.SetTwainSettings);

}

function scanImage() {
    //Close existing image if open.
    _imgEdit.Close();
    var select = document.getElementById("ddSources");
    if ((select.options.length > 0) && (select.selectedIndex > -1)) {
        var source = select.options[select.selectedIndex].value;
        if (_imgScan.ConnectionStatus !== ImgScan.ICWSocketStatus.CONNECTED) {
            initDevice(source);
        }
        else {
            initDevice(source);
        }
    }

}

function initDevice() {
    // _imgScan.ActiveSourceName = source;
    _imgScan.OpenConnection(function () {
        _imgScan.ActiveSourceName = 'TWAIN2 FreeImage Software Scanner';
        _imgScan.DeviceSettings = new ImgScan.ICDeviceSettings();
        //This is important if you are scanning a multi-page document. You can also set to PDF.
        _imgScan.DeviceSettings.OutputFormat = ImgScan.ICImageOutputFormat.TIFF;
            _imgScan.SetTwainSettings = new ImgScan.TwainValues();
            _imgScan.SetTwainSettings.TwainICapabilities.ImageXferMech = ImgScan.ICAP_XFERMECH.NATIVE;
        _imgScan.Acquire();
    });
    // _imgScan.ActiveSourceName = 'TWAIN2 FreeImage Software Scanner';
    // _imgScan.DeviceSettings = new ImgScan.ICDeviceSettings();
    // //This is important if you are scanning a multi-page document. You can also set to PDF.
    // _imgScan.DeviceSettings.OutputFormat = ImgScan.ICImageOutputFormat.TIFF;
    //     _imgScan.SetTwainSettings = new ImgScan.TwainValues();
    //     _imgScan.SetTwainSettings.TwainICapabilities.ImageXferMech = ImgScan.ICAP_XFERMECH.NATIVE;
    // _imgScan.Acquire();
}

function CheckConnection(){

    

    // if (_imgScan.ConnectionStatus !== ImgScan.ICWSocketStatus.CONNECTED) {
        
        // console.log("Conexion estatus ", _imgScan.ConnectionStatus);

        // console.log("Conexion estatus connected", ImgScan.ICWSocketStatus.CONNECTED);



        // _imgScan.OpenConnection(function () {
        //     IEUtils.isPageBusy(false);
        //     _imgScan.ActiveSourceName = _devSettings.ActiveSourceName;
        //     _imgScan.DeviceDriverType = _devSettings.DeviceDriverType;
        //     _imgScan.DeviceSettings = new ImgScan.ICDeviceSettings(_devSettings);
        //     _imgScan.SetTwainSettings = new ImgScan.TwainValues(_devSettings.SetTwainSettings);
        //     _imgScan.SetWIASettings = new ImgScan.WIAValues(_devSettings.SetWIASettings);
        //     _imgScan.SetTwainSettings.TwainICapabilities.UnitsValue = ImgScan.ICAP_UNITS.INCHES;
        //     _imgScan.Acquire();
        // });
    // }

    // console.log("Conexion inactiva");



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
