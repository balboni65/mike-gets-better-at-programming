// #MARK: Understanding the Problem

class KeyValuePair {
  constructor(public key: number, public value: string) {}
}

let pair = new KeyValuePair(1, "Apple");
// What if we want to declare a string value for the key?
//  - We will get a compilation error
//  - We can fix this with "any" keyword but we lose type safety
//  - "pair.key" shows no options if we do that

// #MARK: Generic Classes

// "T" is short for template
class KeyValuePair2<T> {
  constructor(public key: T, public value: string) {}
}
// let pair2 = new KeyValuePair2<number>() | (Key is now a number property)
// let pair2 = new KeyValuePair2<string>() | (Key is now a string property)
let pair2 = new KeyValuePair2<string>("test", "value");
// pair.key | shows all the options for a string

// If we want to make "value" generic, we add a second parameter in the class definition

class KeyValuePair3<T, U> {
  constructor(public key: T, public value: U) {}
}
let pair3 = new KeyValuePair3<string, string>("test", "value"); // Supply 2 generics
// We also don't need to supply the type
let pair4 = new KeyValuePair3("test", "value"); // Valid

// #MARK: Generic Functions

function wrapInArray(value: number) {
  return [value];
}

// let numbers = wrapInArray("1"); | Won't work

function wrapInArray2<T>(value: T) {
  return [value];
}
let numbers1 = wrapInArray2(1); // Returns number[]
let numbers2 = wrapInArray2("1"); // Returns string[]

// Method

class ArrayUtils {
  // Remove "function" keyword
  wrapInArray2<T>(value: T) {
    return [value];
  }
}

let utils = new ArrayUtils();
let numbers3 = utils.wrapInArray2(1);
// Can also make the "wrapInArray2" static so we can access it outside

class ArrayUtils2 {
  // static
  static wrapInArray2<T>(value: T) {
    return [value];
  }
}
let numbers4 = ArrayUtils2.wrapInArray2(2);

// #MARK: Generic Interfaces

// Mimicking calling an api endpoint
// http://mywebsite.com/users
// http://mywebsite.com/products

interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  if (url) console.log("valid url");
  return {
    data: null,
    error: null,
  };
}

interface User {
  username: string;
}

interface Product {
  title: string;
}

// "fetch()" | Cannot leave it as just that, it cannot infer the type of a generic
// fetch(url: string): Result<User> | Read as "Result of User"
let resultUser = fetch<User>("url");
// resultUser.data?. | See "username" property as its of type "User"

let resultProduct = fetch<Product>("url");
// resultProduct.data?. | See "title" property as its of type "Product"

// #MARK: Generic Constraints

function echo4<T>(value: T): T {
  return value;
}

echo4("1"); // Can give it any value, object, anything

// We can define specific allowed types using "extends"
function echo2<T extends number | string>(value: T): T {
  return value;
}
// echo2(true) | Throws error

// #MARK: Extending Generic Classes

interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }
}

let store = new Store<Product>();
// store.objects = []; | Cannot do

// Now to extend the class

// You have to add the generic after "store"
// However, you also have to add it after "CompressibleStore"
//  - This is called "Passing on the generic type parameter"
class CompressibleStore<T> extends Store<T> {
  compress() {}
}
new CompressibleStore<Product>();

// Restrict the Generic Type Parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    // Have to add "T extends { name: string } " to constrain the value, as obj.name doesn't have that property
    return this._objects.find((obj) => obj.name === name);
  }
}

// We don't add a generic after "ProductStore" b/c we want this to be more specific
// Fix/terminating the genric type parameter
class ProductStore extends Store<Product> {
  filterByCategory() {}
}

// When extending a generic
// 1. Pass on the generic "T" to be used
// 2. Constrain the generic "T" to specific types
// 3. Fix the generic "T" to a specific type

// #MARK: The keyof Operator

interface Product2 {
  name: string;
  price: number;
}

class Store2<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  // We don't know the value type so we do "unknwon" instead of "any"
  // find(property: string, value: unknown): T | undefined {
  // have to change the "property: string"
  // If T is Product,
  // keyofT => 'name' | 'price'
  find(property: keyof T, value: unknown): T | undefined {
    // ERROR: No index signature with a parameter of type 'string' was found on type 'unknown'.

    // "keyof" means what we pass can only be a key of "T"
    return this._objects.find((obj) => obj[property] === value);
  }
}

let store3 = new Store2<Product2>();
store3.add({ name: "a", price: 1 });
store3.find("price", 1);
// store3.find("nonExistingProperty", 1); // crashes as it can't find that property | Also throws error after change
// this all means we can only pass "name" or "price" when calling the method.

// #MARK: Type Mapping

interface Broduct {
  name: string;
  price: number;
}

// create a new type based on an existing type

type ReadOnlyBroduct = {
  // Index signature
  // keyof
  // instead of manually adding properties, we are going to use index signature to dynamically add them.
  readonly [K in keyof Broduct]: Broduct[K];
  // For every property in "Broduct" | name, price,
  // Go to that property, and set the type, to the properties type | string, number
  // We can then add "readonly" and make them all read only in one go
  // This is called Type Mapping
};

let broduct: ReadOnlyBroduct = {
  name: "a",
  price: 1,
};

// we cannot change its values
// broduct.name='a' | Error

// We can make this more generic
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
  // Key is a chosen keyword like a for loop
  // Generic will be of whatever type is passed
};

// New syntax
let broduct2: ReadOnly<Broduct> = {
  name: "a",
  price: 1,
};

// Optional
type Optional<T> = {
  readonly [K in keyof T]?: T[K]; // Added "?"
};

// Nullable
type Nullable<T> = {
  readonly [K in keyof T]: T[K] | null; // Added " | null "
};

// These "Utility Types" exist in TypeScript

// Partial<Type> | Makes all properties optional
// Required<Type> | Makes all properties mandatory
// Readonly<Type> | Makes all properties read only etc...
