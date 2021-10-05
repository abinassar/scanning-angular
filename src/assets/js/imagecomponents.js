
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
            var pixelType = ImgScan.ICAP_PIXELTYPE;
            console.log("pixel type "+ pixelType);
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
