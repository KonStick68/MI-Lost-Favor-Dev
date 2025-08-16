const ores = [
    {stage: "tier_1_access_ore", id: "ore_redstone", origin: "minecraft:redstone_ore", replace: "minecraft:stone"},
    {stage: "tier_1_access_ore", id: "ore_deepslate_redstone", origin: "minecraft:deepslate_redstone_ore", replace: "minecraft:deepslate"},
    {stage: "tier_1_access_ore", id: "ore_emerald", origin: "minecraft:emerald_ore", replace: "minecraft:stone"},
    {stage: "tier_1_access_ore", id: "ore_deepslate_emerald", origin: "minecraft:deepslate_emerald_ore", replace: "minecraft:deepslate"},
    {stage: "tier_1_access_ore", id: "ore_lapis", origin: "minecraft:lapis_ore", replace: "minecraft:stone"},
    {stage: "tier_1_access_ore", id: "ore_deepslate_lapis", origin: "minecraft:deepslate_lapis_ore", replace: "minecraft:deepslate"},
    {stage: "tier_1_access_ore", id: "ore_diamond", origin: "minecraft:diamond_ore", replace: "minecraft:stone"},
    {stage: "tier_1_access_ore", id: "ore_deepslate_diamond", origin: "minecraft:deepslate_diamond_ore", replace: "minecraft:deepslate"},
    {stage: "tier_1_access_ore", id: "ore_gold", origin: "minecraft:gold_ore", replace: "minecraft:stone"},
    {stage: "tier_1_access_ore", id: "ore_raw_gold", origin: "minecraft:raw_gold_block", replace: "minecraft:stone"}, 
    {stage: "tier_1_access_ore", id: "ore_deepslate_gold", origin: "minecraft:deepslate_gold_ore", replace: "minecraft:deepslate"},
    {stage: "tier_1_access_ore", id: "ore_ancient_silver", origin: "toxony:ancient_silver", replace: "minecraft:deepslate"},
    {stage: "tier_1_access_ore", id: "ore_antimony", origin: "modern_industrialization:antimony_ore", replace: "minecraft:stone"},
    {stage: "tier_1_access_ore", id: "ore_deepslate_antimony", origin: "modern_industrialization:deepslate_antimony_ore", replace: "minecraft:deepslate"},
    {stage: "tier_1_access_ore", id: "ore_raw_antimony", origin: "modern_industrialization:raw_antimony_block", replace: "minecraft:stone"},
    {stage: "tier_1_access_ore", id: "ore_bauxite", origin: "modern_industrialization:bauxite_ore", replace: "minecraft:stone"},
    {stage: "tier_1_access_ore", id: "ore_deepslate_bauxite", origin: "modern_industrialization:deepslate_bauxite_ore", replace: "minecraft:deepslate"},
    {stage: "tier_1_access_ore", id: "ore_lead", origin: "modern_industrialization:lead_ore", replace: "minecraft:stone"},
    {stage: "tier_1_access_ore", id: "ore_raw_lead", origin: "modern_industrialization:raw_lead_block", replace: "minecraft:stone"},
    {stage: "tier_1_access_ore", id: "ore_deepslate_lead", origin: "modern_industrialization:deepslate_lead_ore", replace: "minecraft:deepslate"},
    {stage: "tier_1_access_ore", id: "ore_monazite", origin: "modern_industrialization:monazite_ore", replace: "minecraft:stone"},
    {stage: "tier_1_access_ore", id: "ore_deepslate_monazite", origin: "modern_industrialization:deepslate_monazite_ore", replace: "minecraft:deepslate"},
    {stage: "tier_1_access_ore", id: "ore_nickel", origin: "modern_industrialization:nickel_ore", replace: "minecraft:stone"},
    {stage: "tier_1_access_ore", id: "ore_deepslate_nickel", origin: "modern_industrialization:deepslate_nickel_ore", replace: "minecraft:deepslate"},
    {stage: "tier_1_access_ore", id: "ore_raw_nickel", origin: "modern_industrialization:raw_nickel_block", replace: "minecraft:stone"},
    {stage: "tier_1_access_ore", id: "ore_stone_quartz", origin: "modern_industrialization:quartz_ore", replace: "minecraft:stone"},
    {stage: "tier_1_access_ore", id: "nether_quartz_ore", origin: "minecraft:nether_quartz_ore", replace: "minecraft:netherrack"},
    {stage: "tier_1_access_ore", id: "ancient_debris", origin: "minecraft:ancient_debris", replace: "minecraft:netherrack"},
    {stage: "tier_1_access_ore", id: "ore_salt", origin: "modern_industrialization:salt_ore", replace: "minecraft:stone"},
    {stage: "tier_1_access_ore", id: "ore_deepslate_salt", origin: "modern_industrialization:deepslate_salt_ore", replace: "minecraft:deepslate"},

    {stage: "tier_2_access_ore", id: "ore_iridium", origin: "modern_industrialization:iridium_ore", replace: "minecraft:stone"},
    {stage: "tier_2_access_ore", id: "ore_raw_iridium", origin: "modern_industrialization:raw_iridium_block", replace: "minecraft:stone"},
    {stage: "tier_2_access_ore", id: "ore_deepslate_iridium", origin: "modern_industrialization:deepslate_iridium_ore", replace: "minecraft:deepslate"},
    {stage: "tier_2_access_ore", id: "ore_platinum", origin: "modern_industrialization:platinum_ore", replace: "minecraft:stone"},
    {stage: "tier_2_access_ore", id: "ore_raw_platinum", origin: "modern_industrialization:raw_platinum_block", replace: "minecraft:stone"},
    {stage: "tier_2_access_ore", id: "ore_titanium", origin: "modern_industrialization:titanium_ore", replace: "minecraft:stone"},
    {stage: "tier_2_access_ore", id: "ore_raw_titanium", origin: "modern_industrialization:raw_titanium_block", replace: "minecraft:stone"},
    {stage: "tier_2_access_ore", id: "ore_tungsten", origin: "modern_industrialization:tungsten_ore", replace: "minecraft:stone"},
    {stage: "tier_2_access_ore", id: "ore_deepslate_tungsten", origin: "modern_industrialization:deepslate_tungsten_ore", replace: "minecraft:deepslate"},
    {stage: "tier_2_access_ore", id: "ore_raw_tungsten", origin: "modern_industrialization:raw_tungsten_block", replace: "minecraft:stone"},
    {stage: "tier_2_access_ore", id: "ore_uranium", origin: "modern_industrialization:uranium_ore", replace: "minecraft:stone"},
    {stage: "tier_2_access_ore", id: "ore_deepslate_uranium", origin: "modern_industrialization:deepslate_uranium_ore", replace: "minecraft:deepslate"},
    {stage: "tier_2_access_ore", id: "ore_raw_uranium", origin: "modern_industrialization:raw_uranium_block", replace: "minecraft:stone"},
    // {id: "ore_deepslate_tin", origin: "modern_industrialization:deepslate_tin_ore", replace: "minecraft:deepslate"},
    // {id: "ore_tin", origin: "modern_industrialization:tin_ore", replace: "minecraft:stone"},
    // {id: "ore_raw_tin", origin: "modern_industrialization:raw_tin_block", replace: "minecraft:stone"},
    // {id: "ore_raw_iron", origin: "minecraft:raw_iron_block", replace: "minecraft:stone"},
    // {id: "ore_deepslate_iron", origin: "minecraft:deepslate_iron_ore", replace: "minecraft:deepslate"},
    // {id: "ore_iron", origin: "minecraft:iron_ore", replace: "minecraft:stone"},
    // {id: "ore_deepslate_copper", origin: "minecraft:deepslate_copper_ore", replace: "minecraft:deepslate"},
    // {id: "ore_raw_copper", origin: "minecraft:raw_copper_block", replace: "minecraft:stone"},
    // {id: "ore_copper", origin: "minecraft:copper_ore", replace: "minecraft:stone"},
    // {id: "ore_coal", origin: "minecraft:coal_ore", replace: "minecraft:stone"},
    // {id: "ore_deepslate_coal", origin: "minecraft:deepslate_coal_ore", replace: "minecraft:deepslate"},
    // {id: "ore_lignite_coal", origin: "modern_industrialization:lignite_coal_ore", replace: "minecraft:stone"},
    // {id: "ore_deepslate_lignite_coal", origin: "modern_industrialization:deepslate_lignite_coal_ore", replace: "minecraft:deepslate"},
    // {id: "ore_coal_block", origin: "minecraft:coal_block", replace: "minecraft:stone"},
    // {id: "ore_lignite_coal_block", origin: "modern_industrialization:lignite_coal_block", replace: "minecraft:stone"},
]
ores.forEach(element => {
    AStages.addRestrictionForOre(`astages/ore_${element.id }`, element.stage, element.origin, element.replace) 
});

