/*!
 * The Image Components ImgScan class.
 * Creates a new ImgScan component instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
var ImgScan = function () {

    /**
    * ImgScan ImgEdit Component Property
    * @type {ImgEdit}
    * @property {ImgEdit} ImgEditComponent Gets or sets the ImgEdit container component.
    * @param {ImgEdit} value Sets the ImgEdit Component value.
    * @return {ImgEdit} Gets the ImgEdit Component value.
    */
    this.ImgEditComponent = null;
    /**
    * ImgScan Connection Status Property
    * @type {ImgScan.ICWSocketStatus}
    * @property {ImgScan.ICWSocketStatus} ConnectionStatus Gets the web socket connection status.
    * @param {ImgScan.ICWSocketStatus} value Sets the ConnectionStatus value.
    * @return {ImgScan.ICWSocketStatus} Gets the ConnectionStatus value.
    */
    this.ConnectionStatus = null;
    /**
    * ImgScan Send Image In Chunks Property
    * @type {Boolean}
    * @property {Boolean} SendImageInChunks Enables or disables the send image in chunks.
    * @param {Boolean} value Sets the SendImageInChunks value.
    * @return {Boolean} Gets the SendImageInChunks value.
    */
    this.SendImageInChunks = false;
    /**
    * ImgScan Active Source Name Property
    * @type {String}
    * @property {String} ActiveSourceName Gets or sets the device active source name.
    * @param {String} value Sets the Active Source Name value.
    * @return {String} Gets the Active Source Name value.
    */
    this.ActiveSourceName = "";
    /**
    * ImgScan Device Driver Type Property
    * @type {ImgScan.ICDeviceDriverType}
    * @property {ImgScan.ICDeviceDriverType} DeviceDriverType Gets or sets the device driver type.
    * @param {ImgScan.ICDeviceDriverType} value Sets the Device Driver Type value.
    * @return {ImgScan.ICDeviceDriverType} Gets the Device Driver Type value.
    */
    this.DeviceDriverType = 0;
    /**
    * ImgScan Device Settings Property
    * @type {ImgScan.ICDeviceSettings}
    * @property {ImgScan.ICDeviceSettings} DeviceSettings Gets or sets the current device settings.
    * @param {ImgScan.ICDeviceSettings} value Sets the Device Settings value.
    * @return {ImgScan.ICDeviceSettings} Gets the Device Settings value.
    */
    this.DeviceSettings = new ImgScan.ICDeviceSettings();
    /**
    * ImgScan Get Twain Settings Property
    * @readonly
    * @type {ImgScan.TwainSettings}
    * @property {ImgScan.TwainSettings} GetTwainSettings Gets the current twain device user interface capabilities.
    * @return {ImgScan.TwainSettings} Gets the TwainSettings value.
    */
    this.GetTwainSettings = new ImgScan.TwainSettings();
    /**
    * ImgScan Set Twain Settings Property
    * @type {ImgScan.TwainSettings}
    * @property {ImgScan.TwainSettings} SetTwainSettings Sets the twain device user interface capabilities.
    * @param {ImgScan.TwainSettings} value Sets the Twain Settings value.
    */
    this.SetTwainSettings = new ImgScan.TwainSettings();
    /**
    * ImgScan Get WIA Settings Property
    * @readonly
    * @type {ImgScan.WIASettings}
    * @property {ImgScan.WIASettings} GetWIASettings Gets the current WIA device user interface settings.
    * @return {ImgScan.WIASettings} Gets the WIA Settings value.
    */
    this.GetWIASettings = new ImgScan.WIASettings();
    /**
    * ImgScan Set WIA Settings Property
    * @type {ImgScan.WIASettings}
    * @property {ImgScan.WIASettings} EnableSelectionType Sets the WIA device user interface settings.
    * @param {ImgScan.WIASettings} value Sets the WIA Settings value.
    */
    this.SetWIASettings = new ImgScan.WIASettings();
    /**
    * ImgScan Version Property
    * @readonly 
    * @type {String}
    * @property {String} EnableSelectionType Gets the image scan component version.
    * @return {String} Gets the Version value.
    */
    this.Version = null;

    /**
    * Socket status changed add event handler.
    * Adds the socket status changed event handler.
    * @function
    * @param {function(ImgScan,ImgScan.ICWSocketStatus)} h Event handler function.
    */
    this.add_SocketStatusChanged = function (h) {
    };
    /**
    * Socket status changed remove event handler.
    * Removes the socket status changed event handler.
    * @function
    * @param {function(ImgScan,ImgScan.ICWSocketStatus)} h Event handler function.
    */
    this.remove_SocketStatusChanged = function (h) {
    };
    /**
    * Occurs every successfully socket status change.
    * @event SocketStatusChanged Raises the socket status changed event handler.
    * @param {ImgScan} s The ImgScan component object.
    * @param {ImgScan.ICWSocketStatus} e The socket status enumeration value.
    */
    this.SocketStatusChanged = function (s, e) {
    };

    /**
    * Scan started add event handler.
    * Adds the scan started event handler.
    * @function
    * @param {function(ImgScan,ImgScan.ScanEventArgs)} h Event handler function.
    */
    this.add_ScanStarted = function (h) {
    };
    /**
    * Scan started remove event handler.
    * Removes the scan started event handler.
    * @function
    * @param {function(ImgScan,ImgScan.ScanEventArgs)} h Event handler function.
    */
    this.remove_ScanStarted = function (h) {
    };
    /**
    * Occurs every successfully scan start.
    * @event ScanStarted Raises the scan started event handler.
    * @param {ImgScan} s The ImgScan component object.
    * @param {ImgScan.ScanEventArgs} e The scan event arguments object.
    */
    this.ScanStarted = function (s, e) {
    };

    /**
    * Scan finished add event handler.
    * Adds the scan finished event handler.
    * @function
    * @param {function(ImgScan,ImgScan.ScanEventArgs)} h Event handler function.
    */
    this.add_ScanFinished = function (h) {
    };
    /**
    * Scan finished remove event handler.
    * Removes the scan finished event handler.
    * @function
    * @param {function(ImgScan,ImgScan.ScanEventArgs)} h Event handler function.
    */
    this.remove_ScanFinished = function (h) {
    };
    /**
    * Occurs every successfully scan finish.
    * @event ScanStarted Raises the scan finished event handler.
    * @param {ImgScan} s The ImgScan component object.
    * @param {ImgScan.ScanEventArgs} e The scan event arguments object.
    */
    this.ScanFinished = function (s, e) {
    };

    /**
    * Scan page started add event handler.
    * Adds the page started event handler.
    * @function
    * @param {function(ImgScan,ImgScan.ScanEventArgs)} h Event handler function.
    */
    this.add_ScanPageStarted = function (h) {
    };
    /**
    * Scan page started remove event handler.
    * Removes the scan page started event handler.
    * @function
    * @param {function(ImgScan,ImgScan.ScanEventArgs)} h Event handler function.
    */
    this.remove_ScanPageStarted = function (h) {
    };
    /**
    * Occurs every successfully scan page start.
    * @event ScanStarted Raises the scan page started event handler.
    * @param {ImgScan} s The ImgScan component object.
    * @param {ImgScan.ScanEventArgs} e The scan event arguments object.
    */
    this.ScanPageStarted = function (s, e) {
    };

    /**
    * Scan page finished add event handler.
    * Adds the page finished event handler.
    * @function
    * @param {function(ImgScan,ImgScan.ScanEventArgs)} h Event handler function.
    */
    this.add_ScanPageFinished = function (h) {
    };
    /**
    * Scan page finished remove event handler.
    * Removes the scan page finished event handler.
    * @function
    * @param {function(ImgScan,ImgScan.ScanEventArgs)} h Event handler function.
    */
    this.remove_ScanPageFinished = function (h) {
    };
    /**
    * Occurs every successfully scan page finish.
    * @event ScanStarted Raises the scan page finished event handler.
    * @param {ImgScan} s The ImgScan component object.
    * @param {ImgScan.ScanEventArgs} e The scan event arguments object.
    */
    this.ScanPageFinished = function (s, e) {
    };

    /**
   * Request started add event handler.
   * Adds the request started event handler.
   * @function
   * @param {function(ImgScan)} h Event handler function.
   */
    this.add_RequestStarted = function (h) {
    };
    /**
    * Request started remove event handler.
    * Remove the request started event handler.
    * @function
    * @param {function(ImgScan)} h Event handler function.
    */
    this.remove_RequestStarted = function (h) {
    };
    /**
    * Occurs every started web service request.
    * @event RequestStarted Raises the request started event handler.
    * @param {ImgScan} s The ImgScan component object.
    */
    this.RequestStarted = function (s) {
    };
    /**
    * Request finished add event handler.
    * Adds the request finished event handler.
    * @function
    * @param {function(ImgScan)} h Event handler function.
    */
    this.add_RequestFinished = function (h) {
    };
    /**
    * Request finished remove event handler.
    * Removes the request finished event handler.
    * @function
    * @param {function(ImgScan)} h Event handler function.
    */
    this.remove_RequestFinished = function (h) {
    };
    /**
    * Occurs every finished web service request.
    * @event RequestFinished Raises the request finished event handler.
    * @param {ImgScan} s The ImgScan component object.
    */
    this.RequestFinished = function (s) {
    };

    /**
   * Error occurred add event handler.
   * Adds the error occurred add event handler.
   * @function
   * @param {function(ImgScan,ImgScan.ICErrorOccurredArgs)} h Event handler function.
   */
    this.add_ErrorOccurred = function (h) {
    };
    /**
    * Error occurred remove event handler.
    * Removes the error occurred add event handler.
    * @function
    * @param {function(ImgScan,ImgScan.ICErrorOccurredArgs)} h Event handler function.
    */
    this.remove_ErrorOccurred = function (h) {
    };
    /**
    * Occurs every time one error is raised.
    * @event ErrorOccurred Raises the error occurred event handler.
    * @param {ImgScan} s The ImgScan component object.
    * @param {ImgScan.ICErrorOccurredArgs} e The control name, method and description that raised the error.
    */
    this.ErrorOccurred = function (s, e) {
    };

};

/**
* ImgScan Add Event Listener Method
* Adds a listener to an event by name.
* @function
* @param {String} eventName The event name.
* @param {Function} handler The event callback method to be raised.
*/
ImgScan.prototype.addEventListener = function (eventName, handler) {
};

/**
* ImgScan Remove Event Listener Method
* Removes the listener of an event by name.
* @function
* @param {String} eventName The event name.
* @param {Function} handler The event callback method to be removed from the event.
*/
ImgScan.prototype.removeEventListener = function (eventName, handler) {
};

/**
* ImgScan Open Connection Method
* Opens the web socket client service connection.
* @function
* @param {Function} Callback The function callback that will be executed on return.
*/
ImgScan.prototype.OpenConnection = function (Callback) {
};

/**
* ImgScan Download Scan Service Method
* Initializes the web socket client service download and installation.
* @function
* @deprecated
* @param {String} installUrl The web socket client service compressed URL path.
*/
ImgScan.prototype.DownloadScanService = function (installUrl) {
};

/**
* ImgScan Get Scanner Sources Method
* Gets the device sources array names by driver type (Twain or WIA).
* @function
* @param {function(sources)} Callback The function callback that will be executed on return. (sources) The source devices array.
*/
ImgScan.prototype.GetScannerSources = function (Callback) {
};

/**
* ImgScan Get Scanner Caps Method
* Get the selected device default capabilities.
* @function
* @param {String} Source The device source name.
* @param {function(sources)} Callback The function callback that will be executed on return. (sources) The source devices array.
*/
ImgScan.prototype.GetScannerCaps = function (Source, Callback) {
};

/**
* ImgScan Acquire Method
* Starts the image acquisition on the specified device.
* @function
* @param {String} Source The device source name.
*/
ImgScan.prototype.Acquire = function (Source) {
};

/**
* ImgScan Close Connection Method
* Closes the web socket client service connection.
* @function
*/
ImgScan.prototype.CloseConnection = function () {
};

/**
* Web socket connection status enumeration.
* @readonly
* @enum {number}
*/
ImgScan.ICWSocketStatus = {
    /** Not connected */
    NOTCONNECTED: 0,
    /** Connecting */
    CONNECTING: 1,
    /** Connected */
    CONNECTED: 2,
    /** Connection error */
    CONNECTIONERROR: 3,
    /** Reconnecting */
    RECONNECTING: 4
};

/**
* Image acquire mode enumeration.
* @readonly
* @enum {number}
*/
ImgScan.ICImageAcquireMode = {
    /**Auto acquire mode (Depends on the loaded image type and selected page) */
    Auto: 0,
    /** Single acquire mode */
    Single: 1,
    /** Image page append mode */
    Append: 2,
    /** Image page insert mode */
    Insert: 3
};

/**
* Image output format enumeration.
* @readonly
* @enum {number}
*/
ImgScan.ICImageOutputFormat = {
    /** Default output format */
    DEFAULT: -2,
    /** BMP output format */
    BMP: 0,
    /** ICO output format */
    ICO: 1,
    /** JPEG output format */
    JPEG: 2,
    /** JNG output format */
    JNG: 3,
    /** PBM output format */
    PBM: 7,
    /** PGM output format */
    PGM: 11,
    /** PNG output format */
    PNG: 13,
    /** PPM output format */
    PPM: 14,
    /** TARGA output format */
    TARGA: 17,
    /** TIFF output format */
    TIFF: 18,
    /** WBMP output format */
    WBMP: 19,
    /** XPM output format */
    XPM: 23,
    /** GIF output format */
    GIF: 25,
    /** J2K output format */
    J2K: 30,
    /** PFM output format */
    PFM: 32,
    /** WEBP output format */
    WEBP: 35,
    /** JXR output format */
    JXR: 36,
    /** PDF image output format */
    PDF: 40
};

/**
* Image Compression enumeration.
* @readonly
* @enum {number}
*/
ImgScan.ICImageCompression = {
    /** Default compression */
    DEFAULT: 0,
    /** None save compression */
    NONE: 1,
    /** RLE save compression */
    RLE: 2,
    /** CCITT3 save compression */
    CCITT3: 3,
    /** CCITT4 save compression */
    CCITT4: 4,
    /** LZW save compression */
    LZW: 5,
    /** Old JPEG save compression.  */
    OJPEG: 6,
    /** JPEG save compression.  */
    JPEG: 7,
    /** Deflate compression, as recognized by Adobe.*/
    ADOBE_DEFLATE: 8,
    /** DEFLATE image compression.*/
    DEFLATE: 32946,
    /** PACKBITS image compression.*/
    PACKBITS: 32773
};

/**
* Image page separation enumeration.
* @readonly
* @enum {number}
*/
ImgScan.ICImagePageSeparationType = {
    /** None image page separation */
    None: 0,
    /** Blank image page separation */
    BlankPage: 1,
    /** Barcode image page separation */
    Barcode: 2,
    /** Image page count separation */
    PageCount: 3
};

/**
* Image barcode type enumeration.
* @readonly
* @enum {number}
*/
ImgScan.ICImageBarcodeType = {
    /** AUTO barcode type */
    AUTO: 0,
    /** CODABAR barcode type */
    CODABAR: 2,
    /** CODE11 barcode type */
    CODE11: 3,
    /** CODE39 barcode type */
    CODE39: 4,
    /** CODE93 barcode type */
    CODE93: 8,
    /** CODE39EXT barcode type */
    CODE39EXT: 13,
    /** CODE128 barcode type */
    CODE128: 16,
    /** EAN8 barcode type */
    EAN8: 64,
    /** EAN13 barcode type */
    EAN13: 128,
    /** ILV2OF5 barcode type */
    ILV2OF5: 256,
    /** PDF417 barcode type */
    PDF417: 1024,
    /** QRCODE barcode type */
    QRCODE: 2048,
    /** UPCA barcode type */
    UPCA: 16384,
    /** UPCE barcode type */
    UPCE: 32768
};

/**
* Image barcode orientation enumeration.
* @readonly
* @enum {number}
*/
ImgScan.ICImageBarcodeOrientation = {
    /** AUTO barcode orientation */
    AUTO: -1,
    /** LEFT TO RIGHT barcode orientation */
    LEFTTORIGHT: 0,
    /** TOP TO BOTTOM barcode orientation */
    TOPTOBOTTOM: 270,
    /** RIGHT TO LEFT barcode orientation */
    RIGHTTOLEFT: 180,
    /** BOTTOM TO TOP barcode orientation */
    BOTTOMTOTOP: 90
};

/**
* Apply binarization filter type.
* @readonly
* @enum {number}
*/
ImgScan.ICImageBinarizationFilterType = {
    /** None binarization filter type */
    None: 0,
    /** Floyd Steinberg Dithering binarization filter type */
    FloydSteinbergDithering: 1,
    /** Bayer Dithering binarization filter type */
    BayerDithering: 2,
    /** Ordered Dithering binarization filter type */
    OrderedDithering: 3
};

/**
* Image page rotation enumeration.
* @readonly
* @enum {number}
*/
ImgScan.ICImagePageRotationType = {
    /** None image page rotation */
    None: 0,
    /** 90 degrees image page rotation */
    Rot90: 1,
    /** 180 degrees image page rotation */
    Rot180: 2,
    /** 270 degrees image page rotation */
    Rot270: 3
};

/**
* Image barcode search mode enumeration.
* @readonly
* @enum {number}
*/
ImgScan.ICImageBarcodeSearchMode = {
    /** Normal barcode search mode */
    NORMAL: 0,
    /** Speed up barcode search mode */
    SPEEDUP: 1,
    /** Accuracy barcode search mode */
    ACCURACY: 2,
    /** Two pass accuracy barcode search mode */
    TWOPASSACCURACY: 3
};

/**
* This indicates whether the scanner supports duplex. If so, it further indicates whether one-path or
* two-path duplex is supported.
* @readonly
* @enum {number}
*/
ImgScan.CAP_DUPLEX = {
    /**None duplex */
    NONE: 0,
    /**One pass duplex */
    ONEPASSDUPLEX: 1,
    /**Two pass duplex */
    TWOPASSDUPLEX: 2
};

/**
* Allows the application and Source to identify which transfer mechanisms the source supports.
* @readonly
* @enum {number}
*/
ImgScan.ICAP_XFERMECH = {
    /**Native transfer mechanism */
    NATIVE: 0,
    /**File transfer mechanism */
    FILE: 1,
    /**Memory transfer mechanism */
    MEMORY: 2,
    /**Memory file transfer mechanism */
    MEMFILE: 4
};

/**
* Informs the application which file formats the Source can generate (MSG_GET). Tells the Source
* which file formats the application can handle (MSG_SET).
* @readonly
* @enum {number}
*/
ImgScan.ICAP_IMAGEFILEFORMAT = {
    /** Used for document imaging. Native Linux format */
    TIFF: 0,
    /** Native Macintosh format */
    PICT: 1,
    /** Native Microsoft format */
    BMP: 2,
    /** Used for document imaging */
    XBM: 3,
    /** Wrapper for JPEG images */
    JFIF: 4,
    /** FlashPix, used with digital cameras */
    FPX: 5,
    /** Multi-page TIFF files */
    TIFFMULTI: 6,
    /** An image format standard intended for use on the web, replaces GIF */
    PNG: 7,
    /** A standard from JPEG, intended to replace JFIF, also supports JBIG */
    SPIFF: 8,
    /** File format for use with digital cameras */
    EXIF: 9,
    /** A file format from Adobe */
    PDF: 10,
    /** A file format from the Joint Photographic Experts Group ISO/IEC 15444-1 */
    JP2: 11,
    /** A file format from the Joint Photographic Experts Group ISO/IEC 15444-2 */
    JPX: 13,
    /** A file format from LizardTech */
    DEJAVU: 14,
    /** A file format from Adobe PDF/A, Version 1 */
    PDFA: 15,
    /** A file format from Adobe PDF/A, Version 2 */
    PDFA2: 16
};

/**
* The type of pixel data that a Source is capable of acquiring (for example, black and white, gray, RGB, etc.).
* @readonly
* @enum {number}
*/
ImgScan.ICAP_PIXELTYPE = {
    /** Black and white pixel type */
    BW: 0,
    /** Gray pixel type */
    GRAY: 1,
    /** RGB pixel type */
    RGB: 2,
    /** Pallet pixel type */
    PALETTE: 3,
    /** CMY pixel type */
    CMY: 4,
    /** CMYK pixel type */
    CMYK: 5,
    /** YUV pixel type */
    YUV: 6,
    /** YUVK pixel type */
    YUVK: 7,
    /** CIEXYZ pixel type */
    CIEXYZ: 8,
    /** LAB pixel type */
    LAB: 9,
    /** SRGB pixel type */
    SRGB: 10,
    /** CRGB pixel type */
    SCRGB: 11,
    /** Infrared pixel type */
    INFRARED: 16
};

/**
* Defines which edge of the “paper” the image’s “top” is aligned with. This information is used to
* adjust the frames to match the scanning orientation of the paper.
* @readonly
* @enum {number}
*/
ImgScan.ICAP_ORIENTATION = {
    /** 0 degree's orientation */
    ROT0: 0,
    /** 90 degree's orientation */
    ROT90: 1,
    /** 180 degree's orientation */
    ROT180: 2,
    /** 270 degree's orientation */
    ROT270: 3,
    /** 0 degree's orientation */
    PORTRAIT: 0,
    /** 270 degree's orientation */
    LANDSCAPE: 3,
    /** Auto orientation */
    AUTO: 4,
    /** Auto text orientation */
    AUTOTEXT: 5,
    /** Auto picture orientation */
    AUTOPICTURE: 6
};

