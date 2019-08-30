class HelloWorld {
    firstName = ' ';
    lastName: string;

    constructor(firstNameSet: string, lastNameSet: string) {
        this.firstName = firstNameSet;
        this.lastName = lastNameSet;
    }

    sayHello() {
        console.log('Hello World!' + ' My name is ' + this.firstName + ' ' + this.lastName);
    }
}
const myHelloClassInstance = new HelloWorld('Brandon', 'Peterson');
myHelloClassInstance.sayHello(); //func name followed by () calls the function