/*!
 * The Image Components ImgAnnotations class.
 * Creates a new ImgAnnotation component instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
var ImgAnnotations = function () {

    /**
    * ImgAnnotations ImgEdit Component Property
    * @type {ImgEdit}
    * @property {ImgEdit} ImgEditComponent Gets or sets the ImgEdit container component.
    * @param {ImgEdit} value Sets the ImgEdit container component.
    * @return {ImgEdit} Gets the ImgEdit container component.
    */
    this.ImgEditComponent = null;
    /**
    * ImgAnnotations Enable Annotation Type Property
    * @type {ImgAnnotations.ICAnnotationType}
    * @property {ImgAnnotations.ICAnnotationType} EnableAnnotationType Enables the creation of annotation types by selection.
    * @param {ImgAnnotations.ICAnnotationType} value Sets the EnableAnnotationType value.
    * @return {ImgAnnotations.ICAnnotationType} Gets the EnableAnnotationType value.
    */
    this.EnableAnnotationType = 0;
    /**
    * ImgAnnotations Selected Annotation Object Property
    * @type {ImgAnnotations.ICAnnotationObject}
    * @property {ImgAnnotations.ICAnnotationObject} SelectedAnnotationObject Gets the selected annotation object.
    * @param {ImgAnnotations.ICAnnotationObject} value Sets the SelectedAnnotationObject value.
    * @return {ImgAnnotations.ICAnnotationObject} Gets the SelectedAnnotationObject value.
    */
    this.SelectedAnnotationObject = null;
    /**
    * ImgAnnotations Add Annotation Preview Property
    * @type {ImgAnnotations.ICAnnotationObject}
    * @property {ImgAnnotations.ICAnnotationObject} AddAnnotationPreview Gets or sets the annotation object before an enable annotation type.
    * @param {ImgAnnotations.ICAnnotationObject} value Sets the AddAnnotationPreview value.
    * @return {ImgAnnotations.ICAnnotationObject} Gets the AddAnnotationPreview value.
    */
    this.AddAnnotationPreview = null;
    /**
    * ImgAnnotations Image Annotations Property
    * @type {String}
    * @property {String} ICImageAnnotations Gets or sets the actual image annotations definition XML value.
    * @param {String} value Sets the ICImageAnnotations value.
    * @return {String} Gets the ICImageAnnotations value.
    */
    this.ICImageAnnotations = "";
    /**
    * ImgAnnotations Draw Annotations Type Property
    * @type {ImgAnnotations.ICObjectsType}
    * @property {ImgAnnotations.ICObjectsType} DrawAnnotationsType Gets or sets the draw of annotation zones.
    * @param {ImgAnnotations.ICObjectsType}   value Sets the DrawAnnotationsType value.
    * @return {ImgAnnotations.ICObjectsType} Gets the DrawAnnotationsType value.
    */
    this.DrawAnnotationsType = 0;
    /**
    * ImgAnnotations Enable In line Text Edit Property
    * @type {Boolean}
    * @property {Boolean} EnableInlineTextEdit Gets or sets the enable of the text annotation in line text edit.
    * @param {Boolean} value Sets the EnableInlineTextEdit value.
    * @return {Boolean} Gets the EnableInlineTextEdit value.
    */
    this.EnableInlineTextEdit = true;
    /**
    * ImgAnnotations Enable SVG Tool tips Property
    * @type {Boolean}
    * @property {Boolean} EnableSVGTooltips Gets or sets the enable of the SVG tool tips title tag.
    * @param {Boolean} value Sets the EnableSVGTooltips value.
    * @return {Boolean} Gets the EnableSVGTooltips value.
    */
    this.EnableSVGTooltips = true;
    /**
    * ImgAnnotations Version Property
    * @readonly
    * @type {String}
    * @property {String} Version Gets the image annotations component version.
    * @return {String} Gets the Version value.
    */
    this.Version = null;

    /**
    * Annotation add, add event handler.
    * Adds the annotation add event handler.
    * @function
    * @param {function(ImgAnnotations,ImgAnnotations.ICAnnotationObject)} h Event handler function.
    */
    this.add_AnnotationAdd = function (h) {
    };

    /**
    * Annotation add, remove event handler.
    * Removes the annotation add event handler.
    * @function
    * @param {function(ImgAnnotations,ImgAnnotations.ICAnnotationObject)} h Event handler function.
    */
    this.remove_AnnotationAdd = function (h) {
    };

    /**
     * Occurs every successfully added annotation.
     * @event AnnotationAdd Raises the annotation add handler.
     * @param {ImgAnnotations} s The ImgAnnotations component object.
     * @param {ImgAnnotations.ICAnnotationObject} e The added annotation object.
     */
    this.AnnotationAdd = function (s, e) {
    };

    /**
    * Annotation add completed, add event handler.
    * Adds the annotation add completed event handler.
    * @function
    * @param {function(ImgAnnotations,ImgAnnotations.ICAnnotationObject)} h Event handler function.
    */
    this.add_AnnotationAddCompleted = function (h) {
    };
    /**
    * Annotation add completed, remove event handler.
    * Removes the annotation add completed event handler.
    * @function
    * @param {function(ImgAnnotations,ImgAnnotations.ICAnnotationObject)} h Event handler function.
    */
    this.remove_AnnotationAddCompleted = function (h) {
    };

    /**
    * Occurs every successfully completed added annotation.
    * @event AnnotationAddCompleted Raises the annotation add completed handler.
    * @param {ImgAnnotations} s The ImgAnnotations component object.
    * @param {ImgAnnotations.ICAnnotationObject} e The added annotation object.
    */
    this.AnnotationAddCompleted = function (s, e) {
    };

    /**
    * Annotation changed, add event handler.
    * Adds the annotation changed event handler.
    * @function
    * @param {function(ImgAnnotations,ImgAnnotations.ICAnnotationObject)} h Event handler function.
    */
    this.add_AnnotationChanged = function (h) {
    };
    /**
    * Annotation changed, remove event handler.
    * Removes the annotation changed event handler.
    * @function
    * @param {function(ImgAnnotations,ImgAnnotations.ICAnnotationObject)} h Event handler function.
    */
    this.remove_AnnotationChanged = function (h) {
    };

    /**
    * Occurs every successfully changed annotation.
    * @event AnnotationChanged Raises the annotation changed handler.
    * @param {ImgAnnotations} s The ImgAnnotations component object.
    * @param {ImgAnnotations.ICAnnotationObject} e The changed annotation object.
    */
    this.AnnotationChanged = function (s, e) {
    };

    /**
    * Annotation selected, add event handler.
    * Adds the annotation selected event handler.
    * @function
    * @param {function(ImgAnnotations,ImgAnnotations.ICAnnotationObject)} h Event handler function.
    */
    this.add_AnnotationSelected = function (h) {
    };

    /**
    * Annotation selected, remove event handler.
    * Removes the annotation selected event handler.
    * @function
    * @param {function(ImgAnnotations,ImgAnnotations.ICAnnotationObject)} h Event handler function.
    */
    this.remove_AnnotationSelected = function (h) {
    };

    /**
   * Occurs every successfully selected annotation.
   * @event AnnotationSelected Raises the annotation selected handler.
   * @param {ImgAnnotations} s The ImgAnnotations component object.
   * @param {ImgAnnotations.ICAnnotationObject} e The selected annotation object.
   */
    this.AnnotationSelected = function (s, e) {
    };

    /**
    * Annotation deleted, add event handler.
    * Adds the annotation deleted event handler.
    * @function
    * @param {function(ImgAnnotations,ImgAnnotations.ICAnnotationObject)} h Event handler function.
    */
    this.add_AnnotationDeleted = function (h) {
    };
    /**
    * Annotation deleted, remove event handler.
    * Removes the annotation deleted event handler.
    * @function
    * @param {function(ImgAnnotations,ImgAnnotations.ICAnnotationObject)} h Event handler function.
    */
    this.remove_AnnotationDeleted = function (h) {
    };

    /**
   * Occurs every successfully deleted annotation.
   * @event AnnotationDeleted Raises the annotation deleted handler.
   * @param {ImgAnnotations} s The ImgAnnotations component object.
   * @param {ImgAnnotations.ICAnnotationObject} e The deleted annotation object.
   */
    this.AnnotationDeleted = function (s, e) {
    };

    /**
    * Annotation double click, add event handler.
    * Adds the annotation double click event handler.
    * @function
    * @param {function(ImgAnnotations,ImgAnnotations.ICAnnotationObject)} h Event handler function.
    */
    this.add_AnnotationDoubleClick = function (h) {
    };

    /**
    * Annotation double click, remove event handler.
    * Removes the annotation double click event handler.
    * @function
    * @param {function(ImgAnnotations,ImgAnnotations.ICAnnotationObject)} h Event handler function.
    */
    this.remove_AnnotationDoubleClick = function (h) {
    };

    /**
  * Occurs every successfully double click annotation.
  * @event AnnotationDoubleClick Raises the annotation double click handler.
  * @param {ImgAnnotations} s The ImgAnnotations component object.
  * @param {ImgAnnotations.ICAnnotationObject} e The selected annotation object.
  */
    this.AnnotationDoubleClick = function (s, e) {
    };

    /**
     * Error occurred add event handler.
     * Adds the error occurred add event handler.
     * @function
     * @param {function} h Event handler function.
     */
    this.add_ErrorOccurred = function (h) {
    };
    /**
    * Error occurred remove event handler.
    * Removes the error occurred add event handler.
    * @function
    * @param {function} h Event handler function.
    */
    this.remove_ErrorOccurred = function (h) {
    };
    /**
    * Occurs every time one error is raised.
    * @event ErrorOccurred Raises the error occurred event handler.
    * @param {ImgAnnotations} s The ImgEdit component object.
    * @param {ImgAnnotations.ICErrorOccurredArgs} e The control name, method and description that raised the error.
    */
    this.ErrorOccurred = function (s, e) {
    };

};

