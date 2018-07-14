const ns = require('../lib');
const chai = require('chai');

const assert = chai.assert;

const asset01 = {
  camel: 'iAm24YearsOld',
  pascal: 'IAm24YearsOld',
  hyphen: 'i-am-24-years-old',
  constant: 'I_AM_24_YEARS_OLD',
  snake: 'i_am_24_years_old',
  sentence: 'I am 24 years old',
};

const asset02 = {
  camel: 'namingStyleLovesYou',
  pascal: 'NamingStyleLovesYou',
  hyphen: 'naming-style-loves-you',
  constant: 'NAMING_STYLE_LOVES_YOU',
  snake: 'naming_style_loves_you',
  underscore: '__naming_style__loves_you',
  sentence: 'Naming-style loves you',
};

describe('1. compare `style()` output with asset01', () => {
  Object.keys(asset01).forEach(key => {
    it(`style(\`${asset01[key]}\`) === \`${key}\``, () => {
      assert.strictEqual(ns.style(asset01[key]), key);
    });
  });
});

describe('2. test if 6 basic-model are reciprocal for standard input', () => {
  Object.keys(asset01).forEach(key => {
    it(`all outputs of 6 basic-model transfers are equal to asset01 by inputting \`${asset01[
      key
    ]}\``, () => {
      const input = asset01[key];

      const result = {
        camel: ns.camel(input),
        pascal: ns.pascal(input),
        hyphen: ns.hyphen(input),
        constant: ns.constant(input),
        snake: ns.snake(input),
        sentence: ns.sentence(input),
      };

      assert.strictEqual(JSON.stringify(result), JSON.stringify(asset01));
    });
  });
});

describe('3. compare `style()` output with asset02', () => {
  Object.keys(asset02).forEach(key => {
    it(`style(\`${asset02[key]}\`) === \`${key}\``, () => {
      assert.strictEqual(ns.style(asset02[key]), key);
    });
  });
});

describe(`4. compare outputs of 7 transfers with asset02 by inputting \`--naming-style -loves you\``, () => {
  it(`style(\`--naming-style -loves you\`) === \`other\``, () => {
    assert.strictEqual(ns.style('--naming-style -loves you'), 'other');
  });

  [
    'camel',
    'pascal',
    'hyphen',
    'constant',
    'snake',
    'underscore',
    'sentence',
  ].forEach(method => {
    it(`${method}(\`--naming-style -loves you\`) === \`${asset02[
      method
    ]}\``, () => {
      assert.strictEqual(
        ns[method]('--naming-style -loves you'),
        asset02[method]
      );
    });
  });
});
