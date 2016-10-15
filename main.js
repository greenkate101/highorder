// // var instructions = function () {
// //     console.log('implement the function and write at least two assertions that prove your solution is correct.');
// // }

// // forEach(exerciseBelow, instructions);

// // 1.1
// forEach calls a function once for each element in an array, in order.
function forEach(arr, cb) {
	// function is the keyword, forEach is the name of the function, arr & cb are parameters.
	for (var i = 0; i < arr.length; i++) {
		// create a variable to keep track of the index
		// keep looping while the index is less than the length of the array
		// increment the index by 1
		cb(arr[i]);
		// cb is passing the function through each string of the array.
	}
}

var array = ['i', 'love', 'corndogs'];

var ran = [];

forEach(array, function (val) {
	ran.push(val);
	// creating new value in the array ran with the strings from array
});

for (var i = 0; i < ran.length; i++) {
	console.assert(ran[i] === array[i]);
	// testing if the iteration of ran equals the iteration in array
}

//  // 1.2
// // map takes an array and a callback function, and creates a new array with values
// // returned from the callback function for each value in the original array
var arr2 = ['i', 'love', 'corndogs'];
var result = [];

function map (array, callback) {
	for (var i = 0; i < array.length; i++) {
		result.push(callback(array[i]));
		// pushing an empty string through the callback that is passing this function
		// through each string of the array
	}
	return result;
}

var long = map(arr2, function (value) {
	return value.length;
});

console.log(long);
for (var i = 0; i < arr2.length; i++) {
console.assert(result[i] === arr2[i].length);
}
// // the length or items in the result are the numbers of charcters that equals the letters/length of the arr..

// // 1.3
// // reduce finds a cumulative or concatenated value based on elements across the array.

function reduce(arr,cb) {
	var previous = arr[0];
	// you add previous and current together down the array
	// so you make a variable for previous and start it at 0
	arr = arr.slice(1, arr.length);
	// we are breaking down the arr so that it is able to add the previous and current
	forEach(arr, function (value) {
		previous = cb (previous, value);
	});
	return previous;
}

var arr3 = [14, 18, 6];
var looptotal = 0;

var long = reduce(arr3, function (a, b) {
	return a + b;
});

// variable long is reducing my variable arr3 
// you have to declare a function that returns the sum in order to add previous and current

for (var i = 0; i < arr3.length; i++) {
	looptotal += arr3[i];
}

console.log(looptotal);

console.assert(long === looptotal);

// // // 1.4

var arr4 = ['Charlotte', 'Gizmo', 'Chilly'];
	

var filteredArr = arr4.filter(function (value) {
	if (value[0] === 'C') {
		return true;
	} else {
		return false;
	}
});

function filter (arr, cb) {
	var result = [];
	forEach(arr, function (value) {
		if (cb(value)) {
			result.push(value);
		}
	});
	return result;
}

function startsWithC (value) {
	if (value[0] === 'C') {
		return true;
	} else {
		return false;
	}
}

var filteredArr = [];

for (var i = 0; i < arr4.length; i++) {
	if ( arr4[i][0] === 'C') {
		filteredArr.push(arr4[i]);
	}
}

console.log(filteredArr);
console.assert(filter(arr4, startsWithC).length === 2);

// // 1.5

function sum(a, b) {
	return a + b;
}

console.log(sum(8, 6));
console.assert(sum(6, 8) === 14);


// 
var products = [
    {
        name: 'Pita bread (white)',
        price: 7.5,
        category: 'food'
    },
    {
        name: 'Denim jeans',
        price: 22.95,
        category: 'apparel'
    },
    {
        name: 'Bicycle playing cards',
        price: 5,
        category: 'novelties'
    },
    {
        name: 'Red/blue plaid button-down',
        price: 23.95,
        category: 'apparel'
    },
    {
        name: 'Bic lighter',
        price: 3,
        category: 'novelties'
    },
    {
        name: 'Greek yogurt (strawberry)',
        price: 2.25,
        category: 'food'
    },
    {
        name: 'Organic eggs (dozen)',
        price: 6,
        category: 'food'
    }
];

function avgCat (cat) {

	var catItems = filter(products, function (product) {
		if (product.category === cat) {
			return true;
		} else {
			return false;
		}
	});
	// console.log(catItems);
	var catCost = catItems.map(function (product) {
		return product.price;
	});
	
	var total = catCost.reduce(function (previous, current) {
		return previous + current;
	});

	console.log(total);

	return total/catCost.length;
}


console.assert(avgCat('novelties') === 4);
console.assert(avgCat('food') === 5.25);
console.assert(avgCat('apparel') === 23.45);

function productTemplate(product) {
	var template =  '<li>' + product.name + ' - ' +  product.value + '</li>';
}

console.assert(productTemplate(products[0]) === '<li>Pita bread (white) - $7.5</li>');


function render(product) {
	var template = '<ul>' + '<li>' + product.name + ' - ' + product.value + '</li>' + '<li>' + product.name + ' - ' + product.value + '</li>' + '</ul>';
}

console.assert(render(products) === '<ul><li>Organic eggs (dozen) - $6</li><li>Denim jeans - $22.95</li></ul>');




