ServerEvents.recipes(event => {
    event.custom({
        "type": "extended_industrialization:alloy_smelter",
        "duration": 200,
        "eu": 4,
        "item_inputs": [
            {
                "type": "neoforge:compound",
                "amount": 1,
                "children": [
                    {
                        "tag": "c:dusts/nickel"
                    },
                    {
                        "tag": "c:ingots/nickel"
                    }
                ]
            },
            {
                "type": "neoforge:compound",
                "amount": 1,
                "children": [
                    {
                        "tag": "c:dusts/copper"
                    },
                    {
                        "tag": "c:ingots/copper"
                    }
                ]
            }
        ],
        "item_outputs": [
            {
                "amount": 2,
                "item": "modern_industrialization:constantan_ingot"
            }
        ]
    })

    event.custom({
        "type": "extended_industrialization:alloy_smelter",
        "duration": 200,
        "eu": 4,
        "item_inputs": [
            {
                "type": "neoforge:compound",
                "amount": 9,
                "children": [
                    {
                        "tag": "c:tiny_dusts/nickel"
                    },
                    {
                        "tag": "c:nuggets/nickel"
                    }
                ]
            },
            {
                "type": "neoforge:compound",
                "amount": 9,
                "children": [
                    {
                        "tag": "c:tiny_dusts/copper"
                    },
                    {
                        "tag": "c:nuggets/copper"
                    }
                ]
            }
        ],
        "item_outputs": [
            {
                "amount": 2,
                "item": "modern_industrialization:constantan_ingot"
            }
        ]
    })

    event.recipes.extended_industrialization.alloy_smelter(4, 400)
    .itemIn("2x #c:glass_blocks")
    .itemIn("#c:dusts/iron")
    .itemOut("2x immersiveengineering:insulating_glass")
})