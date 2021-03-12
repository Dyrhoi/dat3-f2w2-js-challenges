var members = [
	{ name: "Peter", age: 14, gender: "male" },
	{ name: "John", age: 18, gender: "male" },
	{ name: "Louise", age: 22, gender: "female" },
	{ name: "Iben", age: 13, gender: "female" },
];

// Eh...
function removeGenderOnAll(members) {
	return members.map(({ gender, ...member }) => member);
}

const addJusted = removeGenderOnAll(members);
console.log(members);
console.log(addJusted);
