
var _webServiceURL ='http://html5v2.ImageComponents.net/api';
var _imgEdit = null;
var _isMobile = true;
console.log("Cargado image Components script");

ICLoader.Initialize(_webServiceURL, function () {
    var _license = "";
    _imgEdit = new ImgEdit('imgEdit1');
     _imgEdit.WebServiceURL = _webServiceURL;
    _imgEdit.set_licenseValue(_license);
});

// function onLoad(){

// }

function loadImage(){
	_imgEdit.DisplayUrl('http://imagecomponents.com/Documents/Doc.tif');
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