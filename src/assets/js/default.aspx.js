// /// <reference path="ImgEdit-vsdoc.js"/>
// /// <reference path="ImgThumbnails-vsdoc.js"/>
// /// <reference path="ImgScan-vsdoc.js"/>
// /// <reference path="ImgAnnotations-vsdoc.js"/>
// var _webServiceURL = "ImageManagerService.svc";
// var _imgEdit = null;
// var _imgThumbnails = null;
// var _imgScan = null;
// var _imgAnnotations = null;
// //Comment the following lines on release. This is just for intellisense purposes.
// _imgEdit = new ImgEdit();
// _imgThumbnails = new ImgThumbnails();
// _imgScan = new ImgScan();
// _imgAnnotations = new ImgAnnotations();

// var _isImgScanDownloading = false;
// var _driverType = false;

function pageLoad() {
    //Get the ImgEdit control.
    _imgEdit = $find('ImgEdit1');
    //Get the ImgThumbnail control.
    _imgThumbnails = $find('ImgThumbnails1');
    //Get the ImgScan control.
    _imgScan = $find('ImgScan1');
    //Get the ImgAnnotations control.
    _imgAnnotations = $find('ImgAnnotations1');
    _imgThumbnails.ImgEditComponent = _imgEdit;
    _imgEdit.set_WebServiceURL(window.location.href + _webServiceURL);
    _imgEdit.addEventListener("ErrorOccurred", onErrorOccurred);
    _imgScan.ImgEditComponent = _imgEdit;
    _imgAnnotations.ImgEditComponent = _imgEdit;
}

function openImage() {
    _imgEdit.DisplayUrl(document.location.protocol + '//documents.imagecomponents.net/Doc.tif');
    _imgEdit.FitTo(ImgEdit.ICImageFit.BESTFIT, true);
}



function _scanImage() {
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

function initDevice(source) {
    _imgScan.ActiveSourceName = source;
    _imgScan.DeviceSettings = new ImgScan.ICDeviceSettings();
    //This is important if you are scanning a multi-page document. You can also set to PDF.
    _imgScan.DeviceSettings.OutputFormat = ImgScan.ICImageOutputFormat.TIFF;
    if (_driverType === ImgScan.ICDeviceDriverType.TWAIN) {
        _imgScan.SetTwainSettings = new ImgScan.TwainValues();
        _imgScan.SetTwainSettings.TwainICapabilities.ImageXferMech = ImgScan.ICAP_XFERMECH.NATIVE;
    }
    else {
        _imgScan.SetWIASettings = new ImgScan.WIAValues();
        _imgScan.SetWIASettings.WIADeviceSettings.DocumentHandlingSelect = ImgScan.WIADocumentHandlingSelect.Flatbed;
    }
    _imgScan.Acquire();
}

function addAnnotation() {
    _imgAnnotations.EnableAnnotationType = ImgAnnotations.ICAnnotationType.HighlightAnnotation;
    _imgEdit.EnableSelectionType = ImgEdit.ICSelectionType.ANNOTATIONSELECTION;
}

//This events are wired up on the html control definition.
//On web socket connection.
function onSocketStatusChanged(s, e) {
    switch (e) {
        case ImgScan.ICWSocketStatus.CONNECTING:

            break;
        case ImgScan.ICWSocketStatus.CONNECTED:

            break;
        case ImgScan.ICWSocketStatus.CONNECTIONERROR:
            if (_isImgScanDownloading == false) {
                if (confirm('Could not connect to the ImgScan twain bridge plugin.\r\nDo you want to download the installation package and try again?')) {
                    var win = window.open(document.location.protocol + "//install.imagecomponents.net/ImgScanPluginX86.msi", "_blank");
                    win.focus();
                } else {
                    _imgScan.CloseConnection();
                }
            }
            break;
        case ImgScan.ICWSocketStatus.RECONNECTING:

            break;
    }
}

//On scan finished event.
function onScanFinished(s, e) {
    //Upload the image to your server.
    var _base64Image = e.Stream;
}

//On error occurred event.
function onErrorOccurred(s, e) {
    alert("One error occurred in the control '" + e.ControlName + "'.\r\nThe error detail in the method '" + e.MethodName +
        "' is as follows:\r\n\r\n" + e.ErrorMessage + "\r\n\r\nSorry for this inconvenient. ");
}