// Server Script Folder -> file.js (arbitrary file name).

const item_interact_block = [
    {id: "lootr_chest", item: "lootr:lootr_chest"},
    {id: "lootr_barrel", item: "lootr:lootr_barrel"},
    {id: "lootr_shulker", item: "lootr:lootr_shulker"},
    {id: "lootr_trapped_chest", item: "lootr:lootr_trapped_chest"},
    {id: "blast_furnace", item: "minecraft:blast_furnace"},
]


item_interact_block.forEach(element => {
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
});

