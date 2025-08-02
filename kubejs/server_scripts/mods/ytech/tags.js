ServerEvents.tags('item', event => {
        event.removeAllTagsFrom([
            'ytech:tin_plate', 
            'ytech:lead_plate', 
            'ytech:copper_plate', 
            'ytech:golden_plate', 
            'ytech:bronze_plate', 
            'ytech:iron_plate',
            'ytech:lead_ingot', 
            'ytech:tin_ingot', 
            'ytech:bronze_ingot',
            'ytech:bronze_rod', 
            'ytech:tin_rod', 
            'ytech:lead_rod', 
            'ytech:copper_rod', 
            'ytech:golden_rod', 
            'ytech:iron_rod',
            'ytech:golden_bolt', 
            'ytech:iron_bolt', 
            'ytech:bronze_bolt', 
            'ytech:copper_bolt', 
            'ytech:tin_bolt', 
            'ytech:lead_bolt',
            'ytech:bronze_block',
            'ytech:tin_block',
            
        ])

        event.add('modern_industrialization:forge_hammer_tools', [
            'ytech:bronze_hammer', 
            'ytech:lead_hammer', 
            'ytech:copper_hammer', 
            'ytech:iron_hammer', 
            'ytech:iron_hammer', 
            'ytech:stone_hammer', 
            'ytech:golden_hammer', 
            'ytech:tin_hammer'
        ])

})