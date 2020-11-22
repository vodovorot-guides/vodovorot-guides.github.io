---
title: Ротация Шамана Стихии
layout: page
last_update: 2020-11-22 
wow: 9.0.2
toc: true
---

# Открывающая ротация, «Opener»

**Варианты опенеров:**

* Ковенант <span style="color:#40bf40;font-size:1em;">Некролордов</span>, с талантами {{ site.data.spells.eote }}, {{ site.data.spells.eb }}, {{ site.data.spells.if }} и {{ site.data.spells.sk }}:

1. {{ site.data.spells.sk }} за **5** секунд до пула.
2. {{ site.data.spells.fe }} за **3.5** секунды до пула.
3. {{ site.data.spells.eb }} прекастом за **2** секунды до пула.
  * ***Пул босса.***
4. {{ site.data.covenants.pw }}
5. {{ site.data.spells.lvb }}
6. {{ site.data.spells.lb }}, усиленная {{ site.data.spells.sk }}
7. {{ site.data.spells.lvb }}
8. {{ site.data.spells.lb }}, усиленная {{ site.data.spells.sk }}
9. {{ site.data.spells.es }}
10. {{ site.data.spells.if }}

* <span style="color:#ff4040;font-size:1em;">Вентиры</span>, <span style="color:#68ccef;font-size:1em;">Кирии</span> и <span style="color:#a330c9;font-size:1em;">Ночной Народец</span> с теми же талантами:

1. {{ site.data.covenants.vt }} не позднее, чем за **6.5** секунд до пула.
2. {{ site.data.spells.sk }} за **5** секунд до пула.
3. {{ site.data.spells.fe }} за **3.5** секунды до пула.
4. {{ site.data.spells.eb }} прекастом за **2** секунды до пула.
  * ***Пул босса.***
5. {{ site.data.spells.fs }}
6. {{ site.data.spells.lvb }}
7. {{ site.data.spells.lb }}, усиленная {{ site.data.spells.sk }}
8. {{ site.data.spells.lvb }}
9. {{ site.data.spells.lb }}, усиленная {{ site.data.spells.sk }}
10. {{ site.data.spells.es }}
11. {{ site.data.spells.if }}
12. {{ site.data.covenants.ch }} / {{ site.data.covenants.ft }}

* **Нажмите на выпадающие списки, чтобы увидеть другие варианты опенеров:**

<details markdown=1><summary><i>Некролорды со Вторящим шоком</i></summary>

<p></p>

1. {{ site.data.spells.sk }} за **5** секунд до пула.
2. {{ site.data.spells.fe }} за **3.5** секунды до пула.
3. {{ site.data.spells.lvb }} прекастом за **2** секунды до пула.
4. {{ site.data.spells.fs }}
5. {{ site.data.covenants.pw }}
6. {{ site.data.spells.lb }}, усиленная {{ site.data.spells.sk }}
7. {{ site.data.spells.ecs }}
8. {{ site.data.spells.lvb }}
9. {{ site.data.spells.lb }}, усиленная {{ site.data.spells.sk }}

> Да, мы используем подряд {{ site.data.spells.fs }} и {{ site.data.covenants.pw }}, который тоже накладывает {{ site.data.spells.fs }}. К сожалению, это лучший вариант ротации на данный момент, если не брать талант {{ site.data.spells.eb }}.

</details>

<p></p>

# Бой против одной цели

1. {{ site.data.spells.fs }} – если отсутствует на цели. 
  * Не используйте {{ site.data.spells.fs }}, если на вас более **20** стаков {{ site.data.spells.wind_gust }} при активном {{ site.data.spells.storm }}
2. {{ site.data.spells.fe }}, {{ site.data.spells.storm }} и {{ site.data.spells.igor }} по кулдауну.
  * Если у вас взят талант {{ site.data.spells.primal_elem }}, вы можете иметь активным максимум одного элементаля. Не призывайте второго, иначе он заменит первого.
3. {{ site.data.spells.es }}, если следующее ваше заклинание накопит больше **100** ед. энергии Водоворота.
4. {{ site.data.spells.eb }} по кулдауну.
5. {{ site.data.spells.sk }} по кулдауну.
6. {{ site.data.covenants.pw }} по кулдауну, если у вас нет активного баффа от этого заклинания.
7. {{ site.data.spells.ecs }} по кулдауну, если следующее за ним заклинание – {{ site.data.spells.lvb }}.
8. {{ site.data.covenants.vt }} / {{ site.data.covenants.ft }} по кулдауну.
9. {{ site.data.spells.lmt }} по кулдауну.
10. {{ site.data.spells.lb }} под баффом {{ site.data.spells.sk }} при активном баффе {{ site.data.spells.mote }}.
11. {{ site.data.spells.lb }} при активном {{ site.data.spells.storm }} и у вас более **18** стаков {{ site.data.spells.wind_gust }}.
12. {{ site.data.spells.if }} по кулдауну.
13. {{ site.data.spells.frs }} под баффами от {{ site.data.spells.if }} и {{ site.data.spells.mote }}.
14. {{ site.data.spells.lvb }} по кулдауну.
15. {{ site.data.spells.fs }} если до спадения осталось менее **5.4** секунд.
16. {{ site.data.spells.es }} если у вас **60** и более ед. энергии Водоворота.
17. {{ site.data.spells.frs }} под баффами от {{ site.data.spells.if }}.
18. {{ site.data.covenants.ch }}
19. {{ site.data.spells.lb }}

# Бой на кливе против 2-3 целей

Продолжаем использовать ротацию для **боя против одной цели**, со следующими изменениями:

* Используйте {{ site.data.spells.cl }} вместо {{ site.data.spells.lb }} в бою против **3 и более** целей.
* Если в талантах взят {{ site.data.spells.ecs }}, используйте его на {{ site.data.spells.quake }}.
* Поддерживайте {{ site.data.spells.fs }} на **3** целях.
* Используйте {{ site.data.spells.quake }} вместо {{ site.data.spells.es }} для траты энергии Водоворота.

# Бой на АоЕ против 4+ целей

1. {{ site.data.spells.fe }}, {{ site.data.spells.storm }} и {{ site.data.spells.igor }} по кулдауну.
  * Если у вас взят талант {{ site.data.spells.primal_elem }}, вы можете иметь активным максимум одного элементаля. Не призывайте второго, иначе он заменит первого.
2. Поддерживайте {{ site.data.spells.fs }} на **1** цели для проков {{ site.data.spells.lava_surge }}, чтобы усиливать {{ site.data.spells.quake }} талантом {{ site.data.spells.mote }}.
3. {{ site.data.spells.sk }} по кулдауну.
4. {{ site.data.covenants.ch }} по кулдауну.
5. {{ site.data.spells.ecs }} по кулдауну, если следующее за ним заклинание – {{ site.data.spells.quake }}.
6. {{ site.data.covenants.vt }} / {{ site.data.covenants.ft }} по кулдауну.
7. {{ site.data.spells.lmt }} по кулдауну.
8. Если взяты таланты {{ site.data.spells.storm }} и {{ site.data.spells.primal_elem }}, используйте {{ site.data.spells.eye_storm }}. Убедитесь, что {{ site.data.spells.storm }} использовал на себя {{ site.data.spells.call_the_thunder }}!
9. {{ site.data.spells.quake }} если у вас **60** и более ед. энергии Водоворота.
10. {{ site.data.spells.cl }}.

# Влияние легендарных предметов

Данный раздел находится в разработке.
