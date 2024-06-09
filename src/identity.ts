// An idiot admires complexity and a genius admires simplicity. - Terry A. Davis
// I do not admire this at all!!!
type VerboseIdentity<Type> = {
    [Property in keyof Type]: Type[Property];
};

type Agent = {
    readonly name: string;
    age?: number;
};

type Identity = VerboseIdentity<Agent>;
