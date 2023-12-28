
export class Person {
    //public name: string;
    //private address: string;

    constructor(
        public firstName: string, 
        public lastName: string,
        private address: string = 'No Address'
        ){
        //this.name = name;
        //this.address = address;
    }
}
 
/*export class Hero extends Person{

    //Se maneja composicion sobre la herencia a mas de un nivel
    constructor (
        public alterEgo: string,
        public age: number,
        public realName: string
    ){
        super(realName, 'New York');
    }
}*/

export class Hero{

    //public person: Person;
    //Se maneja composicion sobre la herencia a mas de un nivel
    constructor (
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ){
       //this.person = new Person(realName);
    }
}

const tony = new Person('Tony', 'Stark', 'New York');
const ironman = new Hero('Ironman', 45, 'Tony Stark', tony);

console.log(ironman)