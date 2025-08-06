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

    ae_processor("ae2:printed_logic_processor", "ae2:logic_processor")
    ae_processor("ae2:printed_engineering_processor", "ae2:engineering_processor")
    ae_processor("ae2:printed_calculation_processor", "ae2:calculation_processor")

})