ServerEvents.recipes(event => {

     event.recipes.modern_industrialization.enigma_machine(42, 100)
            .itemIn('kubejs:blueprint_pack', 0)
            .itemIn('16x pastel:shimmerstone_gem')
            .itemIn('minecraft:paper')
            .fluidIn('minecraft:water',1000)
            .itemOut("kubejs:mysterious_blueprint")

     event.recipes.modern_industrialization.enigma_machine(42, 1000)
                 .itemIn('kubejs:blueprint_pack', 0)
                 .itemIn('16x pastel:shimmerstone_gem')
                 .itemIn('kubejs:mysterious_blueprint', 0)
                 .fluidIn('pastel:liquid_crystal',4000)
                 .itemOut("kubejs:storage_blueprint")

     event.recipes.modern_industrialization.enigma_machine(42, 10000)
                 .itemIn('kubejs:blueprint_pack', 0)
                 .itemIn('16x pastel:shimmerstone_gem')
                 .itemIn('kubejs:storage_blueprint', 0)
                 .fluidIn('pastel:midnight_solution',4000)
                 .itemOut("kubejs:automation_blueprint")

     event.recipes.modern_industrialization.enigma_machine(420, 10000)
                 .itemIn('kubejs:blueprint_pack', 0)
                 .itemIn('pastel:bottle_of_ruin')
                 .itemIn('kubejs:automation_blueprint', 0)
                 .fluidIn('pastel:midnight_solution',16000)
                 .itemOut("kubejs:quantum_blueprint")

     event.recipes.modern_industrialization.enigma_machine(42000, 10000)
                 .itemIn('kubejs:blueprint_pack', 0)
                 .itemIn('8x pastel:bottle_of_ruin')
                 .itemIn('kubejs:quantum_blueprint', 0)
                 .fluidIn('pastel:dragonrot',32000)
                 .itemOut("kubejs:divine_blueprint")

})