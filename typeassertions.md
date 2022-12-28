## Type Assertion

-   it is used when you know better than the TS compiler what type the value is

### Usecase

-   working with DOM elements:

Scenario: - we have an input and we want to get the value of the input\

What happens when we DO NOT use type assertion - getting element by ID will be recognized as type HTMLElement which DOES NOT have the value property - we get an error "Property 'value' does not exist on type 'HTMLElement'"

Adding type assertion: - getting element by id and adding as HTMLInputElement will extend HTMLElement interface by adding Input interface elements, e.g. value - we can now access the value of the input and TS won't yell about it
