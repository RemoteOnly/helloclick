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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/validatorjs/src/async.js":
/***/ (function(module, exports) {

function AsyncResolvers(onFailedOne, onResolvedAll) {
  this.onResolvedAll = onResolvedAll;
  this.onFailedOne = onFailedOne;
  this.resolvers = {};
  this.resolversCount = 0;
  this.passed = [];
  this.failed = [];
  this.firing = false;
}

AsyncResolvers.prototype = {

  /**
   * Add resolver
   *
   * @param {Rule} rule
   * @return {integer}
   */
  add: function(rule) {
    var index = this.resolversCount;
    this.resolvers[index] = rule;
    this.resolversCount++;
    return index;
  },

  /**
   * Resolve given index
   *
   * @param  {integer} index
   * @return {void}
   */
  resolve: function(index) {
    var rule = this.resolvers[index];
    if (rule.passes === true) {
      this.passed.push(rule);
    } else if (rule.passes === false) {
      this.failed.push(rule);
      this.onFailedOne(rule);
    }

    this.fire();
  },

  /**
   * Determine if all have been resolved
   *
   * @return {boolean}
   */
  isAllResolved: function() {
    return (this.passed.length + this.failed.length) === this.resolversCount;
  },

  /**
   * Attempt to fire final all resolved callback if completed
   *
   * @return {void}
   */
  fire: function() {

    if (!this.firing) {
      return;
    }

    if (this.isAllResolved()) {
      this.onResolvedAll(this.failed.length === 0);
    }

  },

  /**
   * Enable firing
   *
   * @return {void}
   */
  enableFiring: function() {
    this.firing = true;
  }

};

module.exports = AsyncResolvers;


/***/ }),

/***/ "./node_modules/validatorjs/src/attributes.js":
/***/ (function(module, exports) {

var replacements = {

  /**
   * Between replacement (replaces :min and :max)
   *
   * @param  {string} template
   * @param  {Rule} rule
   * @return {string}
   */
  between: function(template, rule) {
    var parameters = rule.getParameters();
    return this._replacePlaceholders(rule, template, {
      min: parameters[0],
      max: parameters[1]
    });
  },

  /**
   * Required_if replacement.
   *
   * @param  {string} template
   * @param  {Rule} rule
   * @return {string}
   */
  required_if: function(template, rule) {
    var parameters = rule.getParameters();
    return this._replacePlaceholders(rule, template, {
      other: parameters[0],
      value: parameters[1]
    });
  },

  /**
   * Required_unless replacement.
   *
   * @param  {string} template
   * @param  {Rule} rule
   * @return {string}
   */
  required_unless: function(template, rule) {
    var parameters = rule.getParameters();
    return this._replacePlaceholders(rule, template, {
      other: parameters[0],
      value: parameters[1]
    });
  },

  /**
   * Required_with replacement.
   *
   * @param  {string} template
   * @param  {Rule} rule
   * @return {string}
   */
  required_with: function(template, rule) {
    var parameters = rule.getParameters();
    return this._replacePlaceholders(rule, template, {
      field: parameters[0]
    });
  },

  /**
   * Required_with_all replacement.
   *
   * @param  {string} template
   * @param  {Rule} rule
   * @return {string}
   */
  required_with_all: function(template, rule) {
    var parameters = rule.getParameters();
    return this._replacePlaceholders(rule, template, {
      fields: parameters.join(', ')
    });
  },

  /**
   * Required_without replacement.
   *
   * @param  {string} template
   * @param  {Rule} rule
   * @return {string}
   */
  required_without: function(template, rule) {
    var parameters = rule.getParameters();
    return this._replacePlaceholders(rule, template, {
      field: parameters[0]
    });
  },

  /**
   * Required_without_all replacement.
   *
   * @param  {string} template
   * @param  {Rule} rule
   * @return {string}
   */
  required_without_all: function(template, rule) {
    var parameters = rule.getParameters();
    return this._replacePlaceholders(rule, template, {
      fields: parameters.join(', ')
    });
  },

 /**
   * After replacement.
   *
   * @param  {string} template
   * @param  {Rule} rule
   * @return {string}
   */
  after: function(template, rule) {
    var parameters = rule.getParameters();
    return this._replacePlaceholders(rule, template, {
      after: this._getAttributeName(parameters[0])
    });
  },

  /**
   * Before replacement.
   *
   * @param  {string} template
   * @param  {Rule} rule
   * @return {string}
   */
  before: function(template, rule) {
    var parameters = rule.getParameters();
    return this._replacePlaceholders(rule, template, {
      before: this._getAttributeName(parameters[0])
    });
  },

  /**
   * After_or_equal replacement.
   *
   * @param  {string} template
   * @param  {Rule} rule
   * @return {string}
   */
  after_or_equal: function(template, rule) {
    var parameters = rule.getParameters();
    return this._replacePlaceholders(rule, template, {
      after_or_equal: this._getAttributeName(parameters[0])
    });
  },

  /**
   * Before_or_equal replacement.
   *
   * @param  {string} template
   * @param  {Rule} rule
   * @return {string}
   */
  before_or_equal: function(template, rule) {
    var parameters = rule.getParameters();
    return this._replacePlaceholders(rule, template, {
      before_or_equal: this._getAttributeName(parameters[0])
    });
  },
};

function formatter(attribute) {
  return attribute.replace(/[_\[]/g, ' ').replace(/]/g, '');
}

module.exports = {
  replacements: replacements,
  formatter: formatter
};


/***/ }),

/***/ "./node_modules/validatorjs/src/errors.js":
/***/ (function(module, exports) {

var Errors = function() {
  this.errors = {};
};

Errors.prototype = {
  constructor: Errors,

  /**
   * Add new error message for given attribute
   *
   * @param  {string} attribute
   * @param  {string} message
   * @return {void}
   */
  add: function(attribute, message) {
    if (!this.has(attribute)) {
      this.errors[attribute] = [];
    }

    if (this.errors[attribute].indexOf(message) === -1) {
      this.errors[attribute].push(message);
    }
  },

  /**
   * Returns an array of error messages for an attribute, or an empty array
   *
   * @param  {string} attribute A key in the data object being validated
   * @return {array} An array of error messages
   */
  get: function(attribute) {
    if (this.has(attribute)) {
      return this.errors[attribute];
    }

    return [];
  },

  /**
   * Returns the first error message for an attribute, false otherwise
   *
   * @param  {string} attribute A key in the data object being validated
   * @return {string|false} First error message or false
   */
  first: function(attribute) {
    if (this.has(attribute)) {
      return this.errors[attribute][0];
    }

    return false;
  },

  /**
   * Get all error messages from all failing attributes
   *
   * @return {Object} Failed attribute names for keys and an array of messages for values
   */
  all: function() {
    return this.errors;
  },

  /**
   * Determine if there are any error messages for an attribute
   *
   * @param  {string}  attribute A key in the data object being validated
   * @return {boolean}
   */
  has: function(attribute) {
    if (this.errors.hasOwnProperty(attribute)) {
      return true;
    }

    return false;
  }
};

module.exports = Errors;


/***/ }),

/***/ "./node_modules/validatorjs/src/lang recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./de": "./node_modules/validatorjs/src/lang/de.js",
	"./de.js": "./node_modules/validatorjs/src/lang/de.js",
	"./el": "./node_modules/validatorjs/src/lang/el.js",
	"./el.js": "./node_modules/validatorjs/src/lang/el.js",
	"./en": "./node_modules/validatorjs/src/lang/en.js",
	"./en.js": "./node_modules/validatorjs/src/lang/en.js",
	"./es": "./node_modules/validatorjs/src/lang/es.js",
	"./es.js": "./node_modules/validatorjs/src/lang/es.js",
	"./fa": "./node_modules/validatorjs/src/lang/fa.js",
	"./fa.js": "./node_modules/validatorjs/src/lang/fa.js",
	"./fr": "./node_modules/validatorjs/src/lang/fr.js",
	"./fr.js": "./node_modules/validatorjs/src/lang/fr.js",
	"./it": "./node_modules/validatorjs/src/lang/it.js",
	"./it.js": "./node_modules/validatorjs/src/lang/it.js",
	"./ja": "./node_modules/validatorjs/src/lang/ja.js",
	"./ja.js": "./node_modules/validatorjs/src/lang/ja.js",
	"./nb_NO": "./node_modules/validatorjs/src/lang/nb_NO.js",
	"./nb_NO.js": "./node_modules/validatorjs/src/lang/nb_NO.js",
	"./pl": "./node_modules/validatorjs/src/lang/pl.js",
	"./pl.js": "./node_modules/validatorjs/src/lang/pl.js",
	"./pt": "./node_modules/validatorjs/src/lang/pt.js",
	"./pt.js": "./node_modules/validatorjs/src/lang/pt.js",
	"./ru": "./node_modules/validatorjs/src/lang/ru.js",
	"./ru.js": "./node_modules/validatorjs/src/lang/ru.js",
	"./tr": "./node_modules/validatorjs/src/lang/tr.js",
	"./tr.js": "./node_modules/validatorjs/src/lang/tr.js",
	"./vi": "./node_modules/validatorjs/src/lang/vi.js",
	"./vi.js": "./node_modules/validatorjs/src/lang/vi.js",
	"./zh": "./node_modules/validatorjs/src/lang/zh.js",
	"./zh.js": "./node_modules/validatorjs/src/lang/zh.js",
	"./zh_TW": "./node_modules/validatorjs/src/lang/zh_TW.js",
	"./zh_TW.js": "./node_modules/validatorjs/src/lang/zh_TW.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/validatorjs/src/lang recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/validatorjs/src/lang.js":
/***/ (function(module, exports, __webpack_require__) {

var Messages = __webpack_require__("./node_modules/validatorjs/src/messages.js");

__webpack_require__("./node_modules/validatorjs/src/lang/en.js");

var container = {

  messages: {},

  /**
   * Set messages for language
   *
   * @param {string} lang
   * @param {object} rawMessages
   * @return {void}
   */
  _set: function(lang, rawMessages) {
    this.messages[lang] = rawMessages;
  },

  /**
   * Set message for given language's rule.
   *
   * @param {string} lang
   * @param {string} attribute
   * @param {string|object} message
   * @return {void}
   */
  _setRuleMessage: function(lang, attribute, message) {
    this._load(lang);
    if (message === undefined) {
      message = this.messages[lang].def;
    }

    this.messages[lang][attribute] = message;
  },

  /**
   * Load messages (if not already loaded)
   *
   * @param  {string} lang
   * @return {void}
   */
  _load: function(lang) {
    if (!this.messages[lang]) {
      var rawMessages = __webpack_require__("./node_modules/validatorjs/src/lang recursive ^\\.\\/.*$")("./" + lang);
      this._set(lang, rawMessages);
    }
  },

  /**
   * Get raw messages for language
   *
   * @param  {string} lang
   * @return {object}
   */
  _get: function(lang) {
    this._load(lang);
    return this.messages[lang];
  },

  /**
   * Make messages for given language
   *
   * @param  {string} lang
   * @return {Messages}
   */
  _make: function(lang) {
    this._load(lang);
    return new Messages(lang, this.messages[lang]);
  }

};

module.exports = container;


/***/ }),

