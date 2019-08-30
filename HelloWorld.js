var HelloWorld = (function () {
    function HelloWorld(firstNameSet, lastNameSet) {
        this.firstName = ' ';
        this.firstName = firstNameSet;
        this.lastName = lastNameSet;
    }
    HelloWorld.prototype.sayHello = function () {
        console.log('Hello World!' + ' My name is ' + this.firstName + ' ' + this.lastName);
    };
    return HelloWorld;
})();
var myHelloClassInstance = new HelloWorld('Brandon', 'Peterson');
myHelloClassInstance.sayHello(); //func name followed by () calls the function