/**
* For devices that support fixed frame sizes. Defined sizes match typical page sizes. This specifies
* the size(s) the Source can/should use to acquire image data.
* @readonly
* @enum {number}
*/
ImgScan.ICAP_SUPPORTEDSIZES = {
    /** None supported size */
    NONE: 0,
    /** A4 letter supported size */
    A4LETTER: 1,
    /** B5 letter supported size */
    B5LETTER: 2,
    /** US letter supported size */
    USLETTER: 3,
    /** US legal supported size */
    USLEGAL: 4,
    /** A5 supported size */
    A5: 5,
    /** B4 supported size */
    B4: 6,
    /** B6 supported size */
    B6: 7,
    /** US ledger supported size */
    USLEDGER: 9,
    /** US executive supported size */
    USEXECUTIVE: 10,
    /** A3 supported size */
    A3: 11,
    /** B3 supported size */
    B3: 12,
    /** A6 supported size */
    A6: 13,
    /** C4 supported size */
    C4: 14,
    /** C5 supported size */
    C5: 15,
    /** C6 supported size */
    C6: 16,
    /** 4A0 supported size */
    _4A0: 17,
    /** 2A0 supported size */
    _2A0: 18,
    /** A0 supported size */
    A0: 19,
    /** A1 supported size */
    A1: 20,
    /** A2 supported size */
    A2: 21,
    /** A4 supported size */
    A4: 1,
    /** A7 supported size */
    A7: 22,
    /** A8 supported size */
    A8: 23,
    /** A9 supported size */
    A9: 24,
    /** A10 supported size */
    A10: 25,
    /** ISOB0 supported size */
    ISOB0: 26,
    /** ISOB1 supported size */
    ISOB1: 27,
    /** ISOB2 supported size */
    ISOB2: 28,
    /** ISOB3 supported size */
    ISOB3: 12,
    /** ISOB4 supported size */
    ISOB4: 6,
    /** ISOB5 supported size */
    ISOB5: 29,
    /** ISOB6 supported size */
    ISOB6: 7,
    /** ISOB7 supported size */
    ISOB7: 30,
    /** ISOB8 supported size */
    ISOB8: 31,
    /** ISOB9 supported size */
    ISOB9: 32,
    /** ISOB10 supported size */
    ISOB10: 33,
    /** JISOB0 supported size */
    JISB0: 34,
    /** JISOB1 supported size */
    JISB1: 35,
    /** JISOB2 supported size */
    JISB2: 36,
    /** JISOB3 supported size */
    JISB3: 37,
    /** JISOB4 supported size */
    JISB4: 38,
    /** JISOB5 supported size */
    JISB5: 2,
    /** JISOB6 supported size */
    JISB6: 39,
    /** JISOB7 supported size */
    JISB7: 40,
    /** JISOB8 supported size */
    JISB8: 41,
    /** JISOB9 supported size */
    JISB9: 42,
    /** JISOB10 supported size */
    JISB10: 43,
    /** C0 supported size */
    C0: 44,
    /** C1 supported size */
    C1: 45,
    /** C2 supported size */
    C2: 46,
    /** C3 supported size */
    C3: 47,
    /** C7 supported size */
    C7: 48,
    /** C8 supported size */
    C8: 49,
    /** C9 supported size */
    C9: 50,
    /** C10 supported size */
    C10: 51,
    /** US statement supported size */
    USSTATEMENT: 52,
    /** Business card supported size */
    BUSINESSCARD: 53
};

/**
* Use this capability to have the Source discard blank images. 
* The Application never sees these images during the scanning session.
* @readonly
* @enum {number}
*/
ImgScan.ICAP_AUTODISCARDBLANKPAGES = {
    /** Disable auto discard blank pages */
    DISABLE: -2,
    /** Enable auto discard blank pages */
    AUTO: -1
};

/**
* Unless a quantity is dimensionless or uses a specified unit of measure, ICAP_UNITS determines
* the unit of measure for all quantities.
* @readonly
* @enum {number}
*/
ImgScan.ICAP_UNITS = {
    /** Inches unit */
    INCHES: 0,
    /** Centimeters unit */
    CENTIMETERS: 1,
    /** Picas unit */
    PICAS: 2,
    /** Points unit */
    POINTS: 3,
    /** TWIPS unit */
    TWIPS: 4,
    /** Pixels unit */
    PIXELS: 5,
    /** Millimeters unit */
    MILLIMETERS: 6
};

/**
* ImgScan driver type enumeration.
* @readonly
* @enum {number}
*/
ImgScan.ICDeviceDriverType = {
    /** ImgScan twain driver */
    TWAIN: 0,
    /** ImgScan WIA driver */
    WIA: 1
};

/**
* WIA Hardware Configuration enumeration.
* @readonly
* @enum {number}
*/
ImgScan.WIAHardwareConfiguration = {
    /** Generic WDM device */
    GenericWdmDevice: 1,
    /** SCSI device */
    ScsiDevice: 2,
    /** USB device */
    UsbDevice: 4,
    /** Serial device */
    SerialDevice: 8,
    /** Parallel device */
    ParallelDevice: 16,
};

/**
* WIA Connection Status enumeration.
* @readonly
* @enum {number}
*/
ImgScan.WIAConnectionStatus = {
    /** Not connected status */
    NotConnected: 0,
    /** Connected status */
    Connected: 1
};

/**
* Horizontal Bed Registration and Sheet Feeder Registration enumeration.
* @readonly
* @enum {number}
*/
ImgScan.WIAHorizontalRegistration = {
    /** The document is positioned to the left with respect to the scanning head */
    LeftJustified: 0,
    /** The document is centered on the scanning head */
    Centered: 1,
    /** The document is positioned to the right with respect to the scanning head */
    RightJustified: 2
};

/** 
* Vertical Bed Registration enumeration.
* @readonly
* @enum {number}
*/
ImgScan.WIAVerticalRegistration = {
    /** The paper is top-aligned */
    TopJustified: 0,
    /** The paper is centered */
    Centered: 1,
    /** The paper is bottom-aligned */
    BottomJustified: 2
};

/**
* Show preview control enumeration.
* @readonly
* @enum {number}
*/
ImgScan.WIAShowPreviewControl = {
    /** Do not show a preview control to the user, because this device cannot perform a preview */
    ShowPreviewControl: 0,
    /** Show a preview control to the user, because this device can perform a preview */
    DontShowPreviewControl: 1
};

/**
* Document Handling Select enumeration.
* @readonly
* @enum {number}
*/
ImgScan.WIADocumentHandlingSelect = {
    /** Scan by using the document feeder */
    Feeder: 0x001,
    /** Scan by using the flatbed */
    Flatbed: 0x002,
    /** Scan by using duplexer operations */
    Duplex: 0x004,
    /** Scan the front of the document first. This value is valid only when DUPLEX is set */
    FrontFirst: 0x008,
    /** Scan the back of the document first. This value is valid only when DUPLEX is set */
    BackFirst: 0x010,
    /** Scan the front only */
    FrontOnly: 0x020,
    /** Scan the back only. This value is valid only when DUPLEX is set */
    BackOnly: 0x040,
    /** Scan the next page of the document */
    NextPage: 0x080,
    /** Enable pre-feed mode. Preposition the next document while scanning */
    Prefeed: 0x100,
    /** Enable automatic feeding of the next document after a scan */
    AutoAdvance: 0x200,
    /** Scan by using individual configuration settings for each child feeder item (WIA_CATEGORY_FEEDER_FRONT and WIA_CATEGORY_FEEDER_BACK). This flag cannot be set together with DUPLEX. A device that supports different scan settings for the front and back items should implement the optional ADF front and back items and it should support both DUPLEX and ADVANCED_DUPLEX */
    AdvancedDuplex: 0x400
};

/**
* WIA device types enumeration.
* @readonly
* @enum {number}
*/
ImgScan.WIAWiaDeviceType = {
    /** Unspecified device type */
    UnspecifiedDeviceType: 0,
    /** Scanner device type */
    ScannerDeviceType: 1,
    /** Camera device type */
    CameraDeviceType: 2,
    /** Video device type */
    VideoDeviceType: 3
};

/**
* WIA item flag enumeration.
* @readonly
* @enum {number}
*/
ImgScan.WIAWiaItemFlag = {
    /** Removed item flag */
    RemovedItemFlag: -2147483648,
    /** Free item flag */
    FreeItemFlag: 0,
    /** Image item flag */
    ImageItemFlag: 1,
    /** File item flag */
    FileItemFlag: 2,
    /** Folder item flag */
    FolderItemFlag: 4,
    /** Root item flag */
    RootItemFlag: 8,
    /** Analyze item flag */
    AnalyzeItemFlag: 16,
    /** Audio item flag */
    AudioItemFlag: 32,
    /** Device item flag */
    DeviceItemFlag: 64,
    /** Deleted item flag */
    DeletedItemFlag: 128,
    /** Disconnected item flag */
    DisconnectedItemFlag: 256,
    /** HPanorama item flag */
    HPanoramaItemFlag: 512,
    /** VPanorama item flag */
    VPanoramaItemFlag: 1024,
    /** Burst item flag */
    BurstItemFlag: 2048,
    /** Storage item flag */
    StorageItemFlag: 4096,
    /** Transfer item flag */
    TransferItemFlag: 8192,
    /** Generated item flag */
    GeneratedItemFlag: 16384,
    /** Has attachments item flag */
    HasAttachmentsItemFlag: 32768,
    /** Video item flag */
    VideoItemFlag: 65536
};

/**
* Suppress a property page enumeration.
* @readonly
* @enum {number}
*/
ImgScan.WIASuppressPropertyPage = {
    /** Suppress the general item property page for a scanner */
    ScannerItemGeneral: 0x00000001,
    /** Suppress the general item property page for a camera */
    CameraItemGeneral: 0x00000002,
    /** Suppress the general item property page for a device */
    DeviceGeneral: 0x00000004
};

/**
* Current Intent enumeration.
* @readonly
* @enum {number}
*/
ImgScan.WIACurrentIntent = {
    /** Default value. No intent is specified */
    None: 0x00000000,
    /** The application intends to prepare the device for a color scan */
    ImageTypeColor: 0x00000001,
    /** The application intends to prepare the device for a gray scale scan */
    ImageTypeGrayscale: 0x00000002,
    /** The application intends to prepare the device for scanning text */
    ImageTypeText: 0x00000004,
    /** This flag is a mask for all of the image-type flags */
    ImageTypeMask: 0x0000000F,
    /** The application intends to prepare the device for scanning an image that results in a small scan */
    MinimizeSize: 0x00010000,
    /** The application intends to prepare the device for scanning a high-quality image */
    MaximizeQuality: 0x00020000,
    /** The application intends to prepare the device for scanning a preview */
    BestPreview: 0x00040000,
    /** This flag is a mask for all of the size and quality flags */
    SizeMask: 0x000F0000
};

/** 
* WIA Preview enumeration.
* @readonly
* @enum {number}
*/
ImgScan.WIAPreview = {
    /** The application will perform a final scan */
    FinalScan: 0,
    /** The application will perform a preview scan */
    PreviewScan: 1
};

/**
* WIA Preview Type enumeration.
* @readonly
* @enum {number}
*/
ImgScan.WIAPreviewType = {
    /** Live preview updates are supported */
    AdvancedPreview: 0,
    /** Preview images can be updated only with a new preview scan */
    BasicPreview: 1
};

/**
* WIA access rights enumeration.
* @readonly
* @enum {number}
*/
ImgScan.WIAAccessRights = {
    /** This WIA item can be deleted */
    CanBeDeleted: 0x80,
    /** Access to the item is read-only */
    Read: 0x01,
    /** Access to the item is read/write */
    Write: 0x02,
    /** AccessRights.Read | AccessRights.CanBeDeleted */
    RD: (0x01 | 0x80),
    /** AccessRights.Read | AccessRights.Write | AccessRights.CanBeDeleted */
    RWD: (0x01 | 0x02 | 0x80)
};

/**
* WIA access rights enumeration.
* @readonly
* @enum {number}
*/
ImgScan.WIADataType = {
    /** The threshold is one bit per pixel of black-and-white data. Data over the current value of WIA_IPS_THRESHOLD is converted to white; data under this value is converted to black */
    Threshold: 0,
    /** Scan data is dithered by using the currently selected dither pattern */
    Dither: 1,
    /** Scan data represents intensity. The palette is a fixed, equally spaced gray scale with a depth that the WIA_IPA_DEPTH property specifies */
    Grayscale: 2,
    /** Scan data is red-green-blue (RGB) */
    Color: 3,
    /** Color threshold data */
    ColorThreshold: 4,
    /** The same as WIA_DATA_COLOR, except that the data is dithered by using the currently selected dither pattern */
    ColorDither: 5,
    /** Scan data is in the red-green-blue (RGB) color space. The full color format is described using the same WIA properties as in WIA_DATA_RAW_BGR
    * WIA_IPA_RAW_BITS_PER_CHANNEL must be set to 3 */
    RawRgb: 6,
    /** Scan data is in the BGR (blue-green-red) color space
    * WIA_IPA_RAW_BITS_PER_CHANNEL must be set to 3 */
    RawBgr: 7,
    /** Scan data is in the luminance-blue difference-red difference (YUV)  color space. The full color format is described by using the same WIA properties that are listed for WIA_DATA_RAW_BGR. 
    * WIA_IPA_RAW_BITS_PER_CHANNEL must be set to 3 */
    RawYuv: 8,
    /** Scan data is in the luminance-blue difference-red difference-black (YUVK) color space. The full color format is described by using the same WIA properties that are listed for WIA_DATA_RAW_BGR.
    * WIA_IPA_RAW_BITS_PER_CHANNEL must be set to 4 */
    RawYuvk: 9,
    /** Scan data is in the cyan-magenta-yellow (CMY) color space. The full color format is described by using the same WIA properties that are listed for WIA_DATA_RAW_BGR.
    * WIA_IPA_RAW_BITS_PER_CHANNEL must be set to 3 */
    RawCmy: 10,
    /** Scan data is in the cyan-magenta-yellow-black (CMYK) color space. The full color format is described by using the same WIA properties that are listed for WIA_DATA_RAW_BGR.
    * WIA_IPA_RAW_BITS_PER_CHANNEL must be set to 4 */
    RawCmyk: 11
};

/** 
* WIA Image format enumeration.
* @readonly
* @enum {number}
*/
ImgScan.WIAImageFormat = {
    /** BMP image format */
    wiaFormatBMP: 0,
    /** GIF image format */
    wiaFormatGIF: 1,
    /** JPEG image format */
    wiaFormatJPEG: 2,
    /** PNG image format */
    wiaFormatPNG: 3,
    /** TIFF image format */
    wiaFormatTIFF: 4
};

/**
* WIA Compression enumeration.
* @readonly
* @enum {number}
*/
ImgScan.WIACompression = {
    /** No compression */
    None: 0,
    /** RLE 4 compression */
    BiRle4: 1,
    /** RLE 8 compression */
    BiRle8: 2,
    /** Group 3 compression */
    G3: 3,
    /** Group 4 compression */
    G4: 4,
    /** JPEG compression */
    Jpeg: 5,
    /** IS 11544 (ITU-T T.82) compression  */
    Jbig: 6,
    /** JPEG 2000 compression  */
    Jpeg2k: 7,
    /** W3C PNG compression  */
    Png: 8
};

/**
* WIA Media Type enumeration.
* @readonly
* @enum {number}
*/
ImgScan.WIAMediaType = {
    /** Transfer an image to memory, in bands. This constant is obsolete for Windows�Vista and later operating systems */
    Callback: 128,
    /** Transfer multiple images to a file */
    MultipageFile: 256,
    /** Transfer multiple images to memory, in bands. This constant is obsolete for Windows�Vista and later operating systems */
    MultipageCallback: 512
};

/**
* WIA Planar enumeration.
* @readonly
* @enum {number}
*/
ImgScan.WIAPlanar = {
    /** Image data is in packed-pixel format */
    PackedPixel: 0,
    /** Image data is in planar format */
    Planar: 1
};

/**
* WIA Page Size enumeration.
* @readonly
* @enum {number}
*/
ImgScan.WIAPageSize = {
    /** 8267 x 11692 (PORTRAIT orientation) */
    A4: 0,
    /** 8500 x 11000 (PORTRAIT orientation) */
    Letter: 1,
    /** Defined by the values of the WIA_IPS_PAGE_HEIGHT and WIA_IPS_PAGE_WIDTH properties */
    Custom: 2,
    /** 8500 x 14000(PORTRAIT orientation) */
    Uslegal: 3,
    /** 11000 x 17000 (PORTRAIT orientation) */
    Usledger: 4,
    /** 5500 x  8500 (PORTRAIT orientation) */
    Usstatement: 5,
    /** 3543 x  2165 (PORTRAIT orientation) */
    Businesscard: 6,
    /** 33110 x 46811 (PORTRAIT orientation) */
    IsoA0: 7,
    /** 23385 x 33110 (PORTRAIT orientation) */
    IsoA1: 8,
    /** 16535 x 23385 (PORTRAIT orientation) */
    IsoA2: 9,
    /** 11692 x 16535 (PORTRAIT orientation) */
    IsoA3: 10,
    /** 5826 x  8267 (PORTRAIT orientation) */
    IsoA5: 11,
    /** 4133 x  5826 (PORTRAIT orientation) */
    IsoA6: 12,
    /** 2913 x  4133 (PORTRAIT orientation) */
    IsoA7: 13,
    /** 2047 x  2913 (PORTRAIT orientation) */
    IsoA8: 14,
    /** 1456 x  2047 (PORTRAIT orientation) */
    IsoA9: 15,
    /** 1023 x  1456 (PORTRAIT orientation) */
    IsoA10: 16,
    /** 39370 x 55669 (PORTRAIT orientation) */
    IsoB0: 17,
    /** 27834 x 39370 (PORTRAIT orientation) */
    IsoB1: 18,
    /** 19685 x 27834 (PORTRAIT orientation) */
    IsoB2: 19,
    /** 13897 x 19685 (PORTRAIT orientation) */
    IsoB3: 20,
    /** 9842 x 13897 (PORTRAIT orientation) */
    IsoB4: 21,
    /** 6929 x  9842 (PORTRAIT orientation) */
    IsoB5: 22,
    /** 4921 x  6929 (PORTRAIT orientation) */
    IsoB6: 23,
    /** 3464 x  4921 (PORTRAIT orientation) */
    IsoB7: 24,
    /** 2440 x  3464 (PORTRAIT orientation) */
    IsoB8: 25,
    /** 1732 x  2440 (PORTRAIT orientation) */
    IsoB9: 26,
    /** 1220 x  1732 (PORTRAIT orientation) */
    IsoB10: 27,
    /** 36102 x 51062 (PORTRAIT orientation) */
    IsoC0: 28,
    /** 25511 x 36102 (PORTRAIT orientation) */
    IsoC1: 29,
    /** 18031 x 25511 (PORTRAIT orientation) */
    IsoC2: 30,
    /** 12755 x 18031 (PORTRAIT orientation) */
    IsoC3: 31,
    /** 9015 x 12755 (unfolded) (PORTRAIT orientation) */
    IsoC4: 32,
    /** 6377 x  9015 (folded once) (PORTRAIT orientation) */
    IsoC5: 33,
    /** 4488 x  6377 (folded twice) (PORTRAIT orientation) */
    IsoC6: 34,
    /** 3188 x  4488 (PORTRAIT orientation) */
    IsoC7: 35,
    /** 2244 x  3188 (PORTRAIT orientation) */
    IsoC8: 36,
    /** 1574 x  2244 (PORTRAIT orientation) */
    IsoC9: 37,
    /** 1102 x  1574 (PORTRAIT orientation) */
    IsoC10: 38,
    /** 40551 x 57322 (PORTRAIT orientation) */
    JisB0: 39,
    /** 28661 x 40551 (PORTRAIT orientation) */
    JisB1: 40,
    /** 20275 x 28661 (PORTRAIT orientation) */
    JisB2: 41,
    /** 14330 x 20275 (PORTRAIT orientation) */
    JisB3: 42,
    /** 10118 x 14330 (PORTRAIT orientation) */
    JisB4: 43,
    /** 7165 x 10118 (PORTRAIT orientation) */
    JisB5: 44,
    /** 5039 x  7165 (PORTRAIT orientation) */
    JisB6: 45,
    /** 3582 x  5039 (PORTRAIT orientation) */
    JisB7: 46,
    /** 2519 x  3582 (PORTRAIT orientation) */
    JisB8: 47,
    /** 1771 x  2519 (PORTRAIT orientation) */
    JisB9: 48,
    /** 1259 x  1771 (PORTRAIT orientation) */
    JisB10: 49,
    /** 46811 x 66220 (PORTRAIT orientation) */
    Jis2a: 50,
    /** 66220 x  93622 (PORTRAIT orientation) */
    Jis4a: 51,
    /** 55669 x 78740 (PORTRAIT orientation) */
    Din2b: 52,
    /** 78740 x 111338 (PORTRAIT orientation) */
    Din4b: 53,
    /** Used to configure automatic page size detection */
    Auto: 100,
    /** Defined by the values of the WIA_IPS_PAGE_HEIGHT and WIA_IPS_PAGE_WIDTH properties. This value is used to define custom page sizes, instead of the single page that the WIA_PAGE_CUSTOM value enables */
    CustomBase: 0x8000
};

/**
* WIA Photometric Interpretation enumeration.
* @readonly
* @enum {number}
*/
ImgScan.WIAPhotometricInterpretation = {
    /** White is 1, and black is 0 */
    PackedPixel: 0,
    /** White is 0, and black is 1 */
    Planar: 1
};

/**
* WIA Orientation and Rotation enumeration.
* @readonly
* @enum {number}
*/
ImgScan.WIAOrientationAndRotation = {
    /** The driver will not rotate the image */
    Portrait: 0,
    /** The orientation is a 90-degree counterclockwise rotation, relative to the PORTRAIT orientation */
    Lanscape: 1,
    /** The orientation is a 180-degree counterclockwise rotation, relative to the PORTRAIT orientation */
    Rot180: 2,
    /** The orientation is a 270-degree counterclockwise rotation, relative to the PORTRAIT orientation */
    Rot270: 3
};

