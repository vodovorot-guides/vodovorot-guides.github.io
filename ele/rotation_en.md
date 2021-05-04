---
title: Elemental Shaman Priority List
layout: page
last_update: 2021-05-04
wow: 9.0.5
toc: true
author: "Amani, Ignis, Zab"
description: Elemental Shaman rotation breakdown. Spell priorities on this page change dynamically depending on selected talents, legendary and covenant.
image: /assets/img/logos/sk_full.png
custom-javascript-list:
    - "/assets/js/rotation_switches.js"
---

# Talent Builds

Elemental Shaman rotation breakdown. Spell priorities on this page change dynamically depending on selected talents, legendary and covenant.

<div class="container">
  <div class="row">
    <div class="col text-center">
      <a href="/ele/rotation.html" id="raid_build" button="button" class="btn btn-outline-primary guide-btn">Raiding Build</a>
      <a href="/ele/rotation.html" id="mplus_build" button="button" class="btn btn-outline-primary guide-btn">Mythic+ Build</a>
    </div>
  </div>
</div>

<p></p>

{% include talents.html data=site.data.talents.ele active="2301032" switch=true lang="en" %}

# Opener

**Opener** is a fixed ordered list of abilities to use at the start of the encounter.

1. {:.pw-apl}[Fleshcraft](https://www.wowhead.com/spell=324631) **10** seconds before the pull.
1. {:.vt-apl}[Vesper Totem](https://www.wowhead.com/spell=324386) no later than **6.5** seconds before the pull.
1. {:.sk-apl}[Stormkeeper](https://www.wowhead.com/spell=191634) **5** seconds before the pull.
3. {:.mote-apl}[Fire Elemental](https://www.wowhead.com/spell=198067) **3.5** seconds before the pull.
3. {:.lmt-apl}[Fire Elemental](https://www.wowhead.com/spell=198067) **3.5** seconds before the pull.
3. {:.storm-apl}[Storm Elemental](https://www.wowhead.com/spell=192249) **3.5** seconds before the pull.
5. {:.eb-apl}Pre-cast [Elemental Blast](https://www.wowhead.com/spell=117014) **2** seconds before the pull.
  * ***Boss Pull.***
6. {:.ecs-apl}Pre-cast [Lava Burst](https://www.wowhead.com/spell=51505) **2** seconds before the pull.
  * ***Boss Pull.***
7. {:.afs-apl}Pre-cast [Lava Burst](https://www.wowhead.com/spell=51505) **2** seconds before the pull.
  * ***Boss Pull.***
7. {:.afs-apl .pw-apl}[Flame Shock](https://www.wowhead.com/spell=188389).
7. {:.ecs-apl .pw-apl}[Flame Shock](https://www.wowhead.com/spell=188389).
5. {:.pw-apl}[Primordial Wave](https://www.wowhead.com/spell=326059).
5. {:.ft-apl}[Flame Shock](https://www.wowhead.com/spell=188389). 
5. {:.vt-apl}[Flame Shock](https://www.wowhead.com/spell=188389). 
5. {:.ch-apl}[Flame Shock](https://www.wowhead.com/spell=188389). 
5. {:.eb-apl}[Lava Burst](https://www.wowhead.com/spell=51505).
6. {:.sk-apl}[Lightning Bolt](https://www.wowhead.com/spell=188196) with the [Stormkeeper](https://www.wowhead.com/spell=191634) buff.
6. {:.eote-apl .ecs-apl}[Echoing Shock](https://www.wowhead.com/spell=320125).
7. {:.eote-apl}[Lava Burst](https://www.wowhead.com/spell=51505).
23. {:.ft-apl}[Fae Transfusion](https://www.wowhead.com/spell=328923).
8. {:.lava-apl .eote-apl .eb-apl}[Earth Shock](https://www.wowhead.com/spell=8042).
9. {:.lava-apl .eote-apl .eb-apl}[Lava Burst](https://www.wowhead.com/spell=51505).
10. {:.sk-apl}[Lightning Bolt](https://www.wowhead.com/spell=188196) with the [Stormkeeper](https://www.wowhead.com/spell=191634) buff. 
26. {:.lmt-apl}[Liquid Magma Totem](https://www.wowhead.com/spell=192222).
27. {:.ch-apl}[Chain Harvest](https://www.wowhead.com/spell=320674).
28. {:.asc_ele-apl}[Ascendance](https://www.wowhead.com/spell=114050).
29. Continue with regular rotation.

You may use [Earth Elemental](https://www.wowhead.com/spell=198103) **7** seconds before the pull, but only if **all** of the following conditions are met::
* You are **not using** [Primal Elementalist](https://www.wowhead.com/spell=117013) talent (you can only have one active empowered elemental at a time).
* You won’t need extra health from the [Vital Accretion](https://www.wowhead.com/spell=337981) conduit in the next **5** minutes.
* You use the following macro that doesn’t let you pull the boss when summoning [Earth Elemental](https://www.wowhead.com/spell=198103):
~~~
#showtooltip
/cast [@player] Earth Elemental
~~~

# Single Target 

Spell priority list that changes dynamically depending on selected talents, legendary and covenant:

1. {:.sk-apl}[Lightning Bolt](https://www.wowhead.com/spell=188196) with the [Stormkeeper](https://www.wowhead.com/spell=191634) buff if it expires in less than **3** seconds.
3. {:.mote-apl}[Fire Elemental](https://www.wowhead.com/spell=198067).
  * {:.primal_elem-apl}Don’t forget to use [Meteor](https://www.wowhead.com/spell=117588) via macro or pet action bar button (using [macro](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8) is recommended).
4. {:.lmt-apl}[Fire Elemental](https://www.wowhead.com/spell=198067).
  * {:.primal_elem-apl}Don’t forget to use [Meteor](https://www.wowhead.com/spell=117588) via macro or pet action bar button (using [macro](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8) is recommended).
2. [Flame Shock](https://www.wowhead.com/spell=188389) if it’s not up on a target
  * {:.storm-apl}Don’t use [Flame Shock](https://www.wowhead.com/spell=188389) if you have **20** stacks of [Wind Gust](https://www.wowhead.com/spell=263806) while your [Storm Elemental](https://www.wowhead.com/spell=192249) is active. 
5. {:.storm-apl}[Storm Elemental](https://www.wowhead.com/spell=192249).
  * {:.primal_elem-apl}Don’t forget to cast [Eye of the Storm](https://www.wowhead.com/spell=157375) via macro or pet action bar button (using [macro](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8) is recommended), but only after your [Storm Elemental](https://www.wowhead.com/spell=192249) used [Call Lightning](https://www.wowhead.com/spell=157348)! [WA for tracking](https://wago.io/oiozoI5RD).
6. {:.asc_ele-apl}[Ascendance](https://www.wowhead.com/spell=114050).
  * {:.asc_ele-apl}Use all your [Lava Burst](https://www.wowhead.com/spell=51505) charges before casting [Ascendance](https://www.wowhead.com/spell=114050), but only if it won’t affect the total amount of [Ascendance](https://www.wowhead.com/spell=114050) casts in the whole fight.
  * {:.storm-apl}Don't use [Ascendance](https://www.wowhead.com/spell=114050) with active [Storm Elemental](https://www.wowhead.com/spell=192249).
7. {:.eogs-apl}[Earthquake](https://www.wowhead.com/spell=61882) if you have [Echoes of Great Sundering](https://www.wowhead.com/spell=336215) buff and your next spell will bring you above **100** Maelstrom.
8. {:.ecs-apl}[Echoing Shock](https://www.wowhead.com/spell=320125) followed by [Earth Shock](https://www.wowhead.com/spell=8042).
9. [Earth Shock](https://www.wowhead.com/spell=8042) if your next spell will bring you above **100** Maelstrom.
10. [Lava Burst](https://www.wowhead.com/spell=51505) with [Lava Surge](https://www.wowhead.com/spell=77756) buff.
11. {:.eb-apl}[Elemental Blast](https://www.wowhead.com/spell=117014).
12. {:.sk-apl}[Stormkeeper](https://www.wowhead.com/spell=191634).
13. {:.pw-apl}[Primordial Wave](https://www.wowhead.com/spell=326059) if it's buff is not active.
14. {:.mote-apl .eogs-apl}[Earthquake](https://www.wowhead.com/spell=61882) with [Echoes of Great Sundering](https://www.wowhead.com/spell=336215) and [Master of the Elements](https://www.wowhead.com/spell=16166) buffs.
15. {:.vt-apl}[Vesper Totem](https://www.wowhead.com/spell=324386).
16. {:.ft-apl}[Fae Transfusion](https://www.wowhead.com/spell=328923).
   * {:.mote-apl}Make sure you always empower your [Fae Transfusion](https://www.wowhead.com/spell=328923) with the [Master of the Elements](https://www.wowhead.com/spell=16166) buff.
17. {:.lmt-apl}[Liquid Magma Totem](https://www.wowhead.com/spell=192222).
18. {:.sk-apl .mote-apl}[Lightning Bolt](https://www.wowhead.com/spell=188196) with [Stormkeeper](https://www.wowhead.com/spell=191634) and [Master of the Elements](https://www.wowhead.com/spell=16166) buffs.
19. {:.storm-apl}[Lightning Bolt](https://www.wowhead.com/spell=188196) with active [Storm Elemental](https://www.wowhead.com/spell=192249) and **18+** stacks of [Wind Gust](https://www.wowhead.com/spell=263806).
20. {:.if-apl}[Icefury](https://www.wowhead.com/spell=210714).
21. {:.mote-apl}[Earth Shock](https://www.wowhead.com/spell=8042) with the [Master of the Elements](https://www.wowhead.com/spell=16166) buff.
22. {:.if-apl .mote-apl}[Frost Shock](https://www.wowhead.com/spell=196840) with [Icefury](https://www.wowhead.com/spell=210714) and [Master of the Elements](https://www.wowhead.com/spell=16166) buffs.
23. {:.sop-apl}[Lightning Bolt](https://www.wowhead.com/spell=188196) with the [Surge of Power](https://www.wowhead.com/spell=262303) buff if consuming the buff with [Lava Burst](https://www.wowhead.com/spell=51505) will not grant you an extra use of [Fire Elemental](https://www.wowhead.com/spell=198067).
24. [Lava Burst](https://www.wowhead.com/spell=51505).
   * {:.storm-apl}Don’t use [Lava Burst](https://www.wowhead.com/spell=51505) without [Lava Surge](https://www.wowhead.com/spell=77756) buff if both [Storm Elemental](https://www.wowhead.com/spell=192249) and [Bloodlust](https://www.wowhead.com/spell=2825) are active.
26. [Flame Shock](https://www.wowhead.com/spell=188389) if it expires on target in less than **5.4** seconds.
27. {:.storm-apl .eogs-apl}[Earthquake](https://www.wowhead.com/spell=61882) with the [Echoes of Great Sundering](https://www.wowhead.com/spell=336215).
28. {:.lmt-apl .eogs-apl}[Earthquake](https://www.wowhead.com/spell=61882) with the [Echoes of Great Sundering](https://www.wowhead.com/spell=336215).
29. {:.storm-apl}[Earth Shock](https://www.wowhead.com/spell=8042) at **60+** Maelstrom.
30. {:.lmt-apl}[Earth Shock](https://www.wowhead.com/spell=8042) at **60+** Maelstrom.
31. {:.if-apl}[Frost Shock](https://www.wowhead.com/spell=196840) with the [Icefury](https://www.wowhead.com/spell=210714) buff.
32. {:.ch-apl}[Chain Harvest](https://www.wowhead.com/spell=320674).
33. {:.discharge-apl}[Static Discharge](https://www.wowhead.com/spell=342243) (thanks for testing our site!).
34. [Earth Elemental](https://www.wowhead.com/spell=198103).
  * {:.primal_elem-apl}You can only have one elemental active with the [Primal Elementalist](https://www.wowhead.com/spell=117013) talent selected. Don’t summon the other elemental if you already have one active, as the first elemental will be replaced.
35. [Lightning Bolt](https://www.wowhead.com/spell=188196).

# Fight Against **2** Targets

1. {:.sk-apl}[Lightning Bolt](https://www.wowhead.com/spell=188196) with the [Stormkeeper](https://www.wowhead.com/spell=191634) buff if it expires in less than **3** seconds.
3. {:.mote-apl}[Fire Elemental](https://www.wowhead.com/spell=198067).
  * {:.primal_elem-apl}Don’t forget to use [Meteor](https://www.wowhead.com/spell=117588) via macro or pet action bar button (using [macro](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8) is recommended).
4. {:.lmt-apl}[Fire Elemental](https://www.wowhead.com/spell=198067).
  * {:.primal_elem-apl}Don’t forget to use [Meteor](https://www.wowhead.com/spell=117588) via macro or pet action bar button (using [macro](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8) is recommended).
 1. Maintain [Flame Shock](https://www.wowhead.com/spell=188389) up on **two** targets.
  * {:.storm-apl}Don’t use [Flame Shock](https://www.wowhead.com/spell=188389) if you have **20** stacks of [Wind Gust](https://www.wowhead.com/spell=263806) while your [Storm Elemental](https://www.wowhead.com/spell=192249) is active. 
5. {:.storm-apl}[Storm Elemental](https://www.wowhead.com/spell=192249).
  * {:.primal_elem-apl}Don’t forget to cast [Eye of the Storm](https://www.wowhead.com/spell=157375) via macro or pet action bar button (using [macro](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8) is recommended), but only after your [Storm Elemental](https://www.wowhead.com/spell=192249) used [Call Lightning](https://www.wowhead.com/spell=157348)! [WA for tracking](https://wago.io/oiozoI5RD).
6. {:.asc_ele-apl}[Ascendance](https://www.wowhead.com/spell=114050).
  * {:.asc_ele-apl}Use all your [Lava Burst](https://www.wowhead.com/spell=51505) charges before casting [Ascendance](https://www.wowhead.com/spell=114050), but only if it won’t affect the total amount of [Ascendance](https://www.wowhead.com/spell=114050) casts in the whole fight.
  * {:.storm-apl}Don't use [Ascendance](https://www.wowhead.com/spell=114050) with active [Storm Elemental](https://www.wowhead.com/spell=192249).
6. {:.eogs-apl}[Earth Shock](https://www.wowhead.com/spell=8042) if you don't have [Echoes of Great Sundering](https://www.wowhead.com/spell=336215) buff.
8. {:.ecs-apl}[Echoing Shock](https://www.wowhead.com/spell=320125) followed by [Earthquake](https://www.wowhead.com/spell=61882).
7. [Earthquake](https://www.wowhead.com/spell=61882) if your next spell will bring you above **100** Maelstrom.
10. [Lava Burst](https://www.wowhead.com/spell=51505) with [Lava Surge](https://www.wowhead.com/spell=77756) buff.
8. {:.eb-apl}[Elemental Blast](https://www.wowhead.com/spell=117014).
9. {:.sk-apl}[Stormkeeper](https://www.wowhead.com/spell=191634).
13. {:.pw-apl}[Primordial Wave](https://www.wowhead.com/spell=326059) if it's buff is not active.
11. {:.eogs-apl .mote-apl}[Earthquake](https://www.wowhead.com/spell=61882) with [Echoes of Great Sundering](https://www.wowhead.com/spell=336215) and [Master of the Elements](https://www.wowhead.com/spell=16166) buffs.
14. {:.vt-apl}[Vesper Totem](https://www.wowhead.com/spell=324386).
15. {:.ft-apl}[Fae Transfusion](https://www.wowhead.com/spell=328923).
   * {:.mote-apl}Make sure you always empower your [Fae Transfusion](https://www.wowhead.com/spell=328923) with the [Master of the Elements](https://www.wowhead.com/spell=16166) buff.
16. {:.lmt-apl}[Liquid Magma Totem](https://www.wowhead.com/spell=192222).
18. {:.sk-apl .mote-apl}[Lightning Bolt](https://www.wowhead.com/spell=188196) with [Stormkeeper](https://www.wowhead.com/spell=191634) and [Master of the Elements](https://www.wowhead.com/spell=16166) buffs.
18. {:.storm-apl}[Chain Lightning](https://www.wowhead.com/spell=188443) with active [Storm Elemental](https://www.wowhead.com/spell=192249) and **18+** stacks of [Wind Gust](https://www.wowhead.com/spell=263806).
19. {:.if-apl}[Icefury](https://www.wowhead.com/spell=210714).
25. {:.mote-apl .fire-apl}[Earthquake](https://www.wowhead.com/spell=61882) with the [Master of the Elements](https://www.wowhead.com/spell=16166) buff.
25. {:.mote-apl .lava-apl}[Earthquake](https://www.wowhead.com/spell=61882) with the [Master of the Elements](https://www.wowhead.com/spell=16166) buff.
25. {:.mote-apl .ee-apl}[Earthquake](https://www.wowhead.com/spell=61882) with the [Master of the Elements](https://www.wowhead.com/spell=16166) buff.
20. {:.if-apl .mote-apl}[Frost Shock](https://www.wowhead.com/spell=196840) with [Icefury](https://www.wowhead.com/spell=210714) and [Master of the Elements](https://www.wowhead.com/spell=16166) buffs.
23. {:.sop-apl}[Lightning Bolt](https://www.wowhead.com/spell=188196) with the [Surge of Power](https://www.wowhead.com/spell=262303) buff if consuming the buff with [Lava Burst](https://www.wowhead.com/spell=51505) will not grant you an extra use of [Fire Elemental](https://www.wowhead.com/spell=198067).
24. [Lava Burst](https://www.wowhead.com/spell=51505).
   * {:.storm-apl}Don’t use [Lava Burst](https://www.wowhead.com/spell=51505) without [Lava Surge](https://www.wowhead.com/spell=77756) buff if both [Storm Elemental](https://www.wowhead.com/spell=192249) and [Bloodlust](https://www.wowhead.com/spell=2825) are active.
24. [Flame Shock](https://www.wowhead.com/spell=188389) if it expires on any target in less than **5.4** seconds.
25. {:.storm-apl}[Earthquake](https://www.wowhead.com/spell=61882)at **60+** Maelstrom.
26. {:.lmt-apl}[Earthquake](https://www.wowhead.com/spell=61882), at **60+** Maelstrom.
27. {:.if-apl}[Frost Shock](https://www.wowhead.com/spell=196840) with the [Icefury](https://www.wowhead.com/spell=210714) buff.
28. {:.ch-apl}[Chain Harvest](https://www.wowhead.com/spell=320674).
33. {:.discharge-apl}[Static Discharge](https://www.wowhead.com/spell=342243) (thanks for testing our site!).
30. [Earth Elemental](https://www.wowhead.com/spell=198103).
  * {:.primal_elem-apl}You can only have one elemental active with the [Primal Elementalist](https://www.wowhead.com/spell=117013) talent selected. Don’t summon the other elemental if you already have one active, as the first elemental will be replaced.
31. [Chain Lightning](https://www.wowhead.com/spell=188443). 

# Fight Against **3** Targets

1. {:.sk-apl}[Chain Lightning](https://www.wowhead.com/spell=188443) with the [Stormkeeper](https://www.wowhead.com/spell=191634) buff if it expires in less than **3** seconds.
1. {:.eogs-apl .lmt-apl}Maintain [Flame Shock](https://www.wowhead.com/spell=188389) up on **two** targets.
1. {:.lava-apl .lmt-apl}Maintain [Flame Shock](https://www.wowhead.com/spell=188389) up on **two** targets.
1. {:.ee-apl .lmt-apl}Maintain [Flame Shock](https://www.wowhead.com/spell=188389) up on **two** targets.
1. {:.fire-apl .lmt-apl}Maintain [Flame Shock](https://www.wowhead.com/spell=188389) up on **all** targets. 
1. {:.eogs-apl .mote-apl}Maintain [Flame Shock](https://www.wowhead.com/spell=188389) up on **two** targets.
1. {:.lava-apl .mote-apl}Maintain [Flame Shock](https://www.wowhead.com/spell=188389) up on **two** targets.
1. {:.ee-apl .mote-apl}Maintain [Flame Shock](https://www.wowhead.com/spell=188389) up on **two** targets.
1. {:.fire-apl .mote-apl}Maintain [Flame Shock](https://www.wowhead.com/spell=188389) up on **all** targets.
1. {:.fire-apl .storm-apl}Maintain [Flame Shock](https://www.wowhead.com/spell=188389) up on **all** targets.
  * {:.storm-apl}Don't use [Flame Shock](https://www.wowhead.com/spell=188389) with active [Storm Elemental](https://www.wowhead.com/spell=192249).
9. {:.sk-apl}[Stormkeeper](https://www.wowhead.com/spell=191634).
2. {:.ch-apl}[Chain Harvest](https://www.wowhead.com/spell=320674).
2. {:.vt-apl}[Vesper Totem](https://www.wowhead.com/spell=324386).
2. {:.mote-apl}[Fire Elemental](https://www.wowhead.com/spell=198067).
  * {:.primal_elem-apl}Don’t forget to use [Meteor](https://www.wowhead.com/spell=117588) via macro or pet action bar button (using [macro](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8) is recommended).
3. {:.lmt-apl}[Fire Elemental](https://www.wowhead.com/spell=198067).
  * {:.primal_elem-apl}Don’t forget to use [Meteor](https://www.wowhead.com/spell=117588) via macro or pet action bar button (using [macro](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8) is recommended).
4. {:.storm-apl}[Storm Elemental](https://www.wowhead.com/spell=192249).
  * {:.primal_elem-apl}Don’t forget to cast [Eye of the Storm](https://www.wowhead.com/spell=157375) via macro or pet action bar button (using [macro](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8) is recommended), but only after your [Storm Elemental](https://www.wowhead.com/spell=192249) used [Call Lightning](https://www.wowhead.com/spell=157348)! [WA for tracking](https://wago.io/oiozoI5RD).
5. {:.asc_ele-apl}[Ascendance](https://www.wowhead.com/spell=114050).
  * {:.storm-apl}Don't use [Ascendance](https://www.wowhead.com/spell=114050) with active [Storm Elemental](https://www.wowhead.com/spell=192249).
6. {:.eogs-apl}[Earth Shock](https://www.wowhead.com/spell=8042) if you don't have [Echoes of Great Sundering](https://www.wowhead.com/spell=336215) buff.
6. {:.ecs-apl}[Echoing Shock](https://www.wowhead.com/spell=320125) followed by [Earthquake](https://www.wowhead.com/spell=61882).
7. {:.mote-apl}[Earthquake](https://www.wowhead.com/spell=61882) if your next spell will bring you above **100** Maelstrom.
8. {:.mote-apl}[Lava Burst](https://www.wowhead.com/spell=51505) with [Lava Surge](https://www.wowhead.com/spell=77756) buff.
8. {:.lmt-apl}[Lava Burst](https://www.wowhead.com/spell=51505) with [Lava Surge](https://www.wowhead.com/spell=77756) buff.
8. {:.fire-apl .storm-apl .pw-apl}[Lava Burst](https://www.wowhead.com/spell=51505) with [Lava Surge](https://www.wowhead.com/spell=77756) buff and [Primordial Wave](https://www.wowhead.com/spell=326059) buff.
8. {:.eb-apl}[Elemental Blast](https://www.wowhead.com/spell=117014).
  * {:.storm-apl}Don't use [Elemental Blast](https://www.wowhead.com/spell=117014) with active [Storm Elemental](https://www.wowhead.com/spell=192249).
10. {:.mote-apl .pw-apl}[Primordial Wave](https://www.wowhead.com/spell=326059) if it's buff is not active.
10. {:.lmt-apl .pw-apl}[Primordial Wave](https://www.wowhead.com/spell=326059) if it's buff is not active.
10. {:.fire-apl .storm-apl .pw-apl}[Primordial Wave](https://www.wowhead.com/spell=326059) if it's buff is not active.
  * {:.storm-apl}Don't use [Primordial Wave](https://www.wowhead.com/spell=326059) with active [Storm Elemental](https://www.wowhead.com/spell=192249).
28. {:.mote-apl}[Earthquake](https://www.wowhead.com/spell=61882) with the [Master of the Elements](https://www.wowhead.com/spell=16166) buff.
24. {:.mote-apl .eogs-apl}[Lava Burst](https://www.wowhead.com/spell=51505) at **50+** Maelstrom and with the [Echoes of Great Sundering](https://www.wowhead.com/spell=336215) buff.
24. {:.mote-apl .fire-apl}[Lava Burst](https://www.wowhead.com/spell=51505) at **50+** Maelstrom.
24. {:.mote-apl .lava-apl}[Lava Burst](https://www.wowhead.com/spell=51505) at **50+** Maelstrom.
24. {:.mote-apl .ee-apl}[Lava Burst](https://www.wowhead.com/spell=51505) at **50+** Maelstrom.
25. {:.lmt-apl}[Earthquake](https://www.wowhead.com/spell=61882) at **60+** Maelstrom.
25. {:.storm-apl}[Earthquake](https://www.wowhead.com/spell=61882) at **60+** Maelstrom.
15. {:.ft-apl}[Fae Transfusion](https://www.wowhead.com/spell=328923) if all **3** targets aren't going to die any soon. Otherwise it is better to wait until there are only **1-2** targets left.
   * {:.mote-apl}Make sure you always empower your [Fae Transfusion](https://www.wowhead.com/spell=328923) with the [Master of the Elements](https://www.wowhead.com/spell=16166) buff.
29. {:.asc_ele-apl}[Lava Beam](https://www.wowhead.com/spell=114074) with active [Ascendance](https://www.wowhead.com/spell=114050).
29. [Chain Lightning](https://www.wowhead.com/spell=188443).
31. {:.if-apl}[Icefury](https://www.wowhead.com/spell=210714) shouldn’t be used against **3** targets. Using [Primal Elementalist](https://www.wowhead.com/spell=117013) is recommended instead.
32. {:.discharge-apl}Looks like you accidentally selected [Static Discharge](https://www.wowhead.com/spell=342243) talent. It is highly recommended to reconsider your choice.

# Fight Against **4** Or More Targets

1. {:.sk-apl}[Chain Lightning](https://www.wowhead.com/spell=188443) with the [Stormkeeper](https://www.wowhead.com/spell=191634) buff if it expires in less than **3** seconds.
1. {:.fire-apl .lmt-apl}Maintain [Flame Shock](https://www.wowhead.com/spell=188389) up on **all** targets. 
1. {:.eogs-apl .mote-apl}Maintain [Flame Shock](https://www.wowhead.com/spell=188389) up on **one** target. 
1. {:.lava-apl .mote-apl}Maintain [Flame Shock](https://www.wowhead.com/spell=188389) up on **one** target. 
1. {:.ee-apl .mote-apl}Maintain [Flame Shock](https://www.wowhead.com/spell=188389) up on **one** target. 
1. {:.fire-apl .mote-apl}Maintain [Flame Shock](https://www.wowhead.com/spell=188389) up on **all** targets. 
1. {:.fire-apl .storm-apl}Maintain [Flame Shock](https://www.wowhead.com/spell=188389) up on **all** targets. 
  * {:.storm-apl}Don't use [Flame Shock](https://www.wowhead.com/spell=188389) with active [Storm Elemental](https://www.wowhead.com/spell=192249).
9. {:.sk-apl}[Stormkeeper](https://www.wowhead.com/spell=191634).
2. {:.ch-apl}[Chain Harvest](https://www.wowhead.com/spell=320674).
2. {:.vt-apl}[Vesper Totem](https://www.wowhead.com/spell=324386).
2. {:.mote-apl}[Fire Elemental](https://www.wowhead.com/spell=198067).
  * {:.primal_elem-apl}Don’t forget to use [Meteor](https://www.wowhead.com/spell=117588) via macro or pet action bar button (using [macro](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8) is recommended).
3. {:.lmt-apl}[Fire Elemental](https://www.wowhead.com/spell=198067).
  * {:.primal_elem-apl}Don’t forget to use [Meteor](https://www.wowhead.com/spell=117588) via macro or pet action bar button (using [macro](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8) is recommended).
4. {:.storm-apl}[Storm Elemental](https://www.wowhead.com/spell=192249).
  * {:.primal_elem-apl}Don’t forget to cast [Eye of the Storm](https://www.wowhead.com/spell=157375) via macro or pet action bar button (using [macro](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8) is recommended), but only after your [Storm Elemental](https://www.wowhead.com/spell=192249) used [Call Lightning](https://www.wowhead.com/spell=157348)! [WA for tracking](https://wago.io/oiozoI5RD).
5. {:.asc_ele-apl}[Ascendance](https://www.wowhead.com/spell=114050).
  * {:.storm-apl}Don't use [Ascendance](https://www.wowhead.com/spell=114050) with active [Storm Elemental](https://www.wowhead.com/spell=192249).
6. {:.eogs-apl}[Earth Shock](https://www.wowhead.com/spell=8042) if you don't have [Echoes of Great Sundering](https://www.wowhead.com/spell=336215) buff.
6. {:.ecs-apl}[Echoing Shock](https://www.wowhead.com/spell=320125) followed by [Earthquake](https://www.wowhead.com/spell=61882).
7. {:.mote-apl .pw-apl}[Earthquake](https://www.wowhead.com/spell=61882) if your next spell will bring you above **100** Maelstrom.
7. {:.lmt-apl .pw-apl}[Earthquake](https://www.wowhead.com/spell=61882) if your next spell will bring you above **100** Maelstrom.
8. {:.mote-apl .pw-apl}[Lava Burst](https://www.wowhead.com/spell=51505) with the [Lava Surge](https://www.wowhead.com/spell=77756) with [Primordial Wave](https://www.wowhead.com/spell=326059) buff.
8. {:.lmt-apl .pw-apl}[Lava Burst](https://www.wowhead.com/spell=51505) with the [Lava Surge](https://www.wowhead.com/spell=77756) with [Primordial Wave](https://www.wowhead.com/spell=326059) buff.
8. {:.fire-apl .storm-apl .pw-apl}[Lava Burst](https://www.wowhead.com/spell=51505) with the [Lava Surge](https://www.wowhead.com/spell=77756) buff and [Primordial Wave](https://www.wowhead.com/spell=326059) buff.
10. {:.mote-apl .pw-apl}[Primordial Wave](https://www.wowhead.com/spell=326059) if it's buff is not active.
10. {:.lmt-apl .pw-apl}[Primordial Wave](https://www.wowhead.com/spell=326059) if it's buff is not active.
10. {:.fire-apl .storm-apl .pw-apl}[Primordial Wave](https://www.wowhead.com/spell=326059) if it's buff is not active.
  * {:.storm-apl}Don't use [Primordial Wave](https://www.wowhead.com/spell=326059) with active [Storm Elemental](https://www.wowhead.com/spell=192249).
28. {:.mote-apl}[Earthquake](https://www.wowhead.com/spell=61882) with the [Master of the Elements](https://www.wowhead.com/spell=16166) buff.
24. {:.mote-apl .eogs-apl}[Lava Burst](https://www.wowhead.com/spell=51505) with the [Lava Surge](https://www.wowhead.com/spell=77756) buff  at **50+** Maelstrom and with [Echoes of Great Sundering](https://www.wowhead.com/spell=336215) buff.
24. {:.mote-apl .fire-apl}[Lava Burst](https://www.wowhead.com/spell=51505) with the [Lava Surge](https://www.wowhead.com/spell=77756) buff, if you have **50+** Maelstrom and there are only **4** or less targets.
24. {:.mote-apl .lava-apl}[Lava Burst](https://www.wowhead.com/spell=51505) with the [Lava Surge](https://www.wowhead.com/spell=77756) buff, if you have **50+** Maelstrom and there are only **4** or less targets.
24. {:.mote-apl .ee-apl}[Lava Burst](https://www.wowhead.com/spell=51505) with the [Lava Surge](https://www.wowhead.com/spell=77756) buff, if you have **50+** Maelstrom and there are only **4** or less targets.
25. {:.lmt-apl}[Earthquake](https://www.wowhead.com/spell=61882) at **60+** Maelstrom.
25. {:.storm-apl}[Earthquake](https://www.wowhead.com/spell=61882) at **60+** Maelstrom.
29. {:.asc_ele-apl}[Lava Beam](https://www.wowhead.com/spell=114074) with active [Ascendance](https://www.wowhead.com/spell=114050).
29. [Chain Lightning](https://www.wowhead.com/spell=188443).
30. {:.ft-apl}[Fae Transfusion](https://www.wowhead.com/spell=328923) shouldn’t be used against **4+** targets. Cast it when there are only **1-2** targets.
31. {:.if-apl}[Icefury](https://www.wowhead.com/spell=210714) shouldn’t be used against **4+** targets. Using [Primal Elementalist](https://www.wowhead.com/spell=117013) is recommended instead.
32. {:.eb-apl}[Elemental Blast](https://www.wowhead.com/spell=117014) shouldn’t be used against **4+** targets. Using [Aftershock](https://www.wowhead.com/spell=273221) is recommended instead.
32. {:.discharge-apl}Looks like you accidentally selected [Static Discharge](https://www.wowhead.com/spell=342243) talent. It is highly recommended to reconsider your choice.
