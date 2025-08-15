ServerEvents.recipes(event => {
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

    event.forEachRecipe({ id: /modern_industrialization:.*to_plant_oil/}, r => {
        try{
            console.log(r);
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