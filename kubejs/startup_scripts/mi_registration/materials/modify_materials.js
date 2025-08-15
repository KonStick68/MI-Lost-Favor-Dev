// Modifying materials

// Uranium plate
MIMaterialEvents.modifyMaterial('uranium', event => {
    event.builder
        .addParts('plate')
})

// Steel wire
MIMaterialEvents.modifyMaterial('steel', event => {
    event.builder
        .addParts('wire')
})

// Lead wire
MIMaterialEvents.modifyMaterial('lead', event => {
    event.builder
        .addParts('wire')
})
