let numbers = [1, 3, 5, 10, 11];

// 1
// This will work.
function makeListItem(number) {
	return `<li>${number}</li>`;
}

let listItems = numbers.map(makeListItem).join("\n");
//console.log(listItems)

// 2
// This will work even if not es6 syntax is used.
listItems = numbers
	.map(function (number) {
		return `<li>${number}</li>`;
	})
	.join("\n");
//console.log(listItems);

// 3
// Implied return statement... wil work.
listItems = numbers.map((number) => `<li>${number}</li>`).join("\n");
//console.log(listItems);

// 4
// This wont work as there is no return statement inside {} clauses.
listItems = numbers
	.map((number) => {
		/*return*/ `<li>${number}</li>`;
	})
	.join("\n");
//console.log(listItems);
