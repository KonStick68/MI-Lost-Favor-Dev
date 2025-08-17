//priority 10
ServerEvents.recipes(event => {

    var wrench = "modern_industrialization:wrench"
    let craft_removal_list = ["modern_industrialization:wrench"]

    //#region Array functions

    Array.prototype.layerAll = function(letter) {
        this.fill(letter.repeat(3))
        return this
    }

    Array.prototype.layerRow = function(letter, row) {
        this.splice(row, 1, letter.repeat(3))
        return this
    }

    Array.prototype.layerOne = function(letter, row, index) {
        this.splice(row, 1, this[row].substring(0, index) + letter + this[row].substring(index + 1))
        return this
    }

    Array.prototype.layerCorners = function(letter) {
        this.splice(0, 1, letter + this[0].substring(1, 2) + letter)
        this.splice(2, 1, letter + this[2].substring(1, 2) + letter)
        return this
    }

    Array.prototype.layerSides = function(letter) {
        this.splice(0, 1, this[0].substring(0, 1) + letter + this[0].substring(2, 3))
        this.splice(1, 1, letter + this[1].substring(1, 2) + letter)
        this.splice(2, 1, this[2].substring(0, 1) + letter + this[2].substring(2, 3))
        return this
    }

    Array.prototype.layerCentre = function(letter) {
        this.layerOne(letter,1,1)
        return this
    }

    Array.prototype.layerFront = function(letter) {
        this.layerOne(letter,2,1)
        return this
    }

    Array.prototype.layerRight = function(letter) {
        this.layerOne(letter,1,0)
        return this
    }

    Array.prototype.layerLeft = function(letter) {
        this.layerOne(letter,1,2)
        return this
    }

    Array.prototype.layerBack = function(letter) {
        this.layerOne(letter,0,1)
        return this
    }

    Array.prototype.layerPlus = function(letter) {
        this.layerOne(letter,0,1)
        this.layerRow(letter,1)
        this.layerOne(letter,2,1)
        return this
    }

    //#endregion
    
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

    function workspace_recipe(grid, materials, output, materialset, tool){
        event.recipes.ytech.workspace_crafting(
            output,  // crafting result
            tool || wrench,   
            grid[2],  // bottom layer pattern like for shaped crafting (['XXX','XXX','XXX'])
            grid[1],  // middle layer pattern like for shaped crafting (['XXX','XXX','XXX'])
            grid[0],     // top layer pattern like for shaped crafting (['XXX','XXX','XXX'])
            Object.assign({}, materials, materialset) // ingredient mapping e.g.: {X: 'minecraft:andesite'}
        );
        craft_removal_list.push(output)
    }

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

    //#region MI bronze machines
    var mainBronzeMaterial = "kubejs:bronze_machine_bit"
    var mainBronzePipeType = "moderndynamics:fluid_pipe"

    //tank
    outline(mainBronzeMaterial,"kubejs:bronze_glass","modern_industrialization:bronze_tank")
    //barrel
    outline(mainBronzeMaterial,"labels:label","modern_industrialization:bronze_barrel")
   
    //furnace
    furnace_type(mainBronzeMaterial,"modern_industrialization:fire_clay_bricks","ytech:primitive_smelter","ytech:reinforced_brick_chimney","modern_industrialization:bronze_mi_furnace")
    //steam_blast_furnace
    furnace_type("modern_industrialization:fire_clay_bricks","modern_industrialization:fire_clay_bricks","minecraft:blast_furnace","modern_industrialization:fire_clay_bricks","modern_industrialization:steam_blast_furnace")
    //coke_oven
    furnace_type("minecraft:bricks","minecraft:bricks","minecraft:furnace","minecraft:bricks","modern_industrialization:coke_oven")
    
    //macerator
    machine_open_top(mainBronzeMaterial,mainBronzeMaterial,"#c:dusts/diamond",mainBronzePipeType,"#c:gears/copper","kubejs:bronze_glass","modern_industrialization:bronze_macerator")
    //compressor
    machine_open_top(mainBronzeMaterial,mainBronzeMaterial,"modern_industrialization:forge_hammer",mainBronzePipeType,"#c:rods/copper","kubejs:bronze_glass","modern_industrialization:bronze_compressor")
    //cutting_machine
    machine_open_top(mainBronzeMaterial,mainBronzeMaterial,"modern_industrialization:copper_blade",mainBronzePipeType,"#c:gears/copper","kubejs:bronze_glass","modern_industrialization:bronze_cutting_machine")
    //composter
    machine_open_top(mainBronzeMaterial,mainBronzeMaterial,"minecraft:composter",mainBronzePipeType,"#c:rods/copper","kubejs:bronze_glass","extended_industrialization:bronze_composter")

    //pump
    machine_covered_top(mainBronzeMaterial,"modern_industrialization:copper_rotor","kubejs:small_copper_fluid_container",mainBronzePipeType,"#c:gears/copper","modern_industrialization:copper_rotor",mainBronzePipeType,"modern_industrialization:bronze_water_pump")
    //mixer
    machine_covered_top(mainBronzeMaterial,"kubejs:bronze_glass","modern_industrialization:copper_rotor",mainBronzePipeType,"#c:gears/copper","kubejs:bronze_glass","kubejs:bronze_glass","modern_industrialization:bronze_mixer")
    //solar_boiler
    machine_covered_top(mainBronzeMaterial,mainBronzeMaterial,"minecraft:furnace","modern_industrialization:fire_clay_bricks","#c:plates/silver",mainBronzeMaterial,"kubejs:bronze_glass","extended_industrialization:bronze_solar_boiler")
    //bronze_boilder
    machine_covered_top(mainBronzeMaterial,mainBronzeMaterial,"minecraft:furnace","modern_industrialization:fire_clay_bricks",mainBronzeMaterial,mainBronzeMaterial,"modern_industrialization:bronze_tank","modern_industrialization:bronze_boiler")
    //waste_collector
    machine_covered_top(mainBronzeMaterial,mainBronzeMaterial,"minecraft:composter",mainBronzePipeType,"#c:rods/copper",mainBronzeMaterial,"ytech:copper_mesh","extended_industrialization:bronze_waste_collector")
    //bending_machine
    machine_covered_top(mainBronzeMaterial,mainBronzeMaterial,"#c:gears/copper",mainBronzePipeType,"#c:rods/copper",mainBronzeMaterial,"#c:gears/copper","extended_industrialization:bronze_bending_machine")
    //large_steam_furnace
    machine_covered_top("modern_industrialization:bronze_curved_plate","modern_industrialization:bronze_machine_casing_pipe","modern_industrialization:bronze_mi_furnace","modern_industrialization:fire_clay_bricks","modern_industrialization:bronze_machine_casing_pipe","modern_industrialization:bronze_machine_casing_pipe","modern_industrialization:bronze_machine_casing_pipe","extended_industrialization:large_steam_furnace")
    //large_steam_macerator
    machine_covered_top("modern_industrialization:bronze_curved_plate","modern_industrialization:bronze_machine_casing_pipe","modern_industrialization:bronze_macerator","modern_industrialization:bronze_plated_bricks","modern_industrialization:bronze_machine_casing_pipe","modern_industrialization:bronze_machine_casing_pipe","modern_industrialization:bronze_machine_casing_pipe","extended_industrialization:large_steam_macerator")

    //item_output
    hatch(mainBronzeMaterial,"moderndynamics:item_pipe","minecraft:hopper","moderndynamics:item_pipe","modern_industrialization:bronze_item_output_hatch")
    //item_input
    hatch(mainBronzeMaterial,"minecraft:hopper","moderndynamics:item_pipe","moderndynamics:item_pipe","modern_industrialization:bronze_item_input_hatch")
    //fluid_output
    hatch(mainBronzeMaterial,mainBronzePipeType,"minecraft:hopper",mainBronzePipeType,"modern_industrialization:bronze_fluid_output_hatch")
    //fluid_input
    hatch(mainBronzeMaterial,"minecraft:hopper",mainBronzePipeType,mainBronzePipeType,"modern_industrialization:bronze_fluid_input_hatch")
    //#endregion
   
    //#region MI basic machines
    var basicMaterialset = {M:'kubejs:basic_machine_bit', B:'modern_industrialization:portable_storage_unit', C:"modern_industrialization:tin_cable", G:'kubejs:tempered_glass'}
    var mainBasicMaterial = "kubejs:basic_machine_bit"
    //tank
    outline(mainBasicMaterial,"kubejs:tempered_glass","modern_industrialization:aluminum_tank")
    //barrel
    outline(mainBasicMaterial,"labels:label","modern_industrialization:aluminum_barrel")

    //polarizer
    workspace_recipe([
            [' W ','I I',' W '].layerCorners("M").layerCentre("c"),
            ['   ','   ','   '].layerAll("M").layerFront("G").layerCentre(" "),
            ['   ','   ','   '].layerCorners("M").layerPlus("C").layerCentre("B")
        ],
        {I:'modern_industrialization:inductor',W:"modern_industrialization:tin_wire",c:"modern_industrialization:analog_circuit"},
        'modern_industrialization:polarizer', basicMaterialset
    )
    //assembler
    workspace_recipe([
            [' W ','I I',' W '].layerCentre("c").layerCorners("A"),                    
            ['   ','   ','   '].layerAll("M").layerLeft("D").layerFront("G").layerCentre(" "),  
            ['   ','   ','   '].layerCorners("M").layerPlus("C").layerCentre("B")  
        ],
        {D:'kubejs:cd_reader', A:'modern_industrialization:robot_arm',I:"kubejs:rangefinder", W:"modern_industrialization:conveyor",c:"modern_industrialization:analog_circuit"},
        'modern_industrialization:assembler', basicMaterialset
    )
    //wiremill
    workspace_recipe([
            [' c ','I I',' c '].layerCentre("m").layerCorners("A"),
            ['   ','   ','   '].layerAll("M").layerFront("G").layerCentre(" "),
            ['   ','   ','   '].layerCorners("M").layerPlus("C").layerCentre("B")
        ],
        {A:'modern_industrialization:aluminum_blade',I:"modern_industrialization:steel_rod_magnetic",c:"modern_industrialization:analog_circuit", m:"immersiveengineering:mold_wire"},
        'modern_industrialization:electric_wiremill', basicMaterialset
    )
    
    //mixer
    workspace_recipe([
            ['   ','   ','   '].layerCentre("G").layerCorners("A").layerSides("w"),
            ['   ','   ','   '].layerAll("M").layerSides("G").layerCentre("r"),
            ['   ','   ','   '].layerCorners("M").layerPlus("C").layerCentre("B")
        ],
        {A:'modern_industrialization:motor',w:"modern_industrialization:tin_wire",r:"modern_industrialization:aluminum_rotor"},
        'modern_industrialization:electric_mixer', basicMaterialset
    )

    //cutting_machine
    workspace_recipe([
            [' c ','w w',' c '].layerCentre("c").layerCorners("A"),
            ['   ','   ','   '].layerAll("M").layerFront("G").layerCentre("r"),
            ['   ','   ','   '].layerCorners("M").layerPlus("C").layerCentre("B")
        ],
        {A:'modern_industrialization:motor',w:"modern_industrialization:analog_circuit",c:"modern_industrialization:conveyor",r:"modern_industrialization:invar_rotary_blade"},
        'modern_industrialization:electric_cutting_machine', basicMaterialset
    )


    //#endregion
    
    //IE stuff
    workspace_recipe([
            ['WWW','WTW','WWW'],
            ['   ',' B ','   '].layerCorners("S"),
            ['   ','   ','   '].layerCorners("S")
        ],
        {S:'immersiveengineering:stick_treated', T:'craftingstation:crafting_station_slab', W:'#immersiveengineering:treated_wood_slab',B:"immersiveengineering:wooden_barrel"},
        'immersiveengineering:craftingtable'
    )

    //dunno
    workspace_recipe([
            [' B ',' B ',' B '],
            ['   ',' I ','   '],
            ['   ',' P ','   '].layerCorners("b").layerSides("R")
        ],
        {B:'minecraft:iron_block', I:'#c:ingots/iron', b:'#c:bolts/iron',R:'#c:rods/iron',P:"minecraft:heavy_weighted_pressure_plate"},
        'minecraft:anvil', {} , "#c:hammers"
    )

    workspace_recipe([
            ['   ',' B ','   '].layerCorners("I").layerSides("I"),
            ['   ',' I ','   '],
            ['   ',' B ','   '].layerCorners("I").layerSides("I")
        ],
        {B:'minecraft:iron_block', I:'#c:ingots/iron'},
        'modern_industrialization:forge_hammer', {} , "#c:hammers"
    )


    event.forEachRecipe({output:craft_removal_list}, r => {
        event.remove({ type: 'minecraft:crafting_shaped', output: r.getOriginalRecipeResult()})
        event.remove({ type: 'minecraft:crafting_shapeless', output: r.getOriginalRecipeResult()})
    })
})