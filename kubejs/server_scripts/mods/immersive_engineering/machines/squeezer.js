ServerEvents.recipes(event => {

    //there's some black magic involved in MI oil plant recipes, i have no idea how to fetch them,
    //  they're dont even show up when you go thru ALL of the modern industrialization recipes


        /*
    event.remove({ type: 'immersiveengineering:squeezer' })
    function mi_squeezer(ingredients, result){


        let input_type = "item"
        let output_type = "fluid"
        if (ingredients.get("tag") != null) {
            input_type = "tag"
        }

        var inputs = {}
        inputs[input_type] = ingredients.get(input_type)
        var outputs = {}
        outputs.id = result.get(output_type)
        outputs.amount = result.get("amount")

        var recipe = {}
        recipe.type = "immersiveengineering:squeezer"
        recipe.energy = 3200
        recipe.input = inputs
        recipe.fluid = outputs
        event.custom(recipe)

    }

    event.forEachRecipe({ mod: "modern_industrialization"}, r => {
        try{
            let ingredients = r.json.get("item_inputs")
            let outputs = r.json.get("fluid_outputs")
            mi_squeezer(ingredients,outputs)
        }
        catch(error)
        {
        }

    })
    */

})