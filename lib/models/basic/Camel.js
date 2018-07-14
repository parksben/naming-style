'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Camel = function () {
  function Camel() {
    _classCallCheck(this, Camel);
  }

  _createClass(Camel, [{
    key: '_fill',
    value: function _fill(text) {
      return text.match(/([0-9]+|[a-z]+|[A-Z]+)/g).join('-');
    }
  }, {
    key: 'test',
    value: function test(text) {
      return (/^[a-z]+(([0-9]|[A-Z])[a-z]*)+$/.test(text)
      );
    }
  }, {
    key: 'camel',
    value: function camel(text) {
      return text;
    }
  }, {
    key: 'pascal',
    value: function pascal(text) {
      return text.replace(/^\w/, function (s) {
        return s.toUpperCase();
      });
    }
  }, {
    key: 'hyphen',
    value: function hyphen(text) {
      return this._fill(text).replace(/([0-9]|[A-Z])-([a-z])/g, '$1$2').toLowerCase();
    }
  }, {
    key: 'snake',
    value: function snake(text) {
      return this.hyphen(text).replace(/-/g, '_');
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
      return this.hyphen(text).replace(/-/g, ' ').replace(/^./, function (s) {
        return s.toUpperCase();
      });
    }
  }]);

  return Camel;
}();

exports.default = Camel;
//# sourceMappingURL=Camel.js.map