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
        "modern_industrialization:vanilla_recipes/easy_chest",
        "modern_industrialization:vanilla_recipes/easy_chest",
    ]

    removing_by_recipe_id.forEach(id => {
        event.remove({ id: id })
    });

    //WIP, crutch solution

    event.remove({ output: /ae2:*/, type: 'modern_industrialization:packer' })
    event.remove({ output: /ae2:*/, type: 'modern_industrialization:assembler' })
    // event.remove({ output: /ae2:*/, type: 'modern_industrialization:electrolyzer' })



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
        { output: 'modern_industrialization:steel_block' },
        'modern_industrialization:steel_block',
        'immersiveengineering:storage_steel'
    )

    event.replaceInput(
        { input: 'modern_industrialization:steel_block' },
        'modern_industrialization:steel_block',
        'immersiveengineering:storage_steel'
    )


    event.replaceInput(
        { output: 'modern_industrialization:analog_circuit' },
        'modern_industrialization:analog_circuit_board',
        'immersiveengineering:component_electronic'
    )

    const craftWithFluidPipes = [
        'extended_industrialization:bronze_bending_machine',
        'extended_industrialization:bronze_composter',
        'extended_industrialization:bronze_waste_collector',
        'extended_industrialization:electric_canning_machine',
        'extended_industrialization:electric_composter',
        'extended_industrialization:machine_chainer_relay',
        'extended_industrialization:mv_solar_panel',
        'extended_industrialization:steel_alloy_smelter',
        'extended_industrialization:steel_brewery',
        'extended_industrialization:steel_canning_machine',
        'extended_industrialization:steel_honey_extractor',
        'modern_industrialization:steel_upgrade',
        'extended_industrialization:hv_solar_panel', 
        'extended_industrialization:lv_solar_panel', 
        'modern_industrialization:pump', 
        'modern_industrialization:advanced_pump', 
        'modern_industrialization:bronze_compressor', 
        'modern_industrialization:bronze_cutting_machine', 
        'modern_industrialization:bronze_macerator', 
        'modern_industrialization:bronze_mixer', 
        'modern_industrialization:bronze_water_pump', 
        'modern_industrialization:electric_water_pump', 
        'modern_industrialization:electric_mixer', 
        'modern_industrialization:distillery', 
        'modern_industrialization:hv_steam_turbine', 
        'modern_industrialization:lv_steam_turbine', 
        'modern_industrialization:mv_steam_turbine', 
        'modern_industrialization:steel_unpacker', 
        'modern_industrialization:steel_packer', 
        'modern_industrialization:oil_drilling_rig', 
        'modern_industrialization:steel_wiremill', 
        'modern_industrialization:aluminum_drill', 
        'modern_industrialization:bronze_drill', 
        'modern_industrialization:copper_drill', 
        'modern_industrialization:stainless_steel_drill',
    ]

    craftWithFluidPipes.forEach(item => {
        event.replaceInput(
            { output: item },
            '#modern_industrialization:fluid_pipes',
            'moderndynamics:fluid_pipe'
        )
    });

    const craftWithItemPipes = [
        'modern_industrialization:steam_quarry', 
        'modern_industrialization:steel_packer', 
        'modern_industrialization:steel_unpacker', 
        'modern_industrialization:bronze_drill', 
        'modern_industrialization:copper_drill', 
        'modern_industrialization:gold_drill', 
        'modern_industrialization:stainless_steel_drill', 
        'modern_industrialization:steel_drill', 
        'modern_industrialization:titanium_drill', 
        'extended_industrialization:machine_chainer_relay'
    ]

    craftWithItemPipes.forEach(item => {
        event.replaceInput(
            { output: item },
            '#modern_industrialization:item_pipes',
            'moderndynamics:item_pipe'
        )
    });

    const pipeTypes = ["fluid", "item"]
    pipeTypes.forEach(type => {
        global.dyeColors.forEach(color => {
            event.replaceInput(
                { output: `modern_industrialization:${color.name}_${type}_pipe` },
                'modern_industrialization:bronze_curved_plate',
                'modern_industrialization:aluminum_curved_plate'
            )
        });

        event.replaceInput(
            { output: `modern_industrialization:${type}_pipe` },
            'modern_industrialization:bronze_curved_plate',
            'modern_industrialization:aluminum_curved_plate'
        )
    });





})