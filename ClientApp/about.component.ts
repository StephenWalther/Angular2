import {Component} from '@angular/core';
import {TaxService} from './tax.service';

@Component({
    selector: 'about',
    template: require('./about.component.html'),
    providers: [TaxService]
})
export class AboutComponent {
    public tax: number;

    constructor(taxService: TaxService) {
        this.tax = taxService.calculate(5.00);
    }
}
