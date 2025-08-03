ServerEvents.recipes(event => {

    var tier1bp = "Strange Blueprint"

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
})



