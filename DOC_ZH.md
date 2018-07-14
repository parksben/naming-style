# naming-style

一个简单的工具类库，用于将文本转化为不同格式的命名风格（如：驼峰式、连字符式、常量式等）。

## 安装

```
yarn add naming-style
```

or

```
npm i naming-style
```

## 使用

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

style('iAm24YearsOld'); // 检测文本 'iAm24YearsOld' 的命名风格
// Output: 'camel'

style('--naming-style -loves you'); // 检测文本 '--naming-style -loves you' 的命名风格
// Output: 'other'

camel('--naming-style -loves you'); // 转换为驼峰式命名
// Output: 'namingStyleLovesYou'

pascal('--naming-style -loves you'); // 转换为大写驼峰式命名
// Output: 'NamingStyleLovesYou'

hyphen('--naming-style -loves you'); // 转换为连字符式命名
// Output: 'naming-style-loves-you'

constant('--naming-style -loves you'); // 转换为常量式命名
// Output: 'NAMING_STYLE_LOVES_YOU'

snake('--naming-style -loves you'); // 转换为“蛇”式命名
// Output: 'naming_style_loves_you'

sentence('--naming-style -loves you'); // 转换为单个句子
// Output: 'Naming-style loves you'

underscore('--naming-style -loves you'); // 转换为下划线形式
// Output: '__naming_style__loves_you'
```

## 特性

### 1. 工具方法

* 此类库提供了 **8** 个工具方法：

  * `style()` 用于检测文本的命名风格
  * 其他 **7** 个方法分别用于将文本转换为对应的命名风格

### 2. 支持转换的命名风格

* 此类库支持 **7** 种命名风格的转换，分别为：**`camel`**, **`pascal`**, **`hyphen`**, **`constant`**, **`snake`**, **`sentence`** 和 `underscore`

* 其中，前 **6** 种风格作为 **基础风格**，下划线风格（`underscore`）由基础风格派生而成

**举例：**

```
camel       -->  'iAm24YearsOld'
pascal      -->  'IAm24YearsOld'
hyphen      -->  'i-am-24-years-old'
constant    -->  'I_AM_24_YEARS_OLD'
snake       -->  'i_am_24_years_old'
sentence    -->  'I am 24 years old'
underscore  -->  'i_am_24_years_old'
```

### 3. 基础风格对应的方法是相互可逆的

* 如果要转换的文本属于前面说的 6 种 **基础风格** 之一，则使用其对应的转换方法可以完成互逆的转换

**举例：**

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

### 4. 转换无匹配风格的文本

* 如果要转换的文本不属于类库提供的 7 种风格，则 `style` 方法的返回为 `'other'`

**举例：**

```js
import { style } from 'naming-style';

style('--naming-style -loves you');
// Output: 'other'
```
