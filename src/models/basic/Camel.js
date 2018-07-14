export default class Camel {
  _fill(text) {
    return text.match(/([0-9]+|[a-z]+|[A-Z]+)/g).join('-');
  }

  test(text) {
    return /^[a-z]+(([0-9]|[A-Z])[a-z]*)+$/.test(text);
  }

  camel(text) {
    return text;
  }

  pascal(text) {
    return text.replace(/^\w/, s => s.toUpperCase());
  }

  hyphen(text) {
    return this._fill(text)
      .replace(/([0-9]|[A-Z])-([a-z])/g, '$1$2')
      .toLowerCase();
  }

  snake(text) {
    return this.hyphen(text).replace(/-/g, '_');
  }

  underscore(text) {
    return this.snake(text);
  }

  constant(text) {
    return this.snake(text).toUpperCase();
  }

  sentence(text) {
    return this.hyphen(text)
      .replace(/-/g, ' ')
      .replace(/^./, s => s.toUpperCase());
  }
}
