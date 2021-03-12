let members = [
	{ name: "Peter", age: 14, gender: "male" },
	{ name: "John", age: 18, gender: "male" },
	{ name: "Louise", age: 22, gender: "female" },
	{ name: "Iben", age: 13, gender: "female" },
];

function addMayDriveProperty(member) {
	return { ...member, mayDrive: member.age >= 18 };
}

function addMayDrivePropertyToAll(members) {
	return members.map(addMayDriveProperty);
}
const addJusted = addMayDrivePropertyToAll(members);
console.log(members);
console.log(addJusted);
