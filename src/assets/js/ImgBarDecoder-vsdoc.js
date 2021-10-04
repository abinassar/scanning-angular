/*!
 * The Image Components ImgBarDecoder class.
 * Creates a new ImgBarDecoder component instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
var ImgBarDecoder = function () {

    /**
    * ImgBarDecoder ImgEdit Component Property
    * @type {ImgEdit}
    * @property {ImgEdit} ImgEditComponent Gets or sets the ImgEdit container component.
    * @param {ImgEdit} value Sets the ImgEditComponent value.
    * @return {ImgEdit} Gets the ImgEditComponent value.
    */
    this.ImgEditComponent = null;
    /**
    * ImgBarDecoder Read Barcode Results Property
    * @type {ImgBarDecoder.BarcodesResult[]}
    * @property {ImgBarDecoder.BarcodesResult[]} ReadedBarcodesResults Gets the image barcode read results.
    * @param {ImgBarDecoder.BarcodesResult[]} value Sets the ReadedBarcodesResults value.
    * @return {ImgBarDecoder.BarcodesResult[]} Gets the ReadedBarcodesResults value.
    */
    this.ReadedBarcodesResults = [];
    /**
    * ImgBarDecoder Image Barcode Page Type Property
    * @type {ImgBarDecoder.ICImageBarcodePageType}
    * @property {ImgBarDecoder.ICImageBarcodePageType} ImageBarcodePageType Gets or sets the image Barcode page read type.
    * @param {ImgBarDecoder.ICImageBarcodePageType} value Sets the ImageBarcodePageType value.
    * @return {ImgBarDecoder.ICImageBarcodePageType} Gets the ImageBarcodePageType value.
    */
    this.ImageBarcodePageType = 0;
    /**
    * ImgBarDecoder Selected Page Property
    * @type {Number}
    * @property {ImgEdit} ImgEditComponent Gets or sets the selected image page.
    * @param {Number} value Sets the SelectedPage value.
    * @return {Number} Gets the SelectedPage value.
    */
    this.SelectedPage = 0;
    /**
    * ImgBarDecoder Image Barcode Types Property
    * @type {ImgBarDecoder.ICImageBarcodeType[]}
    * @property {ImgBarDecoder.ICImageBarcodeType[]} ImageBarcodeTypes Gets or sets the image barcode read types.
    * @param {ImgBarDecoder.ICImageBarcodeType[]} value Sets the ImageBarcodeTypes value.
    * @return {ImgBarDecoder.ICImageBarcodeType[]} Gets the ImageBarcodeTypes value.
    */
    this.ImageBarcodeTypes = [];
    /**
    * ImgBarDecoder Image Barcode Orientations Property
    * @type {ImgBarDecoder.ICImageBarcodeOrientation[]}
    * @property {ImgBarDecoder.ICImageBarcodeOrientation[]} ImageBarcodeOrientations Gets or sets the image barcode read orientation.
    * @param {ImgBarDecoder.ICImageBarcodeOrientation[]} value Sets the ImageBarcodeOrientations value.
    * @return {ImgBarDecoder.ICImageBarcodeOrientation[]} Gets the ImageBarcodeOrientations value.
    */
    this.ImageBarcodeOrientations = [];
    /**
    * ImgBarDecoder Stop On First Result Property
    * @type {Boolean}
    * @property {ImgEdit} StopOnFirstResult Gets or sets the stop barcode read on first result.
    * @param {Boolean} value Sets the StopOnFirstResult value.
    * @return {Boolean} Gets the StopOnFirstResult value.
    */
    this.StopOnFirstResult = false;
    /**
    * ImgBarDecoder Image Barcode Search Mode Property
    * @type {ImgBarDecoder.ICImageBarcodeSearchMode}
    * @property {ImgBarDecoder.ICImageBarcodeSearchMode} ImageBarcodeSearchMode Gets or sets the barcode search mode.
    * @param {ImgBarDecoder.ICImageBarcodeSearchMode} value Sets the ImageBarcodeSearchMode value.
    * @return {ImgBarDecoder.ICImageBarcodeSearchMode} Gets the ImageBarcodeSearchMode value.
    */
    this.ImageBarcodeSearchMode = 2;
    /**
    * ImgBarDecoder Enable Check Digit Property
    * @type {Boolean}
    * @property {Boolean} EnableCheckDigit Enabled or disables the barcode check digit.
    * @param {Boolean} value Sets the EnableCheckDigit value.
    * @return {Boolean} Gets the EnableCheckDigit value.
    */
    this.EnableCheckDigit = false;
    /**
    * ImgBarDecoder Version Property
    * @type {String}
    * @property {String} Version Gets the image bar-decoder component version.
    * @param {String} value Sets the Version value.
    * @return {String} Gets the Version value.
    */
    this.Version = null;

    /**
    * Scan result add event handler.
    * Adds the scan status event handler.
    * @function
    * @param {function(ImgBarDecoder,ImgBarDecoder.BarcodesResult)} h Event handler function.
    */
    this.add_ScanResult = function (h) {
    };
    /**
    * Scan result remove event handler.
    * Removes the scan result event handler.
    * @function
    * @param {function(ImgBarDecoder,ImgBarDecoder.BarcodesResult)} h Event handler function.
    */
    this.remove_ScanResult = function (h) {
    };
    /**
    * Occurs every successfully scan result.
    * @event ScanResult Raises the scan result event handler.
    * @param {ImgBarDecoder} s The ImgBarDecoder component object.
    * @param {ImgBarDecoder.BarcodesResult} e The barcodes result value.
    */
    this.ScanResult = function (s, e) {
    };

    /**
    * Scan finished add event handler.
    * Adds the scan finished event handler.
    * @function
    * @param {function(ImgBarDecoder,ImgBarDecoder.ICBarDecoderResultArgs)} h Event handler function.
    */
    this.add_ScanFinished = function (h) {
    };
    /**
    * Scan finished remove event handler.
    * Removes the scan finished event handler.
    * @function
    * @param {function(ImgBarDecoder,ImgBarDecoder.ICBarDecoderResultArgs)} h Event handler function.
    */
    this.remove_ScanFinished = function (h) {
    };
    /**
    * Occurs every successfully scan finished.
    * @event ScanFinished Raises the scan finished event handler.
    * @param {ImgBarDecoder} s The ImgBarDecoder component object.
    * @param {ImgBarDecoder.ICBarDecoderResultArgs} e The barcodes result finish value.
    */
    this.ScanFinished = function (s, e) {
    };
    /**
    * Request started add event handler.
    * Adds the request started event handler.
    * @function
    * @param {function(ImgBarDecoder)} h Event handler function.
    */
    this.add_RequestStarted = function (h) {
    };
    /**
    * Request started remove event handler.
    * Remove the request started event handler.
    * @function
    * @param {function(ImgBarDecoder)} h Event handler function.
    */
    this.remove_RequestStarted = function (h) {
    };
    /**
    * Occurs every started web service request.
    * @event RequestStarted Raises the request started event handler.
    * @param {ImgBarDecoder} s The ImgScan component object.
    */
    this.RequestStarted = function (s) {
    };
    /**
    * Request finished add event handler.
    * Adds the request finished event handler.
    * @function
    * @param {function(ImgBarDecoder)} h Event handler function.
    */
    this.add_RequestFinished = function (h) {
    };
    /**
    * Request finished remove event handler.
    * Removes the request finished event handler.
    * @function
    * @param {function(ImgBarDecoder)} h Event handler function.
    */
    this.remove_RequestFinished = function (h) {
    };
    /**
    * Occurs every finished web service request.
    * @event RequestFinished Raises the request finished event handler.
    * @param {ImgBarDecoder} s The ImgScan component object.
    */
    this.RequestFinished = function (s) {
    };

};

