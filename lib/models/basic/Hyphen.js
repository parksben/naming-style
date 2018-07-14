'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hyphen = function () {
  function Hyphen() {
    _classCallCheck(this, Hyphen);
  }

  _createClass(Hyphen, [{
    key: '_split',
    value: function _split(text) {
      return text.toLowerCase().split(/-/g);
    }
  }, {
    key: 'test',
    value: function test(text) {
      return (/^[0-9a-z]+(-[0-9a-z]+)+$/.test(text)
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
      return text;
    }
  }, {
    key: 'snake',
    value: function snake(text) {
      return text.replace(/-/g, '_');
    }
  }, {
    key: 'underscore',
    value: function underscore(text) {
      return this.snake(text);
    }
  }, {
    key: 'constant',
    value: function constant(text) {
      return this.snake(text).toUpperCase();
    }
  }, {
    key: 'sentence',
    value: function sentence(text) {
      return text.replace(/-/g, ' ').replace(/^./, function (s) {
        return s.toUpperCase();
      });
    }
  }]);

  return Hyphen;
}();

exports.default = Hyphen;
//# sourceMappingURL=Hyphen.js.map