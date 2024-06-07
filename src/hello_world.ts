type Identity<Type> = Type;

type HelloWorld = {
  message: string;
};

// Just getting in the muscle memory of type parameters!
type HelloWorldIdentity = Identity<HelloWorld>;
