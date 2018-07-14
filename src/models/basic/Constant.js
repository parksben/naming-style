export default class Constant {
  _split(text) {
    return text.toLowerCase().split(/_/g);
  }

  test(text) {
    return /^[0-9A-Z]+(_[0-9A-Z]+)+$/.test(text);
  }

  pascal(text) {
    return this._split(text)
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
    return text.toLowerCase().replace(/_/g, '-');
  }

  snake(text) {
    return text.toLowerCase();
  }

  underscore(text) {
    return this.snake(text);
  }

  constant(text) {
    return text;
  }

  sentence(text) {
    return text
      .toLowerCase()
      .replace(/_/g, ' ')
      .replace(/^./, s => s.toUpperCase());
  }
}
