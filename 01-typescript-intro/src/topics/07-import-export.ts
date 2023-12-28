
import {Product, taxCalculator} from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        descritpion: 'Nokia',
        price: 100
    },
    {
        descritpion: 'Ipad',
        price: 200
    }
];

const [total, tax] = taxCalculator({
    products: shoppingCart,
    tax: 0.15
});

console.log('Total', total);
console.log('Tax', tax);

