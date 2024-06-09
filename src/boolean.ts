// I hate TS! Why is this even possible?
// Preexisting utility types don't change the fact that
// this is just soooo complex. I'd much rather just
// type out some stuff by hand than do this.
// Or just use actual JS and type inference instead!
type BoolsOnly<Type> = {
    [Property in keyof Type as Type[Property] extends boolean
        ? Property
        : never]: Type[Property];
};

type Config = {
    name: string;
    active: boolean;
};

// Use LSP to check this one out!
type Flags = BoolsOnly<Config>;

const Demo: Config = {
    name: "John Smith",
    active: true,
};

const Flags: Flags = {
    active: false,
};
