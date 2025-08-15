ServerEvents.recipes(event => {


  event.custom({
    "type": "paganbless:anvil_smashing",
    "ingredients": [
        {
            "count": 8,
            "tag": "c:bolts/bronze"
        },
        {
            "count": 1,
            "tag": "c:gears/bronze"
        },
        {
            "count": 8,
            "tag": "c:plates/bronze"
        }
        ],
        "result": {
        "count": 1,
        "id": "modern_industrialization:bronze_machine_casing"
        }
    });

  event.custom({
    "type": "paganbless:anvil_smashing",
    "ingredients": [
        {
            "count": 4,
            "tag": "c:bolts/bronze"
        },
        {
            "count": 1,
            "tag": "c:rods/bronze"
        },
        {
            "count": 2,
            "tag": "c:plates/bronze"
        }
        ],
        "result": {
        "count": 1,
        "id": "modern_industrialization:wrench"
        }
    });

})