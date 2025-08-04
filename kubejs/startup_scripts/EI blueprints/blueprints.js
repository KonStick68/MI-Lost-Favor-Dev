StartupEvents.registry('item', event => {
    event.create('blueprint_pack').texture('blueprints:item/blueprint_pack').maxStackSize(1)
    event.create('mysterious_blueprint').texture('blueprints:item/blueprint_t1').maxStackSize(1)
    event.create('storage_blueprint').texture('blueprints:item/blueprint_t2').maxStackSize(1)
    event.create('automation_blueprint').texture('blueprints:item/blueprint_t3').maxStackSize(1)
    event.create('quantum_blueprint').texture('blueprints:item/blueprint_t4').maxStackSize(1)
    event.create('divine_blueprint').texture('blueprints:item/blueprint_t5').maxStackSize(1)
})