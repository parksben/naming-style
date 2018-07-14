import Snake from './basic/Snake';

export default class Underscore extends Snake {
  test(text) {
    return /^([0-9a-zA-Z]|_)+$/.test(text);
  }
}
