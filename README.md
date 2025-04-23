## Key Features

**✅ Transforms to Primitive Types**\
Converts input values to `boolean`, `number`, and `string`.

**🧼 Rich Set of Transformation Actions**\
Includes cleaning, formatting, normalization, trimming, type conversion, and more.

**🛡️ Type-Safe with Static Type Inference**\
Fully leverages TypeScript for safe and predictable transformations.

**🪶 Small Package Size**\
Lightweight and optimized for performance — perfect for frontend applications.

## Example — Direct usage

<!-- prettier-ignore -->
This example demonstrates how to transform the value directly using the `tb.transform()` function and chain actions
using `tb.pipe()`. The `tb.pipe()` function allows you to run multiple transformations sequentially.

```ts
import * as tb from 'transformbot';

// Converts the input to a string, removes spaces, converts to uppercase, removes non-alphanumeric characters, and converts to null if the result is empty.
// Returns ABCDEFGH12356789A
const vehicleVIN = tb.transform(tb.pipe(tb.string(), tb.toUpperCase(), tb.toAlphanumeric(), tb.toNull()), "abcdefgh12356789--a");
```

## Example — Integration with Form Libraries

<!-- prettier-ignore -->
This example shows how to integrate transformations directly into form libraries.
The `<Input>` component uses a transformation schema via the `parse` prop (the name may vary depending on the library)
defined as `(input: TInput) => TOutput`.

```ts
import * as tb from 'transformbot';

<Input name="email" parse={tb.pipe(tb.string(), tb.trim(), tb.toNull())} type="email" />
```

## Example — Reusable Transformation Schemas

<!-- prettier-ignore -->
This example demonstrates how to define reusable transformation schemas.
Each schema (`EmailSchema`, `VehicleVINSchema`, `UsernameSchema`) uses the `tb.pipe()` function to chain together
a series of transformation steps (like trimming whitespace, converting to uppercase, or ensuring the value is a string).
`AgeSchema` simply ensures the input is treated as a number using `tb.number()`.
These schemas can then be applied to transform input data.

```ts
import * as tb from 'transformbot';

const AgeSchema = tb.number();
const EmailSchema = tb.pipe(tb.string(), tb.trim(), tb.stripTags(), tb.stripNewlines(), tb.stripSpaces(), tb.stripDiacritics(), tb.toNull());
const VehicleVINSchema = tb.pipe(tb.string(), tb.toAlphanumeric(), tb.toUpperCase(), tb.toNull());
const UsernameSchema = tb.pipe(tb.string(), tb.trim());
```

## Credits

I'm grateful to the [valibot.dev](https://valibot.dev/) library's creators for their outstanding work. It's been a source of inspiration.

[license-image]: https://img.shields.io/badge/License-MIT-brightgreen.svg
[license-url]: https://opensource.org/licenses/MIT
[npm-image]: https://img.shields.io/npm/v/transformbotb.svg
[npm-url]: https://npmjs.org/package/transformbot
[downloads-image]: https://img.shields.io/npm/dm/transformbotb.svg
