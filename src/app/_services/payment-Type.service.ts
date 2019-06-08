import { PaymentType } from '../_model/PaymentType';

export class PaymentTypeService {
    paymentTypes: PaymentType[] = [{
        id: 1, name: 'Direct Bank Transfare'
    }, {
        id: 2, name: 'Cheque Payment'
    }, {
        id: 3, name: 'Paypal'
    }, {
        id: 4, name: 'Visa'
    }, {
        id: 5, name: 'Mastercard'
    },
    {
        id: 6, name: 'On Dilivery'
    }];
    getAll(): PaymentType[] {
        return this.paymentTypes;
    }
}