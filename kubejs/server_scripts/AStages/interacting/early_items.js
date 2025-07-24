const item_interact_block = [
    { id: "lootr_chest", item: "lootr:lootr_chest" },
    { id: "lootr_barrel", item: "lootr:lootr_barrel" },
    { id: "lootr_shulker", item: "lootr:lootr_shulker" },
    { id: "lootr_trapped_chest", item: "lootr:lootr_trapped_chest" },
    { id: "blast_furnace", item: "minecraft:blast_furnace" },
    { id: "crate", item: "immersiveengineering:crate" }
]

const entity_interact_block = [
    { id: "gatekeeper", entity: "eternal_starlight:the_gatekeeper", langKey: "entity.eternal_starlight.the_gatekeeper" },
    { id: "villager", entity: "minecraft:villager", langKey: "entity.minecraft.villager" },
    { id: "wandering_trader", entity: "minecraft:wandering_trader", langKey: "entity.minecraft.wandering_trader" },
    { id: "armor_stand", entity: "minecraft:armor_stand", langKey: "entity.minecraft.armor_stand", customeText: "milf.text.entity.interact.part2" },
    { id: "lootr_minecart", entity: "lootr:lootr_minecart", langKey: "entity.lootr.lootr_minecart", customeText: "milf.text.entity.interact.part2" },
]


item_interact_block.forEach(element => {
    let itemName = Item.of(element.item).hoverName



    AStages.addRestrictionForItem(`astages/${element.id}`, "early_items", element.item)
        .setPickUpDelay(60)
        .setCanAttack(false)
        .setCanBeStoredInInventory(false)
        .setCanBeEquipped(false)
        .setCanPickedUp(false)
        .setCanBePlaced(false)
        .setCanItemBeLeftClicked(false)
        .setCanItemBeRightClicked(false)
        .setCanInteractWithBlock(false)
        .setUsageMessage(() => Text.of(
            [
                [
                    Text.translate("milf.text.entity.interact.part2").gray(),
                    itemName
                ]
            ]
        ).darkGray())
});

entity_interact_block.forEach(element => {
    if (element.customeText) {
        AStages.addRestrictionForMob(`astages/${element.id}`, "early_items", element.entity)
            .setInteractionMessage(() => Text.of(
                [
                    Text.translate(element.customeText).gray(),
                    Text.translate(element.langKey).darkGray(),
                ]
            ))
            .setCanBeRightClicked(false)
    }
    else {
        AStages.addRestrictionForMob(`astages/${element.id}`, "early_items", element.entity)
            .setInteractionMessage(() => Text.of(
                [
                    Text.translate("milf.text.entity.interact.part0").gray(),
                    Text.translate(element.langKey).darkGray(),
                    Text.translate("milf.text.entity.interact.part1").gray()
                ]
            ))
            .setCanBeRightClicked(false)
    }

});