ServerEvents.tags('item', event => {
    var remove = [
        //item outputs that will not be converted

    ]

    remove.forEach(output => {
        event.add('kubejs:nocompat', output)
    })
})

ServerEvents.recipes(event => {
    //macerator to crusher
    event.remove({ type: 'immersiveengineering:crusher' })

    function crusher_mi(ingredients, result, miEnergy){

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
        recipe.energy = miEnergy
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

    event.forEachRecipe({ type: 'modern_industrialization:macerator', not : {output: "#kubejs:nocompat"}}, r => {
        try{
            let ingredients = r.json.get("item_inputs").get(0)
            let outputs = r.json.get("item_outputs")
            let energy = r.json.get("duration") * r.json.get("eu")
            crusher_mi(ingredients, outputs, energy)
        }
        catch(error){}

    })


    //press
    function press_mi(ingredients, result, mold, miEnergy){
        let input_type = "item"
        let output_type = "item"
        if (ingredients.get("tag") != null) {
            input_type = "tag"
        }
        if (result.get("tag") != null) {
            output_type = "tag"
        }

        var inputs = {}
        var base_predicate_input = {}
        base_predicate_input[input_type] = ingredients.get(input_type)
        inputs.basePredicate = base_predicate_input
        inputs.count = ingredients.get("amount")
        var outputs = {}
        var base_predicate_output = {}
        base_predicate_output[output_type] = result.get(output_type)
        outputs.basePredicate = base_predicate_output
        outputs.count = result.get("amount")

        var recipe = {}
        recipe.type = "immersiveengineering:metal_press"
        recipe.energy = miEnergy
        recipe.mold = mold
        recipe.input = inputs
        recipe.result = outputs

        event.custom(recipe)

    }

    //rods
    event.forEachRecipe({ type: 'modern_industrialization:cutting_machine', not : {output: "#kubejs:nocompat"}, output:"#c:rods"}, r => {
        try{
            let ingredients = r.json.get("item_inputs").get(0)
            let outputs = r.json.get("item_outputs").get(0)
            let energy = r.json.get("duration") * r.json.get("eu")
            press_mi(ingredients,outputs,'immersiveengineering:mold_rod',energy)
        }
        catch(error){}
    })
    //plates
    event.forEachRecipe({ type: 'modern_industrialization:compressor', not : {output: "#kubejs:nocompat"}, output:"#c:plates"}, r => {
        try{
            let ingredients = r.json.get("item_inputs").get(0)
            let outputs = r.json.get("item_outputs").get(0)
            let energy = r.json.get("duration") * r.json.get("eu")
            press_mi(ingredients,outputs,'immersiveengineering:mold_plate',energy)
        }
        catch(error){}
    })
    //wires
    event.forEachRecipe({ type: 'modern_industrialization:wiremill', not : {output: "#kubejs:nocompat"}, output:"#c:wires"}, r => {
        try{
            let ingredients = r.json.get("item_inputs").get(0)
            let outputs = r.json.get("item_outputs").get(0)
            let energy = r.json.get("duration") * r.json.get("eu")
            press_mi(ingredients,outputs,'immersiveengineering:mold_wire',energy)
        }
        catch(error){}
    })
    //unpacker
    event.forEachRecipe({ type: 'modern_industrialization:unpacker', not : {output: "#kubejs:nocompat"}, output:["#c:ingots","#c:nuggets","#c:tiny_dusts"]}, r => {
        try{
            let ingredients = r.json.get("item_inputs").get(0)
            let outputs = r.json.get("item_outputs").get(0)
            let energy = r.json.get("duration") * r.json.get("eu")
            press_mi(ingredients,outputs,'immersiveengineering:mold_unpacking',energy)
        }
        catch(error){}
    })
    //packer(blocks)
    event.forEachRecipe({ type: 'modern_industrialization:packer', not : {output: "#kubejs:nocompat"}}, r => {
        try{
            let ingredients = r.json.get("item_inputs").get(0)
            let outputs = r.json.get("item_outputs").get(0)
            let energy = r.json.get("duration") * r.json.get("eu")
            if (ingredients.get("amount") == 9){
                press_mi(ingredients,outputs,'immersiveengineering:mold_packing_9',energy)
            }
            else if (ingredients.get("amount") == 4){
                try{
                    r.json.get("item_inputs").get(1)
                }
                catch(error){
                press_mi(ingredients,outputs,'immersiveengineering:mold_packing_4',energy)
                }
            }
        }
        catch(error){}
    })    
})