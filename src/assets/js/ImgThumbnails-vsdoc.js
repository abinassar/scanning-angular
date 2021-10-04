/*!
 * The Image Components ImgThumbnails class.
 * Creates a new ImgThumbnails component instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
var ImgThumbnails = function () {

    /**
    * ImgThumbnails ImgEdit Component Property
    * @type {ImgEdit}
    * @property {ImgEdit} EnableSelectionTypeGets or sets the ImgEdit container component.
    * @param {ImgEdit} value Sets the ImgEditComponent value.
    * @return {ImgEdit} Gets the ImgEditComponent value.
    */
    this.ImgEditComponent = null;
    /**
    * ImgThumbnails Selected Thumbnail Property
    * @type {Number}
    * @property {Number} SelectedThumbnail Gets or sets the selected index position of the selected image thumbnail.
    * @param {Number} value Sets the SelectedThumbnail value.
    * @return {Number} Gets the SelectedThumbnail value.
    */
    this.SelectedThumbnail = 0;
    /**
    * ImgThumbnails Draw Annotations Property
    * @type {Boolean}
    * @property {Boolean} DrawAnnotations Gets or sets the draw annotations on image thumbnail value.
    * @param {Boolean} value Sets the DrawAnnotations value.
    * @return {Boolean} Gets the DrawAnnotations value.
    */
    this.DrawAnnotations = false;
    /**
    * ImgThumbnails Selected Thumbnails Property
    * @type {Number[]}
    * @property {Number[]} SelectedThumbnails Gets the collection of the selected image thumbnails index positions.
    * @param {Number[]} value Sets the SelectedThumbnails value.
    * @return {Number[]} Gets the SelectedThumbnails value.
    */
    this.SelectedThumbnails = null;
    /**
    * ImgThumbnails Default Thumbnail Caption Property
    * @type {String}
    * @property {String} DefaultThumbnailCaption Gets or sets the image thumbnails default caption text.
    * @param {String} value Sets the DefaultThumbnailCaption value.
    * @return {String} Gets the DefaultThumbnailCaption value.
    */
    this.DefaultThumbnailCaption = null;
    /**
    * ImgThumbnails Show Caption Numbers Property
    * @type {Boolean}
    * @property {Boolean} ShowCaptionNumbers Gets or sets the display of the caption numbers.
    * @param {Boolean} value Sets the ShowCaptionNumbers value.
    * @return {Boolean} Gets the ShowCaptionNumbers value.
    */
    this.ShowCaptionNumbers = false;
    /**
    * ImgThumbnails Caption Start Number Property
    * @type {Number}
    * @property {Number} CaptionStartNumber Gets or sets the image thumbnails starting caption number.
    * @param {Number} value Sets the CaptionStartNumber value.
    * @return {Number} Gets the CaptionStartNumber value.
    */
    this.CaptionStartNumber = 0;
    /**
    * ImgThumbnails Thumbnails Count Property
    * @type {Number}
    * @property {Number} ThumbnailsCount Gets the number of thumbnails of the loaded image.
    * @param {Number} value Sets the ThumbnailsCount value.
    * @return {Number} Gets the ThumbnailsCount value.
    */
    this.ThumbnailsCount = null;
    /**
    * ImgThumbnails Image Thumbnail Objects Property
    * @type {ImgThumbnails.ICThumbnailObject[]}
    * @property {ImgThumbnails.ICThumbnailObject[]} ImageThumbnailObjects Gets the image thumbnail objects of the loaded image.
    * @param {ImgThumbnails.ICThumbnailObject[]} value Sets the ImageThumbnailObjects value.
    * @return {ImgThumbnails.ICThumbnailObject[]} Gets the ImageThumbnailObjects value.
    */
    this.ImageThumbnailObjects = null;
    /**
    * ImgThumbnails Thumbnail Size Property
    * @type {ImgThumbnails.ICSize}
    * @property {ImgThumbnails.ICSize} ThumbnailSize Gets or sets the displayed image thumbnails size.
    * @param {ImgThumbnails.ICSize} value Sets the ThumbnailSize value.
    * @return {ImgThumbnails.ICSize} Gets the ThumbnailSize value.
    */
    this.ThumbnailSize = null;
    /**
    * ImgThumbnails Thumbnails Orientation Property
    * @type {ImgThumbnails.DisplayLayout}
    * @property {ImgThumbnails.DisplayLayout} ThumbnailsOrientation Gets or sets the thumbnails display layout orientation.
    * @param {ImgThumbnails.DisplayLayout} value Sets the ThumbnailsOrientation value.
    * @return {ImgThumbnails.DisplayLayout} Gets the ThumbnailsOrientation value.
    */
    this.ThumbnailsOrientation = ImgThumbnails.DisplayLayout.Auto;
    /**
    * ImgThumbnails Thumbnail Selection Border Color Property
    * @type {ImgThumbnails.ICColor}
    * @property {ImgThumbnails.ICColor} ThumbnailSelectionBorderColor Gets or sets the thumbnails selection border color.
    * @param {ImgThumbnails.ICColor} value Sets the ThumbnailSelectionBorderColor value.
    * @return {ImgThumbnails.ICColor} Gets the ThumbnailSelectionBorderColor value.
    */
    this.ThumbnailSelectionBorderColor = null;
    /**
    * ImgThumbnails Thumbnail Border Color Property
    * @type {ImgThumbnails.ICColor}
    * @property {ImgThumbnails.ICColor} ThumbnailBorderColor Gets or sets the thumbnails border color.
    * @param {ImgThumbnails.ICColor} value Sets the ThumbnailBorderColor value.
    * @return {ImgThumbnails.ICColor} Gets the ThumbnailBorderColor value.
    */
    this.ThumbnailBorderColor = null;
    /**
    * ImgThumbnails Thumbnail Background Property
    * @type {ImgThumbnails.ICColor}
    * @property {ImgThumbnails.ICColor} ThumbnailBackground Gets or sets the thumbnails background color.
    * @param {ImgThumbnails.ICColor} value Sets the ThumbnailBackground value.
    * @return {ImgThumbnails.ICColor} Gets the ThumbnailBackground value.
    */
    this.ThumbnailBackground = null;
    /**
    * ImgThumbnails Thumbnail Selection Thickness Property
    * @type {Number}
    * @property {Number} ThumbnailSelectionThickness Gets or sets the thumbnails selection thickness.
    * @param {Number} value Sets the ThumbnailSelectionThickness value.
    * @return {Number} Gets the ThumbnailSelectionThickness value.
    */
    this.ThumbnailSelectionThickness = 0;
    /**
    * ImgThumbnails Thumbnail Highlight Color Property
    * @type {ImgThumbnails.ICColor}
    * @property {ImgThumbnails.ICColor} ThumbnailHighlightColor Gets or sets the thumbnails highlight color.
    * @param {ImgThumbnails.ICColor} value Sets the ThumbnailHighlightColor value.
    * @return {ImgThumbnails.ICColor} Gets the ThumbnailHighlightColor value.
    */
    this.ThumbnailHighlightColor = null;
    /**
    * ImgThumbnails Thumbnail Caption Foreground Property
    * @type {ImgThumbnails.ICColor}
    * @property {ImgThumbnails.ICColor} ThumbnailCaptionForeground Gets or sets the thumbnails caption foreground.
    * @param {ImgThumbnails.ICColor} value Sets the ThumbnailCaptionForeground value.
    * @return {ImgThumbnails.ICColor} Gets the ThumbnailCaptionForeground value.
    */
    this.ThumbnailCaptionForeground = null;
    /**
    * ImgThumbnails Thumbnail Caption Font Property
    * @type {ImgThumbnails.ICFont}
    * @property {ImgThumbnails.ICFont} ThumbnailCaptionFont Gets or sets the thumbnails caption font.
    * @param {ImgThumbnails.ICFont} value Sets the ThumbnailCaptionFont value.
    * @return {ImgThumbnails.ICFont} Gets the ThumbnailCaptionFont value.
    */
    this.ThumbnailCaptionFont = null;
    /**
    * ImgThumbnails Drop Shadow Property
    * @type {Boolean}
    * @property {Boolean} DropShadow Gets or sets the thumbnails drop shadow.
    * @param {Boolean} value Sets the DropShadow value.
    * @return {Boolean} Gets the DropShadow value.
    */
    this.DropShadow = false;
    /**
    * ImgThumbnails Thumbnails Max Rows Property
    * @type {Number}
    * @property {Number} ThumbnailsMaxRows Gets or sets the maximum number of thumbnails columns or rows.
    * @param {Number} value Sets the ThumbnailsMaxRows value.
    * @return {Number} Gets the ThumbnailsMaxRows value.
    */
    this.ThumbnailsMaxRows = 0;
    /**
    * ImgThumbnails Version Property
    * @type {String}
    * @property {String}  Version Gets the image thumbnails component version.
    * @param {String} value Sets the Version value.
    * @return {String} Gets the Version value.
    */
    this.Version = null;

    /**
    * Thumbnail loaded add event handler.
    * Adds the thumbnail loaded event handler.
    * @function
    * @param {function(ImgThumbnails,ImgThumbnails.ICThumbnailObject)} h Event handler function.
    */
    this.add_ThumbnailLoaded = function (h) {
    };

    /**
    * Thumbnail loaded remove event handler.
    * Removes the thumbnail loaded event handler.
    * @function
    * @param {function(ImgThumbnails,ImgThumbnails.ICThumbnailObject)} h Event handler function.
    */
    this.remove_ThumbnailLoaded = function (h) {
    };

    /**
    * Occurs every time the thumbnail is loaded.
    * @event ThumbnailLoaded Raises the thumbnail loaded event handler.
    * @param {ImgThumbnails} s ImgThumbnails component object.
    * @param {ImgThumbnails.ICThumbnailObject} e The image thumbnail object.
    */
    this.ThumbnailLoaded = function (s, e) {
    };
    /**
    * Thumbnail selected add event handler.
    * Adds the thumbnail selected event handler.
    * @function
    * @param {function(ImgThumbnails,ImgThumbnails.ICThumbnailObject)} h Event handler function.
    */
    this.add_ThumbnailSelected = function (h) {
    };
    /**
    * Thumbnail selected remove event handler.
    * Removes the thumbnail selected event handler.
    * @param {function(ImgThumbnails,ImgThumbnails.ICThumbnailObject)} h Event handler function.
    */
    this.remove_ThumbnailSelected = function (h) {
    };
    /**
    * Occurs every time the thumbnail is selected.
    * @event ThumbnailSelected Raises the thumbnail selected event handler.
    * @param {ImgThumbnails} s ImgThumbnails component object.
    * @param {ImgThumbnails.ICThumbnailObject} e The image thumbnail object.
    */
    this.ThumbnailSelected = function (s, e) {
    };
    /**
    * Thumbnail drag started add event handler.
    * Adds the thumbnail drag started event handler.
    * @param {function(ImgThumbnails,ImgThumbnails.ICThumbnailObject)} h Event handler function.
    */
    this.add_ThumbnailDragStarted = function (h) {
    };
    /**
    * Thumbnail drag started remove event handler.
    * Removes the thumbnail drag started event handler.
    * @param {function(ImgThumbnails,ImgThumbnails.ICThumbnailObject)} h Event handler function.
    */
    this.remove_ThumbnailDragStarted = function (h) {
    };
    /**
    * Occurs every time the thumbnail drag is started.
    * @event ThumbnailDragStarted Raises the thumbnail drag started event handler.
    * @param {ImgThumbnails} s ImgThumbnails component object.
    * @param {ImgThumbnails.ICThumbnailObject} e The dragged image thumbnail object.
    */
    this.ThumbnailDragStarted = function (s, e) {
    };
    /**
    * Thumbnail drag finished add event handler.
    * Adds the thumbnail drag finished event handler.
    * @param {function(ImgThumbnails,ImgThumbnails.ICThumbnailDragArgs)} h Event handler function.
    */
    this.add_ThumbnailDragFinished = function (h) {
    };
    /**
    * Thumbnail drag finished remove event handler.
    * Removes the thumbnail drag finished event handler.
    * @param {function(ImgThumbnails,ImgThumbnails.ICThumbnailDragArgs)} h Event handler function.
    */
    this.remove_ThumbnailDragFinished = function (h) {
    };
    /**
    * Occurs every time the thumbnail drag is finished.
    * @event ThumbnailDragFinished Raises the thumbnail drag finished event handler.
    * @param {ImgThumbnails} s ImgThumbnails component object.
    * @param {ImgThumbnails.ICThumbnailDragArgs} e The image thumbnail drag and drop objects.
    */
    this.ThumbnailDragFinished = function (s, e) {
    };
    /**
    * ImgThumbnails drag start add event handler.
    * Adds the ImgThumbnails drag start event handler.
    * @param {function(ImgThumbnails,Object)} h Event handler function.
    */
    this.add_ImgThumbnailsDragStart = function (h) {
    };
    /**
    * ImgThumbnails drag start remove event handler.
    * Removes the ImgThumbnails drag start event handler.
    * @param {function(ImgThumbnails,Object)} h Event handler function.
    */
    this.remove_ImgThumbnailsDragStart = function (h) {
    };
    /**
    * Occurs every time the ImgThumbnails drag is started.
    * @event ImgThumbnailsDragStart Raises the ImgThumbnails drag start event handler.
    * @param {ImgThumbnails} s ImgThumbnails component object.
    * @param {Object} e The drag event API object.
    */
    this.ImgThumbnailsDragStart = function (s, e) {
    };
    /**
    * ImgThumbnails drag end add event handler.
    * Adds the ImgThumbnails drag end event handler.
    * @param {function(ImgThumbnails,Object)} h Event handler function.
    */
    this.add_ImgThumbnailsDragEnd = function (h) {
    };
    /**
    * ImgThumbnails drag end remove event handler.
    * Removes the ImgThumbnails drag end event handler.
    * @param {function(ImgThumbnails,Object)} h Event handler function.
    */
    this.remove_ImgThumbnailsDragEnd = function (h) {
    };
    /**
    * Occurs every time the ImgThumbnails drag is ended.
    * @event ImgThumbnailsDragEnd Raises the ImgThumbnails drag end event handler.
    * @param {ImgThumbnails} s ImgThumbnails component object.
    * @param {Object} e The drag event API object.
    */
    this.ImgThumbnailsDragEnd = function (s, e) {
    };
    /**
    * Thumbnail clicked add event handler.
    * Adds the thumbnail clicked event handler.
    * @param {function(ImgThumbnails,ImgThumbnails.ICThumbnailObject)} h Event handler function.
    */
    this.add_ThumbnailClicked = function (h) {
    };
    /**
    * Thumbnail clicked remove event handler.
    * Removes the thumbnail clicked event handler.
    * @param {function(ImgThumbnails,ImgThumbnails.ICThumbnailObject)} h Event handler function.
    */
    this.remove_ThumbnailClicked = function (h) {
    };
    /**
    * Occurs every time the thumbnail is clicked.
    * @event ThumbnailClicked Raises the thumbnail click handler.
    * @param {ImgThumbnails} s ImgThumbnails component object.
    * @param {ImgThumbnails.ICThumbnailObject} e The image thumbnail object.
    */
    this.ThumbnailClicked = function (s, e) {
    };

    /**
    * Thumbnail double clicked add event handler.
    * Adds the thumbnail double clicked event handler.
    * @param {function(ImgThumbnails,ImgThumbnails.ICThumbnailObject)} h Event handler function.
    */
    this.add_ThumbnailDoubleClicked = function (h) {
    };

    /**
    * Thumbnail double clicked remove event handler.
    * Removes the thumbnail double click event handler.
    * @param {function(ImgThumbnails,ImgThumbnails.ICThumbnailObject)} h Event handler function.
    */
    this.remove_ThumbnailDoubleClicked = function (h) {
    };

    /**
    * Occurs every time the thumbnail is double clicked.
    * @event ThumbnailClicked Raises the thumbnail double click handler.
    * @param {ImgThumbnails} s ImgThumbnails component object.
    * @param {ImgThumbnails.ICThumbnailObject} e The image thumbnail object.
    */
    this.ThumbnailDoubleClicked = function (s, e) {
    };

    /**
   * Request started add event handler.
   * Adds the request started event handler.
   * @function
   * @param {function(ImgThumbnails)} h Event handler function.
   */
    this.add_RequestStarted = function (h) {
    };
    /**
    * Request started remove event handler.
    * Remove the request started event handler.
    * @function
    * @param {function(ImgThumbnails)} h Event handler function.
    */
    this.remove_RequestStarted = function (h) {
    };
    /**
    * Occurs every started web service request.
    * @event RequestStarted Raises the request started event handler.
    * @param {ImgThumbnails} s The ImgThumbnails component object.
    */
    this.RequestStarted = function (s) {
    };

    /**
    * Request finished add event handler.
    * Adds the request finished event handler.
    * @function
    * @param {function(ImgThumbnails)} h Event handler function.
    */
    this.add_RequestFinished = function (h) {
    };
    /**
    * Request finished remove event handler.
    * Removes the request finished event handler.
    * @function
    * @param {function(ImgThumbnails)} h Event handler function.
    */
    this.remove_RequestFinished = function (h) {
    };
    /**
    * Occurs every finished web service request.
    * @event RequestFinished Raises the request finished event handler.
    * @param {ImgThumbnails} s The ImgThumbnails component object.
    */
    this.RequestFinished = function (s) {
    };
    /**
    * Error occurred add event handler.
    * Adds the error occurred add event handler.
    * @function
    * @param {function(ImgThumbnails,ImgThumbnails.ICErrorOccurredArgs)} h Event handler function.
    */
    this.add_ErrorOccurred = function (h) {
    };
    /**
    * Error occurred remove event handler.
    * Removes the error occurred add event handler.
    * @function
    * @param {function(ImgThumbnails,ImgThumbnails.ICErrorOccurredArgs)} h Event handler function.
    */
    this.remove_ErrorOccurred = function (h) {
    };
    /**
    * Occurs every time one error is raised.
    * @event ErrorOccurred Raises the error occurred event handler.
    * @param {ImgThumbnails} s The ImgThumbnails component object.
    * @param {ImgThumbnails.ICErrorOccurredArgs} e The control name, method and description that raised the error.
    */
    this.ErrorOccurred = function (s, e) {
    };

};

