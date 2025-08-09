ServerEvents.recipes(event => {
    
    event.recipes.modern_industrialization.assembler(8, 100)
    .itemIn("modern_industrialization:electrum_wire")
    .itemIn("modern_industrialization:analog_circuit_board")
    .itemIn("minecraft:redstone")
    .itemIn("#c:gems/quartz")
    .itemOut("immersiveengineering:component_electronic")
    event.recipes.modern_industrialization.assembler(8, 100)
    .itemIn("2x modern_industrialization:iron_plate")
    .itemIn("minecraft:copper_ingot")
    .itemIn("modern_industrialization:piston")
    .itemIn("modern_industrialization:conveyor")
    .itemOut("4x immersiveengineering:component_iron")
    event.recipes.modern_industrialization.assembler(8, 100)
    .itemIn("2x modern_industrialization:steel_plate")
    .itemIn("minecraft:copper_ingot")
    .itemIn("modern_industrialization:robot_arm")
    .itemIn("modern_industrialization:conveyor")
    .itemOut("4x immersiveengineering:component_steel")

    //ae2 stuff

    /*
    var tier1token = "kubejs:mysterious_disk"
    var tier2token = "kubejs:storage_disk"
    var tier3token = "kubejs:automation_disk"
    var tier4token = "kubejs:quantum_disk"
    */

    var tier1token = "#mi_lost_favor:tier_1_recipes"
    var tier2token = "#mi_lost_favor:tier_2_recipes"
    var tier3token = "#mi_lost_favor:tier_3_recipes"
    var tier4token = "#mi_lost_favor:tier_4_recipes"

    var tier1DefaultEnergy = 8
    var tier2DefaultEnergy = 12
    var tier3DefaultEnergy = 16
    var tier4DefaultEnergy = 20
    var tier5DefaultEnergy = 24

    var tier1DefaultTime = 100
    var tier2DefaultTime = 200
    var tier3DefaultTime = 400
    var tier4DefaultTime = 800
    var tier5DefaultTime = 1600


    function ae_item_cell (cellComponent, output, token) {
        event.recipes.modern_industrialization.assembler(32,200)
        .itemIn("2x ae2:quartz_glass")
        .itemIn("2x kubejs:cell_half")
        .itemIn("2x #c:plates/aluminum")
        .itemIn(cellComponent)
        .itemIn(token, 0)
        .fluidIn("modern_industrialization:molten_redstone" , 250)
        .fluidIn("modern_industrialization:soldering_alloy" , 100)
        .itemOut(output)
    }

    function ae_fluid_cell (cellComponent, output, token) {
        event.recipes.modern_industrialization.assembler(32,200)
        .itemIn("2x ae2:quartz_glass")
        .itemIn("2x kubejs:cell_half")
        .itemIn("2x #c:plates/copper")
        .itemIn(cellComponent)
        .itemIn(token, 0)
        .fluidIn("modern_industrialization:molten_redstone" , 250)
        .fluidIn("modern_industrialization:soldering_alloy" , 100)
        .itemOut(output)
    }

    function ae_cell_component (cellComponent, upgradeMaterial, processor, output, token) {
        event.recipes.modern_industrialization.assembler(32,200)
        .itemIn("4x " + cellComponent)
        .itemIn(processor)
        .itemIn("4x " + upgradeMaterial)
        .itemIn(token, 0)
        .itemOut(output)
    }

    function ae_processor (printedCircuit, output, token) {
        event.recipes.modern_industrialization.assembler(32,200)
        .itemIn("ae2:printed_silicon")
        .itemIn(printedCircuit)
        .itemIn(token, 0)
        .fluidIn("modern_industrialization:molten_redstone" , 250)
        .itemOut(output)
    }

    function ae_core (coreMaterial, output, token) {
        event.recipes.modern_industrialization.assembler(32,200)
        .itemIn("kubejs:core_hull")
        .itemIn("4x ae2:quartz_glass")
        .itemIn(coreMaterial)
        .itemIn(token, 0)
        .fluidIn("modern_industrialization:polyethylene" , 250)
        .itemOut(output)
    }

    function ae_card (base, upgradeMaterial, output, token) {
        event.recipes.modern_industrialization.assembler(32,200)
        .itemIn(base)
        .itemIn("4x " + upgradeMaterial)
        .itemIn(token, 0)
        .fluidIn("modern_industrialization:molten_redstone" , 250)
        .itemOut(output)
    }

    function cell_upgrade (baseCell, nextCellComponent, upgradeMaterial, output, token) {
        event.recipes.modern_industrialization.assembler(32,200)
        .itemIn(baseCell)
        .itemIn(nextCellComponent)
        .itemIn("2x " + upgradeMaterial)
        .itemIn(token, 0)
        .itemOut(output)
    }

    function ae_crafting_storage (cellComponent, wireMaterial, output, token) {
        event.recipes.modern_industrialization.assembler(32,200)
        .itemIn(cellComponent)
        .itemIn("ae2:crafting_unit")
        .itemIn("8x #c:dusts/aluminum")
        .itemIn("4x " + "#c:wires/" +wireMaterial)
        .itemIn(token, 0)
        .itemOut(output)
    }

    function ae_crafting_storage_upgrade (cellComponent, craftingStorage, wireMaterial, output, token) {
        event.recipes.modern_industrialization.assembler(32,200)
        .itemIn(cellComponent)
        .itemIn(craftingStorage)
        .itemIn("2x " + "#c:wires/" +wireMaterial)
        .itemIn(token, 0)
        .itemOut(output)
    }

    function two_items_with_token (itemOne, itemTwo, output,token) {
        event.recipes.modern_industrialization.assembler(32,200)
        .itemIn(itemOne)
        .itemIn(itemTwo)
        .itemIn(token, 0)
        .itemOut(output)
    }

    //cell components
    ae_cell_component("#c:plates/aluminum", "#c:dusts/certus_quartz", "ae2:logic_processor", "ae2:cell_component_1k", tier1token)
    ae_cell_component("ae2:cell_component_1k", "#c:dusts/fluix", "ae2:calculation_processor", "ae2:cell_component_4k", tier2token)
    ae_cell_component("ae2:cell_component_4k", "#c:dusts/aluminum", "ae2:calculation_processor", "ae2:cell_component_16k", tier2token)
    ae_cell_component("ae2:cell_component_16k", "#c:dusts/corrupti", "ae2:engineering_processor", "ae2:cell_component_64k", tier2token)
    ae_cell_component("ae2:cell_component_64k", "#c:dusts/ruby", "ae2:engineering_processor", "ae2:cell_component_256k", tier2token)

    //cells
    ae_item_cell("ae2:cell_component_1k", "ae2:item_storage_cell_1k", tier2token)
    ae_item_cell("ae2:cell_component_4k", "ae2:item_storage_cell_4k", tier3token)
    ae_item_cell("ae2:cell_component_16k", "ae2:item_storage_cell_16k", tier3token)
    ae_item_cell("ae2:cell_component_64k", "ae2:item_storage_cell_64k", tier3token)
    ae_item_cell("ae2:cell_component_256k", "ae2:item_storage_cell_256k", tier3token)

    ae_fluid_cell("ae2:cell_component_1k", "ae2:fluid_storage_cell_1k", tier2token)
    ae_fluid_cell("ae2:cell_component_4k", "ae2:fluid_storage_cell_4k", tier3token)
    ae_fluid_cell("ae2:cell_component_16k", "ae2:fluid_storage_cell_16k", tier3token)
    ae_fluid_cell("ae2:cell_component_64k", "ae2:fluid_storage_cell_64k", tier3token)
    ae_fluid_cell("ae2:cell_component_256k", "ae2:fluid_storage_cell_256k", tier3token)

    cell_upgrade("ae2:item_storage_cell_1k", "ae2:cell_component_4k", "#c:dusts/fluix", "ae2:item_storage_cell_4k", tier3token)
    cell_upgrade("ae2:item_storage_cell_4k", "ae2:cell_component_16k", "#c:dusts/aluminum", "ae2:item_storage_cell_16k", tier3token)
    cell_upgrade("ae2:item_storage_cell_16k", "ae2:cell_component_64k", "#c:dusts/corrupti", "ae2:item_storage_cell_64k", tier3token)
    cell_upgrade("ae2:item_storage_cell_64k", "ae2:cell_component_256k", "#c:dusts/ruby", "ae2:item_storage_cell_256k", tier3token)

    cell_upgrade("ae2:fluid_storage_cell_1k", "ae2:cell_component_4k", "#c:dusts/fluix", "ae2:fluid_storage_cell_4k", tier3token)
    cell_upgrade("ae2:fluid_storage_cell_4k", "ae2:cell_component_16k", "#c:dusts/aluminum", "ae2:fluid_storage_cell_16k", tier3token)
    cell_upgrade("ae2:fluid_storage_cell_16k", "ae2:cell_component_64k", "#c:dusts/corrupti", "ae2:fluid_storage_cell_64k", tier3token)
    cell_upgrade("ae2:fluid_storage_cell_64k", "ae2:cell_component_256k", "#c:dusts/ruby", "ae2:fluid_storage_cell_256k", tier3token)

    //crafting storage
    ae_crafting_storage("ae2:cell_component_4k", "electrum", "ae2:4k_crafting_storage", tier2token)
    ae_crafting_storage("ae2:cell_component_16k", "electrum", "ae2:16k_crafting_storage", tier2token)
    ae_crafting_storage("ae2:cell_component_64k", "aluminum", "ae2:64k_crafting_storage", tier2token)
    ae_crafting_storage("ae2:cell_component_256k", "aluminum", "ae2:256k_crafting_storage", tier2token)

    ae_crafting_storage_upgrade("ae2:cell_component_16k", "ae2:4k_crafting_storage", "electrum", "ae2:16k_crafting_storage", tier2token)
    ae_crafting_storage_upgrade("ae2:cell_component_64k", "ae2:16k_crafting_storage", "electrum", "ae2:64k_crafting_storage", tier2token)
    ae_crafting_storage_upgrade("ae2:cell_component_256k", "ae2:64k_crafting_storage", "electrum", "ae2:256k_crafting_storage", tier2token)

    //tier 2 recipes
    ae_processor("ae2:printed_logic_processor", "ae2:logic_processor", tier3token)

    ae_card("ae2:basic_card", "#c:dusts/redstone", "ae2:redstone_card", tier1token)
    ae_card("ae2:basic_card", "minecraft:chest", 'ae2:capacity_card', tier1token)
    ae_card("ae2:basic_card", "minecraft:magma_block", 'ae2:void_card', tier1token)
    ae_card("ae2:basic_card", "minecraft:crafting_table", 'ae2:crafting_card', tier1token)

    event.recipes.modern_industrialization.assembler(tier2DefaultEnergy, tier2DefaultTime)
    .itemIn("4x modern_industrialization:aluminum_large_plate")
    .itemIn("16x modern_industrialization:certus_quartz_rod")
    .itemIn("4x kubejs:cell_half")
    .itemIn("4x ae2:logic_processor")
    .itemIn(tier1token, 0)
    .itemOut("ae2:cell_workbench")

    event.recipes.modern_industrialization.assembler(tier2DefaultEnergy, tier2DefaultTime)
    .itemIn("ae2:import_bus")
    .itemIn("ae2:export_bus")
    .itemIn("ae2:logic_processor")
    .itemIn(tier1token, 0)
    .itemOut("advanced_ae:import_export_bus_part")

    event.recipes.modern_industrialization.assembler(tier2DefaultEnergy, tier2DefaultTime)
    .itemIn("6x #c:rods/aluminum")
    .itemIn("8x #c:wires/electrum")
    .itemIn("4x #c:plates/iron")
    .itemIn("2x ae2:fluix_crystal")
    .itemIn("ae2:logic_processor")
    .itemIn(tier1token, 0)
    .itemOut("extendedae:me_packing_tape")

    event.recipes.modern_industrialization.assembler(tier2DefaultEnergy, tier2DefaultTime)
    .itemIn("ae2:fluid_storage_cell_1k")
    .itemIn("ae2:item_storage_cell_1k")
    .itemIn("2x ae2:logic_processor")
    .itemIn("4x #c:plates/aluminum")
    .itemIn("ae2:quartz_glass")
    .itemIn(tier1token, 0)
    .itemOut("extendedae:ingredient_buffer")

    event.recipes.modern_industrialization.assembler(tier2DefaultEnergy, tier2DefaultTime)
    .itemIn("6x modern_industrialization:aluminum_large_plate")
    .itemIn("24x modern_industrialization:certus_quartz_rod")
    .itemIn("10x kubejs:cell_half")
    .itemIn("20x modern_industrialization:rubber_sheet")
    .itemIn("2x ae2:fluix_glass_cable")
    .itemIn("4x ae2:logic_processor")
    .itemIn(tier1token, 0)
    .itemOut("ae2:drive")

    event.recipes.modern_industrialization.assembler(tier2DefaultEnergy, tier2DefaultTime)
    .itemIn("2x #c:plates/aluminum")
    .itemIn("4x ae2:fluix_glass_cable")
    .itemIn("modern_industrialization:steel_item_input_hatch")
    .itemIn("ae2:logic_processor")
    .itemIn(tier1token, 0)
    .itemOut("ae2:import_bus")

    event.recipes.modern_industrialization.assembler(tier2DefaultEnergy, tier2DefaultTime)
    .itemIn("2x #c:plates/aluminum")
    .itemIn("4x ae2:fluix_glass_cable")
    .itemIn("modern_industrialization:steel_item_output_hatch")
    .itemIn("ae2:logic_processor")
    .itemIn(tier1token, 0)
    .itemOut("ae2:export_bus")

    event.recipes.modern_industrialization.assembler(tier2DefaultEnergy, tier2DefaultTime)
    .itemIn("modern_industrialization:mv_energy_input_hatch")
    .itemIn("4x ae2:fluix_glass_cable")
    .itemIn("8x modern_industrialization:electrum_wire")
    .itemIn("2x ae2:logic_processor")
    .itemIn(tier1token, 0)
    .itemOut("ae2:energy_acceptor")

    event.recipes.modern_industrialization.assembler(tier2DefaultEnergy, tier2DefaultTime)
    .itemIn("2x kubejs:cell_half")
    .itemIn("4x modern_industrialization:electrum_wire")
    .itemIn("2x #c:plates/gold")
    .itemIn("ae2:logic_processor")
    .itemIn(tier1token, 0)
    .itemOut("ae2:basic_card")

    event.recipes.modern_industrialization.assembler(tier2DefaultEnergy, tier2DefaultTime)
    .itemIn("moderndynamics:item_pipe")
    .itemIn("2x ae2:fluix_crystal")
    .itemIn(tier1token, 0)
    .itemOut("2x ae2:fluix_glass_cable")

    event.recipes.modern_industrialization.assembler(tier2DefaultEnergy, tier2DefaultTime)
    .itemIn("4x ae2:fluix_crystal")
    .itemIn("8x #c:wires/electrum")
    .itemIn("ae2:quartz_glass")
    .itemIn("ae2:logic_processor")
    .itemIn("8x modern_industrialization:redstone_battery")
    .itemIn(tier1token, 0)
    .itemOut("ae2:energy_cell")

    //tier 3 recipes
    ae_processor("ae2:printed_engineering_processor", "ae2:engineering_processor", tier3token)
    ae_processor("ae2:printed_calculation_processor", "ae2:calculation_processor", tier3token)

    ae_core ("ae2:calculation_processor", "ae2:annihilation_core", tier3token)
    ae_core ("ae2:engineering_processor", "ae2:formation_core", tier3token)

    ae_card("ae2:advanced_card", "#minecraft:wool", "ae2:fuzzy_card", tier2token)
    ae_card("ae2:advanced_card", "#c:dusts/glowstone", 'ae2:speed_card', tier2token)
    ae_card("ae2:advanced_card", "minecraft:redstone_torch", "ae2:inverter_card", tier2token)
    ae_card("ae2:advanced_card", "ae2:fluix_crystal", 'ae2:equal_distribution_card', tier2token)
    ae_card("ae2:advanced_card", "ae2:charged_certus_quartz_crystal", 'ae2:energy_card', tier2token)

    two_items_with_token ("ae2:level_emitter", "modern_industrialization:silicon_battery", "ae2:energy_level_emitter", tier2token)
    two_items_with_token ("ae2:energy_level_emitter", "2x ae2:logic_processor", "extendedae:threshold_level_emitter", tier2token)
    two_items_with_token ("#ae2:illuminated_panel", "ae2:level_emitter", "ae2:storage_monitor", tier2token)
    two_items_with_token ("ae2:storage_monitor", "2x ae2:logic_processor", "advanced_ae:throughput_monitor", tier2token)

    two_items_with_token ("ae2:storage_bus", "2x ae2:logic_processor", "extendedae:tag_storage_bus", tier2token)
    two_items_with_token ("ae2:storage_bus", "2x ae2:engineering_processor", "extendedae:mod_storage_bus", tier2token)
    two_items_with_token ("ae2:storage_bus", "2x ae2:calculation_processor", "extendedae:precise_storage_bus", tier2token)

    two_items_with_token ("4x ae2:cable_anchor", "ae2:charged_certus_quartz_crystal", "ae2:quartz_fixture", tier2token)
    two_items_with_token ("ae2:quartz_fixture", "ae2:calculation_processor", "ae2:light_detector", tier2token)
    two_items_with_token ("ae2:quartz_fiber", "ae2:calculation_processor", "ae2:toggle_bus", tier2token)

    two_items_with_token ("ae2:semi_dark_monitor", "pastel:shimmerstone_gem", "ae2:monitor", tier2token)
    two_items_with_token ("ae2:semi_dark_monitor", "#c:dusts/coal", "ae2:dark_monitor", tier2token)



    event.recipes.modern_industrialization.assembler(tier3DefaultEnergy, tier3DefaultTime)
    .itemIn("2x kubejs:cell_half")
    .itemIn("4x modern_industrialization:aluminum_wire")
    .itemIn("2x #c:plates/diamond")
    .itemIn("ae2:calculation_processor")
    .itemIn("ae2:engineering_processor")
    .itemIn(tier2token, 0)
    .itemOut("ae2:advanced_card")

    event.recipes.modern_industrialization.assembler(tier3DefaultEnergy, tier3DefaultTime)
    .itemIn("3x ae2:quartz_vibrant_glass")
    .itemIn("4x modern_industrialization:aluminum_wire")
    .itemIn("modern_industrialization:aluminum_large_plate")
    .itemIn("ae2:engineering_processor")
    .itemIn(tier2token, 0)
    .itemOut("ae2:semi_dark_monitor")

    event.recipes.modern_industrialization.assembler(tier3DefaultEnergy, tier3DefaultTime)
    .itemIn("3x ae2:fluix_crystal")
    .itemIn("#ae2:illuminated_panel")
    .itemIn("ae2:formation_core")
    .itemIn(tier2token, 0)
    .itemOut("ae2:formation_plane")

    event.recipes.modern_industrialization.assembler(tier3DefaultEnergy, tier3DefaultTime)
    .itemIn("3x ae2:fluix_crystal")
    .itemIn("#ae2:illuminated_panel")
    .itemIn("ae2:annihilation_core")
    .itemIn(tier2token, 0)
    .itemOut("ae2:annihilation_plane")

    event.recipes.modern_industrialization.assembler(tier3DefaultEnergy, tier3DefaultTime)
    .itemIn("2x #c:plates/aluminum")
    .itemIn("6x ae2:fluix_glass_cable")
    .itemIn("18x modern_industrialization:rubber_sheet")
    .itemIn("ae2:calculation_processor")
    .itemIn(tier2token, 0)
    .itemOut("4x ae2:fluix_smart_dense_cable")

    event.recipes.modern_industrialization.assembler(tier3DefaultEnergy, tier3DefaultTime)
    .itemIn("4x ae2:fluix_crystal")
    .itemIn("8x #c:wires/aluminum")
    .itemIn("ae2:quartz_glass")
    .itemIn("ae2:calculation_processor")
    .itemIn("8x modern_industrialization:silicon_battery")
    .itemIn(tier2token, 0)
    .itemOut("ae2:dense_energy_cell")

    event.recipes.modern_industrialization.assembler(tier3DefaultEnergy, tier3DefaultTime)
    .itemIn("6x #c:rods/certus_quartz")
    .itemIn("8x #c:wires/aluminum")
    .itemIn("4x #c:plates/iron")
    .itemIn("2x ae2:fluix_crystal")
    .itemIn("ae2:calculation_processor")
    .itemIn("extendedae:threshold_level_emitter")
    .itemIn(tier2token, 0)
    .itemOut("ae2:network_tool")

    event.recipes.modern_industrialization.assembler(tier3DefaultEnergy, tier3DefaultTime)
    .itemIn("2x #c:wires/aluminum")
    .itemIn("ae2:calculation_processor")
    .itemIn("ae2:fluix_crystal")
    .itemIn("#c:rods/certus_quartz")
    .itemIn(tier2token, 0)
    .itemOut("ae2:level_emitter")

    event.recipes.modern_industrialization.assembler(tier3DefaultEnergy, tier3DefaultTime)
    .itemIn("4x #c:wires/aluminum")
    .itemIn("3x ae2:quartz_glass")
    .itemIn("6x ae2:certus_quartz_crystal")
    .itemIn("ae2:certus_quartz_cutting_knife", 0)
    .itemIn(tier2token, 0)
    .itemOut("12x ae2:quartz_fiber")

    event.recipes.modern_industrialization.assembler(tier3DefaultEnergy, tier3DefaultTime)
    .itemIn("4x #c:wires/copper")
    .itemIn("#c:rods/wooden")
    .itemIn("2x ae2:calculation_processor")
    .itemIn("6x ae2:certus_quartz_crystal")
    .itemIn("2x modern_industrialization:motor")
    .itemIn(tier2token, 0)
    .itemOut("ae2:certus_quartz_cutting_knife")

    event.recipes.modern_industrialization.assembler(tier3DefaultEnergy, tier3DefaultTime)
    .itemIn("#c:stones")
    .itemIn("6x ae2:certus_quartz_crystal")
    .itemIn("ae2:certus_quartz_cutting_knife", 0)
    .itemIn(tier2token, 0)
    .itemOut("16x ae2:cable_anchor")

    event.recipes.modern_industrialization.assembler(tier3DefaultEnergy, tier3DefaultTime)
    .itemIn("#ae2:illuminated_panel")
    .itemIn("2x ae2:fluix_smart_dense_cable")
    .itemIn("4x ae2:fluix_crystal")
    .itemIn(tier2token, 0)
    .itemOut("ae2:me_p2p_tunnel")

    event.recipes.modern_industrialization.assembler(tier3DefaultEnergy, tier3DefaultTime)
    .itemIn("ae2:toggle_bus")
    .itemIn("ae2:certus_quartz_cutting_knife", 0)
    .itemIn(tier2token, 0)
    .itemOut("ae2:inverted_toggle_bus")

    event.recipes.modern_industrialization.assembler(tier3DefaultEnergy, tier3DefaultTime)
    .itemIn("ae2:inverted_toggle_bus")
    .itemIn("ae2:certus_quartz_cutting_knife", 0)
    .itemIn(tier2token, 0)
    .itemOut("ae2:toggle_bus")

    event.recipes.modern_industrialization.assembler(tier3DefaultEnergy, tier3DefaultTime)
    .itemIn("ae2:formation_core")
    .itemIn("ae2:annihilation_core")
    .itemIn("#ae2:illuminated_panel")
    .itemIn("4x ae2:logic_processor")
    .itemIn(tier2token, 0)
    .itemOut("ae2:terminal")

})