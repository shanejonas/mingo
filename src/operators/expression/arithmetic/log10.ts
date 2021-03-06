// Arithmetic Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#arithmetic-expression-operators

import { assert, isNil, isNumber } from '../../../util'
import { computeValue, Options } from '../../../core'

/**
 * Calculates the log base 10 of a number and returns the result as a double.
 *
 * @param obj
 * @param expr
 * @returns {number}
 */
export function $log10(obj: object, expr: any, options: Options): number | null {
  let arg = computeValue(obj, expr, null, options)
  if (isNil(arg)) return null

  assert(isNumber(arg) || isNaN(arg), '$log10 expression must resolve to a number.')

  return Math.log10(arg)
}
