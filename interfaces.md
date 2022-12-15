# Interfaces

- used for creating reusable types
- describe the shape of the objects
- we can add methods to the interface where we specify arguments for the function and what will be returned
- one interface can inherit from another interface(s)

## Syntax

```
interface Person {
   firstName: string;
   lastName: string;
   age: number;
   nickname?: string;
   sayHi: () => string // method named sayHi which returns a string
   sayHi(): string // same as above, different syntax
}
```

## Types vs Interfaces

| Types                                           | Interfaces                                 |
| ----------------------------------------------- | ------------------------------------------ |
| once defined we cannot add property to the type | we can modify interface and add properties |
| cannot inherit another type                     | can inherit from another interface(s)      |
| doesn't have methods?                           | can have methods                           |
