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

  <li id="rotation_switch_stormkeeper" class="rotation_switch"><input type="checkbox"> {{ site.data.spells.sk }}</li>
  <li id="rotation_switch_test" class="rotation_switch"><input type="checkbox"> Test</li>

</ul>




1. {{ site.data.spells.fe }}, {{ site.data.spells.storm }} и {{ site.data.spells.igor }} по кулдауну.
  * Если у вас взят талант {{ site.data.spells.primal_elem }}, вы можете иметь активным максимум одного элементаля. Не призывайте второго, иначе он заменит первого.
2. Поддерживайте {{ site.data.spells.fs }} на **1** цели для проков {{ site.data.spells.lava_surge }}, чтобы усиливать {{ site.data.spells.quake }} талантом {{ site.data.spells.mote }}.
3. {{ site.data.spells.sk }} по кулдауну.
3. {:.rotation_line_stormkeeper_on style="display:none;"}{{ site.data.spells.sk }} по кулдауну.
4. {:.rotation_line_test_on style="display:none;"}{{ site.data.spells.sk }} по кулдауну.
5. {{ site.data.covenants.ch }} по кулдауну.
6. {{ site.data.spells.ecs }} по кулдауну, если следующее за ним заклинание – {{ site.data.spells.quake }}.
7. {{ site.data.covenants.vt }} / {{ site.data.covenants.ft }} по кулдауну.
