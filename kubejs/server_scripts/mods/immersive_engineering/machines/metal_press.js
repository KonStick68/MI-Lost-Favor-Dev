ServerEvents.recipes(event => {

    function printed_processor (input, press, output) {
        event.custom({
              "type": "immersiveengineering:metal_press",
              "energy": 3200,
              "input": {
                "basePredicate": {
                    "tag": input,
                },
                "count": 2,
              },
              "mold": press,
              "result": {
                "item": output,
              },
        });
    }

    printed_processor("c:ingots/silicon","ae2:silicon_press","ae2:printed_silicon")
    printed_processor("c:ingots/gold","ae2:logic_processor_press","ae2:printed_logic_processor")
    printed_processor("c:gems/certus_quartz","ae2:calculation_processor_press","ae2:printed_calculation_processor")
    printed_processor("c:ingots/aluminum","ae2:engineering_processor_press","ae2:printed_engineering_processor")

    event.custom({
          "type": "immersiveengineering:metal_press",
          "energy": 3200,
          "input": {
            "basePredicate": {
                "tag": "c:plates/iron",
            },
            "count": 2,
          },
          "mold": "kubejs:cell_press",
          "result": {
            "item": "kubejs:cell_half",
          },
    });

    event.custom({
          "type": "immersiveengineering:metal_press",
          "energy": 3200,
          "input": {
            "basePredicate": {
                "tag": "c:plates/iron",
            },
            "count": 2,
          },
          "mold": "kubejs:core_press",
          "result": {
            "item": "kubejs:core_hull",
          },
    });
})