ServerEvents.recipes(event => {
    const removing_by_recipe_id = [
        "extendedae:cutter/engineering_processor",
        "ae2:inscriber/engineering_processor_print",
    ]
    removing_by_recipe_id.forEach(id => {
        event.remove({ id: id })
    })

    event.custom({
        "type": "extendedae:circuit_cutter",
        "input": {
            "ingredient": {
                "item": "modern_industrialization:aluminum_block"
            }
        },
        "output": {
            "count": 9,
            "id": "ae2:printed_engineering_processor"
        }
    })

    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "middle": {
                "item": "modern_industrialization:aluminum_ingot"
            },
            "top": {
                "item": "ae2:engineering_processor_press"
            }
        },
        "mode": "inscribe",
        "result": {
            "count": 1,
            "id": "ae2:printed_engineering_processor"
        }
    })

    event.replaceInput(
        { output: "ae2:printed_engineering_processor" },
        "minecraft:diamond",
        "modern_industrialization:aluminum_ingot"
    )

    const ingotToPlateAE2Replace = ["iron", "gold", ]
    ingotToPlateAE2Replace.forEach(element => {
        event.replaceInput(
        { mod: "ae2" },
        `minecraft:${element}_ingot`,
        `modern_industrialization:${element}_plate`
    )
    });
})