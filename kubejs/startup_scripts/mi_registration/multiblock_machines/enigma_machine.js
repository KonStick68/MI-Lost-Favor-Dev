let ENIGMA_MACHINE;

MIMachineEvents.registerRecipeTypes(event => {
    ENIGMA_MACHINE = event.register('enigma_machine')
            .withItemInputs()
            .withFluidInputs()
            .withItemOutputs()
})

MIMachineEvents.registerMachines(event => {
    
    const enigmaMachineShape = event.layeredShape('heatproof_machine_casing', [
            ['           ','           ','           ','           ','           '],
            ['           ','           ','           ','           ','           '],
            ['           ','   OBBBO   ','   OBBBO   ','   OBBBO   ','           '],
            ['   DDCDD   ','  OW   WO  ','  OW   WO  ','  OW   WO  ','   SDCDS   '],
            ['   DDDDD   ','  B SSS B  ','  B     B  ','  B     B  ','   D   D   '],
            ['   ADDDT   ','  B S#S B  ','  B  L  B  ','  B     B  ','   A   T   '],
            ['   DDDDD   ','  B SSS B  ','  B     B  ','  B     B  ','   D   D   '],
            ['   DDDDD   ','  OW   WO  ','  OW   WO  ','  OW   WO  ','   SD DS   '],
            ['           ','           ','           ','           ','           '],
            ['           ','           ','           ','           ','           '],
            ['           ','           ','           ','           ','           '],
        ])
            .key('D', event.memberOfBlock('minecraft:deepslate_bricks'),event.hatchOf('energy_input', 'item_input', 'item_output','fluid_input'))
            .key('A', event.memberOfBlock('pastel:amethyst_basalt_light'),event.noHatch())
            .key('C', event.memberOfBlock('pastel:citrine_basalt_light'),event.noHatch())
            .key('T', event.memberOfBlock('pastel:topaz_basalt_light'),event.noHatch())
            .key('S', event.memberOfBlock('minecraft:deepslate_brick_slab'),event.noHatch())
            .key('W', event.memberOfBlock('minecraft:deepslate_brick_wall'),event.noHatch())
            .key('O', event.memberOfBlock('minecraft:oak_slab'),event.noHatch())
            .key('B', event.memberOfBlock('minecraft:bookshelf'),event.noHatch())
            .key('L', event.memberOfBlock('minecraft:lectern'),event.noHatch())
            .build()

        event.simpleElectricCraftingMultiBlock(
            'Enigma machine', 'enigma_machine', ENIGMA_MACHINE, enigmaMachineShape,
            event.progressBar(60, 29, 'arrow'),
            itemInputs => itemInputs.addSlots(40, 15, 1, 3), itemOutputs => itemOutputs.addSlots(86, 32,1,1),
            fluidInputs => fluidInputs.addSlot(22,33), fluidOutputs => {},
            'heatproof_machine_casing', 'pyrolyse_overlays', false, true, false
        )
})