/***/ "./node_modules/validatorjs/src/lang/de.js":
/***/ (function(module, exports) {

module.exports = {
  accepted: 'Das :attribute Feld muss akzeptiert werden.',
  after: 'Das :attribute muss ein Datum nach dem :after sein.',
  after_or_equal: 'Das :attribute muss ein Datum gleich oder nach dem :after_or_equal sein.',
  alpha: 'Das :attribute Feld darf nur aus Buchstaben bestehen.',
  alpha_dash: 'Das :attribute Feld darf nur aus Buchstaben, Zahlen, Binde- und Unterstrichen bestehen',
  alpha_num: 'Das :attribute Feld darf nur aus Buchstaben und Zahlen bestehen.',
  before: 'Das :attribute muss ein Datum vor dem :before sein.',
  before_or_equal: 'Das :attribute muss ein Datum gleich oder vor dem :before sein.',
  between: 'Das :attribute Feld muss zwischen :min und :max liegen.',
  confirmed: 'Das :attribute Feld stimmt nicht mit der Bestätigung überein.',
  email: 'Das :attribute Format ist ungültig.',
  date: 'Das :attribute Feld muss ein gültiges Datum sein.',
  def: 'Das :attribute Feld hat Fehler.',
  digits: 'Das :attribute Feld muss :digits Stellen haben.',
  different: 'Die Felder :attribute und :different müssen sich unterscheiden.',
  'in': 'Der gewählte Wert für :attribute ist ungültig.',
  integer: 'Das :attribute Feld muss eine ganze Zahl sein.',
  min: {
    numeric: 'Das :attribute Feld muss mindestens :min sein.',
    string: 'Das :attribute Feld muss mindestens :min Zeichen lang sein.'
  },
  max: {
    numeric: 'Das :attribute Feld darf maximal :max sein.',
    string: 'Das :attribute Feld darf maximal :max Zeichen haben.'
  },
  not_in: 'Der gewählte Wert für :attribute ist ungültig.',
  numeric: 'Das :attribute Feld muss eine Zahl sein.',
  present: 'Das Feld :attribute muss vorhanden sein (kann aber leer sein).',
  required: 'Das :attribute Feld muss ausgefüllt sein.',
  required_if: 'Das :attribute Feld muss ausgefüllt sein, wenn :other :value ist.',
  same: 'Die Felder :attribute und :same müssen übereinstimmen.',
  size: {
    numeric: 'Das :attribute Feld muss gleich :size sein.',
    string: 'Das :attribute Feld muss :size Zeichen lang sein.'
  },
  string: 'Das :attribute Feld muss ein Satz sein.',
  url: 'Das Format von :attribute ist ungültig.',
  regex: 'Das :attribute Format ist ungültig.',
  attributes: {}
};


/***/ }),

/***/ "./node_modules/validatorjs/src/lang/el.js":
/***/ (function(module, exports) {

module.exports = {
  accepted: 'Το πεδίο :attribute πρέπει να γίνει αποδεκτό.',
  after: 'Το πεδίο :attribute πρέπει να είναι μία ημερομηνία μετά από :after.',
  alpha: 'Το πεδίο :attribute μπορεί να περιέχει μόνο γράμματα.',
  alpha_dash: 'Το πεδίο :attribute μπορεί να περιέχει μόνο γράμματα, αριθμούς, και παύλες.',
  alpha_num: 'Το πεδίο :attribute μπορεί να περιέχει μόνο γράμματα και αριθμούς.',
  between: 'Το πεδίο :attribute πρέπει να είναι μεταξύ :min και :max.',
  confirmed: 'Η επιβεβαίωση του :attribute δεν ταιριάζει.',
  email: 'Το πεδίο :attribute πρέπει να είναι μία έγκυρη διεύθυνση email.',
  date: 'Το πεδίο :attribute δεν είναι έγκυρη ημερομηνία.',
  def: 'Το πεδίο :attribute περιέχει σφάλματα.',
  digits: 'Το πεδίο :attribute πρέπει να είναι :digits ψηφία.',
  different: 'Το πεδίο :attribute  και :different πρέπει να είναι διαφορετικά.',
  'in': 'Το επιλεγμένο :attribute δεν είναι έγκυρο.',
  integer: 'Το πεδίο :attribute πρέπει να είναι ακέραιος.',
  min: {
    numeric: 'Το πεδίο :attribute πρέπει να είναι τουλάχιστον :min.',
    string: 'Το πεδίο :attribute πρέπει να έχει τουλάχιστον :min χαρακτήρες.'
  },
  max: {
    numeric: 'Το πεδίο :attribute δεν μπορεί να είναι μεγαλύτερο από :max.',
    string: 'Το πεδίο :attribute δεν μπορεί να έχει περισσότερους από :max χαρακτήρες.'
  },
  not_in: 'Το επιλεγμένο :attribute δεν είναι αποδεκτό.',
  numeric: 'Το πεδίο :attribute πρέπει να είναι αριθμός.',
  present: 'The :attribute field must be present (but can be empty).',
  required: 'Το πεδίο :attribute είναι απαραίτητο.',
  required_if: 'Το πεδίο :attribute είναι απαραίτητο όταν το πεδίο :other είναι :value.',
  same: 'Τα πεδία :attribute και :same πρέπει να είναι ίδια.',
  size: {
    numeric: 'Το πεδίο :attribute πρέπει να είναι :size.',
    string: 'Το πεδίο :attribute πρέπει να είναι :size χαρακτήρες.'
  },
  string: 'Το πεδίο :attribute πρέπει να είναι αλφαριθμητικό.',
  url: 'Το πεδίο :attribute δεν είναι έγκυρη διεύθυνση URL.',
  regex: 'Η μορφή του :attribute δεν είναι αποδεκτή.',
  attributes: {}
};


/***/ }),

/***/ "./node_modules/validatorjs/src/lang/en.js":
/***/ (function(module, exports) {

module.exports = {
  accepted: 'The :attribute must be accepted.',
  after: 'The :attribute must be after :after.',
  after_or_equal: 'The :attribute must be equal or after :after_or_equal.',
  alpha: 'The :attribute field must contain only alphabetic characters.',
  alpha_dash: 'The :attribute field may only contain alpha-numeric characters, as well as dashes and underscores.',
  alpha_num: 'The :attribute field must be alphanumeric.',
  before: 'The :attribute must be before :before.',
  before_or_equal: 'The :attribute must be equal or before :before_or_equal.',
  between: 'The :attribute field must be between :min and :max.',
  confirmed: 'The :attribute confirmation does not match.',
  email: 'The :attribute format is invalid.',
  date: 'The :attribute is not a valid date format',
  def: 'The :attribute attribute has errors.',
  digits: 'The :attribute must be :digits digits.',
  different: 'The :attribute and :different must be different.',
  'in': 'The selected :attribute is invalid.',
  integer: 'The :attribute must be an integer.',
  min: {
    numeric: 'The :attribute must be at least :min.',
    string: 'The :attribute must be at least :min characters.'
  },
  max: {
    numeric: 'The :attribute may not be greater than :max.',
    string: 'The :attribute may not be greater than :max characters.'
  },
  not_in: 'The selected :attribute is invalid.',
  numeric: 'The :attribute must be a number.',
  present: 'The :attribute field must be present (but can be empty).',
  required: 'The :attribute field is required.',
  required_if: 'The :attribute field is required when :other is :value.',
  required_unless: 'The :attribute field is required when :other is not :value.',
  required_with: 'The :attribute field is required when :field is not empty.',
  required_with_all: 'The :attribute field is required when :fields are not empty.',
  required_without: 'The :attribute field is required when :field is empty.',
  required_without_all: 'The :attribute field is required when :fields are empty.',
  same: 'The :attribute and :same fields must match.',
  size: {
    numeric: 'The :attribute must be :size.',
    string: 'The :attribute must be :size characters.'
  },
  string: 'The :attribute must be a string.',
  url: 'The :attribute format is invalid.',
  regex: 'The :attribute format is invalid',
  attributes: {}
};


/***/ }),

/***/ "./node_modules/validatorjs/src/lang/es.js":
/***/ (function(module, exports) {

module.exports = {
  accepted: 'El campo :attribute debe ser aceptado.',
  after: 'El campo :attribute debe ser una fecha posterior a :after.',
  alpha: 'El campo :attribute solo debe contener letras.',
  alpha_dash: 'El campo :attribute solo debe contener letras, números y guiones.',
  alpha_num: 'El campo :attribute solo debe contener letras y números.',
  attributes: {},
  between: 'El campo :attribute tiene que estar entre :min - :max.',
  confirmed: 'La confirmación de :attribute no coincide.',
  different: 'El campo :attribute y :other deben ser diferentes.',
  digits: 'El campo :attribute debe tener :digits dígitos.',
  email: 'El campo :attribute no es un correo válido',
  'in': 'El campo :attribute es inválido.',
  integer: 'El campo :attribute debe ser un número entero.',
  max: {
    numeric: 'El campo :attribute no debe ser mayor a :max.',
    string: 'El campo :attribute no debe ser mayor que :max caracteres.'
  },
  min: {
    numeric: 'El tamaño del campo :attribute debe ser de al menos :min.',
    string: 'El campo :attribute debe contener al menos :min caracteres.'
  },
  not_in: 'El campo :attribute es inválido.',
  numeric: 'El campo :attribute debe ser numérico.',
  present: 'El campo de :attribute debe estar presente (pero puede estar vacío)',
  regex: 'El formato del campo :attribute es inválido.',
  required: 'El campo :attribute es obligatorio.',
  required_if: 'El campo :attribute es obligatorio cuando :other es :value.',
  same: 'El campo :attribute y :other deben coincidir.',
  size: {
    numeric: 'El tamaño del campo :attribute debe ser :size.',
    string: 'El campo :attribute debe contener :size caracteres.'
  },
  url: 'El formato de :attribute es inválido.'
};


/***/ }),