/**
* ImgThumbnails Add Event Listener Method
* Adds a listener to an event by name.
* @function
* @param {String} eventName The event name.
* @param {Function} handler The event callback method to be raised.
*/
ImgThumbnails.prototype.addEventListener = function (eventName, handler) {
};

/**
* ImgThumbnails Remove Event Listener Method
* Removes the listener of an event by name.
* @function
* @param {String} eventName The event name.
* @param {Function} handler The event callback method to be removed from the event.
*/
ImgThumbnails.prototype.removeEventListener = function (eventName, handler) {
};

/**
* ImgThumbnails Scroll Position Method
* Scrolls the control to the specified position.
* @function
* @param {Number} x Sets the x scroll position.
* @param {Number} y Sets the y scroll position.
*/
ImgThumbnails.prototype.ScrollPosition = function (x, y) {
};

/**
* ImgThumbnails Refresh Layout Method
* Refreshes the displayed thumbnails layout.
* @function
*/
ImgThumbnails.prototype.RefreshLayout = function () {
};

/**
* ImgThumbnails Apply Object Values Method
* Applies the property values of the specified thumbnail object.
* @function
* @param {ImgThumbnails.ICThumbnailObject} obj The thumbnail object with changed values.
*/
ImgThumbnails.prototype.ApplyObjectValues = function (obj) {
};