/**
* ImgAnnotations Add Event Listener Method
* Adds a listener to an event by name.
* @function
* @param {String} eventName The event name.
* @param {Function} handler The event callback method to be raised.
*/
ImgAnnotations.prototype.addEventListener = function (eventName, handler) {
};

/**
* ImgAnnotations Remove Event Listener Method
* Removes the listener of an event by name.
* @function
* @param {String} eventName The event name.
* @param {Function} handler The event callback method to be removed from the event.
*/
ImgAnnotations.prototype.removeEventListener = function (eventName, handler) {
};

/**
* ImgAnnotations Add Note Method
* Adds a text annotation to the selected page.
* @function
* @param {ImgAnnotations.ICAnnotationObject} textAnnotation The text annotation object containing the configured values.
*/
ImgAnnotations.prototype.AddNote = function (textAnnotation) {
};


/**
* ImgAnnotations Add Stamp Method
* Adds a stamp annotation to the selected page.
* @function
* @param {ImgAnnotations.ICAnnotationObject} stampAnnotation The stamp annotation object containing the configured values.
*/
ImgAnnotations.prototype.AddStamp = function (stampAnnotation) {
};


/**
* ImgAnnotations Add Hide Method
* Adds a Hide annotation to the selected page.
* @function
* @param {ImgAnnotations.ICAnnotationObject} hideAnnotation The Hide annotation object containing the configured values.
*/
ImgAnnotations.prototype.AddHide = function (hideAnnotation) {
};


