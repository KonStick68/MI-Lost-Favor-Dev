PlayerEvents.tick(event => {
    const { player } = event
    if (player.tickCount % 20 != 0) return
    if (AStages.playerHasStage("xaeromap", player)) {
        player.removeEffect("xaerominimap:no_cave_maps_harmful")
        player.removeEffect("xaerominimap:no_entity_radar_harmful")
        player.removeEffect("xaerominimap:no_minimap_harmful")
        player.removeEffect("xaerominimap:no_waypoints_harmful")
        return
    } 
    if (player.hasEffect('xaerominimap:no_cave_maps_harmful')) return
    player.potionEffects.add("xaerominimap:no_cave_maps_harmful",-1)
    player.potionEffects.add("xaerominimap:no_entity_radar_harmful",-1)
    player.potionEffects.add("xaerominimap:no_minimap_harmful",-1)
    player.potionEffects.add("xaerominimap:no_waypoints_harmful",-1)
    
})
