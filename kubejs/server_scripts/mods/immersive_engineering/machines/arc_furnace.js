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
    //ae2 stuff

    //starter pack
    event.custom({
            "type": "immersiveengineering:arc_furnace",
            "additives": [
                {
                    "basePredicate": {
                        "item": "pastel:bottle_of_fading"
                    },
                    "count": 4
                },
                {
                    "basePredicate": {
                        "item": "pastel:light_blue_pigment",
                    },
                    "count": 32
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
                "basePredicate": {
                    "item": "pastel:vegetal"
                },
                "count": 4
            },
            "time": 200
    })

    //quartz_glass
    event.custom({
            "type": "immersiveengineering:arc_furnace",
            "additives": [
                {
                    "basePredicate": {
                        "tag": "c:dusts/certus_quartz"
                    },
                    "count": 7
                },
                {
                    "basePredicate": {
                        "tag": "c:dusts/quartz",
                    },
                    "count": 2
                }
            ],
            "energy": 500163,
            "input": {
                "basePredicate": {
                    "tag": "c:glass_blocks"
                },
                "count" : 6
            },
            "results": [
                {
                    "basePredicate": {
                        "item": "ae2:quartz_glass"
                    },
                    "count" : 6
                },
            ],

            "slag": {
                "basePredicate": {
                    "item": "extendedae:quartz_blend"
                },
                "count": 3
            },
            "time": 200
    })

    //vibrant_quartz_glass
    event.custom({
            "type": "immersiveengineering:arc_furnace",
            "additives": [
                {
                    "basePredicate": {
                        "tag": "c:dusts/certus_quartz"
                    },
                    "count": 7
                },
                {
                    "basePredicate": {
                        "tag": "c:dusts/quartz",
                    },
                    "count": 2
                },
                {
                    "basePredicate": {
                        "item": "pastel:shimmerstone_gem",
                    },
                    "count": 12
                }            ],
            "energy": 500163,
            "input": {
                "basePredicate": {
                    "tag": "c:glass_blocks"
                },
                "count" : 6
            },
            "results": [
                {
                    "basePredicate": {
                        "item": "ae2:quartz_vibrant_glass"
                    },
                    "count" : 6
                },
            ],

            "slag": {
                "basePredicate": {
                    "item": "extendedae:quartz_blend"
                },
                "count": 3
            },
            "time": 200
    })


})