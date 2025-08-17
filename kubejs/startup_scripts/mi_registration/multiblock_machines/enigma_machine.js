let ENIGMA_MACHINE;

MIMachineEvents.registerRecipeTypes(event => {
    ENIGMA_MACHINE = event.register('enigma_machine')
            .withItemInputs()
            .withFluidInputs()
            .withItemOutputs()

})

MIMachineEvents.registerCasings(event => {
    event.registerBlockImitation("treated_wood_casing", "immersiveengineering:basic_engineering");
})

MIMachineEvents.registerMachines(event => {
    
    const enigmaMachineShape = event.layeredShape('treated_wood_casing', [
            ['           ','           ','           ','           ','           ','           '],
            ['    PPP    ','    SSS    ','           ','           ','           ','           '],
            ['  PPPPPPP  ','  MM   MM  ','           ','           ','           ','           '],
            ['  PPPPPPP  ','  M     M  ','           ','           ','           ','           '],
            [' PPPMMMPPP ',' S  HLH  S ','    B B    ','    B B    ','    BBB    ','    SMS    '],
            [' PPPMMMPPP ',' S  LGL  S ','     G     ','     G     ','    BGB    ','    MMM    '],
            [' PPPMMMPPP ',' S  H#H  S ','    B B    ','    B B    ','    BBB    ','    SMS    '],
            ['  PPPPPPP  ','  M     M  ','           ','           ','           ','           '],
            ['  PPPPPPP  ','  MM   MM  ','           ','           ','           ','           '],
            ['    PPP    ','    SSS    ','           ','           ','           ','           '],
            ['           ','           ','           ','           ','           ','           '],
        ])
            .key('M', event.memberOfBlock('immersiveengineering:sheetmetal_steel'),event.noHatch())
            .key('P', event.memberOfBlock('immersiveengineering:treated_wood_horizontal'),event.noHatch())
            .key('H', event.memberOfBlock('immersiveengineering:basic_engineering'),event.hatchOf('energy_input', 'item_input', 'item_output','fluid_input'))
            .key('S', event.memberOfBlock('immersiveengineering:slab_sheetmetal_steel'),event.noHatch())
            .key('L', event.memberOfBlock('immersiveengineering:logic_unit'),event.noHatch())
            .key('B', event.memberOfBlock('xkdeco:hollow_steel_beam'),event.noHatch())
            .key('G', event.memberOfBlock('ae2:quartz_vibrant_glass'),event.noHatch())
            .build()

        event.simpleElectricCraftingMultiBlock(
            'Enigma machine', 'enigma_machine', ENIGMA_MACHINE, enigmaMachineShape,
            event.progressBar(60, 29, 'arrow'),
            itemInputs => itemInputs.addSlots(40, 15, 1, 3), itemOutputs => itemOutputs.addSlots(86, 32,1,1),
            fluidInputs => fluidInputs.addSlot(22,33), fluidOutputs => {},
            'treated_wood_casing', 'enigma_overlays', true, false, false
        )
})