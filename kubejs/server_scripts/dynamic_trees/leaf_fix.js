// Leaves fix for Dynamic Trees mod

LootJS.modifiers(event => {
  event
    .addBlockLootModifier('#dynamictrees:foliage')
    .not(n => n.matchMainHand(Item.of('minecraft:shears').ignoreNBT()))
    .not(n => n.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch'))) // не Silk Touch
    .pool(p => {
      p.randomChance(0.05)
      p.addLoot("minecraft:stick")
      p.limitCount([1, 2])
      p.survivesExplosion()
    })
});
