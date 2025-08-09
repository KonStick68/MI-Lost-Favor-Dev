ServerEvents.recipes(event => {

    var tier1bp = "Mysterious Blueprint"
    var tier2bp = "Storage Blueprint"
    var tier3bp = "Automation Blueprint"
    var tier4bp = "Quantum Blueprint"
    var tier5bp = "Divine Blueprint"

    var tier1token = "kubejs:mysterious_disk"
    var tier2token = "kubejs:storage_disk"
    var tier3token = "kubejs:automation_disk"
    var tier4token = "kubejs:quantum_disk"


    function token_bp(plates, rods, dust, output, bpTier) {
        event.custom({
            "type": "immersiveengineering:blueprint",
            "inputs": [
                {
                    "basePredicate": {
                        "tag": plates
                    },
                    "count": 2
                },
                {
                     "basePredicate": {
                        "tag": rods
                     },
                     "count": 4
                },
                {
                    "basePredicate": {
                        "tag": "c:dusts/certus_quartz"
                    },
                    "count": 6
                },
                {
                    "basePredicate": {
                        "tag": dust
                    },
                    "count": 6
                },
            ],
            "category": tier2bp,
            "result": {
                "item": output
            }
        })
    }

    //tokens
    token_bp("c:plates/aluminum", "c:rods/certus_quartz", "c:dusts/fluix", tier1token, tier2bp)
    token_bp("c:plates/aluminum", "c:rods/certus_quartz", "c:dusts/gold", tier2token, tier3bp)
    token_bp("c:plates/aluminum", "c:rods/certus_quartz", "c:dusts/aluminum", tier3token, tier4bp)
    token_bp("c:plates/aluminum", "c:rods/certus_quartz", "c:dusts/shattered_singularity", tier4token, tier5bp)

    //tier 1
    event.custom({
        "type": "immersiveengineering:blueprint",
        "inputs": [
            {
                "basePredicate": {
                    "item": "ae2:fluix_crystal"
                },
                "count": 3
            },
            {
                "item": "moderndynamics:item_pipe"
            },
        ],
        "category": tier1bp,
        "result": {
            "item": "ae2:fluix_glass_cable"
        }
    })

    event.custom({
          "type": "immersiveengineering:blueprint",
          "inputs": [
              {
                  "basePredicate": {
                      "item": "ae2:fluix_crystal"
                  },
                  "count": 5
              },
              {
                  "item": "modern_industrialization:advanced_item_input_hatch"
              },
              {
                  "item": "modern_industrialization:advanced_item_output_hatch"
              },
              {
                  "item": "moderndynamics:item_pipe"
              },
          ],
          "category": tier1bp,
          "result": {
              "item": "ae2:storage_bus"
          }
    })

    event.custom({
            "type": "immersiveengineering:blueprint",
            "inputs": [
                {
                    "basePredicate": {
                        "item": "ae2:certus_quartz_crystal"
                    },
                    "count": 4
                },
                {
                    "item": "ae2:terminal"
                },
                {
                    "item": "minecraft:crafting_table"
                },
                {
                    "item": "modern_industrialization:electronic_circuit"
                },
                {
                    "basePredicate": {
                        "item": "modern_industrialization:cupronickel_wire_magnetic"
                    },
                    "count": 8
                },
            ],
            "category": tier1bp,
            "result": {
                "item": "ae2:crafting_terminal"
            }
    })

    event.custom({
            "type": "immersiveengineering:blueprint",
            "inputs": [
                {
                    "basePredicate": {
                        "item": "modern_industrialization:certus_quartz_rod"
                    },
                    "count": 4
                },
                {
                    "item": "modern_industrialization:advanced_machine_hull"
                },
                {
                    "item": "modern_industrialization:electronic_circuit"
                },
                {
                    "basePredicate": {
                        "item": "modern_industrialization:copper_wire"
                    },
                    "count": 16
                },
            ],
            "category": tier1bp,
            "result": {
                "item": "ae2:charger"
            }
    })

    event.custom({
        "type": "immersiveengineering:blueprint",
        "inputs": [
            {
                "basePredicate": {
                    "item": "ae2:fluix_crystal"
                },
                "count": 4
            },
            {
                "item": "modern_industrialization:wrench"
            },
        ],
        "category": tier1bp,
        "result": {
            "item": "ae2:certus_quartz_wrench"
        }
    })

    //tier 2
    event.custom({
        "type": "immersiveengineering:blueprint",
        "inputs": [
            {
                "basePredicate": {
                    "tag": "c:plates/aluminum"
                },
                "count": 4
            },
            {
                 "basePredicate": {
                    "item": "modern_industrialization:certus_quartz_rod"
                 },
                 "count": 8
            },
            {
                "basePredicate": {
                    "tag": "c:ingots/steel"
                },
                "count": 2
            },
            {
                "basePredicate": {
                    "tag": "c:dusts/silicon"
                },
                "count": 2
            },
        ],
        "category": tier2bp,
        "result": {
            "item": "ae2:silicon_press"
        }
    })

    event.custom({
        "type": "immersiveengineering:blueprint",
        "inputs": [
            {
                "basePredicate": {
                    "tag": "c:plates/aluminum"
                },
                "count": 4
            },
            {
                 "basePredicate": {
                    "item": "modern_industrialization:certus_quartz_rod"
                 },
                 "count": 8
            },
            {
                "basePredicate": {
                    "tag": "c:ingots/steel"
                },
                "count": 2
            },
            {
                "basePredicate": {
                    "tag": "c:dusts/gold"
                },
                "count": 2
            },
        ],
        "category": tier2bp,
        "result": {
            "item": "ae2:logic_processor_press"
        }
    })

    event.custom({
        "type": "immersiveengineering:blueprint",
        "inputs": [
            {
                "basePredicate": {
                    "tag": "c:plates/aluminum"
                },
                "count": 16
            },
            {
                 "basePredicate": {
                    "item": "modern_industrialization:certus_quartz_rod"
                 },
                 "count": 12
            },
            {
                "basePredicate": {
                    "tag": "c:ingots/steel"
                },
                "count": 6
            },
            {
                "basePredicate": {
                    "tag": "c:dusts/certus_quartz"
                },
                "count": 4
            },
        ],
        "category": tier2bp,
        "result": {
            "item": "kubejs:cell_press"
        }
    })

    event.custom({
            "type": "immersiveengineering:blueprint",
            "inputs": [
                {
                    "basePredicate": {
                        "tag": "c:plates/aluminum"
                    },
                    "count": 2
                },
                {
                     "basePredicate": {
                        "item": "kubejs:cell_half"
                     },
                     "count": 2
                },
                {
                    "basePredicate": {
                        "tag": "c:bolts/aluminum"
                    },
                    "count": 8
                },
            ],
            "category": tier2bp,
            "result": {
                "item": 'ae2:item_cell_housing'
            }
    })

    event.custom({
            "type": "immersiveengineering:blueprint",
            "inputs": [
                {
                    "basePredicate": {
                        "tag": "c:plates/copper"
                    },
                    "count": 2
                },
                {
                     "basePredicate": {
                        "item": "kubejs:cell_half"
                     },
                     "count": 2
                },
                {
                    "basePredicate": {
                        "tag": "c:bolts/copper"
                    },
                    "count": 8
                },
            ],
            "category": tier2bp,
            "result": {
                "item": 'ae2:fluid_cell_housing'
            }
    })

    //tier 3

    event.custom({
        "type": "immersiveengineering:blueprint",
        "inputs": [
            {
                "basePredicate": {
                    "tag": "c:plates/aluminum"
                },
                "count": 4
            },
            {
                 "basePredicate": {
                    "item": "modern_industrialization:certus_quartz_rod"
                 },
                 "count": 8
            },
            {
                "basePredicate": {
                    "item": "forbidden_arcanus:obsidiansteel_ingot"
                },
                "count": 4
            },
            {
                "basePredicate": {
                    "item": "forbidden_arcanus:corrupti_dust"
                },
                "count": 16
            },
            {
                "basePredicate": {
                    "item": "ae2:certus_quartz_dust"
                },
                "count": 2
            },
        ],
        "category": tier3bp,
        "result": {
            "item": "ae2:calculation_processor_press"
        }
    })

    event.custom({
            "type": "immersiveengineering:blueprint",
            "inputs": [
                {
                    "basePredicate": {
                        "tag": "c:plates/aluminum"
                    },
                    "count": 4
                },
                {
                     "basePredicate": {
                        "item": "modern_industrialization:certus_quartz_rod"
                     },
                     "count": 8
                },
                {
                    "basePredicate": {
                        "item": "forbidden_arcanus:obsidiansteel_ingot"
                    },
                    "count": 4
                },
                {
                    "basePredicate": {
                        "item": "forbidden_arcanus:corrupti_dust"
                    },
                    "count": 16
                },
                {
                    "basePredicate": {
                        "tag": "c:dusts/aluminum"
                    },
                    "count": 2
                },
            ],
            "category": tier3bp,
            "result": {
                "item": "ae2:engineering_processor_press"
            }
    })

    event.custom({
        "type": "immersiveengineering:blueprint",
        "inputs": [
            {
                "basePredicate": {
                    "tag": "c:plates/aluminum"
                },
                "count": 16
            },
            {
                 "basePredicate": {
                    "item": "modern_industrialization:certus_quartz_rod"
                 },
                 "count": 12
            },
            {
                "basePredicate": {
                    "tag": "c:ingots/steel"
                },
                "count": 6
            },
            {
                "basePredicate": {
                    "tag": "c:dusts/certus_quartz"
                },
                "count": 4
            },
        ],
        "category": tier3bp,
        "result": {
            "item": "kubejs:core_press"
        }
    })

})