/**
* WIA Segmentation Filter enumeration.
* @readonly
* @enum {number}
*/
ImgScan.WIASegmentationFilter = {
    /** The application should use the segmentation filter for multi-region scanning */
    UseSegmentationFilter: 0,
    /** The driver creates the child items itself for multi-region scanning. This situation typically occurs if a scanner uses fixed frames for multi-region scanning */
    DontUseSegmentationFilter: 1
};

/**
* WIA Transfer Capabilities enumeration.
* @readonly
* @enum {number}
*/
ImgScan.WIATransferCapabilities = {
    /** The device can transfer the parent and child items together or the device must make a separate scan for each item and each child item */
    ChildrenSingleScan: 0x00000001
};

/**
* WIA Film Scan Mode enumeration.
* @readonly
* @enum {number}
*/
ImgScan.WIAFilmScanMode = {
    /** The scan will be a color scan */
    ColorSlide: 0,
    /** The scan will be a color scan of a negative */
    ColorNegative: 1,
    /** The scan will be black and white (gray scale) scan */
    BwNegative: 2
};

/**
* WIA Lamp enumeration.
* @readonly
* @enum {number}
*/
ImgScan.WIALamp = {
    /** The lamp is on */
    On: 0,
    /** The lamp is off */
    Off: 1
};

/**
* WIA Automatic Deskew enumeration.
* @readonly
* @enum {number}
*/
ImgScan.WIAAutoDeskew = {
    /** Use automatic skew correction */
    On: 0,
    /** Do not use automatic skew correction */
    Off: 1
};

/*!
 * The Image Components device settings class.
 * Creates a new device settings instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgScan.ICDeviceSettings = function () {

    /**
    * ImgScan.ICDeviceSettings Image Acquire Mode Property
    * @type {ImgScan.ICImageAcquireMode}
    * @property {ImgScan.ICImageAcquireMode} ImageAcquireMode Gets or sets the scanned multi page image acquire mode.
    * @param {ImgScan.ICImageAcquireMode} value Sets the Image Acquire Mode value.
    * @return {ImgScan.ICImageAcquireMode} Gets the Image Acquire Mode value.
    */
    this.ImageAcquireMode = 0;
    /**
    * ImgScan.ICDeviceSettings File Name Prefix Property
    * @type {String}
    * @property {String} FileNamePrefix Gets or sets the output image file name prefix.
    * @param {String} value Sets the File Name Prefix value.
    * @return {String} Gets the File Name Prefix value.
    */
    this.FileNamePrefix = "";
    /**
    * ImgScan.ICDeviceSettings Output Format Property
    * @type {ImgScan.ICImageOutputFormat}
    * @property {ImgScan.ICImageOutputFormat} OutputFormat Gets or sets the output image format.
    * @param {ImgScan.ICImageOutputFormat} value Sets the Output Format value.
    * @return {ImgScan.ICImageOutputFormat} Gets the Output Format value.
    */
    this.OutputFormat = 0;
    /**
    * ImgScan.ICDeviceSettings Output Compression Property
    * @type {ImgScan.ICImageCompression}
    * @property {ImgScan.ICImageCompression} OutputCompression Gets or sets the output image compression.
    * @param {ImgScan.ICImageCompression} value Sets the Output Compression value.
    * @return {ImgScan.ICImageCompression} Gets the Output Compression value.
    */
    this.OutputCompression = 0;
    /**
    * ImgScan.ICDeviceSettings Binarization Filter Property
    * @type {ImgScan.ICImageBinarizationFilterType}
    * @property {ImgScan.ICImageBinarizationFilterType} BinarizationFilter Gets or sets the image page binarization filter type.
    * @param {ImgScan.ICImageBinarizationFilterType} value Sets the Binarization Filter value.
    * @return {ImgScan.ICImageBinarizationFilterType} Gets the Binarization Filter value.
    */
    this.BinarizationFilter = 0;
    /**
    * ImgScan.ICDeviceSettings Page Count Separation Value Property
    * @type {Number}
    * @property {Number} PageCountSeparationValue Gets or sets the page count separation value.
    * @param {Number} value Sets the Page Count Separation value.
    * @return {Number} Gets the Page Count Separation value.
    */
    this.PageCountSeparationValue = 0;
    /**
    * ImgScan.ICDeviceSettings Remove Blank Pages Property
    * @type {Boolean}
    * @property {Boolean} RemoveBlankPages Gets or sets the remove blank pages value.
    * @param {Boolean} value Sets the Remove Blank Pages value.
    * @return {Boolean} Gets the Remove Blank Pages value.
    */
    this.RemoveBlankPages = false;
    /**
    * ImgScan.ICDeviceSettings Blank Page Remove Borders Property
    * @type {Boolean}
    * @property {Boolean} BlankPageRemoveBorders Gets or sets the blank page remove black margins value.
    * @param {Boolean} value Sets the Blank Page Remove Borders value.
    * @return {Boolean} Gets the Blank Page Remove Borders value.
    */
    this.BlankPageRemoveBorders = false;
    /**
    * ImgScan.ICDeviceSettings Blank Page Remove Empty Data Property
    * @type {Boolean}
    * @property {Boolean} BlankPageRemoveEmptyData Gets or sets the blank page remove empty data value.
    * @param {Boolean} value Sets the Blank Page Remove Empty Data value.
    * @return {Boolean} Gets the Blank Page Remove Empty Data value.
    */
    this.BlankPageRemoveEmptyData = false;
    /**
    * ImgScan.ICDeviceSettings Image Rotation Property
    * @type {ImgScan.ICImagePageRotationType}
    * @property {ImgScan.ICImagePageRotationType} ImageRotation Gets or sets the page output rotation.
    * @param {ImgScan.ICImagePageRotationType} value Sets the Image Rotation value.
    * @return {ImgScan.ICImagePageRotationType} Gets the Image Rotation value.
    */
    this.ImageRotation = 0;
    /**
    * ImgScan.ICDeviceSettings Remove Image Page Borders Property
    * @type {Boolean}
    * @property {Boolean} RemoveImagePageBorders Gets or sets the remove image page borders value.
    * @param {Boolean} value Sets the Remove Image Page Borders value.
    * @return {Boolean} Gets the Remove Image Page Borders value.
    */
    this.RemoveImagePageBorders = false;
    /**
    * ImgScan.ICDeviceSettings Save PDF As PDFA Property
    * @type {Boolean}
    * @property {Boolean} SavePDFAsPDFA Gets or sets the output PDF file as PDFA1.
    * @param {Boolean} value Sets the Save PDF As PDF/A value.
    * @return {Boolean} Gets the Save PDF As PDF/A value.
    */
    this.SavePDFAsPDFA = false;
    /**
    * ImgScan.ICDeviceSettings Blank Page Margin Property
    * @type {Boolean}
    * @property {Boolean} BlankPageMargin Gets or sets the blank page margin value.
    * @param {Boolean} value Sets the Blank Page Margin value.
    * @return {Boolean} Gets the Blank Page Margin value.
    */
    this.BlankPageMargin = 10;
    /**
    * ImgScan.ICDeviceSettings Stop On First Result Property
    * @type {Boolean}
    * @property {Boolean} StopOnFirstResult Get or sets the stop reading on first result.
    * @param {Boolean} value Sets the Stop On First Result value.
    * @return {Boolean} Gets the Stop On First Result value.
    */
    this.StopOnFirstResult = true;
    /**
    * ImgScan.ICDeviceSettings Image Barcode Search Mode Property
    * @type {ImgScan.ICImageBarcodeSearchMode}
    * @property {ImgScan.ICImageBarcodeSearchMode} ImageBarcodeSearchMode Gets or sets the barcode search mode.
    * @param {ImgScan.ICImageBarcodeSearchMode} value Sets the Image Barcode Search Mode value.
    * @return {ImgScan.ICImageBarcodeSearchMode} Gets the Image Barcode Search Mode value.
    */
    this.ImageBarcodeSearchMode = 2;
    /**
    * ImgScan.ICDeviceSettings Enable Check Digit Property
    * @type {Boolean}
    * @property {Boolean} EnableCheckDigit Enabled or disables the barcode check digit.
    * @param {Boolean} value Sets the Enable Check Digit value.
    * @return {Boolean} Gets the Enable Check Digit value.
    */
    this.EnableCheckDigit = false;
    /**
    * ImgScan.ICDeviceSettings Show Scanner UI Property
    * @type {Boolean}
    * @property {Boolean} ShowScannerUI Gets or sets the display of the scanner driver settings window.
    * @param {Boolean} value Sets the Show Scanner UI value.
    * @return {Boolean} Gets the Show Scanner UI value.
    */
    this.ShowScannerUI = true;
    /**
    * ImgScan.ICDeviceSettings Blank Page Tolerance Property
    * @type {Float}
    * @property {Float} BlankPageTolerance Gets or sets the blank page tolerance value.
    * @param {Float} value Sets the Blank Page Tolerance value.
    * @return {Float} Gets the Blank Page Tolerance value.
    */
    this.BlankPageTolerance = 0.6;
    /**
    * ImgScan.ICDeviceSettings Output Directory Property
    * @type {String}
    * @property {String} OutputDirectory Gets or sets the output single page files directory.
    * @param {String} value Sets the Output Directory value.
    * @return {String} Gets the Output Directory value.
    */
    this.OutputDirectory = "";
    /**
    * ImgScan.ICDeviceSettings Enable Preview Property
    * @type {Boolean}
    * @property {Boolean} EnablePreview Get or set the enable image scan preview value.
    * @param {Boolean} value Sets the Enable Preview value.
    * @return {Boolean} Gets the Enable Preview value.
    */
    this.EnablePreview = false;
    /**
    * ImgScan.ICDeviceSettings Insert At Position Property
    * @type {Number}
    * @property {Number} InsertAtPosition Gets or sets the position of the scanned image pages.
    * @param {Number} value Sets the Insert At Position value.
    * @return {Number} Gets the Insert At Position value.
    */
    this.InsertAtPosition = 0;
    /**
   * ImgScan.ICDeviceSettings Raise Feeder Empty Error
   * @type {Boolean}
   * @property {Boolean} RaiseFeederEmptyError Get or set the raise feeder empty error value.
   * @param {Boolean} value Sets the raise feeder empty error value.
   * @return {Boolean} Gets the raise feeder empty error value.
   */
    this.RaiseFeederEmptyError = true;
    /**
    * ImgScan.ICDeviceSettings Save JPG Quality Property
    * @type {Number}
    * @property {Number} SaveJPGQuality Gets or sets the output JPG image save quality.
    * @param {Number} value Sets the Save JPG Quality value.
    * @return {Number} Gets the Save JPG Quality value.
    */
    this.SaveJPGQuality = 100;
    /**
    * ImgScan.ICDeviceSettings Image Page Separation Property
    * @type {ImgScan.ICImagePageSeparationType}
    * @property {ImgScan.ICImagePageSeparationType} ImagePageSeparation Gets or sets the image page separation type.
    * @param {ImgScan.ICImagePageSeparationType} value Sets the Image Page Separation value.
    * @return {ImgScan.ICImagePageSeparationType} Gets the Image Page Separation value.
    */
    this.ImagePageSeparation = 0;
    /**
    * ImgScan.ICDeviceSettings Barcode Types Property
    * @type {ImgScan.ICImageBarcodeType[]}
    * @property {ImgScan.ICImageBarcodeType[]} BarcodeTypes Gets or sets the barcode separation types.
    * @param {ImgScan.ICImageBarcodeType[]} value Sets the Barcode Types value.
    * @return {ImgScan.ICImageBarcodeType[]} Gets the Barcode Types value.
    */
    this.BarcodeTypes = [];
    /**
    * ImgScan.ICDeviceSettings Barcode Orientations Property
    * @type {ImgScan.ICImageBarcodeOrientation[]}
    * @property {ImgScan.ICImageBarcodeOrientation[]} BarcodeOrientations Gets or sets the barcode orientations.
    * @param {ImgScan.ICImageBarcodeOrientation[]} value Sets the Barcode Orientations value.
    * @return {ImgScan.ICImageBarcodeOrientation[]} Gets the Barcode Orientations value.
    */
    this.BarcodeOrientations = [];
    /**
    * ImgScan.ICDeviceSettings Barcode Separation Value Property
    * @type {String}
    * @property {String} BarcodeSeparationValue Gets or sets the barcode separation value.
    * @param {String} value Sets the Barcode Separation value.
    * @return {String} Gets the Barcode Separation value.
    */
    this.BarcodeSeparationValue = "";
    /**
    * ImgScan.ICDeviceSettings Page Count Separation Value Property
    * @type {Number}
    * @property {Number} PageCountSeparationValue Gets or sets the page count separation value.
    * @param {Number} value Sets the Page Count Separation value.
    * @return {Number} Gets the Page Count Separation value.
    */
    this.PageCountSeparationValue = 0;
    /**
    * ImgScan.ICDeviceSettings Is Barcode In First Page Property
    * @type {Boolean}
    * @property {Boolean} IsBarcodeInFirstPage Gets or sets if the barcode is in the first page.
    * @param {Boolean} value Sets the Is Barcode In First Page value.
    * @return {Boolean} Gets the Is Barcode In First Page value.
    */
    this.IsBarcodeInFirstPage = false;
    /**
    * ImgScan.ICDeviceSettings Remove Barcode Page Property
    * @type {Boolean}
    * @property {Boolean} RemoveBarcodePage Gets or sets the remove barcode page value.
    * @param {Boolean} value Sets the Remove Barcode Page value.
    * @return {Boolean} Gets the Remove Barcode Page value.
    */
    this.RemoveBarcodePage = false;
    /**
    * ImgScan.ICDeviceSettings Image File Directory Property
    * @type {String}
    * @property {String} ImageFileDirectory Gets or sets the output single page files directory.
    * @param {String} value Sets the Image File Directory value.
    * @return {String} Gets the Image File Directory value.
    */
    this.ImageFileDirectory = "";
};

/*!
 * The Image Components twain settings class.
 * Creates a new twain settings instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgScan.TwainSettings = function () {

    /**
    * ImgScan.TwainSettings CurrentValues Values Property
    * @readonly
    * @type {ImgScan.TwainValues}
    * @property {ImgScan.TwainValues} CurrentValues Gets the Twain current values.
    * @return {ImgScan.TwainValues} Gets the Twain current values.
    */
    this.CurrentValues = new ImgScan.TwainValues();
    /**
    * ImgScan.TwainSettings Values Property
    * @readonly
    * @type {ImgScan.TwainValues}
    * @property {ImgScan.TwainValues} CurrentValues Gets or sets the Twain values.
    * @param {ImgScan.TwainValues} value Sets the twain values.
    * @return {ImgScan.TwainValues} Gets the Twain values.
    */
    this.Values = new ImgScan.TwainValues();
};

/*!
 * The Image Components twain values class.
 * Creates a new twain values instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgScan.TwainValues = function () {

    /**
    * ImgScan.TwainSettings Values Property
    * @readonly
    * @type {ImgScan.Capabilities}
    * @property {ImgScan.Capabilities} TwainCapabilities Gets or sets the Twain device capabilities.
    * @param {ImgScan.Capabilities} value Sets the Twain device capabilities.
    * @return {ImgScan.Capabilities} Gets the Twain device capabilities.
    */
    this.TwainCapabilities = new ImgScan.Capabilities();
    /**
    * ImgScan.TwainSettings Values Property
    * @readonly
    * @type {ImgScan.ImageCapabilities}
    * @property {ImgScan.ImageCapabilities} TwainICapabilities Gets or sets the Twain image capabilities.
    * @param {ImgScan.ImageCapabilities} value Sets the Twain image capabilities.
    * @return {ImgScan.ImageCapabilities} Gets the Twain image capabilities.
    */
    this.TwainICapabilities = new ImgScan.ImageCapabilities();
};

/*!
 * The Image Components twain device capabilities class.
 * Creates a new twain device capabilities instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgScan.Capabilities = function () {
    /**
    * ImgScan.Capabilities Custom DS Data Property
    * @type {Boolean}
    * @property {Boolean} CustomDSData Allows the application to query the data source to see if it supports the new operation triplets.
    * @param {Boolean} value Sets the Custom DS Data value.
    * @return {Boolean} Gets the Custom DS Data value.
    */
    this.CustomDSData = false;
    /**
    * ImgScan.Capabilities Image XFER Count Property
    * @type {Number}
    * @property {Number} ImageXferCount The application is willing to accept this number of images.
    * @param {Number} value Sets the Image XFER Count value.
    * @return {Number} Gets the Image XFER Count value.
    */
    this.ImageXferCount = -1;
    /**
    * ImgScan.Capabilities Is Auto Deskew Enabled Property
    * @type {Boolean}
    * @property {Boolean} IsAutoDeskewEnabled
    * Turns automatic deskew correction on and off.
    * Set to null to use the current default setting.
    * @param {Boolean} value Sets the Is Auto Deskew Enabled value.
    * @return {Boolean} Gets the Is Auto Deskew Enabled value.
    */
    this.IsAutoDeskewEnabled = null;
    /**
    * ImgScan.Capabilities Is Auto Border Detection Enabled Property
    * @type {Boolean}
    * @property {Boolean} IsAutoBorderDetectionEnabled
    * Turns automatic border detection on and off.
    * Set to null to use the current default setting.
    * @param {Boolean} value Sets the Is Auto Border Detection Enabled value.
    * @return {Boolean} Gets the Is Auto Border Detection Enabled value.
    */
    this.IsAutoBorderDetectionEnabled = null;
    /**
    * ImgScan.Capabilities Is Auto Rotation Enabled Property
    * @type {Boolean}
    * @property {Boolean} IsAutoRotationEnabled
    * When TRUE this capability depends on intelligent features within the Source to automatically rotate the image to the correct position.
    * Set to null to use the current default setting.
    * @param {Boolean} value Sets the Is Auto Rotation Enabled value.
    * @return {Boolean} Gets the Is Auto Rotation Enabled value.
    */
    this.IsAutoRotationEnabled = null;
    /**
    * ImgScan.Capabilities Is Duplex Enabled Property
    * @type {Boolean}
    * @property {Boolean} IsDuplexEnabled
    * The user can set the duplex option to be TRUE or FALSE. If TRUE, the scanner scans both sides of a paper; otherwise, the scanner will scan only one side of the image.
    * Set to null to use the current default setting.
    * @param {Boolean} value Sets the Is Duplex Enabled value.
    * @return {Boolean} Gets the Is Duplex Enabled value.
    */
    this.IsDuplexEnabled = null;
    /**
    * ImgScan.Capabilities Duplex Type Value Property
    * @type {ImgScan.CAP_DUPLEX}
    * @property {ImgScan.CAP_DUPLEX} DuplexTypeValue
    * [READ ONLY] This indicates whether the scanner supports duplex. If so, it further indicates whether one-path or two-path duplex is supported.
    * Set to null to use the current default setting.
    * @param {ImgScan.CAP_DUPLEX} value Sets the Duplex Type value.
    * @return {ImgScan.CAP_DUPLEX} Gets the Duplex Type value.
    */
    this.DuplexTypeValue = null;
    /**
    * ImgScan.Capabilities Is Feeder Enabled Property
    * @type {Boolean}
    * @property {Boolean} IsFeederEnabled
    * If TRUE, Source must acquire data from the document feeder acquire area and other feeder
    * capabilities can be used. If FALSE, Source must acquire data from the non-feeder acquire area and
    * no other feeder capabilities can be used.
    * Set to null to use the current default setting.
    * @param {Boolean} value Sets the Is Feeder Enabled value.
    * @return {Boolean} Gets the Is Feeder Enabled value.
    */
    this.IsFeederEnabled = null;
    /**
    * ImgScan.Capabilities Is IsAutoFeedEnabled Feed Enabled Property
    * @type {Boolean}
    * @property {Boolean} IsUnderline
    * If TRUE, the Source will automatically feed the next page from the document feeder after the
    * number of frames negotiated for capture from each page are acquired. CAP_FEEDERENABLED
    * must be TRUE to use this capability.
    * Set to null to use the current default setting.
    * @param {Boolean}   value Sets the Is Auto Feed Enabled value.
    * @return {Boolean} Gets the Is Auto Feed Enabled value.
    */
    this.IsAutoFeedEnabled = null;
    /**
    * ImgScan.Capabilities Is Auto Scan Enabled Property
    * @type {Boolean}
    * @property {Boolean} IsAutoScanEnabled
    * This capability is intended to boost the performance of a Source. The fundamental assumption
    * behind AutoScan is that the device is able to capture the number of images indicated by the value
    * of CAP_XFERCOUNT without waiting for the Application to request the image transfers. This is
    * only possible if the device has internal buffers capable of caching the images it captures.
    * Set to null to use the current default setting.
    * @param {Boolean} value Sets the Is Auto Scan Enabled value.
    * @return {Boolean} Gets the Is Auto Scan Enabled value.
    */
    this.IsAutoScanEnabled = null;
    /**
    * ImgScan.Capabilities Abort When No Paper Detected Property
    * @type {Boolean}
    * @property {Boolean} AbortWhenNoPaperDetected
    * Gets or set the abort when no paper is detected.
    * Set to null to use the current default setting.
    * @param {Boolean} value Sets the Abort When No Paper Detected value.
    * @return {Boolean} Gets the Abort When No Paper Detected value.
    */
    this.AbortWhenNoPaperDetected = false;
    /**
    * ImgScan.Capabilities Show Progress Indicator Property
    * @type {Boolean}
    * @property {Boolean} ShowProgressIndicator
    * If TRUE, the Source displays a progress indicator during acquisition and transfer, regardless of
    * whether the Source's user interface is active. If FALSE, the progress indicator is suppressed if the
    * Source's user interface is inactive.
    * Set to null to use the current default setting.
    * @param {Boolean}     Sets the Show Progress Indicator value.
    * @return {Boolean} Gets the Show Progress Indicator value.
    */
    this.ShowProgressIndicator = false;
};

