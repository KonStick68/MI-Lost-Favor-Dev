ServerEvents.recipes(event => {

    event.custom({
      "type": "immersiveengineering:metal_press",
      "energy": 3200,
      "input": {
        "basePredicate": {
            "tag": "c:ingots/gold",
        },
        "count": 2,
      },
      "mold": "ae2:logic_processor_press",
      "result": {
        "item": "ae2:printed_logic_processor",
      },
    });

    event.custom({
          "type": "immersiveengineering:metal_press",
          "energy": 3200,
          "input": {
            "basePredicate": {
                "tag": "c:ingots/silicon",
            },
            "count": 2,
          },
          "mold": "ae2:silicon_press",
          "result": {
            "item": "ae2:printed_silicon",
          },
        });

})