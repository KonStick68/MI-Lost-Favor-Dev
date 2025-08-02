ServerEvents.recipes(event => {
    event.remove({output: ["butcher:brinesolution_bucket"]})
    // event.replaceInput({id: 'butcher:brinesolutionrecipe'}, 'butcher:salt', 'modern_industrialization:salt_dust')
    event.recipes.modern_industrialization.mixer(2, 200)
    .fluidOut("butcher:brinesolution", 1000)
    .fluidIn("minecraft:water", 1000)
    .itemIn("modern_industrialization:salt_dust")
})