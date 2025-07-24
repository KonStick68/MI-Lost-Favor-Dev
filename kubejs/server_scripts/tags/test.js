ServerEvents.tags('block', event => {

    event.add('ars_nouveau:golem/budding', "pastel:budding_topaz")
    event.add('ars_nouveau:golem/cluster', "pastel:topaz_cluster")
})
ServerEvents.tags('item', event => {
    event.add('ars_nouveau:golem/shard', "pastel:topaz_shard")
})