/*!
 * The Image Components twain device image capabilities class.
 * Creates a new twain device image capabilities instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgScan.ImageCapabilities = function () {
    /**
    * ImgScan.ImageCapabilities Image XFER MECH Property
    * @type {ImgScan.ICAP_XFERMECH}
    * @property {ImgScan.ICAP_XFERMECH} ImageXferMech
    * Allows the application and Source to identify which transfer mechanisms the source supports.
    * Set to null to use the current default setting.
    * @param {ImgScan.ICAP_XFERMECH} value Sets the Image XFER MECH value.
    * @return {ImgScan.ICAP_XFERMECH} Gets the Image XFER MECH value.
    */
    this.ImageXferMech = null;
    /**
    * ImgScan.ImageCapabilities Image File Format Value Property
    * @type {ImgScan.ICAP_IMAGEFILEFORMAT}
    * @property {ImgScan.ICAP_IMAGEFILEFORMAT} ImageFileFormatValue
    * Informs the application which file formats the Source can generate. Tells the Source
    * which file formats the application can handle (MSG_SET).
    * Set to null to use the current default setting.
    * @param {ImgScan.ICAP_IMAGEFILEFORMAT}   value Sets the Image File Format value.
    * @return {ImgScan.ICAP_IMAGEFILEFORMAT} Gets the Image File Format value.
    */
    this.ImageFileFormatValue = null;
    /**
    * ImgScan.ImageCapabilities Paper Orientation Value Property
    * @type {ImgScan.ICAP_ORIENTATION}
    * @property {ImgScan.ICAP_ORIENTATION} PaperOrientationValue
    * Defines which edge of the “paper” the image’s “top” is aligned with. This information is used to
    * adjust the frames to match the scanning orientation of the paper.
    * Set to null to use the current default setting.
    * @param {ImgScan.ICAP_ORIENTATION} value Sets the Paper Orientation value.
    * @return {ImgScan.ICAP_ORIENTATION} Gets the Paper Orientation value.
    */
    this.PaperOrientationValue = null;
    /**
    * ImgScan.ImageCapabilities Paper Size Value Property
    * @type {ImgScan.ICAP_SUPPORTEDSIZES}
    * @property {ImgScan.ICAP_SUPPORTEDSIZES} PaperSizeValue
    * For devices that support fixed frame sizes. Defined sizes match typical page sizes. This specifies
    * the size(s) the Source can/should use to acquire image data.
    * Set to null to use the current default setting.
    * @param {ImgScan.ICAP_SUPPORTEDSIZES} value Sets the Paper Size value.
    * @return {ImgScan.ICAP_SUPPORTEDSIZES} Gets the Paper Size value.
    */
    this.PaperSizeValue = null;
    /**
    * ImgScan.ImageCapabilities X Resolution Value Property
    * @type {Number}
    * @property {Number} ImageXferCount
    * Gets or sets all the X-axis resolutions the Source can provide.
    * Set to null to use the current default setting.
    * @param      {Number}   value Sets the X Resolution value.
    * @return     {Number} Gets the X Resolution value.
    */
    this.XResolutionValue = null;
    /**
    * ImgScan.ImageCapabilities Y Resolution Value Property
    * @type {Number}
    * @property {Number} YResolutionValue
    * Gets or sets all the Y-axis resolutions the Source can provide.
    * Set to null to use the current default setting.
    * @param {Number} value Sets the Y Resolution value.
    * @return {Number} Gets the Y Resolution value.
    */
    this.YResolutionValue = null;
    /**
    * ImgScan.ImageCapabilities Pixel Type Value Property
    * @type {ImgScan.ICAP_PIXELTYPE}
    * @property {ImgScan.ICAP_PIXELTYPE} PixelTypeValue
    * The type of pixel data that a Source is capable of acquiring (for example, black and white, gray, RGB, etc.).
    * Set to null to use the current default setting.
    * @param {ImgScan.ICAP_PIXELTYPE} value Sets the Pixel Type value.
    * @return {ImgScan.ICAP_PIXELTYPE} Gets the Pixel Type value.
    */
    this.PixelTypeValue = null;
    /**
    * ImgScan.ImageCapabilities Is Auto Bright Enabled Property
    * @type {Boolean}
    * @property {Boolean} IsAutoBrightEnabled
    * TRUE enables and FALSE disables the Source’s Auto-brightness function (if any).
    * Set to null to use the current default setting.
    * @param {Boolean} value Sets the Is Auto Bright Enabled value.
    * @return {Boolean} Gets the Is Auto Bright Enabled value.
    */
    this.IsAutoBrightEnabled = null;
    /**
    * ImgScan.ImageCapabilities Is Auto Remove Blank Pages Enabled Property
    * @type {ImgScan.ICAP_AUTODISCARDBLANKPAGES}
    * @property {ImgScan.ICAP_AUTODISCARDBLANKPAGES} IsAutoRemoveBlankPagesEnabled
    * Use this capability to have the Source discard blank images. The Application never sees these
    * images during the scanning session.
    * Set to null to use the current default setting.
    * @param {ImgScan.ICAP_AUTODISCARDBLANKPAGES} value Sets the Is Auto Remove Blank Pages Enabled value.
    * @return {ImgScan.ICAP_AUTODISCARDBLANKPAGES} Gets the Is Auto Remove Blank Pages Enabled value.
    */
    this.IsAutoRemoveBlankPagesEnabled = null;
    /**
    * ImgScan.ImageCapabilities Units Value Property
    * @type {ImgScan.ICAP_UNITS}
    * @property {ImgScan.ICAP_UNITS} UnitsValue
    * The unit of measure for all quantities.
    * Set to null to use the current default setting.
    * @param {ImgScan.ICAP_UNITS} value Sets the Units value.
    * @return {ImgScan.ICAP_UNITS} Gets the Units value.
    */
    this.UnitsValue = 0;
    /**
    * ImgScan.ImageCapabilities Brightness Value Property
    * @type {Number}
    * @property {Number} BrightnessValue
    * Gets or set the abort when no paper is detected.
    * Set to null to use the current default setting.
    * @param {Number} value Sets the Brightness value.
    * @return {Number} Gets the Brightness value.
    */
    this.BrightnessValue = null;
    /**
    * ImgScan.ImageCapabilities Contrast Value Property
    * @type {Number}
    * @property {Number} ContrastValue
    * The contrast values available within the Source.
    * Set to null to use the current default setting.
    * @param {Number} value Sets the Contrast value.
    * @return {Number} Gets the Contrast value.
    */
    this.ContrastValue = null;
    /**
    * ImgScan.ImageCapabilities Area Region Property
    * @type {ImgScan.AreaRegion}
    * @property {ImgScan.AreaRegion} AreaRegion
    * Gets or sets the area region settings value.
    * Set to null to use the current default setting.
    * @param {ImgScan.AreaRegion} value Sets the Area Region value.
    * @return {ImgScan.AreaRegion} Gets the Area Region value.
    */
    this.AreaRegion = new ImgScan.AreaRegion();
    /**
    * ImgScan.ImageCapabilities I Capabilities Values Property
    * @readonly
    * @type {ImgScan.ImageCapabilitiesValues}
    * @property {ImgScan.ImageCapabilitiesValues} ICapabilitiesValues
    * [READ ONLY] Gets the device current image capabilities values.
    * @return {ImgScan.ImageCapabilitiesValues} Gets the ICapabilitiesValues value.
    */
    this.ICapabilitiesValues = new ImgScan.ImageCapabilitiesValues();
};

/*!
 * The Image Components twain device image capabilities values class.
 * Creates a new twain device image capabilities values instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgScan.ImageCapabilitiesValues = function () {
    /**
    * ImgScan.ImageCapabilitiesValues Image XFER MECHS Property
    * @readonly
    * @type {ImgScan.ICAP_XFERMECH[]}
    * @property {ImgScan.ICAP_XFERMECH[]} ImageXferMechs
    * [READ ONLY] Gets the image transfer mechanisms.
    * @return {ImgScan.ICAP_XFERMECH[]} Gets the Image XFER MECHS value.
    */
    this.ImageXferMechs = [];
    /**
    * ImgScan.ImageCapabilitiesValues Image File Formats Property
    * @readonly
    * @type {ImgScan.ICAP_IMAGEFILEFORMAT[]}
    * @property {ImgScan.ICAP_IMAGEFILEFORMAT[]} ImageFileFormats
    * [READ ONLY] Gets the image file formats.
    * @return {ImgScan.ICAP_IMAGEFILEFORMAT[]} Gets the Image File Formats value.
    */
    this.ImageFileFormats = [];
    /**
    * ImgScan.ImageCapabilitiesValues Paper Sizes Property
    * @readonly
    * @type {ImgScan.ICAP_SUPPORTEDSIZES[]}
    * @property {ImgScan.ICAP_SUPPORTEDSIZES[]} PaperSizes
    * [READ ONLY] Gets the paper sizes.
    * @return {ImgScan.ICAP_SUPPORTEDSIZES[]} Gets the Paper Sizes value.
    */
    this.PaperSizes = [];
    /**
    * ImgScan.ImageCapabilitiesValues Pixel Types Property
    * @readonly
    * @type {ImgScan.ICAP_PIXELTYPE[]}
    * @property {ImgScan.ICAP_PIXELTYPE[]} PixelTypes
    * [READ ONLY] Gets the pixel types.
    * @return {ImgScan.ICAP_PIXELTYPE[]} Gets the Pixel Types value.
    */
    this.PixelTypes = [];
    /**
    * ImgScan.ImageCapabilitiesValues Paper Orientations Property
    * @readonly
    * @type {ImgScan.ICAP_ORIENTATION[]}
    * @property {ImgScan.ICAP_ORIENTATION[]} PaperOrientations
    * [READ ONLY] Gets the paper orientations.
    * @return {ImgScan.ICAP_ORIENTATION[]} Gets the PaperOrientations value.
    */
    this.PaperOrientations = [];
    /**
    * ImgScan.ImageCapabilitiesValues X Resolutions Property
    * @readonly
    * @type {ImgScan.Float[]}
    * @property {Float[]} XResolutions
    * [READ ONLY] Gets the X resolutions.
    * @return {Float[]} Gets the X Resolutions value.
    */
    this.XResolutions = [];
    /**
    * ImgScan.ImageCapabilitiesValues Y Resolutions Property
    * @readonly
    * @type {ImgScan.Float[]}
    * @property {Float[]} YResolutions
    * [READ ONLY] Gets the Y resolutions.
    * @return {Float[]} Gets the Y Resolutions value.
    */
    this.YResolutions = [];
};

/*!
 * The Image Components scan area settings class.
 * Creates a new scan area settings instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgScan.AreaRegion = function () {
    /**
    * ImgScan.AreaRegion Bottom Property
    * @type {Float}
    * @property {Float} Bottom Gets or sets the bottom value.
    * @param {Float} value Sets the Bottom value.
    * @return {Float} Gets the Bottom value.
    */
    this.Bottom = null;
    /**
    * ImgScan.AreaRegion Left Property
    * @type {Float}
    * @property {Float} Left Gets or sets the left value.
    * @param {Float} value Sets the Left value.
    * @return {Float} Gets the Left value.
    */
    this.Left = null;
    /**
    * ImgScan.AreaRegion Right Property
    * @type {Float}
    * @property {Float} Right Gets or sets the right value.
    * @param {Float} value Sets the Right value.
    * @return {Float} Gets the Right value.
    */
    this.Right = null;
    /**
    * ImgScan.AreaRegion Top Property
    * @type {Float}
    * @property {Float} Top Gets or sets the top value.
    * @param {Float} value Sets the Top value.
    * @return {Float} Gets the Top value.
    */
    this.Top = null;
    /**
    * ImgScan.AreaRegion Units Property
    * @type {ImgScan.ICAP_UNITS}
    * @property {ImgScan.ICAP_UNITS} Units Gets or sets the Units value.
    * @param {ImgScan.ICAP_UNITS} value Sets the Units value.
    * @return {ImgScan.ICAP_UNITS} Gets the Units value.
    */
    this.Units = null;
};

/*!
 * The Image Components WIA settings class.
 * Creates a new WIA settings instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgScan.WIASettings = function () {
    /**
    * ImgScan.WIASettings Current Values Property
    * @readonly
    * @type {ImgScan.WIAValues}
    * @property {ImgScan.WIAValues} CurrentValues Gets the WIA current values.
    * @return {
    ImgScan.WIAValues} Gets the CurrentValues value.
     */
    this.CurrentValues = new ImgScan.WIAValues();
    /**
    * ImgScan.WIASettings Values Property
    * @type {ImgScan.WIAValues}
    * @property {ImgScan.WIAValues} Values Sets the WIA values.
    * @param {ImgScan.WIAValues} value Sets the Values value.
    * @return {ImgScan.WIAValues} Gets the Values value.
    */
    this.Values = new ImgScan.WIAValues();
};

/*!
 * The Image Components WIA Device UI current values class.
 * Creates a new WIA Device UI current values instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgScan.WIAValues = function () {
    /**
    * ImgScan.WIAValues WIA Device Settings Property
    * @type {ImgScan.DeviceSettings}
    * @property {ImgScan.DeviceSettings} Values Gets or sets the WIA device settings.
    * @param {ImgScan.DeviceSettings} value Sets the WIA Device Settings value.
    * @return {ImgScan.DeviceSettings} Gets the WIA Device Settings value.
    */
    this.WIADeviceSettings = new ImgScan.DeviceSettings();
    /**
    * ImgScan.WIAValues WIA Image Settings Property
    * @type {ImgScan.ImageSettings}
    * @property {ImgScan.ImageSettings} Values Gets or sets the WIA image settings.
    * @param {ImgScan.ImageSettings} value Sets the WIA Image Settings value.
    * @return {ImgScan.ImageSettings} Gets the WIA Image Settings value.
    */
    this.WIAImageSettings = new ImgScan.ImageSettings();
};

