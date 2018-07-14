export default class Pascal {
  _fill(text) {
    let result = text.match(/([0-9]+|[a-z]+|[A-Z]+)/g).join('-');
    while (/[A-Z]{2}/g.test(result)) {
      result = result.replace(/([A-Z])([A-Z])/g, `$1-$2`);
    }
    return result;
  }

  test(text) {
    return /^[A-Z][0-9a-z]*([A-Z][0-9a-z]*)+$/.test(text);
  }

  camel(text) {
    return text.replace(/^./, s => s.toLowerCase());
  }

  pascal(text) {
    return text;
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
