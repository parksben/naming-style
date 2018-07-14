'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sentence = function () {
  function Sentence() {
    _classCallCheck(this, Sentence);
  }

  _createClass(Sentence, [{
    key: '_fill',
    value: function _fill(text) {
      return text.match(/([0-9]+|[a-z]+|[A-Z]+)/g).join('-');
    }
  }, {
    key: 'test',
    value: function test(text) {
      return (/^[0-9a-zA-Z][^\s]*(\s[^\s]+)+$/.test(text)
      );
    }
  }, {
    key: 'pascal',
    value: function pascal(text) {
      return this._fill(text).split('-').map(function (w) {
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
      return this._fill(text).toLowerCase();
    }
  }, {
    key: 'snake',
    value: function snake(text) {
      return this.hyphen(text).replace(/-/g, '_');
    }
  }, {
    key: 'underscore',
    value: function underscore(text) {
      return text.replace(/[^0-9a-zA-Z]/g, '_');
    }
  }, {
    key: 'constant',
    value: function constant(text) {
      return this.snake(text).toUpperCase();
    }
  }, {
    key: 'sentence',
    value: function sentence(text) {
      return text.replace(/^[^0-9a-zA-Z]/, '').replace(/^./, function (s) {
        return s.toUpperCase();
      });
    }
  }]);

  return Sentence;
}();

exports.default = Sentence;
//# sourceMappingURL=Sentence.js.map