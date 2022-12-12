---
title: Ротация Шамана Стихии
layout: page
last_update: 2022-09-19
wow: 9.2.7
toc: true
author: Amani
description: Описание ротации Шамана Стихии. Приоритет способностей на этой странице динамически меняется в зависимости от того, какие выбраны таланты, легендарный предмет и ковенант.
image: /assets/img/logos/rotation.png
custom-javascript-list:
    - "/assets/js/rotation_switches2.js"
---

# Вступление

<ul class="rotation_switches" style="list-style-type: none;">
  <li id="rotation_switch_static_discharge" class="rotation_switch"><input type="checkbox"> Static Discharge</li>
  <li id="rotation_switch_elemental_blast" class="rotation_switch"><input type="checkbox"> Elemental Blast</li>
  <li id="rotation_switch_echoing_shock" class="rotation_switch"><input type="checkbox"> Echoing Shock</li>
  <li id="rotation_switch_master_of_the_elements" class="rotation_switch"><input type="checkbox"> Master of the Elements</li>
  <li id="rotation_switch_storm_elemental" class="rotation_switch"><input type="checkbox"> Storm Elemental</li>
  <li id="rotation_switch_liquid_magma_totem" class="rotation_switch"><input type="checkbox"> Liquid Magma Totem</li>
  <li id="rotation_switch_surge_of_power" class="rotation_switch"><input type="checkbox"> Surge of Power</li>
  <li id="rotation_switch_icefury" class="rotation_switch"><input type="checkbox"> Icefury</li>
  <li id="rotation_switch_stormkeeper" class="rotation_switch"><input type="checkbox"> Stormkeeper</li>
  <li id="rotation_switch_ascendance" class="rotation_switch"><input type="checkbox"> Ascendance</li>
  <li id="rotation_switch_echoes_of_the_great_sundering" class="rotation_switch"><input type="checkbox"> Echoes of the Great Sundering</li>
  <li id="rotation_switch_necrolord" class="rotation_switch"><input type="checkbox"> Necrolord</li>
  <li id="rotation_switch_night_fae" class="rotation_switch"><input type="checkbox"> Night Fae</li>
  <li id="rotation_switch_kyrian" class="rotation_switch"><input type="checkbox"> Kyrian</li>
  <li id="rotation_switch_venthyr" class="rotation_switch"><input type="checkbox"> Venthyr</li>
</ul>




1. {{ site.data.spells.fe }}, {{ site.data.spells.storm }} и {{ site.data.spells.igor }} по кулдауну.
  * Если у вас взят талант {{ site.data.spells.primal_elem }}, вы можете иметь активным максимум одного элементаля. Не призывайте второго, иначе он заменит первого.
2. Поддерживайте {{ site.data.spells.fs }} на **1** цели для проков {{ site.data.spells.lava_surge }}, чтобы усиливать {{ site.data.spells.quake }} талантом {{ site.data.spells.mote }}.
3. {{ site.data.spells.sk }} по кулдауну.
3. {:.rotation_line_stormkeeper_on style="display:none;"}{{ site.data.spells.sk }} по кулдауну.
4. {{ site.data.covenants.ch }} по кулдауну.
5. {{ site.data.spells.ecs }} по кулдауну, если следующее за ним заклинание – {{ site.data.spells.quake }}.
6. {{ site.data.covenants.vt }} / {{ site.data.covenants.ft }} по кулдауну.
