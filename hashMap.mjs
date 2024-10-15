export default class HashMap {
  #loadFactor;
  #bucketLength;
  #buckets;
  #size;

  constructor(bucketLength = 16, loadFactor = 0.75) {
    this.#loadFactor = loadFactor;
    this.#bucketLength = bucketLength;
    this.#buckets = [];
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
    const index = this.hash(key);
    if (this.has(key)) {
      this.#buckets[index].value = value;
    } else {
      this.#buckets[index] = { key, value };
    }
    this.#size += 1;
    return;
  }

  get(key) {
    if (this.has(key)) {
      return this.#buckets[this.hash(key)];
    }
    return null;
  }

  has(key) {
    const index = this.hash(key);
    if (index < 0 || index >= this.#bucketLength) {
      throw new Error("Trying to access index out of bound");
    } else if (this.#buckets[index] !== undefined) {
      return true;
    }
    return false;
  }

  remove(key) {
    const index = this.hash(key);
    if (this.has(key)) {
      this.#buckets[index] = undefined;
      this.#size -= 1;
      return true;
    }
    return false;
  }

  length() {
    return this.#size;
  }

  checkFull() {
    if (this.#size / this.#bucketLength > this.#loadFactor) return true;
    return false;
  }
}
