FTBQuestsEvents.customReward('0DC887212398806D', event => {
    let player = event.entity;
    let dimension = player.getLevel().getDimension()

    event.server.runCommandSilent(`/title ${player.profile.name} times 20 100 20`)
    event.server.runCommandSilent(`/title ${player.profile.name} title {"text":"Congratulations!!!","bold":true,"color":"#9A52FF"}`)
    event.server.runCommandSilent(`/title ${player.profile.name} subtitle ["",{"text":"You have passed into the ","bold":true},{"text":"Bronze Age","bold":true,"color":"#CD7F32"},{"text":"!","bold":true}]`)
    event.server.runCommandSilent(`/playsound immersiveengineering:birthday_party ambient ${player.profile.name} ${player.x} ${player.y} ${player.z}`)
    event.server.runCommandSilent(`/execute in ${dimension} run particle minecraft:witch ${player.x} ${player.y} ${player.z} 8 8 8 1 5000 normal`)
});

FTBQuestsEvents.customReward('41C8354D477A8899', event => {
    let player = event.entity;
    event.server.runCommandSilent(`/astages add ${player.profile.name} tier_1_access_ore`)
});
