ServerEvents.recipes(event => {


    function ae_processor (printedCircuit, output) {
        event.custom({
          "type": "immersiveengineering:bottling_machine",
          "fluid": {
            "amount": 125,
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

    function ae_cell (cellComponent, output) {
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
                "item": "kubejs:cell_half",
              },
              "count" : 2
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

    ae_cell("ae2:cell_component_1k", "ae2:item_storage_cell_1k")
    ae_cell("ae2:cell_component_4k", "ae2:item_storage_cell_4k")
    ae_cell("ae2:cell_component_16k", "ae2:item_storage_cell_16k")
    ae_cell("ae2:cell_component_64k", "ae2:item_storage_cell_64k")
    ae_cell("ae2:cell_component_256k", "ae2:item_storage_cell_256k")

})