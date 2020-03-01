/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/app.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/js/Tale/Progress.ts":
/*!*********************************!*\
  !*** ./src/js/Tale/Progress.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Progress = /** @class */ (function () {\n    // private _viewerCloseEl: HTMLElement;\n    // private _blockerEl: HTMLElement;\n    // private _user: any;\n    // private _viewerContentEl: HTMLElement;\n    // private _viewerPreviousEl: HTMLElement;\n    // private _viewerNextEl: HTMLElement;\n    // private _currentSlide: number;\n    function Progress(stories) {\n        this._stories = stories;\n        this._progress = document.getElementsByClassName('viewer__progress');\n    }\n    Progress.prototype.addProgress = function () {\n        var bar = document.getElementById('viewer__progressbar');\n        for (var i = 0; i < this._stories.length; i++) {\n            var progress = document.createElement('div');\n            progress.className = 'viewer__progress';\n            bar.appendChild(progress);\n        }\n    };\n    Progress.prototype.setProgressStatus = function (storyId, status) {\n        if (this._progress[storyId]) {\n            var filled = this._progress[storyId].children[0];\n            switch (status) {\n                case 'completed':\n                    filled.classList.remove('viewer__progress--filled');\n                    filled.classList.add('viewer__progress--completed');\n                    break;\n                case 'loading':\n                    filled.classList.remove('viewer__progress--filled');\n                    filled.classList.remove('viewer__progress--completed');\n                    break;\n            }\n        }\n    };\n    Progress.prototype.fillProgress = function (storyId) {\n        if (this._progress[storyId]) {\n            var filled = this._progress[storyId].children[0];\n            if (filled) {\n                filled.classList.add('viewer__progress--filled');\n            }\n            else {\n                var progressFilled = document.createElement('div');\n                progressFilled.className = 'viewer__progress--filled';\n                this._progress[storyId].appendChild(progressFilled);\n            }\n        }\n    };\n    return Progress;\n}());\nexports.default = Progress;\n\n\n//# sourceURL=webpack:///./src/js/Tale/Progress.ts?");

/***/ }),

/***/ "./src/js/Tale/Story.ts":
/*!******************************!*\
  !*** ./src/js/Tale/Story.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Viewer_1 = __importDefault(__webpack_require__(/*! ./Viewer */ \"./src/js/Tale/Viewer.ts\"));\nvar Story = /** @class */ (function () {\n    function Story() {\n        this.viewer = new Viewer_1.default();\n        this._storiesEl = document.getElementById('stories');\n        this.users = 0;\n    }\n    Story.prototype.addStory = function (user) {\n        if (this._storiesEl) {\n            var story = this._createStory(user);\n            this._addUserId(user);\n            this._addUser(user);\n            this._appendToStories(story);\n            this._createMouseEvents(story, user);\n            this.users++;\n        }\n    };\n    Story.prototype._createStory = function (user) {\n        // Story\n        var story = document.createElement('div');\n        story.className = 'story story--seen';\n        // Avatar container\n        var avatarContainer = document.createElement('div');\n        avatarContainer.className = 'story__avatar';\n        story.appendChild(avatarContainer);\n        // Avatar\n        var avatar = document.createElement('IMG');\n        avatar.className = 'photo';\n        avatar.setAttribute('src', user.photo);\n        avatarContainer.appendChild(avatar);\n        // Username\n        var username = document.createElement('span');\n        username.className = 'story__username';\n        username.innerHTML = user.name;\n        story.appendChild(username);\n        return story;\n    };\n    Story.prototype._appendToStories = function (story) {\n        this._storiesEl.appendChild(story);\n    };\n    Story.prototype._addUser = function (user) {\n        this.viewer.stories.push(user);\n    };\n    Story.prototype._addUserId = function (user) {\n        user.id = this.users;\n    };\n    Story.prototype._createMouseEvents = function (story, user) {\n        story.addEventListener('click', this.viewer.openViewer.bind(this.viewer, user));\n    };\n    return Story;\n}());\nexports.default = Story;\n\n\n//# sourceURL=webpack:///./src/js/Tale/Story.ts?");

/***/ }),

