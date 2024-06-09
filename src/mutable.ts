type Mutable<Type> = {
    -readonly [Property in keyof Type]: Type;
};

type ImmutableObject = {
    readonly name: number;
    readonly age: number;
};

type MutableObject = Mutable<ImmutableObject>;
