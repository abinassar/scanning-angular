/*!
 * The Image Components ImgEdit class.
 * Creates a new ImgEdit component instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
var ImgEdit = function () {

    /**
    * ImgEdit Enable Selection Type Property
    * @type {ImgEdit.ICSelectionType}
    * @property {ImgEdit.ICSelectionType} EnableSelectionType Gets or sets the image selection type.
    * @param {ImgEdit.ICSelectionType} value Sets the Enable Selection Type value.
    * @return {ImgEdit.ICSelectionType} Gets the Enable Selection Type value.
    */
    this.EnableSelectionType = null;
    /**
    * ImgEdit Selection Rectangle Property
    * @readonly
    * @type {ImgEdit.ICRectangle}
    * @property {ImgEdit.ICRectangle} SelectionRectangle Gets the image rectangle selection.
    * @return {ImgEdit.ICRectangle} Gets the Selection Rectangle value.
    */
    this.SelectionRectangle = null;
    /**
    * ImgEdit Has Selection Rectangle Property
    * @readonly
    * @type {Boolean}
    * @property {Boolean} HasSelectionRectangle Gets the value has selection rectangle.
    * @return {Boolean} Gets the Has Selection Rectangle value.
    */
    this.HasSelectionRectangle = null;
    /**
    * ImgEdit Page Count Property
    * @readonly
    * @type {Number}
    * @property {Number} PageCount Gets the loaded image page count.
    * @return {Number} Gets the Page Count value.
    */
    this.PageCount = null;
    /**
    * ImgEdit PDF Password Property
    * @type {String}
    * @property {String} PDFPassword Gets or sets the PDF password value.
    * @param {String} value Sets the PDF Password value.
    * @return {String} Gets the PDF Password value.
    */
    this.PDFPassword = null;
    /**
    * ImgEdit Image Border Color Property
    * @type {String}
    * @property {String} ImageBorderColor Gets or sets the image border color in hex format.
    * @param {String} value Sets the Image Border Color value.
    * @return {String} Gets the Image Border Color value.
    */
    this.ImageBorderColor = null;
    /**
    * ImgEdit Image Border Width Property
    * @type {Number}
    * @property {Number} ImageBorderColor Gets or sets the image border width.
    * @param {Number} value Sets the Image Border Width value.
    * @return {Number} Gets the Image Border Width value.
    */
    this.ImageBorderWidth = null;
    /**
    * ImgEdit Image Selection Stroke Property
    * @type {Number}
    * @property {Number} ImageSelectionStroke Gets or sets the text selection stroke width.
    * @param {Number} value Sets the Image Selection Stroke value.
    * @return {Number} Gets the Image Selection Stroke value.
    */
    this.ImageSelectionStroke = null;
    /**
    * ImgEdit Image Selection Color Property
    * @type {String}
    * @property {String} ImageSelectionColor Gets or sets the text selection color in hex format.
    * @param {String} value Sets the Image Selection Color value.
    * @return {String} Gets the Image Selection Color value.
    */
    this.ImageSelectionColor = null;
    /**
    * ImgEdit Web Service URL Property
    * @type {String}
    * @property {String} WebServiceURL Gets or sets the image manager web service url.
    * @param {String} value Sets the Web Service URL value.
    * @return {String} Gets the Web Service URL value.
    */
    this.WebServiceURL = null;
    /**
    * ImgEdit Fit Property
    * @readonly
    * @type {ImgEdit.ICImageFit}
    * @type {ImgEdit.ICImageFit}
    * @property {ImgEdit.ICImageFit} Fit Gets the displayed image fit.
    * @return {ImgEdit.ICImageFit} Gets the Fit value.
    */
    this.Fit = null;
    /**
    * ImgEdit Server Files Folder Property
    * @readonly
    * @type {String}
    * @property {String} ServerFilesFolder Gets the configured server files folder.
    * @return {String} Gets the Server Files Folder value.
    */
    this.ServerFilesFolder = null;
    /**
    * ImgEdit Application Identifier Property
    * @type {String}
    * @property {String} ApplicationIdentifier Gets or sets the application unique identifier.
    * Changing this value could brake the connection to the web service instance.
    * @param {String} value Sets the Application Identifier value.
    * @return {String} Gets the Application Identifier value.
    */
    this.ApplicationIdentifier = null;
    /**
    * ImgEdit Version Property
    * @readonly
    * @type {String}
    * @property {String} Version Gets the image edit component version.
    * @return {String} Gets the Version value.
    */
    this.Version = null;
    /**
    * ImgEdit Selected Page Property
    * @readonly
    * @type {Number}
    * @property {Number} SelectedPage Gets the loaded image selected page position.
    * @param {Number} value Sets the Selected Page value.
    * @return {Number} Gets the Selected Page value.
    */
    this.SelectedPage = null;
    /**
    * ImgEdit PDF View DPI Size Property
    * @type {ImgEdit.ICImageDPISize}
    * @property {ImgEdit.ICImageDPISize} PDFViewDPISize Gets or set the displayed PDF page resolution.
    * @param {ImgEdit.ICImageDPISize} value Sets the PDFViewDPISize value.
    * @return {ImgEdit.ICImageDPISize} Gets the PDFViewDPISize value.
    */
    this.PDFViewDPISize = null;
    /**
    * ImgEdit Image OCR Language Property
    * @type {ImgEdit.ICImageOCRLanguages}
    * @property {ImgEdit.ICImageOCRLanguages} ImageOCRLanguage Gets or set the image reading OCR language.
    * @param {ImgEdit.ICImageOCRLanguages} value Sets the Image OCR Language value.
    * @return {ImgEdit.ICImageOCRLanguages} Gets the Image OCR Language value.
    */
    this.ImageOCRLanguage = null;
    /**
    * ImgEdit ICImage OCR Type Property
    * @type {ImgEdit.ICImageOCRType}
    * @property {ImgEdit.ICImageOCRType} ICImageOCRType Gets or set the image reading OCR type.
    * @param {ImgEdit.ICImageOCRType} value Sets the ICImage OCR Type value.
    * @return {ImgEdit.ICImageOCRType} Gets the ICImage OCR Type value.
    */
    this.ICImageOCRType = null;
    /**
    * ImgEdit Image OCR Page Type Property
    * @type {ImgEdit.ICImageOCRPageType}
    * @property {ImgEdit.ICImageOCRPageType} ImageOCRPageType Gets or set the image reading OCR page type.
    * @param {ImgEdit.ICImageOCRPageType} value Sets the Image OCR Page Type value.
    * @return {ImgEdit.ICImageOCRPageType} Gets the Image OCR Page Type value.
    */
    this.ImageOCRPageType = null;
    /**
    * ImgEdit PDF Outline Items Property
    * @type {Array}
    * @property {Array} PDFOutlineItems Gets or set the PDF bookmarks collection.
    * @param {Array} value Sets the PDF Outline Items value.
    * @return {Array} Gets the PDF Outline Items value.
    */
    this.PDFOutlineItems = null;
    /**
    * ImgEdit Save Image Format Property
    * @type {ImgEdit.ICImageOutputFormat}
    * @property {ImgEdit.ICImageOutputFormat} SaveImageFormat Gets or sets the output image format.
    * @param {ImgEdit.ICImageOutputFormat} value Sets the Save Image Format value.
    * @return {ImgEdit.ICImageOutputFormat} Gets the Save Image Format value.
    */
    this.SaveImageFormat = null;
    /**
    * ImgEdit Save Image Compression Property
    * @type {ImgEdit.ICImageCompression}
    * @property {ImgEdit.ICImageCompression} SaveImageCompression Gets or sets the output image compression.
    * @param {ImgEdit.ICImageCompression} value Sets the Save Image Compression value.
    * @return {ImgEdit.ICImageCompression} Gets the Save Image Compression value.
    */
    this.SaveImageCompression = null;
    /**
    * ImgEdit Save Page Options Property
    * @type {ImgEdit.ICImageSavePageOptions}
    * @property {ImgEdit.ICImageSavePageOptions} SavePageOptions Gets or sets the output image save page option.
    * @param {ImgEdit.ICImageSavePageOptions} value Sets the Save Page Options value.
    * @return {ImgEdit.ICImageSavePageOptions} Gets the Save Page Options value.
    */
    this.SavePageOptions = null;
    /**
    * ImgEdit Save Page Range Property
    * @type {Number[]}
    * @property {Number[]} SavePageRange Gets or sets the output image save page range.
    * @param {Number[]} value Sets the Save Page Range value.
    * @return {Number[]} Gets the Save Page Range value.
    */
    this.SavePageRange = null;
    /**
    * ImgEdit Save JPG Quality Property
    * @type {Number}
    * @property {Number} SaveJPGQuality Gets or sets the output jpg image save quality.
    * @param {Number} value Sets the Save JPG Quality value.
    * @return {Number} Gets the Save JPG Quality value.
    */
    this.SaveJPGQuality = null;
    /**
    * ImgEdit Save JPG Flags Property
    * @type {ImgEdit.ICJPEGImageFlags}
    * @property {ImgEdit.ICJPEGImageFlags} SaveJPGFlags Gets or sets the output jpg image save flags.
    * @param {ImgEdit.ICJPEGImageFlags} value Sets the Save JPG Flags value.
    * @return {ImgEdit.ICJPEGImageFlags} Gets the Save JPG Flags value.
    */
    this.SaveJPGFlags = null;
    /**
    * ImgEdit Save PNG Flags Property
    * @type {ImgEdit.ICPNGImageFlags}
    * @property {ImgEdit.ICPNGImageFlags} SavePNGFlags Gets or sets the output png image save flags.
    * @param {ImgEdit.ICPNGImageFlags} value Sets the Save PNG Flags value.
    * @return {ImgEdit.ICPNGImageFlags} Gets the Save PNG Flags value.
    */
    this.SavePNGFlags = null;
    /**
    * ImgEdit Save Output Type Property
    * @type {ImgEdit.ICImageIOType}
    * @property {ImgEdit.ICImageIOType} SaveOutputType Gets or sets the output save image type.
    * @param {ImgEdit.ICImageIOType} value Sets the Save Output Type value.
    * @return {ImgEdit.ICImageIOType} Gets the Save Output Type value.
    */
    this.SaveOutputType = null;
    /**
    * ImgEdit Save PDF As Search-able Property
    * @type {Boolean}
    * @property {Boolean} SavePDFAsSearchable Gets or sets the output PDF file as search-able.
    * @param {Boolean} value Sets the SavePDF As Search-able value.
    * @return {Boolean} Gets the SavePDF As Search-able value.
    */
    this.SavePDFAsSearchable = null;
    /**
    * ImgEdit Save PDF As PDF/A Property
    * @type {Boolean}
    * @property {Boolean} SavePDFAsPDFA Gets or sets the output PDF file as PDFA1.
    * @param {Boolean} value Sets the Save PDF As PDF/A value.
    * @return {Boolean} Gets the Save PDF As PDF/A value.
    */
    this.SavePDFAsPDFA = null;
    /**
   * ImgEdit Save Burn Annotations Property
   * @type {Boolean}
   * @property {Boolean} SaveBurnAnnotations Gets or sets the output with or without annotations burned.
   * @param {Boolean} value Sets the Save and burn annotations value.
   * @return {Boolean} Gets the Save and burn annotations value.
   */
    this.SaveBurnAnnotations = null;
    /**
    * ImgEdit Compress Saved Stream Property
    * @type {Boolean}
    * @property {Boolean} CompressSavedStream Gets or sets the save compressed stream value.
    * @param {Boolean} value Sets the Compress Saved Stream value.
    * @return {Boolean} Gets the Compress Saved Stream value.
    */
    this.CompressSavedStream = null;
    /**
    * ImgEdit Save As Remote File Property
    * @type {Boolean}
    * @property {Boolean} SaveAsRemoteFile Gets or sets the file save remotely.
    * @param {Boolean} value Sets the Save As Remote File value.
    * @return {Boolean} Gets the Save As Remote File value.
    */
    this.SaveAsRemoteFile = null;
    /**
    * ImgEdit Current Image Zoom Property
    * @type {Number}
    * @property {Number} CurrentImageZoom Gets the current displayed image zoom.
    * @param {Number} value Sets the Current Image Zoom value.
    * @return {Number} Gets the Current Image Zoom value.
    */
    this.CurrentImageZoom = null;
    /**
    * ImgEdit Download File Property
    * @type {Boolean}
    * @property {Boolean} DownloadFile Gets or sets if the file is downloaded or not.
    * @param {Boolean} value Sets the Download File value.
    * @return {Boolean} Gets the Download File value.
    */
    this.DownloadFile = null;
    /**
    * ImgEdit Scroll Position Property
    * @type {ImgEdit.ICPoint}
    * @property {ImgEdit.ICPoint} ScrollPosition Gets or sets the scroll position.
    * @param {ImgEdit.ICPoint} value Sets the Scroll Position value.
    * @return {ImgEdit.ICPoint} Gets the Scroll Position value.
    */
    this.ScrollPosition = null;
    /**
    * ImgEdit Enable Changes Storage Property
    * @type {Boolean}
    * @property {Boolean} EnableChangesStorage Gets or sets the enable undo/redo operations.
    * @param {Boolean} value Sets the Enable Changes Storage value.
    * @return {Boolean} Gets the Enable Changes Storage value.
    */
    this.EnableChangesStorage = true;
    /**
    * ImgEdit Max Changes Storage Property
    * @type {Number}
    * @property {Number} MaxChangesStorage Gets or sets the maximum undo/redo operations.
    * @param {Number} value Sets the Max Changes Storage value.
    * @return {Number} Gets the Max Changes Storage value.
    */
    this.MaxChangesStorage = 5;
    /**
    * ImgEdit Image File Properties Property
    * @readonly
    * @type {ImgEdit.ImageProperties}
    * @property {ImgEdit.ImageProperties} ImageFileProperties Gets the loaded image properties.
    * @return {ImgEdit.ImageProperties} Gets the Image File Properties value.
    */
    this.ImageFileProperties = null;
    /**
    * ImgEdit Image Page Properties Property
    * @readonly
    * @type {ImgEdit.PageProperties}
    * @property {ImgEdit.PageProperties} ImagePageProperties Gets the displayed page properties.
    * @return {ImgEdit.PageProperties} Gets the Image Page Properties value.
    */
    this.ImagePageProperties = null;
    /**
    * ImgEdit Image Page Meta-data Property
    * @type {ImgEdit.PageMetadata}
    * @property {ImgEdit.PageMetadata} SavePageOptions Gets or sets the displayed page meta-data.
    * @param {ImgEdit.PageMetadata} value Sets the Image Page Meta-data value.
    * @return {ImgEdit.PageMetadata} Gets the Image Page Meta-data value.
    */
    this.ImagePageMetadata = null;
    /**
    * ImgEdit Image Page Paper Size Property
    * @readonly
    * @type {ImgEdit.PagePaperSize}
    * @property {ImgEdit.PagePaperSize} ImagePagePaperSize Gets or sets the displayed page paper size.
    * @return {ImgEdit.PagePaperSize} Gets the Image Page Paper Size value.
    */
    this.ImagePagePaperSize = null;
    /**
    * ImgEdit Auto Close Image Property
    * @type {Boolean}
    * @property {Boolean} AutoCloseImage Closes the web service image instance on page unload event.
    * @param {Boolean} value Sets the Auto Close Image value.
    * @return {Boolean} Gets the Auto Close Image value.
    */
    this.AutoCloseImage = true;
    /**
    * ImgEdit License Value Property
    * @type {String}
    * @property {String} LicenseValue Gets or sets the components license value.
    * @param {String} value Sets the License value.
    * @return {String} Gets the License value.
    */
    this.LicenseValue = "";

    /*
     * Image Components ImgEdit Events. 
     */

    /**
    * Server files listed completed add event handler.
    * Adds the server files listed completed event handler.
    * @function
    * @param {function(ImgEdit,ImgEdit.ServerFolderFiles[])} h Event handler function.
    */
    this.add_ServerFilesListedCompleted = function (h) {
    };
    /**
    * Server files listed completed remove event handler.
    * Removes the server files listed completed event handler.
    * @function
    * @param {function(ImgEdit,ImgEdit.ServerFolderFiles[])} h Event handler function.
    */
    this.remove_ServerFilesListedCompleted = function (h) {
    };
    /**
    * Occurs every successfully listed folder files.
    * @event ServerFilesListedCompleted Raises the server files listed completed event handler.
    * @param {ImgEdit} s The ImgEdit component object.
    * @param {ImgEdit.ServerFolderFiles[]} e The selected folder listed server files.
    */
    this.ServerFilesListedCompleted = function (s, e) {
    };

    /**
    * Connection status changed add event handler.
    * Adds the connection status changed event handler.
    * @function
    * @param {function(ImgEdit,ImgEdit.ICConnectionStatus)} h Event handler function.
    */
    this.add_ConnectionStatusChanged = function (h) {
    };
    /**
    * Connection status changed remove event handler.
    * Removes the connection status changed event handler.
    * @function
    * @param {function(ImgEdit,ImgEdit.ICConnectionStatus)} h Event handler function.
    */
    this.remove_ConnectionStatusChanged = function (h) {
    };
    /**
    * Occurs every changed connection status.
    * @event ConnectionStatusChanged Raises the changed connection status event handler.
    * @param {ImgEdit} s The ImgEdit component object.
    * @param {ImgEdit.ICConnectionStatus} e Connection status enumeration value.
    */
    this.ConnectionStatusChanged = function (s, e) {
    };

    /**
    * Image loaded add event handler.
    * Adds the image loaded  event handler.
    * @function
    * @param {function(ImgEdit)} h Event handler function.
    */
    this.add_ImageLoaded = function (h) {
    };
    /**
    * Image loaded remove event handler.
    * Removes the image loaded event handler.
    * @function
    * @param {function(ImgEdit)} h Event handler function.
    */
    this.remove_ImageLoaded = function (h) {
    };
    /**
    * Occurs every successfully loaded image.
    * @event ImageLoaded Raises the image loaded event handler.
    * @param {ImgEdit} s The ImgEdit component object.
    */
    this.ImageLoaded = function (s) {
    };

    /**
    * Image changed add event handler.
    * Adds the image changed event handler.
    * @function
    * @param {function(ImgEdit)} h Event handler function.
    */
    this.add_ImageChanged = function (h) {
    };
    /**
    * Image changed remove event handler.
    * Removes the image changed event handler.
    * @function
    * @param {function(ImgEdit)} h Event handler function.
    */
    this.remove_ImageChanged = function (h) {
    };
    /**
    * Occurs every successfully changed image.
    * @event ImageChanged Raises the image changed event handler.
    * @param {ImgEdit} s The ImgEdit component object.
    */
    this.ImageChanged = function (s) {
    };

    /**
    * Image displayed add event handler.
    * Adds the image displayed event handler.
    * @function
    * @param {function(ImgEdit,Number)} h Event handler function.
    */
    this.add_PageDisplayed = function (h) {
    };
    /**
    * Image displayed remove event handler.
    * Removes the image displayed event handler.
    * @function
    * @param {function(ImgEdit,Number)} h Event handler function.
    */
    this.remove_PageDisplayed = function (h) {
    };
    /**
    * Occurs every successfully displayed page.
    * @event PageDisplayed Raises the changed connection status event handler.
    * @param {ImgEdit} s The ImgEdit component object.
    * @param {Number} e The page position in the image.
    */
    this.PageDisplayed = function (s, e) {
    };

    /**
    * Page loaded add event handler.
    * Adds the page loaded event handler.
    * @function
    * @param {function(ImgEdit,Number)} h Event handler function.
    */
    this.add_PageLoaded = function (h) {
    };
    /**
    * Page loaded remove event handler.
    * Removes the page loaded event handler.
    * @function
    * @param {function(ImgEdit,Number)} h Event handler function.
    */
    this.remove_PageLoaded = function (h) {
    };
    /**
    * Occurs every successfully loaded page.
    * @event PageLoaded Raises the loaded page event handler.
    * @param {ImgEdit} s The ImgEdit component object.
    * @param {Number} e The page position in the image.
    */
    this.PageLoaded = function (s, e) {
    };

    /**
    * Page changed add event handler.
    * Adds the page changed event handler.
    * @function
    * @param {function(ImgEdit,Number)} h Event handler function.
    */
    this.add_PageChanged = function (h) {
    };
    /**
    * Page changed remove event handler.
    * Removes the page changed event handler.
    * @function
    * @param {function(ImgEdit,Number)} h Event handler function.
    */
    this.remove_PageChanged = function (h) {
    };
    /**
    * Occurs every successfully changed page.
    * @event PageChanged Raises the page changed event handler.
    * @param {ImgEdit} s The ImgEdit component object.
    * @param {Number} e The page position in the image.
    */
    this.PageChanged = function (s, e) {
    };

    /**
    * Page navigating add event handler.
    * Adds the page navigating event handler.
    * @function
    * @param {function(ImgEdit,Number)} h Event handler function.
    */
    this.add_PageNavigating = function (h) {
    };
    /**
    * Page navigating remove event handler.
    * Removes the page navigating event handler.
    * @function
    * @param {function(ImgEdit,Number)} h Event handler function.
    */
    this.remove_PageNavigating = function (h) {
    };
    /**
    * Occurs every starting page navigation.
    * @event PageNavigating Raises the page navigation event handler.
    * @param {ImgEdit} s The ImgEdit component object.
    * @param {Number} e The navigating page position.
    */
    this.PageNavigating = function (s, e) {
    };

    /**
    * Page navigated add event handler.
    * Adds the page navigated event handler.
    * @function
    * @param {function(ImgEdit,Number)} h Event handler function.
    */
    this.add_PageNavigated = function (h) {
    };
    /**
    * Page navigated remove event handler.
    * Removes the page navigated event handler.
    * @function
    * @param {function(ImgEdit,Number)} h Event handler function.
    */
    this.remove_PageNavigated = function (h) {
    };
    /**
    * Occurs every finished page navigation.
    * @event PageNavigating Raises the page navigated event handler.
    * @param {ImgEdit} s The ImgEdit component object.
    * @param {Number} e The navigated page position.
    */
    this.PageNavigated = function (s, e) {
    };

    /**
    * Page repainted add event handler.
    * Adds the page repainted event handler.
    * @function
    * @param {function(ImgEdit,Number)} h Event handler function.
    */
    this.add_PageRepainted = function (h) {
    };
    /**
    * Page repainted remove event handler.
    * Removes the page repainted event handler.
    * @function
    * @param {function(ImgEdit,Number)} h Event handler function.
    */
    this.remove_PageRepainted = function (h) {
    };
    /**
    * Occurs every page repainted.
    * @event PageRepainted Raises the page repainted event handler.
    * @param {ImgEdit} s The ImgEdit component object.
    * @param {Number} e The repainted page position.
    */
    this.PageRepainted = function (s, e) {
    };

    /**
    * Image closed add event handler.
    * Adds the image closed event handler.
    * @function
    * @param {function(ImgEdit)} h Event handler function.
    */
    this.add_ImageClosed = function (h) {
    };
    /**
    * Image closed remove event handler.
    * Removes the image closed event handler.
    * @function
    * @param {function(ImgEdit)} h Event handler function.
    */
    this.remove_ImageClosed = function (h) {
    };
    /**
    * Occurs every successfully closed image.
    * @event ImageClosed Raises the image closed event handler.
    * @param {ImgEdit} s The ImgEdit component object.
    */
    this.ImageClosed = function (s) {
    };

    /**
    * Image saved add event handler.
    * Adds the image saved event handler.
    * @function
    * @param {function(ImgEdit,String)} h Event handler function.
    */
    this.add_ImageSaved = function (h) {
    };
    /**
    * Image saved remove event handler.
    * Removes the image saved event handler.
    * @function
    * @param {function(ImgEdit,String)} h Event handler function.
    */
    this.remove_ImageSaved = function (h) {
    };
    /**
    * Occurs every successfully closed image.
    * @event ImageSaved Raises the image saved event handler.
    * @param {ImgEdit} s The ImgEdit component object.
    * @param {string} e The saved image base64 value.
    */
    this.ImageSaved = function (s, e) {
    };
    /**
    * Request started add event handler.
    * Adds the request started event handler.
    * @function
    * @param {function(ImgEdit)} h Event handler function.
    */
    this.add_RequestStarted = function (h) {
    };
    /**
    * Request started remove event handler.
    * Remove the request started event handler.
    * @function
    * @param {function(ImgEdit)} h Event handler function.
    */
    this.remove_RequestStarted = function (h) {
    };
    /**
    * Occurs every started web service request.
    * @event RequestStarted Raises the request started event handler.
    * @param {ImgEdit} s The ImgEdit component object.
    */
    this.RequestStarted = function (s) {
    };
    /**
    * Request finished add event handler.
    * Adds the request finished event handler.
    * @function
    * @param {function(ImgEdit)} h Event handler function.
    */
    this.add_RequestFinished = function (h) {
    };
    /**
    * Request finished remove event handler.
    * Removes the request finished event handler.
    * @function
    * @param {function(ImgEdit)} h Event handler function.
    */
    this.remove_RequestFinished = function (h) {
    };
    /**
    * Occurs every finished web service request.
    * @event RequestFinished Raises the request finished event handler.
    * @param {ImgEdit} s The ImgEdit component object.
    */
    this.RequestFinished = function (s) {
    };

    /**
    * Progress changed event handler.
    * Adds the progress changed event handler.
    * @function
    * @param {function(ImgEdit,ImgEdit.ICProgressArgs)} h Event handler function.
    */
    this.add_ProgressChanged = function (h) {
    };
    /**
    * Progress changed event handler.
    * Removes the progress changed event handler.
    * @function
    * @param {function(ImgEdit,ImgEdit.ICProgressArgs)} h Event handler function.
    */
    this.remove_ProgressChanged = function (h) {
    };
    /**
    * Occurs when the progress has changed.
    * @event ProgressChanged Raises the progress changed event handler.
    * @param {ImgEdit} s The ImgEdit component object.
    * @param {ImgEdit.ICProgressArgs} e The progress arguments object.
    */
    this.ProgressChanged = function (s, e) {
    };

    /**
    * Selection started add event handler.
    * Adds the selection started add event handler.
    * @function
    * @param {function(ImgEdit,ImgEdit.ICRectangle)} h Event handler function.
    */
    this.add_SelectionStarted = function (h) {
    };
    /**
    * Selection started remove event handler.
    * Removes the selection started add event handler.
    * @function
    * @param {function(ImgEdit,ImgEdit.ICRectangle)} h Event handler function.
    */
    this.remove_SelectionStarted = function (h) {
    };
    /**
    * Occurs when a image selection is started.
    * @event SelectionStarted Raises the selection started event handler.
    * @param {ImgEdit} s The ImgEdit component object.
    * @param {ImgEdit.ICRectangle} e The selection rectangle arguments object.
    */
    this.SelectionStarted = function (s, e) {
    };

    /**
    * Selection changed add event handler.
    * Adds the selection changed add event handler.
    * @function
    * @param {function(ImgEdit,ImgEdit.ICRectangle)} h Event handler function.
    */
    this.add_SelectionChanged = function (h) {
    };
    /**
    * Selection changed remove event handler.
    * Removes the selection changed add event handler.
    * @function
    * @param {function(ImgEdit,ImgEdit.ICRectangle)} h Event handler function.
    */
    this.remove_SelectionChanged = function (h) {
    };
    /**
    * Occurs when a image selection is in progress.
    * @event SelectionChanged Raises the selection changed event handler.
    * @param {ImgEdit} s The ImgEdit component object.
    * @param {ImgEdit.ICRectangle} e The selection location and size.
    */
    this.SelectionChanged = function (s, e) {
    };

    /**
    * Selection finished add event handler.
    * Adds the selection finished add event handler.
    * @function
    * @param {function(ImgEdit,ImgEdit.ICRectangle)} h Event handler function.
    */
    this.add_SelectionFinished = function (h) {
    };
    /**
    * Selection finished remove event handler.
    * Removes the selection finished add event handler.
    * @function
    * @param {function(ImgEdit,ImgEdit.ICRectangle)} h Event handler function.
    */
    this.remove_SelectionFinished = function (h) {
    };
    /**
    * Occurs when a image selection is finished.
    * @event SelectionFinished Raises the selection finished event handler.
    * @param {ImgEdit} s The ImgEdit component object.
    * @param {ImgEdit.ICRectangle} e The selection location and size.
    */
    this.SelectionFinished = function (s, e) {
    };

    /**
    * Selection mouse down add event handler.
    * Adds the selection mouse down add event handler.
    * @function
    * @param {function(ImgEdit,ImgEdit.ICPoint)} h Event handler function.
    */
    this.add_SelectionMouseDown = function (h) {
    };
    /**
    * Selection mouse down remove event handler.
    * Removes the selection mouse down add event handler.
    * @function
    * @param {function(ImgEdit,ImgEdit.ICPoint)} h Event handler function.
    */
    this.remove_SelectionMouseDown = function (h) {
    };
    /**
    * Occurs on the control mouse down.
    * @event SelectionMouseDown Raises the selection mouse down event handler.
    * @param {ImgEdit} s The ImgEdit component object.
    * @param {ImgEdit.ICPoint} e The position of the mouse.
    */
    this.SelectionMouseDown = function (s, e) {
    };

    /**
    * Selection mouse move add event handler.
    * Adds the selection mouse move add event handler.
    * @function
    * @param {function(ImgEdit,ImgEdit.ICPoint)} h Event handler function.
    */
    this.add_SelectionMouseMove = function (h) {
    };
    /**
    * Selection mouse move remove event handler.
    * Removes the selection mouse move add event handler.
    * @function
    * @param {function(ImgEdit,ImgEdit.ICPoint)} h Event handler function.
    */
    this.remove_SelectionMouseMove = function (h) {
    };
    /**
    * Occurs on the control mouse move.
    * @event SelectionMouseMove Raises the selection mouse move event handler.
    * @param {ImgEdit} s The ImgEdit component object.
    * @param {ImgEdit.ICPoint} e The position of the mouse.
    */
    this.SelectionMouseMove = function (s, e) {
    };

    /**
    * Selection mouse up add event handler.
    * Adds the selection mouse up add event handler.
    * @function
    * @param {function(ImgEdit,ImgEdit.ICPoint)} h Event handler function.
    */
    this.add_SelectionMouseUp = function (h) {
    };
    /**
    * Selection mouse up remove event handler.
    * Removes the selection mouse up add event handler.
    * @function
    * @param {function(ImgEdit,ImgEdit.ICPoint)} h Event handler function.
    */
    this.remove_SelectionMouseUp = function (h) {
    };
    /**
    * Occurs on the control mouse up.
    * @event SelectionMouseUp Raises the selection mouse up event handler.
    * @param {ImgEdit} s The ImgEdit component object.
    * @param {ImgEdit.ICPoint} e The position of the mouse.
    */
    this.SelectionMouseUp = function (s, e) {
    };

    /**
    * OCR completed add event handler.
    * Adds the OCR completed add event handler.
    * @function
    * @param {function(ImgEdit,ImgEdit.ICOCRResultArgs)} h Event handler function.
    */
    this.add_OCRCompleted = function (h) {
    };
    /**
    * OCR completed remove event handler.
    * Removes the OCR completed add event handler.
    * @function
    * @param {function(ImgEdit,ImgEdit.ICOCRResultArgs)} h Event handler function.
    */
    this.remove_OCRCompleted = function (h) {
    };
    /**
    * Occurs when the OCR process is completed.
    * @event OCRCompleted Raises the OCR completed event handler.
    * @param {ImgEdit} s The ImgEdit component object.
    * @param {ImgEdit.ICOCRResultArgs} e The OCR result values.
    */
    this.OCRCompleted = function (s, e) {
    };

    /**
    * OCR zones completed add event handler.
    * Adds the OCR zones completed add event handler.
    * @function
    * @param {function(ImgEdit,ImgEdit.ICOCRResultArgs)} h Event handler function.
    */
    this.add_OCRZonesCompleted = function (h) {
    };
    /**
    * OCR zones completed remove event handler.
    * Removes the OCR zones completed add event handler.
    * @function
    * @param {function(ImgEdit,ImgEdit.ICOCRResultArgs)} h Event handler function.
    */
    this.remove_OCRZonesCompleted = function (h) {
    };
    /**
    * Occurs for every Zone OCR completed.
    * @event OCRCompleted Raises the OCR zone completed event handler.
    * @param {ImgEdit} s The ImgEdit component object.
    * @param {ImgEdit.ICOCRResultArgs} e The OCR result values.
    */
    this.OCRZonesCompleted = function (s, e) {
    };

    /**
    * Text selection completed add event handler.
    * Adds the text selection completed add event handler.
    * @function
    * @param {function(ImgEdit,ImgEdit.ICOCRResultArgs)} h Event handler function.
    */
    this.add_TextSelectionCompleted = function (h) {
    };
    /**
    * Text selection completed remove event handler.
    * Removes the text selection completed add event handler.
    * @function
    * @param {function(ImgEdit,ImgEdit.ICOCRResultArgs)} h Event handler function.
    */
    this.remove_TextSelectionCompleted = function (h) {
    };
    /**
    * Occurs for every completed document text selection.
    * @event TextSelectionCompleted Raises the text selection completed event handler.
    * @param {ImgEdit} s The ImgEdit component object.
    * @param {ImgEdit.ICOCRResultArgs} e The OCR result values.
    */
    this.TextSelectionCompleted = function (s, e) {
    };

    /**
    * Text search completed add event handler.
    * Adds the text search completed add event handler.
    * @function
    * @param {function(ImgEdit,ImgEdit.ICTextSearchArgs)} h Event handler function.
    */
    this.add_TextSearchCompleted = function (h) {
    };
    /**
    * Text search completed remove event handler.
    * Removes the text search completed add event handler.
    * @function
    * @param {function(ImgEdit,ImgEdit.ICTextSearchArgs)} h Event handler function.
    */
    this.remove_TextSearchCompleted = function (h) {
    };
    /**
    * Occurs for every document text search result.
    * @event TextSearchCompleted Raises the text search completed event handler.
    * @param {ImgEdit} s The ImgEdit component object.
    * @param {ImgEdit.ICTextSearchArgs} e The text search result values.
    */
    this.TextSearchCompleted = function (s, e) {
    };

    /**
    * Error occurred add event handler.
    * Adds the error occurred add event handler.
    * @function
    * @param {function(ImgEdit,ImgEdit.ICErrorOccurredArgs)} h Event handler function.
    */
    this.add_ErrorOccurred = function (h) {
    };
    /**
    * Error occurred remove event handler.
    * Removes the error occurred add event handler.
    * @function
    * @param {function(ImgEdit,ImgEdit.ICErrorOccurredArgs)} h Event handler function.
    */
    this.remove_ErrorOccurred = function (h) {
    };
    /**
    * Occurs every time one error is raised.
    * @event ErrorOccurred Raises the error occurred event handler.
    * @param {ImgEdit} s The ImgEdit component object.
    * @param {ImgEdit.ICErrorOccurredArgs} e The control name, method and description that raised the error.
    */
    this.ErrorOccurred = function (s, e) {
    };
};