/**
* ImgAnnotations Add Arrow Method
* Adds a Arrow annotation to the selected page.
* @function
* @param {ImgAnnotations.ICAnnotationObject} arrowAnnotation The Arrow annotation object containing the configured values.
*/
ImgAnnotations.prototype.AddArrow = function (arrowAnnotation) {
};


/**
* ImgAnnotations Add Line Method
* Adds a Line annotation to the selected page.
* @function
* @param {ImgAnnotations.ICAnnotationObject} lineAnnotation The Line annotation object containing the configured values.
*/
ImgAnnotations.prototype.AddLine = function (lineAnnotation) {
};


/**
* ImgAnnotations Add Highlight Method
* Adds a Highlight annotation to the selected page.
* @function
* @param {ImgAnnotations.ICAnnotationObject} highlightAnnotation The Highlight annotation object containing the configured values.
*/
ImgAnnotations.prototype.AddHighlight = function (highlightAnnotation) {
};


/**
* ImgAnnotations Add OCR Zone Method
* Adds an OCR annotation to the selected page.
* @function
* @param {ImgAnnotations.ICAnnotationObject} ocrAnnotation The OCR annotation object containing the configured values.
*/
ImgAnnotations.prototype.AddOCRZone = function (ocrAnnotation) {
};


/**
* ImgAnnotations Add Barcode Zone Method
* Adds a Barcode annotation to the selected page.
* @function
* @param {ImgAnnotations.ICAnnotationObject} barcodeAnnotation The Barcode annotation object containing the configured values.
*/
ImgAnnotations.prototype.AddBarcodeZone = function (barcodeAnnotation) {
};


/**
* ImgAnnotations Add Zoom To Zone Method
* Adds a Zoom to Zone annotation to the selected page.
* @function
* @param {ImgAnnotations.ICAnnotationObject} zoomAnnotation The Zoom to Zone annotation object containing the configured values.
*/
ImgAnnotations.prototype.AddZoomToZone = function (zoomAnnotation) {
};


/**
* ImgAnnotations Add Ellipse Method
* Adds a Ellipse annotation to the selected page.
** @function
* @param {ImgAnnotations.ICAnnotationObject} ellipseAnnotation The Ellipse annotation object containing the configured values.
*/
ImgAnnotations.prototype.AddEllipse = function (ellipseAnnotation) {
};


/**
* ImgAnnotations Add Embedded Image Method
* Adds a Embedded Image annotation to the selected page.
* @function
* @param {ImgAnnotations.ICAnnotationObject} imageAnnotation The Embedded Image annotation object containing the configured values.
*/
ImgAnnotations.prototype.AddEmbeddedImage = function (imageAnnotation) {
};

/**
* ImgAnnotations Redraw Annotations Method
* Clears and redraws the selected page annotations.
* @function
* @param {Number} PageIndex Page index position.
*/
ImgAnnotations.prototype.RedrawAnnotations = function (PageIndex) {
};

/**
* ImgAnnotations Redraw Annotation Method
* Clears and redraws the specified annotation.
* @function
* @param {ImgAnnotations.ICAnnotationObject} annotation The annotation object to redraw.
*/
ImgAnnotations.prototype.RedrawAnnotation = function (annotation) {
};

/**
* ImgAnnotations Remove Annotation Method
* Removes the specified annotation object from the selected image page.
* @function
* @param {ImgAnnotations.ICAnnotationObject} AnnotationObject The annotation object to remove.
*/
ImgAnnotations.prototype.RemoveAnnotation = function (AnnotationObject) {
};

/**
* ImgAnnotations Clear Annotations Method
* Clears all the annotations of the displayed image.
* @function
*/
ImgAnnotations.prototype.ClearAnnotations = function () {
};

/**
* ImgAnnotations Clear Page Annotations Method
* Clears all the annotations of the specified image page.
* @function
* @param {Number} PageIndex Page index position.
*/
ImgAnnotations.prototype.ClearPageAnnotations = function (PageIndex) {
};

/**
* ImgAnnotations Clear Annotations Selection Method
* Clears the annotations selection of the displayed image.
* @function
*/
ImgAnnotations.prototype.ClearAnnotationsSelection = function () {
};

/**
* ImgAnnotations Protect Annotations Method
* Protects or remove protection of all the annotations of the image pages.
* @function
* @param {Boolean} IsProtected Sets the protect value of the annotations.
*/
ImgAnnotations.prototype.ProtectAnnotations = function (IsProtected) {
};

/**
* ImgAnnotations Protect Page Annotations Method
* Protects or remove protection all the annotations of the image pages.
* @function
* @param {Boolean} IsProtected Sets the protect value of the annotations.
* @param {Number} PageIndex Page index position.
*/
ImgAnnotations.prototype.ProtectPageAnnotations = function (IsProtected, PageIndex) {
};

/**
* ImgAnnotations Get Annotations Method
* Gets all the annotations of the specified image page.
* @function
* @param {Number} PageIndex Page index position.
* @return {ImgAnnotations.ICAnnotationObject[]} Gets an array of ICAnnotationObject of the specified page.
*/
ImgAnnotations.prototype.GetAnnotations = function (PageIndex) {
};

/**
* ImgAnnotations Get Annotations By Type Method
* Gets the annotations of the specified type.
* @function
* @param {ImgAnnotations.ICAnnotationType} AnnotationsType Annotations objects type.
* @return {ImgAnnotations.ICAnnotationObject[]} Gets an array of ICAnnotationObject of the specified annotation type.
*/
ImgAnnotations.prototype.GetAnnotationsByType = function (AnnotationsType) {
};

