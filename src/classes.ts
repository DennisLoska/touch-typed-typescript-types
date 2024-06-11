// If you use getters or setters you have lost control over your life!
// If you use inheritance you likely have a sorry life and I am sorry for you!

// hello world
class HelloWorld {}

// hello actual world
class HelloActualWorld {
    sayHello() {
        console.log("Hello world!");
    }
}

const obj = new HelloActualWorld();
obj.sayHello();

class Messanger {
    // type inferred from constructor - good design TS!
    message;

    constructor(message: string) {
        this.message = message;
    }

    send() {
        console.log(this.message);
    }
}

const messanger = new Messanger("Don’t stop when you are tired.");
messanger.send();

class PrivateMessanger {
    // non of your business!
    private message;

    constructor(message: string) {
        this.message = message;
    }

    send() {
        console.log(this.message);
    }
}

const privateMessanger = new PrivateMessanger("Or you'll get fired!");
privateMessanger.send();

// composition - just imagine multiple classes implemenintg that interface
interface Channel {
    channel: "phone" | "web" | "app";
    language: "en" | "de" | "fr" | "light";
    // Let Tim Cook!
    send: (
        message: string,
    ) => (
        language: Channel["language"],
    ) => (channel: Channel["channel"]) => void;
}

class SmartMessanger implements Channel {
    private message;
    // Do not use public keyword future me, thanks !
    public channel: Channel["channel"];
    language: Channel["language"];

    constructor(
        message: string,
        channel: Channel["channel"],
        language: Channel["language"],
    ) {
        this.message = message;
        this.channel = channel;
        this.language = language;
    }

    send(message: string) {
        return (language: Channel["language"]) => {
            return (channel: Channel["channel"]) => {
                console.log(
                    // kaaaa-meeeeee-haaaa-meeeeee-haaaaaaa!
                    `Sending "${this.message} ${message}" in "${language}" via ${channel}`,
                );
            };
        };
    }
}

const smartMessanger = new SmartMessanger(
    "Hello, this is Tim Cook.",
    "web",
    "en",
);

// I know that this makes no sense btw
smartMessanger.send("I had curry for dinner!")("en")("phone");

// inheritance
// Nah I won't be touching that - tzzz  too hot!!!
// What the h even going on????
class WebMessanger extends SmartMessanger {
    constructor(
        message: string,
        language: typeof SmartMessanger.prototype.language, // Could also do this
    ) {
        super(message, "web", (language = "de"));
    }

    // could override the send() method from super
}

const webMessanger = new WebMessanger("Make the unconscious conscious.", "en");
webMessanger.send("- Probably Carl Jung")("light")("phone");

// public static void main(String:[...args]){System.out.println("Hello world!");}
class Boring {
    private static id = 42;

    static print(message: string) {
        console.log(`${message} - ${Boring.id} push ups now!`);
    }
}

Boring.print("Be uncommon amongs uncommon!");
// thats illegal btw
// Boring.id

// instead of using a static class why not just a POJO?
const boring = {
    id: 42,
    print(message: string) {
        console.log(`${message} - ${this.id} push ups now!`);
    },
};

boring.print("This is the way!");
// this is now legal, but I don't really care!
// encapsulation is only* relevant when I am a library developer
// *well, it depends what you mean by library!
boring.id;

// Alright lets get serious - Arnold after the 9th rep
// uhhh ahhh it is 9:30 already.
class TypeMeister<Tasty> {
    // Unfurtounately I have a contract with myself to reduce screentime at night!
    // But don't think that this is farewell!
    // I'll put you in the cookie jar!
}
