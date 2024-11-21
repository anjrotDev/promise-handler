# promis-handler

A simple function to handle promises in a cleaner way without try-catch blocks.

## Description

`promis-handler` is a lightweight utility that simplifies promise handling in JavaScript and TypeScript. It provides a consistent way to manage asynchronous operations by returning an object containing data and error, eliminating the need for multiple try-catch blocks and improving code readability.

## Installation

Install the package using npm:

```bash
$ npm install promis-handler
```

Or with Yarn:

```bash
$ yarn add promis-handler
```

## Usage

### Importing

In TypeScript or projects supporting ES Modules:

```javascript
import { promiseHandler } from "promis-handler";
```

In JavaScript using CommonJS:

```javascript
const { promiseHandler } = require("promis-handler");
```

### Basic Example

```javascript
async function fetchData() {
  const { data, error } = await promiseHandler(someAsyncFunction());

  if (error) {
    // Handle the error
    console.error("Error:", error);
  } else {
    // Use the data
    console.log("Data:", data);
  }
}
```

### Using `errorExt`

You can add additional information to the error using the second parameter errorExt:

```typescript
async function fetchUser(userId: string) {
  const { data, error } = await promiseHandler(api.getUser(userId), { userId });

  if (error) {
    // The error now includes the userId property
    console.error("Error fetching user:", error);
  } else {
    console.log("User data:", data);
  }
}
```

### API

`promiseHandler<T, U = Error>(promise: Promise<T>, errorExt?: object): Promise<{ data: T | undefined; error: U | null }>`

### Parameters

- `promise`: The promise you want to handle.
- `errorExt` (optional): An object that extends the error in case the promise is rejected.

### Returns

A promise that resolves to an object with the properties:

- `data`: Contains the data if the promise is resolved successfully, or undefined if an error occurs.
- `error`: Contains the error if the promise is rejected, or null if there is no error.

## Benefits

- Simplifies error handling: Avoids multiple try-catch blocks and promotes cleaner code structure.
- Consistency: Provides a uniform structure for handling results and errors.
- Flexibility: Compatible with JavaScript and TypeScript, and allows extending errors with additional information.

## Compatibility

- **Node.js**: Versions that support ES2015 and above.
- **Browsers**: Modern browsers that support Promises and async/await.

## Contributing

Contributions are welcome! If you find any issues or have suggestions, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the ISC License. See the LICENSE file for details.

## Author

AnjrotDev

Enjoy it 😎🚀
