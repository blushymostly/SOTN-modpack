// Make all Relics to be recyclble to spectral dust

ServerEvents.recipes(event => {
	event.shapeless('bountifulbaubles:spectral_silt', [
		'#rarcompat:mimic_loot',
		'bountifulbaubles:disintegration_tablet'
	])
})