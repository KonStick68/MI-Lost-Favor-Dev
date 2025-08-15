//priority 10
ServerEvents.recipes(event => {

    var wrench = "modern_industrialization:wrench"
    var mainBronzeMaterial = "kubejs:bronze_machine_bit"
    var mainPipeType = "moderndynamics:fluid_pipe"

    let craft_removal_list = ["modern_industrialization:wrench"]
    //JSON
    /*
    
    event.custom({
        "type": "ytech:workspace_crafting",
        "key": {
            "T": {
            "tag": "ytech:grass_twines"
            },
            "W": {
            "tag": "minecraft:cherry_logs"
            }
        },
        "pattern": {
            "bottom": [
            "   ",
            "W W",
            "   "
            ],
            "middle": [
            "   ",
            "W W",
            "   "
            ],
            "top": [
            "   ",
            "WTW",
            "   "
            ]
        },
        "result": {
            "count": 1,
            "id": "minecraft:diamond_block"
        },
        "tool": {
            "tag": "minecraft:axes"
        }
    })
    */

    function outline(mainMat,sidesMat,output){
        event.recipes.ytech.workspace_crafting(
            output,  // crafting result
            wrench,   
            ['XXX','XYX','XXX'],  // bottom layer pattern like for shaped crafting (['XXX','XXX','XXX'])
            ['XYX','Y Y','XYX'],  // middle layer pattern like for shaped crafting (['XXX','XXX','XXX'])
            ['XXX','XYX','XXX'],     // top layer pattern like for shaped crafting (['XXX','XXX','XXX'])
            {X:mainMat, Y:sidesMat}     // ingredient mapping e.g.: {X: 'minecraft:andesite'}
        );
        craft_removal_list.push(output)
    }

    function furnace_type(mainMat,bottomMat,centralMat,chimney,output){
        event.recipes.ytech.workspace_crafting(
            output,  // crafting result
            wrench,    // crafting tool
            ['BBB','BBB','BBB'],  // bottom layer pattern like for shaped crafting (['XXX','XXX','XXX'])
            ['XXX','XYX','X X'],  // middle layer pattern like for shaped crafting (['XXX','XXX','XXX'])
            ['XXX','XCX','XXX'],     // top layer pattern like for shaped crafting (['XXX','XXX','XXX'])
            {X:mainMat, Y:centralMat,B:bottomMat,C:chimney}     // ingredient mapping e.g.: {X: 'minecraft:andesite'}
        );
        craft_removal_list.push(output)
    }

    function machine_open_top(mainMat,sidesMat,centralMat,pipes,additions,front,output){
        event.recipes.ytech.workspace_crafting(
            output,  // crafting result
            wrench,    // crafting tool
            ['XPX','PPP','XPX'],  // bottom layer pattern like for shaped crafting (['XXX','XXX','XXX'])
            ['XSX','SRS','XFX'],  // middle layer pattern like for shaped crafting (['XXX','XXX','XXX'])
            ['XGX','G G','XGX'],     // top layer pattern like for shaped crafting (['XXX','XXX','XXX'])
            {X:mainMat, P:pipes, R:centralMat, G:additions, S:sidesMat, F:front}     // ingredient mapping e.g.: {X: 'minecraft:andesite'}
        );
        craft_removal_list.push(output)
    }

    function machine_covered_top(mainMat,sidesMat,centralMat,pipes,additions,front,top,output){
        event.recipes.ytech.workspace_crafting(
            output,  // crafting result
            wrench,    // crafting tool
            ['XPX','PPP','XPX'],  // bottom layer pattern like for shaped crafting (['XXX','XXX','XXX'])
            ['XSX','SRS','XFX'],  // middle layer pattern like for shaped crafting (['XXX','XXX','XXX'])
            ['XGX','GTG','XGX'],     // top layer pattern like for shaped crafting (['XXX','XXX','XXX'])
            {X:mainMat, P:pipes, R:centralMat, G:additions, S:sidesMat, F:front,T:top}     // ingredient mapping e.g.: {X: 'minecraft:andesite'}
        );
        craft_removal_list.push(output)
    }

    function hatch(mainMat,top,bottom,pipes,output){
        event.recipes.ytech.workspace_crafting(
            output,  // crafting result
            wrench,   
            ['XXX','XBX','XXX'],  // bottom layer pattern like for shaped crafting (['XXX','XXX','XXX'])
            ['XPX','PPP','XPX'],  // middle layer pattern like for shaped crafting (['XXX','XXX','XXX'])
            ['XXX','XTX','XXX'],     // top layer pattern like for shaped crafting (['XXX','XXX','XXX'])
            {X:mainMat, T:top, B:bottom, P:pipes}     // ingredient mapping e.g.: {X: 'minecraft:andesite'}
        );
        craft_removal_list.push(output)
    }

    //MI bronze machines

    //tank
    outline(mainBronzeMaterial,"kubejs:bronze_glass","modern_industrialization:bronze_tank")
    //barrel
    outline(mainBronzeMaterial,"#c:paper","modern_industrialization:bronze_barrel")
   
    //furnace
    furnace_type(mainBronzeMaterial,"modern_industrialization:fire_clay_bricks","ytech:primitive_smelter","ytech:reinforced_brick_chimney","modern_industrialization:bronze_mi_furnace")
    //steam_blast_furnace
    furnace_type("modern_industrialization:fire_clay_bricks","modern_industrialization:fire_clay_bricks","minecraft:blast_furnace","modern_industrialization:fire_clay_bricks","modern_industrialization:steam_blast_furnace")
    //coke_oven
    furnace_type("minecraft:bricks","minecraft:bricks","minecraft:furnace","minecraft:bricks","modern_industrialization:coke_oven")
    
    //macerator
    machine_open_top(mainBronzeMaterial,mainBronzeMaterial,"#c:dusts/diamond",mainPipeType,"#c:gears/copper","kubejs:bronze_glass","modern_industrialization:bronze_macerator")
    //compressor
    machine_open_top(mainBronzeMaterial,mainBronzeMaterial,"modern_industrialization:forge_hammer",mainPipeType,"#c:rods/copper","kubejs:bronze_glass","modern_industrialization:bronze_compressor")
    //cutting_machine
    machine_open_top(mainBronzeMaterial,mainBronzeMaterial,"modern_industrialization:copper_blade",mainPipeType,"#c:gears/copper","kubejs:bronze_glass","modern_industrialization:bronze_cutting_machine")
    //composter
    machine_open_top(mainBronzeMaterial,mainBronzeMaterial,"minecraft:composter",mainPipeType,"#c:rods/copper","kubejs:bronze_glass","extended_industrialization:bronze_composter")

    //pump
    machine_covered_top(mainBronzeMaterial,"modern_industrialization:copper_rotor","kubejs:small_copper_fluid_container",mainPipeType,"#c:gears/copper","modern_industrialization:copper_rotor",mainPipeType,"modern_industrialization:bronze_water_pump")
    //mixer
    machine_covered_top(mainBronzeMaterial,"kubejs:bronze_glass","modern_industrialization:copper_rotor",mainPipeType,"#c:gears/copper","kubejs:bronze_glass","kubejs:bronze_glass","modern_industrialization:bronze_mixer")
    //solar_boiler
    machine_covered_top(mainBronzeMaterial,mainBronzeMaterial,"minecraft:furnace","modern_industrialization:fire_clay_bricks","#c:plates/silver",mainBronzeMaterial,"kubejs:bronze_glass","extended_industrialization:bronze_solar_boiler")
    //bronze_boilder
    machine_covered_top(mainBronzeMaterial,mainBronzeMaterial,"minecraft:furnace","modern_industrialization:fire_clay_bricks",mainBronzeMaterial,mainBronzeMaterial,"modern_industrialization:bronze_tank","modern_industrialization:bronze_boiler")
    //waste_collector
    machine_covered_top(mainBronzeMaterial,mainBronzeMaterial,"minecraft:composter",mainPipeType,"#c:rods/copper",mainBronzeMaterial,"ytech:copper_mesh","extended_industrialization:bronze_waste_collector")
    //bending_machine
    machine_covered_top(mainBronzeMaterial,mainBronzeMaterial,"#c:gears/copper",mainPipeType,"#c:rods/copper",mainBronzeMaterial,"#c:gears/copper","extended_industrialization:bronze_bending_machine")
    //large_steam_furnace
    machine_covered_top("modern_industrialization:bronze_curved_plate","modern_industrialization:bronze_machine_casing_pipe","modern_industrialization:bronze_mi_furnace","modern_industrialization:fire_clay_bricks","modern_industrialization:bronze_machine_casing_pipe","modern_industrialization:bronze_machine_casing_pipe","modern_industrialization:bronze_machine_casing_pipe","extended_industrialization:large_steam_furnace")
    //large_steam_macerator
    machine_covered_top("modern_industrialization:bronze_curved_plate","modern_industrialization:bronze_machine_casing_pipe","modern_industrialization:bronze_macerator","modern_industrialization:bronze_plated_bricks","modern_industrialization:bronze_machine_casing_pipe","modern_industrialization:bronze_machine_casing_pipe","modern_industrialization:bronze_machine_casing_pipe","extended_industrialization:large_steam_macerator")

    //item_output
    hatch(mainBronzeMaterial,"moderndynamics:item_pipe","minecraft:hopper","moderndynamics:item_pipe","modern_industrialization:bronze_item_output_hatch")
    //item_input
    hatch(mainBronzeMaterial,"minecraft:hopper","moderndynamics:item_pipe","moderndynamics:item_pipe","modern_industrialization:bronze_item_input_hatch")
    //fluid_output
    hatch(mainBronzeMaterial,mainPipeType,"minecraft:hopper",mainPipeType,"modern_industrialization:bronze_fluid_output_hatch")
    //fluid_input
    hatch(mainBronzeMaterial,"minecraft:hopper",mainPipeType,mainPipeType,"modern_industrialization:bronze_fluid_input_hatch")

    //IE stuff
    event.recipes.ytech.workspace_crafting(
        'immersiveengineering:craftingtable',  // crafting result
        wrench,   
        ['S S','   ','S S'],  // bottom layer pattern like for shaped crafting (['XXX','XXX','XXX'])
        ['S S',' B ','S S'],  // middle layer pattern like for shaped crafting (['XXX','XXX','XXX'])
        ['WWW','WTW','WWW'],     // top layer pattern like for shaped crafting (['XXX','XXX','XXX'])
        {S:'immersiveengineering:stick_treated', T:'craftingstation:crafting_station_slab', W:'#immersiveengineering:treated_wood_slab',B:"immersiveengineering:wooden_barrel"}
    );
    craft_removal_list.push('immersiveengineering:craftingtable')

    event.forEachRecipe({output:craft_removal_list}, r => {
        event.remove({ type: 'minecraft:crafting_shaped', output: r.getOriginalRecipeResult()})
        event.remove({ type: 'minecraft:crafting_shapeless', output: r.getOriginalRecipeResult()})
    })
})