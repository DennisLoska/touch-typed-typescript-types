// Oh beloved Option type! How I have missed thee!
// Bestow your presence upon me!
type Option<T> = {
    Some?: T;
    Error?: Error | null; //  union to support both examples below
};

// Now the one above works just perfectly fine,
// but some people have gotten drunk on the TS
// type narrowing kool aid so lets help them out!
type BetterOption<T> =
    | { Some: T; Error?: never }
    | { Some?: never; Error: null }; // Omitted union here to show cleanest way

// Now this implementation I think sucks!
// Who wants this stupid trycatch syntax anyways?
async function doStuffWhichCanGoKaboom(payload: unknown) {
    try {
        if (!payload) {
            throw new Error("Now, let's not blow things out of proportion!");
        }

        const value = await Promise.resolve(payload);
        const result: Option<typeof value> = { Some: value };
        return result;
    } catch (error) {
        const result: Option<undefined> = {
            // Errors as errors 🫤
            Error: error as Error, // error from catch is type any
        };
        return result;
    }
}

// Make it all data!!!
async function potentiallyGoKaboomMoreBeautifully(payload: unknown) {
    if (!payload) {
        const result: Option<typeof value> = { Error: null };
        return result;
    }

    const value = await Promise.resolve(payload).catch(() => null);
    const result: Option<typeof value> = {
        Some: value,
        // Errors as values 🤩
        Error: value === null ? null : undefined,
    };

    return result;
}

async function doStuffWithEvenBetterKaboom(payload: unknown) {
    if (!payload) {
        const result: BetterOption<typeof value> = { Error: null };
        return result;
    }

    const value = await Promise.resolve(payload).catch(() => null);
    const result: BetterOption<typeof value> = {
        Some: value,
        // No need for Error anymore thanks to union strike! 🤯
    };

    return result;
}

// Get things rolling!
(async () => {
    // Change to null or undefined to see Option in action!
    const payload = null;

    const { Some, Error } = await doStuffWhichCanGoKaboom(payload);

    if (Error) {
        console.log("--------------------------------");
        console.log("Throwy", Error);
        return;
    }

    console.log(Some);
})();

// Ah, much better!
(async () => {
    // Change to null or undefined to see Option in action!
    const payload = undefined;

    const { Some, Error } = await potentiallyGoKaboomMoreBeautifully(payload);

    if (Error === null) {
        console.log("--------------------------------");
        console.log("Daty", Error, "🤌");
        return;
    }

    console.log(Some);
})();

// Ah, the best!
(async () => {
    // Change to null or undefined to see Option in action!
    const payload = undefined;

    const { Some, Error } = await doStuffWithEvenBetterKaboom(payload);

    if (Error === null) {
        console.log("--------------------------------");
        console.log("Besty", Error, "✨");
        return;
    }

    console.log(Some);
})();
