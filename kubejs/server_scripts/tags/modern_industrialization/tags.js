ServerEvents.tags('item', event => {
    event.removeAllTagsFrom(
        [
            'modern_industrialization:netherite_hammer', 
            'modern_industrialization:steel_hammer', 
            'modern_industrialization:diamond_hammer', 
            'modern_industrialization:iron_hammer'
        ])
    event.add('c:bolts', [
        'modern_industrialization:iron_bolt', 
        'modern_industrialization:gold_bolt', 
        'modern_industrialization:invar_bolt', 
        'modern_industrialization:steel_bolt', 
        'modern_industrialization:tin_bolt', 
        'modern_industrialization:stainless_steel_bolt', 
        'modern_industrialization:aluminum_bolt', 
        'modern_industrialization:titanium_bolt', 
        'modern_industrialization:copper_bolt',
        'modern_industrialization:lead_bolt',
        'modern_industrialization:bronze_bolt'
    ])

    event.add('c:bolts', 'modern_industrialization:bronze_bolt')

    const mi_material_for_tags = ['gold', 'copper', 'invar', 'iron', 'stainless_steel', 'steel', 'tin', 'titanium', 'aluminum', 'bronze', 'lead']

    mi_material_for_tags.forEach(element => {
        event.add(`c:bolts/${element}`, `modern_industrialization:${element}_bolt`)
    });
    


})