/**
* ImgAnnotations Get Page Annotations By Type Method
* Gets the annotations of the specified page and type.
* @function
* @param {ImgAnnotations.ICAnnotationType} AnnotationsType Annotations objects type.
* @param {Number} PageIndex Page index position.
* @return {ImgAnnotations.ICAnnotationObject[]} Gets an array of ICAnnotationObject of the specified page and annotation type.
*/
ImgAnnotations.prototype.GetPageAnnotationsByType = function (AnnotationsType, PageIndex) {
};

/**
* ImgAnnotations Get Annotations By Zone I D Method
* Gets the annotation of the specified zone id.
* @function
* @param {Number} ZoneID Annotation zone ID.
* @return {ImgAnnotations.ICAnnotationObject[]} Gets an array of ICAnnotationObject of the specified zone ID.
*/
ImgAnnotations.prototype.GetAnnotationsByZoneID = function (ZoneID) {
};

/**
* ImgAnnotations Load Annotations Method
* Loads the XML annotations definition to the displayed image.
* @function
* @param {String} xmlAnnotations Image annotations XML definition string.
*/
ImgAnnotations.prototype.LoadAnnotations = function (xmlAnnotations) {
};

/**
* ImgAnnotations Save Annotations Method
* Saves the XML annotations definition to a string object.
* @function
* @param {ImgAnnotations.ICObjectsType} ObjectsType Annotation objects type.
* @param {String} Filename Annotation XML file name.
* @return {String} Image annotations definition XML string.
*/
ImgAnnotations.prototype.SaveAnnotations = function (ObjectsType, Filename) {
};

/**
* ImgAnnotations Dispose Method
* Releases all the in use ImgAnnotations memory objects.
* @function
*/
ImgAnnotations.prototype.Dispose = function () {
};

/**
* Annotations type enumeration.
* @readonly
* @enum {number}
*/
ImgAnnotations.ICAnnotationType = {
    /** None Annotation type. */
    None: 0,
    /**Arrow Annotation type. */
    ArrowAnnotation: 1,
    /**Barcode Zone Annotation type. */
    BarcodeZoneAnnotation: 2,
    /**Ellipse Annotation type. */
    EllipseAnnotation: 3,
    /** Embedded Image Annotation type. */
    EmbeddedImageAnnotation: 4,
    /** Hide Annotation type. */
    HideAnnotation: 5,
    /** Highlight Annotation type. */
    HighlightAnnotation: 6,
    /** Line Annotation type. */
    LineAnnotation: 7,
    /** OCR Zone Annotation type. */
    OCRZoneAnnotation: 8,
    /** Stamp Annotation type. */
    StampAnnotation: 9,
    /** Text Annotation type. */
    TextAnnotation: 10,
    /** Zoom To Zone Annotation type. */
    ZoomToZoneAnnotation: 11,
    /** Free Draw Annotation type. */
    FreeDrawAnnotation: 13,
    /** Line Segments Annotation type. */
    LineSegmentsAnnotation: 14
};

/**
* Annotations objects type enumeration.
* @readonly
* @enum {number}
*/
ImgAnnotations.ICObjectsType = {
    /** All annotations type. */
    All: 0,
    /** Non zone annotations type. */
    Annotation: 1,
    /** Zone annotations type. */
    AnnotationZones: 2
};

