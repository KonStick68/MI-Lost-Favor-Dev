AStages.customizeStage('saturation')
    .setAddTitle(Text.translatable('milf.stage.saturation').darkPurple()) // Default
    .setAddChatMessage(Text.translatable('milf.stage.saturation').darkPurple())
    .setFadeIn(20) // Default
    .setFadeOut(20) // Default
    .setStay(120)

    PlayerEvents.tick(event => {
    const { player } = event
    if (player.tickCount % 20 != 0) return
    if (AStages.playerHasStage("saturation", player)) {
        player.removeEffect("minecraft:saturation")
        return
    } 
    if (player.hasEffect('minecraft:saturation')) return
    player.potionEffects.add("minecraft:saturation",-1)
    
})
