type HelloWorldLiteral = "hello world";
const hellowWorld: HelloWorldLiteral = "hello world";

type PasswordRequirements = {
  characters: "abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=";
  min: 12;
  [key: string]: unknown;
};

const PasswordConfig: PasswordRequirements = {
  characters: "abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=",
  min: 12,
  salt: 42,
  whatever: null,
};

// That's now illegal
// PasswordConfig.min = 7;

type Suffixer<T, Suffix extends string> = {
  [Property in keyof T]: T[Property] extends string
    ? `${T[Property]}${Suffix}`
    : T[Property];
};

type SuffixerWithFilter<T, Suffix extends string> = {
  // This version would not work as T would keep the non-string fields
  // which I don't want to have in the filtred type
  // [P in keyof T]: T[P] extends string ? `${T[P]}${Suffix}` : never;

  // The casting is necessary to utilize TypeScript's key remapping feature
  // because otherwise you are not able to perform the conditional check
  // as the syntax would not be valid.
  [P in keyof T as T[P] extends string ? P : never]: T[P] extends string
    ? `${T[P]}${Suffix}`
    : never;
};

type Extendable = {
  name: string;
  vocation: string;
  days: number;
};

const Prophet: Extendable = {
  name: "ezekiel",
  vocation: "prophet",
  days: 1260,
};

const suffix = "_of_god";
type Suffixed = Suffixer<typeof Prophet, typeof suffix>;

// The honor of God be forever on my lips!
const SuffixedProphet: Suffixed = {
  name: "daniel_of_god",
  vocation: "prophet_of_god",
  days: 40,
};

const SuffixedAndFilteredProphet: SuffixerWithFilter<
  typeof Prophet,
  "_of_god"
> = {
  name: "daniel_of_god",
  vocation: "prophet_of_god",
  // day is not allowed anymore here!
};