/**
* Image OCR languages enumeration.
* @readonly
* @enum {number}
*/
ImgAnnotations.ICImageOCRLanguages = {
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
ImgAnnotations.ICImageOCRType = {
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
* Image Barcode type enumeration.
* @readonly
* @enum {number}
*/
ImgAnnotations.ICImageBarcodeType = {
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
ImgAnnotations.ICImageBarcodeOrientation = {
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
ImgAnnotations.ICImageBarcodeSearchMode = {
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
* Image annotations keyword result type enumeration.
* @readonly
* @enum {number}
*/
ImgAnnotations.ICKeywordResultType = {
    /** None result type. */
    None: 0,
    /** Characters result type. */
    Characters: 1,
    /** Word result type. */
    Word: 2,
    /** Line result type. */
    Line: 3
};

/*!
 * The Image Components annotation object class.
 * Creates a new annotation object instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgAnnotations.ICAnnotationObject = function () {

    /**
    * ImgAnnotations.ICAnnotationObject Annotation Object Type Property
    * @type {ImgAnnotations.ICAnnotationType}
    * @property {ImgAnnotations.ICAnnotationType} AnnotationObjectType Get or sets the annotation object type.
    * @param {ImgAnnotations.ICAnnotationType} value Sets the Annotation Object Type value.
    * @return {ImgAnnotations.ICAnnotationType} Gets the Annotation Object Type value.
    */
    this.AnnotationObjectType = ImgAnnotations.ICAnnotationType.None;
    /**
    * ImgAnnotations.ICAnnotationObject Is Dirty Property
    * @type {Boolean}
    * @property {Boolean} IsDirty Gets or sets Is dirty value.
    * @param {Boolean} value Sets the IsDirty value.
    * @return {Boolean} Gets the IsDirty value.
    */
    this.IsDirty = false;
    /**
    * ImgAnnotations.ICAnnotationObject Is Loaded Property
    * @type {Boolean}
    * @property {Boolean} IsLoaded Gets or sets Is loaded value.
    * @param {Boolean} value Sets the IsLoaded value.
    * @return {Boolean} Gets the IsLoaded value.
    */
    this.IsLoaded = false;
    /**
    * ImgAnnotations.ICAnnotationObject Page Index Property
    * @readonly
    * @type {Number}
    * @property {Number} PageIndex Gets the annotations objects collection page index.
    * @return {Number} Gets the PageIndex value.
    */
    this.PageIndex = 0;
    /**
    * ImgAnnotations.ICAnnotationObject Auto Size Property
    * @type {Boolean}
    * @property {Boolean} AutoSize Gets or sets Auto size.
    * @param {Boolean} value Sets the AutoSize value.
    * @return {Boolean} Gets the AutoSize value.
    */
    this.AutoSize = true;
    /**
    * ImgAnnotations.ICAnnotationObject ID Property
    * @type {Number}
    * @property {Number} ID Gets or sets the annotation identification.
    * @param {Number} value Sets the ID value.
    * @return {Number} Gets the ID value.
    */
    this.ID = 0;
    /**
    * ImgAnnotations.ICAnnotationObject UUID Property
    * @readonly
    * @type {String}
    * @property {String} UUID Gets the annotation unique identifier.
    * @return {String} Gets the UUID value.
    */
    this.UUID = "";
    /**
    * ImgAnnotations.ICAnnotationObject X Property
    * @type {Number}
    * @property {Number} X Gets or sets the annotation X position.
    * @param {Number} value Sets the X value.
    * @return {Number} Gets the X value.
    */
    this.X = 0;
    /**
    * ImgAnnotations.ICAnnotationObject Y Property
    * @type {Number}
    * @property {Number} Y Gets or sets the annotation Y position.
    * @param {Number} value Sets the Y value.
    * @return {Number} Gets the Y value.
    */
    this.Y = 0;
    /**
    * ImgAnnotations.ICAnnotationObject Height Property
    * @type {Number}
    * @property {Number} Height Gets or sets the annotation height size.
    * @param {Number} value Sets the Height value.
    * @return {Number} Gets the Height value.
    */
    this.Height = 0;
    /**
    * ImgAnnotations.ICAnnotationObject Width Property
    * @type {Number}
    * @property {Number} Width Gets or sets the annotation width size.
    * @param {Number} value Sets the Width value.
    * @return {Number} Gets the Width value.
    */
    this.Width = 0;
    /**
    * ImgAnnotations.ICAnnotationObject Is Visible Property
    * @type {Boolean}
    * @property {Boolean} IsVisible Gets or sets the annotation visibility.
    * @param {Boolean} value Sets the IsVisible value.
    * @return {Boolean} Gets the IsVisible value.
    */
    this.IsVisible = true;
    /**
    * ImgAnnotations.ICAnnotationObject Is Protected Property
    * @type {Boolean}
    * @property {Boolean} IsProtected Gets or sets the annotation protection.
    * @param {Boolean}   value Sets the IsProtected value.
    * @return {Boolean} Gets the IsProtected value.
    */
    this.IsProtected = false;
    /**
    * ImgAnnotations.ICAnnotationObject Tool Tip Property
    * @type {String}
    * @property {String} ToolTip Gets or sets the Annotation tool tip.
    * @param {String} value Sets the ToolTip value.
    * @return {String} Gets the ToolTip value.
    */
    this.ToolTip = "";
    /**
    * ImgAnnotations.ICAnnotationObject Is Selected Property
    * @type {Boolean}
    * @property {Boolean} IsSelected Gets or sets the is annotation selected value.
    * @param {Boolean} value Sets the IsSelected value.
    * @return {Boolean} Gets the IsSelected value.
    */
    this.IsSelected = false;
    /**
    * ImgAnnotations.ICAnnotationObject Tag Property
    * @type {Object}
    * @property {Object} Tag Gets or sets the annotation tag.
    * @param {Object} value Sets the Tag value.
    * @return {Object} Gets the Tag value.
    */
    this.Tag = null;
    /**
    * ImgAnnotations.ICAnnotationObject Line Width Property
    * @type {Number}
    * @property {Number} LineWidth Gets or sets the annotation border line width.
    * @param {Number} value Sets the Line Width value.
    * @return {Number} Gets the Line Width value.
    */
    this.LineWidth = 0;
    /**
    * ImgAnnotations.ICAnnotationObject Line Color Property
    * @type {ImgAnnotations.ICColor}
    * @property {ImgAnnotations.ICColor} LineColor Gets or sets the annotation border line color.
    * @param {ImgAnnotations.ICColor} value Sets the Line Color value.
    * @return {ImgAnnotations.ICColor} Gets the Line Color value.
    */
    this.LineColor = new ICColor();
    /**
    * ImgAnnotations.ICAnnotationObject Fill Property
    * @type {Boolean}
    * @property {Boolean} Fill Gets or sets the annotation has back color.
    * @param {Boolean} value Sets the Fill value.
    * @return {Boolean} Gets the Fill value.
    */
    this.Fill = true;
    /**
    * ImgAnnotations.ICAnnotationObject Fill Color Property
    * @type {ImgAnnotations.ICColor}
    * @property {ImgAnnotations.ICColor} FillColor Gets or sets the annotation fill color.
    * @param {ImgAnnotations.ICColor} value Sets the Fill Color value.
    * @return {ImgAnnotations.ICColor} Gets the Fill Color value.
    */
    this.FillColor = new ICColor();
    /**
    * ImgAnnotations.ICAnnotationObject Fill Transparency Property
    * @type {Number}
    * @property {Number} FillTransparency Gets or sets the annotation fill transparency.
    * @param {Number} value Sets the Fill Transparency value.
    * @return {Number} Gets the Fill Transparency value.
    */
    this.FillTransparency = 255;
    /**
    * ImgAnnotations.ICAnnotationObject Text Font Property
    * @type {ImgAnnotations.ICFont}
    * @property {ImgAnnotations.ICFont} TextFont Gets or sets the annotation text font.
    * @param {ImgAnnotations.ICFont} value Sets the Text Font value.
    * @return {ImgAnnotations.ICFont} Gets the Text Font value.
    */
    this.TextFont = new ICFont();
    /**
    * ImgAnnotations.ICAnnotationObject Text Property
    * @type {String}
    * @property {String} Text Gets or sets the annotation text.
    * @param {String} value Sets the Text value.
    * @return {String} Gets the Text value.
    */
    this.Text = "";
    /**
    * ImgAnnotations.ICAnnotationObject Text Color Property
    * @type {ImgAnnotations.ICColor}
    * @property {ImgAnnotations.ICColor} TextColor Gets or sets the annotation text color.
    * @param {ImgAnnotations.ICColor} value Sets the Text Color value.
    * @return {ImgAnnotations.ICColor} Gets the Text Color value.
    */
    this.TextColor = new ICColor();
    /**
    * ImgAnnotations.ICAnnotationObject Text Angle Property
    * @type {Number}
    * @property {Number} TextAngle Gets or sets the annotation text angle.
    * @param {Number} value Sets the Text Angle value.
    * @return {Number} Gets the Text Angle value.
    */
    this.TextAngle = 0;
    /**
    * ImgAnnotations.ICAnnotationObject Is Text Edit Enabled Property
    * @type {Boolean}
    * @property {Boolean} IsTextEditEnabled Gets or sets the annotation text edit is enabled.
    * @param {Boolean} value Sets the Is Text Edit Enabled value.
    * @return {Boolean} Gets the Is Text Edit Enabled value.
    */
    this.IsTextEditEnabled = false;
    /**
    * ImgAnnotations.ICAnnotationObject Is Transparent Property
    * @type {Boolean}
    * @property {Boolean} IsTransparent Gets or sets the image annotation is transparent.
    * @param {Boolean} value Sets the IsTransparent value.
    * @return {Boolean} Gets the IsTransparent value.
    */
    this.IsTransparent = false;
    /**
    * ImgAnnotations.ICAnnotationObject Show Both Pointers Property
    * @type {Boolean}
    * @property {Boolean} IsTransparent Gets or sets the show both pointers of the arrow annotations or not.
    * @param {Boolean} value Sets the show both pointers of the arrow annotations or not.
    * @return {Boolean} Gets the show both pointers of the arrow annotations or not.
    */
    this.ShowBothPointers = false;
    /**
    * ImgAnnotations.ICAnnotationObject Embedded Image Base64 Property
    * @type {String}
    * @property {String} EmbeddedImageBase64 Gets or sets the annotation embedded image base 64 value.
    * @param {String} value Sets the Embedded Image Base64 value.
    * @return {String} Gets the Embedded Image Base64 value.
    */
    this.EmbeddedImageBase64 = "";
    /**
    * ImgAnnotations.ICAnnotationObject Zone ID Property
    * @type {Number}
    * @property {Number} ZoneID Gets or sets the annotation zone ID.
    * @param {Number} value Sets the ZoneID value.
    * @return {Number} Gets the ZoneID value.
    */
    this.ZoneID = 0;
    /**
    * ImgAnnotations.ICAnnotationObject OCR Result Property
    * @type {String}
    * @property {String} OCRResult Gets the annotation OCR result.
    * @param {String} value Sets the OCR Result value.
    * @return {String} Gets the OCR Result value.
    */
    this.OCRResult = "";
    /**
    * ImgAnnotations.ICAnnotationObject Apply Annotation OCR Settings Property
    * @type {Boolean}
    * @property {Boolean} ApplyAnnotationOCRSettings Gets or sets the application of the configured annotation OCR settings.
    * @param {Boolean} value Sets the Apply Annotation OCR Settings value.
    * @return {Boolean} Gets the Apply Annotation OCR Settings value.
    */
    this.ApplyAnnotationOCRSettings = false;
    /**
    * ImgAnnotations.ICAnnotationObject Append Data Property
    * @type {Boolean}
    * @property {Boolean} AppendData Gets or sets the append annotation OCR result.
    * @param {Boolean} value Sets the Append Data value.
    * @return {Boolean} Gets the Append Data value.
    */
    this.AppendData = false;
    /**
    * ImgAnnotations.ICAnnotationObject OCR Language Property
    * @type {ImgAnnotations.ICImageOCRLanguages}
    * @property {ImgAnnotations.ICImageOCRLanguages} OCRLanguage Gets or sets the annotation OCR language.
    * @param {ImgAnnotations.ICImageOCRLanguages} value Sets the OCR Language value.
    * @return {ImgAnnotations.ICImageOCRLanguages} Gets the OCR Language value.
    */
    this.OCRLanguage = ImgAnnotations.ICImageOCRLanguages.English;
    /**
    * ImgAnnotations.ICAnnotationObject OCR Type Property
    * @type {ImgAnnotations.ICImageOCRType}
    * @property {ImgAnnotations.ICImageOCRType} OCRType Gets or sets the annotation OCR type.
    * @param {ImgAnnotations.ICImageOCRType} value Sets the OCR Type value.
    * @return {ImgAnnotations.ICImageOCRType} Gets the OCR Type value.
    */
    this.OCRType = ImgAnnotations.ICImageOCRType.OEM_DEFAULT;
    /**
    * ImgAnnotations.ICAnnotationObject White List Property
    * @type {String}
    * @property {String} WhiteList Gets or sets the OCR result white characters list.
    * @param {String} value Sets the White List value.
    * @return {String} Gets the White List value.
    */
    this.WhiteList = "";
    /**
    * ImgAnnotations.ICAnnotationObject Black List Property
    * @type {String}
    * @property {String} BlackList Gets or sets the OCR result black characters list.
    * @param {String} value Sets the Black List value.
    * @return {String} Gets the Black List value.
    */
    this.BlackList = "";
    /**
    * ImgAnnotations.ICAnnotationObject Key Word Property
    * @type {String}
    * @property {String} KeyWord Gets or sets the OCR search key word.
    * @param {String} value Sets the KeyWord value.
    * @return {String} Gets the KeyWord value.
    */
    this.KeyWord = "";
    /**
    * ImgAnnotations.ICAnnotationObject Max Result Values Property
    * @type {Number}
    * @property {Number} MaxResultValues Gets or sets the maximum characters, words or lines to read after finding the key word.
    * @param {Number} value Sets the Max Result Values value.
    * @return {Number} Gets the Max Result Values value.
    */
    this.MaxResultValues = 0;
    /**
    * ImgAnnotations.ICAnnotationObject Result Value Type Property
    * @type {ImgAnnotations.ICKeywordResultType}
    * @property {ImgAnnotations.ICKeywordResultType} ResultValueType Gets or sets the result value type (characters, words or lines) to read after finding the key word.
    * @param {ImgAnnotations.ICKeywordResultType}   value Sets the Result Value Type value.
    * @return {ImgAnnotations.ICKeywordResultType} Gets the Result Value Type value.
    */
    this.ResultValueType = ImgAnnotations.ICKeywordResultType.None;
    /**
    * ImgAnnotations.ICAnnotationObject Is Result After Property
    * @type {Boolean}
    * @property {Boolean} IsResultAfter Gets or sets the OCR result value is before or after the searched key word.
    * @param {Boolean} value Sets the Is Result After value.
    * @return {Boolean} Gets the Is Result After value.
    */
    this.IsResultAfter = false;
    /**
    * ImgAnnotations.ICAnnotationObject Equality Value Property
    * @type {Number}
    * @property {Number} EqualityValue Gets or sets the equality percentage to consider a valid found key word.
    * @param {Number} value Sets the Equality value.
    * @return {Number} Gets the Equality value.
    */
    this.EqualityValue = 100;
    /**
    * ImgAnnotations.ICAnnotationObject Use Key Word Search Property
    * @type {Boolean}
    * @property {Boolean} UseKeyWordSearch Gets or sets the use the OCR key word search mode or the OCR Zone mode.
    * @param {Boolean} value Sets the Use Key Word Search value.
    * @return {Boolean} Gets the Use Key Word Search value.
    */
    this.UseKeyWordSearch = false;
    /**
    * ImgAnnotations.ICAnnotationObject Enable Key Word Zone Property
    * @type {Boolean}
    * @property {Boolean} EnableKeyWordZone If using the key word search mode, enable the search on the specified zone or on the entire page.
    * @param {Boolean} value Sets the Enable Key Word Zone value.
    * @return {Boolean} Gets the Enable Key Word Zone value.
    */
    this.EnableKeyWordZone = false;
    /**
    * ImgAnnotations.ICAnnotationObject Barcode Result Property
    * @type {String}
    * @property {String} BarcodeResult Gets the annotation Barcode result.
    * @param {String} value Sets the Barcode Result value.
    * @return {String} Gets the Barcode Result value.
    */
    this.BarcodeResult = "";
    /**
    * ImgAnnotations.ICAnnotationObject Apply Annotation Barcode Settings Property
    * @type {Boolean}
    * @property {Boolean} ApplyAnnotationBarcodeSettings Gets or sets the application of the configured annotation Barcode settings.
    * @param {Boolean} value Sets the Apply Annotation Barcode Settings value.
    * @return {Boolean} Gets the Apply Annotation Barcode Settings value.
    */
    this.ApplyAnnotationBarcodeSettings = false;
    /**
    * ImgAnnotations.ICAnnotationObject Barcode Type Property
    * @type {ImgAnnotations.ICImageBarcodeType}
    * @property {ImgAnnotations.ICImageBarcodeType} BarcodeType Gets or sets the annotation Barcode type.
    * @param {ImgAnnotations.ICImageBarcodeType} value Sets the Barcode Type value.
    * @return {ImgAnnotations.ICImageBarcodeType} Gets the Barcode Type value.
    */
    this.BarcodeType = ImgAnnotations.ICImageBarcodeType.AUTO;
    /**
    * ImgAnnotations.ICAnnotationObject Barcode Orientation Property
    * @type {ImgAnnotations.ICImageBarcodeOrientation}
    * @property {ImgAnnotations.ICImageBarcodeOrientation} BarcodeOrientation Gets or sets the annotation Barcode orientation.
    * @param {ImgAnnotations.ICImageBarcodeOrientation} value Sets the Barcode Orientation value.
    * @return {ImgAnnotations.ICImageBarcodeOrientation} Gets the Barcode Orientation value.
    */
    this.BarcodeOrientation = ImgAnnotations.ICImageBarcodeOrientation.LeftToRight;
    /**
    * ImgAnnotations.ICAnnotationObject Stop On First Result Property
    * @type {Boolean}
    * @property {Boolean} StopOnFirstResult Gets or sets the stop on first result.
    * @param {Boolean} value Sets the Stop On First Result value.
    * @return {Boolean} Gets the Stop On First Result value.
    */
    this.StopOnFirstResult = false;
    /**
    * ImgAnnotations.ICAnnotationObject Enable Check Digit Property
    * @type {Boolean}
    * @property {Boolean} EnableCheckDigit Enables or disables the barcode check digit.
    * @param {Boolean} value Sets the Enable Check Digit value.
    * @return {Boolean} Gets the Enable Check Digit value.
    */
    this.EnableCheckDigit = false;
    /**
    * ImgAnnotations.ICAnnotationObject Image Barcode Search Mode Property
    * @type {ImgAnnotations.ICImageBarcodeSearchMode}
    * @property {ImgAnnotations.ICImageBarcodeSearchMode} ImageBarcodeSearchMode Gets or sets the barcode search mode.
    * @param {ImgAnnotations.ICImageBarcodeSearchMode} value Sets the Image Barcode Search Mode value.
    * @return {ImgAnnotations.ICImageBarcodeSearchMode} Gets the Image Barcode Search Mode value.
    */
    this.ImageBarcodeSearchMode = ImgAnnotations.ICImageBarcodeSearchMode.ACCURACY;

};

/*!
 * The Image Components annotation object class.
 * Creates a new annotation object instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgAnnotations.ICColor = function () {
    /**
     * ImgAnnotations.ICColor A Property
     * @type {Number}
     * @property {Number} A Gets or sets the alpha channel value.
     * @param {Number} value Sets the Alpha channel value.
     * @return {Number} Gets the Alpha channel value.
     */
    this.A = 255;
    /**
    * ImgAnnotations.ICColor R Property
    * @type {Number}
    * @property {Number} R Gets or sets the red channel value.
    * @param {Number} value Sets the Red channel value.
    * @return {Number} Gets the Red channel value.
    */
    this.R = 0;
    /**
    * ImgAnnotations.ICColor G Property
    * @type {Number}
    * @property {Number} G Gets or sets the green channel value.
    * @param {Number} value Sets the Green channel value.
    * @return {Number} Gets the Green channel value.
    */
    this.G = 0;
    /**
    * ImgAnnotations.ICColor B Property
    * @type {Number}
    * @property {Number} B Gets or sets the blue channel value.
    * @param {Number} value Sets the Blue channel value.
    * @return {Number} Gets the Blue channel value.
    */
    this.B = 0;

    var _self = this;
    /**
    * ImgAnnotations.ICColor HexColor Property
    * @type {String}
    * @property {String} HexColor Gets or sets the hex color value.
    * @param {String} value Sets the hex color value.
    * @return {String} Gets the hex color value.
    */
    Object.defineProperty(this, 'HexColor',
        {
            get: function () { return _self.colorToHex(); },
            set: function (value) { _self.hexToColor(value); },
            enumerable: true
        });
};

/**
* ImgAnnotations.ICColor hex to color Method
* Sets the ARGB color values.
* @function
* @param {String} hex The color hex value.
*/
ImgAnnotations.ICColor.prototype.hexToColor = function (hex) {
    var result = [];
    var hexValue = hex.replace("#", "");
    var i = 0;
    var x = 0;
    while (hexValue.length > i + 1) {
        var val = hexValue.substring(i, 2 + x);
        var dec = parseInt(val, 16);
        result.push(dec);
        i += 2;
        x += 2;
    }
    if (result.length == 4) {
        this.A = result[0];
        this.R = result[1];
        this.G = result[2];
        this.B = result[3];
    }
    else if (result.length == 3) {
        this.R = result[0];
        this.G = result[1];
        this.B = result[2];
    }
};

/**
* ImgAnnotations.ICColor color to hex Method
* Converts the color value to hex value.
* @function
* @returns {String} The color ARGB hex value.
*/
ImgAnnotations.ICColor.prototype.colorToHex = function () {
    var hexChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    return "#" + (hexChar[(this.R >> 4) & 0x0f] + hexChar[this.R & 0x0f]) +
        (hexChar[(this.G >> 4) & 0x0f] + hexChar[this.G & 0x0f]) +
        (hexChar[(this.B >> 4) & 0x0f] + hexChar[this.B & 0x0f]);
};

/*!
 * The Image Components font class.
 * Creates a new font instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgAnnotations.ICFont = function () {

    /**
    * ImgAnnotations.ICFont Font Family Property
    * @type {String}
    * @property {String} FontFamily Gets or sets the Font family.
    * @param {String} value Sets the Font family.
    * @return {String} Gets the Font family.
    */
    this.FontFamily = "Arial";
    /**
    * ImgAnnotations.ICFont Font Size Property
    * @type {Number}
    * @property {Number} FontSize Get or sets the font size.
    * @param {Number} value Sets the Font Size value.
    * @return {Number} Gets the Font Size value.
    */
    this.FontSize = 11;
    /**
    * ImgAnnotations.ICFont Is Bold Property
    * @type {Boolean}
    * @property {Boolean} IsBold Get or sets the font is bold.
    * @param {Boolean} value Sets the IsBold value.
    * @return {Boolean} Gets the IsBold value.
    */
    this.IsBold = false;
    /**
    * ImgAnnotations.ICFont Is Italic Property
    * @type {Boolean}
    * @property {Boolean} IsItalic Get or sets the font is italic.
    * @param {Boolean} value Sets the IsItalic value.
    * @return {Boolean} Gets the IsItalic value.
    */
    this.IsItalic = false;
    /**
    * ImgAnnotations.ICFont Is Strikeout Property
    * @type {Boolean}
    * @property {Boolean} IsStrikeout Get or sets the font is strikeout.
    * @param {Boolean} value Sets the IsStrikeout value.
    * @return {Boolean} Gets the IsStrikeout value.
    */
    this.IsStrikeout = false;
    /**
    * ImgAnnotations.ICFont Is Underline Property
    * @type {Boolean}
    * @property {Boolean} IsUnderline Get or sets the font is underline.
    * @param {Boolean} value Sets the IsUnderline value.
    * @return {Boolean} Gets the IsUnderline value.
    */
    this.IsUnderline = false;
};

/*!
 * The Image Components error occurred arguments class.
 * Creates a new error occurred arguments instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgAnnotations.ICErrorOccurredArgs = function () {
    /**
    * ImgAnnotations.ICErrorOccurredArgs Control Name Property
    * @readonly
    * @type {String}
    * @property {String} ControlName Gets or sets the control name value.
    * @return {String} Gets the control name value.
    */
    this.ControlName = "";
    /**
    * ImgAnnotations.ICErrorOccurredArgs Method Name Property
    * @readonly
    * @type {String}
    * @property {String} MethodName Gets or sets the method name value.
    * @return {String} Gets the method name value.
    */
    this.MethodName = "";
    /**
    * ImgAnnotations.ICErrorOccurredArgs Error Message Property
    * @readonly
    * @type {String}
    * @property {String} ErrorMessage Gets or sets the error message value.
    * @return {String} Gets the error message value.
    */
    this.ErrorMessage = "";
};