# naming-style

![npm](https://img.shields.io/npm/l/naming-style.svg)
![npm](https://img.shields.io/npm/dt/naming-style.svg)
![npm](https://img.shields.io/npm/v/naming-style/latest.svg)

[中文](./DOC_ZH.md)

One lightly library contains a series of methods for converting one string or text to different kind of naming style, such as camelCase, PascalCase, hyphen-case, CONSTANT_CASE, etc.

## Install

```
yarn add naming-style
```

or

```
npm i naming-style
```

## Quick Start

```js
import {
  style,
  camel,
  pascal,
  hyphen,
  constant,
  snake,
  underscore,
  setence,
} from 'naming-style';

style('iAm24YearsOld'); // Detect naming style of 'iAm24YearsOld'
// Output: 'camel'

style('--naming-style -loves you'); // Detect naming style of '--naming-style -loves you'
// Output: 'other'

camel('--naming-style -loves you'); // Convert to camel case
// Output: 'namingStyleLovesYou'

pascal('--naming-style -loves you'); // Convert to pascal case
// Output: 'NamingStyleLovesYou'

hyphen('--naming-style -loves you'); // Convert to hyphen case
// Output: 'naming-style-loves-you'

constant('--naming-style -loves you'); // Convert to constant case
// Output: 'NAMING_STYLE_LOVES_YOU'

snake('--naming-style -loves you'); // Convert to snake case
// Output: 'naming_style_loves_you'

sentence('--naming-style -loves you'); // Convert to sentence case
// Output: 'Naming-style loves you'

underscore('--naming-style -loves you'); // Convert to underscore case
// Output: '__naming_style__loves_you'
```

## Features

### 1. Methods

* This library provides **8** methods you can use:

  * `style()` is used to detect the naming-style of the input.
  * other **7** methods are used to convert the input to several naming styles.

### 2. Available styles for converting to

* This library provides **7** naming styles you can convert to, including **`camel`**, **`pascal`**, **`hyphen`**, **`constant`**, **`snake`**, **`sentence`** and `underscore`.

* The first **6** styles are the **basic styles**, which the last one `underscore ` is derived from them.

**Example:**

```
camel       -->  'iAm24YearsOld'
pascal      -->  'IAm24YearsOld'
hyphen      -->  'i-am-24-years-old'
constant    -->  'I_AM_24_YEARS_OLD'
snake       -->  'i_am_24_years_old'
sentence    -->  'I am 24 years old'
underscore  -->  'i_am_24_years_old'
```

### 3. Basic methods are reversible by each other

* If the input belongs to the **basic styles**, you can use corresponding methods of them to convert your text reversibly.

**Example:**

```js
import { style, camel, snake } from 'naming-style';

const origin = 'i_am_24_years_old';

const namingStyle = style(origin);
console.log(namingStyle);
// 'snake'

const camelCase = camel(origin);
const snake_case = snake(camelCase);
const newCamelCase = camel(snake_case);

console.log(camelCase === newCamelCase);
// true
```

### 4. Other regular input

* If the naming style of the input does not belong to any style from library, the result returned by the `style` method is `'other'`.

**Example:**

```js
import { style } from 'naming-style';

style('--naming-style -loves you');
// Output: 'other'
```
