ServerEvents.recipes(event => {
    
    event.recipes.modern_industrialization.assembler(8, 100)
    .itemIn("modern_industrialization:electrum_wire")
    .itemIn("modern_industrialization:analog_circuit_board")
    .itemIn("minecraft:redstone")
    .itemIn("#c:gems/quartz")
    .itemOut("immersiveengineering:component_electronic")

    event.recipes.modern_industrialization.assembler(8, 100)
    .itemIn("2x modern_industrialization:iron_plate")
    .itemIn("minecraft:copper_ingot")
    .itemIn("modern_industrialization:piston")
    .itemIn("modern_industrialization:conveyor")
    .itemOut("4x immersiveengineering:component_iron")
    event.recipes.modern_industrialization.assembler(8, 100)
    .itemIn("2x modern_industrialization:steel_plate")
    .itemIn("minecraft:copper_ingot")
    .itemIn("modern_industrialization:robot_arm")
    .itemIn("modern_industrialization:conveyor")
    .itemOut("4x immersiveengineering:component_steel")
    
})