/*!
 * The Image Components Loader.
 *
 * @author   Image Components <info@imagecomponents.net> <https://www.imagecomponents.net>
 * @license  Copyright © ImageComponents 2019
 */
var ICLoader = function () {

    /** @description Private method that requests the scripts from the Image Components Web service. 
    * @param {string} url The Image Components WebApi or WCF web service.
    * @param {function} onComplete The completed initialization callback function.
    * @param {function} onError The failed initialization callback function.
    */
    function request(url, onComplete, onError) {
        try {
            var client = null;
            if (window.XMLHttpRequest)
                client = new XMLHttpRequest();
            else if (window.ActiveXObject)
                client = new ActiveXObject("Microsoft.XMLHTTP");
            if (onComplete) { client.addEventListener("load", onComplete, false); }
            if (onError) { client.addEventListener("error", onError, false); }
            if (url.indexOf('/', url.length - 1) === -1) {
                url = url + '/';
            }
            client.open('GET', url + 'InitializeScripts', true);
            client.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            client.send();
        }
        catch (err) {
            if (onError) { onError(err.message); }
        }
    }

    /** @description Private method that appends the JavaScripts definition to the head of the document.
    * @param {string} name The script name.
    * @param {string} url The script source url.
    * @param {function} onComplete The completed initialization callback function.
    * @param {function} onError The failed initialization callback function.
    */
    function appendToHead(name, url, onComplete, onError) {
        try {
            var newScript = document.createElement("script");
            newScript.id = name;
            if (onError) { newScript.onerror = onError; }
            if (onComplete) { newScript.onload = onComplete; }
            document.head.appendChild(newScript);
            newScript.src = url;
        }
        catch (err) {
            if (onError) { onError(err.message); }
        }
    }

    /** @description Gets and initializes the required Image Components JavaScript files.
    * @param {string} url The Image Components WebApi or WCF web service.
    * @param {function} onComplete The completed initialization callback function.
    * @param {function} onError The failed initialization callback function.
    */
    this.Initialize = function (url, onComplete, onError) {
        try {
            var _count = -1;
            request(url, function (e) {
                var _res = JSON.parse(e.target.response);
                if (_res && _res.length > 0) {
                    var _completed = function (e) {
                        _count += 1;
                        if (_count === _res.length) {
                            if (onComplete) { onComplete(true); }
                        }
                        else {
                            var _elem = document.getElementById(_res[_count].ScriptName);
                            if (_elem === undefined || _elem === null) {
                                appendToHead(_res[_count].ScriptName, 'data:text/javascript,' +
                                    encodeURIComponent(_res[_count].ScriptSource), _completed, onError);
                            }
                        }
                    };
                    _completed();
                }
            }, onError);
        }
        catch (err) {
            if (onError) { onError(err.message); }
        }

    };

};
ICLoader = new ICLoader();
