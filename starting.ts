// .ts - typescript extension
// .tsx - jsx typescript extension (React)

console.log(Math.round(4.2339084));

let someName: string = 'Basia';
someName = 'Barb';

const tryThis = (age: number, name: string, isFunny?: boolean) => {
	console.log(age, name, isFunny);

	return `${name} is ${age}`;
};

console.log(tryThis(2, 'Basia'));
