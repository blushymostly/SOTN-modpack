// Recipes for Spartan Weaponry mod and it's addons

ServerEvents.recipes(event => {
    event.remove({ output: 'spartanshields:wooden_basic_shield'})
    event.shaped('spartanshields:wooden_basic_shield', [
        ' PP',
        'PSP',
        'PP ' 
    ], {
        P: '#minecraft:planks',
        S: 'minecraft:stick'
    })
})