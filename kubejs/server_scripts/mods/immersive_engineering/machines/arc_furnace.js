ServerEvents.recipes(event => {

    event.custom({
        "type": "immersiveengineering:arc_furnace",
        "additives": [],
        "energy": 102400,
        "input": {
            "tag": "c:ores/aluminum"
        },
        "results": [
            {
                "basePredicate": {
                    "tag": "c:ingots/aluminum"
                },
                "count": 2
            }
        ],
        "slag": {
            "tag": "c:slag"
        },
        "time": 200
    })

    event.custom({
            "type": "immersiveengineering:arc_furnace",
            "additives": [
                {
                    "item": "pastel:bottle_of_fading"
                },
                {
                    "item": "pastel:light_blue_pigment",
                    "count": 16
                }
            ],
            "energy": 500163,
            "input": {
                "item": "ae2:mysterious_cube"
            },
            "results": [
                {
                    "item": "ae2:controller"
                },
                {
                    "item": "ae2:terminal"
                },
                {
                    "item" : "kubejs:blueprint_pack"
                }
            ],

            "slag": {
                "item": "pastel:vegetal"
            },
            "time": 200
    })
})