/*!
 * The Image Components WIA Device Settings class.
 * Creates a new WIA Device Settings instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgScan.DeviceSettings = function () {
    /**
    * ImgScan.DeviceSettings Device ID Property
    * @readonly
    * @type {String}
    * @property {String} DeviceID
    * [READ ONLY] The DeviceID property contains the device identifier (ID) string for a WIA mini driver. The WIA service creates and maintains this property.
    * @return {String} Gets the DeviceID value.
    */
    this.DeviceID = "";
    /**
    * ImgScan.DeviceSettings Vendor Description Property
    * @readonly
    * @type {String}
    * @property {String} VendorDescription
    * [READ ONLY] The VendorDescription property contains a vendor description string for the WIA mini driver. The WIA service creates and maintains this property.
    * The vendor description is obtained from the INF file. An application reads the VendorDescription property to get a description of the device vendor.
    * @return {String} Gets the Vendor Description value.
    */
    this.VendorDescription = "";
    /**
    * ImgScan.DeviceSettings Device Description Property
    * @readonly
    * @type {String}
    * @property {String} DeviceDescription
    * [READ ONLY] The DeviceDescription property contains the device description string for a WIA mini driver. The WIA service creates and maintains this property.
    * The device description string that the DeviceDescription property contains is obtained from the driver's INF file. An application reads this property to get a description of the device.
    * @return {String} Gets the Device Description value.
    */
    this.DeviceDescription = "";
    /**
    * ImgScan.DeviceSettings Port Name Property
    * @readonly
    * @type {String}
    * @property {String} PortName
    * [READ ONLY] The PortName property contains an installed device's port name, which is assigned by the kernel-mode driver that operates the device. The WIA service creates and maintains this property.
    * An application reads the PortName property to determine the port name.
    * @return {String} Gets the Port Name value.
    */
    this.PortName = "";
    /**
    * ImgScan.DeviceSettings Device Name Property
    * @readonly
    * @type {String}
    * @property {String} DeviceName
    * [READ ONLY] The DeviceName property contains the name of a device. The WIA service creates and maintains this property.
    * The device name that is contained in the DeviceName property is obtained from the driver's INF file. An application reads this property to obtain the name of the device.
    * @return {String} Gets the Device Name value.
    */
    this.DeviceName = "";
    /**
    * ImgScan.DeviceSettings Server Name Property
    * @readonly
    * @type {String}
    * @property {String} ServerName
    * [READ ONLY] The ServerName property contains the name of the server that a WIA mini driver is running on.
    * The default value of ServerName is "local". This property should contain the string "local" when an application is connected to a device on the same computer.
    * Versions: Optional for Microsoft Windows XP and later operating systems.
    * @return {String} Gets the Server Name value.
    */
    this.ServerName = "";
    /**
    * ImgScan.DeviceSettings Remote Device ID Property
    * @readonly
    * @type {String}
    * @property {String} RemoteDeviceID
    * [READ ONLY] The RemoteDeviceID property contains the device identifier (ID) of a WIA device that is installed on a remote computer. The WIA service creates and maintains this property.
    * @return {String} Gets the Remote Device ID value.
    */
    this.RemoteDeviceID = "";
    /**
    * ImgScan.DeviceSettings UI Class ID Property
    * @readonly
    * @type {String}
    * @property {String} UiClassID
    * [READ ONLY] The UiClassID property contains the vendor-supplied class identifier (CLSID) for any user interface (UI) extension COM object that is installed with a WIA mini driver. The WIA service creates and maintains this property.
    * The UI CLSID value that is contained in the UiClassID property is obtained from the driver's INF file. If no UI CLSID is specified, the WIA service supplies a default value. This property is used only internally by the WIA service when UI is being displayed.
    * @return {String} Gets the UI Class ID value.
    */
    this.UiClassID = "";
    /**
    * ImgScan.DeviceSettings Hardware Configuration Property
    * @readonly
    * @type {ImgScan.WIAHardwareConfiguration}
    * @property {ImgScan.WIAHardwareConfiguration} HardwareConfiguration
    * [READ ONLY] The HardwareConfiguration property indicates the type of connection that a device is using. The WIA service creates and maintains this property, and only the WIA service can change it.
    * An application reads the HardwareConfiguration property to determine the device's connection type.
    * @return {ImgScan.WIAHardwareConfiguration} Gets the Hardware Configuration value.
    */
    this.HardwareConfiguration = 1;
    /**
    * ImgScan.DeviceSettings Baud rate Property
    * @readonly
    * @type {String}
    * @property {String} Baudrate
    * [READ ONLY] BaudRate
    * The Baud rate property contains the current baud rate setting for a device. The WIA service creates and maintains this property.
    * The value of the Baud rate property should be "Empty" if the device is not connected by a serial cable.
    * @return {String} Gets the Baud rate value.
    */
    this.Baudrate = "";
    /**
    * ImgScan.DeviceSettings WIA Version Property
    * @readonly
    * @type {String}
    * @property {String} WiaVersion
    * [READ ONLY] The WiaVersion property contains the number (as a string) of the current WIA version that is installed on a computer. The WIA service creates and maintains this property.
    * An application reads WiaVersion to determine the version of WIA that is installed on the computer.
    * Versions: Available in Microsoft Windows XP and later operating systems.
    * @return {String} Gets the WIA Version value.
    */
    this.WiaVersion = "";
    /**
    * ImgScan.DeviceSettings Driver Version Property
    * @readonly
    * @type {String}
    * @property {String} DriverVersion
    * [READ ONLY] The DriverVersion property contains the current DLL version of a WIA mini driver. The WIA service creates and maintains this property.
    * If the WIA mini driver does not supply a version resource, the WIA service supplies the value "0.0.0.0" as a default. An application reads DriverVersion to determine the version of the WIA mini driver DLL.
    * Note:  Beginning with Windows Vista, the wild card IP address 0.0.0.0 is not available.
    * Also beginning with Windows Vista, if the IPAutoconfigurationEnabled registry key is set to a value of 0, automatic IP address assignment is disabled, and no IP address is assigned. In this case, the ipconfig command line tool will not display an IP address. If the key is set to a nonzero value, an IP address is automatically assigned. This key can be located at the following paths in the registry:
    * HKEY_LOCAL_MACHINE\SYSTEM\Current Control Set\Services\Tcpip\Parameters\IPAutoconfigurationEnabled
    * HKEY_LOCAL_MACHINE\SYSTEM\Current Control Set\Services\Tcpip\Parameters\Interfaces\GUID\IPAutoconfigurationEnabled
    * Versions: Available in Microsoft Windows XP and later operating systems.
    * @return {String} Gets the Driver Version value.
    */
    this.DriverVersion = "";
    /**
    * ImgScan.DeviceSettings PNP ID Property
    * @readonly
    * @type {String}
    * @property {String} PnpID
    * [READ ONLY] The current PnP id for the device. The WIA service creates and maintains this property. This property is available in Windows Vista and later.
    * @return {String} Gets the PNP ID value.
    */
    this.PnpID = "";
    /**
    * ImgScan.DeviceSettings Firmware Version Property
    * @readonly
    * @type {String}
    * @property {String} FirmwareVersion
    * [READ ONLY] The FirmwareVersion property contains a device firmware version. The mini driver creates and maintains this property.
    * The value of the FirmwareVersion property must be a string value, such as "1.0.4" or "1.0abc".
    * @return {String} Gets the Firmware Version value.
    */
    this.FirmwareVersion = "";
    /**
    * ImgScan.DeviceSettings Connection Status Property
    * @readonly
    * @type {ImgScan.WIAConnectionStatus}
    * @property {ImgScan.WIAConnectionStatus} ConnectionStatus
    * [READ ONLY] The ConnectStatus property contains the current connection status for a device. The WIA mini driver creates and maintains this property.
    * @return {ImgScan.WIAConnectionStatus} Gets the Connection Status value.
    */
    this.ConnectionStatus = 0;
    /**
    * ImgScan.DeviceSettings Horizontal Bed Size Property
    * @readonly
    * @type {Number}
    * @property {Number} HorizontalBedSize
    * [READ ONLY] The HorizontalBedSize property contains the physical dimensions of a scanner's flatbed, in thousandths of an inch (.001). The WIA mini driver creates and maintains this property.
    * Versions: Beginning with Windows Vista, the HorizontalBedSize property is still available, but it has been replaced by the WIA_IPS_MAX_HORIZONTAL_SIZE property, so you should consider it optional.
    * @return {Number} Gets the Horizontal Bed Size value.
    */
    this.HorizontalBedSize = 0;
    /**
    * ImgScan.DeviceSettings Vertical Bed Size Property
    * @readonly
    * @type {Number}
    * @property {Number} VerticalBedSize
    * [READ ONLY] The VerticalBedSize property contains the physical vertical dimensions of a scanner's flatbed, in thousandths of an inch (.001). The WIA mini driver creates and maintains this property.
    * Versions: Beginning with Windows Vista, the VerticalBedSize property is still available at the root level of the WIA driver. But this property has been replaced with the WIA_IPS_MAX_VERTICAL_SIZE property, and you should consider it to be optional.
    * @return {Number} Gets the Vertical Bed Size value.
    */
    this.VerticalBedSize = 0;
    /**
    * ImgScan.DeviceSettings Horizontal Sheet Feed Size Property
    * @readonly
    * @type {Number}
    * @property {Number} HorizontalSheetFeedSize
    * [READ ONLY] The HorizontalSheetFeedSize property contains the physical horizontal dimensions of  scanner's document feeder, in thousandths of an inch (.001). The WIA mini driver creates and maintains this property.
    * Versions: Beginning with Windows Vista, the HorizontalSheetFeedSize property is still available at the root level of the WIA driver, but it has been replaced by the WIA_IPS_MAX_HORIZONTAL_SIZE property, so you should consider it optional.
    * @return {Number} Gets the Horizontal Sheet Feed Size value.
    */
    this.HorizontalSheetFeedSize = 0;
    /**
    * ImgScan.DeviceSettings Vertical Sheet Feed Size Property
    * @readonly
    * @type {Number}
    * @property {Number} VerticalSheetFeedSize
    * [READ ONLY] The VerticalSheetFeedSize property contains the physical vertical dimensions of a scanner's document feeder, in thousandths of an inch (.001). The WIA mini driver creates and maintains this property.
    * Versions: Beginning with Windows Vista, the VerticalSheetFeedSize property is still available at the root level of the WIA driver But this property has been replaced with the WIA_IPS_MAX_VERTICAL_SIZE property, and you should consider it to be optional.
    * @return {Number} Gets the Vertical Sheet Feed Size value.
    */
    this.VerticalSheetFeedSize = 0;
    /**
    * ImgScan.DeviceSettings Sheet Feeder Registration Property
    * @readonly
    * @type {ImgScan.WIAHorizontalRegistration}
    * @property {ImgScan.WIAHorizontalRegistration} SheetFeederRegistration
    * [READ ONLY] The SheetFeederRegistration property contains the registration, or alignment and edge detection, for documents that are placed on the flatbed of a scanner. The WIA mini driver creates and maintains this property.
    * The SheetFeederRegistration property indicates how a document is horizontally positioned on the scanning head of a hand held or sheet-fed scanner. The scanner uses the property to predict where a user places a document on the scanning head.
    * For scanners that support more than one scanning head, the SheetFeederRegistration property is relative to the topmost scanning head. This property is required for sheet-fed, scroll-fed, and hand held scanners.
    * Versions: For Windows Vista and later operating systems, use the WIA_IPS_SHEET_FEEDER_REGISTRATION property instead.
    * @return {ImgScan.WIAHorizontalRegistration} Gets the Sheet Feeder Registration value.
    */
    this.SheetFeederRegistration = 0;
    /**
    * ImgScan.DeviceSettings Horizontal Bed Registration Property
    * @readonly
    * @type {ImgScan.WIAHorizontalRegistration}
    * @property {ImgScan.WIAHorizontalRegistration} HorizontalBedRegistration
    * [READ ONLY] The HorizontalBedRegistration property contains the registration, or horizontal alignment, for documents that are placed on the flatbed of a scanner. The WIA mini driver creates and maintains this property.
    * Versions: Obsolete in Windows Vista and later operating systems and should no longer be used. However, this property is still defined in Windows Vista for compatibility with applications and devices designed for Windows Server 2003, Windows XP, and previous versions of Windows.
    * @return {ImgScan.WIAHorizontalRegistration} Gets the Horizontal Bed Registration value.
    */
    this.HorizontalBedRegistration = 0;
    /**
    * ImgScan.DeviceSettings Vertical Bed Registration Property
    * @readonly
    * @type {ImgScan.WIAVerticalRegistration}
    * @property {ImgScan.WIAVerticalRegistration} VerticalBedRegistration
    * [READ ONLY] The VerticalBedRegistration property contains the registration, or vertical alignment and edge detection, for documents that are placed on the flatbed of a scanner. The WIA mini driver creates and maintains this property.
    * Versions: Obsolete in Windows Vista and later operating systems and should no longer be used. However, this property is still defined in Windows Vista for compatibility with applications and devices designed for Windows Server 2003, Windows XP, and previous versions of Windows.
    * @return {ImgScan.WIAVerticalRegistration} Gets the Vertical Bed Registration value.
    */
    this.VerticalBedRegistration = 0;
    /**
    * ImgScan.DeviceSettings Platen Color Property
    * @readonly
    * @type {Number}
    * @property {Number} PlatenColor
    * [READ ONLY] The PlatenColor property contains the current platen color.
    * A mini driver should report the PlatenColor  as a vector of four BYTE values in the form of an RGBQUAD structure (which is described in the Microsoft Windows SDK documentation). The WIA mini driver creates and maintains this property.
    * An application reads PlatenColor to get the scanner's platen color. This color can help the application post-process the final image.
    * @return {Number} Gets the Platen Color value.
    */
    this.PlatenColor = 0;
    /**
    * ImgScan.DeviceSettings Filter Select Property
    * @readonly
    * @type {Number}
    * @property {Number} FilterSelect
    * [READ ONLY] The FilterSelect property is reserved by Microsoft for future use and is not implemented at this time.
    * @return {Number} Gets the Filter Select value.
    */
    this.FilterSelect = 0;
    /**
    * ImgScan.DeviceSettings Dither Select Property
    * @readonly
    * @type {Number}
    * @property {Number} DitherSelect
    * [READ ONLY] The DitherSelect property is reserved by Microsoft for future use and is not implemented at this time.
    * @return {Number} Gets the Dither Select value.
    */
    this.DitherSelect = 0;
    /**
    * ImgScan.DeviceSettings Dither Pattern Data Property
    * @readonly
    * @type {Number}
    * @property {Number} DitherPatternData
    * [READ ONLY] The DitherPatternData property is reserved by Microsoft for future use and is not implemented at this time.
    * @return {Number} Gets the Dither Pattern Data value.
    */
    this.DitherPatternData = 0;
    /**
    * ImgScan.DeviceSettings Max Scan Time Property
    * @readonly
    * @type {Number}
    * @property {Number} MaxScanTime
    * [READ ONLY] The MaxScanTime property contains the maximum time to scan a single page with the current property settings, in milliseconds.
    * An application reads the MaxScanTime property to estimate how much the time it will take to scan a page. This estimate is helpful when you are determining the conditions of a device that has stopped responding. The WIA mini driver creates and maintains this property.
    * @return {Number} Gets the Max Scan Time value.
    */
    this.MaxScanTime = 0;
    /**
    * ImgScan.DeviceSettings Show Preview Control Property
    * @readonly
    * @type {ImgScan.WIAShowPreviewControl}
    * @property {ImgScan.WIAShowPreviewControl} ShowPreviewControl
    * [READ ONLY] The ShowPreviewControl property indicates whether an item needs a preview control displayed to the user. The WIA mini driver creates and maintains this property.
    * The ShowPreviewControl property helps control devices that cannot preview. For example, some feeder-driven devices cannot reload the paper for a preview scan.
    * Versions: Available with Microsoft Windows XP. ForWindows Vista and later, use the WIA_IPS_SHOW_PREVIEW_CONTROL property.
    * @return {ImgScan.WIAShowPreviewControl} Gets the Show Preview Control value.
    */
    this.ShowPreviewControl = 0;
    /**
    * ImgScan.DeviceSettings Min Horizontal Sheet Feed Size Property
    * @readonly
    * @type {Number}
    * @property {Number} MinHorizontalSheetFeedSize
    * [READ ONLY] The MinHorizontalSheetFeedSize property contains the physical horizontal dimensions of the smallest page that a scanner's document feeder can scan, in thousandths of an inch (.001). The WIA mini driver creates and maintains this property.
    * Versions: Beginning with Windows Vista, the MinHorizontalSheetFeedSize property is still available at the root level of the WIA driver, but it has been replaced by the WIA_IPS_MIN_HORIZONTAL_SIZE property, so you should consider it optional.
    * @return {Number} Gets the MinHorizontal Sheet Feed Size value.
    */
    this.MinHorizontalSheetFeedSize = 0;
    /**
    * ImgScan.DeviceSettings Min Vertical Sheet Feed Size Property
    * @readonly
    * @type {Number}
    * @property {Number} MinVerticalSheetFeedSize
    * [READ ONLY] The MinVerticalSheetFeedSize property contains the physical vertical dimensions of the smallest page that a scanner's document feeder can scan, in thousandths of an inch (.001). The WIA mini driver creates and maintains this property.
    * Versions: Beginning with Windows Vista, the WIAMinVerticalSheetFeedSize property is still available at the root level of the WIA driver, but it has been replaced by the WIA_IPS_MIN_VERTICAL_SIZE property, so you should consider it optional.
    * @return {Number} Gets the Min Vertical Sheet Feed Size value.
    */
    this.MinVerticalSheetFeedSize = 0;
    /**
    * ImgScan.DeviceSettings User Name Property
    * @readonly
    * @type {String}
    * @property {String} UserName
    * [READ ONLY] The UserName property on the WIA driver root item allows drivers to get the domain name or the machine name and user name of the user who is accessing the WIA device at a given point in time. The WIA service creates and maintains this property.
    * Versions: Available on Windows Vista and later operating systems.
    * @return {String} Gets the User Name value.
    */
    this.UserName = "";
    /**
    * ImgScan.DeviceSettings Service ID Property
    * @readonly
    * @type {String}
    * @property {String} ServiceID
    * [READ ONLY] The ServiceID property contains the service ID of a Web services scanner device. The WIA mini driver creates and maintains this property.
    * VT_BSTR	Read-only
    * The WIA mini driver initializes this property at run time by reading the PKEY_PNPX_ServiceId device property from the Function Instance object.
    * @return {String} Gets the Service ID value.
    */
    this.ServiceID = "";
    /**
    * ImgScan.DeviceSettings Scanner Device ID Property
    * @readonly
    * @type {String}
    * @property {String} ScannerDeviceID
    * [READ ONLY] The DeviceID property contains a unique Function Instance identifier for a Web services scanner device. This identifier represents the Web service on the scanner device with which the WIA mini driver is communicating. No assumptions about the form of this identifier should be made. The WIA mini driver creates and maintains this property.WIA applications can use the value of DeviceID to find, using the Function Discovery API, the Function Instance object that represents the Web services scanner device used in the current WIA session.
    * The WIA mini driver initializes this property at run time by reading the PKEY_PNPX_ID device property from the Function Instance object.
    * @return {String} Gets the Scanner Device ID value.
    */
    this.ScannerDeviceID = "";
    /**
    * ImgScan.DeviceSettings Global Identity Property
    * @readonly
    * @type {String}
    * @property {String} GlobalIdentity
    * [READ ONLY] The GlobalIdentity property contains the SOAP address of a Web services scanner device. The WIA mini driver creates and maintains this property.
    * The WIA mini driver initializes this property at run time by reading the PKEY_PNPX_GlobalIdentity device property from the Function Instance object.
    * Both PKEY_PNPX_GlobalIdentity and PKEY_PNPX_ID contain a unique ID of the UPnP Device. The difference is that PKEY_PNPX_GlobalIdentity always contains the UUID of the root device for all Function Instances, while PKEY_PNPX_ID contains the UUID of the Device/Sub-Device that the Function Instance represents.
    * @return {String} Gets the Global Identity value.
    */
    this.GlobalIdentity = "";
    /**
    * ImgScan.DeviceSettings Document Handling Capabilities Property
    * @readonly
    * @type {ImgScan.WIADocumentHandlingSelect[]}
    * @property {ImgScan.WIADocumentHandlingSelect[]} DocumentHandlingCapabilities
    * [READ ONLY] Document Handling Capabilities
    * The DocumentHandlingCapabilities property contains the capabilities of a scanner.
    * @return {ImgScan.WIADocumentHandlingSelect[]} Gets the Document Handling Capabilities value.
    */
    this.DocumentHandlingCapabilities = [];
    /**
    * ImgScan.DeviceSettings Horizontal Resolutions Property
    * @readonly
    * @type {Float[]}
    * @property {Float[]} HorizontalResolutions
    * [READ ONLY] Gets or sets the available horizontal resolutions.
    * @return {Float[]} Gets the Horizontal Resolutions value.
    */
    this.HorizontalResolutions = [];
    /**
    * ImgScan.DeviceSettings Vertical Resolutions Property
    * @readonly
    * @type {Float[]}
    * @property {Float[]} VerticalResolutions
    * [READ ONLY] Gets or sets the available vertical resolutions.
    * @return {Float[]} Gets the Vertical Resolutions value.
    */
    this.VerticalResolutions = [];
    /**
    * ImgScan.DeviceSettings Endorser Characters Property
    * @readonly
    * @type {Number}
    * @property {Number} EndorserCharacters
    * [READ ONLY] The EndorserCharacters property contains all of the valid characters that an application can use to create valid endorser strings.
    * An endorser is a printer that is installed on a scanner that imprints a text message on every page that is scanned. The WIA mini driver should validate the setting of the WIA_DPS_ENDORSER_STRING property against the valid character set in the EndorserCharacters property. The mini driver creates and maintains this property.
    * @return {Number} Gets the Endorser Characters value.
    */
    this.EndorserCharacters = 0;
    /**
    * ImgScan.DeviceSettings Document Handling Select Property
    * @type {ImgScan.WIADocumentHandlingSelect}
    * @property {ImgScan.WIADocumentHandlingSelect} DocumentHandlingSelect
    * The DocumentHandlingSelect property contains the current scanner acquisition source and mode.
    * An application reads the DocumentHandlingSelect property to determine the current acquisition source of a scanner, or an application write this property to set the source and mode of the scanner. In addition, applications use this property to enable and disable duplexer functionality. The WIA mini driver creates and maintains this property.
    * The values DUPLEX and FRONT_ONLY are mutually exclusive set one or the other, but not both.
    * Versions: Available for Microsoft Windows XP. For Windows Vista and later, use the WIA_IPS_DOCUMENT_HANDLING_SELECT property.
    * @param {ImgScan.WIADocumentHandlingSelect} value Sets the Document Handling Select value.
    * @return {ImgScan.WIADocumentHandlingSelect} Gets the Document Handling Select value.
    */
    this.DocumentHandlingSelect = 1;
    /**
    * ImgScan.DeviceSettings Device Type Property
    * @readonly
    * @type {ImgScan.WIAWiaDeviceType}
    * @property {ImgScan.WIAWiaDeviceType} DeviceType
    * [READ ONLY] The DeviceType property contains a device type and device subtype. The WIA service creates and maintains this property
    * The device type and subtype are obtained from the driver's INF file of the device file. An application reads the DeviceType property to determine whether it is using a scanner, camera, or video device.
    * For more information about INF files, see INF Files for WIA Devices. The StiDeviceTypeXxx constants are defined in Sti.h.
    * @return {ImgScan.WIAWiaDeviceType} Gets the Device Type value.
    */
    this.DeviceType = 1;
    /**
    * ImgScan.DeviceSettings Device Time Property
    * @type {Number}
    * @property {Number} DeviceTime
    * The DeviceTime property contains the current clock time that is stored on a device. The mini driver creates and maintains this property.
    * When the DeviceTime property is read, the mini driver should check the device's current clock time and should always return the current time. This property is supported only by devices that have an internal clock. If the device clock can be set, this property is read/write; otherwise, it is read-only. WIA devices report time in a SYSTEMTIME structure (which is described in the Microsoft Windows SDK documentation).
    * @param {Number} value Sets the Device Time value.
    * @return {Number} Gets the Device Time value.
    */
    this.DeviceTime = 0;
    /**
    * ImgScan.DeviceSettings Pad Color Property
    * @type {Number}
    * @property {Number} PadColor
    * The PadColor property contains the current pad color that is used when the WIA mini driver pads unaligned data. The WIA mini driver creates and maintains this property.
    * The PadColor property should be reported as a vector of four BYTE values in the form of an RGBQUAD structure (which is described in the Microsoft Windows SDK documentation).
    * An application reads PadColor to get the padding color that is used.
    * @param {Number} value Sets the Pad Color value.
    * @return {Number} Gets the Pad Color value.
    */
    this.PadColor = 0;
    /**
    * ImgScan.DeviceSettings Scan Ahead Pages Property
    * @type {Number}
    * @property {Number} ScanAheadPages
    * The ScanAheadPages property contains a value that indicates whether a scanner will cache pages in a scanner buffer before sending them to an application.
    * If the ScanAheadPages property is zero, scan ahead is disabled, and the scanner will not scan ahead any pages.
    * If the scanner performs data transfers on the buffered scan-ahead item, the scanner will retrieve the buffered pages. WIA properties cannot be changed during a scan-ahead operation. ScanAheadPages is optional.
    * @param {Number} value Sets the Scan Ahead Pages value.
    * @return {Number} Gets the Scan Ahead Pages value.
    */
    this.ScanAheadPages = 0;
    /**
    * ImgScan.DeviceSettings Abort When No Paper Detected Property
    * @type {Boolean}
    * @property {Boolean} Values
    * Gets or set the current abort when no paper is detected.
    * @param {Boolean}   value Sets the AbortWhenNoPaperDetected value.
    * @return {Boolean} Gets the AbortWhenNoPaperDetected value.
    */
    this.AbortWhenNoPaperDetected = false;
    /**
    * ImgScan.DeviceSettings Show Progress Indicator Property
    * @type {Boolean}
    * @property {Boolean} Values
    * Gets or set the current show progress indicator value.
    * @param {Boolean}   value Sets the ShowProgressIndicator value.
    * @return {Boolean} Gets the ShowProgressIndicator value.
    */
    this.ShowProgressIndicator = false;
    /**
    * ImgScan.DeviceSettings Endorser String Property
    * @type {String}
    * @property {String} Values
    * The EndorserString property contains a string that is to be endorsed (that is, printed) on each page that the mini driver scans.
    * An application sets the EndorserString property by using the valid character set that is reported in the WIA_DPS_ENDORSER_CHARACTERS property. The WIA mini driver should endorse documents only if a string is set in EndorserString. An empty string means that the endorser functionality is disabled.
    * Because the driver must interpret the endorser string, your driver can use special characters in EndorserString. However, only your applications will understand these characters.
    * A driver that supports the EndorserString property must support the following list of tokens:
    * $DATE$	The date in the form YYYY/MM/DD.
    * $DAY$	The day, in the form DD.
    * $MONTH$	The month of the year, in the form MM.
    * $PAGE_COUNT$	The number of pages that are transferred.
    * $TIME$	The time of day, in the form HH:MM:SS.
    * $YEAR$	The year, in the form YYYY.
    * @param {String} value Sets the EndorserString value.
    * @return {String} Gets the EndorserString value.
    */
    this.EndorserString = "";
};

