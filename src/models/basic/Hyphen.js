export default class Hyphen {
  _split(text) {
    return text.toLowerCase().split(/-/g);
  }

  test(text) {
    return /^[0-9a-z]+(-[0-9a-z]+)+$/.test(text);
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
    return text;
  }

  snake(text) {
    return text.replace(/-/g, '_');
  }

  underscore(text) {
    return this.snake(text);
  }

  constant(text) {
    return this.snake(text).toUpperCase();
  }

  sentence(text) {
    return text.replace(/-/g, ' ').replace(/^./, s => s.toUpperCase());
  }
}