/***/ "./node_modules/validatorjs/src/lang/fa.js":
/***/ (function(module, exports) {

module.exports = {
  accepted: 'فیلد :attribute می بایست تایید شود',
  alpha: 'فیلد :attribute می بایست فقط شامل حروف انگلیسی باشد',
  alpha_dash: 'فیلد :attribute می بایست فقط شامل حروف انگلیسی و خط تیره و زیرخط باشد',
  alpha_num: 'فیلد :attribute می بایست فقط شامل حروف و اعداد باشد',
  between: 'فیلد :attribute می بایست بزرگتر از :min و کوچکتر از :max باشد',
  confirmed: 'تطبیق فیلد :attribute صحیح نمی باشد',
  email: 'فرمت ایمیل وارد شده در :attribute صحیح نمی‌باشد',
  date: 'تاریخ درج شده در فیلد :attribute صحیح نیست',
  def: 'فیلد :attribute اشکال دارد',
  digits: 'فیلد :attribute می بایست شامل :digits رقم باشد',
  different: 'فیلد :attribute می بایست مقداری غیر از :different داشته باشد',
  'in': 'فیلد :attribute انتخاب شده صحیح نمی باشد',
  integer: 'فیلد :attribute می بایست عددی باشد',
  min: {
    numeric: 'فیلد :attribute می بایست از :min بزرگتر باشد',
    string: 'فیلد :attribute بایستی حداقل :min کاراکتر طول داشته باشد'
  },
  max: {
    numeric: 'فیلد :attribute می بایست از :max کوچکتر باشد',
    string: 'فیلد :attribute نباید بیشتر از :max کاراکتر طول داشته باشد'
  },
  not_in: 'فیلد :attribute انتخاب شده صحیح نمی باشد',
  numeric: 'فیلد :attribute می بایست عددی باشد',
  present: 'The :attribute field must be present (but can be empty).',
  required: 'فیلد :attribute الزامی است',
  required_if: 'در صورت دادن :value به :other تکمیل فیلد :attribute الزامی است',
  same: 'فیلد :attribute می بایست با فیلد :same یکی باشد',
  size: {
    numeric: 'فیلد :attribute می بایست :size باشد',
    string: 'فیلد :attribute می بایست :size کاراکتر طول داشته باشد'
  },
  string: 'فیلد :attribute می بایست متنی باشد',
  url: 'آدرس فیلد :attribute صحیح نمی باشد',
  regex: 'فرمت آدرس :attribute صحیح نمی باشد',
  attributes: {}
};


/***/ }),

/***/ "./node_modules/validatorjs/src/lang/fr.js":
/***/ (function(module, exports) {

module.exports = {
  accepted: 'Le champs :attribute doit être accepté.',
  alpha: 'Le champs :attribute ne peut contenir que des caractères alphabétiques.',
  alpha_dash: 'Le champs :attribute ne peut contenir que des caractères alphanumériques, des tirets et underscores.',
  alpha_num: 'Le champs :attribute doit être alphanumérique.',
  between: 'Le champs :attribute doit être compris entre :min and :max.',
  confirmed: 'Le champs :attribute ne correspond pas.',
  email: 'Le champs :attribute contient un format invalide.',
  def: 'Le champs :attribute contient un attribut erroné.',
  digits: 'Le champs :attribute doit être de :digits chiffres.',
  different: 'Le champs :attribute et :different doivent être differents.',
  'in': 'Le champs :attribute est invalide.',
  integer: 'Le champs :attribute doit être un entier.',
  min: {
    numeric: 'Le champs :attribute doit être contenir au moins :min.',
    string: 'Le champs :attribute doit être contenir au moins :min caractères.'
  },
  max: {
    numeric: 'Le champs :attribute ne doit être supérieur à :max.',
    string: 'Le champs :attribute ne doit être plus de :max characters.'
  },
  not_in: 'Le champs :attribute est invalide.',
  numeric: 'Le champs :attribute doit être un numéro.',
  present: 'Le champ :attribute doit être présent (mais peut être vide).',
  required: 'Le champs :attribute est obligatoire.',
  required_if: 'Le champs :attribute est obligatoire quand :other est :value.',
  same: 'Le champs :attribute et :same doivent correspondre.',
  size: {
    numeric: 'La taille du champs :attribute doit être :size.',
    string: 'La taille du champs :attribute doit être de :size caractères.'
  },
  url: 'Le format du champs :attribute est invalide.',
  regex: 'Le format du champs :attribute est invalide.',
  attributes: {}
};


/***/ }),

/***/ "./node_modules/validatorjs/src/lang/it.js":
/***/ (function(module, exports) {

module.exports = {
  accepted: 'Il campo :attribute deve essere accettato.',
  alpha: 'Il campo :attribute deve contenere sono caratteri alfabetici.',
  alpha_dash: 'Il campo :attribute può contenere solo caratteri alfanumerici oltre a trattini e trattini bassi.',
  alpha_num: 'Il campo :attribute deve essere alfanumerico.',
  between: 'Il campo :attribute deve essere compreso tra :min e :max.',
  confirmed: 'Il campo conferma :attribute non è uguale.',
  email: 'Il formato dell\'attributo :attribute non è valido.',
  def: 'Gli attributi del campo :attribute contengono degli errori.',
  digits: 'Il campo :attribute deve essere di :digits cifre.',
  different: 'Il campo :attribute e :different devo essere diversi.',
  'in': 'Il valore del campo :attribute non è valido.',
  integer: 'Il campo :attribute deve essere un valore intero.',
  min: {
    numeric: 'Il campo :attribute deve essere maggiore o uguale di :min.',
    string: 'Il campo :attribute deve essere composto da almeno :min caratteri.'
  },
  max: {
    numeric: 'Il campo :attribute deve essere minore o uguale di :max.',
    string: 'Il campo :attribute deve essere composto da massimo :max caratteri.'
  },
  not_in: 'Il campo :attribute non è valido.',
  numeric: 'Il campo :attribute deve essere un numero.',
  present: 'Il campo :attribute deve essere presente (ma può essere vuoto).',
  required: 'Il campo :attribute è richiesto.',
  required_if: 'Il campo :attribute è richiesto quando il campo :other è uguale a :value.',
  same: 'I campi :attribute e :same devono essere uguali.',
  size: {
    numeric: 'La dimensione del campo :attribute deve essere uguale a :size.',
    string: 'Il campo :attribute deve essere di :size caratteri.'
  },
  string: 'Il campo :attribute deve essere una stringa.',
  url: 'Il formato del campo :attribute non è valido.',
  regex: 'Il formato del campo :attribute non è valido.',
  attributes: {}
};


/***/ }),

/***/ "./node_modules/validatorjs/src/lang/ja.js":
/***/ (function(module, exports) {

module.exports = {
    accepted: ':attributeを確認してください。',
    alpha: ':attributeは英字のみで入力してください。',
    alpha_dash: ':attributeは英字とダッシュと下線のみで入力してください。',
    alpha_num: ':attributeは英数字のみで入力してください。',
    between: ':attributeは:min〜:max文字で入力してください。',
    confirmed: ':attributeは確認が一致しません。',
    email: ':attributeは正しいメールアドレスを入力してください。',
    date: ':attributeは正しい日付形式を入力してください',
    def: ':attributeは検証エラーが含まれています。',
    digits: ':attributeは:digitsの数字のみで入力してください。',
    different: ':attributeと:differentは同じであってはなりません。',
    'in': '選択された:attributeは無効です。',
    integer: ':attributeは整数で入力してください。',
    min        : {
        numeric : ":attributeは:min以上で入力してください。",
        string  : ":attributeは:min文字以上で入力してください。"
    },
    max : {
        numeric : ":attributeは:max以下で入力してください。",
        string  : ":attributeは:max文字以下で入力してください。"
    },
    not_in      : "選択された:attributeは無効です。",
    numeric     : ":attributeは数値で入力してください。",
    present: 'The :attribute field must be present (but can be empty).',
    required    : ":attributeは必須です。",
    required_if : ":otherは:valueになったら:attributeは必須です。",
    same        : ":attributeと:sameは同じでなければなりません。",
    size        : {
        numeric : ":attributeは:sizeを入力してください。",
        string  : ":attributeは:size文字で入力してください。"
    },
    url        : ":attributeは正しいURIを入力してください。",
    regex      : ":attributeの値 \":value\" はパターンにマッチする必要があります。",
    attributes : {}
};


/***/ }),

/***/ "./node_modules/validatorjs/src/lang/nb_NO.js":
/***/ (function(module, exports) {

module.exports = {
  accepted: ':attribute må være akseptert.',
  alpha: ':attribute feltet kan kun inneholde alfabetiske tegn.',
  alpha_dash: ':attribute feltet kan kun inneholde alfanumeriske tegn, i tillegg til bindestreker og understreker.',
  alpha_num: ':attribute feltet må være alfanumerisk.',
  between: ':attribute feltet må være mellom :min og :max.',
  confirmed: ':attribute feltet stemmer ikke overens med bekreftelsen.',
  email: ':attribute formatet er ugyldig.',
  date: ':attribute er et ugyldig datoformat.',
  def: ':attribute attributtet har feil.',
  digits: ':attribute må være på :digits siffer.',
  different: ':attribute og :different må være forskjellige.',
  'in': 'Den oppgitte verdien for :attribute er ugyldig.',
  integer: ':attribute må være et heltall.',
  min: {
    numeric: ':attribute må minst være :min.',
    string: ':attribute må være på minst :min tegn.'
  },
  max: {
    numeric: ':attribute kan ikke være større enn :max.',
    string: ':attribute kan maks ha :max tegn.'
  },
  'not_in': 'Den oppgitte verdien for :attribute er ugyldig.',
  numeric: ':attribute må være et tall.',
  present: 'The :attribute field must be present (but can be empty).',
  required: ':attribute feltet er påkrevd.',
  required_if: ':attribute er påkrevd når :other er :value.',
  same: ':attribute og :same må være like.',
  size: {
    numeric: ':attribute må ha størrelsen :size.',
    string: ':attribute må ha :size tegn.'
  },
  string: ':attribute må være tekst.',
  url: ':attribute formatet er ugyldig.',
  regex: ':attribute formatet er ugyldig.',
  attributes: {}
};


/***/ }),