/**
* ImgThumbnails ImgThumbnails Refresh Method
* Reloads all displayed thumbnails objects.
* @function
*/
ImgThumbnails.prototype.ImgThumbnailsRefresh = function () {
};

/**
* ImgThumbnails ImgThumbnails Page Refresh Method
* Reloads the specified index thumbnail object.
* @function
* @param {Number} pageIndex The index position of the thumbnail object.
*/
ImgThumbnails.prototype.ImgThumbnailsPageRefresh = function (pageIndex) {
};

/**
* ImgThumbnails Close Method
* Closes the image thumbnails from display and from memory.
* @function
*/
ImgThumbnails.prototype.Close = function () {
};

/**
* ImgThumbnails Dispose Method
* Releases all the in use ImgThumbnails memory objects.
* @function
*/
ImgThumbnails.prototype.Dispose = function () {
};

/**
* Thumbnails display layout enumeration.
* @readonly
* @enum {number}
*/
ImgThumbnails.DisplayLayout = {
    /** Thumbnails vertical layout. */
    Auto: -1,
    /** Thumbnails vertical layout. */
    Vertical: 0,
    /** Thumbnails horizontal layout. */
    Horizontal: 1,
    /** Thumbnails warp layout. */
    Wrap: 2
};

/*!
 * The Image Components thumbnail object class.
 * Creates a new thumbnail object instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgThumbnails.ICThumbnailObject = function () {
    /**
    * ImgThumbnails.ICThumbnailObject X Property
    * @type {Number}
    * @property {Number} X Get or sets the X position value.
    * @param {Number} value Sets the X value.
    * @return {Number} Gets the X value.
    */
    this.X = 0;
    /**
    * ImgThumbnails.ICThumbnailObject Y Property
    * @type {Number}
    * @property {Number} Y Gets or sets the Y position value.
    * @param {Number} value Sets the Y value.
    * @return {Number} Gets the Y value.
    */
    this.Y = 0;
    /**
    * ImgThumbnails.ICThumbnailObject Width Property
    * @type {Number}
    * @property {Number} Width Gets or sets the Width position value.
    * @param {Number} value Sets the Width value.
    * @return {Number} Gets the Width value.
    */
    this.Width = 0;
    /**
    * ImgThumbnails.ICThumbnailObject Height Property
    * @type {Number}
    * @property {Number} Height Gets or sets the Height position value.
    * @param {Number} value Sets the Height value.
    * @return {Number} Gets the Height value.
    */
    this.Height = 0;
    /**
    * ImgThumbnails.ICThumbnailObject Index Property
    * @type {Number}
    * @property {Number} Index Gets or sets the thumbnail index value.
    * @param {Number} value Sets the Index value.
    * @return {Number} Gets the Index value.
    */
    this.Index = 0;
    /**
    * ImgThumbnails.ICThumbnailObject Is Selected Property
    * @type {Boolean}
    * @property {Number} IsSelected Gets or sets the thumbnail selected value.
    * @param {Boolean} value Sets the IsSelected value.
    * @return {Boolean} Gets the IsSelected value.
    */
    this.IsSelected = false;
    /**
    * ImgThumbnails.ICThumbnailObject Caption Property
    * @type {String}
    * @property {String} Caption Gets or sets the thumbnail caption.
    * @param {String} value Sets the Caption value.
    * @return {String} Gets the Caption value.
    */
    this.Caption = "";
    /**
    * ImgThumbnails.ICThumbnailObject High Light Color Brush Property
    * @type {ImgThumbnails.ICColor}
    * @property {ImgThumbnails.ICColor} HighLightColorBrush Gets or sets the thumbnail highlight color brush.
    * @param {ImgThumbnails.ICColor} value Sets the HighLightColorBrush value.
    * @return {ImgThumbnails.ICColor} Gets the HighLightColorBrush value.
    */
    this.HighLightColorBrush = new ICColor();
    /**
    * ImgThumbnails.ICThumbnailObject Back Color Property
    * @type {ImgThumbnails.ICColor}
    * @property {ImgThumbnails.ICColor} BackColor Gets or sets the thumbnail back color.
    * @param {ImgThumbnails.ICColor} value Sets the BackColor value.
    * @return {ImgThumbnails.ICColor} Gets the BackColor value.
    */
    this.BackColor = new ICColor();
    /**
    * ImgThumbnails.ICThumbnailObject Selection Thickness Property
    * @type {Number}
    * @property {Number} SelectionThickness Gets or sets the thumbnail selection thickness value.
    * @param {Number} value Sets the SelectionThickness value.
    * @return {Number} Gets the SelectionThickness value.
    */
    this.SelectionThickness = 1;
    /**
    * ImgThumbnails.ICThumbnailObject Selection Border Color Property
    * @type {ImgThumbnails.ICColor}
    * @property {ImgThumbnails.ICColor} SelectionBorderColor Gets or sets the thumbnail selection border color.
    * @param {ImgThumbnails.ICColor} value Sets the SelectionBorderColor value.
    * @return {ImgThumbnails.ICColor} Gets the SelectionBorderColor value.
    */
    this.SelectionBorderColor = new ICColor();
    /**
    * ImgThumbnails.ICThumbnailObject Border Color Property
    * @type {ImgThumbnails.ICColor}
    * @property {ImgThumbnails.ICColor} BorderColor Gets or sets the thumbnail border color.
    * @param {ImgThumbnails.ICColor} value Sets the BorderColor value.
    * @return {ImgThumbnails.ICColor} Gets the BorderColor value.
    */
    this.BorderColor = new ICColor();
    /**
    * ImgThumbnails.ICThumbnailObject Caption Foreground Property
    * @type {ImgThumbnails.ICColor}
    * @property {ImgThumbnails.ICColor} CaptionForeground Gets or sets the thumbnail caption foreground.
    * @param {ImgThumbnails.ICColor} value Sets the CaptionForeground value.
    * @return {ImgThumbnails.ICColor} Gets the CaptionForeground value.
    */
    this.CaptionForeground = new ICColor();
    /**
    * ImgThumbnails.ICThumbnailObject Caption Font Property
    * @type {ImgThumbnails.ICFont}
    * @property {ImgThumbnails.ICFont} CaptionFont Gets or sets the thumbnail caption font.
    * @param {ImgThumbnails.ICFont} value Sets the CaptionFont value.
    * @return {ImgThumbnails.ICFont} Gets the CaptionFont value.
    */
    this.CaptionFont = new ICFont();
};

