ServerEvents.recipes(event => {


    event.forEachRecipe({output:/.*fine_wire/, type:"modern_industrialization:wiremill"}, r => {
        event.recipes.modern_industrialization.wiremill(8, 100)
        .itemIn(r.originalRecipeIngredients[0])
        .itemOut("2x " + r.originalRecipeResult.id)
        event.remove({output : r.originalRecipeResult.id})
    })
})