const early_mobs = [
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
    {id:"koboleton", mob: "cataclysm:koboleton"},
    {id:"stray", mob: "minecraft:stray"},
    {id:"husk", mob: "minecraft:husk"},
    {id:"bogged", mob: "minecraft:bogged"},
    {id:"drowned", mob: "minecraft:drowned"},
    {id:"wandering_trader", mob: "minecraft:wandering_trader"},
    {id:"cave_spider", mob: "minecraft:cave_spider"},
    {id:"corrupt_lost_soul", mob: "forbidden_arcanus:corrupt_lost_soul"},
    {id:"lost_soul", mob: "forbidden_arcanus:lost_soul"},
    {id:"enchanted_lost_soul", mob: "forbidden_arcanus:enchanted_lost_soul"},
]

early_mobs.forEach(mob => {
    AStages.addRestrictionForMob(`astages/early_mobs_${mob.id}`, "early_mobs",  mob.mob)
        .setEnableMobSpawning(false)
});