const facing = [
    { id: 'north', direction: Facing.NORTH },
    { id: 'east', direction: Facing.EAST },
    { id: 'south', direction: Facing.SOUTH },
    { id: 'west', direction: Facing.WEST }
]

const ore_samples = [
    {stage: "tier_1_access_ore", sample_name: "gold"},
    {stage: "tier_1_access_ore", sample_name: "diamond"},
    {stage: "tier_1_access_ore", sample_name: "emerald"},
    {stage: "tier_1_access_ore", sample_name: "lapis"},
    {stage: "tier_1_access_ore", sample_name: "redstone"},
    {stage: "tier_1_access_ore", sample_name: "ancient_debris"},
    {stage: "tier_1_access_ore", sample_name: "nether_quartz"},
    {stage: "tier_1_access_ore", sample_name: "nether_gold"},
    {stage: "tier_1_access_ore", sample_name: "antimony"},
    {stage: "tier_1_access_ore", sample_name: "bauxite"},
    {stage: "tier_1_access_ore", sample_name: "iridium"},
    {stage: "tier_1_access_ore", sample_name: "lead"},
    {stage: "tier_1_access_ore", sample_name: "monazite"},
    {stage: "tier_1_access_ore", sample_name: "nickel"},
    {stage: "tier_1_access_ore", sample_name: "platinum"},
    {stage: "tier_1_access_ore", sample_name: "salt"},
    {stage: "tier_1_access_ore", sample_name: "quartz"},
    {stage: "tier_2_access_ore", sample_name: "titanium"},
    {stage: "tier_2_access_ore", sample_name: "tungsten"},
    {stage: "tier_2_access_ore", sample_name: "uranium"},
]

ore_samples.forEach(element => {
    facing.forEach(facing => {
        AStages.addRestrictionForOre(
            `astages/samples/${element.sample_name}_sample_${facing.id}`, 
            element.stage, 
            Block.getBlock(`kubejs:${element.sample_name}_ore_sample`).defaultBlockState().setValue(BlockProperties.HORIZONTAL_FACING, facing.direction), 
            "rocks:rock"
        ) 
    })
})