/*!
 * The Image Components thumbnail drag arguments class.
 * Creates a new thumbnail drag arguments instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgThumbnails.ICThumbnailDragArgs = function () {
    /**
    * ImgThumbnails.ICThumbnailDragArgs Drag Thumbnail Property
    * @readonly
    * @type {ImgThumbnails.ICThumbnailObject}
    * @property {ImgThumbnails.ICThumbnailObject} DragThumbnail Gets the drag image thumbnail object.
    * @return {ImgThumbnails.ICThumbnailObject} Gets the drag image thumbnail object.
    */
    this.DragThumbnail = new ImgThumbnails.ICThumbnailObject();
    /**
    * ImgThumbnails.ICThumbnailDragArgs Drop Thumbnail Property
    * @readonly
    * @type {ImgThumbnails.ICThumbnailObject}
    * @property {ImgThumbnails.ICThumbnailObject} DropThumbnail Gets the drop image thumbnail object.
    * @return {ImgThumbnails.ICThumbnailObject} Gets the drop image thumbnail object.
    */
    this.DropThumbnail = new ImgThumbnails.ICThumbnailObject();
};


/*!
 * The Image Components size class.
 * Creates a new size instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgThumbnails.ICSize = function () {
    /**
     * ImgThumbnails.ICSize Width Property
     * @type {Number}
     * @property {Number} ImagePrintFitOptions Gets or sets the Size Width value.
     * @param {Number}   value Sets the rectangle Size value.
     * @return {Number} Gets the rectangle Size value.
     */
    this.width = 0;
    /**
    * ImgThumbnails.ICSize Height Property
    * @type {Number}
    * @property {Number} ImagePrintPageOptions Gets or sets the Size Height value.
    * @param {Number}   value Sets the Size Height value.
    * @return {Number} Gets the Size Height value.
    */
    this.height = 0;
};

