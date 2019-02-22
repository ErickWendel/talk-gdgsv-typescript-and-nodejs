var Conversation;
(function (Conversation) {
    class Say {
        static hello() {
            console.log('Hello world!');
        }
    }
    Conversation.Say = Say;
})(Conversation || (Conversation = {}));
Conversation.Say.hello();
// Hello world!
