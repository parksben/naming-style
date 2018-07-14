'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sentence = exports.underscore = exports.snake = exports.constant = exports.hyphen = exports.pascal = exports.camel = exports.style = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Camel = require('./models/basic/Camel');

var _Camel2 = _interopRequireDefault(_Camel);

var _Pascal = require('./models/basic/Pascal');

var _Pascal2 = _interopRequireDefault(_Pascal);

var _Hyphen = require('./models/basic/Hyphen');

var _Hyphen2 = _interopRequireDefault(_Hyphen);

var _Constant = require('./models/basic/Constant');

var _Constant2 = _interopRequireDefault(_Constant);

var _Snake = require('./models/basic/Snake');

var _Snake2 = _interopRequireDefault(_Snake);

var _Sentence = require('./models/basic/Sentence');

var _Sentence2 = _interopRequireDefault(_Sentence);

var _Underscore = require('./models/Underscore');

var _Underscore2 = _interopRequireDefault(_Underscore);

var _Other = require('./models/Other');

var _Other2 = _interopRequireDefault(_Other);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var collection = {
  camel: new _Camel2.default(),
  pascal: new _Pascal2.default(),
  hyphen: new _Hyphen2.default(),
  constant: new _Constant2.default(),
  snake: new _Snake2.default(),
  underscore: new _Underscore2.default(),
  sentence: new _Sentence2.default(),
  other: new _Other2.default()
};

var transform = function transform(target, text) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.entries(collection)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          k = _step$value[0],
          v = _step$value[1];

      if (v.test(text)) {
        return v[target](text);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return '';
};

var style = exports.style = function style(text) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = Object.entries(collection)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _step2$value = _slicedToArray(_step2.value, 2),
          k = _step2$value[0],
          v = _step2$value[1];

      if (v.test(text)) {
        return k;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return '';
};

var camel = exports.camel = function camel(text) {
  return transform('camel', text);
};

var pascal = exports.pascal = function pascal(text) {
  return transform('pascal', text);
};

var hyphen = exports.hyphen = function hyphen(text) {
  return transform('hyphen', text);
};

var constant = exports.constant = function constant(text) {
  return transform('constant', text);
};

var snake = exports.snake = function snake(text) {
  return transform('snake', text);
};

var underscore = exports.underscore = function underscore(text) {
  return transform('underscore', text);
};

var sentence = exports.sentence = function sentence(text) {
  return transform('sentence', text);
};

exports.default = {
  style: style,
  camel: camel,
  pascal: pascal,
  hyphen: hyphen,
  constant: constant,
  snake: snake,
  underscore: underscore,
  sentence: sentence
};
//# sourceMappingURL=index.js.map