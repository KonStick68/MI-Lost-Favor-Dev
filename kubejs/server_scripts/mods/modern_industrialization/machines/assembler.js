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

    var tier1token = "kubejs:mysterious_disk"
    var tier2token = "kubejs:storage_disk"
    var tier3token = "kubejs:automation_disk"
    var tier4token = "kubejs:quantum_disk"

    function ae_item_cell (cellComponent, output, token) {
        event.recipes.modern_industrialization.assembler(32,200)
        .itemIn("2x ae2:quartz_glass")
        .itemIn("2x kubejs:cell_half")
        .itemIn("2x #c:plates/aluminum")
        .itemIn(cellComponent)
        .itemIn(token, 0)
        .fluidIn("modern_industrialization:molten_redstone" , 250)
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

    function ae_card (base, upgradeMaterial, output, token) {
        event.recipes.modern_industrialization.assembler(32,200)
        .itemIn(base)
        .itemIn("4x " + upgradeMaterial)
        .itemIn(token, 0)
        .fluidIn("modern_industrialization:molten_redstone" , 250)
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

    //tier 2 recipes
    ae_processor("ae2:printed_logic_processor", "ae2:logic_processor", tier2token)

    ae_card("ae2:basic_card", "#c:dusts/redstone", "ae2:redstone_card", tier1token)
    ae_card("ae2:basic_card", "minecraft:chest", 'ae2:capacity_card', tier1token)
    ae_card("ae2:basic_card", "minecraft:magma_block", 'ae2:void_card', tier1token)
    ae_card("ae2:basic_card", "minecraft:crafting_table", 'ae2:crafting_card', tier1token)

    event.recipes.modern_industrialization.assembler(8, 100)
    .itemIn("4x modern_industrialization:aluminum_large_plate")
    .itemIn("16x modern_industrialization:certus_quartz_rod")
    .itemIn("4x kubejs:cell_half")
    .itemIn("4x ae2:logic_processor")
    .itemIn(tier1token, 0)
    .itemOut("ae2:cell_workbench")

    event.recipes.modern_industrialization.assembler(8, 100)
    .itemIn("6x modern_industrialization:aluminum_large_plate")
    .itemIn("24x modern_industrialization:certus_quartz_rod")
    .itemIn("10x kubejs:cell_half")
    .itemIn("20x modern_industrialization:rubber_sheet")
    .itemIn("2x ae2:fluix_glass_cable")
    .itemIn("4x ae2:logic_processor")
    .itemIn(tier1token, 0)
    .itemOut("ae2:drive")

    event.recipes.modern_industrialization.assembler(8, 100)
    .itemIn("2x #c:plates/aluminum")
    .itemIn("4x ae2:fluix_glass_cable")
    .itemIn("modern_industrialization:steel_item_input_hatch")
    .itemIn("ae2:logic_processor")
    .itemIn(tier1token, 0)
    .itemOut("ae2:import_bus")

    event.recipes.modern_industrialization.assembler(8, 100)
    .itemIn("2x #c:plates/aluminum")
    .itemIn("4x ae2:fluix_glass_cable")
    .itemIn("modern_industrialization:steel_item_output_hatch")
    .itemIn("ae2:logic_processor")
    .itemIn(tier1token, 0)
    .itemOut("ae2:export_bus")

    event.recipes.modern_industrialization.assembler(8, 100)
    .itemIn("modern_industrialization:mv_energy_input_hatch")
    .itemIn("4x ae2:fluix_glass_cable")
    .itemIn("8x modern_industrialization:electrum_wire")
    .itemIn("2x ae2:logic_processor")
    .itemIn(tier1token, 0)
    .itemOut("ae2:energy_acceptor")

    event.recipes.modern_industrialization.assembler(8, 100)
    .itemIn("2x kubejs:cell_half")
    .itemIn("4x modern_industrialization:electrum_wire")
    .itemIn("2x #c:plates/gold")
    .itemIn("ae2:logic_processor")
    .itemIn(tier1token, 0)
    .itemOut("ae2:basic_card")

    event.recipes.modern_industrialization.assembler(8, 100)
    .itemIn("2x #c:plates/aluminum")
    .itemIn("6x ae2:fluix_glass_cable")
    .itemIn("18x modern_industrialization:rubber_sheet")
    .itemIn("ae2:logic_processor")
    .itemIn(tier1token, 0)
    .itemOut("4x ae2:fluix_smart_dense_cable")

    event.recipes.modern_industrialization.assembler(8, 100)
    .itemIn("moderndynamics:item_pipe")
    .itemIn("2x ae2:fluix_crystal")
    .itemIn(tier1token, 0)
    .itemOut("2x ae2:fluix_glass_cable")

    //tier 3 recipes
    ae_processor("ae2:printed_engineering_processor", "ae2:engineering_processor", tier3token)
    ae_processor("ae2:printed_calculation_processor", "ae2:calculation_processor", tier3token)

    ae_card("ae2:advanced_card", "#minecraft:wool", "ae2:fuzzy_card", tier2token)
    ae_card("ae2:advanced_card", "#c:dusts/glowstone", 'ae2:speed_card', tier2token)
    ae_card("ae2:advanced_card", "minecraft:redstone_torch", "ae2:inverter_card", tier2token)
    ae_card("ae2:advanced_card", "ae2:fluix_crystal", 'ae2:equal_distribution_card', tier2token)
    ae_card("ae2:advanced_card", "ae2:charged_certus_quartz_crystal", 'ae2:energy_card', tier2token)

    event.recipes.modern_industrialization.assembler(8, 100)
    .itemIn("2x kubejs:cell_half")
    .itemIn("4x modern_industrialization:aluminum_wire")
    .itemIn("2x #c:plates/diamond")
    .itemIn("ae2:calculation_processor")
    .itemIn(tier2token, 0)
    .itemOut("ae2:advanced_card")

})