import {expectOclRuleValidatesToTrue} from '../../matcher';

describe('StringExpression', () => {
    it('should except string using double-quotes and single-quotes', () => {
        const oclExpression = 'context Object inv: \'ABC\' = "ABC"';
        expectOclRuleValidatesToTrue(oclExpression);
    });
});