/**
* ImgEdit Add Event Listener Method
* Adds a listener to an event by name.
* @function
* @param {String} eventName The event name.
* @param {Function} handler The event callback method to be raised.
*/
ImgEdit.prototype.addEventListener = function (eventName, handler) {
};

/**
* ImgEdit Remove Event Listener Method
* Removes the listener of an event by name.
* @function
* @param {String} eventName The event name.
* @param {Function} handler The event callback method to be removed from the event.
*/
ImgEdit.prototype.removeEventListener = function (eventName, handler) {
};

/**
* ImgEdit Open Connection Method
* Opens the web service connection.
* @function
*/
ImgEdit.prototype.OpenConnection = function () {
};

/**
* ImgEdit Close Connection Method
* Closes the web service connection.
* @function
*/
ImgEdit.prototype.CloseConnection = function () {
};

/**
* ImgEdit Refresh Layout Method
* Refreshes the displayed image layout.
* @function
*/
ImgEdit.prototype.RefreshLayout = function () {
};

/**
* ImgEdit Test DB Connection Method
* Tests the DB connection.
* @function
* @param {Function} callback The result callback that returns the status of the connection.
*/
ImgEdit.prototype.TestDBConnection = function (callback) {
};

/**
* ImgEdit New Image Method
* Creates a new template image in memory and displays it.
* @function
* @param {ImgEdit.ICImageSizeTemplate} ImageTemplate The image size template.
* @param {Number} PixelWidth The image width pixel size.
* @param {Number} PixelHeight The image height pixel size.
* @param {ImgEdit.ICImageDPISize} DPISize The image DPI size.
* @param {String} BackColor The image background color.
*/
ImgEdit.prototype.NewImage = function (ImageTemplate, PixelWidth, PixelHeight, DPISize, BackColor) {
};

