## Key Features

**✅ Transforms to Primitive Types**\
Converts input values to `array`, `boolean`, `number`, and `string`, and also supports conversion to JavaScript `Date`
objects.

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

const ArrayNumber = tb.pipe(tb.array(tb.number()), tb.toNull());
const AgeSchema = tb.number();
const AlphanumericUppercaseSchema = tb.pipe(tb.string(), tb.toUpperCase(), tb.toAlphanumeric(), tb.toEmpty());
const BooleanSchema = tb.pipe(tb.boolean(), tb.toNull());
const DateSchema = tb.pipe(tb.date(), tb.toNull());
const DateStringSchema = tb.pipe(tb.date(), tb.toIsoDate(), tb.toNull());
const EmailSchema = tb.pipe(tb.string(), tb.trim(), tb.stripTags(), tb.stripNewlines(), tb.stripSpaces(), tb.stripDiacritics(), tb.toNull());
const FloatSchema = tb.pipe(tb.number(), tb.toFloat());
const TimeSchema = tb.pipe(tb.time(), tb.toNull());
const TimeStringSchema = tb.pipe(tb.time(), tb.toIsoTime(), tb.toNull());
const VehicleVINSchema = tb.pipe(tb.string(), tb.toAlphanumeric(), tb.toUpperCase(), tb.toNull());
const UsernameSchema = tb.pipe(tb.string(), tb.trim());
```

## Transformations Overview

| Availaible conversions                             | Availaible transformation actions                                                                         | Availaible output normalization actions                  |
|----------------------------------------------------|-----------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| `array()` - Converts an input to an Array          |                                                                                                           | `toDefault()` - Converts a null value to a default value |
|                                                    |                                                                                                           | `toNull()` - Converts empty array to null                |
|                                                    |                                                                                                           | `toUndefined()` - Converts empty array to undefined      |
| `boolean()` - Converts an input to a boolean value |                                                                                                           | `toDefault()` - Converts a null value to a default value |
|                                                    |                                                                                                           | `toUndefined()` - Converts a null value to undefined     |
| `date()` - Converts an input to a Date object      | `custom()` - Applies a custom transformation function                                                     | `toDefault()` - Converts a null value to a default value |
|                                                    | `toIsoDate()` - Formats a Date object to an ISO date string                                               | `toNull()` - Converts invalid value to null              |
|                                                    | `toIsoTime()` - Formats a time value to an ISO string                                                     | `toUndefined()` - Converts invalid value to undefined    |
|                                                    | `toLocaleDateString()` - Formats a Date object or time value to a localized date                          |                                                          |
|                                                    | `toLocaleTimeString()` - Formats a Date object or time value to a localized time                          |                                                          |
|                                                    | `toMaxValue()` - Limits a date value to a maximum date value                                              |                                                          |
|                                                    | `toMinValue()` - Limits a date value to a minimum date value                                              |                                                          |
| `number()` - Converts an input to a number         | `custom()` - Applies a custom transformation function                                                     | `toDefault()` - Converts a null value to a default value |
|                                                    | `toExponential()` - Converts a number to exponential notation                                             | `toNull()` - Converts 0/0.0 value to null                |
|                                                    | `toFixed()` - Formats a number using fixed-point notation                                                 | `toUndefined()` - Converts 0/0.0/null value to undefined |
|                                                    | `toFloat()` - Ensures a number is treated as a float                                                      |                                                          |
|                                                    | `toInteger()` - Converts a number to an integer                                                           |                                                          |
|                                                    | `toLocaleNumberString()` - Formats a number value to a localized number string                            |                                                          |
|                                                    | `toMaxValue()` - Limits a number value to a given maximum value                                           |                                                          |
|                                                    | `toMinValue()` - Limits a number value to a given minimum value                                           |                                                          |
|                                                    | `toPrecision()` - Returns a string representing a number to specified precision                           |                                                          |
| `string()` - Converts an input to a string         | `custom()` - Applies a custom transformation function                                                     | `toDefault()` - Converts a null value to a default value |
|                                                    | `decodeBase64()` - Decodes a Base64-encoded string                                                        | `toNull()` - Converts empty value to null                |
|                                                    | `decodeHTML()` - Decodes HTML entities in string                                                          | `toUndefined()` - Converts empty/null value to undefined |
|                                                    | `decodeURI()` - Decodes a URI-encoded string                                                              |                                                          |
|                                                    | `encodeBase64()` - Encodes a string as Base64                                                             |                                                          |
|                                                    | `encodeHTML()` - Encodes HTML entities in a string                                                        |                                                          |
|                                                    | `encodeURI()` - Encodes a string as a URI component                                                       |                                                          |
|                                                    | `mask()` - Masks parts of a string with a character                                                       |                                                          |
|                                                    | `normalize()` - Normalizes a Unicode string                                                               |                                                          |
|                                                    | `padEnd()` - Pads a string at the end                                                                     |                                                          |
|                                                    | `padStart()` - Pads a string at the start                                                                 |                                                          |
|                                                    | `repeat()` - Repeats a string a specified number of times                                                 |                                                          |
|                                                    | `replace()` - Replaces a substring with another                                                           |                                                          |
|                                                    | `sanitizeText()` - Removes potentially dangerous or unwanted text content                                 |                                                          |
|                                                    | `slice()` - Extracts a section of a string and returns it as a new string                                 |                                                          |
|                                                    | `stripDiacritics()` - Removes the diacritical marks                                                       |                                                          |
|                                                    | `stripMultiSpaces()` - Removes multiple consecutive spaces                                                |                                                          |
|                                                    | `stripNewlines()` - Removes all the newline characters                                                    |                                                          |
|                                                    | `stripSpaces()` - Removes all the spaces                                                                  |                                                          |
|                                                    | `stripTags()` - Removes the HTML/XML tags                                                                 |                                                          |
|                                                    | `substring()` - Returns the part of a string between two indices                                          |                                                          |
|                                                    | `toAlpha()` - Removes all the non-alphabetic characters                                                   |                                                          |
|                                                    | `toAlphanumeric()` - Removes all the non-alphanumeric characters                                          |                                                          |
|                                                    | `toCamelCase()` - Converts a string to a camelCase format                                                 |                                                          |
|                                                    | `toCapitalCase()` - Converts the string so that each word starts with uppercase                           |                                                          |
|                                                    | `toDigits()` - Extracts only the digits from a string                                                     |                                                          |
|                                                    | `toDotCase()` - Converts the string to a dot.case format                                                  |                                                          |
|                                                    | `toKebabCase()` - Converts the string to a kebab-case format                                              |                                                          |
|                                                    | `toLowerCase()` - Converts a string to lowercase                                                          |                                                          |
|                                                    | `toPascalCase()` - Converts the string to a PascalCase format                                             |                                                          |
|                                                    | `toSnakeCase()` - Converts the string to a snake_case format                                              |                                                          |
|                                                    | `toUpperCase()` - Converts a string to uppercase                                                          |                                                          |
|                                                    | `toWellFormed()` - Replaces all lone surrogates in a string with the Unicode replacement character U+FFFD |                                                          |
|                                                    | `trim()` - Removes whitespace from both ends                                                              |                                                          |
|                                                    | `trimEnd()` - Removes whitespace from the end                                                             |                                                          |
|                                                    | `trimStart()` - Removes whitespace from the start                                                         |                                                          |
|                                                    | `truncate()` - Shortens a string to a specified maximum length with an optional suffix                    |                                                          |

These actions can be chained and combined as needed using `pipe()` function to create complex transformation schemas for
converting and processing input data.

## Methods Overview

- `pipe()` - Combines multiple transformations into a single pipeline
- `transform()` - Applies a transformation to an input value

## Credits

I'm grateful to the [valibot.dev](https://valibot.dev/) library's creators for their outstanding work. It's been a
source of inspiration.

[license-image]: https://img.shields.io/badge/License-MIT-brightgreen.svg

[license-url]: https://opensource.org/licenses/MIT

[npm-image]: https://img.shields.io/npm/v/transformbotb.svg

[npm-url]: https://npmjs.org/package/transformbot

[downloads-image]: https://img.shields.io/npm/dm/transformbotb.svg
