type Person = {
	name: string;
	age: number;
};

const sayHappyBday = (person: Person) => {
	return `Happy B-day, ${person.name}. Congrats on turning ${person.age}`;
};

console.log(sayHappyBday({ name: 'Basia', age: 30 }));
