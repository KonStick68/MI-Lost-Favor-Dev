LootJS.modifiers(event => {

    var IE_vilalge = [
        "immersiveengineering:component_steel",
        "immersiveengineering:component_iron",
    ]
    /*
    IE_vilalge.forEach(item =>{
        event.addTableModifier("immersiveengineering:chests/engineers_house").removeLoot(item)
    })
    */
    event.addTableModifier("immersiveengineering:chests/engineers_house").removeLoot(Ingredient.all)
    event.addTableModifier("immersiveengineering:gameplay/hero_of_the_village/machinist").removeLoot(Ingredient.all)

})