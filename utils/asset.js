export const isDef = v => v !== null && v !== undefined

export const isUndef = v => v === null || v === undefined

export const isVoid = v => v === null || v === undefined || v === ''

export const isNotVoid = v => v !== null && v !== undefined && v !== ''

export const isObject = v => typeof v === 'object' && v !== null

export const isNumber = v => typeof v === 'number' || !isNaN(parseInt(v))

const _toString = Object.prototype.toString
export const isPlainObject = v => _toString.call(v) === '[object Object]'

export const isRegExp = v => _toString.call(v) === '[object RegExp]'

export const isPromise = v =>
  isDef(v) && typeof v.then === 'function' && typeof v.catch === 'function'

export const isEmptyObject = o => {
  if (typeof o !== 'object' || o === null) return true
  return Object.keys(o).length === 0
}

// reg
const emailRE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
export const isEmail = val => emailRE.test(val)
