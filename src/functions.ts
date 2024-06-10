// hello world
function sayHello(sth: string) {
    console.log(sth);
}
sayHello("Hello world!");

// stupid indirection for demo purposes
type Message = string;
function saySomething(sth: Message): void {
    console.log(sth);
}

// little generic going on!
saySomething("I'm giving up on you!");
function saySthGeneric<T>(sth: T) {
    console.log(sth);
}
saySthGeneric(42);

// If your code looks like that you should be fired!
function saySthStupidGenericConstraint<T>(sth: T) {
    switch (typeof sth) {
        case "number":
            console.log(sth);
            break;
        case "string":
            console.log(sth);
            break;
        case "bigint":
        case "boolean":
        case "symbol":
        case "function":
            console.log("Computer says 'no'!");
            break;
        case "object":
            if (sth === null) {
                console.log("JS sucks!");
                break;
            }
            console.log(sth.toString());
            break;
        case "undefined":
            console.log("Kaboom");
            break;
        default:
            console.log("Bigger Kaboom");
            break;
    }
}
saySthStupidGenericConstraint(null);

// Actual generic use case with constraint
function saySthSmartGenericConstraint<T extends string | number>(sth: T) {
    if (typeof sth === "string") {
        console.log(sth.toUpperCase());
    }
    if (typeof sth === "number") {
        console.log(sth + 42);
    }
}
saySthSmartGenericConstraint("Habits transform character!");

// Overload, but don't overthink!
function saySthOverloaded(sth: string): void;
function saySthOverloaded(sth: number): void;
function saySthOverloaded(sth: string | number): void {
    if (typeof sth === "string") {
        console.log(sth.toUpperCase());
    }
    if (typeof sth === "number") {
        console.log(sth + 42);
    }
}

saySthOverloaded("You have to fall in love with boredom!");
saySthOverloaded("Do something that sucks every day!");
saySthOverloaded(42);
