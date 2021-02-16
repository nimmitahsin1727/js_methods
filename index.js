const companies = [
	{ name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
	{ name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
	{ name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
	{ name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
	{ name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
	{ name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
	{ name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
	{ name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
	{ name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// ? sort
// console.log(
// 	ages.sort((a, b) => {
// 		if (a > b) {
// 			return 1;
// 		} else if (a < b) {
// 			return -1;
// 		} else {
// 			return 0;
// 		}
// 	})
// );
// console.log(ages.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0)));

// console.log(
// 	companies.sort((a, b) => {
// 		if (a.start > b.start) {
// 			return 1;
// 		} else if (a.start < b.start) {
// 			return -1;
// 		} else {
// 			return 0;
// 		}
// 	})
// );
// console.log(companies.sort((a, b) => (a.start > b.start ? 1 : a.start < b.start ? -1 : 0)));

// ? indexOf
// console.log('indexOf', ages.indexOf(15));
// const checkEligibility = (age) => {
// 	if (ages.indexOf(age) === -1) {
// 		console.log('Not Found!');
// 	} else {
// 		console.log('Success');
// 	}
// };
// checkEligibility(54);

// ? reverse = return array
// console.log(ages.reverse());

// const a = 'arif';
// console.log(a.split('').reverse().join(''));

// ? Split = return array
// const a = 'arif';
// const result = a.split('');
// console.log(result);

// ? Join = return string
// const a = ['a', 'r', 'i', 'f'];
// const result = a.join('_');
// console.log(result);

// const a = [
// 	{ name: 'Arif', age: 25 },
// 	{ name: 'Nimmi', age: 24 },
// 	{ name: 'Nidhi', age: 24 },
// 	{ name: 'Nusaiba', age: 24 },
// ];
// const names = a.map((v) => v.name);
// const result = names.join('_');
// console.log(result);

// ? For loop
// for (let i = 0; i < companies.length; i++) {
// 	if (i == 4) {
// 		console.log('i', i);
// 		console.log('companies[i]', companies[i]);
// 	}
// }

// ? forEach = only loop, no return values
// function printCategory(company) {
// 	console.log(company.category);
// }

// companies.forEach((company, i, array) => console.log(i, company.name));
// companies.forEach(({ name }, i, array) => console.log(i, name));

// ? map = loop and return values
// console.log(
// 	'map',
// 	companies.map((company, i, array) => {
// 		console.log(i, company.name);
// 		return company.end - company.start;
// 	})
// );
// console.log(
// 	'map',
// 	companies.map((company, i, array) => company.end - company.start)
// );

// ? some
// const result = ages.some((age, i, arr) => {
// 	console.log(`index : ${i}, value: ${arr[i]}`);
// 	if (age > 50) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// console.log(result);

// ? every
// const result = ages.every((age, i, arr) => {
// 	console.log(`index : ${i}, value: ${arr[i]}`);
// 	if (age > 40) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// console.log(result);

// ? reduce
// sum of all age
// let sum = 0;
// ages.forEach((age) => (sum += age));
// console.log(sum);

// let sum = ages.reduce((prev, curr) => prev + curr, 0);
// console.log(sum);

// ? filter = loop, apply condition and return values
// ? Get 21 and older
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
// 	if (ages[i] >= 21) {
// 		canDrink.push(ages[i]);
// 	}
// }
// console.log('canDrink', canDrink);

// console.log(
// 	'filter',
// 	ages.filter((age, i, arr) => {
// 		if (age >= 21) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	})
// );

// console.log(
// 	'filter',
// 	ages.filter((age, i, arr) => age >= 21)
// );

// ? push, pop, shift, unshift
// console.log('candrink', canDrink);
// console.log('pop', canDrink.pop());
// console.log('candrink', canDrink);
// console.log('shift', canDrink.shift());
// console.log('candrink', canDrink);
// console.log('unshift', canDrink.unshift(100));
// console.log('candrink', canDrink);

// ? Combine Methods
// const combined = ages
// 	.map((age) => age * 2)
// 	.filter((age) => age >= 40)
// 	.sort((a, b) => b - a)
// 	.reduce((a, b) => a + b, 0);
// console.log(combined);