/**
* ImgEdit Display URL Method
* Loads the image URL in memory and displays it.
* @function
* @param {String} ImageUrl The uniform resource locator's value.
*/
ImgEdit.prototype.DisplayUrl = function (ImageUrl) {
};

/**
* ImgEdit Display File Method
* Loads the image Base64 format value and displays it.
* @function
* @param {String} ImageBase64 The Base64 image value.
* @param {String} Filename The selected file name.
*/
ImgEdit.prototype.DisplayFile = function (ImageBase64, Filename) {
};


/**
* ImgEdit Display File Async Method
* Loads the image Base64 format value and displays it.             
* Sends the Base64 value in chunks to the server.
* @function
* @param {String} ImageBase64 The Base64 image value.
* @param {String} Filename The selected file name.
*/
ImgEdit.prototype.DisplayFileAsync = function (ImageBase64, Filename) {
};


/**
* ImgEdit Display Remote Method
* Loads the image server file in memory and displays it.
* @function
* @param {String} ServerFilePath The remote server file system path.
*/
ImgEdit.prototype.DisplayRemote = function (ServerFilePath) {
};


/**
* ImgEdit Display FTP Method
* Loads the FTP image file in memory and displays it.
* @function
* @param {String} FtpImageUrl The remote server file system path.
*/
ImgEdit.prototype.DisplayFTP = function (FtpImageUrl) {
};


/**
* ImgEdit Display DB Method
* Loads one database image file in memory and displays it.
* @function
* @param {String} DBImageScript The remote server file system path.
*/
ImgEdit.prototype.DisplayDB = function (DBImageScript) {
};

/**
* ImgEdit Reload Image Method
* Reloads a previously loaded image from the web service cache with the specified application identifier.
* @function
*/
ImgEdit.prototype.ReloadImage = function () {
};


/**
* ImgEdit Get Server Folder Files Method
* Gets the content of the remote server file system path.
* @function
* @param {String} ServerPath The remote server file system path.
*/
ImgEdit.prototype.GetServerFolderFiles = function (ServerPath) {
};


/**
* ImgEdit More Zoom Method
* Magnifies the image display.
* @function
*/
ImgEdit.prototype.MoreZoom = function () {
};


/**
* ImgEdit Less Zoom Method
* Reduces the image display.
* @function
*/
ImgEdit.prototype.LessZoom = function () {
};


/**
* ImgEdit Image Zoom Method
* Reduces or magnifies the image display.
* @function
* @param {Number} Value The image zoom value. Value = 1 is the original image zoom size.
*/
ImgEdit.prototype.ImageZoom = function (Value) {
};


/**
* ImgEdit Zoom To Selection Method
* Zooms the selected page to the existing selection rectangle.
* @function
*/
ImgEdit.prototype.ZoomToSelection = function () {
};


/**
* ImgEdit Fit To Method
* Fits the image display.
* @function
* @param {ImgEdit.ICImageFit} Option The image fit selection (Best fit, fit to width, original size).
* @param {Boolean} Repaint Refreshes the image display.
*/
ImgEdit.prototype.FitTo = function (Option, Repaint) {
};


/**
* ImgEdit Repaint Method
* Repaints the image display.
* @function
*/
ImgEdit.prototype.Repaint = function () {
};


/**
* ImgEdit Previous Page Method
* Navigates to the previous image page.
* @function
*/
ImgEdit.prototype.PreviousPage = function () {
};


/**
* ImgEdit Page Method
* Display selected page.
* @function
* @param {Number} PageNumber The page position in the image.
*/
ImgEdit.prototype.Page = function (PageNumber) {
};


/**
* ImgEdit Next Page Method
* Navigates to the next image page.
* @function
*/
ImgEdit.prototype.NextPage = function () {
};


/**
* ImgEdit Rotate Left Method
* Rotates the displayed image to the left.
* @function
*/
ImgEdit.prototype.RotateLeft = function () {
};


/**
* ImgEdit Rotate Right Method
* Rotates the displayed image to the right.
* @function
*/
ImgEdit.prototype.RotateRight = function () {
};


/**
* ImgEdit Flip Method
* Flips the displayed image.
* @function
*/
ImgEdit.prototype.Flip = function () {
};


