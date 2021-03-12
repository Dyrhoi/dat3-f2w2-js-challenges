let peter = { name: "Peter", age: 14, gender: "male" };
let john = { name: "John", age: 18, gender: "male" };

function addMayDriveProperty(member) {
	return { ...member, mayDrive: member.age >= 18 };
}

// Expected result: { name:'Peter', age: 14, gender: 'male', mayDrive: false }
const addJustedMember = addMayDriveProperty(peter);
console.log(addJustedMember);
console.log(peter);

const johnAdjusted = addMayDriveProperty(john);
console.log(johnAdjusted);
