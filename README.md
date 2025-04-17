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
This example demonstrates how to transform the value directly using the `t.transform()` function and chain actions
using `t.pipe()`. The `t.pipe()` function allows you to run multiple transformations sequentially.

```ts
import * as t from 'transformbot';

// Converts the input to a string, removes spaces, converts to uppercase, removes non-alphanumeric characters, and converts to null if the result is empty.
// Returns ABCDEFGH12356789A
const vehicleVIN = t.transform(t.pipe(t.string(), t.toUpperCase(), t.toAlphanumeric(), t.toNull()), "abcdefgh12356789--a");
```

## Example — Integration with Form Libraries

<!-- prettier-ignore -->
This example shows how to integrate transformations directly into form libraries.
The `<Input>` component uses a transformation schema via the `parse` prop (the name may vary depending on the library)
defined as `(input: TInput) => TOutput`.

```ts
import * as t from 'transformbot';

<Input name="email" parse={t.pipe(t.string(), t.trim(), t.toNull())} type="email" />
```

## Example — Reusable Transformation Schemas

<!-- prettier-ignore -->
This example demonstrates how to define reusable transformation schemas.
Each schema (`EmailSchema`, `VehicleVINSchema`, `UsernameSchema`) uses the `t.pipe()` function to chain together
a series of transformation steps (like trimming whitespace, converting to uppercase, or ensuring the value is a string).
`AgeSchema` simply ensures the input is treated as a number using `t.number()`.
These schemas can then be applied to transform input data.

```ts
import * as t from 'transformbot';

const AgeSchema = t.number();
const EmailSchema = t.pipe(t.string(), t.trim(), t.toNull());
const VehicleVINSchema = t.pipe(t.string(), t.toUpperCase(), t.toAlphanumeric(), t.toNull());
const UsernameSchema = t.pipe(t.string(), t.trim());
```

[license-image]: https://img.shields.io/badge/License-MIT-brightgreen.svg
[license-url]: https://opensource.org/licenses/MIT
[npm-image]: https://img.shields.io/npm/v/transformbot.svg
[npm-url]: https://npmjs.org/package/transformbot
[downloads-image]: https://img.shields.io/npm/dm/transformbot.svg