/**
* ImgBarDecoder Add Event Listener Method
* Adds a listener to an event by name.
* @function
* @param {String} eventName The event name.
* @param {Function} handler The event callback method to be raised.
*/
ImgBarDecoder.prototype.addEventListener = function (eventName, handler) {
};

/**
* ImgBarDecoder Remove Event Listener Method
* Removes the listener of an event by name.
* @function
* @param {String} eventName The event name.
* @param {Function} handler The event callback method to be removed from the event.
*/
ImgBarDecoder.prototype.removeEventListener = function (eventName, handler) {
};

/**
* ImgBarDecoder Read Barcodes Method
* Reads the existing barcodes in a specified image page.
* @function
*/
ImgBarDecoder.prototype.ReadBarcodes = function () {
};

/**
* ImgBarDecoder Abort Barcode Read Method
* Aborts the current barcode read process.
* @function
*/
ImgBarDecoder.prototype.AbortBarcodeRead = function () {
};

/**
* ImgBarDecoder Dispose Method
* Releases all the in use ImgBarDecoder memory objects.
* @function
*/
ImgBarDecoder.prototype.Dispose = function () {
};


/**
* Image Barcode type enumeration.
* @readonly
* @enum {number}
*/
ImgBarDecoder.ICImageBarcodeType = {
    /** None or auto barcode type. */
    AUTO: 0,
    /** Code11 barcode type. */
    CODE11: 3,
    /** Code39 extended barcode type. */
    CODE39EXT: 13,
    /** CODABAR 1D barcode type. */
    CODABAR: 2,
    /** CODE 39 1D barcode type. */
    CODE39: 4,
    /** CODE 93 1D barcode type. */
    CODE93: 8,
    /** CODE 128 1D barcode type. */
    CODE128: 16,
    /** EAN-8 1D barcode type. */
    EAN8: 64,
    /** EAN-13 1D barcode type. */
    EAN13: 128,
    /** Interleaved 2 of 5 1D barcode type. */
    ILV2OF5: 256,
    /** PDF417 barcode type. */
    PDF417: 1024,
    /** QR CODE 2D barcode barcode type. */
    QRCODE: 2048,
    /** UPC-A 1D barcode type. */
    UPCA: 16384,
    /** UPC-E 1D barcode type. */
    UPCE: 32768
};

