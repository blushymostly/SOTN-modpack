// Bring back wooden and stone tools


ServerEvents.recipes(event => {
  
  event.shaped('minecraft:wooden_pickaxe', [
    'PPP',
    ' S ',
    ' S '
  ], {
      P: '#minecraft:planks',
      S: 'minecraft:stick'
    })

  event.shaped('minecraft:wooden_axe', [
    'PP ',
    'PS ',
    ' S '
  ], {
      P: '#minecraft:planks',
      S: 'minecraft:stick'
    })

  event.shaped('minecraft:wooden_hoe', [
    'PP ',
    ' S ',
    ' S ',
  ], {
      P: '#minecraft:planks',
      S: 'minecraft:stick'
    })

  event.shaped('minecraft:wooden_sword', [
    ' P ',
    ' P ',
    ' S '
  ], {
      P: '#minecraft:planks',
      S: 'minecraft:stick'
    })

  event.shaped('minecraft:wooden_shovel', [
    ' P ',
    ' S ',
    ' S '
  ], {
      P: '#minecraft:planks',
      S: 'minecraft:stick'
    })
   
    
  event.shaped('minecraft:stone_pickaxe', [
    'CCC',
    ' S ',
    ' S '
  ], {
    C: 'minecraft:cobblestone',
    S: 'minecraft:stick'
  })

  event.shaped('minecraft:stone_axe', [
    'CC ',
    'CS ',
    ' S '
  ], {
      C: 'minecraft:cobblestone',
      S: 'minecraft:stick'
    })
  
  event.shaped('minecraft:stone_hoe', [
    'CC ',
    ' S ',
    ' S ',
  ], {
      C: 'minecraft:cobblestone',
      S: 'minecraft:stick'
    })

    event.shaped('minecraft:stone_sword', [
      ' C ',
      ' C ',
      ' S '
    ], {
        C: 'minecraft:cobblestone',
        S: 'minecraft:stick'
      })
  
    event.shaped('minecraft:stone_shovel', [
      ' C ',
      ' S ',
      ' S '
    ], {
        C: 'minecraft:cobblestone',
        S: 'minecraft:stick'
      })
})
