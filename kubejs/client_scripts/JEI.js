/**
 * Hide items, fluids, and recipes in EMI/JEI.
 * '/kjs inventory' and '/kjs hand' are best for finding item IDs.
 * 
 */

JEIEvents.hideItems(event => {

    // Unused spartan shield
    event.hide("spartanshields:basic_mekanists_basic_shield")
    event.hide("spartanshields:basic_mekanists_tower_shield")
    event.hide("spartanshields:advanced_mekanists_basic_shield")
    event.hide("spartanshields:advanced_mekanists_tower_shield")
    event.hide("spartanshields:elite_mekanists_basic_shield")
    event.hide("spartanshields:elite_mekanists_tower_shield")
    event.hide("spartanshields:ultimate_mekanists_basic_shield")
    event.hide("spartanshields:ultimate_mekanists_tower_shield")
    event.hide("spartanshields:dark_steel_riot_basic_shield")
    event.hide("spartanshields:dark_steel_riot_tower_shield")
    event.hide("spartanshields:terrasteel_basic_shield")
    event.hide("spartanshields:terrasteel_tower_shield")
    event.hide("spartanshields:elementium_basic_shield")
    event.hide("spartanshields:elementium_tower_shield")
    event.hide("spartanshields:osmium_basic_shield")
    event.hide("spartanshields:lapis_lazuli_basic_shield")
    event.hide("spartanshields:refined_obsidian_basic_shield")
    event.hide("spartanshields:signalum_basic_shield")
    event.hide("spartanshields:signalum_tower_shield")
    event.hide("spartanshields:enderium_basic_shield")
    event.hide("spartanshields:enderium_tower_shield")
    event.hide("spartanshields:refined_glowstone_basic_shield")
    event.hide("spartanshields:lumium_basic_shield")
    event.hide("spartanshields:lumium_tower_shield")
    
})