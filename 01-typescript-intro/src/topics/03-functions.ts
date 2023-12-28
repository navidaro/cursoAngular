

function addNumbers(a:number, b:number):number{
    return a + b;
}

const addNumbersArrow = (a:number, b:number):string => {
    return `${a + b}`;
}

function multiply(firstNumber:number, secondNumber?:number, base:number = 2){
    return firstNumber * base;
}

const result2 = addNumbersArrow(3, 4);
const result: number = addNumbers(1, 2);
const multiplyResullt: number = multiply(5)

//console.log({result})
//console.log(result2)
//console.log(multiplyResullt)

interface Character {
    name:string;
    hp:number;
    showHP: () => void;
}

const healCharacter = (character: Character, amount:number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHP(){
        console.log(`Puntos de vida ${this.hp}`)
    }
}

healCharacter(strider, 10);
healCharacter(strider, 30);

strider.showHP();

export {};