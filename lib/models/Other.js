'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Sentence2 = require('./basic/Sentence');

var _Sentence3 = _interopRequireDefault(_Sentence2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Other = function (_Sentence) {
  _inherits(Other, _Sentence);

  function Other() {
    _classCallCheck(this, Other);

    return _possibleConstructorReturn(this, (Other.__proto__ || Object.getPrototypeOf(Other)).apply(this, arguments));
  }

  _createClass(Other, [{
    key: 'test',
    value: function test() {
      return true;
    }
  }, {
    key: 'sentence',
    value: function sentence(text) {
      return text.replace(/(^\s+|\s+$)/g, '').replace(/^[^0-9a-zA-Z]+/, '').replace(/[~!@#$%^&*()/\|,.<>?"'();:_+-=\[\]{}]*\s+[~!@#$%^&*()/\|,.<>?"'();:_+-=\[\]{}]*/g, ' ').replace(/^./, function (s) {
        return s.toUpperCase();
      });
    }
  }]);

  return Other;
}(_Sentence3.default);

exports.default = Other;
//# sourceMappingURL=Other.js.map