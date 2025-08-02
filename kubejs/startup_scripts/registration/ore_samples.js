StartupEvents.registry('block', event => {

    const ore_list = [
        { displayName: "Iron", itemName: "iron" },
        { displayName: "Gold", itemName: "gold" },
        { displayName: "Diamond", itemName: "diamond" },
        { displayName: "Copper", itemName: "copper" },
        { displayName: "Coal", itemName: "coal" },
        { displayName: "Emerald", itemName: "emerald" },
        { displayName: "Lapis", itemName: "lapis" },
        { displayName: "Redstone", itemName: "redstone" },
        { displayName: "Ancient Debris", itemName: "ancient_debris" },
        { displayName: "Nether Quartz", itemName: "nether_quartz" },
        { displayName: "Nether Gold", itemName: "nether_gold" },
        { displayName: "Antimony", itemName: "antimony" },
        { displayName: "Bauxite", itemName: "bauxite" },
        { displayName: "Iridium", itemName: "iridium" },
        { displayName: "Lead", itemName: "lead" },
        { displayName: "Monazite", itemName: "monazite" },
        { displayName: "Nickel", itemName: "nickel" },
        { displayName: "Platinum", itemName: "platinum" },
        { displayName: "Salt", itemName: "salt" },
        { displayName: "Quartz", itemName: "quartz" },
        { displayName: "Tin", itemName: "tin" },
        { displayName: "Titanium", itemName: "titanium" },
        { displayName: "Tungsten", itemName: "tungsten" },
        { displayName: "Uranium", itemName: "uranium" },
    ]

    ore_list.forEach(ore => {
        event
            .create(`kubejs:${ore.itemName}_ore_sample`, 'cardinal')
            .displayName(`${ore.displayName} Ore Sample`)
            .defaultCutout()
            .box(4, 0, 3, 9, 5, 8, true)
            .box(4, 0, 10, 8, 2, 14, true)
            .box(8, 0, 7, 12, 3, 11, true)
            .soundType('stone')
            .property(BlockProperties.WATERLOGGED)
            .tagBlock('minecraft:mineable/pickaxe')
    });

})