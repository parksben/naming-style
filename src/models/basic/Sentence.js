export default class Sentence {
  _fill(text) {
    return text.match(/([0-9]+|[a-z]+|[A-Z]+)/g).join('-');
  }

  test(text) {
    return /^[0-9a-zA-Z][^\s]*(\s[^\s]+)+$/.test(text);
  }

  pascal(text) {
    return this._fill(text)
      .split('-')
      .map(w =>
        w.replace(
          /^(\w)(\w*)$/,
          (s, s1, s2) => `${s1.toUpperCase()}${s2.toLowerCase()}`
        )
      )
      .join('');
  }

  camel(text) {
    return this.pascal(text).replace(/^./, s => s.toLowerCase());
  }

  hyphen(text) {
    return this._fill(text).toLowerCase();
  }

  snake(text) {
    return this.hyphen(text).replace(/-/g, '_');
  }

  underscore(text) {
    return text.replace(/[^0-9a-zA-Z]/g, '_');
  }

  constant(text) {
    return this.snake(text).toUpperCase();
  }

  sentence(text) {
    return text
      .replace(/^[^0-9a-zA-Z]/, '')
      .replace(/^./, s => s.toUpperCase());
  }
}
