//Teaspoon to tablespoon
var teaToTable = function(teaspoon) {
	return teaspoon / 3;
};

var teaspoon = parseInt(prompt("Number of teaspoons: "));

var result = teaToTable(teaspoon).toFixed(2);

alert(teaspoon + " teaspoons equals " + result + " tablespoons.");

//Tablespoon to teaspoon
var tableToTea = function(tablespoon) {
	return tablespoon * 3;
};

var tablespoon = parseInt(prompt("Number of tablespoons: "));

var result = tableToTea(tablespoon).toFixed(2);

alert(tablespoon + " tablespoons equals " + result + " teaspoons.");

// Tablespoon to cup

var tableToCup = function(tablespoon) {
	return tablespoon / 16;
};

var tablespoon = parseInt(prompt("Number of tablespoons: "));

var result = tableToCup(tablespoon).toFixed(2);

alert(tablespoon + " tablespoons equals " + result + " cups.");

// Cup to tablespoons

var cupToTable = function(cups) {
	return cups * 16;
};

var cups = parseInt(prompt("Number of cups: "));

var result = cupToTable(cups).toFixed(2);

alert(cups + " cups equals " + result + " tablespoons.");