/***/ "./node_modules/validatorjs/src/lang/pl.js":
/***/ (function(module, exports) {

module.exports = {
    accepted: 'Pole :attribute musi być zaakceptowane.',
    alpha: 'Pole :attribute może zawierać tylko litery.',
    alpha_dash: 'Pole :attribute moze zawierać tylko litery, myślnik i podrkeślenie.',
    alpha_num: 'Pole :attribute moze zawierac tylko znaki alfanumeryczne.',
    between: 'Pole :attribute musi mieć długość od :min do :max.',
    confirmed: 'Pole :attribute nie spełnia warunku potwierdzenia.',
    email: 'Pole :attribute ma niepoprawny format adresu email.',
    date: 'Pole :attribute musi mieć poprawny format daty.',
    def: 'Pole :attribute zawiera błędy.',
    digits: 'Pole :attribute może zawierać tylko cyfry ze zbioru :digits.',
    different: 'Pola :attribute i :different muszą się różnić.',
    'in': 'Pole :attribute musi należeć do zbioru :in.',
    integer: 'Pole :attribute musi być liczbą całkowitą.',
    min: {
        numeric: 'Pole :attribute musi być równe conajmniej :min.',
        string: 'Pole :attribute musi zawierać conajmniej :min znaków.'
    },
    max: {
        numeric: 'Pole :attribute nie moze być większe :max.',
        string: 'Pole :attribute nie moze być dłuższe niż :max znaków.'
    },
    not_in: 'Pole :attribute nie może należeć do zbioru :not_in.',
    numeric: 'Pole :attribute musi być liczbą.',
    present: 'Polu :attribute musi być obecny (ale może być pusta).',
    required: 'Pole :attribute jest wymagane.',
    required_if: 'Pole :attribute jest wymagane jeśli pole :other jest równe :value.',
    same: 'Pola :attribute i :same muszą być takie same.',
    size: {
        numeric: 'Pole :attribute musi być równe :size.',
        string: 'Pole :attribute musi zawierać :size znaków.'
    },
    string: 'Pole :attribute musi być ciągiem znaków.',
    url: 'Pole :attribute musi być poprawnym adresem URL.',
    regex: 'Pole :attribute nie spełnia warunku.',
    attributes: {}
};


/***/ }),

/***/ "./node_modules/validatorjs/src/lang/pt.js":
/***/ (function(module, exports) {

module.exports = {
  accepted: 'O :attribute precisa ser aceito.',
  alpha: 'O campo :attribute só pode conter letras.',
  alpha_dash: 'O campo :attribute só pode conter letras, números, hífens e sublinha.',
  alpha_num: 'O campo :attribute só pode conter letras e números.',
  between: 'O campo :attribute precisa estar entre :min e :max.',
  confirmed: 'A confirmação de :attribute não coincide.',
  email: 'O formato de :attribute é inválido.',
  date: 'O :attribute não é um formato de data válido',
  def: 'O atributo :attribute contém erros.',
  digits: 'O atributo :attribute precisa ter :digits dígitos.',
  different: 'O :attribute e :different precisam ser diferentes.',
  'in': 'O atributo selecionado :attribute é inválido.',
  integer: 'O :attribute precisa ser um inteiro.',
  min: {
    numeric: 'O :attribute precisa ser no mínimo :min.',
    string: 'O :attribute precisa ter no mínimo :min caracteres.'
  },
  max: {
    numeric: 'O :attribute não pode ser maior que :max.',
    string: 'O :attribute não pode ter mais que :max caracteres.'
  },
  not_in: 'O :attribute selecionado é inválido.',
  numeric: 'O :attribute precisa ser um número.',
  present: 'O campo :attribute deve estar presente (mas pode estar vazio).',
  required: 'O campo :attribute é obrigatório.',
  required_if: 'O campo :attribute é obrigatório quando :other é :value.',
  same: 'Os campos :attribute e :same precisam ser iguais.',
  size: {
    numeric: 'O :attribute precisa ser :size.',
    string: 'O :attribute precisa ter :size caracteres.'
  },
  string: 'O :attribute precisa ser uma palavra.',
  url: 'O formato de :attribute é inválido.',
  regex: 'O formato de :attribute é inválido.',
  attributes: {}
};


/***/ }),

/***/ "./node_modules/validatorjs/src/lang/ru.js":
/***/ (function(module, exports) {

module.exports = {
  accepted: 'Вы должны принять :attribute.',
  alpha: 'Поле :attribute может содержать только буквы.',
  alpha_dash: 'Поле :attribute может содержать только буквы, цифры, дефисы и символы подчёркивания.',
  alpha_num: 'Поле :attribute может содержать только буквы и цифры.',
  between: 'Поле :attribute должно быть между :min и :max.',
  confirmed: 'Поле :attribute не совпадает с подтверждением.',
  email: 'Поле :attribute должно быть действительным электронным адресом.',
  def: 'Поле :attribute содержит ошибки.',
  digits: 'Длина цифрового поля :attribute должна быть :digits.',
  different: 'Поля :attribute и :different должны различаться.',
  'in': 'Выбранное значение для :attribute ошибочно.',
  integer: 'Поле :attribute должно быть целым числом.',
  min: {
    numeric: 'Значение поля :attribute должно быть больше или равно :min.',
    string: 'Количество символов в поле :attribute должно быть не менее :min.'
  },
  max: {
    numeric: 'Значение поля :attribute должно быть меньше или равно :max.',
    string: 'Количество символов в поле :attribute не может превышать :max.'
  },
  not_in: 'Выбранное значение для :attribute ошибочно.',
  numeric: 'Поле :attribute должно быть числом.',
  present: 'Поле :attribute должно присутствовать (но может быть пустым).',
  required: 'Поле :attribute обязательно для заполнения.',
  required_if: 'Поле :attribute требуется когда значения поля :other равно :value.',
  same: 'Значение :attribute должно совпадать с :same.',
  size: {
    numeric: 'Значение поля :attribute должно быть равным :size.',
    string: 'Количество символов в поле :attribute должно быть равно :size.'
  },
  url: 'Поле :attribute должно содержать валидный URL.',
  regex: 'Неверный формат поля :attribute.',
  attributes: {}
};


/***/ }),

/***/ "./node_modules/validatorjs/src/lang/tr.js":
/***/ (function(module, exports) {

module.exports = {
  accepted: ':attribute kabul edilmeli.',
  alpha: ':attribute alanı sadece harflerden oluşabilir.',
  alpha_dash: ':attribute alanı sadece alfa-nümerik, tire ve alt çizgi karakterlerden oluşabilir.',
  alpha_num: ':attribute alanı alfa-nümerik olmalıdır.',
  between: ':attribute alanı :min ile :max arasında olabilir.',
  confirmed: ':attribute uyuşmuyor.',
  email: ':attribute formatı geçersiz.',
  date: ':attribute geöerli bir tarih alanı değil.',
  def: ':attribute hatalar içeriyor.',
  digits: ':attribute sadece rakamlardan oluşabilir.',
  different: ':attribute ve :different farklı olmalı.',
  'in': 'Seçilen :attribute geçerli değil.',
  integer: ':attribute tam sayı olmalı.',
  min: {
    numeric: ':attribute en az :min olmalı.',
    string: ':attribute en az :min karakter uzunluğunda olmalı.'
  },
  max: {
    numeric: ':attribute en çok :max olabilir.',
    string: ':attribute uzunluğu en çok :max karakter uzunluğunda olabilir.'
  },
  not_in: 'Seçilen :attribute geçerli değil.',
  numeric: ':attribute sayı olmalı.',
  present: ':attribute alanı bulunmalıdır (ancak boş olabilir).',
  required: ':attribute alanı gerekli.',
  required_if: ':attribute alanı :other alanı :value olduğunda gerekli.',
  same: ':attribute ve :same aynı olmalı.',
  size: {
    numeric: ':attribute :size olmalı.',
    string: ':attribute :size karakter uzunluğunda olmalı.'
  },
  string: ':attribute alfa-numerik olmalı.',
  url: ':attribute formatı geçersiz.',
  regex: ':attribute formatı geçersiz.',
  attributes: {}
};


/***/ }),

/***/ "./node_modules/validatorjs/src/lang/vi.js":
/***/ (function(module, exports) {

module.exports = {
  accepted: ':attribute phải được chấp nhận.',
  alpha: 'Trường :attribute phải là ký tự',
  alpha_dash: ':attribute chỉ chấp nhận ký tự chữ cái, số, dấu gạch chéo và gạch dưới.',
  alpha_num: ':attribute phải là ký tự chữ cái hoặc chữ số.',
  between: ':attribute phải nằm trong khoảng :min và :max.',
  confirmed: ':attribute xác nhận không trùng khớp.',
  email: ':attribute không phải là email.',
  date: ':attribute không phải là ngày hợp lệ',
  def: 'Thuộc tính :attribute có lỗi.',
  digits: ':attribute phải là số và có chiều dài bằng :digits.',
  different: 'Giá trị của hai trường :attribute và :different phải khác nhau.',
  'in': 'Giá trị được chọn của :attribute không hợp lệ.',
  integer: ':attribute phải là số nguyên.',
  min: {
    numeric: ':attribute phải lớn hơn hoặc bằng :min.',
    string: ':attribute phải có ít nhất :min ký tự.'
  },
  max: {
    numeric: ':attribute phải nhỏ hơn hoặc bằng :max.',
    string: ':attribute phải có ít hơn :max ký tự.'
  },
  not_in: 'Giá trị được chọn của trường :attribute không hợp lệ.',
  numeric: ':attribute phải là số.',
  present: 'Trường :attribute phải có mặt (nhưng có thể để trống).',
  required: ':attribute bắt buộc nhập.',
  required_if: ':attribute là bắt buộc khi :other có giá trị :value.',
  same: 'Giá trị của :attribute và :same phải như nhau.',
  size: {
    numeric: ':attribute phải có chiều dài của bằng :size.',
    string: 'Số ký tự của :attribute phải là :size ký tự.'
  },
  string: ':attribute không phải là một chuỗi',
  url: ':attribute không phải là một Url hợp lệ.',
  regex: ':attribute không đúng định dạng',
  attributes: {}
};


/***/ }),

/***/ "./node_modules/validatorjs/src/lang/zh.js":
/***/ (function(module, exports) {

module.exports = {
  accepted: ':attribute必须是可接受的.',
  alpha: ':attribute只能包含字母.',
  alpha_dash: ':attribute只能包含字母,连字符和下划线.',
  alpha_num: ':attribute只能包含字母和数字.',
  between: ':attribute的(大小,长度等)只能在:min和:max之间.',
  confirmed: ':attribute确认不一致.',
  email: ':attribute格式不正确.',
  date: ':attribute日期格式错误.',
  def: ':attribute属性错误.',
  digits: ':attribute必须是:digits位小数.',
  different: ':attribute和:different必须不同.',
  'in': '选择的:attribute无效',
  integer: ':attribute必须是一个整数.',
  min: {
    numeric: ':attribute不能小于:min.',
    string: ':attribute长度不能小于:min.'
  },
  max: {
    numeric: ':attribute不能大于:max.',
    string: ':attribute长度不能大于:max.'
  },
  not_in: '所选的:attribute无效.',
  numeric: ':attribute必须是一个数字.',
  present: 'The :attribute field must be present (but can be empty).',
  required: ':attribute不能为空.',
  required_if: '当:other是:value时,:attribute不能为空.',
  same: ':attribute和:same必须一致.',
  size: {
    numeric: ':attribute必须等于:size.',
    string: ':attribute的长度必须等于:size.'
  },
  string: ':attribute必须是一个字符串.',
  url: ':attribute格式不正确.',
  regex: ':attribute格式不正确.',
  attributes: {}
};


/***/ }),

