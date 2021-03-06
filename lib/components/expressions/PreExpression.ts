import { Expression } from './Expression';
import { OclExecutionContext } from '../OclExecutionContext';

/**
 * A condition that has to be fulfilled before executing the operation addressed by the parent OperationCallExpression.
 */
export class PreExpression extends Expression {
    private value: any;

    constructor(value) {
        super();
        this.value = value;
    }

    getValue(): Expression {
        return this.value;
    }

    evaluate(visitor: OclExecutionContext): any {
        const value = this.getValue();
        value.variables = this.variables;

        return value
            .evaluate(visitor);
    }
}
