ServerEvents.recipes(event => {

    event.recipes.modern_industrialization.mixer(8, 100)
    .itemIn("#c:plates/aluminum")
    .itemIn("#c:dusts/aluminum")
    .itemOut("kubejs:cd")

    event.recipes.modern_industrialization.mixer(8, 600)
    .itemIn("#c:dusts/diamond")
    .itemIn("#c:nuggets/steel", 0)
    .itemOut("4x modern_industrialization:diamond_tiny_dust")
})