/***/ "./node_modules/validatorjs/src/lang/zh_TW.js":
/***/ (function(module, exports) {

module.exports = {
  accepted: ':attribute必須接受。',
  alpha: ':attribute只能包含字母。',
  alpha_dash: ':attribute只能包含字母，連字符和下划線。',
  alpha_num: ':attribute只能包含字母和數字。',
  between: ':attribute的值只能在:min和:max之間。',
  confirmed: ':attribute與確認輸入不一致。',
  email: ':attribute的格式錯誤。',
  date: ':attribute的日期格式錯誤。',
  def: ':attribute屬性錯誤。',
  digits: ':attribute必須是:digits位小數。',
  different: ':attribute和:different必須不同。',
  'in': '選擇的:attribute無效',
  integer: ':attribute必須是一個整數。',
  min: {
    numeric: ':attribute不能小於:min。',
    string: ':attribute的長度不能小於:min.'
  },
  max: {
    numeric: ':attribute不能大於:max。',
    string: ':attribute的長度不能大於:max.'
  },
  not_in: '所選的:attribute無效。',
  numeric: ':attribute必須是一個數字。',
  present: 'The :attribute field must be present (but can be empty).',
  required: ':attribute不能空白。',
  required_if: '當:other是:value時,:attribute不能空白。',
  same: ':attribute和:same必須一致。',
  size: {
    numeric: ':attribute必須等於:size。',
    string: ':attribute的長度必須等於:size.'
  },
  string: ':attribute必須是一個字串。',
  url: ':attribute格式不正確。',
  regex: ':attribute格式不正確。',
  attributes: {}
};


/***/ }),

/***/ "./node_modules/validatorjs/src/messages.js":
/***/ (function(module, exports, __webpack_require__) {

var Attributes = __webpack_require__("./node_modules/validatorjs/src/attributes.js");

var Messages = function(lang, messages) {
  this.lang = lang;
  this.messages = messages;
  this.customMessages = {};
  this.attributeNames = {};
};

Messages.prototype = {
  constructor: Messages,

  /**
   * Set custom messages
   *
   * @param {object} customMessages
   * @return {void}
   */
  _setCustom: function(customMessages) {
    this.customMessages = customMessages || {};
  },

  /**
   * Set custom attribute names.
   *
   * @param {object} attributes
   */
  _setAttributeNames: function(attributes) {
    this.attributeNames = attributes;
  },

  /**
   * Set the attribute formatter.
   *
   * @param {fuction} func
   * @return {void}
   */
  _setAttributeFormatter: function(func) {
    this.attributeFormatter = func;
  },

  /**
   * Get attribute name to display.
   *
   * @param  {string} attribute
   * @return {string}
   */
  _getAttributeName: function(attribute) {
    var name = attribute;
    if (this.attributeNames.hasOwnProperty(attribute)) {
      return this.attributeNames[attribute];
    } else if (this.messages.attributes.hasOwnProperty(attribute)) {
      name = this.messages.attributes[attribute];
    }

    if (this.attributeFormatter) {
      name = this.attributeFormatter(name);
    }

    return name;
  },

  /**
   * Get all messages
   *
   * @return {object}
   */
  all: function() {
    return this.messages;
  },

  /**
   * Render message
   *
   * @param  {Rule} rule
   * @return {string}
   */
  render: function(rule) {
    if (rule.customMessage) {
      return rule.customMessage;
    }
    var template = this._getTemplate(rule);

    var message;
    if (Attributes.replacements[rule.name]) {
      message = Attributes.replacements[rule.name].apply(this, [template, rule]);
    } else {
      message = this._replacePlaceholders(rule, template, {});
    }

    return message;
  },

  /**
   * Get the template to use for given rule
   *
   * @param  {Rule} rule
   * @return {string}
   */
  _getTemplate: function(rule) {

    var messages = this.messages;
    var template = messages.def;
    var customMessages = this.customMessages;
    var formats = [rule.name + '.' + rule.attribute, rule.name];

    for (var i = 0, format; i < formats.length; i++) {
      format = formats[i];
      if (customMessages.hasOwnProperty(format)) {
        template = customMessages[format];
        break;
      } else if (messages.hasOwnProperty(format)) {
        template = messages[format];
        break;
      }
    }

    if (typeof template === 'object') {
      template = template[rule._getValueType()];
    }

    return template;
  },

  /**
   * Replace placeholders in the template using the data object
   *
   * @param  {Rule} rule
   * @param  {string} template
   * @param  {object} data
   * @return {string}
   */
  _replacePlaceholders: function(rule, template, data) {
    var message, attribute;

    data.attribute = this._getAttributeName(rule.attribute);
    data[rule.name] = data[rule.name] || rule.getParameters().join(',');

    if (typeof template === 'string' && typeof data === 'object') {
      message = template;

      for (attribute in data) {
        message = message.replace(new RegExp(':' + attribute, 'g'), data[attribute]);
      }
    }

    return message;
  }

};

module.exports = Messages;


/***/ }),

