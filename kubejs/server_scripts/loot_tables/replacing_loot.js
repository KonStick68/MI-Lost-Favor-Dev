LootJS.modifiers(event => {

    const items_for_replace = [
        {item: "minecraft:iron_ingot", replace_item: "minecraft:raw_iron"},
        {item: "minecraft:gold_ingot", replace_item: "minecraft:raw_gold"},
    ]

        items_for_replace.forEach(item => {
            event
                .addTableModifier(/.*chests.*/)
                .replaceLoot(item.item, item.replace_item, true)

            event
                .addTableModifier(/.*entities.*/)
                .replaceLoot(item.item, item.replace_item, true)
        });
})