'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Constant = function () {
  function Constant() {
    _classCallCheck(this, Constant);
  }

  _createClass(Constant, [{
    key: '_split',
    value: function _split(text) {
      return text.toLowerCase().split(/_/g);
    }
  }, {
    key: 'test',
    value: function test(text) {
      return (/^[0-9A-Z]+(_[0-9A-Z]+)+$/.test(text)
      );
    }
  }, {
    key: 'pascal',
    value: function pascal(text) {
      return this._split(text).map(function (w) {
        return w.replace(/^(\w)(\w*)$/, function (s, s1, s2) {
          return '' + s1.toUpperCase() + s2.toLowerCase();
        });
      }).join('');
    }
  }, {
    key: 'camel',
    value: function camel(text) {
      return this.pascal(text).replace(/^./, function (s) {
        return s.toLowerCase();
      });
    }
  }, {
    key: 'hyphen',
    value: function hyphen(text) {
      return text.toLowerCase().replace(/_/g, '-');
    }
  }, {
    key: 'snake',
    value: function snake(text) {
      return text.toLowerCase();
    }
  }, {
    key: 'underscore',
    value: function underscore(text) {
      return this.snake(text);
    }
  }, {
    key: 'constant',
    value: function constant(text) {
      return text;
    }
  }, {
    key: 'sentence',
    value: function sentence(text) {
      return text.toLowerCase().replace(/_/g, ' ').replace(/^./, function (s) {
        return s.toUpperCase();
      });
    }
  }]);

  return Constant;
}();

exports.default = Constant;
//# sourceMappingURL=Constant.js.map