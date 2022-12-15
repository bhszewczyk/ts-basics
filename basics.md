# TS Types

## Primitive Types

- string
- boolean
- number
- null
- undefined
- any (don't use it)
- void - returned by a function
- never - returned by a function
- unknown

## Object Types

- object
  - type alias
    - instead of writing out object types in an annotation, we can declare them separaretly in a type alias, which is simply the desired shape of the object
- array
  - `let names: string[]`
  - `let names: Array<string>`
- union
  - allows to specify different types
  - `(number | string)[]` - array can have both number and string type
  - `number[] | string[]` - array can have only numbers or only strings
- tuple
  - e.g. `[number, string]`
  - arrays of fixed length and ordered with specific types
  - after creation array methods are allowed (so we can push or pop - this is a limitation)
- enum
  - allows to define set od named constans
  - if we do not assign any value TS will assign a numeric value starting from 0
  - syntax: `enum {PENDING, SHIPPED, DELIVERED, RETURNED}`

# Type inference

When you declare a variable and assign a value to it the compiler will detect the type and enforce that type moving forward, even though you did not annotate the type on your own.\
If you declare a variable but do not assign any value and any type the type will be automatically set to any, BUT this is a bad practice - when you declare a variable assign a type to it!

# Functions

## Types returned by function

- TS types
- void - function doesn't return anything (executing the funtion will return undefined)
- never - implicitly said that the function does not return anything, it also never stops executing
  - throwing an error

## Objects as function parameters - excess properties

- if you call a function and provide inline object TS allows you to provide ONLY defined key-values
- if you call a function and as parameter you pass a variable TS allows the variable to have additional key-value pairs