/*!
 * The Image Components WIA Image Settings class.
 * Creates a new WIA Image Settings instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgScan.ImageSettings = function () {

    /**
    * ImgScan.ImageSettings Item Name Property
    * @readonly
    * @type {String}
    * @property {String} ItemName
    * [READ ONLY] The ItemName property contains a WIA item name.
    * The item name is the same as the item name that is specified in a call to the wiasCreateDrvItem service utility function.
    * An application reads the ItemName property to determine which item it is currently using. Each item must have a unique name. The WIA service creates and maintains ItemName.
    * @return {String} Gets the Item Name value.
    */
    this.ItemName = "";
    /**
    * ImgScan.ImageSettings Full Item Name Property
    * @readonly
    * @type {String}
    * @property {String} FullItemName
    * [READ ONLY] The FullItemName property contains the full item name (the item name with path information).
    * The full item name is the same as the bstrFullItemName parameter of the wiasCreateDrvItem service utility function. An application reads the FullItemName property to determine which item it is currently using and where that item is located in the WIA item tree. Each item should have a unique name. Applications commonly use the full item name to search for items in the WIA item tree. The WIA service creates and maintains FullItemName.
    * An application reads FullItemName to determine the format of the image that it is about to receive. An application writes this property to set the format. FullItemName depends on the WIA_IPA_TYMED property. The WIA mini driver creates and maintains FullItemName.
    * @return {String} Gets the Full Item Name value.
    */
    this.FullItemName = "";
    /**
    * ImgScan.ImageSettings Item Time Property
    * @readonly
    * @type {Number}
    * @property {Number} ItemTime
    * The ItemTime property contains the time that an image was originally captured.
    * @return {Number} Gets the Item Time value.
    */
    this.ItemTime = 0;
    /**
    * ImgScan.ImageSettings Item Flags Property
    * @readonly
    * @type {ImgScan.WIAWiaItemFlag}
    * @property {ImgScan.WIAWiaItemFlag} ItemFlags
    * [READ ONLY] The ItemFlags property contains the descriptive flags for a WIA item.
    * The WIA item flags are the same as those in the lObjectFlags parameter of the wiasCreateDrvItem service utility function. The WIA service creates and maintains the ItemFlags property.
    * An application reads ItemFlags to determine a WIA item's descriptive flag values.
    * @return {ImgScan.WIAWiaItemFlag} Gets the Item Flags value.
    */
    this.ItemFlags = 0;
    /**
    * ImgScan.ImageSettings Preferred Format Property
    * @readonly
    * @type {String}
    * @property {String} PreferredFormat
    * [READ ONLY] The PreferredFormat property contains the preferred format for images that the WIA mini driver transfers. The mini driver creates and maintains this property.
    * @return {String} Gets the Preferred Format value.
    */
    this.PreferredFormat = "";
    /**
    * ImgScan.ImageSettings Channels Per Pixel Property
    * @readonly
    * @type {Number}
    * @property {Number} ChannelsPerPixel
    * [READ ONLY] The ChannelsPerPixel property contains the number of channels per pixel for an image. The WIA mini driver creates and maintains this property.
    * @return {Number} Gets the Channels Per Pixel value.
    */
    this.ChannelsPerPixel = 0;
    /**
    * ImgScan.ImageSettings Bits Per Channel Property
    * @readonly
    * @type {Number}
    * @property {Number} BitsPerChannel
    * [READ ONLY] The BitsPerChannel property contains the number of bits per channel for the image. The WIA mini driver creates and maintains this property.
    * The BitsPerChannel property is similar to the WIA_IPA_RAW_BITS_PER_CHANNEL property (which is used for the raw formats).
    * @return {Number} Gets the Bits Per Channel value.
    */
    this.BitsPerChannel = 0;
    /**
    * ImgScan.ImageSettings Pixels Per Line Property
    * @readonly
    * @type {Number}
    * @property {Number} PixelsPerLine
    * [READ ONLY] The PixelsPerLine property contains the number of pixels in each line of an image (that is, the width of the image, in pixels). The WIA mini driver creates and maintains this property.
    * The PixelsPerLine property is optional for Windows Vista drivers for all transfer-enabled items. If PixelsPerLine, WIA_IPA_BYTES_PER_LINE, and WIA_IPA_NUMBER_OF_LINES are implemented, applications written for Windows Server 2003, Windows XP, and previous Windows versions can estimate the number of pixels per line, the number of bytes that are required for each scan line, and the total number of scan lines in the image. These values are not accurate because the image processing filter might modify the actual values, which PixelsPerLine, WIA_IPA_BYTES_PER_LINE, and WIA_IPA_NUMBER_OF_LINES represent.
    * If Windows Vista driver does not supply these properties, the compatibility layer in the WIA service will add these properties. When the WIA service adds these properties, they will be updated by using the WIA_IPA_DEPTH, WIA_IPS_XEXTENT, and WIA_IPS_YEXTENT properties.
    * Windows Vista applications should always parse the image header data to get information about the image that is more accurate than the information that is available from the preceding properties.
    * Versions: Optional for Windows Vista drivers for all transfer-enabled items.
    * @return {Number} Gets the Pixels Per Line value.
    */
    this.PixelsPerLine = 0;
    /**
    * ImgScan.ImageSettings Bytes Per Line Property
    * @readonly
    * @type {Number}
    * @property {Number} BytesPerLine
    * [READ ONLY] The BytesPerLine property contains the number of bytes in one scan line of an image. The WIA mini driver creates and maintains this property.
    * The BytesPerLine property is optional for Windows Vista drivers for all transfer-enabled items. If this property, together with the WIA_IPA_NUMBER_OF_LINES and WIA_IPA_PIXELS_PER_LINE properties are implemented, applications designed for Windows Server 2003, Windows XP, and previous versions of Windows can estimate the number of pixels for each line, the number of bytes that are required for each scan line, and the total number of scan lines in the image. These values are not accurate because the image processing filter might modify the actual values that these properties represent.
    * If the Windows Vista driver does not supply these properties, the compatibility layer in a WIA service will add these properties. When the WIA service adds these properties, they will be updated by using the WIA_IPA_DEPTH, WIA_IPS_XEXTENT, and WIA_IPS_YEXTENT properties.
    * Windows Vista applications should always parse the image header data to get more accurate information on the image then is available from these properties.
    * Versions: Optional for Windows Vista drivers for all transfer-enabled items.
    * @return {Number} Gets the Bytes Per Line value.
    */
    this.BytesPerLine = 0;
    /**
    * ImgScan.ImageSettings Number Of Lines Property
    * @readonly
    * @type {Number}
    * @property {Number} NumberOfLines
    * [READ ONLY] The NumberOfLines property contains the number of lines that are contained in an image (that is, the vertical height of the image, in pixels). The WIA mini driver creates and maintains this property.
    * The NumberOfLines property is optional for Windows Vista drivers for all transfer-enabled items. If NumberOfLines, WIA_IPA_BYTES_PER_LINE, and WIA_IPA_PIXELS_PER_LINE are implemented,  applications written for Windows Server 2003, Windows XP, and previous Windows versions can estimate the number of pixels per line, the number of bytes that are required for each scan line, and the total number of scan lines in the image. These values are not accurate because the image processing filter might modify the actual values, which NumberOfLines, WIA_IPA_BYTES_PER_LINE, and WIA_IPA_PIXELS_PER_LINE represent.
    * If a Windows Vista driver does not supply these properties, the compatibility layer in the WIA service will add these properties. When the WIA service adds these properties, they will be updated by using the WIA_IPA_DEPTH, WIA_IPS_XEXTENT, and WIA_IPS_YEXTENT properties.
    * Windows Vista applications should always parse the image header data to get information about the image that is more accurate than the information that is available from the preceding properties.
    * Versions: Optional for Windows Vista drivers for all transfer-enabled items.* [READ ONLY] The DeviceID property contains the device identifier (ID) string for a WIA mini driver. The WIA service creates and maintains this property.
    * @return {Number} Gets the Number Of Lines value.
    */
    this.NumberOfLines = 0;
    /**
    * ImgScan.ImageSettings Gamma Curves Property
    * @readonly
    * @type {Number}
    * @property {Number} GammaCurves
    * [READ ONLY] The GammaCurves property is reserved by Microsoft for future use and is not implemented at this time.
    * @return {Number} Gets the Gamma Curves value.
    */
    this.GammaCurves = 0;
    /**
    * ImgScan.ImageSettings Item Size Property
    * @readonly
    * @type {Number}
    * @property {Number} ItemSize
    * [READ ONLY] The ItemSize property contains the current size, in bytes, of the data that is associated with a WIA item. The WIA mini driver creates and maintains this property.
    * The value that the ItemSize property contains is the total size of the data that is being transferred. If this value is zero, the WIA mini driver has no information about the exact size of the data. (This situation is common for compressed data.)
    * An application reads ItemSize to determine the size of the data before it is transferred. The WIA service reads this property to assist in allocating memory for data transfers. For more information about data transfers, see Transferring Data to a WIA Application.
    * If ItemSize is set to zero and TYMED is configured for a file transfer, the WIA service does not allocate any memory for the WIA mini driver.
    * Note: In Windows Vista and later versions of the operating system only set the ItemSize property to 0 for the ADF item when automatic document size detection is enabled.
    * @return {Number} Gets the Item Size value.
    */
    this.ItemSize = 0;
    /**
    * ImgScan.ImageSettings Color Profile Property
    * @readonly
    * @type {Number}
    * @property {Number} ColorProfile
    * [READ ONLY] The ColorProfile property is reserved by Microsoft for future use and is not implemented at this time.
    * @return {Number} Gets the Color Profile value.
    */
    this.ColorProfile = 0;
    /**
    * ImgScan.ImageSettings Min Buffer Size Property
    * @readonly
    * @type {Number}
    * @property {Number} MinBufferSize
    * [READ ONLY] The MinBufferSize property specifies the minimum buffer size that is used in data transfers.
    * If a data transfer is performed through a callback mechanism, the MinBufferSize property value can be as small as 64 KB. However, if the transfer is to file, the property value is the number of bytes that are needed to transfer one page of data at a time. The WIA mini driver creates and maintains this WIA property.
    * MinBufferSize is identical to the WIA_IPA_BUFFER_SIZE property.
    * An application can read MinBufferSize to determine the driver-specified buffer size for data transfers. The WIA service also reads this property to allocate memory for the mini driver during the data transfer.
    * Note: The value that the MinBufferSize property contains is the minimum amount of data that an application can request at any given time. The larger the buffer size, the larger the requests to the device will be. This larger buffer size can make the device appear slow and unresponsive, can slow the overall computer performance, and can consume excessive resources. Buffer sizes that are too small can slow performance of the data transfer by requiring many smaller requests. Choose a reasonable buffer size by considering the typical size of a data request to your device, the number of requests, and the size of those requests.
    * Versions: Optional for Windows Vista drivers for all transfer-enabled items. If this property is implemented, applications written for Windows Server 2003, Windows XP, and previous Windows versions can estimate the transfer buffer size, and, therefore, the transfer rate will be optimal.
    * @return {Number} Gets the Min Buffer Size value.
    */
    this.MinBufferSize = 0;
    /**
    * ImgScan.ImageSettings Buffer Size Property
    * @readonly
    * @type {Number}
    * @property {Number} BufferSize
    * [READ ONLY] The BufferSize property contains the size of the buffer, in bytes, that is used during a data transfer. The WIA mini driver creates and maintains this property.
    * VT_I4	Read-only
    * The BufferSize property is identical to the WIA_IPA_MIN_BUFFER_SIZE property.
    * An application can read BufferSize to determine the driver-specified buffer size for data transfers. The WIA service also reads this property to allocate memory for the mini driver during the data transfer.
    * Note: The value that the BufferSize property contains is the minimum amount of data that an application can request at any given time. The larger the buffer size, the larger the requests to the device will be. This larger buffer size can make the device seem slow and unresponsive, can slow the overall computer performance, and can consume excessive resources. Buffer sizes that are too small can slow performance of the data transfer by requiring many smaller requests. Choose a reasonable buffer size by considering the typical size of a data request to your device, the number of requests, and the size of those requests.
    * Versions: Optional for Windows Vista drivers for all transfer-enabled items. If you implement this property, applications that are designed for Windows Server 2003, Windows XP, and previous versions of Windows can estimate the transfer buffer size and, therefore, the transfer rate will be optimal.
    * @return {Number} Gets the Buffer Size value.
    */
    this.BufferSize = 0;
    /**
    * ImgScan.ImageSettings Region Type Property
    * @readonly
    * @type {Number}
    * @property {Number} RegionType
    * [READ ONLY] The RegionType property is reserved by Microsoft for future use and is not implemented at this time.
    * @return {Number} Gets the RegionType value.
    */
    this.RegionType = 0;
    /**
    * ImgScan.ImageSettings ICM Profile Name Property
    * @readonly
    * @type {String}
    * @property {String} IcmProfileName
    * [READ ONLY] The IcmProfileName property contains the image color management (ICM) profile name that is needed to properly decode an image.
    * An application reads the IcmProfileName property to determine the ICM profile to use when processing the image. The WIA service creates and maintains this property based on the ICMProfiles entry in the driver installation file.
    * @return {String} Gets the ICM Profile Name value.
    */
    this.IcmProfileName = "";
    /**
    * ImgScan.ImageSettings APP Color Mapping Property
    * @readonly
    * @type {Number}
    * @property {Number} AppColorMapping
    * [READ ONLY] The AppColorMapping property is reserved by Microsoft for future use and is not implemented at this time.
    * @return {Number} Gets the APP Color Mapping value.
    */
    this.AppColorMapping = 0;
    /**
    * ImgScan.ImageSettings Stream Compatibility ID Property
    * @readonly
    * @type {String}
    * @property {String} StreamCompatibilityID
    * [READ ONLY] The PropStreamCompatID property specifies a class identifier (CLSID) that represents a set of device property values.
    * If a device driver implements the PropStreamCompatID property, applications use this property to determine whether the device supports a set of values.
    * @return {String} Gets the Stream Compatibility ID value.
    */
    this.StreamCompatibilityID = "";
    /**
    * ImgScan.ImageSettings Filename Extension Property
    * @readonly
    * @type {String}
    * @property {String} FilenameExtension
    * [READ ONLY] The FilenameExtension property contains the file name extension for a particular file format. The WIA mini driver creates and maintains this property.
    * The mini driver updates the FilenameExtension property to reflect the current value of the WIA_IPA_FORMAT property.
    * For example, if WIA_IPA_FORMAT is WiaImgFmt_JPEG, FilenameExtension should be "jpg". If WIA_IPA_FORMAT is WiaImgFmt_BMP, FilenameExtension should be "bmp". Note that the file name extension does not include the period (".").
    * The FilenameExtension property is recommended for drivers that support standard formats and is required for drivers that implement custom-defined formats. FilenameExtension informs the application of the correct file name extension to use during the transfer of privately formatted files. For example, if the A. Datum Corporation created a WIA driver that transferred a file in a new format, the company could specify an extension of "adc". This extension enables applications to transfer data in that format to a file and to create a file name such as Myfile.adc, which is useful to others who understand the new extension.
    * @return {String} Gets the File name Extension value.
    */
    this.FilenameExtension = "";
    /**
    * ImgScan.ImageSettings Suppress Property Page Property
    * @readonly
    * @type {ImgScan.WIASuppressPropertyPage}
    * @property {ImgScan.WIASuppressPropertyPage} SuppressPropertyPage
    * [READ ONLY] The SuppressPropertyPage property specifies whether to suppress the general property pages for items on a device.
    * Versions: Available on Microsoft Windows XP and later operating systems.
    * @return {ImgScan.WIASuppressPropertyPage} Gets the Suppress Property Page value.
    */
    this.SuppressPropertyPage = 1;
    /**
    * ImgScan.ImageSettings Item Category Property
    * @readonly
    * @type {String}
    * @property {String} ItemCategory
    * [READ ONLY] The ItemCategory property contains grouped categories for WIA items.
    * The WIA service creates and maintains this property.
    * Versions: Available in Windows Vista and later versions of the operating system.
    * @return {String} Gets the Item Category value.
    */
    this.ItemCategory = "";
    /**
    * ImgScan.ImageSettings Upload Item Size Property
    * @readonly
    * @type {Number}
    * @property {Number} UploadItemSize
    * [READ ONLY] The UploadItemSize property is used by applications to specify the number of bytes to upload for an item. The application creates and maintains this property.
    * Versions: Available on Windows Vista and later operating systems.
    * @return {Number} Gets the Upload Item Size value.
    */
    this.UploadItemSize = 0;
    /**
    * ImgScan.ImageSettings Items Stored Property
    * @readonly
    * @type {Number}
    * @property {Number} ItemsStored
    * [READ ONLY] The ItemsStored property specifies how many items are stored in the storage (WIA_CATEGORY_FOLDER) item. The WIA mini driver creates and maintains this WIA property.
    * Versions: Available in Windows Vista and later versions of the operating system.
    * @return {Number} Gets the Items Stored value.
    */
    this.ItemsStored = 0;
    /**
    * ImgScan.ImageSettings Raw Bits Per Channel Property
    * @readonly
    * @type {Number}
    * @property {Number} RawBitsPerChannel
    * [READ ONLY] The RawBitsPerChannel property contains the number of bits in each color channel.
    * The RawBitsPerChannel property should be reported as a vector that contains as many byte values as there are channels, where the first byte corresponds to the number of bits in the first channel, the second byte to the number of bits in the second channel, and so on. The vector must contain as many entries as the WIA_IPA_CHANNELS_PER_PIXEL property reports there are channels. The driver sets WIA_IPA_CHANNELS PER_PIXEL when the application sets WIA_IPA_FORMAT to WiaImgFmt_RAW.
    * RawBitsPerChannel is similar to the WIA_IPA_BITS_PER_CHANNEL property (which is used for formats other than RAW).
    * @return {Number} Gets the Raw Bits Per Channel value.
    */
    this.RawBitsPerChannel = 0;
    /**
    * ImgScan.ImageSettings Current Intents Property
    * @readonly
    * @type {ImgScan.WIACurrentIntent[]}
    * @property {ImgScan.WIACurrentIntent[]} CurrentIntents
    * [READ ONLY] Gets or sets the available current intents.
    * @return {ImgScan.WIACurrentIntent[]} Gets the Current Intents value.
    */
    this.CurrentIntents = [];
    /**
    * ImgScan.ImageSettings Invert Property
    * @readonly
    * @type {Number}
    * @property {Number} Invert
    * [READ ONLY] The Invert property is reserved by Microsoft for future use and is not implemented at this time.
    * The WIA_IPS_FILM_SCAN_MODE property is not related to WIA_IPS_ORIENTATION. WIA_IPS_ORIENTATION describes the orientation of the document to be scanned in relationship to the direction of the scan; in contrast, WIA_IPS_FILM_SCAN_MODE describes an operation that is to be applied to an image after it is scanned.
    * Versions: Available in Windows Vista and later operating systems.
    * @return {Number} Gets the Invert value.
    */
    this.Invert = 0;
    /**
    * ImgScan.ImageSettings Mirror Property
    * @readonly
    * @type {Number}
    * @property {Number} Mirror
    * [READ ONLY] The Mirror property is reserved by Microsoft for future use and is not implemented at this time.
    * The Mirror property is not related to the WIA_IPS_ORIENTATION property. WIA_IPS_ORIENTATION specifies the orientation of the document to be scanned in relationship to the direction of the scan; in contrast, Mirror specifies an operation that is to be applied to an image after it is scanned.
    * @return {Number} Gets the Mirror value.
    */
    this.Mirror = 1;
    /**
    * ImgScan.ImageSettings Warm Up Time Property
    * @readonly
    * @type {Number}
    * @property {Number} WarmUpTime
    * [READ ONLY] The WarmUpTime property contains the maximum warm-up time, in milliseconds, that a device needs before starting the scanning operation. The WIA mini driver creates and maintains this property.
    * An application can read the WarmUpTime property to determine the maximum warm-up time for a device. The application can then present a "waiting for the device to warm up" dialog box to let users know that a wait or pause might occur before anything happens.
    * @return {Number} Gets the Warm Up Time value.
    */
    this.WarmUpTime = 0;
    /**
    * ImgScan.ImageSettings Max Horizontal Size Property
    * @readonly
    * @type {Number}
    * @property {Number} MaxHorizontalSize
    * [READ ONLY] The MaxHorizontalSize property contains the physical horizontal dimension of a scanner's flatbed, in thousandths of an inch (.001). The WIA mini driver creates and maintains this property.
    * Versions: Available in Windows Vista and later operating systems.
    * @return {Number} Gets the Max Horizontal Size value.
    */
    this.MaxHorizontalSize = 0;
    /**
    * ImgScan.ImageSettings Max Vertical Size Property
    * @readonly
    * @type {Number}
    * @property {Number} MaxVerticalSize
    * [READ ONLY] The MaxVerticalSize property contains the physical vertical dimension of a scanner's flatbed, in thousandths of an inch (.001). The WIA mini driver creates and maintains this property.
    * Versions: Available in Windows Vista and later operating systems.
    * @return {Number} Gets the Max Vertical Size value.
    */
    this.MaxVerticalSize = 0;
    /**
    * ImgScan.ImageSettings Min Horizontal Size Property
    * @readonly
    * @type {Number}
    * @property {Number} MinHorizontalSize
    * [READ ONLY] The MinHorizontalSize property contains the physical horizontal dimensions of the smallest page that a scanner's document feeder can scan, in thousandths of an inch (.001). The WIA mini driver creates and maintains this property.
    * Versions: Available in Windows Vista and later operating systems.
    * @return {Number} Gets the Min Horizontal Size value.
    */
    this.MinHorizontalSize = 0;
    /**
    * ImgScan.ImageSettings Min Vertical Size Property
    * @readonly
    * @type {Number}
    * @property {Number} MinVerticalSize
    * [READ ONLY] The MinVerticalSize property contains the physical vertical dimensions of the smallest page that a scanner's document feeder can scan, in thousandths of an inch (.001). The WIA mini driver creates and maintains this property
    * Versions: Available in Windows Vista and later operating systems.
    * @return {Number} Gets the Min Vertical Size value.
    */
    this.MinVerticalSize = 0;
    /**
    * ImgScan.ImageSettings Sheet Feeder Registration Property
    * @readonly
    * @type {ImgScan.WIAHorizontalRegistration}
    * @property {ImgScan.WIAHorizontalRegistration} SheetFeederRegistration
    * [READ ONLY] The SheetFeederRegistration property contains the registration, or alignment and edge detection, for documents that are placed on the flatbed of a scanner. The WIA mini driver creates and maintains this property.
    * The SheetFeederRegistration property indicates how a document is horizontally positioned on the scanning head of a hand held or sheet-fed scanner. You can use SheetFeederRegistration to predict where across the scanning head a document is placed.
    * For scanners that support more than one scanning head, the SheetFeederRegistration property is relative to the topmost scanning head. This property is mandatory for sheet-fed, scroll-fed, and hand held scanners.
    * Versions: Available in Windows Vista and later operating systems. For Windows XP, use the WIA_DPS_SHEET_FEEDER_REGISTRATION property instead.
    * @return {ImgScan.WIAHorizontalRegistration} Gets the Sheet Feeder Registration value.
    */
    this.SheetFeederRegistration = 0;
    /**
    * ImgScan.ImageSettings Horizontal Optical Resolution Property
    * @readonly
    * @type {Number}
    * @property {Number} HorizontalOpticalResolution
    * [READ ONLY] The HorizontalOpticalResolution property contains the highest-supported horizontal optical resolution of a device, in dots per inch (dpi). The WIA mini driver creates and maintains this property.
    * Versions: Available in Windows Vista and later operating systems. For Windows XP, use the WIA_DPS_OPTICAL_XRES property instead.
    * @return {Number} Gets the Horizontal Optical Resolution value.
    */
    this.HorizontalOpticalResolution = 0;
    /**
    * ImgScan.ImageSettings Vertical Optical Resolution Property
    * @readonly
    * @type {Number}
    * @property {Number} VerticalOpticalResolution
    * [READ ONLY] The VerticalOpticalResolution property contains the highest-supported vertical optical resolution of a device, in dots per inch (dpi). The WIA mini driver creates and maintains this property.
    * Versions: Available in Windows Vista and later operating systems. For Windows XP, use the WIA_DPS_OPTICAL_YRES property instead.
    * @return {Number} Gets the Vertical Optical Resolution value.
    */
    this.VerticalOpticalResolution = 0;
    /**
    * ImgScan.ImageSettings Page Width Property
    * @readonly
    * @type {Number}
    * @property {Number} PageWidth
    * [READ ONLY] The PageWidth property contains the width of the current page selected, in thousandths of an inch (.001). The WIA mini driver creates and maintains this property.
    * An application reads PageWidth to determine the physical dimensions of the page that is being scanned. If the extent settings are different from known page sizes, this property reports the width of the page whose WIA_IPS_PAGE_SIZE property is set to WIA_PAGE_CUSTOM.
    * PageWidth must be in sync with the value of WIA_IPS_XEXTENT, which reports the width, in pixels, of the page to be scanned.
    * Note: The compatibility layer within the WIA service does not add support for the PageWidth property to the ADF item that is translated from a Windows XP WIA device if the property is not supported on the child item of the device. Applications should not expect an ADF item to always support PageWidth and should always check if it is supported at run time. (Typically, applications should check the support for any property to be negotiated.)
    * Versions: Available in Windows Vista and later operating systems. For Windows XP, use the WIA_DPS_PAGE_WIDTH property instead.
    * @return {Number} Gets the Page Width value.
    */
    this.PageWidth = 0;
    /**
    * ImgScan.ImageSettings Page Height Property
    * @readonly
    * @type {Number}
    * @property {Number} PageHeight
    * [READ ONLY] The PageHeight property contains the height, in thousandths of an inch (.001), of the currently selected page. The WIA mini driver creates and maintains this property.
    * An application reads PageHeight to determine the physical dimensions of the page that is being scanned. If the extent settings are different from the known page sizes, this property reports the height of the page whose WIA_IPS_PAGE_SIZE property is set to WIA_PAGE_CUSTOM.
    * PageHeight must provide a measurement in thousandths of an inch that is equivalent to the pixel value that is reported by WIA_IPS_YEXTENT, which reports the height, in pixels, of the page to be scanned.
    * Note: The compatibility layer within the WIA service does not add support for the PageHeight property to the ADF item that is translated from a Windows XP WIA device if the property is not supported on the child item of the device. Applications should not expect that an ADF item will always support PageHeight and should always check if it is supported at run time. (Applications should typically check for this support for any property that is be negotiated.)
    * Versions: Available in Windows Vista and later operating systems. For Windows XP, use the WIA_DPS_PAGE_HEIGHT property instead.
    * @return {Number} Gets the Page Height value.
    */
    this.PageHeight = 0;
    /**
    * ImgScan.ImageSettings Preview Property
    * @readonly
    * @type {ImgScan.WIAPreview}
    * @property {ImgScan.WIAPreview} Preview
    * [READ ONLY] The Preview property indicates the preview mode for a device.
    * An application sets Preview to place a device into a preview mode.
    * Versions: Available in Windows Vista and later operating systems. For Windows XP, use the WIA_DPS_PREVIEW property instead.
    * @return {ImgScan.WIAPreview} Gets the Preview value.
    */
    this.Preview = 0;
    /**
    * ImgScan.ImageSettings Show Preview Control Property
    * @readonly
    * @type {ImgScan.WIAShowPreviewControl}
    * @property {ImgScan.WIAShowPreviewControl} ShowPreviewControl
    * [READ ONLY] The ShowPreviewControl property indicates whether an item needs a preview control displayed to a user. The WIA mini driver creates and maintains this property.
    * You can use the ShowPreviewControl property to help control devices that cannot preview. For example, some feeder-driven devices cannot reload the paper for a preview scan.
    * Versions: Available in Windows Vista and later operating systems. For Windows XP, use the WIA_DPS_SHOW_PREVIEW_CONTROL property instead.
    * @return {ImgScan.WIAShowPreviewControl} Gets the Show Preview Control value.
    */
    this.ShowPreviewControl = 0;
    /**
    * ImgScan.ImageSettings Supports Child Item Creation Property
    * @readonly
    * @type {Number}
    * @property {Number} SupportsChildItemCreation
    * [READ ONLY] The SupportsChildItemCreation property indicates if a device supports the creation of child items. The WIA mini driver creates and maintains this property
    * Items that support the WIA_IPS_SEGMENTATION property and the WIA_USE_SEGMENTATION_FILTER value must also support the SupportsChildItemCreation property and have it set to TRUE.
    * Versions: Available in Windows Vista and later operating systems.
    * @return {Number} Gets the Supports Child Item Creation value.
    */
    this.SupportsChildItemCreation = 0;
    /**
    * ImgScan.ImageSettings Preview Type Property
    * @readonly
    * @type {ImgScan.WIAPreviewType}
    * @property {ImgScan.WIAPreviewType} PreviewType
    * [READ ONLY] The PreviewType property indicates if WIA_IPA_DATATYPE and WIA_IPA_DEPTH are changed, without having to request a new preview scan. The WIA mini driver creates and maintains this property.
    * Note: PreviewType should describe only the WIA_IPA_DATATYPE and WIA_IPA_DEPTH properties.
    * @return {ImgScan.WIAPreviewType} Gets the Preview Type value.
    */
    this.PreviewType = 0;


    //Writable Properties

    /**
    * ImgScan.ImageSettings Access Rights Property
    * @type {ImgScan.WIAAccessRights}
    * @property {ImgScan.WIAAccessRights} AccessRights
    * The AccessRights property contains the access rights for a WIA item.
    * Access rights control the ability of an application to delete items in the WIA item tree. The WIA mini driver creates and maintains the AccessRights property.
    * @param {WIAAccessRights} value Sets the Access Rights value.
    * @return {WIAAccessRights} Gets the Access Rights value.
    */
    this.AccessRights = 1;
    /**
    * ImgScan.ImageSettings Data Type Property
    * @type {ImgScan.WIADataType}
    * @property {ImgScan.WIADataType} DataType
    * The DataType property contains the current data type setting for a device. A WIA mini driver creates and maintains this property.
    * An application reads the DataType property to determine the data type of an image. The application writes this property to set the current data type of the image that is about to be transferred.
    * The DataType property usually contains a single value for cameras.
    * @param {ImgScan.WIADataType} value Sets the Data Type value.
    * @return {ImgScan.WIADataType} Gets the Data Type value.
    */
    this.DataType = 0;
    /**
    * ImgScan.ImageSettings Depth Property
    * @type {Number}
    * @property {Number} Depth
    * The Depth property contains the bit depth setting of an image. The WIA mini driver creates and maintains this property.
    * An application reads the Depth property to determine the bit depth setting of an image. The application might also set this value to the desired bit depth.
    * If you can set the device to only a single value, create a WIA_PROP_LIST type and place the valid value in it.
    * @param {Number} value Sets the Depth value.
    * @return {Number} Gets the Depth value.
    */
    this.Depth = 0;
    /**
    * ImgScan.ImageSettings Format Property
    * @type {ImgScan.WIAImageFormat}
    * @property {ImgScan.WIAImageFormat} Format
    * The Format property contains the current format of the image that is about to be transferred. The WIA mini driver creates and maintains this property.
    * If you can set the device to only a single value, create a WIA_PROP_LIST type, and place the valid value in it.
    * All WIA 2.0 mini drivers must set the initial value of this property to its default value, which is WiaImgFmt_BMP.
    * @param {ImgScan.WIAImageFormat} value Sets the Format value.
    * @return {ImgScan.WIAImageFormat} Gets the Format value.
    */
    this.Format = 0;
    /**
    * ImgScan.ImageSettings Compression Property
    * @type {ImgScan.WIACompression}
    * @property {ImgScan.WIACompression} Compression
    * The Compression property contains the current compression type that is used. The WIA mini driver creates and maintains this property.
    * An application reads the Compression property to determine the image compression type, or the application sets this property to configure the compression setting.
    * Note: When the file format is WiaImgFmt_XPS or WiaImgFmt_PDFA, WIA_COMPRESSION_NONE means €œnot defined€; the device cannot choose the internal compression (if any) for images that are stored in these two document formats.
    * All WIA 2.0 mini drivers must set the initial value of this property to its default value, which is WIA_COMPRESSION_NONE.
    * The access rights of the Compression property are read/write for all image acquisitions but read-only for stored image items.
    * @param {ImgScan.WIACompression}   value Sets the Compression value.
    * @return {ImgScan.WIACompression} Gets the Compression value.
    */
    this.Compression = 0;
    /**
    * ImgScan.ImageSettings Media Type Property
    * @type {ImgScan.WIAMediaType}
    * @property {ImgScan.WIAMediaType} MediaType
    * The MediaType property contains the method setting for image transfer . The WIA mini driver creates and maintains this property.
    * An application reads the MediaType property to determine the mini driver's method of data transfer.
    * All WIA 2.0 mini drivers must set the initial value of this property to its default value, which is TYMED_FILE.
    * @param {ImgScan.WIAMediaType} value Sets the Media Type value.
    * @return {ImgScan.WIAMediaType} Gets the Media Type value.
    */
    this.MediaType = 128;
    /**
    * ImgScan.ImageSettings Planar Property
    * @type {ImgScan.WIAPlanar}
    * @property {ImgScan.WIAPlanar} Planar
    * The Planar property contains image data packing options. The WIA mini driver creates and maintains this property.
    * An application reads Planar to determine the image packing options or sets the current image packing options.
    * If a device can be set to only a single value, you can implement the Planar property as WIA_PROP_NONE and read-only.
    * Versions: Obsolete in Windows Vista and later operating system.
    * @param {ImgScan.WIAPlanar} value Sets the Planar value.
    * @return {ImgScan.WIAPlanar} Gets the Planar value.
    */
    this.Planar = 0;
    /**
    * ImgScan.ImageSettings Current Intent Property
    * @type {ImgScan.WIACurrentIntent}
    * @property {ImgScan.WIACurrentIntent} CurrentIntent
    * The CurrentIntent property contains the current settings for an application's intended use of an image. The WIA mini driver creates and maintains this property.
    * A driver uses the intent settings to pre-set item properties based on an application's intended use of an image. These properties might include, for example, maximum quality and minimum size.
    * The driver chooses the bit depth, in dots per inch, and other settings that it determines are appropriate for the selected intent. The application must read the current settings to determine which properties were changed.
    * An application sets the WIA_IPS_CUR_INTENT property to auto-set the WIA properties for specific acquisition intent. Note that flags can be combined with a bitwise OR operator, but an image cannot be both grayscale and color.
    * WIA_IPS_CUR_INTENT is required for all image acquisition enabled items; it is not available for storage items or stored image items.
    * @param {ImgScan.WIACurrentIntent} value Sets the Current Intent value.
    * @return {ImgScan.WIACurrentIntent} Gets the Current Intent value.
    */
    this.CurrentIntent = 0;
    /**
    * ImgScan.ImageSettings Horizontal Resolution Property
    * @type {Number}
    * @property {Number} HorizontalResolution
    * The HorizontalResolution property contains the current horizontal resolution, in pixels per inch, for a device.
    * An application sets the HorizontalResolution property to set the horizontal resolution. The WIA mini driver creates and maintains this property.
    * If a device can be set to only a single value, create a WIA_PROP_LIST type and place the valid value in it. This situation also applies when one resolution setting depends on another resolution. (For example, the vertical resolution can depend on the horizontal resolution.)
    * HorizontalResolution is required for all image acquisition-enabled items and stored image items; it is not available for storage items.
    * @param {Number} value Sets the Horizontal Resolution value.
    * @return {Number} Gets the Horizontal Resolution value.
    */
    this.HorizontalResolution = 0;
    /**
    * ImgScan.ImageSettings Vertical Resolution Property
    * @type {Number}
    * @property {Number} VerticalResolution
    * The VerticalResolution property contains the current vertical resolution setting, in pixels per inch, for a device.
    * An application sets the VerticalResolution property to set the vertical resolution. The WIA mini driver creates and maintains this property.
    * If a device can be set to only a single value, create a WIA_PROP_LIST type and place the valid value in it. This situation also applies when one resolution setting depends on another resolution. (For example, the vertical resolution can depend on the horizontal resolution.)
    * VerticalResolution is required for all image acquisition-enabled items and stored image items; it is not available for storage items.
    * @param {Number} value Sets the Vertical Resolution value.
    * @return {Number} Gets the Vertical Resolution value.
    */
    this.VerticalResolution = 0;
    /**
    * ImgScan.ImageSettings Horizontal Start Position Property
    * @type {Number}
    * @property {Number} HorizontalStartPosition
    * The HorizontalStartPosition property contains the x-coordinate, in pixels, of the upper-left corner of a selected image. The WIA mini driver creates and maintains this property.
    * An application sets the HorizontalStartPosition property to mark the upper-left corner of a selection area.
    * HorizontalStartPosition is required for all image acquisition-enabled items and child items of these items; this property is not available for storage items or stored image items.
    * When a fixed page size is set, the driver has to set the WIA_IPS_XEXTENT, HorizontalStartPosition, WIA_IPS_YEXTENT,  and WIA_IPS_YPOS properties to match the page size dimensions and a "0" origin. For center document alignment, the driver has to set HorizontalStartPosition to ((scan area width - document width) / 2) * resolution [DPI]) and WIA_IPS_YPOS to ((scan area height - document height) / 2) * resolution [DPI]).
    * When the origin or one extent is changed, the driver has to update WIA_IPS_PAGE_SIZE to CUSTOM_SIZE and the WIA_IPS_PAGE_WIDTH and WIA_IPS_PAGE_HEIGHT properties to match the scan area extents. Orientation and rotation should not affect these properties, unless an orientation change (not a rotation change) renders the origin or one extent outside of the available document scan area.
    * A driver must also update the WIA_IPS_XEXTENT, HorizontalStartPosition, WIA_IPS_YEXTENT, and WIA_IPS_YPOS properties when the WIA_IPS_XRES and WIA_IPS_YRES properties are changed.
    * Note: Flatbed and Film child items are required to support only the WIA_IPS_XEXTENT, HorizontalStartPosition, WIA_IPS_XRES, WIA_IPS_YEXTENT, WIA_IPS_YPOS, and WIA_IPS_YRES properties. All other properties, required or optional for their parent (the base Flatbed or Film items), are only optional for these items. The only exceptions are the WIA_IPA_ITEM_Xxx properties, which are required for all items.
    * @param {Number} value Sets the Horizontal Start Position value.
    * @return {Number} Gets the Horizontal Start Position value.
    */
    this.HorizontalStartPosition = 0;
    /**
    * ImgScan.ImageSettings Vertical Start Position Property
    * @type {Number}
    * @property {Number} VerticalStartPosition
    * The VerticalStartPosition property contains the current y-coordinate, in pixels, of the upper-left corner of a selected image. The WIA mini driver creates and maintains this property.
    * An application sets the VerticalStartPosition property to mark the upper-left corner of a selection area.
    * VerticalStartPosition is required for all image acquisition-enabled items and child items of these items; this property is not available for storage items or stored image items.
    * When a fixed page size is set, the driver has to set the WIA_IPS_XEXTENT, WIA_IPS_XPOS, WIA_IPS_YEXTENT,  and VerticalStartPosition properties to match the page size dimensions and a "0" origin. For center document alignment, the driver has to set WIA_IPS_XPOS to ((scan area width - document width) / 2) * resolution [DPI]) and VerticalStartPosition to ((scan area height - document height) / 2) * resolution [DPI]).
    * When the origin or one extent is changed, the driver has to update the WIA_IPS_PAGE_SIZE property to CUSTOM_SIZE and the WIA_IPS_PAGE_WIDTH and WIA_IPS_PAGE_HEIGHT properties to match the scan area extents. Orientation and rotation should not affect these properties, unless an orientation change (not a rotation change) renders the origin or one extent outside of the available document scan area.
    * A driver must also update WIA_IPS_XEXTENT, WIA_IPS_XPOS, WIA_IPS_YEXTENT, and VerticalStartPosition properties when the WIA_IPS_XRES and WIA_IPS_YRES properties are changed.
    * Note: Flatbed and Film child items are required to support only the WIA_IPS_XEXTENT, WIA_IPS_XPOS, WIA_IPS_XRES, WIA_IPS_YEXTENT, VerticalStartPosition, and WIA_IPS_YRES properties. All other properties, required or optional for their parent (the base Flatbed or Film items), are only optional for these items. The only exceptions are the WIA_IPA_ITEM_Xxx properties, which are required for all items.
    * @param {Number} value Sets the Vertical Start Position value.
    * @return {Number} Gets the Vertical Start Position value.
    */
    this.VerticalStartPosition = 0;
    /**
    * ImgScan.ImageSettings Horizontal Extent Property
    * @type {Number}
    * @property {Number} HorizontalExtent
    * The HorizontalExtent property contains the current width, in pixels, of a selected image to acquire.
    * An application sets the HorizontalExtent property to mark the upper-left corner (that is, the width) of the selection area to acquire. HorizontalExtent must agree with the WIA_IPA_PIXELS_PER_LINE property. The mini driver creates and maintains this property.
    * HorizontalExtent is required for all image acquisition enabled items and child items of these items; this property is not available for storage items or stored image items.
    * When a fixed page size is set, the driver has to set the HorizontalExtent, WIA_IPS_XPOS, WIA_IPS_YEXTENT, and WIA_IPS_YPOS properties to match the page size dimensions and a "0" origin. For center document alignment, the driver has to set WIA_IPS_XPOS to ((scan area width - document width) / 2) * resolution [DPI]) and WIA_IPS_YPOS to ((scan area height - document height) / 2) * resolution [DPI]).
    * When the origin or one extent is changed, the driver has to update the WIA_IPS_PAGE_SIZE property to CUSTOM_SIZE and the WIA_IPS_PAGE_WIDTH and WIA_IPS_PAGE_HEIGHT properties to match the scan area extents. Orientation and rotation should not affect these properties, unless an orientation change (not a rotation change) renders the origin or one extent outside of the available document scan area.
    * A driver must also to update the HorizontalExtent, WIA_IPS_XPOS, WIA_IPS_YEXTENT, and WIA_IPS_YPOS properties when WIA_IPS_XRES and WIA_IPS_YRES are changed.
    * Note: Flatbed and Film child items must support only the HorizontalExtent, WIA_IPS_XPOS, WIA_IPS_XRES, WIA_IPS_YEXTENT, WIA_IPS_YPOS, and WIA_IPS_YRES properties. All other properties, required or optional for their parent (the base Flatbed or Film items), are only optional for these items. The only exceptions are the WIA_IPA_ITEM_Xxx properties, which are required for all items.
    * @param {Number}   value Sets the Horizontal Extent value.
    * @return {Number} Gets the Horizontal Extent value.
    */
    this.HorizontalExtent = 0;
    /**
    * ImgScan.ImageSettings Vertical Extent Property
    * @type {Number}
    * @property {Number} VerticalExtent
    * The VerticalExtent property contains the current height, in pixels, of a selected image to acquire.
    * An application sets the VerticalExtent property to mark the upper-left corner (that is, the height) of a selection area to acquire. VerticalExtent must agree with the value of the WIA_IPA_NUMBER_OF_LINES property. The WIA mini driver creates and maintains this property.
    * VerticalExtent is required for all image acquisition enabled items and child items of these items; this property is not available for storage items or stored image items.
    * When a fixed page size is set, the driver has to set the WIA_IPS_XEXTENT, WIA_IPS_XPOS, VerticalExtent, and WIA_IPS_YPOS properties to match the page size dimensions and a "0" origin. For center document alignment, the driver has to set WIA_IPS_XPOS to ((scan area width - document width) / 2) * resolution [DPI]) and WIA_IPS_YPOS to ((scan area height - document height) / 2) * resolution [DPI]).
    * When the origin or one extent is changed, the driver has to update the WIA_IPS_PAGE_SIZE to CUSTOM_SIZE and the WIA_IPS_PAGE_WIDTH and WIA_IPS_PAGE_HEIGHT properties to match the scan area extents. Orientation and rotation should not affect these properties, unless an orientation change (not a rotation change) renders the origin or one extent outside of the available document scan area.
    * A driver must also update the WIA_IPS_XEXTENT, WIA_IPS_XPOS, VerticalExtent, and WIA_IPS_YPOS properties when the WIA_IPS_XRES and WIA_IPS_YRES properties are changed.
    * Note: Flatbed and Film child items are required to support only the WIA_IPS_XEXTENT, WIA_IPS_XPOS, WIA_IPS_XRES, VerticalExtent, WIA_IPS_YPOS, and WIA_IPS_YRES properties. All other properties, required or optional for their parent (the base Flatbed or Film items), are only optional for these items. The only exceptions are the WIA_IPA_ITEM_Xxx properties, which are required for all items.
    * @param {Number} value Sets the Vertical Extent value.
    * @return {Number} Gets the Vertical Extent value.
    */
    this.VerticalExtent = 0;
    /**
    * ImgScan.ImageSettings Photometric Interpretation Property
    * @type {ImgScan.WIAPhotometricInterpretation}
    * @property {ImgScan.WIAPhotometricInterpretation} PhotometricInterpretation
    * The PhotometricInterpretation property contains the current setting for white and black pixels. The WIA mini driver creates and maintains this property.
    * An application reads the PhotometricInterpretation property to determine the value assigned to white or black pixels (depending on what the application is doing).
    * If a device can be set to only a single value, create a WIA_PROP_LIST type, and place the valid value in it.
    * The PhotometricInterpretation property is required for all image acquisition items and stored images.
    * @param {ImgScan.WIAPhotometricInterpretation} value Sets the Photometric Interpretation value.
    * @return {ImgScan.WIAPhotometricInterpretation} Gets the Photometric Interpretation value.
    */
    this.PhotometricInterpretation = 0;
    /**
    * ImgScan.ImageSettings Brightness Property
    * @type {Number}
    * @property {Number} Brightness
    * The Brightness property contains the current hardware brightness setting for a device.
    * An application sets the Brightness property to the hardware's brightness value. The WIA mini driver creates and maintains this property.
    * Values for Brightness should be mapped in a range from ˆ’1000 through 1000, where 1000 corresponds to the maximum brightness, 0 corresponds to normal brightness, and ˆ’1000 corresponds to the minimum brightness.
    * Brightness is required for all image acquisition items.
    * @param {Number} value Sets the Brightness value.
    * @return {Number} Gets the Brightness value.
    */
    this.Brightness = 0;
    /**
    * ImgScan.ImageSettings Contrast Property
    * @type {Number}
    * @property {Number} Contrast
    * The Contrast property contains the current hardware contrast setting for a device.
    * An application sets the Contrast property to the hardware's contrast value. The WIA mini driver creates and maintains this property.
    * Values for Contrast should be mapped in a range from ˆ’1000 through 1000, where ˆ’1000 corresponds to the minimum contrast, 0 corresponds to normal contrast, and 1000 corresponds to the maximum contrast.
    * Contrast is required for all image acquisition items.
    * @param {Number} value Sets the Contrast value.
    * @return {Number} Gets the Contrast value.
    */
    this.Contrast = 0;
    /**
    * ImgScan.ImageSettings Orientation Property
    * @type {ImgScan.WIAOrientationAndRotation}
    * @property {ImgScan.WIAOrientationAndRotation} Orientation
    * The Orientation property describes the current orientation of the document to scan. The WIA mini driver creates and maintains this property.
    * An application sets the Orientation property to define the original orientation of a page or image to be acquired. For more information about how to use Orientation, see WIA_DPS_PAGE_SIZE.
    * The Orientation property describes the orientation of the document to scan. This property affects the current scan frame and available page sizes.
    * Orientation is different from the WIA_IPS_ROTATION property, which refers to a rotation that is applied to an image after it is scanned. So, a ROT180 value for Orientation is different from a ROT180 value for WIA_IPS_ROTATION. For Orientation, ROT180 describes the orientation of the physical document to scan, relative to the scan direction, and for WIA_IPS_ROTATION, ROT180 describes the rotation to apply to an image after it is scanned.
    * The Orientation property is required for ADF items and optional for all other image acquisition items.
    * Note: The compatibility layer within the WIA service does not add support for Orientation to the ADF item that is translated from a Microsoft Windows XP WIA device if the property is not supported on the child item of the device. Applications should not expect that an ADF item will always support this property and should always check if Orientation is supported at run time.
    * @param {ImgScan.WIAOrientationAndRotation} value Sets the Orientation value.
    * @return {ImgScan.WIAOrientationAndRotation} Gets the Orientation value.
    */
    this.Orientation = 0;
    /**
    * ImgScan.ImageSettings Rotation Property
    * @type {ImgScan.WIAOrientationAndRotation}
    * @property {ImgScan.WIAOrientationAndRotation} Rotation
    * The Rotation property contains the current rotation setting for image rotation, if it is implemented. The WIA mini driver creates and maintains this property.
    * An application sets the Rotation property to inform a driver how much (if at all) to rotate an image before the driver returns it to the application.
    * The WIA mini driver is responsible for rotating image data before sending it back to the application. The application is responsible for checking the image headers to see the newly rotated values.
    * It can be difficult to understand the effect of rotation on the current image's selection area (which is defined by the WIA_IPS_XPOS, WIA_IPS_YPOS, WIA_IPS_XEXTENT, and WIA_IPS_YEXTENT properties).
    * Selection area refers to the selected area on the physical scanner bed that an image is be acquired from. The Rotation property does not modify the selection area. The driver applies a counterclockwise rotation according to Rotation only after the driver has acquired the appropriate selection area. Rotation does affect the dimensions of the output image, so these dimensions must be reflected in the resulting image's data header.
    * WIA_IPS_YEXTENT is not related to WIA_IPS_ORIENTATION. WIA_IPS_ORIENTATION describes the orientation of the document to be scanned relative to the direction of the scan; in contrast, Rotation describes the rotation that is to be applied to an image after it is scanned.
    * WIA_IPS_ORIENTATION can impact the area to be scanned. Not all page sizes are available in both landscape and portrait, and the extents of the image from an change in WIA_IPS_ORIENTATION could crop the image. Rotation does not impact the image extents and is not related to the orientation of the document that is to be scanned.
    * @param {ImgScan.WIAOrientationAndRotation} value Sets the Rotation value.
    * @return {ImgScan.WIAOrientationAndRotation} Gets the Rotation value.
    */
    this.Rotation = 0;
    /**
    * ImgScan.ImageSettings Threshold Property
    * @type {Number}
    * @property {Number} Threshold
    * The Threshold property contains the current hardware threshold setting for a device. The WIA mini driver creates and maintains this property.
    * You should map values for the Threshold property in a range from 0 through 255. The default value is 128.
    * An application sets Threshold to change the hardware threshold value. This value is valid only if the WIA_IPA_DATATYPE property is equal to WIA_DATA_THRESHOLD. If a device does not allow WIA_DATA_THRESHOLD to be changed, it should report the default value of 128.
    * @param {Number} value Sets the Threshold value.
    * @return {Number} Gets the Threshold value.
    */
    this.Threshold = 0;
    /**
    * ImgScan.ImageSettings Deskew X Property
    * @type {Number}
    * @property {Number} DeskewX
    * The DeskewX property, together with the WIA_IPS_DESKEW_Y property, describes the upper two corners of a skewed image. The WIA mini driver creates and maintains this property.
    * The DeskewX and WIA_IPS_DESKEW_Y properties describe where the two upper corners of a skewed image are located within the bounding rectangle that WIA_IPS_XPOS, WIA_IPS_YPOS, WIA_IPS_XEXTENT, and WIA_IPS_YEXTENT properties define.
    * The valid values for DeskewX must be between 0 and (WIA_IPS_XEXTENT - 1). A value of 0 means that no skew correction should be performed.
    * DeskewX contains the number of pixels in the x-direction from WIA_IPS_XPOS to the x-coordinate of the uppermost corner of the image to be corrected.
    * Versions: Available in Windows Vista and later operating systems.
    * @param {Number} value Sets the Deskew X value.
    * @return {Number} Gets the Deskew X value.
    */
    this.DeskewX = 0;
    /**
    * ImgScan.ImageSettings Deskew Y Property
    * @type {Number}
    * @property {Number} DeskewY
    * The DeskewY property, together with the WIA_IPS_DESKEW_X property, describes the upper two corners of a skewed image. The WIA mini driver creates and maintains this property.
    * The WIA_IPS_DESKEW_X and DeskewY properties describe where the two upper corners of a skewed image are located within the bounding rectangle that the WIA_IPS_XPOS, WIA_IPS_YPOS, WIA_IPS_XEXTENT, and WIA_IPS_YEXTENT properties define.
    * The valid values for DeskewY must be between 0 and (WIA_IPS_YEXTENT - 1). A value of 0 means that no deskew should be performed.
    * DeskewY contains the number of pixels in the y-direction from WIA_IPS_YPOS to the y-coordinate of the leftmost corner of the image to be deskewed.
    * Versions: Available in Windows Vista and later operating systems.
    * @param {Number} value Sets the Deskew Y value.
    * @return {Number} Gets the Deskew Y value.
    */
    this.DeskewY = 0;
    /**
    * ImgScan.ImageSettings Segmentation Property
    * @type {ImgScan.WIASegmentationFilter}
    * @property {ImgScan.WIASegmentationFilter} Segmentation
    * You must implement Segmentation  for scanner flatbed and film items if they support the creation of child items with a segmentation filter or if the driver itself creates child items for fixed frames.
    * You can package a driver with a segmentation filter and still have Segmentation set to WIA_DONT_USE_SEGMENTATION_FILTER for one of its items (for example, the film item). This situation could occur if the scanner uses fixed frames for film scanning, but not for scanning from the flatbed.
    * @param {ImgScan.WIASegmentationFilter} value Sets the Segmentation value.
    * @return {ImgScan.WIASegmentationFilter} Gets the Segmentation value.
    */
    this.Segmentation = 0;
    /**
    * ImgScan.ImageSettings Transfer Capabilities Property
    * @type {ImgScan.WIATransferCapabilities}
    * @property {ImgScan.WIATransferCapabilities} TransferCapabilities
    * Transfer Capabilities
    * The TransferCapabilities property indicates if a device can transfer parent and child items together. The WIA mini driver creates and maintains this property.
    * Versions: Available in Windows Vista and later operating systems.
    * @param {ImgScan.WIATransferCapabilities} value Sets the Transfer Capabilities value.
    * @return {ImgScan.WIATransferCapabilities} Gets the Transfer Capabilities value.
    */
    this.TransferCapabilities = 1;
    /**
    * ImgScan.ImageSettings Document Handling Select Property
    * @type {ImgScan.WIADocumentHandlingSelect}
    * @property {ImgScan.WIADocumentHandlingSelect} DocumentHandlingSelect
    * The DocumentHandlingSelect property contains the current scanner acquisition source and mode.
    * An application reads the DocumentHandlingSelect property to determine the current acquisition source of a scanner, or the application writes this property to set the source and mode of the scanner. In addition, applications use this property to enable and disable duplexer functionality. The WIA mini driver creates and maintains this property.
    * The values DUPLEX and FRONT_ONLY are mutually exclusive - set one or the other, but not both.
    * A WIA 2.0 mini driver must set the initial value of this property to its default value, FRONT_ONLY. Failure to observe this requirement might make the mini driver incompatible with the WIA 1.0 common scan dialog and with some WIA 1.0 applications.
    * Versions: Available in Windows Vista and later operating systems. For Windows XP, use the identical WIA_DPS_DOCUMENT_HANDLING_SELECT property.
    * @param {ImgScan.WIADocumentHandlingSelect} value Sets the Document Handling Select value.
    * @return {ImgScan.WIADocumentHandlingSelect} Gets the Document Handling Select value.
    */
    this.DocumentHandlingSelect = 1;
    /**
    * ImgScan.ImageSettings Pages Property
    * @type {Number}
    * @property {Number} Pages
    * The Pages property contains the current number of pages to acquire from an automatic document feeder.
    * An application reads Pages to determine a document feeder's page capacity. The application sets this property to the maximum number of pages it is willing to scan in the current WIA session. The WIA mini driver creates and maintains this property.
    * Note: If duplex mode is enabled (that is, if WIA_IPS_DOCUMENT_HANDLING_SELECT is set to FEEDER | DUPLEX), Pages is still equal to the number of pages to scan.One sheet of paper will automatically contain two pages if DUPLEX is enabled, even if the back side of the page is blank.
    * If you set Pages to 1, the scanner will process one of the sides of the page. We recommend that, if a scanner is unable to scan only one side of a page while in duplex mode, you should change the Pages value for the Inc member of the WIA_PROPERTY_INFO structure to 2. With this value, the application must request pages in multiples of two. A value of zero means that all pages that are currently loaded into the document feeder are to be scanned.
    * Versions: Available in Windows Vista and later operating systems. For Windows XP, use the WIA_DPS_PAGES property instead.
    * @param {Number} value Sets the Pages value.
    * @return {Number} Gets the Pages value.
    */
    this.Pages = 0;
    /**
    * ImgScan.ImageSettings Page Size Property
    * @type {ImgScan.WIAPageSize}
    * @property {ImgScan.WIAPageSize} PageSize
    * The PageSize property contains the size of the page that is currently selected to be scanned.
    * To select the dimensions of the page to scan, an application sets the PageSize property. The WIA mini driver creates and maintains this property.
    * Versions: Available in Windows Vista and later operating systems. For Windows XP, use the WIA_DPS_PAGE_SIZE property instead.
    * @param {ImgScan.WIAPageSize} value Sets the Page Size value.
    * @return {ImgScan.WIAPageSize} Gets the Page Size value.
    */
    this.PageSize = 0;
    /**
    * ImgScan.ImageSettings Film Scan Mode Property
    * @type {ImgScan.WIAFilmScanMode}
    * @property {ImgScan.WIAFilmScanMode} FilmScanMode
    * The FilmScanMode property contains the current film scan configuration settings. The WIA mini driver creates and maintains this property.
    * This property is required for the root item in the WIA item tree of film scanners and transparency adapters.
    * Versions: Available in Windows Vista and later operating systems.
    * @param {ImgScan.WIAFilmScanMode} value Sets the Film Scan Mode value.
    * @return {ImgScan.WIAFilmScanMode} Gets the Film Scan Mode value.
    */
    this.FilmScanMode = 0;
    /**
    * ImgScan.ImageSettings Lamp Property
    * @type {ImgScan.WIALamp}
    * @property {ImgScan.WIALamp} Lamp
    * The Lamp property contains the current configuration setting for a scanner's lamp. The WIA mini driver creates and maintains this property.
    * The Lamp property enables the programmatic control of the scanner lamp; this lamp could be a dedicated lamp (for a transparency adapter) or the main scanner lamp (for dedicated film scanners).
    * Versions: Available in Windows Vista and later operating systems.
    * @param {ImgScan.WIALamp} value Sets the Lamp value.
    * @return {ImgScan.WIALamp} Gets the Lamp value.
    */
    this.Lamp = 0;
    /**
    * ImgScan.ImageSettings Auto Off Property
    * @type {Number}
    * @property {Number} AutoOff
    * The AutoOff property contains the current configuration setting for automatically shutting off a scanner's lamp. The WIA mini driver creates and maintains this property.
    * The AutoOff property enables the programmatic control of how long a lamp will be kept on when a scanner is not in use; this lamp could be a dedicated lamp (for a transparency adapter) or the main scanner lamp (for dedicated film scanners).
    * You should implement AutoOff only if the device supports an automatic lamp-off feature.
    * The valid values for AutoOff range from 0 through 4095 seconds.
    * Versions: Available in Windows Vista and later operating systems.
    * @param {Number} value Sets the Auto Off value.
    * @return {Number} Gets the Auto Off value.
    */
    this.AutoOff = 0;
    /**
    * ImgScan.ImageSettings Auto Deskew Property
    * @type {ImgScan.WIAAutoDeskew}
    * @property {ImgScan.WIAAutoDeskew} AutoDeskew
    * The AutoDeskew property indicates if a device should use automatic skew correction. The WIA mini driver creates and maintains this property.
    * Versions: Available in Windows Vista and later operating systems.
    * @param {ImgScan.WIAAutoDeskew} value Sets the Auto Deskew value.
    * @return {ImgScan.WIAAutoDeskew} Gets the Auto Deskew value.
    */
    this.AutoDeskew = 0;
    /**
    * ImgScan.ImageSettings Horizontal Scaling Property
    * @type {Number}
    * @property {Number} HorizontalScaling
    * The HorizontalScaling property indicates if scaling along the x-axis should be applied to a scan. The WIA mini driver creates and maintains this property.
    * Valid values for the HorizontalScaling property range from 1 through 65535.
    * HorizontalScaling indicates only scaling along the x-axis. If you want to scale an image uniformly, you must set a similar value in HorizontalScaling and in the WIA_IPS_YSCALING property.
    * Consider the following examples:
    * 100, no scaling (1x, 100%). The image is not changed.
    * 050, 1/2 scaling (1/2x, 50%). The image size is reduced along the x-axis by 50% (1/2 the original size).
    * 200, 2x scaling (200%). The image size is enlarged along the x-axis by 200% (double).
    * Versions: Available in Windows Vista and later operating systems.
    * @param {Number} value Sets the HorizontalScaling value.
    * @return {Number} Gets the HorizontalScaling value.
    */
    this.HorizontalScaling = 0;
    /**
    * ImgScan.ImageSettings Vertical Scaling Property
    * @type {Number}
    * @property {Number} VerticalScaling
    * The VerticalScaling property indicates if scaling along the y-axis should be applied to a scan. The WIA mini driver creates and maintains this property.
    * Valid values for the VerticalScaling property range from 1 through 65535.
    * VerticalScaling indicates only scaling along the y-axis. If you want to scale an image uniformly, you must set a similar value in VerticalScaling and in the WIA_IPS_XSCALING property.
    * Consider the following examples:
    * 100, no scaling (1x, 100%). The image is not changed.
    * 050, 1/2 scaling (1/2x, 50%). The image size is reduced along the y-axis by 50% (1/2 the original size).
    * 200, 2x scaling (200%). The image size is enlarged along the y-axis by 200% (double).
    * Versions: Available in Windows Vista and later operating systems.
    * @param {Number} value Sets the Vertical Scaling value.
    * @return {Number} Gets the Vertical Scaling value.
    */
    this.VerticalScaling = 0;
    /**
    * ImgScan.ImageSettings Film Node Name Property
    * @type {String}
    * @property {String} FilmNodeName
    * Enables specification of a particular film scanning attachment when there is more than one.
    * This property is required for the WIA_CATEGORY_FILM items when there are multiple film scan items. If the device supports only one root scanner film item then this property is optional.
    * Note: This property is supported only by Windows Vista and later.
    * @param {String} value Sets the Film Node Name value.
    * @return {String} Gets the Film Node Name value.
    */
    this.FilmNodeName = "";
};

