ServerEvents.recipes(event => {


    function ae_processor (printedCircuit, output) {
        event.custom({
          "type": "immersiveengineering:bottling_machine",
          "fluid": {
            "amount": 250,
            "fluid": "modern_industrialization:molten_redstone",
          },
          "inputs": [
            {
              "item": "ae2:printed_silicon",
            },
            {
              "item": printedCircuit,
            }
          ],
          "results": [
            {
              "id": output,
            },

          ]
        })
    }

    function ae_item_cell (cellComponent, output) {
        event.custom({
          "type": "immersiveengineering:bottling_machine",
          "fluid": {
            "amount": 500,
            "fluid": "modern_industrialization:molten_redstone",
          },
          "inputs": [
            {
              "basePredicate": {
                "item": "ae2:quartz_glass",
              },
              "count" : 2
            },
            {
              "basePredicate": {
                "item": "ae2:item_cell_housing",
              },
              "count" : 1
            },
            {
              "item": cellComponent,
            }
          ],
          "results": [
            {
              "id": output,
            },

          ]
        })
    }

    function ae_fluid_cell (cellComponent, output) {
        event.custom({
          "type": "immersiveengineering:bottling_machine",
          "fluid": {
            "amount": 500,
            "fluid": "modern_industrialization:molten_redstone",
          },
          "inputs": [
            {
              "basePredicate": {
                "item": "ae2:quartz_glass",
              },
              "count" : 2
            },
            {
              "basePredicate": {
                "item": "ae2:fluid_cell_housing",
              },
              "count" : 1
            },
            {
              "item": cellComponent,
            }
          ],
          "results": [
            {
              "id": output,
            },

          ]
        })
    }

    ae_processor("ae2:printed_logic_processor", "ae2:logic_processor")
    ae_processor("ae2:printed_engineering_processor", "ae2:engineering_processor")
    ae_processor("ae2:printed_calculation_processor", "ae2:calculation_processor")

    ae_item_cell("ae2:cell_component_1k", "ae2:item_storage_cell_1k")
    ae_item_cell("ae2:cell_component_4k", "ae2:item_storage_cell_4k")
    ae_item_cell("ae2:cell_component_16k", "ae2:item_storage_cell_16k")
    ae_item_cell("ae2:cell_component_64k", "ae2:item_storage_cell_64k")
    ae_item_cell("ae2:cell_component_256k", "ae2:item_storage_cell_256k")

    ae_fluid_cell("ae2:cell_component_1k", "ae2:fluid_storage_cell_1k")
    ae_fluid_cell("ae2:cell_component_4k", "ae2:fluid_storage_cell_4k")
    ae_fluid_cell("ae2:cell_component_16k", "ae2:fluid_storage_cell_16k")
    ae_fluid_cell("ae2:cell_component_64k", "ae2:fluid_storage_cell_64k")
    ae_fluid_cell("ae2:cell_component_256k", "ae2:fluid_storage_cell_256k")



    //ae cores
    event.custom({
      "type": "immersiveengineering:bottling_machine",
      "fluid": {
        "amount": 500,
        "fluid": "modern_industrialization:polyethylene",
      },
      "inputs": [
        {
          "basePredicate": {
            "item": "ae2:quartz_glass",
          },
          "count" : 4
        },
        {
          "basePredicate": {
            "item": "ae2:calculation_processor",
          },
          "count" : 2
        },
        {
          "item": "kubejs:core_hull",
        }
      ],
      "results": [
        {
          "id": "ae2:annihilation_core",
        },

      ]
    })

    event.custom({
      "type": "immersiveengineering:bottling_machine",
      "fluid": {
        "amount": 500,
        "fluid": "modern_industrialization:polyethylene",
      },
      "inputs": [
        {
          "basePredicate": {
            "item": "ae2:quartz_glass",
          },
          "count" : 4
        },
        {
          "basePredicate": {
            "item": "ae2:engineering_processor",
          },
          "count" : 2
        },
        {
          "item": "kubejs:core_hull",
        }
      ],
      "results": [
        {
          "id": "ae2:formation_core",
        },

      ]
    })

})