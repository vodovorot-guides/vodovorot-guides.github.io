---
title: Способности Шамана Стихии
layout: page
last_update: 2022-08-11
wow: 10.0
toc: true
author: Amani
---


1. [Элементаль огня](https://ru.wowhead.com/spell=198067)
2. [Элементаль бури](https://ru.wowhead.com/spell=192249)
3. [Возвращение тотемов](https://ru.wowhead.com/spell=108285), если до КД [Тотема жидкой магмы](https://ru.wowhead.com/spell=192222) больше **45** секунд.
4. [Тотем жидкой магмы](https://ru.wowhead.com/spell=192222)
* Use Primordial Wave as much as possible without wasting buffs.
actions.single_target+=/primordial_wave,target_if=min:dot.flame_shock.remains,if=!buff.primordial_wave.up&!buff.splintered_elements.up
actions.single_target+=/flame_shock,target_if=min:dot.flame_shock.remains,if=active_enemies=1&refreshable&!buff.surge_of_power.up
* Spread Flame Shock to multiple targets only if talents were selected that benefit from it.
actions.single_target+=/flame_shock,target_if=min:dot.flame_shock.remains,if=active_enemies>1&(spell_targets.chain_lightning>1|spell_targets.lava_beam>1)&refreshable&!buff.surge_of_power.up&(talent.deeply_rooted_elements.enabled|talent.ascendance.enabled|talent.primordial_wave.enabled|talent.searing_flames.enabled|talent.magma_chamber.enabled),cycle_targets=1
actions.single_target+=/stormkeeper,if=!buff.ascendance.up
actions.single_target+=/ascendance,if=!buff.stormkeeper.up
* Stormkeeper is strong and should be used.
actions.single_target+=/lightning_bolt,if=buff.stormkeeper.up&buff.surge_of_power.up
* Stormkeeper is strong and should be used.
actions.single_target+=/lava_beam,if=active_enemies>1&(spell_targets.chain_lightning>1|spell_targets.lava_beam>1)&buff.stormkeeper.up&!talent.surge_of_power.enabled
* Stormkeeper is strong and should be used.
actions.single_target+=/chain_lightning,if=active_enemies>1&(spell_targets.chain_lightning>1|spell_targets.lava_beam>1)&buff.stormkeeper.up&!talent.surge_of_power.enabled
* Stormkeeper is strong and should be used.
actions.single_target+=/lightning_bolt,if=buff.stormkeeper.up&!talent.surge_of_power.enabled
* Surge of Power is strong and should be used.
actions.single_target+=/lightning_bolt,if=buff.surge_of_power.up
actions.single_target+=/icefury,if=talent.electrified_shocks.enabled
actions.single_target+=/frost_shock,if=buff.icefury.up&talent.electrified_shocks.enabled&(!debuff.electrified_shocks.up|buff.icefury.remains<=gcd)
actions.single_target+=/frost_shock,if=buff.icefury.up&talent.electrified_shocks.enabled&maelstrom>=50&debuff.electrified_shocks.remains<2*gcd&buff.stormkeeper.up
actions.single_target+=/lava_beam,if=active_enemies>1&(spell_targets.chain_lightning>1|spell_targets.lava_beam>1)&buff.power_of_the_maelstrom.up
* Windspeaker's Lava Resurgence is strong. Don't sit on it.
actions.single_target+=/lava_burst,if=buff.windspeakers_lava_resurgence.up
* Lava Surge is neat. Utilize it.
actions.single_target+=/lava_burst,if=cooldown_react&buff.lava_surge.up
* Use the talents you selected. Did you invest only 1 point in it? In this case this'll be a DPS decrease. Additionally Elemental Blast is stronger than EoGS. In this case don't use Earthquake on single target.
actions.single_target+=/earthquake,if=buff.echoes_of_great_sundering.up&(!talent.elemental_blast.enabled&active_enemies<2|active_enemies>1)
* Use Earthquake against two enemies unless you have to alternate because of Echoes of Great Sundering.
actions.single_target+=/earthquake,if=active_enemies>1&(spell_targets.chain_lightning>1|spell_targets.lava_beam>1)&!talent.echoes_of_great_sundering.enabled&!talent.elemental_blast.enabled
actions.single_target+=/elemental_blast
actions.single_target+=/earth_shock
* Utilize present buffs.
actions.single_target+=/lava_burst,target_if=dot.flame_shock.remains>2,if=buff.flux_melting.up&active_enemies>1
* Single target Lava Burst is stronk.
actions.single_target+=/lava_burst,target_if=dot.flame_shock.remains>2,if=enemies=1&talent.deeply_rooted_elements.enabled
* Spread out your Icefury usage if you can get more use out of accompanied buffs.
actions.single_target+=/frost_shock,if=buff.icefury.up&talent.flux_melting.enabled&!buff.flux_melting.up
* Spread out your Icefury usage if you can get more use out of accompanied buffs.
actions.single_target+=/frost_shock,if=buff.icefury.up&(talent.electrified_shocks.enabled&!debuff.electrified_shocks.up|buff.icefury.remains<6)
* Utilize the Power of the Maelstrom buff if your Lightning Bolt is empowered by Unrelenting Calamity.
actions.single_target+=/lightning_bolt,if=buff.power_of_the_maelstrom.up&talent.unrelenting_calamity.enabled
actions.single_target+=/icefury
* Spam Lightning Bolt if Storm Elemental is active. But honor all previous priorities.
actions.single_target+=/lightning_bolt,if=pet.storm_elemental.active&debuff.lightning_rod.up&(debuff.electrified_shocks.up|buff.power_of_the_maelstrom.up)
actions.single_target+=/lava_burst,target_if=dot.flame_shock.remains>2
* Use your Icefury buffs if you didn't improve the talent.
actions.single_target+=/frost_shock,if=buff.icefury.up&!talent.electrified_shocks.enabled&!talent.flux_melting.enabled
* Casting Chain Lightning at two targets is mor efficient than Lightning Bolt.
actions.single_target+=/chain_lightning,if=active_enemies>1&(spell_targets.chain_lightning>1|spell_targets.lava_beam>1)
* Filler spell. Always available. Always the bottom line.
actions.single_target+=/lightning_bolt
actions.single_target+=/flame_shock,moving=1,target_if=refreshable
actions.single_target+=/flame_shock,moving=1,if=movement.distance>6
* Frost Shock is our movement filler.
actions.single_target+=/frost_shock,moving=1
