class HelloWorld {


    constructor(public firstNameSet: string, public lastNameSet: string) {

    }

    sayHello() {
        console.log('Hello World!' + ' My name is ' + this.firstNameSet + ' ' + this.lastNameSet +'.');
    }
}
const myHelloClassInstance = new HelloWorld('Brandon', 'Peterson');
myHelloClassInstance.sayHello(); //func name followed by () calls the function