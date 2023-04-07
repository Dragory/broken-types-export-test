import { exampleFn } from "broken-types-export";
import { otherExampleFn } from "broken-types-export/other";

// @ts-expect-error Should be called with two arguments
exampleFn();

// @ts-expect-error Should be called with two arguments
exampleFn(5);

// No TS error
exampleFn("str", 10);

// @ts-expect-error Should be called with an argument
otherExampleFn();

// @ts-expect-error Passed object has an incorrect type
otherExampleFn({
    foo: "test",
});

// No TS error
otherExampleFn({
    foo: "test",
    bar: 10,
});