/**
* ImgEdit Mirror Method
* Mirrors the displayed image.
* @function
*/
ImgEdit.prototype.Mirror = function () {
};


/**
* ImgEdit Undo Method
* Undoes a modification from the loaded image page.
* @function
*/
ImgEdit.prototype.Undo = function () {
};


/**
* ImgEdit Redo Method
* Redoes a modification from the loaded image page.
* @function
*/
ImgEdit.prototype.Redo = function () {
};


/**
* ImgEdit Deskew Method
* Automatic skewing of the displayed image.
* @param {Boolean} PreserveEdges Preserves the image edges on image deskew.
* @function
*/
ImgEdit.prototype.Deskew = function (PreserveEdges) {
};


/**
* ImgEdit Remove Borders Method
* Removes the black borders from the displayed image.
* @function
*/
ImgEdit.prototype.RemoveBorders = function () {
};


/**
* ImgEdit Auto Crop Image Method
* Automatic cropping of the displayed image.
* @function
*/
ImgEdit.prototype.AutoCropImage = function () {
};


/**
* ImgEdit Resize By Percentage Method
* Resizes the specified image page to the specified value.
* @function
* @param {Number} PageNumber The specified page to be resized.
* @param {Number} Value The percentage resizing value.
*/
ImgEdit.prototype.ResizeByPercentage = function (PageNumber, Value) {
};


/**
* ImgEdit Resize By Size Method
* Resizes the specified image page to the specified values and can maintain the aspect ratio.
* @function
* @param {Number} PageNumber The specified page to be resized.
* @param {Number} Width The width resizing value.
* @param {Number} Height The height resizing value.
* @param {Boolean} MaintainRatio Maintain aspect ration if one of the values is zero (0).
*/
ImgEdit.prototype.ResizeBySize = function (PageNumber, Width, Height, MaintainRatio) {
};


/**
* ImgEdit Crop Image Method
* Crops the displayed image to the selection rectangle size.
* @function
*/
ImgEdit.prototype.CropImage = function () {
};


/**
* ImgEdit Clear Selection Method
* Clears the selection rectangle size of the displayed image.
* @function
*/
ImgEdit.prototype.ClearSelection = function () {
};


/**
* ImgEdit Set Selection Rectangle Method
* Sets a manual selection rectangle in the displayed image.
* @function
* @param {Number} x The start x point of the selection rectangle.
* @param {Number} y The start y point of the selection rectangle.
* @param {Number} w The width value of the selection rectangle.
* @param {Number} h The height value of the selection rectangle.
*/
ImgEdit.prototype.SetSelectionRectangle = function (x, y, w, h) {
};


/**
* ImgEdit Clear Selection Rectangle Method
* Clears the mouse selection of the displayed image.
* @function
*/
ImgEdit.prototype.ClearSelectionRectangle = function () {
};


/**
 * ImgEdit Insert Image URL Method
 * Inserts a range of pages from an image URL to the loaded image starting at the specified position.
 * @function
 * @param {String} ImageUrl The image URL that the pages will be inserted to the loaded image.
 * @param {Number} BeginPosition The page position of the loaded image that the pages will be inserted.
 * @param {Number} StartPage The start page group that will be inserted.
 * @param {Number} EndPage The end page group that will be inserted.
 */
ImgEdit.prototype.InsertImageUrl = function (ImageUrl, BeginPosition, StartPage, EndPage) {
};


/**
* ImgEdit Insert Image File Method
* Inserts a range of pages from an image byte array to the loaded image starting at the specified position.
* @function
* @param {String} ImageBase64 The Base64 image value that the pages will be inserted to the loaded image.
* @param {Number} BeginPosition The page position of the loaded image that the pages will be inserted.
* @param {Number} StartPage The start page group that will be inserted.
* @param {Number} EndPage The end page group that will be inserted.
*/
ImgEdit.prototype.InsertImageFile = function (ImageBase64, BeginPosition, StartPage, EndPage) {
};


/**
* ImgEdit Insert Image Remote Method
* Inserts a range of pages from an image server file path to the loaded image starting at the specified position.
* @function
* @param {String} ServerFilePath The image server file path that the pages will be inserted to the loaded image.
* @param {Number} BeginPosition The page position of the loaded image that the pages will be inserted.
* @param {Number} StartPage The start page group that will be inserted.
* @param {Number} EndPage The end page group that will be inserted.
*/
ImgEdit.prototype.InsertImageRemote = function (ServerFilePath, BeginPosition, StartPage, EndPage) {
};


/**
* ImgEdit Append Image URL Method
* Appends the specified pages from an image URL to the loaded image.
* @function
* @param {String} ImageUrl The image file URL that the pages will be appended to the loaded image.
* @param {Number} StartPage The start page group that will be appended.
* @param {Number} EndPage The end page group that will be appended.
*/
ImgEdit.prototype.AppendImageUrl = function (ImageUrl, StartPage, EndPage) {
};


/**
* ImgEdit Append Image File Method
* Appends the specified pages from an image base64 value to the loaded image.
* @function
* @param {String} ImageBase64 The image base64 value that the pages will be appended to the loaded image.
* @param {Number} StartPage The start page group that will be appended.
* @param {Number} EndPage The end page group that will be appended.
*/
ImgEdit.prototype.AppendImageFile = function (ImageBase64, StartPage, EndPage) {
};


/**
* ImgEdit Append Image Remote Method
* Appends the specified pages from a remote image file to the loaded image.
* @function
* @param {String} ServerFilePath The image server file path that the pages will be appended to the loaded image.
* @param {Number} StartPage The start page group that will be appended.
* @param {Number} EndPage The end page group that will be appended.
*/
ImgEdit.prototype.AppendImageRemote = function (ServerFilePath, StartPage, EndPage) {
};


/**
* ImgEdit Delete Page Method
* Deletes the displayed page from the loaded image.
* @function
* @param {Number} Page The page position of the loaded image that the page will be deleted.
*/
ImgEdit.prototype.DeletePage = function (Page) {
};


/**
* ImgEdit Move Page Method
* Moves the specified page image page to the specified target position.
* @function
* @param {Number} SourcePage The page position of the loaded image that will be moved.
* @param {Number} TargetPage The target page position of the loaded image.
*/
ImgEdit.prototype.MovePage = function (SourcePage, TargetPage) {
};


/**
* ImgEdit Filter Char Improvement Method
* Applies the char improvement filter to the displayed image page.
* @function
* @param {Number} Value The value of the char improvement filter.
*/
ImgEdit.prototype.FilterCharImprovement = function (Value) {
};


/**
* ImgEdit Filter Invert Method
* Applies the invert filter to the displayed image page.
* @function
*/
ImgEdit.prototype.FilterInvert = function () {
};


/**
* ImgEdit Filter Gray Scale Method
* Applies the gray scale filter to the displayed image page.
* @function
*/
ImgEdit.prototype.FilterGrayScale = function () {
};


/**
* ImgEdit Filter Gaussian Blur Method
* Applies the Gaussian blur filter to the displayed image page.
* @function
* @param {Number} Value The value of the Gaussian blur filter.
*/
ImgEdit.prototype.FilterGaussianBlur = function (Value) {
};


/**
* ImgEdit Filter Mean Removal Method
* Applies the mean removal filter to the displayed image page.
* @function
* @param {Number} Value The value of the mean removal filter.
*/
ImgEdit.prototype.FilterMeanRemoval = function (Value) {
};


/**
* ImgEdit Filter Moire Method
* Applies the moire filter to the displayed image page.
* @function
* @param {Number} Value The value of the degree of the moire filter.
*/
ImgEdit.prototype.FilterMoire = function (Value) {
};


/**
* ImgEdit Filter Random Jitter Method
* Applies the random jitter filter to the displayed image page.
* @function
* @param {Number} Value The value of the degree of the random jitter filter.
*/
ImgEdit.prototype.FilterRandomJitter = function (Value) {
};


/**
* ImgEdit Filter Median Method
* Applies the median filter to the displayed image page.
* @function
* @param {Number} Value The value of the matrix of the median filter.
*/
ImgEdit.prototype.FilterMedian = function (Value) {
};


/**
* ImgEdit Filter Black And White Method
* Applies the black and white filter to the displayed image page.
* @function
* @param {Number} Value The brightness value.
*/
ImgEdit.prototype.FilterBlackAndWhite = function (Value) {
};


/**
* ImgEdit Filter Floyd Steinberg Dithering Method
* Applies the Floyd Steinberg dithering filter to the displayed image page.
* @function
*/
ImgEdit.prototype.FilterFloydSteinbergDithering = function () {
};


/**
* ImgEdit Filter Bayer Dithering Method
* Applies the Bayer dithering filter to the displayed image page.
* @function
*/
ImgEdit.prototype.FilterBayerDithering = function () {
};


/**
* ImgEdit Filter Ordered Dithering Method
* Applies the ordered dithering filter to the displayed image page.
* @function
*/
ImgEdit.prototype.FilterOrderedDithering = function () {
};


/**
* ImgEdit Filter Pixelate Method
* Applies the pixelate filter to the displayed image page.
* @function
* @param {Number} Value The value of the pixel of the pixelate filter.
* @param {Boolean} Grid Shows or not the grid in the displayed image.
*/
ImgEdit.prototype.FilterPixelate = function (Value, Grid) {
};


/**
* ImgEdit Filter Sphere Method
* Applies the sphere filter to the displayed image page.
* @function
* @param {Boolean} AntiAlias Applies or not the filter with anti-alias.
*/
ImgEdit.prototype.FilterSphere = function (AntiAlias) {
};


/**
* ImgEdit Filter Swirl Method
* Applies the swirl filter to the displayed image page.
* @function
* @param {Number} Value The value of the degree of the moire filter.
* @param {Boolean} AntiAlias Applies or not the filter with anti-alias.
*/
ImgEdit.prototype.FilterSwirl = function (Value, AntiAlias) {
};


/**
* ImgEdit Filter Time Warp Method
* Applies the time warp filter to the displayed image page.
* @function
* @param {Number} Value The value of the factor of the time warp filter.
* @param {Boolean} AntiAlias Applies or not the filter with anti-alias.
*/
ImgEdit.prototype.FilterTimeWarp = function (Value, AntiAlias) {
};


/**
* ImgEdit Filter Water Method
* Applies the water filter to the displayed image page.
* @function
* @param {Number} Value The value of the wave of the water filter.
* @param {Boolean} AntiAlias Applies or not the filter with anti-alias.
*/
ImgEdit.prototype.FilterWater = function (Value, AntiAlias) {
};


/**
* ImgEdit Filter Smooth Method
* Applies the smooth filter to the displayed image page.
* @function
*/
ImgEdit.prototype.FilterSmooth = function () {
};


/**
* ImgEdit Filter Sharpen Method
* Applies the sharpen filter to the displayed image page.
* @function
*/
ImgEdit.prototype.FilterSharpen = function () {
};


/**
* ImgEdit Filter Brightness Method
* Applies the brightness filter to the displayed image page.
* @param {Number} Value The value of the brightness filter.
* @function
*/
ImgEdit.prototype.FilterBrightness = function (Value) {
};


/**
* ImgEdit Filter Color Method
* Applies the color filter to the displayed image page.
* @function
* @param {Number} red The red value to apply.
* @param {Number} green The green value to apply.
* @param {Number} blue The blue value to apply.
*/
ImgEdit.prototype.FilterColor = function (red, green, blue) {
};


/**
* ImgEdit Filter Contrast Method
* Applies the contrast filter to the displayed image page.
* @function
* @param {Number} Value The value of the contrast filter.
*/
ImgEdit.prototype.FilterContrast = function (Value) {
};


/**
* ImgEdit Filter Gamma Method
* Applies the gamma filter to the displayed image page.
* @function
* @param {Number} red The red value to apply.
* @param {Number} green The green value to apply.
* @param {Number} blue The blue value to apply.
*/
ImgEdit.prototype.FilterGamma = function (red, green, blue) {
};


/**
* ImgEdit Filter Edge Detect Quick Method
* Applies the edge detect quick filter to the displayed image page.
* @function
*/
ImgEdit.prototype.FilterEdgeDetectQuick = function () {
};


/**
* ImgEdit Filter Edge Difference Method
* Applies the edge difference filter to the displayed image page.
* @function
* @param {Number} Value The value of the edge difference filter.
*/
ImgEdit.prototype.FilterEdgeDifference = function (Value) {
};


/**
* ImgEdit Filter Edge Enhance Method
* Applies the edge enhance filter to the displayed image page.
* @function
* @param {Number} Value The value of the edge enhance filter.
*/
ImgEdit.prototype.FilterEdgeEnhance = function (Value) {
};


/**
* ImgEdit Filter Edge Homogeneity Method
* Applies the edge homogeneity filter to the displayed image page.
* @function
* @param {Number} Value The value of the edge homogeneity filter.
*/
ImgEdit.prototype.FilterEdgeHomogeneity = function (Value) {
};


/**
* ImgEdit Filter Edge Horizontal Method
* Applies the edge horizontal filter to the displayed image page.
* @function
*/
ImgEdit.prototype.FilterEdgeHorizontal = function () {
};


/**
* ImgEdit Filter Edge Kirsh Method
* Applies the edge kirsh filter to the displayed image page.
* @function
* @param {Number} Value The value of the edge kirsh filter.
*/
ImgEdit.prototype.FilterEdgeKirsh = function (Value) {
};


/**
* ImgEdit Filter Edge Prewitt Method
* Applies the edge prewitt filter to the displayed image page.
* @param {Number} Value The value of the edge prewitt filter.
*/
ImgEdit.prototype.FilterEdgePrewitt = function (Value) {
};


