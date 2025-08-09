ServerEvents.recipes(event => {

    //ae stuff
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

    function ae_press_recipes (pressForm, input, output, token) {
        event.recipes.modern_industrialization.packer(8, 40)
        .itemIn(input)
        .itemIn(pressForm,0)
        .itemIn(token,0)
        .itemOut(output)
    }
    //tier 2
    ae_press_recipes ("ae2:silicon_press", "#c:ingots/silicon", "ae2:printed_silicon", tier3token)
    ae_press_recipes ("ae2:logic_processor_press", "#c:ingots/gold", "ae2:printed_logic_processor", tier3token)
    ae_press_recipes ("kubejs:cell_press", "#c:plates/iron", "kubejs:cell_half", tier3token)

    //tier 3
    ae_press_recipes ("ae2:calculation_processor_press", "#c:gems/certus_quartz", "ae2:printed_calculation_processor", tier3token)
    ae_press_recipes ("ae2:engineering_processor_press", "#c:ingots/aluminum", "ae2:printed_engineering_processor", tier3token)
    ae_press_recipes ("kubejs:core_press", "#c:plates/iron", "kubejs:core_hull", tier3token)

})