import Sentence from './basic/Sentence';

export default class Other extends Sentence {
  test() {
    return true;
  }

  sentence(text) {
    return text
      .replace(/(^\s+|\s+$)/g, '')
      .replace(/^[^0-9a-zA-Z]+/, '')
      .replace(
        /[~!@#$%^&*()/\|,.<>?"'();:_+-=\[\]{}]*\s+[~!@#$%^&*()/\|,.<>?"'();:_+-=\[\]{}]*/g,
        ' '
      )
      .replace(/^./, s => s.toUpperCase());
  }
}
