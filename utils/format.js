import { isObject, isUndef, isVoid } from './asset.js'

const _hasOwnProperty = Object.prototype.hasOwnProperty
export const toNumber = v => {
  const n = parseFloat(v)
  return isNaN(n) ? v : n
}

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

// reg
/**
 * Camelize a hyphen-delimited string.
 */
const camelizeRE = /-(\w)/g
export const camelize = str =>
  str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''))

export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

/**
 * Hyphenate a camelCase string.
 */
const hyphenateRE = /\B([A-Z])/g
export const hyphenate = str => str.replace(hyphenateRE, '-$1').toLowerCase()
