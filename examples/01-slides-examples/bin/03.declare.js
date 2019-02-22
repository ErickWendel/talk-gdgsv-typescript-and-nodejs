var myExample;
(function (myExample) {
    class test {
        static hi() {
            console.log('Hello world!');
        }
    }
    myExample.test = test;
})(myExample || (myExample = {}));
myExample.test.hi();