/*!
 * The Image Components Scan Event Arguments class.
 * Creates a new Scan Event Arguments instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgScan.ScanEventArgs = function () {
    /**
    * ImgScan.ScanEventArgs Image GUID Property
    * @readonly
    * @type {String}
    * @property {String} ImageGuid Gets the image unique identifier value.
    * @return {String} Gets the image unique identifier value.
    */
    this.ImageGuid = "";
    /**
    * ImgScan.ScanEventArgs Image File Name Property
    * @readonly
    * @type {String}
    * @property {String} Filename Gets the image file name value.
    * @return {String} Gets the image file name value.
    */
    this.Filename = "";
    /**
    * ImgScan.ScanEventArgs Scan Ended Property
    * @readonly
    * @type {Boolean}
    * @property {Boolean} ScanEnded Gets the scan ended value.
    * @return {Boolean} Gets the scan ended value.
    */
    this.ScanEnded = false;
    /**
    * ImgScan.ScanEventArgs Scanned Image Property
    * @readonly
    * @type {String}
    * @property {String} ScannedImage Gets the scanned image value.
    * @return {String} Gets the scanned image value.
    */
    this.ScannedImage = "";
    /**
    * ImgScan.ScanEventArgs Page Position Property
    * @readonly
    * @type {Number}
    * @property {Number} PagePosition Gets the page position value.
    * @return {Number} Gets the page position value.
    */
    this.PagePosition = 0;
    /**
    * ImgScan.ScanEventArgs Selected Page Property
    * @readonly
    * @type {Number}
    * @property {Number} SelectedPage Gets the selected page value.
    * @return {Number} Gets the selected page value.
    */
    this.SelectedPage = 0;
    /**
    * ImgScan.ScanEventArgs Page Count Property
    * @readonly
    * @type {Number}
    * @property {Number} PageCount Gets the page count value.
    * @return {Number} Gets the page count value.
    */
    this.PageCount = 0;
    /**
    * ImgScan.ScanEventArgs Stream Offset Property
    * @readonly
    * @type {Number}
    * @property {Number} StreamOffset Gets the stream offset value.
    * @return {Number} Gets the stream offset value.
    */
    this.StreamOffset = 0;
    /**
    * ImgScan.ScanEventArgs Stream Length Property
    * @readonly
    * @type {Number}
    * @property {Number} StreamLength Gets the stream length value.
    * @return {Number} Gets the stream length value.
    */
    this.StreamLength = 0;
    /**
    * ImgScan.ScanEventArgs Stream Property
    * @readonly
    * @type {String}
    * @property {String} Stream Gets the stream value.
    * @return {String} Gets the stream value.
    */
    this.Stream = "";
    /**
    * ImgScan.ScanEventArgs Stream End Property
    * @readonly
    * @type {Boolean}
    * @property {Boolean} StreamEnd Gets the stream end value.
    * @return {Boolean} Gets the stream end value.
    */
    this.StreamEnd = false;
    /**
    * ImgScan.ScanEventArgs Stream Total Length Property
    * @readonly
    * @type {Number}
    * @property {Number} StreamTotalLength Gets the stream total length value.
    * @return {Number} Gets the stream total length value.
    */
    this.StreamTotalLength = 0;
    /**
    * ImgScan.ScanEventArgs Total Chunks Property
    * @readonly
    * @type {Number}
    * @property {Number} TotalChunks Gets the total chunks value.
    * @return {Number} Gets the total chunks value.
    */
    this.TotalChunks = 0;
    /**
    * ImgScan.ScanEventArgs Status Property
    * @readonly
    * @type {Boolean}
    * @property {Boolean} Status Gets the status value.
    * @return {Boolean} Gets the status value.
    */
    this.Status = false;
    /**
    * ImgScan.ScanEventArgs Error Description Property
    * @readonly
    * @type {String}
    * @property {String} ErrorDescription Gets the error description value.
    * @return {String} Gets the error description value.
    */
    this.ErrorDescription = "";
};

/*!
 * The Image Components error occurred arguments class.
 * Creates a new error occurred arguments instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgScan.ICErrorOccurredArgs = function () {
    /**
    * ImgScan.ICErrorOccurredArgs Control Name Property
    * @readonly
    * @type {String}
    * @property {String} ControlName Gets or sets the control name value.
    * @return {String} Gets the control name value.
    */
    this.ControlName = "";
    /**
    * ImgScan.ICErrorOccurredArgs Method Name Property
    * @readonly
    * @type {String}
    * @property {String} MethodName Gets or sets the method name value.
    * @return {String} Gets the method name value.
    */
    this.MethodName = "";
    /**
    * ImgScan.ICErrorOccurredArgs Error Message Property
    * @readonly
    * @type {String}
    * @property {String} ErrorMessage Gets or sets the error message value.
    * @return {String} Gets the error message value.
    */
    this.ErrorMessage = "";
};