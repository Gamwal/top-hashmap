# HashMap Implementation

This project provides a JavaScript implementation of a HashMap (or dictionary), utilizing a Linked List for collision handling (chaining). The HashMap allows storing key-value pairs with dynamic resizing based on a load factor. This update introduces improvements such as collision handling using linked lists and dynamic resizing when the load factor threshold is exceeded.

## Features

- **Chaining with Linked Lists**: In the case of hash collisions (where multiple keys map to the same bucket), the keys are stored in a linked list to avoid overwriting. Each bucket contains a linked list, and new key-value pairs are appended when a collision occurs.
- **Automatic Resizing**: The hash map dynamically doubles its bucket size once the load factor is exceeded. During resizing, elements are rehashed and redistributed across the new bucket array to maintain efficiency.
- **Load Factor**: A customizable load factor (default `0.75`) determines when the hash map should resize. This ensures optimal performance by balancing memory usage and search times.
- **Hash Function**: A simple but effective hash function using a prime number multiplier (31) for string keys. The hash function converts keys into an index within the bucket array.

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