/**
* Image Barcode orientation enumeration.
* @readonly
* @enum {number}
*/
ImgBarDecoder.ICImageBarcodeOrientation = {
    /** Auto barcode orientation. */
    Auto: -1,
    /** Left to right barcode orientation. */
    LeftToRight: 0,
    /** Top to bottom barcode orientation. */
    TopToBottom: 270,
    /** Right to left barcode orientation. */
    RightToLeft: 180,
    /** Bottom to top barcode orientation. */
    BottomToTop: 90
};

/**
* Image barcode search mode enumeration.
* @readonly
* @enum {number}
*/
ImgBarDecoder.ICImageBarcodeSearchMode = {
    /** Normal barcode search mode. */
    NORMAL: 0,
    /** Speed up barcode search mode. */
    SPEEDUP: 1,
    /** Accuracy barcode search mode. */
    ACCURACY: 2,
    /** Two pass accuracy barcode search mode. */
    TWOPASSACCURACY: 3
};

/**
* Image barcode page type enumeration.
* @readonly
* @enum {number}
*/
ImgBarDecoder.ICImageBarcodePageType = {
    /** All pages barcode page type. */
    ALLPAGES: 0,
    /** Selected page barcode page type. */
    SELECTEDPAGE: 1,
    /** Page selection barcode page type. */
    PAGESELECTION: 2,
    /** Image zones barcode page type. */
    IMAGEBARCODEZONES: 3
};

/*!
 * The Image Components barcodes result object class.
 * Creates a new barcodes result object instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgBarDecoder.BarcodesResult = function () {
    /**
    * ImgBarDecoder.BarcodesResult Text Property
    * @type {String}
    * @property {String} Text Gets the barcode text value.
    * @param {String} value Sets the Text value.
    * @return {String} Gets the Text value.
    */
    this.Text = "";
    /**
    * ImgBarDecoder.BarcodesResult Count Property
    * @type {Number}
    * @property {Number} Count Gets the barcode count value.
    * @param {Number} value Sets the Count value.
    * @return {Number} Gets the Count value.
    */
    this.Count = 0;
    /**
    * ImgBarDecoder.BarcodesResult Zone ID Property
    * @type {Number}
    * @property {Number} ZoneID Gets the barcode zone id value.
    * @param {Number} value Sets the ZoneID value.
    * @return {Number} Gets the ZoneID value.
    */
    this.ZoneID = 0;
    /**
    * ImgBarDecoder.BarcodesResult Page Index Property
    * @type {Number}
    * @property {Number} PageIndex Gets the barcode page index position value.
    * @param {Number} value Sets the PageIndex value.
    * @return {Number} Gets the PageIndex value.
    */
    this.PageIndex = 0;
    /**
    * ImgBarDecoder.BarcodesResult Barcode Type Property
    * @type {ImgBarDecoder.ICImageBarcodeType}
    * @property {ImgBarDecoder.ICImageBarcodeType} BarcodeType Gets the barcode type value.
    * @param {ImgBarDecoder.ICImageBarcodeType} value Sets the BarcodeType value.
    * @return {ImgBarDecoder.ICImageBarcodeType} Gets the BarcodeType value.
    */
    this.BarcodeType = ImgBarDecoder.ICImageBarcodeType.AUTO;
    /**
    * ImgBarDecoder.BarcodesResult Barcode Orientation Property
    * @type {ImgBarDecoder.ICImageBarcodeOrientation}
    * @property {ImgBarDecoder.ICImageBarcodeOrientation} BarcodeOrientation Gets the barcode orientation value.
    * @param {ImgBarDecoder.ICImageBarcodeOrientation} value Sets the BarcodeOrientation value.
    * @return {ImgBarDecoder.ICImageBarcodeOrientation} Gets the BarcodeOrientation value.
    */
    this.BarcodeOrientation = ImgBarDecoder.ICImageBarcodeOrientation.AUTO;
};

/*!
 * The Image Components barcodes result arguments object class.
 * Creates a new barcodes result arguments object instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgBarDecoder.ICBarDecoderResultArgs = function () {
    /**
    * ImgBarDecoder.ICBarDecoderResultArgs Status Property
    * @type {String}
    * @property {String} Status Gets or  the barcode result status value.
    * @param {String} value Sets the barcode result status value.
    * @return {String} Gets the barcode result status value.
    */
    this.Status = false;
    /**
    * ImgBarDecoder.ICBarDecoderResultArgs Error Message Property
    * @type {Number}
    * @property {Number} Count Gets the error message value.
    * @param {Number} value Sets the error message value.
    * @return {Number} Gets the error message value.
    */
    this.ErrorMessage = "";
};
