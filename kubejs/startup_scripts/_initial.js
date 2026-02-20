// priority: 999
// ! This script loads before the other startup scripts.
/**
 * Put all utility functions or global vars here to access in other scripts
 */

// Spoof custom items mod name
Platform.mods.kubejs.name = "Symphony Core"

/**
 * Creates a placeholder item
 * @param {Registry.Item} Registry
 * @param {ResourceLocation_ | string} name - item (id)
 */
const placeHolder = (registry, name) => {
    registry.create(name).texture("kubejs:item/barrier").displayName(`§eT. B. I. §r- §d${name.split("_").map(v => capitalize(v))}`);
}