/**
* ImgEdit Filter Edge Sobell Method
* Applies the edge sobell filter to the displayed image page.
* @function
* @param {Number} Value The value of the edge sobell filter.
*/
ImgEdit.prototype.FilterEdgeSobell = function (Value) {
};


/**
* ImgEdit Filter Edge Vertical Method
* Applies the edge vertical filter to the displayed image page.
* @function
*/
ImgEdit.prototype.FilterEdgeVertical = function () {
};


/**
* ImgEdit Filter Auto Threshold Method
* Applies the auto threshold filter to the displayed image page.
* @function
*/
ImgEdit.prototype.FilterAutoThreshold = function () {
};


/**
* ImgEdit Filter Despeckle Method
* Applies the despeckle filter to the displayed image page.
* @function
* @param {Boolean} Extensive Do an extensive image despeckle processing.
*/
ImgEdit.prototype.FilterDespeckle = function (Extensive) {
};

/**
* ImgEdit Filter Open Morphology Method
* Applies the open morphology filter to the displayed image page.
* @function
* @param {Number} matrix The matrix size value. Acceptable values are: 3, 5, 7, 9, 11, 13, 15 and 17.
* @param {Boolean} applyBlue [Optional] Apply to the blue channel.
* @param {Boolean} applyGreen [Optional] Apply to the green channel.
* @param {Boolean} applyRed [Optional] Apply to the red channel.
*/
ImgEdit.prototype.FilterOpenMorphology = function (matrix, applyBlue, applyGreen, applyRed) {
};

/**
* ImgEdit Filter Close Morphology Method
* Applies the close morphology filter to the displayed image page.
* @function
* @param {Number} matrix The matrix size value. Acceptable values are: 3, 5, 7, 9, 11, 13, 15 and 17.
* @param {Boolean} applyBlue [Optional] Apply to the blue channel.
* @param {Boolean} applyGreen [Optional] Apply to the green channel.
* @param {Boolean} applyRed [Optional] Apply to the red channel.
*/
ImgEdit.prototype.FilterCloseMorphology = function (matrix, applyBlue, applyGreen, applyRed) {
};

/**
* ImgEdit Filter Dilate Method
* Applies the dilate filter to the displayed image page.
* @function
* @param {Number} matrix The matrix size value. Acceptable values are: 3, 5, 7, 9, 11, 13, 15 and 17.
* @param {Boolean} applyBlue [Optional] Apply to the blue channel.
* @param {Boolean} applyGreen [Optional] Apply to the green channel.
* @param {Boolean} applyRed [Optional] Apply to the red channel.
*/
ImgEdit.prototype.FilterDilate = function (matrix, applyBlue, applyGreen, applyRed) {
};

/**
* ImgEdit Filter Erode Method
* Applies the erode filter to the displayed image page.
* @function
* @param {Number} matrix The matrix size value. Acceptable values are: 3, 5, 7, 9, 11, 13, 15 and 17.
* @param {Boolean} applyBlue [Optional] Apply to the blue channel.
* @param {Boolean} applyGreen [Optional] Apply to the green channel.
* @param {Boolean} applyRed [Optional] Apply to the red channel.
*/
ImgEdit.prototype.FilterErode = function (matrix, applyBlue, applyGreen, applyRed) {
};

/**
* ImgEdit Filter Cartoon Method
* Applies the cartoon filter to the displayed image page.
* @function
* @param {Number} filterSize The filter size value represents the number of neighbouring pixels used in calculating each individual pixel value.
* @param {Number} threshold The filter threshold determining whether a pixel forms part of an Image Edge.
*/
ImgEdit.prototype.FilterCartoon = function (filterSize, threshold) {
};

/**
* ImgEdit Filter Oil Paint Method
* Applies the oil paint filter to the displayed image page.
* @function
* @param {Number} brushSize The filter brush size.
*/
ImgEdit.prototype.FilterOilPaint = function (brushSize) {
};

/**
* ImgEdit Hole Punch Removal Method
* Applies the hole punch removal to the displayed image page.
* @function
* @param {String} fillColor [Optional] The hole fill hex color or null to an automatic color fill.
* @param {Number} minSize The minimum hole size.
*/
ImgEdit.prototype.HolePunchRemoval = function (fillColor, minSize) {
};

/**
* ImgEdit Search Text Method
* Reads and searches the specified page for the word or phrase and highlighting the value.
* @function
* @param {String} Value The text value to search.
* @param {Number} PageNumber The page index position to search.
* @param {Boolean} MatchAllWord Match all word.
* @param {Boolean} MatchCase Match case.
* @param {Boolean} SearchUp Searches the text from finish to the beginning.
*/
ImgEdit.prototype.SearchText = function (Value, PageNumber, MatchAllWord, MatchCase, SearchUp) {
};


/**
* ImgEdit Next Text Search Method
* Reads and searches the image for the next specified word or phrase and highlighting the value.
* @function
* @param {ImgEdit.ICImageOCRLanguages} MatchAllWord OCR language.
* @param {Boolean} MatchCase Search text with match case or not.
* @param {Boolean} SearchUp Search text up or down.
*/
ImgEdit.prototype.NextTextSeach = function (MatchAllWord, MatchCase, SearchUp) {
};


/**
* ImgEdit Clear Text Search Method
* Clears the previous highlight search values.
* @function
*/
ImgEdit.prototype.ClearTextSearch = function () {
};


/**
* ImgEdit OCR Image Method
* Converts the content of the displayed image to text.
* @function
* @param {ImgEdit.ICImageOCRLanguages} imageOCRLanguage OCR language.
* @param {ImgEdit.ICImageOCRType} imageOCRType The OCR reader type.
* @param {ImgEdit.ICImageOCRPageType} imageOCRPageType The object type the OCR will read.
*/
ImgEdit.prototype.OCRImage = function (imageOCRLanguage, imageOCRType, imageOCRPageType) {
};


/**
* ImgEdit OCR Image Abort Method
* Aborts the current image OCR process.
* @function
*/
ImgEdit.prototype.OCRImageAbort = function () {
};


/**
* ImgEdit Burn Annotations Method
* Burns all annotations in the loaded image.
* @function
*/
ImgEdit.prototype.BurnAnnotations = function () {
};


/**
* ImgEdit Burn Page Annotations Method
* Burns the existent annotations in a specified image page.
* @function
* @param {Number} PageNumber The specified page to burn annotations.
*/
ImgEdit.prototype.BurnPageAnnotations = function (PageNumber) {
};


/**
* ImgEdit Save Image As Method
* Saves the selected image page to a file with a specific image format and image compression.
* @function
* @param {String} serverFilePath The image server file path to save.
* @param {ImgEdit.ICImageOutputFormat} saveImageFormat The available save image format enumeration.
* @param {ImgEdit.ICImageCompression} saveImageCompression The available save image compression enumeration.
* @param {ImgEdit.ICImageSavePageOptions} pageOptions The available save image page options enumeration.
*/
ImgEdit.prototype.SaveImageAs = function (serverFilePath, saveImageFormat, saveImageCompression, pageOptions) {
};


/**
* ImgEdit Print Method
* Prints the loaded image.
* @function
* @param {ImgEdit.ICImgPrintValues} printValues The print settings values.
*/
ImgEdit.prototype.Print = function (printValues) {
};


/**
* ImgEdit Close Method
* Closes the image from the display and from the memory.
* @function
*/
ImgEdit.prototype.Close = function () {
};


/**
* ImgEdit Dispose Method
* Releases all the in use ImgEdit memory objects.
* @function
*/
ImgEdit.prototype.Dispose = function () {
};

/**
* Service connection status enumeration.
* @readonly
* @enum {number}
*/
ImgEdit.ICConnectionStatus = {
    /** Not connected */
    NOTCONNECTED: 0,
    /** Connecting. */
    CONNECTING: 1,
    /** Connected. */
    CONNECTED: 2,
    /** Connection ping. */
    CONNECTIONPING: 3,
    /** Connection error. */
    CONNECTIONERROR: 4,
    /** Reconnecting. */
    RECONNECTING: 5
};

/**
* Display image fit enumeration.
* @readonly
* @enum {number}
*/
ImgEdit.ICImageFit = {
    /** No fit specified.  */
    NONE: -1,
    /** Best fit image display.  */
    BESTFIT: 0,
    /** Fit to width image display.  */
    FITTOWIDTH: 1,
    /** Fit to height image display.  */
    FITTOHEIGHT: 2,
    /** Original size image display.  */
    ORIGINALSIZE: 3
};

/**
* Image size templates enumeration.
* @readonly
* @enum {number}
*/
ImgEdit.ICImageSizeTemplate = {
    /** 9x11 Image size template.  */
    Template_9x11: 1,
    /** 10x11 Image size template.  */
    Template_10x11: 2,
    /** 10x14 Image size template.  */
    Template_10x14: 3,
    /** 12x11 Image size template.  */
    Template_12x11: 4,
    /** 15x11 Image size template.  */
    Template_15x11: 5,
    /** A0 Image size template.  */
    Template_A0: 6,
    /** A1 Image size template.  */
    Template_A1: 7,
    /** A2 Image size template.  */
    Template_A2: 8,
    /** A3 Image size template.  */
    Template_A3: 9,
    /** A3 Extra Image size template.  */
    Template_A3_Extra: 10,
    /** A3 Rotated Image size template.  */
    Template_A3_Rotated: 11,
    /** A4 Image size template.  */
    Template_A4: 12,
    /** A4 Extra Image size template.  */
    Template_A4_Extra: 13,
    /** A4 Plus Image size template.  */
    Template_A4_Plus: 14,
    /** A4 Rotated Image size template.  */
    Template_A4_Rotated: 15,
    /** A5 Image size template.  */
    Template_A5: 16,
    /** A5 Extra Image size template.  */
    Template_A5_Extra: 17,
    /** A5 Rotated Image size template.  */
    Template_A5_Rotated: 18,
    /** A6 Image size template.  */
    Template_A6: 19,
    /** A6 Rotated Image size template.  */
    Template_A6_Rotated: 20,
    /** B0 ISO (1000 x 1414 mm) Image size template.  */
    Template_B0_ISO_1000x1414mm: 21,
    /** B0 JIS (1030 x 1456 mm) Image size template.  */
    Template_B0_JIS_1030x1456mm: 22,
    /** B1 ISO (707 x 1000 mm) Image size template.  */
    Template_B1_ISO_707x1000mm: 23,
    /** B1 JIS (728 x 1030 mm) Image size template.  */
    Template_B1_JIS_728x1030mm: 24,
    /** B2 ISO (500 x 707 mm) Image size template.  */
    Template_B2_ISO_500x707mm: 25,
    /** B2 JIS (515 x 728 mm) Image size template.  */
    Template_B2_JIS_515x728mm: 26,
    /** B3 ISO (353 x 500 mm) Image size template.  */
    Template_B3_ISO_353x500mm: 27,
    /** B3 JIS (364 x 515 mm) Image size template.  */
    Template_B3_JIS_364x515mm: 28,
    /** B4 (ISO) Image size template.  */
    Template_B4_ISO: 29,
    /** B4 (JIS) Image size template.  */
    Template_B4_JIS: 30,
    /** B4 (JIS) Rotated Image size template.  */
    Template_B4_JIS_Rotated: 31,
    /** B5 (JIS) Image size template.  */
    Template_B5_JIS: 32,
    /** B5 (JIS) Rotated Image size template.  */
    Template_B5_JIS_Rotated: 33,
    /** B6 (JIS) Image size template.  */
    Template_B6_JIS: 34,
    /** B6 (JIS) Rotated Image size template.  */
    Template_B6_JIS_Rotated: 35,
    /** C size sheet Image size template.  */
    Template_C_size_sheet: 36,
    /** D size sheet Image size template.  */
    Template_D_size_sheet: 37,
    /** E size sheet Image size template.  */
    Template_E_size_sheet: 38,
    /** Envelope Image size template.  */
    Template_Envelope: 39,
    /** Envelope #9 Image size template.  */
    Template_Envelope_9: 40,
    /** Envelope #10 Image size template.  */
    Template_Envelope_10: 41,
    /** Envelope #11 Image size template.  */
    Template_Envelope_11: 42,
    /** Envelope #12 Image size template.  */
    Template_Envelope_12: 43,
    /** Envelope #14 Image size template.  */
    Template_Envelope_14: 44,
    /** Envelope DL Image size template.  */
    Template_Envelope_DL: 45,
    /** Envelope C3 Image size template.  */
    Template_Envelope_C3: 46,
    /** Envelope C4 Image size template.  */
    Template_Envelope_C4: 47,
    /** Envelope C5 Image size template.  */
    Template_Envelope_C5: 48,
    /** Envelope C6 Image size template.  */
    Template_Envelope_C6: 49,
    /** Envelope C65 Image size template.  */
    Template_Envelope_C65: 50,
    /** Envelope B4 Image size template.  */
    Template_Envelope_B4: 51,
    /** Envelope B5 Image size template.  */
    Template_Envelope_B5: 52,
    /** Envelope B6 Image size template.  */
    Template_Envelope_B6: 53,
    /** Envelope Monarch Image size template.  */
    Template_Envelope_Monarch: 54,
    /** Envelope Invite Image size template.  */
    Template_Envelope_Invite: 55,
    /** Executive Image size template.  */
    Template_Executive: 56,
    /** Folio Image size template.  */
    Template_Folio: 57,
    /** F size sheet Image size template.  */
    Template_F_size_sheet: 58,
    /** Japanese Postcard Image size template.  */
    Template_Japanese_Postcard: 59,
    /** Japanese Double Postcard Image size template.  */
    Template_Japanese_Double_Postcard: 60,
    /** Ledger Image size template.  */
    Template_Ledger: 61,
    /** Legal Image size template.  */
    Template_Legal: 62,
    /** Legal Extra Image size template.  */
    Template_Legal_Extra: 63,
    /** Letter Image size template.  */
    Template_Letter: 64,
    /** Letter Plus Image size template.  */
    Template_Letter_Plus: 65,
    /** Letter Extra Image size template.  */
    Template_Letter_Extra: 66,
    /** Quarto Image size template.  */
    Template_Quarto: 67,
    /** Square 64 x 64 mm Image size template.  */
    Template_Square_64x64mm: 68,
    /** Square 128 x 128 mm Image size template.  */
    Template_Square_128x128mm: 69,
    /** Square 256 x 256 mm Image size template.  */
    Template_Square_256x256mm: 70,
    /** Square 512 x 512 mm Image size template.  */
    Template_Square_512x512mm: 71,
    /** Statement Image size template.  */
    Template_Statement: 72,
    /** SuperA Image size template.  */
    Template_SuperA: 73,
    /** SuperB Image size template.  */
    Template_SuperB: 74,
    /** Tabloid Image size template.  */
    Template_Tabloid: 75,
    /** Tabloid Extra Image size template.  */
    Template_Tabloid_Extra: 76,
    /** US Std Fanfold Image size template.  */
    Template_US_Std_Fanfold: 77
};

