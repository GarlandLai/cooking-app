//Teaspoon to tablespoon
var teaToTable = function(teaspoon) {
	return teaspoon / 3;
};

var teaspoon = parseInt(prompt("Number of teaspoons: "));

var result = teaToTable(teaspoon);

alert(teaspoon + " teaspoons equals " + result + " tablespoons.");

//Tablespoon to teaspoon
var tableToTea = function(tablespoon) {
	return tablespoon * 3;
};

var tablespoon = parseInt(prompt("Number of tablespoons: "));

var result = tableToTea(tablespoon);

alert(tablespoon + " tablespoons equals " + result + " teaspoons.");
