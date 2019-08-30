var HelloWorld = (function () {
    function HelloWorld(firstNameSet, lastNameSet) {
        this.firstNameSet = firstNameSet;
        this.lastNameSet = lastNameSet;
    }
    HelloWorld.prototype.sayHello = function () {
        console.log('Hello World!' + ' My name is ' + this.firstNameSet + ' ' + this.lastNameSet);
    };
    return HelloWorld;
})();
var myHelloClassInstance = new HelloWorld('Brandon', 'Peterson');
myHelloClassInstance.sayHello(); //func name followed by () calls the function
