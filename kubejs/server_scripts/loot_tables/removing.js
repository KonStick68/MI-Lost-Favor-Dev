LootJS.modifiers(event => {

    const removed_items = [
        /artifacts:.*/,
        "forbidden_arcanus:aureal_bottle",
        "ars_nouveau:source_gem",
        "ars_nouveau:sourceberry_bush",
        "ars_nouveau:drygmy_shard",
        "ars_nouveau:starbuncle_shards",
        "ars_nouveau:wilden_horn",
        "ars_nouveau:whirlisprig_shards",
        "ars_nouveau:wilden_wing",
        "ars_nouveau:wixie_shards",
        "ars_elemental:siren_shards",
        "ars_nouveau:alakarkinos_token",
        "ars_nouveau:amplify_arrow",
        "ars_nouveau:split_arrow",
        "ars_nouveau:pierce_arrow",
        "ars_nouveau:warp_scroll",
        'ars_nouveau:ritual_burrowing', 
        'ars_nouveau:ritual_challenge', 
        'ars_nouveau:ritual_binding', 
        'ars_nouveau:ritual_awakening', 
        'ars_nouveau:ritual_disintegration', 
        'ars_nouveau:ritual_sunrise', 
        'ars_elemental:ritual_tesla_coil', 
        'ars_elemental:ritual_squirrels', 
        'ars_elemental:ritual_attraction', 
        'ars_nouveau:ritual_conjure_island_plains', 
        'ars_nouveau:ritual_flight', 
        'ars_nouveau:ritual_cloudshaping', 
        'ars_elemental:ritual_repulsion', 
        'ars_nouveau:ritual_restoration', 
        'ars_nouveau:ritual_animal_summon', 
        'ars_nouveau:ritual_forestation', 
        'ars_nouveau:ritual_warping', 
        'ars_nouveau:ritual_moonfall', 
        'ars_nouveau:ritual_containment', 
        'ars_nouveau:ritual_scrying', 
        'ars_nouveau:ritual_gravity', 
        'ars_nouveau:ritual_flowering', 
        'ars_elemental:ritual_archwood_forest', 
        'ars_nouveau:ritual_sanctuary', 
        'ars_elemental:ritual_detection', 
        'ars_nouveau:ritual_fertility', 
        'ars_nouveau:ritual_overgrowth', 
        'ars_elemental:ritual_archwood_forestation', 
        'ars_nouveau:ritual_conjure_island_desert', 
        'ars_nouveau:ritual_harvest', 
        'ars_nouveau:ritual_wilden_summon',
    ]


    removed_items.forEach(item => {
        event
        .addTableModifier(LootType.CHEST, LootType.ENTITY, LootType.FISHING)
        .removeLoot(item)
    });
    

})