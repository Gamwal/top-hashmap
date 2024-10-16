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
      if (this.has(key)) {
        let current = bucket.root;
        while (current) {
          if (current.value.key === key) {
            current.value.value = value;
            return;
          }
        }
      }
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
        let current = b.root;
        while (current) {
          keysArray.push(current.value.key);
          current = current.nextNode;
        }
      }
    }
    return keysArray;
  }

  values() {
    const valuesArray = [];
    for (let b of this.#buckets) {
      if (b !== null) {
        let current = b.root;
        while (current) {
          valuesArray.push(current.value.value);
          current = current.nextNode;
        }
      }
    }
    return valuesArray;
  }

  entries() {
    const entriesArray = [];
    for (let b of this.#buckets) {
      if (b !== null) {
        let current = b.root;
        while (current) {
          entriesArray.push([current.value.key, current.value.value]);
          current = current.nextNode;
        }
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

    const newMap = new HashMap(this.#bucketLength);

    for (let b of this.#buckets) {
      if (b !== null) {
        let current = b.root;
        while (current) {
          newMap.set(current.value.key, current.value.value);
          current = current.nextNode;
        }
      }
    }
    this.#buckets = newMap.#buckets;
    this.#size = newMap.#size;
  }
}
