ServerEvents.recipes(event => {
    // (`･Θ･´) - Some recipes are located in data because it is easier to change a recipe there and delete the previous recipe at the same time (overwrite)
    event.remove({
        output: [
            'ytech:tin_plate',
            'ytech:lead_plate',
            'ytech:copper_plate',
            'ytech:golden_plate',
            'ytech:bronze_plate',
            'ytech:iron_plate',
            'ytech:tin_block',
            'ytech:lead_block',
            'ytech:bronze_block',
            'ytech:raw_galena_block',
            'ytech:raw_cassiterite_block',
            // 'ytech:bronze_anvil',
        ]
    })

    // event.remove({type: "ytech:hammering"})

    event.replaceInput({ input: 'ytech:crushed_copper' }, 'ytech:crushed_copper', 'modern_industrialization:copper_dust')
    event.replaceInput({ input: 'ytech:crushed_gold' }, 'ytech:crushed_gold', 'modern_industrialization:gold_dust')
    event.replaceInput({ input: 'ytech:crushed_iron' }, 'ytech:crushed_iron', 'modern_industrialization:iron_dust')
    event.replaceInput({ input: 'ytech:crushed_galena' }, 'ytech:crushed_galena', 'modern_industrialization:lead_dust')
    event.replaceInput({ input: 'ytech:crushed_cassiterite' }, 'ytech:crushed_cassiterite', 'modern_industrialization:tin_dust')
    event.replaceInput({ input: 'ytech:raw_galena' }, 'ytech:raw_galena', 'modern_industrialization:raw_lead')
    event.replaceInput({ input: 'ytech:raw_cassiterite' }, 'ytech:raw_cassiterite', 'modern_industrialization:raw_tin')
    event.replaceOutput({ output: 'ytech:crushed_gold' }, 'ytech:crushed_gold', 'modern_industrialization:gold_dust')
    event.replaceOutput({ output: 'ytech:crushed_cassiterite' }, 'ytech:crushed_cassiterite', 'modern_industrialization:tin_dust')
    event.replaceOutput({ output: 'ytech:crushed_galena' }, 'ytech:crushed_galena', 'modern_industrialization:lead_dust')
    event.replaceOutput({ output: 'ytech:crushed_copper' }, 'ytech:crushed_copper', 'modern_industrialization:copper_dust')
    event.replaceOutput({ output: 'ytech:crushed_iron' }, 'ytech:crushed_iron', 'modern_industrialization:iron_dust')
    event.replaceOutput({ output: 'ytech:bronze_ingot' }, 'ytech:bronze_ingot', 'modern_industrialization:bronze_ingot')
    event.replaceOutput({ output: 'ytech:tin_ingot' }, 'ytech:tin_ingot', 'modern_industrialization:tin_ingot')
    event.replaceOutput({ output: 'ytech:lead_ingot' }, 'ytech:lead_ingot', 'modern_industrialization:lead_ingot')
    event.replaceOutput({ output: 'ytech:tin_rod' }, 'ytech:tin_rod', 'modern_industrialization:tin_rod')
    event.replaceOutput({ output: 'ytech:copper_rod' }, 'ytech:copper_rod', 'modern_industrialization:copper_rod')
    event.replaceOutput({ output: 'ytech:golden_rod' }, 'ytech:golden_rod', 'modern_industrialization:gold_rod')
    event.replaceOutput({ output: 'ytech:iron_rod' }, 'ytech:iron_rod', 'modern_industrialization:iron_rod')
    event.replaceOutput({ output: 'ytech:lead_rod' }, 'ytech:lead_rod', 'modern_industrialization:lead_rod')
    event.replaceOutput({ output: 'ytech:bronze_rod' }, 'ytech:bronze_rod', 'modern_industrialization:bronze_rod')
    event.replaceOutput({ output: 'ytech:golden_bolt' }, 'ytech:golden_bolt', 'modern_industrialization:gold_bolt')
    event.replaceOutput({ output: 'ytech:copper_bolt' }, 'ytech:copper_bolt', 'modern_industrialization:copper_bolt')
    event.replaceOutput({ output: 'ytech:iron_bolt' }, 'ytech:iron_bolt', 'modern_industrialization:iron_bolt')
    event.replaceOutput({ output: 'ytech:lead_bolt' }, 'ytech:lead_bolt', 'modern_industrialization:lead_bolt')
    event.replaceOutput({ output: 'ytech:tin_bolt' }, 'ytech:tin_bolt', 'modern_industrialization:tin_bolt')
    event.replaceOutput({ output: 'ytech:bronze_bolt' }, 'ytech:bronze_bolt', 'modern_industrialization:bronze_bolt')


})