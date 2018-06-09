import { IteratorExpression } from '../Expression';
import { OclVisitor } from '../../OclVisitor';

/**
 */
export class ForAllExpression extends IteratorExpression {
    visit(visitor: OclVisitor): any {
        return visitor.visitIteratorExpression(this);
    }
}
