type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type Stranger = {
  name?: string;
  age: number;
};

type Identified = Concrete<Stranger>;
