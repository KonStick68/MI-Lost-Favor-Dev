const tesh_mods = [
    "modern_industrialization",
    "moderndynamics",
    "extended_industrialization",
    "hostile_neural_industrialization",
    "hostilenetworks",
    "immersiveengineering",
    "immersive_machinery",
    "immersive_aircraft",
    "justdirethings",
    "replication",
    "nautec",
    //AE2 ADDONS
    "rep_ae2_bridge",
    "ae2",
    "megacells",
    "merequester",
    "extendedae",
    "advanced_ae",
    "ae2wtlib",
    "bigger_ae2",
    "mi_tweaks",
]

tesh_mods.forEach(mod => {
    AStages.addRestrictionForMod(`astages/mod/${mod}`, mod, mod)
    .setCanPickedUp(true)
});
    