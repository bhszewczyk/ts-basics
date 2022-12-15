// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

type ages = Array<number>;

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings

const gameBoard: string[][] = [];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}

type Product = {
	name: string;
	price: number;
};

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

const getTotal = (productArr: Array<Product>): number => {
	return productArr.reduce((acc, curr): number => {
		return acc + curr.price;
	}, 0);
};

console.log(
	getTotal([
		{ name: 'coffee mug', price: 11.5 },
		{ name: 'coffee mug', price: 11.5 },
	])
);
