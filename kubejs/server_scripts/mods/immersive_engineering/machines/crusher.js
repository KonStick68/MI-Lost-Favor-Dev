ServerEvents.recipes(event => {

    event.remove({ type: 'immersiveengineering:crusher' })

    function crusher_mi_standart(ingredients, result){

        let input_type = "item"
        let output_type = "item"
        if (ingredients.get("tag") != null) {
            input_type = "tag"
        }
        if (result.get(0).get("tag") != null) {
            output_type = "tag"
        }

        var inputs = {}
        inputs[input_type] = ingredients.get(input_type)
        var outputs = {}
        var basep = {}
        basep[output_type] = result.get(0).get(output_type)
        outputs.basePredicate = basep
        outputs.count = result.get(0).get("amount")

        var recipe = {}
        recipe.type = "immersiveengineering:crusher"
        recipe.energy = 3200
        recipe.input = inputs
        recipe.result = outputs

        try{
            result.get(1)
            var sec = [{}]
            var chance_outputs = {}
            sec[0].chance = result.get(1).get("probability")
            chance_outputs[output_type] = result.get(1).get(output_type)
            sec[0].output = chance_outputs
            recipe.secondaries = sec
        }
        catch(error){}

        event.custom(recipe)

    }

    event.forEachRecipe({ type: 'modern_industrialization:macerator', output: '#c:dusts'}, r => {
        try{
            let ingredients = r.json.get("item_inputs").get(0)
            let outputs = r.json.get("item_outputs")
            crusher_mi_standart(ingredients,outputs)
        }
        catch(error){}

    })
})