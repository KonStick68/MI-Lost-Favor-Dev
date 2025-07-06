const mob_early = [
    {id:"creeper", mob: "minecraft:creeper"},
    {id:"zombie", mob: "minecraft:zombie"},
    {id:"zombie_villager", mob: "minecraft:zombie_villager"},
    {id:"enderman", mob: "minecraft:enderman"},
    {id:"spider", mob: "minecraft:spider"},
    {id:"slime", mob: "minecraft:slime"},
    {id:"skeleton", mob: "minecraft:skeleton"},
    {id:"witch", mob: "minecraft:witch"},
    {id:"whirlisprig", mob: "ars_nouveau:whirlisprig"},
    {id:"starbuncle", mob: "ars_nouveau:starbuncle"},
    {id:"drygmy", mob: "ars_nouveau:drygmy"},
    {id:"pillager", mob: "minecraft:pillager"},
    {id:"phantom", mob: "minecraft:phantom"},
]

mob_early.forEach(mob => {
    AStages.addRestrictionForMob(`astages/mob_early_${mob.id}`, "mob_early",  mob.mob)
        .setEnableMobSpawning(false)
});
