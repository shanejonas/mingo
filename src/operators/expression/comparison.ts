// Comparison Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#comparison-expression-operators

import { computeValue } from '../../core'
import {
  createExpressionOperator,
  $eq as __eq,
  $gt as __gt,
  $gte as __gte,
  $lt as __lt,
  $lte as __lte,
  $ne as __ne
} from '../predicates'

export const $eq = createExpressionOperator(__eq)
export const $gt = createExpressionOperator(__gt)
export const $gte = createExpressionOperator(__gte)
export const $lt = createExpressionOperator(__lt)
export const $lte = createExpressionOperator(__lte)
export const $ne = createExpressionOperator(__ne)

/**
 * Compares two values and returns the result of the comparison as an integer.
 *
 * @param obj
 * @param expr
 * @returns {number}
 */
export function $cmp(obj: object, expr: any): any {
  let args = computeValue(obj, expr)
  if (args[0] > args[1]) return 1
  if (args[0] < args[1]) return -1
  return 0
}