import { LeftRightBasedExpression } from '../Expression';
import { OclVisitor } from '../../OclVisitor';

/**
 * Multiply
 *
 * @oclExpression Symbol: *
 * @oclExample 1 * 2
 */
export class MultiplyExpression extends LeftRightBasedExpression {
    visit(visitor: OclVisitor): any {
        return visitor.visitMultiplyExpression(this);
    }
}
