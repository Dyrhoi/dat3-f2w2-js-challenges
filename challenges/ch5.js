let name = { name: "Peter", age: 14, gender: "male" };

function printObjectDetails(obj) {
	const count = Object.entries(obj).length; //get the number of properties
	console.log(`This object has ${count} properties`);
	console.log("Keys and Values for the object are: ");
	console.log(
		Object.entries(obj)
			.map((entry) => `${entry[0]} : ${entry[1]}`)
			.join("\n")
	);
}
printObjectDetails(name);
