
export interface Product {
    descritpion: string;
    price: number;
}

const phone: Product = {
    descritpion: 'Nokia A1',
    price : 150.00
}

const tablet: Product = {
    descritpion: 'iPad Air',
    price : 250.00
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

//function taxCalculator(options: TaxCalculationOptions): [number, number] {
export function taxCalculator({tax, products}: TaxCalculationOptions): [number, number] {
    let total = 0;
    products.forEach( ({price}) => {
        total += price;
    });

    return [total, total * tax]
}

const shopingCart = [phone, tablet];
const tax = 0.15;

const result = taxCalculator({
    products: shopingCart,
    tax: tax //el nombre de la variable asignada es igual al de la propiedad del objeto por lo que se podria omitir dejando simplemente tax
});

const [total, taxRes] = result;
console.log('Total: ', total);
console.log('Tax: ', taxRes);












export {};