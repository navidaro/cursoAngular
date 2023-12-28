export interface Passenger {
    name: string;
    children?: string[];
}

const passender1: Passenger = {
    name: 'Fernando',
}

const passenger2: Passenger = {
    name: 'Meslissa',
    children: ['Natalia', 'Andre']
}

const printChildren = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0;

    console.log(passenger.name, howManyChildren);
}

printChildren(passender1)