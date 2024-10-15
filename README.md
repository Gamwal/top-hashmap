# HashMap Implementation

This project provides a custom implementation of a HashMap data structure in JavaScript. It includes features such as dynamic resizing, handling collisions, and managing key-value pairs. The implementation is optimized to handle data efficiently with a customizable bucket length and load factor.

## Features

- **Custom Hashing Function**: Generates a hash based on a string key using a prime multiplier technique.
- **Dynamic Resizing**: Automatically resizes the internal bucket array when the load factor exceeds a set threshold.
- **Efficient Storage**: Uses key-value pairs stored in an array structure, ensuring fast access, insertion, and deletion.
- **Collisions Handling**: Properly manages keys with the same hash code.
- **Additional Methods**: Includes methods like `get()`, `set()`, `remove()`, `keys()`, `values()`, and `entries()` for effective data handling.

## Methods

- `set(key, value)`: Adds a key-value pair to the hash map.
- `get(key)`: Retrieves the value associated with a key.
- `remove(key)`: Deletes a key-value pair.
- `length()`: Returns the total number of key-value pairs.
- `keys()`: Returns an array of all keys.
- `values()`: Returns an array of all values.
- `entries()`: Returns an array of key-value pairs.
- `clear()`: Clears the hash map.
- `has(key)`: Checks if the hash map contains a specific key.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Gamwal/top-hashmap.git
   ```
2. Navigate to the project directory:

   ```bash
   cd top-hashmap
   ```

3. Include the `HashMap` class in your JavaScript file:
   ```js
   import HashMap from "./hashmap.mjs";
   ```

## Usage

```js
import HashMap from "./hashmap.mjs";

const map = new HashMap();
map.set("dog", "animal");
map.set("car", "vehicle");
console.log(map.get("dog")); // { key: 'dog', value: 'animal' }
console.log(map.keys()); // ['dog', 'car']
console.log(map.values()); // ['animal', 'vehicle']
```

## License

This project is licensed under the terms of **Free for Everyone**. You are free to use, modify, and distribute this software in any way you like.

## Repository

Check out the project repository: [GitHub Repository](https://github.com/Gamwal/top-hashmap.git)