/***/ "./src/js/Tale/Viewer.ts":
/*!*******************************!*\
  !*** ./src/js/Tale/Viewer.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Progress_1 = __importDefault(__webpack_require__(/*! ./Progress */ \"./src/js/Tale/Progress.ts\"));\nvar Viewer = /** @class */ (function () {\n    function Viewer() {\n        this._viewerEl = document.getElementById('viewer');\n        this._viewerContentEl = document.getElementById('viewer__content');\n        this._viewerCloseEl = document.getElementById('viewer__close');\n        this._viewerPreviousEl = document.getElementById('viewer__previous');\n        this._viewerNextEl = document.getElementById('viewer__next');\n        this._blockerEl = document.getElementById('blocker');\n        this._currentSlide = 0;\n        this._progress = null;\n        this.stories = [];\n        if (this._viewerEl)\n            this._createMouseEvents();\n    }\n    Viewer.prototype.openViewer = function (user) {\n        if (user.stories) {\n            this._setViewerVisible();\n            this._setMetaData(user);\n            this._setStory(0, user.stories);\n            this._setProgress(user.stories);\n        }\n    };\n    Viewer.prototype._setProgress = function (stories) {\n        this._progress = new Progress_1.default(stories);\n        this._progress.addProgress();\n        this._progress.fillProgress(this._currentSlide);\n    };\n    Viewer.prototype._setStory = function (number, story) {\n        this._viewerContentEl.innerHTML = '';\n        var image = document.createElement('IMG');\n        image.src = story[number].url;\n        var self = this;\n        image.onload = function () {\n            self._viewerContentEl.appendChild(image);\n        };\n        image.onerror = function () {\n            self._viewerContentEl.innerText = 'This image is not available.';\n        };\n        console.log(this._user);\n        this._setCurrentSlide(number);\n    };\n    // private _setCurrentUserId(userId: number) {\n    //   this._currentSlide = storyId;\n    // }\n    Viewer.prototype._setCurrentSlide = function (storyId) {\n        this._currentSlide = storyId;\n    };\n    Viewer.prototype._setMetaData = function (user) {\n        var name = document.getElementById('viewer__name');\n        name.innerText = user.name;\n        this._user = user;\n    };\n    Viewer.prototype._prevStory = function () {\n        if (this._currentSlide == 0)\n            return;\n        this._setStory(this._currentSlide - 1, this._user.stories);\n        if (this._progress != null) {\n            this._progress.setProgressStatus(this._currentSlide + 1, 'loading');\n            // Current slide\n            this._progress.setProgressStatus(this._currentSlide, 'loading');\n            this._progress.fillProgress(this._currentSlide);\n        }\n    };\n    Viewer.prototype._nextStory = function () {\n        if ((this._currentSlide + 1) == this._user.stories.length)\n            return;\n        this._setStory(this._currentSlide + 1, this._user.stories);\n        if (this._progress != null) {\n            this._progress.setProgressStatus(this._currentSlide - 1, 'completed');\n            this._progress.fillProgress(this._currentSlide);\n        }\n    };\n    Viewer.prototype._createMouseEvents = function () {\n        this._viewerCloseEl.addEventListener('click', this._closeViewer.bind(this));\n        this._blockerEl.addEventListener('click', this._closeViewer.bind(this));\n        this._viewerPreviousEl.addEventListener('click', this._prevStory.bind(this));\n        this._viewerNextEl.addEventListener('click', this._nextStory.bind(this));\n    };\n    Viewer.prototype._resetViewer = function () {\n        // Reset progress bars\n        var bar = document.getElementById('viewer__progressbar');\n        bar.innerHTML = '';\n        // Remove content\n        this._viewerContentEl.innerHTML = '';\n    };\n    Viewer.prototype._setViewerVisible = function () {\n        this._viewerEl.classList.remove('viewer--hidden');\n        this._viewerEl.classList.add('viewer--visible');\n        this._blockerEl.classList.remove('blocker--hidden');\n        this._blockerEl.classList.add('blocker--visible');\n    };\n    Viewer.prototype._setViewerHidden = function () {\n        this._viewerEl.classList.add('viewer--hidden');\n        this._viewerEl.classList.remove('viewer--visible');\n        //Todo set timeout for animations\n        this._blockerEl.classList.add('blocker--hidden');\n        this._blockerEl.classList.remove('blocker--visible');\n    };\n    Viewer.prototype._closeViewer = function () {\n        this._setViewerHidden();\n        this._resetViewer();\n    };\n    return Viewer;\n}());\nexports.default = Viewer;\n\n\n//# sourceURL=webpack:///./src/js/Tale/Viewer.ts?");

/***/ }),

/***/ "./src/js/app.ts":
/*!***********************!*\
  !*** ./src/js/app.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__webpack_require__(/*! ../scss/app.scss */ \"./src/scss/app.scss\");\nvar Story_1 = __importDefault(__webpack_require__(/*! ./Tale/Story */ \"./src/js/Tale/Story.ts\"));\nvar story = new Story_1.default();\nstory.addStory({\n    'name': 'Shahiem',\n    'photo': 'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg',\n    'stories': [\n        {\n            type: 'image',\n            date: '06-05-1996',\n            time: '05:06:06',\n            url: 'https://www.ecopetit.cat/wpic/mpic/58-583702_data-src-mac-backgrounds.jpg'\n        },\n        {\n            type: 'image',\n            date: '06-05-1996',\n            time: '05:06:06',\n            url: 'https://www.w3schools.com/w3css/img_snowtops.jpg'\n        },\n        {\n            type: 'image',\n            date: '06-05-1996',\n            time: '05:06:06',\n            url: 'https://www.ecopetit.cat/wpic/mpic/58-583702_data-src-mac-backgrounds.jpg'\n        },\n    ]\n});\nstory.addStory({\n    'name': 'Ddssdsdssdobby',\n    'photo': 'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg',\n    'stories': [\n        {\n            type: 'image',\n            date: '06-05-1996',\n            time: '05:06:06',\n            url: 'https://www.ecopetit.cat/wpic/mpic/5dsdsss8-583702_data-src-mac-backgrounds.jpg'\n        },\n        {\n            type: 'image',\n            date: '06-05-1996',\n            time: '05:06:06',\n            url: 'https://www.jssor.com/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg'\n        },\n    ]\n});\n\n\n//# sourceURL=webpack:///./src/js/app.ts?");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src!../../node_modules/sass-loader/dist/cjs.js!./app.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/scss/app.scss?");

/***/ })

/******/ });