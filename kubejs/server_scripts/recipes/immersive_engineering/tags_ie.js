// Remove & add tags from IE items
ServerEvents.tags('item', event => {

    event.removeAllTagsFrom([
        /immersiveengineering:.*coke.*/,
        /immersiveengineering:plate.*/,
        /immersiveengineering:wire.*/,
        /immersiveengineering:stick.*/,
        /immersiveengineering:dust.*/,
        /immersiveengineering:ingot.*/,
        /immersiveengineering:raw.*/,
        /immersiveengineering:nugget.*/,
        'immersiveengineering:deepslate_ore_silver',
        'immersiveengineering:ore_silver',
        'immersiveengineering:ore_aluminum', 
        'immersiveengineering:deepslate_ore_aluminum', 
        'immersiveengineering:ore_lead', 
        'immersiveengineering:deepslate_ore_lead', 
        'immersiveengineering:ore_silver', 
        'immersiveengineering:ore_nickel', 
        'immersiveengineering:deepslate_ore_silver', 
        'immersiveengineering:deepslate_ore_nickel', 
        'immersiveengineering:ore_uranium', 
        'immersiveengineering:deepslate_ore_uranium'
    
    ])

    event.add('c:rods/treated_wood','immersiveengineering:stick_treated')

})

ServerEvents.tags('block', event => {
    event.removeAllTagsFrom([
        /immersiveengineering:.*coke.*/,
        /immersiveengineering:plate.*/,
        /immersiveengineering:wire.*/,
        /immersiveengineering:stick.*/,
        /immersiveengineering:dust.*/,
        /immersiveengineering:ingot.*/,
        /immersiveengineering:raw.*/,
        /immersiveengineering:nugget.*/,
        'immersiveengineering:deepslate_ore_silver',
        'immersiveengineering:ore_silver',
        'immersiveengineering:ore_aluminum', 
        'immersiveengineering:deepslate_ore_aluminum', 
        'immersiveengineering:ore_lead', 
        'immersiveengineering:deepslate_ore_lead', 
        'immersiveengineering:ore_silver', 
        'immersiveengineering:ore_nickel', 
        'immersiveengineering:deepslate_ore_silver', 
        'immersiveengineering:deepslate_ore_nickel', 
        'immersiveengineering:ore_uranium', 
        'immersiveengineering:deepslate_ore_uranium'
    
    ])
})

// Remove & add tags from IE fluids
// ServerEvents.tags('fluid', event => {

//     event.removeAllTagsFrom([
//         'immersiveengineering:ethanol',
//         'immersiveengineering:biodiesel'
//     ])
// })
