type Pet = {
	name: string;
	age: number;
	breed: string;
};

type Cat = {
	numberOfLives: number;
};

type DomesticCat = Pet & Cat;

const ginger: DomesticCat = {
	name: 'Ginger',
	age: 3,
	breed: 'Ragdoll',
	numberOfLives: 9,
};

console.log(ginger);
