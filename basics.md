# TS Types

- string
- boolean
- number
- bigInt
- symbol
- Array&lt;number&gt;
- any
- object
- alias
- intersection

## Type inference

When you declare a variable and assign a value to it the compiler will detect the type and enforce that type moving forward, even though you did not annotate the type on your own.\
If you declare a variable but do not assign any value and any type the type will be automatically set to any, BUT this is a bad practice - when you declare a variable assign a type to it!

## Functions

### Types returned by function

- TS types
- void - function doesn't return anything (executing the funtion will return undefined)
- never - implicitly said that the function does not return anything, it also never stops executing
  - throwing an error

### Objects as function parameters - excess properties

- if you call a function and provide inline object TS allows you to provide ONLY defined key-values
- if you call a function and as parameter you pass a variable TS allows the variable to have additional key-value pairs