/**
* Image dpi size enumeration.
* @readonly
* @enum {number}
*/
ImgEdit.ICImageDPISize = {
    /** 72 dpi image size.  */
    DPI_72: 72,
    /** 96 dpi image size.  */
    DPI_96: 96,
    /** 100 dpi image size.  */
    DPI_100: 100,
    /** 150 dpi image size.  */
    DPI_150: 150,
    /** 200 dpi image size.  */
    DPI_200: 200,
    /** 300 dpi image size.  */
    DPI_300: 300,
    /** 600 dpi image size.  */
    DPI_600: 600,
    /** 1200 dpi image size.  */
    DPI_1200: 1200
};

/**
* Image input Format enumeration.
* @readonly
* @enum {number}
*/
ImgEdit.ICImageFormat = {
    /** Unknown format.  */
    UNKNOWN: -1,
    /** Windows or OS/2 Bitmap File (*.BMP).  */
    BMP: 0,
    /** Windows Icon (*.ICO).  */
    ICO: 1,
    /** Independent JPEG Group (*.JPG, *.JIF, *.JPEG, *.JPE).  */
    JPEG: 2,
    /** JPEG Network Graphics (*.JNG).  */
    JNG: 3,
    /** Commodore 64 Koala format (*.KOA).  */
    KOALA: 4,
    /** Amiga IFF (*.IFF, *.LBM).  */
    LBM: 5,
    /** Amiga IFF (*.IFF, *.LBM).  */
    IFF: 5,
    /** Multiple Network Graphics (*.MNG).  */
    MNG: 6,
    /** Portable Bitmap (ASCII) (*.PBM).  */
    PBM: 7,
    /** Portable Bitmap (BINARY) (*.PBM).  */
    PBMRAW: 8,
    /** Kodak PhotoCD (*.PCD).  */
    PCD: 9,
    /** Zsoft Paintbrush PCX bitmap format (*.PCX).  */
    PCX: 10,
    /** Portable Graymap (ASCII) (*.PGM).  */
    PGM: 11,
    /** Portable Graymap (BINARY) (*.PGM).  */
    PGMRAW: 12,
    /** Portable Network Graphics (*.PNG).  */
    PNG: 13,
    /** Portable Pixelmap (ASCII) (*.PPM).  */
    PPM: 14,
    /** Portable Pixelmap (BINARY) (*.PPM).  */
    PPMRAW: 15,
    /** Sun Rasterfile (*.RAS).  */
    RAS: 16,
    /** Truevision Targa files (*.TGA, *.TARGA).  */
    TARGA: 17,
    /** Tagged Image File Format (*.TIF, *.TIFF).  */
    TIFF: 18,
    /** Wireless Bitmap (*.WBMP).  */
    WBMP: 19,
    /** Adobe Photoshop (*.PSD).  */
    PSD: 20,
    /** Dr. Halo (*.CUT)
    CUT: 21,
    /** X11 Bitmap Format (*.XBM).  */
    XBM: 22,
    /** X11 Pixmap Format (*.XPM).  */
    XPM: 23,
    /** DirectDraw Surface (*.DDS).  */
    DDS: 24,
    /** Graphics Interchange Format (*.GIF).  */
    GIF: 25,
    /** High Dynamic Range (*.HDR).  */
    HDR: 26,
    /** Raw Fax format CCITT G3 (*.G3).  */
    FAXG3: 27,
    /** Silicon Graphics SGI image format (*.SGI).  */
    SGI: 28,
    /** OpenEXR format (*.EXR).  */
    EXR: 29,
    /** JPEG-2000 format (*.J2K, *.J2C).  */
    J2K: 30,
    /** JPEG-2000 format (*.JP2).  */
    JP2: 31,
    /** Portable FloatMap (*.PFM).  */
    PFM: 32,
    /** PDF format (*.PDF).  */
    PDF: 40,
    /** XPS format (*.XPS).  */
    XPS: 41,
    /** WMF format (*.WMF).  */
    WMF: 42
};

/**
* Image output format enumeration.
* @readonly
* @enum {number}
*/
ImgEdit.ICImageOutputFormat = {
    /** Unknown output format.  */
    UNKNOWN: -1,
    /** Default output format.  */
    DEFAULT: -2,
    /** Windows or OS/2 Bitmap File (*.BMP).  */
    BMP: 0,
    /** Windows Icon (*.ico).  */
    ICO: 1,
    /** JPEG output format. */
    JPEG: 2,
    /** JPEG Network Graphics (*.jng).  */
    JNG: 3,
    /** Portable Bitmap (ASCII) (*.pbm).  */
    PBM: 7,
    /** Portable Graymap (ASCII) (*.pgm).  */
    PGM: 11,
    /** PNG output format. */
    PNG: 13,
    /** Portable Pixelmap (ASCII) (*.ppm).  */
    PPM: 14,
    /** truevision Targa files (*.tga, *.targa).  */
    TARGA: 17,
    /** TIFF output format. */
    TIFF: 18,
    /** Wireless Bitmap (*.wbmp).  */
    WBMP: 19,
    /** X11 Pixmap Format (*.xpm).  */
    XPM: 23,
    /** GIF output format.  */
    GIF: 25,
    /** JPEG-2000 format (*.j2k, *.j2c).  */
    J2K: 30,
    /** Portable FloatMap (*.pfm).  */
    PFM: 32,
    /** Web P files (*.webp*).  */
    WEBP: 35,
    /** JPEG-XR files (*.jxr*).  */
    JXR: 36,
    /** PDF image output format.  */
    PDF: 40
};

/**
* Selection type enumeration.
* @readonly
* @enum {number}
*/
ImgEdit.ICSelectionType = {
    /** No selection.  */
    NONE: 0,
    /** Draw selection.  */
    SELECTION: 1,
    /** Zoom selection.  */
    ZOOMSELECTION: 2,
    /** Clear selection.  */
    CLEARSELECTION: 3,
    /** Crop selection.  */
    CROPSELECTION: 4,
    /** Hand pan selection.  */
    HANDPAN: 5,
    /** Magnifying glass selection.  */
    MAGNIFYINGGLASS: 6,
    /** Annotation selection.  */
    ANNOTATIONSELECTION: 7,
    /** Text selection.  */
    TEXTSELECTION: 8
};

/**
* Image Compression enumeration.
* @readonly
* @enum {number}
*/
ImgEdit.ICImageCompression = {
    /** Unknown compression.  */
    UNKNOWN: -1,
    /** Default compression.  */
    DEFAULT: 0,
    /** None save compression.  */
    NONE: 1,
    /** RLE save compression.  */
    RLE: 2,
    /** CCITT3 save compression.  */
    CCITT3: 3,
    /** CCITT4 save compression.  */
    CCITT4: 4,
    /** LZW save compression.  */
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
* Image save page options enumeration.
* @readonly
* @enum {number}
*/
ImgEdit.ICImageSavePageOptions = {
    /** A specific page.  */
    PAGE: 0,
    /** A range of pages.  */
    RANGE: 1,
    /** All pages.  */
    ALL: 2
};

/**
* Image OCR languages enumeration.
* @readonly
* @enum {number}
*/
ImgEdit.ICImageOCRLanguages = {
    /** English OCR Language.  */
    English: 0,
    /** French OCR Language.  */
    French: 1,
    /** Italian OCR Language.  */
    Italian: 2,
    /** German OCR Language.  */
    German: 3,
    /** Spanish OCR Language.  */
    Spanish: 4,
    /** Dutch OCR Language.  */
    Dutch: 5,
    /** Portuguese OCR Language.  */
    Portuguese: 6,
    /** Ukrainian OCR Language.  */
    Ukrainian: 7,
    /** Turkish OCR Language.  */
    Turkish: 8,
    /** Thai OCR Language.  */
    Thai: 9,
    /** Swedish OCR Language.  */
    Swedish: 10,
    /** Swahili OCR Language.  */
    Swahili: 11,
    /** Serbian OCR Language.  */
    Serbian: 12,
    /** Albanian OCR Language.  */
    Albanian: 13,
    /** Slovenian OCR Language.  */
    Slovenian: 14,
    /** Slovakian OCR Language.  */
    Slovakian: 15,
    /** Romanian OCR Language.  */
    Romanian: 16,
    /** Polish OCR Language.  */
    Polish: 17,
    /** Norwegian OCR Language.  */
    Norwegian: 18,
    /** Lithuanian OCR Language.  */
    Lithuanian: 19,
    /** Korean OCR Language.  */
    Korean: 20,
    /** Kannada OCR Language.  */
    Kannada: 21,
    /** Icelandic OCR Language.  */
    Icelandic: 22,
    /** Indonesian OCR Language.  */
    Indonesian: 23,
    /** Hindi OCR Language.  */
    Hindi: 24,
    /** Hungarian OCR Language.  */
    Hungarian: 25,
    /** Croatian OCR Language.  */
    Croatian: 26,
    /** Hebrew OCR Language.  */
    Hebrew: 27,
    /** Galician OCR Language.  */
    Galician: 28,
    /** Finnish OCR Language.  */
    Finnish: 29,
    /** Basque OCR Language.  */
    Basque: 30,
    /** Estonian OCR Language.  */
    Estonian: 31,
    /** Esperanto OCR Language.  */
    Esperanto: 32,
    /** Greek OCR Language.  */
    Greek: 33,
    /** Danish OCR Language.  */
    Danish: 34,
    /** Czech OCR Language.  */
    Czech: 35,
    /** Catalan OCR Language.  */
    Catalan: 36,
    /** Bulgarian OCR Language.  */
    Bulgarian: 37,
    /** Belorussian OCR Language.  */
    Belarusian: 38,
    /** Azerbaijan OCR Language.  */
    Azerbaijani: 39,
    /** Arabic OCR Language.  */
    Arabic: 40,
    /** Afrikaans OCR Language.  */
    Afrikaans: 41,
    /** Japanese OCR Language.  */
    Japanese: 42,
    /** Chinese Simplified OCR Language.  */
    Chinese_Simplified: 43,
    /** Chinese Traditional OCR Language.  */
    Chinese_Traditional: 44,
    /** Russian OCR Language.  */
    Russian: 45,
    /** Vietnamese OCR Language.  */
    Vietnamese: 46,
    /** Frankish OCR Language.  */
    Frankish: 47,
    /** Math Equation OCR Language.  */
    Math_Equation: 48,
    /** MIRC encoding font OCR Language.  */
    MIRCE: 98,
    /** MIRC OCR Language.  */
    MIRC: 99
};

/**
* Image OCR type enumeration.
* @readonly
* @enum {number}
*/
ImgEdit.ICImageOCRType = {
    /** Run Tesseract only OCR type - legacy.  */
    OEM_TESSERACT_ONLY: 0,
    /** Cube only OCR type - better accuracy, but slower.  */
    OEM_CUBE_LSTM_ONLY: 1,
    /** Combine results OCR type - best accuracy.  */
    OEM_CUBE_LSTM_COMBINED: 2,
    /** Default OCR type.  */
    OEM_DEFAULT: 3
};

/**
* Image OCR page type enumerations.
* @readonly
* @enum {number}
*/
ImgEdit.ICImageOCRPageType = {
    /** All pages OCR.  */
    AllPages: 0,
    /** Selected page OCR.  */
    SelectedPage: 1,
    /** Page selection OCR.  */
    PageSelection: 2,
    /** Image Zone OCR.  */
    ImageZoneOCR: 3
};

/**
* Image print options enumeration.
* @readonly
* @enum {number}
*/
ImgEdit.ICImagePrintOptions = {
    /** All pages OCR.  */
    ActualSize: 0,
    /** Selected page OCR.  */
    FitToPage: 2
};

/**
* Image print page options enumeration.
* @readonly
* @enum {number}
*/
ImgEdit.ICImagePrintPageOptions = {
    /** A specific page.  */
    Page: 0,
    /** A range of pages.  */
    Range: 1,
    /** All pages.  */
    All: 2,
    /** Selected page.  */
    Selected: 3
};

/**
* Image JPEG flags enumeration.
* @readonly
* @enum {number}
*/
ImgEdit.ICJPEGImageFlags = {
    /** Save with quality.  */
    JPEGQUALITY: 0,
    /** Save as a progressive-JPEG (use | to combine with other save flags).  */
    JPEGPROGRESSIVE: 0x2000,
    /** Save with high 4x1 chroma sub sampling (4:1:1).  */
    JPEGSUBSAMPLING411: 0x1000,
    /** Save with medium 2x2 medium chroma (4:2:0).  */
    JPEGSUBSAMPLING420: 0x4000,
    /** Save with low 2x1 chroma sub sampling (4:2:2).  */
    JPEGSUBSAMPLING422: 0x8000,
    /** Save with no chroma sub sampling (4:4:4).  */
    JPEGSUBSAMPLING444: 0x10000,
    /** On saving, compute optimal Huffman coding tables (can reduce a few percent of file size).  */
    JPEGOPTIMIZE: 0x20000,
    /** save basic JPEG, without meta data or any markers.  */
    JPEGBASELINE: 0x40000
};

/**
* Image PNG flags enumeration.
* @readonly
* @enum {number}
*/
ImgEdit.ICPNGImageFlags = {
    /** Default image flag.  */
    DEFAULT: 6,
    /** Best speed image flag.  */
    BESTSPEED: 1,
    /** Best compression image flag.  */
    BESTCOMPRESSION: 9,
    /** No compression image flag.  */
    NOCOMPRESSION: 256,
    /** Interlaced image flag.  */
    INTERLACED: 512
};

/**
* Image Input/Output type enumeration.
* @readonly
* @enum {number}
*/
ImgEdit.ICImageIOType = {
    /** None output type.  */
    None: 0,
    /** Local output type.  */
    Local: 1,
    /** Remote output type.  */
    Remote: 2,
    /** URL Output type.  */
    Url: 3,
    /** FTP output type.  */
    FTP: 4,
    /** Database output type.  */
    Database: 4
};

/*!
 * The Image Components print values class.
 * Creates a new print values instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgEdit.ICImgPrintValues = function () {
    /**
    * ImgEdit.PrintValues Page Count Property
    * @type {Number}
    * @property {Number} PageCount Gets or sets the print page size.
    * @param {Number} value Sets the print page size.
    * @return {Number} Gets the print page size.
    */
    this.PrintPageSize = 0;
    /**
    * ImgEdit.PrintValues Print With Annotations Property
    * @type {Boolean}
    * @property {Boolean} PrintWithAnnotations Gets or sets the print image with or without annotations.
    * @param {Boolean} value Sets the print image with or without annotations.
    * @return {Boolean} Gets the print image with or without annotations.
    */
    this.PrintWithAnnotations = false;
    /**
     * ImgEdit.PrintValues Image Print Fit Options Property
     * @type {Number}
     * @property {Number} ImagePrintFitOptions Gets or sets the image print fit options.
     * @param {Number} value Sets the ImagePrintFitOptions value.
     * @return {Number} Gets the ImagePrintFitOptions value.
     */
    this.ImagePrintFitOptions = 0;
    /**
    * ImgEdit.PrintValues Image Print Page Options Property
    * @type {Number}
    * @property {Number} ImagePrintPageOptions Gets or sets the image print page options.
    * @param {Number} value Sets the ImagePrintPageOptions value.
    * @return {Number} Gets the ImagePrintPageOptions value.
    */
    this.ImagePrintPageOptions = 0;
    /**
    * ImgEdit.PrintValues Print Page Property
    * @type {Number}
    * @property {Number} PrintPage Gets or sets the print page number.
    * @param {Number} value Sets the PrintPage value.
    * @return {Number} Gets the PrintPage value.
    */
    this.PrintPage = 0;
    /**
    * ImgEdit.PrintValues Print Page Range Property
    * @type {Number[]}
    * @property {Number[]} PrintPageRange Gets or sets the print page range collection.
    * @param {Number[]} value Sets the PrintPageRange value.
    * @return {Number[]} Gets the PrintPageRange value.
    */
    this.PrintPageRange = [];
    /**
    * ImgEdit.PrintValues Print To PDF Property
    * @type {Boolean}
    * @property {Boolean} PrintToPDF Gets or sets the print image to PDF.
    * @param {Boolean} value Sets the PrintToPDF value.
    * @return {Boolean} Gets the PrintToPDF value.
    */
    this.PrintToPDF = false;
};

