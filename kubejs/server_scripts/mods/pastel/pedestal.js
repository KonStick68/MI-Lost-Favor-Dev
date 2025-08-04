ServerEvents.recipes(event => {
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
           "B": "kubejs:mostly_unreadable_blueprint",
         },
         "result": {
           "components": {
                            "immersiveengineering:blueprint": "Strange Blueprint"
                         },
           "id": "immersiveengineering:blueprint",
           "count": 1

         },
         "required_advancement": "pastel:collect_shimmerstone"
  })


})



