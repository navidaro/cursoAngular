function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      newProperty = 'New Property';
      hello = 'override'; // Esto puede causar confusión, ya que no está claro qué propiedad está siendo sobrescrita
    };
  }

  @classDecorator
  export class SuperClass {
    public myProperty: string = 'Abc123';
  
    print() {
      console.log('Hola Mundo');
    }
  }
  
  const myClass = new SuperClass();
  console.log(myClass);
  