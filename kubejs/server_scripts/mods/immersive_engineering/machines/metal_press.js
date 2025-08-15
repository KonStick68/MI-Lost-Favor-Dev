ServerEvents.recipes(event => {

    //ae stuff

    function press_recipe(input, output, mold, energy) {
        event.custom({
            type: "immersiveengineering:metal_press",
            energy: energy,
            input: {
                basePredicate: input[0],
                count: input[1]
            },
            mold: mold,
            result: {
                item: output[0],
                count: output[1]
            }
        });
    }
    // processors
    press_recipe([{"tag": "c:ingots/silicon"}, 2], ["ae2:printed_silicon", 1], "ae2:silicon_press", 3200);
    press_recipe([{"tag": "c:ingots/gold"}, 2], ["ae2:printed_logic_processor", 1], "ae2:logic_processor_press", 3200);
    press_recipe([{"tag": "c:gems/certus_quartz"}, 2], ["ae2:printed_calculation_processor", 1], "ae2:calculation_processor_press", 3200);
    press_recipe([{"tag": "c:ingots/aluminum"}, 2], ["ae2:printed_engineering_processor", 1], "ae2:engineering_processor_press", 3200);
    press_recipe([{"item": "advanced_ae:quantum_alloy"}, 2], ["advanced_ae:printed_quantum_processor", 1], "advanced_ae:quantum_processor_press", 3200);
    press_recipe([{"item": "extendedae:entro_crystal"}, 2], ["extendedae:concurrent_processor_print", 1], "extendedae:concurrent_processor_press", 3200);

    //custom stuff
    press_recipe([{"tag": "c:plates/iron"}, 2], ["kubejs:cell_half", 1], "kubejs:cell_press", 3200);
    press_recipe([{"tag": "c:plates/iron"}, 2], ["kubejs:core_hull", 1], "kubejs:core_press", 3200);

})