/*!
 * The Image Components annotation object class.
 * Creates a new annotation object instance.
 * @class
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2020
 */
ImgThumbnails.ICColor = function () {
    /**
     * ImgThumbnails.ICColor A Property
     * @type {Number}
     * @property {Number} A Gets or sets the alpha channel value.
     * @param {Number} value Sets the Alpha channel value.
     * @return {Number} Gets the Alpha channel value.
     */
    this.A = 255;
    /**
    * ImgThumbnails.ICColor R Property
    * @type {Number}
    * @property {Number} R Gets or sets the red channel value.
    * @param {Number} value Sets the Red channel value.
    * @return {Number} Gets the Red channel value.
    */
    this.R = 0;
    /**
    * ImgThumbnails.ICColor G Property
    * @type {Number}
    * @property {Number} G Gets or sets the green channel value.
    * @param {Number} value Sets the Green channel value.
    * @return {Number} Gets the Green channel value.
    */
    this.G = 0;
    /**
    * ImgThumbnails.ICColor B Property
    * @type {Number}
    * @property {Number} B Gets or sets the blue channel value.
    * @param {Number} value Sets the Blue channel value.
    * @return {Number} Gets the Blue channel value.
    */
    this.B = 0;

    var _self = this;
    /**
    * ImgThumbnails.ICColor HexColor Property
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
* ImgThumbnails.ICColor hex to color Method
* Sets the ARGB color values.
* @function
* @param {String} hex The color hex value.
*/
ImgThumbnails.ICColor.prototype.hexToColor = function (hex) {
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
* ImgThumbnails.ICColor color to hex Method
* Converts the color value to hex value.
* @function
* @returns {String} The color ARGB hex value.
*/
ImgThumbnails.ICColor.prototype.colorToHex = function () {
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
ImgThumbnails.ICFont = function () {

    /**
    * ImgThumbnails.ICFont Font Family Property
    * @type {String}
    * @property {String} FontFamily Gets or sets the Font family.
    * @param {String} value Sets the Font family.
    * @return {String} Gets the Font family.
    */
    this.FontFamily = "Arial";
    /**
    * ImgThumbnails.ICFont Font Size Property
    * @type {Number}
    * @property {Number} FontSize Get or sets the font size.
    * @param {Number} value Sets the Font Size value.
    * @return {Number} Gets the Font Size value.
    */
    this.FontSize = 11;
    /**
    * ImgThumbnails.ICFont Is Bold Property
    * @type {Boolean}
    * @property {Boolean} IsBold Get or sets the font is bold.
    * @param {Boolean} value Sets the IsBold value.
    * @return {Boolean} Gets the IsBold value.
    */
    this.IsBold = false;
    /**
    * ImgThumbnails.ICFont Is Italic Property
    * @type {Boolean}
    * @property {Boolean} IsItalic Get or sets the font is italic.
    * @param {Boolean} value Sets the IsItalic value.
    * @return {Boolean} Gets the IsItalic value.
    */
    this.IsItalic = false;
    /**
    * ImgThumbnails.ICFont Is Strikeout Property
    * @type {Boolean}
    * @property {Boolean} IsStrikeout Get or sets the font is strikeout.
    * @param {Boolean} value Sets the IsStrikeout value.
    * @return {Boolean} Gets the IsStrikeout value.
    */
    this.IsStrikeout = false;
    /**
    * ImgThumbnails.ICFont Is Underline Property
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
ImgThumbnails.ICErrorOccurredArgs = function () {
    /**
    * ImgThumbnails.ICErrorOccurredArgs Control Name Property
    * @readonly
    * @type {String}
    * @property {String} ControlName Gets or sets the control name value.
    * @return {String} Gets the control name value.
    */
    this.ControlName = "";
    /**
    * ImgThumbnails.ICErrorOccurredArgs Method Name Property
    * @readonly
    * @type {String}
    * @property {String} MethodName Gets or sets the method name value.
    * @return {String} Gets the method name value.
    */
    this.MethodName = "";
    /**
    * ImgThumbnails.ICErrorOccurredArgs Error Message Property
    * @readonly
    * @type {String}
    * @property {String} ErrorMessage Gets or sets the error message value.
    * @return {String} Gets the error message value.
    */
    this.ErrorMessage = "";
};