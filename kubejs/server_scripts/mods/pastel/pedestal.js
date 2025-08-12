ServerEvents.recipes(event => {

    var tier1bp = 'Mysterious Blueprint'
    var tier2bp = "Storage Blueprint"
    var tier3bp = "Automation Blueprint"
    var tier4bp = "Quantum Blueprint"
    var tier5bp = "Divine Blueprint"

    

  function blueprint(input, bpTier , color) {

    event.custom({
      "type": "pastel:pedestal",
      "time": 40,
      "tier": "basic",
      "colors": {
        "pastel:magenta": 16,
        "pastel:yellow": 16,
        "pastel:cyan": 16,
        "pastel:black": 0,
        "pastel:white": 0
      },
      "experience": 1.0,
      "pattern": [
        " S ",
        "SBS",
        " S "
      ],
      "key": {
        "S": "pastel:shimmerstone_gem",
        "B": input,
      },
      "result": {
        "components": { "immersiveengineering:blueprint": bpTier, "minecraft:item_name" : "{'text':'" + bpTier + "','color':'" + color + "'}"},
        "id": "immersiveengineering:blueprint",
        "count": 1

      },
      "required_advancement": "pastel:collect_shimmerstone"
    })
  }

  blueprint("kubejs:mysterious_blueprint", tier1bp , '#84b9ff')
  blueprint("kubejs:storage_blueprint", tier2bp , '#fff678')
  blueprint("kubejs:automation_blueprint", tier3bp , '#8de8ff')
  blueprint("kubejs:quantum_blueprint", tier4bp , '#c795ff')
  blueprint("kubejs:divine_blueprint", tier5bp , '#abffc0')


})