/***/ "./node_modules/validatorjs/src/rules.js":
/***/ (function(module, exports) {

function leapYear(year) {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

function isValidDate(inDate) {
    var valid = true;

    // reformat if supplied as mm.dd.yyyy (period delimiter)
    if (typeof inDate === 'string') {
      var pos = inDate.indexOf('.');
      if ((pos > 0 && pos <= 6)) {
        inDate = inDate.replace(/\./g, '-');
      }
    }

    var testDate = new Date(inDate);
    var yr = testDate.getFullYear();
    var mo = testDate.getMonth() + 1;
    var day = testDate.getDate();

    var daysInMonth = [31, (leapYear(yr) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (yr < 1000) { return false; }
    if (isNaN(mo)) { return false; }
    if (mo > 12) { return false; }
    if (isNaN(day)) { return false; }
    if (day > daysInMonth[mo]) { return false; }

    return valid;
}

var rules = {

  required: function(val) {
    var str;

    if (val === undefined || val === null) {
      return false;
    }

    str = String(val).replace(/\s/g, "");
    return str.length > 0 ? true : false;
  },

  required_if: function(val, req, attribute) {
    req = this.getParameters();
    if (this.validator._objectPath(this.validator.input, req[0]) === req[1]) {
      return this.validator.getRule('required').validate(val);
    }

    return true;
  },

  required_unless: function(val, req, attribute) {
    req = this.getParameters();
    if (this.validator._objectPath(this.validator.input, req[0]) !== req[1]) {
      return this.validator.getRule('required').validate(val);
    }

    return true;
  },

  required_with: function(val, req, attribute) {
    if (this.validator._objectPath(this.validator.input, req)) {
      return this.validator.getRule('required').validate(val);
    }

    return true;
  },

  required_with_all: function(val, req, attribute) {

    req = this.getParameters();

    for(var i = 0; i < req.length; i++) {
      if (!this.validator._objectPath(this.validator.input, req[i])) {
        return true;
      }
    }

    return this.validator.getRule('required').validate(val);
  },

  required_without: function(val, req, attribute) {

    if (this.validator._objectPath(this.validator.input, req)) {
      return true;
    }

    return this.validator.getRule('required').validate(val);
  },

  required_without_all: function(val, req, attribute) {

    req = this.getParameters();

    for(var i = 0; i < req.length; i++) {
      if (this.validator._objectPath(this.validator.input, req[i])) {
        return true;
      }
    }

    return this.validator.getRule('required').validate(val);
  },

  'boolean': function (val) {
    return (
      val === true ||
      val === false ||
      val === 0 ||
      val === 1 ||
      val === '0' ||
      val === '1' ||
      val === 'true' ||
      val === 'false'
    );
  },

  // compares the size of strings
  // with numbers, compares the value
  size: function(val, req, attribute) {
    if (val) {
      req = parseFloat(req);

      var size = this.getSize();

      return size === req;
    }

    return true;
  },

  string: function(val, req, attribute) {
    return typeof val === 'string';
  },

  sometimes: function(val) {
    return true;
  },

  /**
   * Compares the size of strings or the value of numbers if there is a truthy value
   */
  min: function(val, req, attribute) {
    var size = this.getSize();
    return size >= req;
  },

  /**
   * Compares the size of strings or the value of numbers if there is a truthy value
   */
  max: function(val, req, attribute) {
    var size = this.getSize();
    return size <= req;
  },

  between: function(val, req, attribute) {
    req = this.getParameters();
    var size = this.getSize();
    var min = parseFloat(req[0], 10);
    var max = parseFloat(req[1], 10);
    return size >= min && size <= max;
  },

  email: function(val) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(val);
  },

  numeric: function(val) {
    var num;

    num = Number(val); // tries to convert value to a number. useful if value is coming from form element

    if (typeof num === 'number' && !isNaN(num) && typeof val !== 'boolean') {
      return true;
    } else {
      return false;
    }
  },

  array: function(val) {
    return val instanceof Array;
  },

  url: function(url) {
    return (/^https?:\/\/\S+/).test(url);
  },

  alpha: function(val) {
    return (/^[a-zA-Z]+$/).test(val);
  },

  alpha_dash: function(val) {
    return (/^[a-zA-Z0-9_\-]+$/).test(val);
  },

  alpha_num: function(val) {
    return (/^[a-zA-Z0-9]+$/).test(val);
  },

  same: function(val, req) {
    var val1 = this.validator.input[req];
    var val2 = val;

    if (val1 === val2) {
      return true;
    }

    return false;
  },

  different: function(val, req) {
    var val1 = this.validator.input[req];
    var val2 = val;

    if (val1 !== val2) {
      return true;
    }

    return false;
  },

  "in": function(val, req) {
    var list, i;

    if (val) {
      list = req.split(',');
    }

    if (val && !(val instanceof Array)) {
      val = String(val); // if it is a number

      for (i = 0; i < list.length; i++) {
        if (val === list[i]) {
          return true;
        }
      }

      return false;
    }

    if (val && val instanceof Array) {
      for (i = 0; i < val.length; i++) {
        if (list.indexOf(val[i]) < 0) {
          return false;
        }
      }
    }

    return true;
  },

  not_in: function(val, req) {
    var list = req.split(',');
    var len = list.length;
    var returnVal = true;

    val = String(val); // convert val to a string if it is a number

    for (var i = 0; i < len; i++) {
      if (val === list[i]) {
        returnVal = false;
        break;
      }
    }

    return returnVal;
  },

  accepted: function(val) {
    if (val === 'on' || val === 'yes' || val === 1 || val === '1' || val === true) {
      return true;
    }

    return false;
  },

  confirmed: function(val, req, key) {
    var confirmedKey = key + '_confirmation';

    if (this.validator.input[confirmedKey] === val) {
      return true;
    }

    return false;
  },

  integer: function(val) {
    return String(parseInt(val, 10)) === String(val);
  },

  digits: function(val, req) {
    var numericRule = this.validator.getRule('numeric');
    if (numericRule.validate(val) && String(val).length === parseInt(req)) {
      return true;
    }

    return false;
  },

  regex: function(val, req) {
    var mod = /[g|i|m]{1,3}$/;
    var flag = req.match(mod);
    flag = flag ? flag[0] : "";
    req = req.replace(mod, "").slice(1, -1);
    req = new RegExp(req, flag);
    return !!val.match(req);
  },

  date: function(val, format) {
    return isValidDate(val);
  },
    
  present: function(val) {
    return typeof val !== 'undefined';
  },

  after: function(val, req){
    var val1 = this.validator.input[req];
    var val2 = val;

    if(!isValidDate(val1)){ return false;}
    if(!isValidDate(val2)){ return false;}

    if (new Date(val1).getTime() < new Date(val2).getTime()) {
      return true;
    }

    return false;
  },

   after_or_equal: function(val, req){
    var val1 = this.validator.input[req];
    var val2 = val;

    if(!isValidDate(val1)){ return false;}
    if(!isValidDate(val2)){ return false;}

    if (new Date(val1).getTime() <= new Date(val2).getTime()) {
      return true;
    }

    return false;
  },

  before: function(val, req){
    var val1 = this.validator.input[req];
    var val2 = val;

    if(!isValidDate(val1)){ return false;}
    if(!isValidDate(val2)){ return false;}

    if (new Date(val1).getTime() > new Date(val2).getTime()) {
      return true;
    }

    return false;
  },

   before_or_equal: function(val, req){
    var val1 = this.validator.input[req];
    var val2 = val;

    if(!isValidDate(val1)){ return false;}
    if(!isValidDate(val2)){ return false;}

    if (new Date(val1).getTime() >= new Date(val2).getTime()) {
      return true;
    }

    return false;
  }


};

function Rule(name, fn, async) {
  this.name = name;
  this.fn = fn;
  this.passes = null;
  this.customMessage = undefined;
  this.async = async;
}

Rule.prototype = {

  /**
   * Validate rule
   *
   * @param  {mixed} inputValue
   * @param  {mixed} ruleValue
   * @param  {string} attribute
   * @param  {function} callback
   * @return {boolean|undefined}
   */
  validate: function(inputValue, ruleValue, attribute, callback) {
    var _this = this;
    this._setValidatingData(attribute, inputValue, ruleValue);
    if (typeof callback === 'function') {
      this.callback = callback;
      var handleResponse = function(passes, message) {
        _this.response(passes, message);
      };

      if (this.async) {
        return this.fn.apply(this, [inputValue, ruleValue, attribute, handleResponse]);
      } else {
        return handleResponse(this.fn.apply(this, [inputValue, ruleValue, attribute]));
      }
    }
    return this.fn.apply(this, [inputValue, ruleValue, attribute]);
  },

  /**
   * Set validating data
   *
   * @param {string} attribute
   * @param {mixed} inputValue
   * @param {mixed} ruleValue
   * @return {void}
   */
  _setValidatingData: function(attribute, inputValue, ruleValue) {
    this.attribute = attribute;
    this.inputValue = inputValue;
    this.ruleValue = ruleValue;
  },

  /**
   * Get parameters
   *
   * @return {array}
   */
  getParameters: function() {
    return this.ruleValue ? this.ruleValue.split(',') : [];
  },

  /**
   * Get true size of value
   *
   * @return {integer|float}
   */
  getSize: function() {
    var value = this.inputValue;

    if (value instanceof Array) {
      return value.length;
    }

    if (typeof value === 'number') {
      return value;
    }

    if (this.validator._hasNumericRule(this.attribute)) {
      return parseFloat(value, 10);
    }

    return value.length;
  },

  /**
   * Get the type of value being checked; numeric or string.
   *
   * @return {string}
   */
  _getValueType: function() {

    if (typeof this.inputValue === 'number' || this.validator._hasNumericRule(this.attribute)) {
      return 'numeric';
    }

    return 'string';
  },

  /**
   * Set the async callback response
   *
   * @param  {boolean|undefined} passes  Whether validation passed
   * @param  {string|undefined} message Custom error message
   * @return {void}
   */
  response: function(passes, message) {
    this.passes = (passes === undefined || passes === true);
    this.customMessage = message;
    this.callback(this.passes, message);
  },

  /**
   * Set validator instance
   *
   * @param {Validator} validator
   * @return {void}
   */
  setValidator: function(validator) {
    this.validator = validator;
  }

};

var manager = {

  /**
   * List of async rule names
   *
   * @type {Array}
   */
  asyncRules: [],

  /**
   * Implicit rules (rules to always validate)
   *
   * @type {Array}
   */
  implicitRules: ['required', 'required_if', 'required_unless', 'required_with', 'required_with_all', 'required_without', 'required_without_all', 'accepted', 'present'],

  /**
   * Get rule by name
   *
   * @param  {string} name
   * @param {Validator}
   * @return {Rule}
   */
  make: function(name, validator) {
    var async = this.isAsync(name);
    var rule = new Rule(name, rules[name], async);
    rule.setValidator(validator);
    return rule;
  },

  /**
   * Determine if given rule is async
   *
   * @param  {string}  name
   * @return {boolean}
   */
  isAsync: function(name) {
    for (var i = 0, len = this.asyncRules.length; i < len; i++) {
      if (this.asyncRules[i] === name) {
        return true;
      }
    }
    return false;
  },

  /**
   * Determine if rule is implicit (should always validate)
   *
   * @param {string} name
   * @return {boolean}
   */
  isImplicit: function(name) {
    return this.implicitRules.indexOf(name) > -1;
  },

  /**
   * Register new rule
   *
   * @param  {string}   name
   * @param  {function} fn
   * @return {void}
   */
  register: function(name, fn) {
    rules[name] = fn;
  },

  /**
   * Register async rule
   *
   * @param  {string}   name
   * @param  {function} fn
   * @return {void}
   */
  registerAsync: function(name, fn) {
    this.register(name, fn);
    this.asyncRules.push(name);
  }

};



module.exports = manager;


/***/ }),

/***/ "./node_modules/validatorjs/src/validator.js":
/***/ (function(module, exports, __webpack_require__) {

var Rules = __webpack_require__("./node_modules/validatorjs/src/rules.js");
var Lang = __webpack_require__("./node_modules/validatorjs/src/lang.js");
var Errors = __webpack_require__("./node_modules/validatorjs/src/errors.js");
var Attributes = __webpack_require__("./node_modules/validatorjs/src/attributes.js");
var AsyncResolvers = __webpack_require__("./node_modules/validatorjs/src/async.js");

var Validator = function(input, rules, customMessages) {
  var lang = Validator.getDefaultLang();
  this.input = input || {};

  this.messages = Lang._make(lang);
  this.messages._setCustom(customMessages);
  this.setAttributeFormatter(Validator.prototype.attributeFormatter);

  this.errors = new Errors();
  this.errorCount = 0;

  this.hasAsync = false;
  this.rules = this._parseRules(rules);
};

Validator.prototype = {

  constructor: Validator,

  /**
   * Default language
   *
   * @type {string}
   */
  lang: 'en',

  /**
   * Numeric based rules
   *
   * @type {array}
   */
  numericRules: ['integer', 'numeric'],

  /**
   * Attribute formatter.
   *
   * @type {function}
   */
  attributeFormatter: Attributes.formatter,

  /**
   * Run validator
   *
   * @return {boolean} Whether it passes; true = passes, false = fails
   */
  check: function() {
    var self = this;

    for (var attribute in this.rules) {
      var attributeRules = this.rules[attribute];
      var inputValue = this._objectPath(this.input, attribute);

      if (this._hasRule(attribute, ['sometimes']) && !this._suppliedWithData(attribute)) {
        continue;
      }

      for (var i = 0, len = attributeRules.length, rule, ruleOptions, rulePassed; i < len; i++) {
        ruleOptions = attributeRules[i];
        rule = this.getRule(ruleOptions.name);

        if (!this._isValidatable(rule, inputValue)) {
          continue;
        }

        rulePassed = rule.validate(inputValue, ruleOptions.value, attribute);
        if (!rulePassed) {
          this._addFailure(rule);
        }

        if (this._shouldStopValidating(attribute, rulePassed)) {
          break;
        }
      }
    }

    return this.errorCount === 0;
  },

  /**
   * Run async validator
   *
   * @param {function} passes
   * @param {function} fails
   * @return {void}
   */
  checkAsync: function(passes, fails) {
    var _this = this;
    passes = passes || function() {};
    fails = fails || function() {};

    var failsOne = function(rule, message) {
      _this._addFailure(rule, message);
    };

    var resolvedAll = function(allPassed) {
      if (allPassed) {
        passes();
      } else {
        fails();
      }
    };

    var asyncResolvers = new AsyncResolvers(failsOne, resolvedAll);

    var validateRule = function(inputValue, ruleOptions, attribute, rule) {
      return function() {
        var resolverIndex = asyncResolvers.add(rule);
        rule.validate(inputValue, ruleOptions.value, attribute, function() {
          asyncResolvers.resolve(resolverIndex);
        });
      };
    };

    for (var attribute in this.rules) {
      var attributeRules = this.rules[attribute];
      var inputValue = this._objectPath(this.input, attribute);

      if (this._hasRule(attribute, ['sometimes']) && !this._suppliedWithData(attribute)) {
        continue;
      }

      for (var i = 0, len = attributeRules.length, rule, ruleOptions; i < len; i++) {
        ruleOptions = attributeRules[i];

        rule = this.getRule(ruleOptions.name);

        if (!this._isValidatable(rule, inputValue)) {
          continue;
        }

        validateRule(inputValue, ruleOptions, attribute, rule)();
      }
    }

    asyncResolvers.enableFiring();
    asyncResolvers.fire();
  },

  /**
   * Add failure and error message for given rule
   *
   * @param {Rule} rule
   */
  _addFailure: function(rule) {
    var msg = this.messages.render(rule);
    this.errors.add(rule.attribute, msg);
    this.errorCount++;
  },

  /**
   * Flatten nested object, normalizing { foo: { bar: 1 } } into: { 'foo.bar': 1 }
   *
   * @param  {object} nested object
   * @return {object} flattened object
   */
  _flattenObject: function (obj) {
    var flattened = {};
    function recurse (current, property) {
      if (!property && Object.getOwnPropertyNames(current).length === 0) {
        return;
      }
      if (Object(current) !== current || Array.isArray(current)) {
        flattened[property] = current;
      } else {
        var isEmpty = true;
        for (var p in current) {
          isEmpty = false;
          recurse(current[p], property ? property + "." + p : p);
        }
        if (isEmpty) {
          flattened[property] = {};
        }
      }
    }
    if (obj) {
      recurse(obj);
    }
    return flattened;
  },

  /**
   * Extract value from nested object using string path with dot notation
   *
   * @param  {object} object to search in
   * @param  {string} path inside object
   * @return {any|void} value under the path
   */
  _objectPath: function (obj, path) {
    if (Object.prototype.hasOwnProperty.call(obj, path)) {
      return obj[path];
    }

    var keys = path.replace(/\[(\w+)\]/g, ".$1").replace(/^\./, "").split(".");
    var copy = {};

    for (var attr in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, attr)) {
        copy[attr] = obj[attr];
      }
    }

    for (var i = 0, l = keys.length; i < l; i++) {
      if (Object.hasOwnProperty.call(copy, keys[i])) {
        copy = copy[keys[i]];
      } else {
        return;
      }
    }
    return copy;
  },

  /**
   * Parse rules, normalizing format into: { attribute: [{ name: 'age', value: 3 }] }
   *
   * @param  {object} rules
   * @return {object}
   */
  _parseRules: function(rules) {
    var parsedRules = {};
    rules = this._flattenObject(rules);
    for (var attribute in rules) {
      var rulesArray = rules[attribute];
      var attributeRules = [];

      if (typeof rulesArray === 'string') {
        rulesArray = rulesArray.split('|');
      }

      for (var i = 0, len = rulesArray.length, rule; i < len; i++) {
        rule = this._extractRuleAndRuleValue(rulesArray[i]);
        if (Rules.isAsync(rule.name)) {
          this.hasAsync = true;
        }
        attributeRules.push(rule);
      }

      parsedRules[attribute] = attributeRules;
    }
    return parsedRules;
  },

  /**
   * Determines if the attribute is supplied with the original data object.
   *
   * @param  {array} attribute
   * @return {boolean}
   */
  _suppliedWithData: function(attribute) {
    return this.input.hasOwnProperty(attribute);
  },

  /**
   * Extract a rule and a value from a ruleString (i.e. min:3), rule = min, value = 3
   *
   * @param  {string} ruleString min:3
   * @return {object} object containing the name of the rule and value
   */
  _extractRuleAndRuleValue: function(ruleString) {
    var rule = {},
      ruleArray;

    rule.name = ruleString;

    if (ruleString.indexOf(':') >= 0) {
      ruleArray = ruleString.split(':');
      rule.name = ruleArray[0];
      rule.value = ruleArray.slice(1).join(":");
    }

    return rule;
  },

  /**
   * Determine if attribute has any of the given rules
   *
   * @param  {string}  attribute
   * @param  {array}   findRules
   * @return {boolean}
   */
  _hasRule: function(attribute, findRules) {
    var rules = this.rules[attribute] || [];
    for (var i = 0, len = rules.length; i < len; i++) {
      if (findRules.indexOf(rules[i].name) > -1) {
        return true;
      }
    }
    return false;
  },

  /**
   * Determine if attribute has any numeric-based rules.
   *
   * @param  {string}  attribute
   * @return {Boolean}
   */
  _hasNumericRule: function(attribute) {
    return this._hasRule(attribute, this.numericRules);
  },

  /**
   * Determine if rule is validatable
   *
   * @param  {Rule}   rule
   * @param  {mixed}  value
   * @return {boolean}
   */
  _isValidatable: function(rule, value) {
    if (Rules.isImplicit(rule.name)) {
      return true;
    }

    return this.getRule('required').validate(value);
  },

  /**
   * Determine if we should stop validating.
   *
   * @param  {string} attribute
   * @param  {boolean} rulePassed
   * @return {boolean}
   */
  _shouldStopValidating: function(attribute, rulePassed) {

    var stopOnAttributes = this.stopOnAttributes;
    if (typeof stopOnAttributes === 'undefined' || stopOnAttributes === false || rulePassed === true) {
      return false;
    }

    if (stopOnAttributes instanceof Array) {
      return stopOnAttributes.indexOf(attribute) > -1;
    }

    return true;
  },

  /**
   * Set custom attribute names.
   *
   * @param {object} attributes
   * @return {void}
   */
  setAttributeNames: function(attributes) {
    this.messages._setAttributeNames(attributes);
  },

  /**
   * Set the attribute formatter.
   *
   * @param {fuction} func
   * @return {void}
   */
  setAttributeFormatter: function(func) {
    this.messages._setAttributeFormatter(func);
  },

  /**
   * Get validation rule
   *
   * @param  {string} name
   * @return {Rule}
   */
  getRule: function(name) {
    return Rules.make(name, this);
  },

  /**
   * Stop on first error.
   *
   * @param  {boolean|array} An array of attributes or boolean true/false for all attributes.
   * @return {void}
   */
  stopOnError: function(attributes) {
    this.stopOnAttributes = attributes;
  },

  /**
   * Determine if validation passes
   *
   * @param {function} passes
   * @return {boolean|undefined}
   */
  passes: function(passes) {
    var async = this._checkAsync('passes', passes);
    if (async) {
      return this.checkAsync(passes);
    }
    return this.check();
  },

  /**
   * Determine if validation fails
   *
   * @param {function} fails
   * @return {boolean|undefined}
   */
  fails: function(fails) {
    var async = this._checkAsync('fails', fails);
    if (async) {
      return this.checkAsync(function() {}, fails);
    }
    return !this.check();
  },

  /**
   * Check if validation should be called asynchronously
   *
   * @param  {string}   funcName Name of the caller
   * @param  {function} callback
   * @return {boolean}
   */
  _checkAsync: function(funcName, callback) {
    var hasCallback = typeof callback === 'function';
    if (this.hasAsync && !hasCallback) {
      throw funcName + ' expects a callback when async rules are being tested.';
    }

    return this.hasAsync || hasCallback;
  }

};

/**
 * Set messages for language
 *
 * @param {string} lang
 * @param {object} messages
 * @return {this}
 */
Validator.setMessages = function(lang, messages) {
  Lang._set(lang, messages);
  return this;
};

/**
 * Get messages for given language
 *
 * @param  {string} lang
 * @return {Messages}
 */
Validator.getMessages = function(lang) {
  return Lang._get(lang);
};

/**
 * Set default language to use
 *
 * @param {string} lang
 * @return {void}
 */
Validator.useLang = function(lang) {
  this.prototype.lang = lang;
};

/**
 * Get default language
 *
 * @return {string}
 */
Validator.getDefaultLang = function() {
  return this.prototype.lang;
};

/**
 * Set the attribute formatter.
 *
 * @param {fuction} func
 * @return {void}
 */
Validator.setAttributeFormatter = function(func) {
  this.prototype.attributeFormatter = func;
};

/**
 * Stop on first error.
 *
 * @param  {boolean|array} An array of attributes or boolean true/false for all attributes.
 * @return {void}
 */
Validator.stopOnError = function(attributes) {
  this.prototype.stopOnAttributes = attributes;
};

/**
 * Register custom validation rule
 *
 * @param  {string}   name
 * @param  {function} fn
 * @param  {string}   message
 * @return {void}
 */
Validator.register = function(name, fn, message) {
  var lang = Validator.getDefaultLang();
  Rules.register(name, fn);
  Lang._setRuleMessage(lang, name, message);
};

/**
 * Register asynchronous validation rule
 *
 * @param  {string}   name
 * @param  {function} fn
 * @param  {string}   message
 * @return {void}
 */
Validator.registerAsync = function(name, fn, message) {
  var lang = Validator.getDefaultLang();
  Rules.registerAsync(name, fn);
  Lang._setRuleMessage(lang, name, message);
};

module.exports = Validator;


/***/ }),

