## Utils

### 断言

##### `isDef`:

1. Examples

```js
isDef(123) // true
isDef(null) // false
isDef(undefined) // false
```

2. code

```js
export const isDef = v => v !== null && v !== undefined
```

3. vscode snippet

```json
{
  "sutils:isDef": {
    "prefix": "sutils:isDef",
    "body": ["export const isDef = v => v !== null && v !== undefined"]
  }
}
```

##### `isUndef`:

1. Examples

```js
isUndef(123) // false
isUndef(null) // true
isUndef(undefined) // true
```

2. code

```js
export const isUndef = v => v === null || v === undefined
```

3. vscode snippet

```json
{
  "sutils:isUndef": {
    "prefix": "sutils:isUndef",
    "body": ["export const isUndef = v => v === null || v === undefined"]
  }
}
```

##### `isVoid`:

1. Examples

```js
isVoid('') // true
isVoid(null) // true
isVoid(false) // false
isVoid(1) // false
isVoid('1') // false
```

2. code

```js
export const isVoid = v => v === null || v === undefined || v === ''
```

3. vscode snippet

```json
{
  "sutils:isVoid": {
    "prefix": "sutils:isVoid",
    "body": [
      "export const isVoid = v => v === null || v === undefined || v === ''"
    ]
  }
}
```

##### `isNotVoid`:

1. Examples

```js
isNotVoid('') // false
isNotVoid(null) // false
isNotVoid(false) // true
isNotVoid(1) // true
isNotVoid('1') // true
```

2. code

```js
export const isVoid = v => v === null || v === undefined || v === ''
```

3. vscode snippet

```json
{
  "sutils:isNotVoid": {
    "prefix": "sutils:isNotVoid",
    "body": [
      "export const isVoid = v => v === null || v === undefined || v === ''"
    ]
  }
}
```

##### `isObject`:

1. Examples

```js
isObject({}) // true
isObject([]) // true
isObject(null) // false
```

2. code

```js
export const isObject = v => typeof v === 'object' && v !== null
```

3. vscode snippet

```json
{
  "sutils:isObject": {
    "prefix": "sutils:isObject",
    "body": ["export const isObject = v => typeof v === 'object' && v !== null"]
  }
}
```

##### `isNumber`:

1. Examples

```js
isNumber(1) // true
isNumber(true) // false
isNumber(NaN) // false
```

2. code

```js
export const isNumber = v => typeof v === 'number' || !isNaN(parseInt(v))
```

3. vscode snippet

```json
{
  "sutils:isNumber": {
    "prefix": "sutils:isNumber",
    "body": [
      "export const isNumber = v => typeof v === 'number' || !isNaN(parseInt(v))"
    ]
  }
}
```

##### `isPlainObject`:

1. Examples

```js
isPlainObject({}) // true
isPlainObject(function () {}) // false
```

2. code

```js
const _toString = Object.prototype.toString
export const isPlainObject = v => _toString.call(v) === '[object Object]'
```

3. vscode snippet

```json
{
  "sutils:isPlainObject": {
    "prefix": "sutils:isPlainObject",
    "body": [
      "const _toString = Object.prototype.toString",
      "export const isPlainObject = v => _toString.call(v) === '[object Object]'"
    ]
  }
}
```

##### `isRegExp`:

1. Examples

```js
isRegExp(/a/) // true
isRegExp({}) // false
```

2. code

```js
const _toString = Object.prototype.toString
export const isRegExp = v => _toString.call(v) === '[object RegExp]'
```

3. vscode snippet

```json
{
  "sutils:isRegExp": {
    "prefix": "sutils:isRegExp",
    "body": [
      "const _toString = Object.prototype.toString",
      "export const isRegExp = v => _toString.call(v) === '[object RegExp]'"
    ]
  }
}
```

##### `isPromise`:

1. Examples

```js
isPromise(Promise.resolve(1)) // true
isPromise({}) // false
```

2. code

```js
export const isPromise = v =>
  isDef(v) && typeof v.then === 'function' && typeof v.catch === 'function'
```

3. vscode snippet

```json
{
  "sutils:isPromise": {
    "prefix": "sutils:isPromise",
    "body": [
      "export const isPromise = v =>",
      "\tisDef(v) && typeof v.then === 'function' && typeof v.catch === 'function'"
    ]
  }
}
```

##### `isEmptyObject`:

1. Examples

```js
isEmptyObject({}) // true
isEmptyObject(1) // true
isEmptyObject({ a: '1' }) // false
```

2. code

```js
export const isEmptyObject = o => {
  if (typeof o !== 'object' || o === null) return true
  return Object.keys(o).length === 0
}
```

3. vscode snippet

```json
{
  "sutils:isEmptyObject": {
    "prefix": "sutils:isEmptyObject",
    "body": []
  }
}
```

##### `isEmail`:

1. Examples

```js
isEmail('11@b.com') // false
isEmail('12345@qq.com') // true
```

2. code

```js
const emailRE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
export const isEmail = val => emailRE.test(val)
```

3. vscode snippet

```json
{
  "sutils:isEmail": {
    "prefix": "sutils:isEmail",
    "body": [
      "const emailRE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/",
      "export const isEmail = val => emailRE.test(val)"
    ]
  }
}
```

### format

##### `toNumber`:

1. Examples

```js
toNumber('1') // 1
toNumber('aa') // 'aa'
```

2. code

