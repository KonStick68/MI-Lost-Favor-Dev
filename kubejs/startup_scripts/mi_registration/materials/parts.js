MIMaterialEvents.modifyMaterial("lead", event => {
    event.builder
        // Call any builder function, see above
        .addParts('bolt', 'rod')
})