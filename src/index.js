import Camel from './models/basic/Camel';
import Pascal from './models/basic/Pascal';
import Hyphen from './models/basic/Hyphen';
import Constant from './models/basic/Constant';
import Snake from './models/basic/Snake';
import Sentence from './models/basic/Sentence';
import Underscore from './models/Underscore';
import Other from './models/Other';

const collection = {
  camel: new Camel(),
  pascal: new Pascal(),
  hyphen: new Hyphen(),
  constant: new Constant(),
  snake: new Snake(),
  underscore: new Underscore(),
  sentence: new Sentence(),
  other: new Other(),
};

const transform = (target, text) => {
  for (let [k, v] of Object.entries(collection)) {
    if (v.test(text)) {
      return v[target](text);
    }
  }

  return '';
};

export const style = text => {
  for (let [k, v] of Object.entries(collection)) {
    if (v.test(text)) {
      return k;
    }
  }

  return '';
};

export const camel = text => transform('camel', text);

export const pascal = text => transform('pascal', text);

export const hyphen = text => transform('hyphen', text);

export const constant = text => transform('constant', text);

export const snake = text => transform('snake', text);

export const underscore = text => transform('underscore', text);

export const sentence = text => transform('sentence', text);

export default {
  style,
  camel,
  pascal,
  hyphen,
  constant,
  snake,
  underscore,
  sentence,
};
