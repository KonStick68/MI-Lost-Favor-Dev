ServerEvents.recipes(event => {

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
          "item": "ae2:printed_logic_processor",
        }
      ],
      "results": [
        {
          "id": "ae2:logic_processor",
        },

      ]
    })

})