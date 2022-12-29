# Type narrowing

-   used for checking and excluding/inluding only specific types

## Primitive values

-   typeof guard `(typeof variable === 'string')`
-   truthiness guards - checking if the value is truthy or falsy `(!variable)`
-   equity narrowing - comparing types to each other `(x === y)`

## Non-primitive values

-   in operator (for objects) - chec if a certain property exists in an object
    -   if we know that in one object there is a property and in another does not exist this is the usecase
-   instanceof (for classes) - checks if the thing we check is an instance of another
-   type predicates - allows us to write a custom function which can help us narrow the type of a value
    -   has special return type called a type predicate - syntax parameterName is TypeName
    ```
    // we have two classes - Cat and Dog and we need to distinguish them
    const isCat(pet: Cat | Dog): pet is Cat {
        // check for the property which exists only for the Cat type
        return (pet as Cat).numLives !== undefined
    }
    ```
-   descriminated unions - add a property which will common accross multiple types, but add label which will be literal type, e.g.

    ```
    interface Circle {
        label: 'circle';
        radius: number;
    }

    interface Square {
        label: 'square';
        sideLenght: number
    }
    ```
