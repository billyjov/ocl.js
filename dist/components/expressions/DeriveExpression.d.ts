import { Expression } from './Expression';
import { OclExecutionContext } from '../OclExecutionContext';
/**
 * A derived value expression is an expression that may be linked to a property.
 *
 * @oclExample context Person::income : Integer
 *     derive:  if underAge
 *       then (parents.income->sum() * 1/100).round()
 *       else job.salary->sum()
 *     endif
 */
export declare class DeriveExpression extends Expression {
    private value;
    constructor(value: any);
    getValue(): Expression;
    evaluate(visitor: OclExecutionContext): any;
}
