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
    ' PP',
    ' SP',
    ' S '
  ], {
      P: '#minecraft:planks',
      S: 'minecraft:stick'
    }).noMirror().noShrink()

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
    ' CC',
    ' SC',
    ' S '
  ], {
      C: 'minecraft:cobblestone',
      S: 'minecraft:stick'
    }).noMirror().noShrink()
  
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

    // Copper No Tree Puncing stuff

    event.remove({output: 'droptherock:iaf_copper_knife'})
    event.shaped('droptherock:iaf_copper_knife', [
      '   ',
      ' I ',
      ' S '
    ], {
      I: 'minecraft:copper_ingot',
      S: 'minecraft:stick'
    })

    event.remove({output: 'droptherock:iaf_copper_saw'})
    event.shaped('droptherock:iaf_copper_saw', [
      '  S',
      ' SI',
      'SI '
    ], {
      I: 'minecraft:copper_ingot',
      S: 'minecraft:stick'
    })

    event.remove({output: 'droptherock:iaf_copper_mattock'})
    event.shaped('droptherock:iaf_copper_mattock', [
      'III',
      ' SI',
      ' S '
    ], {
      I: 'minecraft:copper_ingot',
      S: 'minecraft:stick'
    })
})