/*!
 * The Image Components progress arguments class.
 * Creates a new progress arguments instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgEdit.ICProgressArgs = function () {
    /**
    * ImgEdit.ICProgressArgs Value Property
    * @readonly
    * @type {Number}
    * @property {Number} Value Gets the progress value.
    * @return {Number} Gets the progress value.
    */
    this.Value = 0;
    /**
    * ImgEdit.ICProgressArgs Max Value Property
    * @readonly
    * @type {Number}
    * @property {Number} MaxValue Gets the progress maximum value.
    * @return {Number} Gets the progress maximum value.
    */
    this.MaxValue = 0;
    /**
    * ImgEdit.ICProgressArgs Message Property
    * @readonly
    * @type {String}
    * @property {String} Message Gets the progress message.
    * @return {String} Gets the progress message.
    */
    this.Message = "";
};

/*!
 * The Image Components rectangle class.
 * Creates a new rectangle instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgEdit.ICRectangle = function () {
    /**
    * ImgEdit.ICRectangle X Property
    * @type {Number}
    * @property {Number} x Gets or sets the rectangle X value.
    * @param {Number} value Sets the rectangle X value.
    * @return {Number} Gets the rectangle X value.
    */
    this.x = 0;
    /**
    * ImgEdit.ICRectangle Y Property
    * @type {Number}
    * @property {Boolean} y Gets or sets the rectangle Y value.
    * @param {Boolean} value Sets the rectangle Y value.
    * @return {Boolean} Gets the rectangle Y value.
    */
    this.y = false;
    /**
     * ImgEdit.ICRectangle Width Property
     * @type {Number}
     * @property {Number} width Gets or sets the rectangle Width value.
     * @param {Number} value Sets the rectangle Width value.
     * @return {Number} Gets the rectangle Width value.
     */
    this.width = 0;
    /**
    * ImgEdit.ICRectangle Height Property
    * @type {Number}
    * @property {Number} height Gets or sets the rectangle Height value.
    * @param {Number} value Sets the rectangle Height value.
    * @return {Number} Gets the rectangle Height value.
    */
    this.height = 0;
};

/*!
 * The Image Components point class.
 * Creates a new point instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgEdit.ICPoint = function () {
    /**
    * ImgEdit.ICPoint X Property
    * @type {Number}
    * @property {Number} x Gets or sets the point X value.
    * @param {Number} value Sets the point X value.
    * @return {Number} Gets the point X value.
    */
    this.x = 0;
    /**
    * ImgEdit.ICPoint Y Property
    * @type {Number}
    * @property {Boolean} y Gets or sets the point Y value.
    * @param {Boolean} value Sets the point Y value.
    * @return {Boolean} Gets the point Y value.
    */
    this.y = false;
};

/*!
 * The Image Components size class.
 * Creates a new size instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgEdit.ICSize = function () {
    /**
     * ImgEdit.ICSize Width Property
     * @type {Number}
     * @property {Number} width Gets or sets the Size Width value.
     * @param {Number} value Sets the rectangle Size value.
     * @return {Number} Gets the rectangle Size value.
     */
    this.width = 0;
    /**
    * ImgEdit.ICSize Height Property
    * @type {Number}
    * @property {Number} height Gets or sets the Size Height value.
    * @param {Number} value Sets the Size Height value.
    * @return {Number} Gets the Size Height value.
    */
    this.height = 0;
};

/*!
 * The Image Components server folder files class.
 * Creates a new server folder files instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgEdit.ServerFolderFiles = function () {
    /**
     * ImgEdit.ServerFolderFiles Name Property
     * @readonly
     * @type {String}
     * @property {String} Name Gets or sets the server folder file name.
     * @return {String} Gets the server folder file name.
     */
    this.Name = null;
    /**
    * ImgEdit.ServerFolderFiles Full Name Property
    * @readonly
    * @type {String}
    * @property {String} FullName Gets or sets the server folder file full name.
    * @return {String} Gets the server folder file full name.
    */
    this.FullName = null;
    /**
    * ImgEdit.ServerFolderFiles Extension Property
    * @readonly
    * @type {String}
    * @property {String} Name Gets or sets the server folder file extension.
    * @return {String} Gets the server folder file extension.
    */
    this.Extension = null;
};

/*!
 * The Image Components image properties class.
 * Creates a new image properties instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgEdit.ImageProperties = function () {
    /**
     * ImgEdit.ImageProperties Image File Path Property
     * @readonly
     * @type {String}
     * @property {String} ImageFilePath Gets or sets the image file path value.
     * @return {String} Gets the image file path value.
     */
    this.ImageFilePath = null;
    /**
     * ImgEdit.ImageProperties Image File Directory Property
     * @readonly
     * @type {String}
     * @property {String} ImageFileDirectory Gets or sets the image file directory value.
     * @return {String} Gets the image file directory value.
     */
    this.ImageFileDirectory = null;
    /**
     * ImgEdit.ImageProperties Image File Name Property
     * @readonly
     * @type {String}
     * @property {String} ImageFileName Gets or sets the image file name value.
     * @return {String} Gets the image file name value.
     */
    this.ImageFileName = null;
    /**
     * ImgEdit.ImageProperties Image File Extension Property
     * @readonly
     * @type {String}
     * @property {String} ImageFileExtension Gets or sets the image file extension value.
     * @return {String} Gets the image file extension value.
     */
    this.ImageFileExtension = null;
    /**
     * ImgEdit.ImageProperties Image File Size Property
     * @readonly
     * @type {Number}
     * @property {Number} ImageFileSize Gets or sets the image file size value.
     * @return {Number} Gets the image file size value.
     */
    this.ImageFileSize = 0;
    /**
     * ImgEdit.ImageProperties Image File Format Property
     * @readonly
     * @type {ImgEdit.ICImageFormat}
     * @property {ImgEdit.ICImageFormat} ImageFileFormat Gets or sets the image file format value.
     * @return {ImgEdit.ICImageFormat} Gets the image file format value.
     */
    this.ImageFileFormat = ImgEdit.ICImageFormat.UNKNOWN;
};

/*!
 * The Image Components page properties class.
 * Creates a new page properties instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgEdit.PageProperties = function () {
    /**
     * ImgEdit.PageProperties Bits Per Sample Property
     * @readonly
     * @type {Number}
     * @property {Number} BitsPerSample Gets or sets the image page bits per sample value.
     * @param {Number}   value Sets the image page bits per sample value.
     * @return {Number} Gets the image page bits per sample value.
     */
    this.BitsPerSample = 0;
    /**
    * ImgEdit.PageProperties Compression Property
    * @readonly
    * @type {ImgEdit.ICImageCompression}
    * @property {ImgEdit.ICImageCompression} Compression Gets or sets the image page compression value.
    * @param {ImgEdit.ICImageCompression} value Sets the image page compression value.
    * @return {ImgEdit.ICImageCompression} Gets the image page compression value.
    */
    this.Compression = ImgEdit.ICImageCompression.DEFAULT;
    /**
    * ImgEdit.PageProperties Height Property
    * @readonly
    * @type {Number}
    * @property {Number} Height Gets or sets the image page height value.
    * @return {Number} Gets the image page height value.
    */
    this.Height = 0;
    /**
    * ImgEdit.PageProperties Image Format Property
    * @readonly
    * @type {ImgEdit.ICImageFormat}
    * @property {ImgEdit.ICImageFormat} ImageFormat Gets or sets the image page image format value.
    * @return {ImgEdit.ICImageFormat} Gets the image page image format value.
    */
    this.ImageFormat = ImgEdit.ICImageFormat.UNKNOWN;
    /**
    * ImgEdit.PageProperties Page Number Property
    * @readonly
    * @type {Number}
    * @property {Number} PageNumber Gets or sets the image page number value.
    * @return {Number} Gets the image page number value.
    */
    this.PageNumber = 0;
    /**
    * ImgEdit.PageProperties Paper Size Value Property
    * @readonly
    * @type {ImgEdit.PagePaperSize}
    * @property {ImgEdit.PagePaperSize} PaperSizeValue Gets or sets the image page paper size value.
    * @return {ImgEdit.PagePaperSize} Gets the image page paper size value.
    */
    this.PaperSizeValue = null;
    /**
    * ImgEdit.PageProperties Photometric Interpretation Property
    * @readonly
    * @type {Number}
    * @property {Number} PhotometricInterpretation Gets or sets the image page photometric interpretation value.
    * @return {Number} Gets the image page photometric interpretation value.
    */
    this.PhotometricInterpretation = 0;
    /**
    * ImgEdit.PageProperties Width Property
    * @readonly
    * @type {Number}
    * @property {Number} Width Gets or sets the image page width value.
    * @return {Number} Gets the image page width value.
    */
    this.Width = 0;
    /**
    * ImgEdit.PageProperties X Resolution Property
    * @readonly
    * @type {Number}
    * @property {Number} XResolution Gets or sets the image page X Resolution value.
    * @return {Number} Gets the image page X Resolution value.
    */
    this.XResolution = 0;
    /**
    * ImgEdit.PageProperties Y Resolution Property
    * @readonly
    * @type {Number}
    * @property {Number} YResolution Gets or sets the image page Y Resolution value.
    * @return {Number} Gets the image page Y Resolution value.
    */
    this.YResolution = 0;
};

