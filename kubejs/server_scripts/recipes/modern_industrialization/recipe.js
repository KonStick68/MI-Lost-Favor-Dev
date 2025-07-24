ServerEvents.recipes(event => {
    event.remove({
        output: [
            'modern_industrialization:netherite_hammer',
            'modern_industrialization:steel_hammer',
            'modern_industrialization:diamond_hammer',
            'modern_industrialization:iron_hammer',
        ]
    })

    const removing_by_recipe_id = [
        /modern_industrialization:materials\/.*\/craft\/ring/,
        "modern_industrialization:materials/fire_clay_dust",
        "modern_industrialization:materials/bronze_dust",
        "modern_industrialization:materials/blast_furnace/bauxite_to_aluminum_ingot",
    ]

    removing_by_recipe_id.forEach(id => {
        event.remove({ id: id })
    });


    event.custom({
        "type": "toxony:mortar_pestle",
        "ingredients": [
            {
                "item": "clay_ball"
            },
            {
                "item": "clay_ball"
            },
            {
                "item": "modern_industrialization:brick_dust"
            },
            {
                "item": "modern_industrialization:brick_dust"
            }
        ],
        "result": {
            "count": 3,
            "id": "modern_industrialization:fire_clay_dust"
        }
    })


    event.replaceOutput(
    { output:'modern_industrialization:steel_block'},
    'modern_industrialization:steel_block',
    'immersiveengineering:storage_steel'
    )

    event.replaceInput(
    { input:'modern_industrialization:steel_block'},
    'modern_industrialization:steel_block',
    'immersiveengineering:storage_steel'
    )


    event.replaceInput(
    { output:'modern_industrialization:analog_circuit'},
    'modern_industrialization:analog_circuit_board',
    'immersiveengineering:component_electronic'
    )

})