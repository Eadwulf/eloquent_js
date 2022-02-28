const hummus = function(factor) {
	const ingredient = function(amount, unit, name) {
		let ingredientsAmount = amount * factor;
		if (ingredientsAmount > 1) {
			unit += 's';
		}
		console.log(`${ingredientsAmount} ${unit} ${name}`);
	};
	ingredient(1, "can", "chickpeas");
	ingredient(0.25, "cup", "tahini");
	ingredient(0.25, "cup", "lemon juice");
	ingredient(1, "clove", "garlic");
	ingredient(2, "tablespoon", "olive oil");
	ingredient(0.5, "teaspoon", "cumin");
};

/*
- Lexical Scoping
The set of bindings visible inside a block is determined by the
place of that block in the program text. Each local scope can also
see all the local scopes that contain it, and all scopes can see
the global scope. This approach to binding visibility is called
lexical scoping.
*/