/*!
 * The Image Components page meta data class.
 * Creates a new page meta data instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgEdit.PageMetadata = function () {
    /**
     * ImgEdit.PageMetadata Artist Property
     * @type {String}
     * @property {String} Name Gets or sets the image page meta data artist value.
     * @param {String} value Sets the image page meta data artist value. 
     * @return {String} Gets the image page meta data artist value.
     */
    this.Artist = null;
    /**
     * ImgEdit.PageMetadata Date Time Digitized Property
     * @type {String}
     * @property {String} Name Gets or sets the image page meta data date time digitized value.
     * @param {String} value Sets the image page meta data date time digitized value.
     * @return {String} Gets the image page meta data date time digitized value.
     */
    this.DateTimeDigitized = null;
    /**
     * ImgEdit.PageMetadata Date Time Last Modified Property
     * @type {String}
     * @property {String} Name Gets or sets the image page meta data date time last modified value.
     * @param {String} value Sets the image page meta data date time last modified value.
     * @return {String} Gets the image page meta data date time last modified value.
     */
    this.DateTimeLastModified = null;
    /**
     * ImgEdit.PageMetadata Date Time Original Property
     * @type {String}
     * @property {String} Name Gets or sets the image page meta data date time original value.
     * @param {String} value Sets the image page meta data date time original value.
     * @return {String} Gets the image page meta data date time original value.
     */
    this.DateTimeOriginal = null;
    /**
     * ImgEdit.PageMetadata Document Name Property
     * @type {String}
     * @property {String} Name Gets or sets the image page meta data document name value.
     * @param {String} value Sets the image page meta data document name value.
     * @return {String} Gets the image page meta data document name value.
     */
    this.DocumentName = null;
    /**
     * ImgEdit.PageMetadata Equipment Maker Property
     * @type {String}
     * @property {String} Name Gets or sets the image page meta data equipment maker value.
     * @param {String} value Sets the image page meta data equipment maker value.
     * @return {String} Gets the image page meta data equipment maker value.
     */
    this.EquipmentMaker = null;
    /**
     * ImgEdit.PageMetadata Equipment Model Property
     * @type {String}
     * @property {String} Name Gets or sets the image page meta data equipment model value.
     * @param {String} value Sets the image page meta data equipment model value.
     * @return {String} Gets the image page meta data equipment model value.
     */
    this.EquipmentModel = null;
    /**
     * ImgEdit.PageMetadata Image Copyright Property
     * @type {String}
     * @property {String} Name Gets or sets the image page meta data image copyright value.
     * @param {String} value Sets the image page meta data image copyright value.
     * @return {String} Gets the image page meta data image copyright value.
     */
    this.ImageCopyright = null;
    /**
     * ImgEdit.PageMetadata Image Description Property
     * @type {String}
     * @property {String} Name Gets or sets the image page meta data image description value.
     * @param {String} value Sets the image page meta data image description value.
     * @return {String} Gets the image page meta data image description value.
     */
    this.ImageDescription = null;
    /**
     * ImgEdit.PageMetadata Image Title Property
     * @type {String}
     * @property {String} Name Gets or sets the image page meta data image title value.
     * @param {String} value Sets the image page meta data image title value.
     * @return {String} Gets the image page meta data image title value.
     */
    this.ImageTitle = null;
    /**
     * ImgEdit.PageMetadata Page Name Property
     * @type {String}
     * @property {String} Name Gets or sets the image page meta data page name value.
     * @param {String} value Sets the image page meta data page name value.
     * @return {String} Gets the image page meta data page name value.
     */
    this.PageName = null;
    /**
     * ImgEdit.PageMetadata Software Used Property
     * @type {String}
     * @property {String} Name Gets or sets the image page meta data software used value.
     * @param {String} value Sets the image page meta data software used value.
     * @return {String} Gets the image page meta data software used value.
     */
    this.SoftwareUsed = null;
    /**
     * ImgEdit.PageMetadata User Comment Property
     * @type {String}
     * @property {String} Name Gets or sets the image page meta data user comment value.
     * @param {String} value Sets the image page meta data user comment value.
     * @return {String} Gets the image page meta data user comment value.
     */
    this.UserComment = null;
};

/*!
 * The Image Components page paper size class.
 * Creates a new page paper size instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgEdit.PagePaperSize = function () {
    /**
     * ImgEdit.PagePaperSize Paper Inches X Property
     * @readonly
     * @type {Number}
     * @property {Number} PaperInchesX Gets or sets the paper inches X value.
     * @return {Number} Gets the paper inches X value.
     */
    this.PaperInchesX = 0;
    /**
    * ImgEdit.PagePaperSize Paper Inches Y Property
    * @readonly
    * @type {Number}
    * @property {Number} PaperInchesX Gets or sets the paper inches Y value.
    * @return {Number} Gets the paper inches Y value.
    */
    this.PaperInchesY = 0;
    /**
    * ImgEdit.PagePaperSize Paper Size Value Property
    * @readonly
    * @type {ImgEdit.PaperSize}
    * @property {ImgEdit.PaperSize} PaperInchesX Gets or sets the paper size value.
    * @return {ImgEdit.PaperSize} Gets the paper size value.
    */
    this.PaperSizeValue = null;
};

/*!
 * The Image Components paper size class.
 * Creates a new paper size instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgEdit.PaperSize = function () {
    /**
     * ImgEdit.PaperSize Inches X Property
     * @readonly
     * @type {Number}
     * @property {Number} InchesX Gets or sets the inches X value.
     * @return {Number} Gets the inches X value.
     */
    this.InchesX = 0;
    /**
     * ImgEdit.PaperSize Inches Y Property
     * @readonly
     * @type {Number}
     * @property {Number} InchesY Gets or sets the inches Y value.
     * @return {Number} Gets the inches Y value.
     */
    this.InchesY = 0;
    /**
     * ImgEdit.PaperSize Name Property
     * @readonly
     * @type {String}
     * @property {String} Name Gets or sets the name value.
     * @return {String} Gets the name value.
     */
    this.Name = null;
    /**
     * ImgEdit.PaperSize Centimeters X Property
     * @readonly
     * @type {Number}
     * @property {Number} InchesX Gets or sets the centimeters X value.
     * @return {Number} Gets the centimeters X value.
     */
    this.cmX = 0;
    /**
     * ImgEdit.PaperSize centimeters Y Property
     * @readonly
     * @type {Number}
     * @property {Number} InchesX Gets or sets the centimeters Y value.
     * @return {Number} Gets the centimeters Y value.
     */
    this.cmY = 0;
};

/*!
 * The Image Components image word list class.
 * Creates a new image word list instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgEdit.ICImageWordList = function () {
    /**
     * ImgEdit.ICImageWordList Image Word Items Property
     * @readonly
    * @type {ImgEdit.ICImageWordItem[]}
     * @property {ImgEdit.ICImageWordItem[]} ICImageWordItems Gets or sets the image word items value.
     * @return {ImgEdit.ICImageWordItem[]} Gets the image word items value.
     */
    this.ICImageWordItems = [];
    /**
     * ImgEdit.ICImageWordList Image Formated Text Property
     * @readonly
     * @type {String}
     * @property {String} ImageFormatedText Gets or sets the image formated text value.
     * @return {String} Gets the image formated text value.
     */
    this.ImageFormatedText = "";
    /**
    * ImgEdit.ICImageWordList Image Text Property
    * @readonly
    * @type {String}
    * @property {String} ImageText Gets or sets the image text value.
    * @return {String} Gets the image text value.
    */
    this.ImageText = "";
    /**
    * ImgEdit.ICImageWordList Is OCR Source Property
    * @readonly
    * @type {Boolean}
    * @property {Boolean} IsOCRSource Gets or sets the is OCR source value.
    * @return {Boolean} Gets the is OCR source value.
    */
    this.IsOCRSource = false;
    /**
    * ImgEdit.ICImageWordList Page Index Property
    * @readonly
    * @type {Number}
    * @property {Number} PageIndex Gets or sets the page index value.
    * @return {Number} Gets the page index value.
    */
    this.PageIndex = 0;
};

/*!
 * The Image Components image word item class.
 * Creates a new image word item instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgEdit.ICImageWordItem = function () {
    /**
     * ImgEdit.ICImageWordItem X Property
     * @readonly
     * @type {Number}
     * @property {Number} X Gets or sets the image word item X value.
     * @return {Number} Gets the image word item X value.
     */
    this.X = 0;
    /**
    * ImgEdit.ICImageWordItem Y Property
    * @readonly
    * @type {Number}
    * @property {Number} Y Gets or sets the image word item Y value.
    * @return {Number} Gets the image word item Y value.
    */
    this.Y = 0;
    /**
    * ImgEdit.ICImageWordItem Font Name Property
    * @readonly
    * @type {String}
    * @property {String} FontName Gets or sets the image word item font name value.
    * @return {String} Gets the image word item font name value.
    */
    this.FontName = "";
    /**
    * ImgEdit.ICImageWordItem Font Size Property
    * @readonly
    * @type {Number}
    * @property {Number} FontSize Gets or sets the image word item font size value.
    * @return {Number} Gets the image word item font size value.
    */
    this.FontSize = 0;
    /**
    * ImgEdit.ICImageWordItem Width Property
    * @readonly
    * @type {Number}
    * @property {Number} Width Gets or sets the image word item width value.
    * @return {Number} Gets the image word item width value.
    */
    this.Width = 0;
    /**
    * ImgEdit.ICImageWordItem Height Property
    * @readonly
    * @type {Number}
    * @property {Number} Height Gets or sets the image word item height value.
    * @return {Number} Gets the image word item height value.
    */
    this.Height = 0;
    /**
    * ImgEdit.ICImageWordItem Top Property
    * @readonly
    * @type {Number}
    * @property {Number} Top Gets or sets the image word item top value.
    * @return {Number} Gets the image word item top value.
    */
    this.Top = 0;
    /**
    * ImgEdit.ICImageWordItem Left Property
    * @readonly
    * @type {Number}
    * @property {Number} Left Gets or sets the image word item left value.
    * @return {Number} Gets the image word item left value.
    */
    this.Left = 0;
    /**
    * ImgEdit.ICImageWordItem Bottom Property
    * @readonly
    * @type {Number}
    * @property {Number} Bottom Gets or sets the image word item bottom value.
    * @return {Number} Gets the image word item bottom value.
    */
    this.Bottom = 0;
    /**
    * ImgEdit.ICImageWordItem Right Property
    * @readonly
    * @type {Number}
    * @property {Number} Right Gets or sets the image word item right value.
    * @return {Number} Gets the image word item right value.
    */
    this.Right = 0;
    /**
    * ImgEdit.ICImageWordItem Confidence Property
    * @readonly
    * @type {Number}
    * @property {Number} Confidence Gets or sets the image word item confidence value.
    * @return {Number} Gets the image word item confidence value.
    */
    this.Confidence = 0;
    /**
    * ImgEdit.ICImageWordItem Line Index Property
    * @readonly
    * @type {Number}
    * @property {Number} LineIndex Gets or sets the image word item line index value.
    * @return {Number} Gets the image word item line index value.
    */
    this.LineIndex = 0;
    /**
    * ImgEdit.ICImageWordItem Word Property
    * @readonly
    * @type {String}
    * @property {String} Word Gets or sets the image word item word value.
    * @return {String} Gets the image word item word value.
    */
    this.Word = "";
    /**
    * ImgEdit.ICImageWordItem Word Index Property
    * @readonly
    * @type {Number}
    * @property {Number} WordIndex Gets or sets the image word item word index value.
    * @return {Number} Gets the image word item word index value.
    */
    this.WordIndex = 0;
    /**
    * ImgEdit.ICImageWordItem Is Selected Property
    * @readonly
    * @type {Boolean}
    * @property {Boolean} IsSelected Gets or sets the image word item is selected value.
    * @return {Boolean} Gets the image word item is selected value.
    */
    this.IsSelected = false;
};

/*!
 * The Image Components text search arguments class.
 * Creates a new text search arguments instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgEdit.ICTextSearchArgs = function () {
    /**
    * ImgEdit.ICTextSearchArgs Page Position Property
    * @readonly
    * @type {Number}
    * @property {Number} PagePosition Gets or sets the page position value.
    * @return {Number} Gets the page position value.
    */
    this.PagePosition = 0;
    /**
    * ImgEdit.ICImageWordItem Word List Property
    * @readonly
    * @type {ImgEdit.ICImageWordList}
    * @property {ImgEdit.ICImageWordList} WordList Gets or sets the word list value.
    * @return {ImgEdit.ICImageWordList} Gets the word list  value.
    */
    this.WordList = null;
    /**
    * ImgEdit.ICImageWordItem Search Finish Property
    * @readonly
    * @type {Boolean}
    * @property {Boolean} SearchFinish Gets or sets the search finish value.
    * @return {Boolean} Gets the search finish value.
    */
    this.SearchFinish = false;
};

/*!
 * The Image Components OCR result arguments class.
 * Creates a new OCR result arguments instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgEdit.ICOCRResultArgs = function () {
    /**
   * ImgEdit.ICOCRResultArgs Page Position Property
   * @readonly
   * @type {Number}
   * @property {Number} PagePosition Gets or sets the page position value.
   * @return {Number} Gets the page position value.
   */
    this.PagePosition = 0;
    /**
    * ImgEdit.ICOCRResultArgs Word List Property
    * @readonly
    * @type {ImgEdit.ICImageWordList}
    * @property {ImgEdit.ICImageWordList} WordList Gets or sets the word list value.
    * @return {ImgEdit.ICImageWordList} Gets the word list  value.
    */
    this.WordList = null;
};

/*!
 * The Image Components error occurred arguments class.
 * Creates a new error occurred arguments instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgEdit.ICErrorOccurredArgs = function () {
    /**
    * ImgEdit.ICErrorOccurredArgs Control Name Property
    * @readonly
    * @type {String}
    * @property {String} ControlName Gets or sets the control name value.
    * @return {String} Gets the control name value.
    */
    this.ControlName = "";
    /**
    * ImgEdit.ICErrorOccurredArgs Method Name Property
    * @readonly
    * @type {String}
    * @property {String} MethodName Gets or sets the method name value.
    * @return {String} Gets the method name value.
    */
    this.MethodName = "";
    /**
    * ImgEdit.ICErrorOccurredArgs Error Message Property
    * @readonly
    * @type {String}
    * @property {String} ErrorMessage Gets or sets the error message value.
    * @return {String} Gets the error message value.
    */
    this.ErrorMessage = "";
};