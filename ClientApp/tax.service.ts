import {Injectable} from '@angular/core';

export class TaxService {

    public calculate(price: number) {
        return price * 0.08;
    }

}