/***/ "./resources/assets/js/common.js":
/***/ (function(module, exports, __webpack_require__) {

(function () {
    var Validator = __webpack_require__("./node_modules/validatorjs/src/validator.js");
    Validator.useLang('zh');

    //region 窗体操作
    // 显示注册
    $('.login-nav .register').click(function () {
        $('#login-register').show();
        $('#btn-register').click();
    });

    // 显示登录
    $('.login-nav .login').click(function () {
        $('#login-register').show();
        $('.email-signup-back').click();
    });

    // 注册
    $('#btn-register').click(function () {
        $('#login_frame').children('div').not('.close').hide();
        $('.email-signup, .signup-form').show();
    });

    // 注册的返回登录
    $('.email-signup-back,.login-link').click(function () {
        $('#login_frame').children('div').not('.close').hide();
        $('.email-signup').children('div').hide();
        $('.login').show();
    });

    // 忘记密码
    $('.reset-password').click(function () {
        $('#login_frame').children('div').not('.close').hide();
        $('.reset').show();
    });

    // 忘记密码的返回登录
    $('.reset .back').click(function () {
        $('#login_frame').children('div').not('.close').hide();
        $('.login').show();
    });

    // 关闭登录窗体
    $('.close').click(function () {
        $('.black-overlay').hide();
    });

    // 登录后鼠标悬停个人头像
    $('#nav_user').hover(function () {
        $('.menu').show();
    }, function () {
        $('.menu').hide();
    });

    $('.menu-nav').hover(function () {
        $('.header-main-menu').show();
    }, function () {
        $('.header-main-menu').delay(10000).hide(0);
    });

    $('.header-main-menu').hover(function () {
        $(this).stop(true, true);
    }, function () {
        $(this).hide();
    });

    //endregion

    //region Ajax注册/登录
    //注册
    $('#to-register').click(function () {
        var form = $(this).closest('form');
        // jq元素对象
        var fields = {
            name: form.find('[name="name"]'),
            email: form.find('[name="email"]'),
            password: form.find('[name="password"]'),
            password_confirmation: form.find('[name="password_confirmation"]')
        };
        // 数据
        var data = {
            name: fields.name.val().trim(),
            email: fields.email.val().trim(),
            password: fields.password.val().trim(),
            password_confirmation: fields.password_confirmation.val().trim()
        };
        // 规则
        var rules = {
            name: 'required',
            email: 'required|email',
            password: 'required|min:6|max:10|confirmed'
        };

        var validator = new Validator(data, rules);
        validator.setAttributeNames({ name: '用户名', email: '邮箱', password: '密码', password_confirmation: '确认密码' });

        if (validator.fails()) {
            error_msg = showFormErrors(fields, validator.errors.errors);
            if (error_msg) {
                swal('', error_msg, 'error');
                return false;
            }
        }
        // 发送注册请求
        var url = $(this).closest('form').data('url');
        var _this = this;
        $(this).addClass('disabled');
        $.ajax({
            url: url,
            method: 'post',
            dataType: 'json',
            data: data,
            success: function success(result) {
                if (result.status === 1) {
                    // 清空所有定时器
                    clearInterval(window.thread_id);

                    $('span.email').text(data.email);
                    $('.signup-form').hide();
                    $('.signup-success').show();
                    // 重发定时器
                    activeResend(30);
                } else {
                    swal('', result.message, 'error');
                }
            },
            error: function error(xhr, textStatus, errorThrown) {
                if (xhr.status === 422) {
                    var errors = JSON.parse(xhr.responseText);
                    var _error_msg = showFormErrors(fields, errors);
                    swal('', _error_msg, 'error');
                } else {
                    swal('', '请求出错，请刷新重试', 'error');
                }
            },
            complete: function complete() {
                $(_this).removeClass('disabled');
            }
        });
    });

    // 重发验证邮件
    $('.resend').click(function () {
        var url = $(this).data('url');
        var email = $('span.email').text();
        var _this = this;
        $(this).addClass('disabled');
        $.ajax({
            url: url,
            method: 'post',
            dataType: 'json',
            data: {
                email: email
            },
            success: function success(result) {
                if (result.status === 1) {
                    activeResend(30);
                    swal('', result.message, 'success');
                } else {
                    swal('', result.message, 'error');
                }
            },
            error: function error() {
                swal('', '请求出错，请稍候重试', 'error');
            }
        });
    });

    // 登录
    $('#to-login').click(function () {
        var form = $(this).closest('form');
        // jq元素对象
        var fields = {
            email: form.find('[name="email"]'),
            password: form.find('[name="password"]')
        };
        // 数据
        var data = {
            email: fields.email.val().trim(),
            password: fields.password.val().trim()
        };
        // 规则
        var rules = {
            email: 'required|email',
            password: 'required'
        };

        var validator = new Validator(data, rules);
        validator.setAttributeNames({ email: '邮箱', password: '密码' });

        if (validator.fails()) {
            error_msg = showFormErrors(fields, validator.errors.errors);
            if (error_msg) {
                swal('', error_msg, 'error');
                return false;
            }
        }
        // 发送登录请求
        var url = form.data('url');
        var _this = this;
        $(this).addClass('disabled');
        $.ajax({
            url: url,
            method: 'post',
            dataType: 'json',
            data: data,
            success: function success(result) {
                if (result.status === 1) {
                    swal('', result.message, 'success');
                    window.location.reload();
                } else {
                    swal('', result.message, 'error');
                }
            },
            error: function error(xhr, textStatus, errorThrown) {
                swal('', '请求出错，请刷新重试', 'error');
            },
            complete: function complete() {
                $(_this).removeClass('disabled');
            }
        });
    });

    // 发送重置密码链接
    $('#to-reset-password').click(function () {
        var url = $(this).data('url');
        var email = $('.reset-form').find('[name="email"]').val();
        var data = { email: email };
        var rules = { email: 'required|email' };
        var validator = new Validator(data, rules);
        validator.setAttributeNames({ email: '邮箱' });

        if (validator.fails()) {
            error_msg = validator.errors.first('email');
            if (error_msg) {
                swal('', error_msg, 'error');
                return false;
            }
        }

        $(this).addClass('disabled');
        var _this = this;
        $.ajax({
            url: url,
            method: 'post',
            dataType: 'json',
            data: data,
            success: function success(result) {
                if (result.status === 1) {
                    $('.black-overlay').hide();
                    swal('', result.message, 'success');
                } else {
                    swal('', result.message, 'error');
                }
            },
            error: function error() {
                swal('', '请求失败，请刷新重试', 'error');
            },
            complete: function complete() {
                $(this).removeClass('disabled');
            }
        });
    });
    //endregion

    //region show 页面喜欢
    $('.like-btn.btn-with-icon.btn').click(function () {
        // 检查是否登录
        if (!checkLogin()) {
            return false;
        }

        var _this = this;
        var image_id = $('#current-image').data('image-id');
        $.ajax({
            url: '/favor',
            method: 'post',
            dataType: 'json',
            data: {
                image_id: image_id
            },
            success: function success(data) {
                // 喜欢或者不喜欢
                if (data.status === 1) {
                    var count = $(_this).find('.num').text();
                    if (data.favor_status === 1) {
                        count++;
                    } else {
                        if (count < 1) {
                            count = 0;
                        } else {
                            count--;
                        }
                    }
                    $(_this).find('.num').text(count);
                } else {
                    swal('', '请求出错，请刷新页面重试', 'warning');
                }
            },
            error: function error(xhr, errStatus, errText) {
                if (xhr.status === 401) {
                    // 未登录
                    $('.login.btn.wbtn').click();
                    return false;
                }

                swal('', '请求出错，请刷新页面重试', 'error');
            }
        });
    });

    // 回复
    $('.reply-button').click(function () {
        var at_user_id = $(this).data('at-user-id');
        var at_user_name = $(this).data('at-user-name');
        var content = $('#comment-content').val();
        content += '@' + at_user_name + ' ';
        $('#comment-content').val(content);
        $('#comment-content').data('at-user-id', at_user_id);
    });

    // 添加评论和回复
    $('#add-comment').click(function () {
        // 检查是否登录
        if (!checkLogin()) {
            return false;
        }

        var at_user_id = $('#comment-content').data('at-user-id');
        var content = $('#comment-content').val();
        if (content.trim().length < 1) {
            swal('', '请输入内容', 'warning');
            return false;
        }
        var image_id = $(this).data('image-id');
        data = {
            content: content,
            image_id: image_id
        };

        if ($.isNumeric(at_user_id)) {
            data.at_user_id = at_user_id;
        }

        $.ajax({
            url: '/comments',
            method: 'post',
            dataType: 'json',
            data: data,
            success: function success(data) {
                if (data.status === 1) {
                    // 刷新页面
                    swal('', data.message, 'success');
                    window.location.reload();
                } else {
                    swal('', data.message, 'warning');
                }
            },
            error: function error(xhr, errStatus, errText) {
                if (xhr.status === 401) {
                    // 未登录
                    $('.login.btn.wbtn').click();
                    return false;
                }
                swal('请求失败，请稍候重试');
            }
        });
    });

    // 删除评论或回复
    $('.delete').click(function () {
        if (!checkLogin()) {
            return false;
        }

        var _this = this;
        swal({
            title: '确认删除?',
            text: '',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then(function (isConfirm) {
            if (isConfirm === true) {
                deleteComment(_this);
            } else if (isConfirm === false) {} else {
                // Esc, close button or outside click
                // isConfirm is undefined
            }
        });
    });

    function deleteComment(obj) {
        var _this = obj;
        var comment_id = $(_this).data('comment-id');
        $.ajax({
            url: '/comments/' + comment_id,
            method: 'delete',
            dataType: 'json',
            success: function success(data) {
                if (data.status === 1) {
                    swal({
                        title: '成功',
                        text: '删除成功',
                        timer: 1000
                    }).then(function () {},
                    // handling the promise rejection
                    function (dismiss) {
                        if (dismiss === 'timer') {
                            //console.log('I was closed by the timer')
                        }
                    });

                    $(_this).closest('.comment').remove();

                    var count = $('#comment-count').text();
                    if (count < 1) {
                        count = 0;
                    } else {
                        count--;
                    }
                    $('#comment-count').text(count);
                } else {
                    swal('', data.message, 'warning');
                }
            },
            error: function error(xhr, errStatus, errText) {
                if (xhr.status === 401) {
                    $('.login.btn.wbtn').click();
                    return false;
                }

                swal('', '请求异常，请刷新页面重试', 'error');
            }
        });
    }

    // 锚点
    $('a.comment-btn.btn-with-icon.btn').click(function () {
        var scroll_top = $('#pin_view_add_comment').offset().top;
        $('html,body').animate({ scrollTop: scroll_top + 'px' }, 800);
    });
    //endregion

    // 滚动顶端
    $('#elevator').click(function () {
        $('html,body').animate({ scrollTop: '0px' }, 800);
    });

    //region Functions
    // 数据出错提示
    function showFormErrors(fields, errors) {
        var name = errors.name,
            email = errors.email,
            password = errors.password;
        // 添加出错样式

        name && fields.name.toggleClass('input-error', !!name);
        email && fields.email.toggleClass('input-error', !!email);
        password && fields.password.toggleClass('input-error', !!password);

        // 拼接出错信息提示
        var error_msg = '' + (name ? name[0] + '\r\n' : '') + (email ? email[0] + '\r\n' : '') + (password ? password[0] : '');

        return error_msg;
    }

    // 所有关注中取消关注
    $('.cancel-following').click(function () {
        var _this = this;
        swal({
            title: '确认删除?',
            text: '',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then(function (isConfirm) {
            if (isConfirm === true) {
                var user_id = $(_this).data('user-id');
                $.ajax({
                    url: '/followings/' + user_id,
                    method: 'post',
                    dataType: 'json',
                    success: function success(data) {
                        if (data.status === 1) {
                            swal('', data.message, 'success');
                            $(_this).closest('.person-item.followings').remove();
                        } else {
                            swal('', data.message, 'warning');
                        }
                    },
                    error: function error(xhr) {
                        swal('', '请求失败，请刷新页面重试', 'error');
                    }
                });
            } else if (isConfirm === false) {} else {
                // Esc, close button or outside click
                // isConfirm is undefined
            }
        });
    });
    // 某个用户主页中关注和取关
    $('.followuser.btn.rbtn').click(function () {
        if (!checkLogin()) {
            return false;
        }

        var _this = this;
        var user_id = $(this).data('user-id');
        $.ajax({
            url: '/followings/' + user_id,
            method: 'post',
            dataType: 'json',
            success: function success(data) {
                if (data.status === 1) {
                    var text = $(_this).find('.text').text();
                    if (text.indexOf('已') === -1) {
                        text = '已关注';
                    } else {
                        text = '关注';
                    }
                    $(_this).find('.text').text(text);
                } else {
                    swal('', data.message, 'warning');
                }
            },
            error: function error(xhr) {
                if (xhr.status === 401) {
                    $('.login.btn.wbtn').click();
                    return false;
                }
            }
        });
    });

    // 定时器
    function activeResend(time) {
        // 定时器
        var text_time = $('.resend').find('span');
        window.thread_id = setInterval(function () {
            time--;
            console.log(time);
            text_time.text(time);
            if (time < 1) {
                text_time.text('');
                $('.resend').removeClass('disabled');
                clearInterval(window.thread_id);
            }
        }, 1000);
    }

    function checkLogin() {
        if ($('#nav_user').length < 1) {
            // 未登录
            $('.login.btn.wbtn').click();
            return false;
        } else {
            return true;
        }
    }

    // endregion
})();

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/common.js");


/***/ })

/******/ });