export default class Snake {
  _split(text) {
    return text.toLowerCase().split(/_/g);
  }

  test(text) {
    return /^[0-9a-z]+(_[0-9a-z]+)+$/.test(text);
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
    return text.replace(/_/g, '-');
  }

  snake(text) {
    return text;
  }

  underscore(text) {
    return text;
  }

  constant(text) {
    return text.toUpperCase();
  }

  sentence(text) {
    return text.replace(/_/g, ' ').replace(/^./, s => s.toUpperCase());
  }
}