```js
export const toNumber = v => {
  const n = parseFloat(v)
  return isNaN(n) ? v : n
}
```

3. vscode snippet

```json
{
  "sutils:toNumber": {
    "prefix": "sutils:toNumber",
    "body": [
      "export const toNumber = v => {",
      "\tconst n = parseFloat(v)",
      "\treturn isNaN(n) ? v : n",
      "}"
    ]
  }
}
```

##### `clear`:

1. Examples

```js
clearVoidValue({ a: 'a', b: 'b', c: '' }) // {a: 'a', b: 'b'}
clearUhDefValue({ a: 'a', b: 'b', c: '', d: null }) // {a: 'a', b: 'b', c: ''}
```

2. code

```js
// export const isObject = v => typeof v === 'object' && v !== null
/**
 * Clear value by resolver and keys.
 * @param { object } o
 * @param { (val: any) => boolean } resolver
 * @returns { object } Cleared object.
 */
export const clear = (o, resolver) => {
  if (!isObject(o)) {
    return {}
  }

  const keys = Object.keys(o)
  const res = { ...o }

  keys.forEach(key => {
    if (_hasOwnProperty.call(res, key) && resolver(res[key])) {
      delete res[key]
    }
  })

  return res
}
export const clearVoidValue = o => clear(o, isVoid)
export const clearUndefValue = o => clear(o, isUndef)
```

3. vscode snippet

```json
{
  "sutils:clear": {
    "prefix": "sutils:clear",
    "body": [
      "// export const isObject = v => typeof v === 'object' && v !== null",
      "/**",
      " * Clear value by resolver and keys.",
      " * @param { object } o",
      " * @param { (val: any) => boolean } resolver",
      " * @returns { object } Cleared object.",
      " */",
      "export const clear = (o, resolver) => {",
      "\tif (!isObject(o)) {",
      "    return {}",
      "\t}",
      "",
      "\tconst keys = Object.keys(o)",
      "\tconst res = { ...o }",
      "",
      "\tkeys.forEach(key => {",
      "\t\tif (_hasOwnProperty.call(res, key) && resolver(res[key])) {",
      "\t\t\tdelete res[key]",
      "\t\t}",
      "\t})",
      "",
      "\treturn res",
      "}",
      "export const clearVoidValue = o => clear(o, isVoid)",
      "export const clearUndefValue = o => clear(o, isUndef)"
    ]
  }
}
```

##### `pick`:

1. Examples

```js
pick({ a: 'a', b: 'b' }, ['a']) // {a: 'a'}
pick({ a: 'a', b: 'b', c: 'c' }, ['a', 'c']) // {a: 'a', c: 'c'}
```

2. code

```js
// export const isObject = v => typeof v === 'object' && v !== null
/**
 * Pick value by keys.
 * @param { object } o
 * @param { string[] } keys
 * @returns { object } New object.
 */
export const pick = (o, keys) =>
  isObject(o)
    ? keys.reduce((res, key) => {
        res[key] = o[key]
        return res
      }, {})
    : {}
```

3. vscode snippet

```json
{
  "sutils:pick": {
    "prefix": "sutils:pick",
    "body": [
      "// export const isObject = v => typeof v === 'object' && v !== null",
      "/**",
      " * Pick value by keys.",
      " * @param { object } o",
      " * @param { string[] } keys",
      " * @returns { object } New object.",
      " */",
      "export const pick = (o, keys) =>",
      "\tisObject(o)",
      "\t\t? keys.reduce((res, key) => {",
      "\t\t\t\tres[key] = o[key]",
      "\t\t\t\treturn res",
      "\t\t\t}, {})",
      "\t\t: {}"
    ]
  }
}
```

##### `camelize`:

1. Examples

```js
camelize('aaa-bb') // aaaBb
camelize('aaa-bb-ccc') // aaaBbCcc
```

2. code

```js
/**
 * Camelize a hyphen-delimited string.
 */
const camelizeRE = /-(\w)/g
export const camelize = str =>
  str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''))

export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
```

3. vscode snippet

```json
{
  "sutils:camelize": {
    "prefix": "sutils:camelize",
    "body": [
      "/**",
      " * Camelize a hyphen-delimited string.",
      " */",
      "const camelizeRE = /-(w)/g",
      "export const camelize = str =>",
      "\tstr.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''))",
      "",
      "export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)"
    ]
  }
}
```

##### `hyphenate`:

1. Examples

```js
hyphenate('aaBbb') // aa-bbb
hyphenate('aaBbbCcc') // aa-bbb-ccc
```

2. code

```js
/**
 * Hyphenate a camelCase string.
 */
const hyphenateRE = /\B([A-Z])/g
export const hyphenate = str => str.replace(hyphenateRE, '-$1').toLowerCase()
```

3. vscode snippet

```json
{
  "sutils:hyphenate": {
    "prefix": "sutils:hyphenate",
    "body": [
      "/**",
      " * Hyphenate a camelCase string.",
      " */",
      "const hyphenateRE = /B([A-Z])/g",
      "export const hyphenate = str => str.replace(hyphenateRE, '-$1').toLowerCase()"
    ]
  }
}
```

### other

## References

- [ Vue2/shared/util.js ](https://github.com/vuejs/vue/blob/dev/src/shared/util.js)
- [shallowEqual](https://github.com/facebook/fbjs/blob/main/packages/fbjs/src/core/shallowEqual.js)
