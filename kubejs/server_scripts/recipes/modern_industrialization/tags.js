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

    event.add('milf:coke_coal', [
        'modern_industrialization:coke', 
        'modern_industrialization:coke_block', 
        'modern_industrialization:coke_dust', 
    ])

    event.add('c:bolts', 'modern_industrialization:bronze_bolt')

    const mi_material_for_tags = ['gold', 'copper', 'invar', 'iron', 'stainless_steel', 'steel', 'tin', 'titanium', 'aluminum', 'bronze', 'lead']

    mi_material_for_tags.forEach(element => {
        event.add(`c:bolts/${element}`, `modern_industrialization:${element}_bolt`)
    });
    

    event.add('c:wires', /modern_industrialization:.*_wire/)
    event.add('c:wires/copper', 'modern_industrialization:copper_wire')
    event.add('c:wires/electrum', 'modern_industrialization:electrum_wire')
    event.add('c:wires/aluminum', 'modern_industrialization:aluminum_wire')
    event.add('c:wires/lead', 'modern_industrialization:lead_wire')
    event.add('c:wires/steel', 'modern_industrialization:steel_wire')
    event.add('c:storage_blocks/coal_coke', 'modern_industrialization:coke_block')
    event.add('c:coal_coke', 'modern_industrialization:coke')
    event.add('c:dusts/coal_coke', 'modern_industrialization:coke_dust')
    event.add('c:dusts/wood', 'modern_industrialization:wood_pulp')
    event.add('c:nuggets/netherite', 'modern_industrialization:netherite_nugget')
    event.add('c:rods/netherite', 'modern_industrialization:stick_netherite')


})