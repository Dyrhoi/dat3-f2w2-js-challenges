var numbers = [1, 3, 5, 10, 11];

function makeListItem(number) {
	return `<li>${number}</li>`;
}

function myMap(array, method) {
	let mappedArray = [];
	array.forEach((el) => mappedArray.push(method(el)));
	return mappedArray;
}

//let listItems = numbers.map(makeListItem); I don’t exist :-(
let listItems = myMap(numbers, makeListItem);
console.log(listItems);
