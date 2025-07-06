// Remove & add tags from IE items
ServerEvents.tags('item', event => {

    event.removeAllTagsFrom([
        'immersiveengineering:ethanol_bucket',
        'immersiveengineering:biodiesel_bucket',
        /immersiveengineering:.*coke.*/,
        /immersiveengineering:plate.*/,
        /immersiveengineering:wire.*/,
        /immersiveengineering:stick.*/,
        /immersiveengineering:dust.*/,
        /immersiveengineering:ingot.*/,
        /immersiveengineering:raw.*/,
        /immersiveengineering:nugget.*/,
        'immersiveengineering:deepslate_ore_silver',
        'immersiveengineering:ore_silver'
       
    ])

    event.add('c:rods/treated_wood','immersiveengineering:stick_treated')

})

ServerEvents.tags('block', event => {

    event.removeAllTagsFrom([
        'immersiveengineering:ethanol_bucket',
        'immersiveengineering:biodiesel_bucket',
        /immersiveengineering:.*coke.*/,
        /immersiveengineering:plate.*/,
        /immersiveengineering:wire.*/,
        /immersiveengineering:stick.*/,
        /immersiveengineering:dust.*/,
        /immersiveengineering:ingot.*/,
        /immersiveengineering:raw.*/,
        /immersiveengineering:nugget.*/,
        'immersiveengineering:deepslate_ore_silver',
        'immersiveengineering:ore_silver'
       
    ])

    event.add('c:rods/treated_wood','immersiveengineering:stick_treated')

})

// Remove & add tags from IE fluids
ServerEvents.tags('fluid', event => {

    event.removeAllTagsFrom([
        'immersiveengineering:ethanol',
        'immersiveengineering:biodiesel'
    ])
})
