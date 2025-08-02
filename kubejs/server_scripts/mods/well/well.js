ServerEvents.recipes(event => {

    event.remove({ id: "well:well" })

    event.recipes.ytech.workspace_crafting(
        "well:well",
        '#c:hammers',
        {
            top: [
                "CCC",
                "CCC",
                "CCC"
            ],
            middle: [
                "   ",
                "BWB",
                "   "
            ],
            bottom: [
                "RRR",
                "RQR",
                "RRR"
            ]
        },
        {
            B: '#minecraft:fences',
            C: 'minecraft:bricks',
            R: 'minecraft:stone_bricks',
            Q: 'minecraft:cauldron',
            W: 'minecraft:lead'
        }
    )

})