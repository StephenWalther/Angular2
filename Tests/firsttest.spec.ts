import {TaxService} from '../ClientApp/tax.service';

describe('The TaxService ', () => {

    it('should calcuate 5.00 as ', function () {
        let taxService = new TaxService();
        expect(taxService.calculate(5.00)).toEqual(.4);
    });
});
