const lucky: unknown = 7;

function isNumber(num: unknown): num is number {
    if (Boolean(Number.isNaN(num))) {
        return true;
    }
    return false;
}

// Right now the compiler would complain - good!
// 42 + lucky

if (isNumber(lucky)) {
    // Now its happy!
    42 + lucky;
}

const obj = {
    name: "obj",
    home: "heap",
};

function isInObj<T extends object>(
    key: string | symbol | number,
    item: T,
): key is keyof T {
    return key in item;
}

// Imagine you need to write function to go over the keys
function mapOverKeys<T>(
    item: T,
    filter: string,
    // Liar!
): Partial<T> | undefined {
    // here control flow analysis works just fine
    if (typeof item !== "object" || item === null) return;
    const filteredResult: Partial<T> = {};

    Object.keys(item).forEach((key) => {
        if (key !== filter) {
            // compiler complains because TS does not support type inference
            // here for the particular keys of the object, but instead of
            // telling you they send you out on the quest to find out that they
            // leave the responsibility of fixing flawed designs to you the developer!
            // filteredResult[key] = item[key];
            if (isInObj(key, item)) {
                // Now the compiler is aware of the type of the key
                filteredResult[key] = item[key];
            }
        }
    });

    return filteredResult;
}

// I hate this.
const filteredObject = mapOverKeys(obj, "name");

console.log(filteredObject);
// output: filteredObject: { home: 'heap' }
