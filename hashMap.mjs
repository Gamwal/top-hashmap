import LinkedList from "./linkedList.mjs";
export default class HashMap {
  #loadFactor;
  #bucketLength;
  #buckets;
  #size;

  constructor(bucketLength = 16, loadFactor = 0.75) {
    this.#loadFactor = loadFactor;
    this.#bucketLength = bucketLength;
    this.#buckets = Array(this.#bucketLength).fill(null);
    this.#size = 0;
  }

  get buckets() {
    return this.#buckets;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode =
        (primeNumber * hashCode + key.charCodeAt(i)) % this.#bucketLength;
    }
    return hashCode;
  }

  set(key, value) {
    if (this.checkFull()) {
      this.reloadHashMap();
    }
    const index = this.hash(key);
    const bucket = this.#buckets[index];
    if (bucket) {
      bucket.append({ key, value });
    } else {
      const bucket = new LinkedList();
      bucket.append({ key, value });
      this.#buckets[index] = bucket;
      this.#size += 1;
    }
    return;
  }

  get(key) {
    if (this.has(key)) {
      const bucket = this.#buckets[this.hash(key)];
      let current = bucket.root;
      while (current) {
        if (current.value.key === key) {
          return current.value.value;
        }
        current = current.nextNode;
      }
    }
    return null;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.#buckets[index];
    if (index < 0 || index >= this.#bucketLength) {
      throw new Error("Trying to access index out of bound");
    } else if (bucket !== null) {
      let current = bucket.root;
      while (current) {
        if (current.value.key === key) {
          return true;
        }
        current = current.nextNode;
      }
    }
    return false;
  }

  remove(key) {
    if (this.has(key)) {
      const index = this.hash(key);
      let bucket = this.#buckets[index];
      let itemIndex = 0;
      let current = bucket.root;

      while (current) {
        if (current.value.key === key) {
          break;
        }
        itemIndex++;
        current = current.nextNode;
      }
      bucket.removeAt(itemIndex);
      if (bucket.root === null) {
        this.#buckets[index] = null;
        this.#size -= 1;
      }
      return true;
    }
    return false;
  }

  length() {
    return this.#size;
  }

  clear() {
    this.#buckets = Array(this.#bucketLength).fill(null);
    this.#size = 0;
  }

  keys() {
    const keysArray = [];
    for (let b of this.#buckets) {
      if (b !== null) {
        keysArray.push(b.key);
      }
    }
    return keysArray;
  }

  values() {
    const valuesArray = [];
    for (let b of this.#buckets) {
      if (b !== null) {
        valuesArray.push(b.value);
      }
    }
    return valuesArray;
  }

  entries() {
    const entriesArray = [];
    for (let b of this.#buckets) {
      if (b !== null) {
        entriesArray.push([b.key, b.value]);
      }
    }
    return entriesArray;
  }

  checkFull() {
    if (this.#size / this.#bucketLength > this.#loadFactor) return true;
    return false;
  }

  reloadHashMap() {
    this.#bucketLength *= 2;
    this.#size = 0;

    const newMap = Array(this.#bucketLength).fill(null);
    for (let b of this.#buckets) {
      if (b !== null) {
        const index = this.hash(b.key);
        if (newMap[index] !== null) {
          newMap[index].value = b.value;
        }
        newMap[index] = { key: b.key, value: b.value };
        this.#size += 1;
      }
    }
    this.#buckets = newMap;
  }
}
