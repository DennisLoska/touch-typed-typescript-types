type Config = {
    name: string;
    id: number;
    env: "dev" | "prod";
    version: string;
};

// muscle memory lets gooooo
type CustomPartial<T> = { [P in keyof T]?: T[P] | undefined };

const config = {
    name: "backend",
    id: 77,
    env: "dev",
    version: "1.0.0",
} satisfies Config;

config.env; // happy

const conf: Config = {
    name: "cloud",
    id: 50,
    env: "prod",
    version: "1.2.3",
} satisfies Config;

conf.env; // sad

const narrowedConfig: CustomPartial<Config> = {
    name: "frontend",
    id: 22,
    env: "prod",
} satisfies typeof narrowedConfig;

// Baaaad!!!
// Careful now "satisfies" does nothing because the type declaration
// takes presedence over the satisfies operator - so annoying!!!
narrowedConfig.env;
