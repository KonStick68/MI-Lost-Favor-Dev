StartupEvents.registry("block", (event) => {
    


    event.create('test_sample')
        .hardness(0.2)
        .defaultCutout()
        .box(4, 0, 4, 12, 6, 12, true)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .property(BlockProperties.WATERLOGGED)
        // .item(item =>
        //     item.modelJson({
        //         parent: 'minecraft:item/generated',
        //         textures: {
        //             layer0: 'kubejs:block/terrasteel_cluster',
        //         },
        //     })
        // )
    
})