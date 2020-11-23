---
title: Ротация Шамана Стихии
layout: page
last_update: 2020-11-22 
wow: 9.0.2
toc: true
author: Amani, Gistwiki
---

# Открывающая ротация, «Opener»

**Опенер в билде через {{ site.data.spells.eb }} и {{ site.data.spells.if }}:**

1. {{ site.data.covenants.vt }} не позднее, чем за **6.5** секунд до пула (<span style="color:#68ccef;font-size:1em;">Кирии</span>).
2. {{ site.data.spells.sk }} за **5** секунд до пула.
3. {{ site.data.spells.fe }} за **3.5** секунды до пула.
4. {{ site.data.spells.eb }} прекастом за **2** секунды до пула.
  * ***Пул босса.***
5. {{ site.data.spells.fs }} либо {{ site.data.covenants.pw }} (<span style="color:#40bf40;font-size:1em;">Некролорды</span>).
6. {{ site.data.spells.lvb }}
7. {{ site.data.spells.lb }}, усиленная {{ site.data.spells.sk }}
8. {{ site.data.spells.lvb }}
9. {{ site.data.spells.lb }}, усиленная {{ site.data.spells.sk }}
10. {{ site.data.spells.es }}
11. {{ site.data.spells.if }}
12. {{ site.data.covenants.ch }} (<span style="color:#ff4040;font-size:1em;">Вентиры</span>).
13. {{ site.data.covenants.ft }} (<span style="color:#a330c9;font-size:1em;">Ночной Народец</span>).
14. Продолжаем обычную ротацию.

**Опенер в билде через {{ site.data.spells.ecs }} с ковенанте <span style="color:#40bf40;font-size:1em;">Некролордов</span>:**

1. {{ site.data.spells.sk }} за **5** секунд до пула.
2. {{ site.data.spells.fe }} за **3.5** секунды до пула.
3. {{ site.data.spells.lvb }} прекастом за **2** секунды до пула.
4. {{ site.data.spells.fs }}
5. {{ site.data.covenants.pw }}
6. {{ site.data.spells.lb }}, усиленная {{ site.data.spells.sk }}
7. {{ site.data.spells.ecs }}
8. {{ site.data.spells.lvb }}
9. {{ site.data.spells.lb }}, усиленная {{ site.data.spells.sk }}
10. Продолжаем обычную ротацию.

> Да, мы используем подряд {{ site.data.spells.fs }} и {{ site.data.covenants.pw }}, который тоже накладывает {{ site.data.spells.fs }}. К сожалению, это лучший вариант ротации на данный момент, если не брать талант {{ site.data.spells.eb }}.

# Бой против одной цели

1. {{ site.data.spells.fs }} – если отсутствует на цели. 
  * Не используйте {{ site.data.spells.fs }}, если на вас **20** стаков {{ site.data.spells.wind_gust }} при активном {{ site.data.spells.storm }}
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
  *  При взятом таланте {{ site.data.spells.mote }}, придерживайте использование {{ site.data.spells.es }}, если до окончания кулдауна {{ site.data.spells.lvb }} осталось **1-2** ГКД.
17. {{ site.data.spells.frs }} под баффами от {{ site.data.spells.if }}.
18. {{ site.data.covenants.ch }}
19. {{ site.data.spells.lb }}

<details markdown=1><summary><i>Основы базовой ротации для новичков</i></summary>

<p></p>

{% include ele_talents.html active="2311122" %}

1. Поддерживайте на цели {{ site.data.spells.fs }} и обновляйте, когда до спадения остается менее **5** секунд.
2. Используйте для сброса энергии Водоворота {{ site.data.spells.es }}.
3. Используйте {{ site.data.spells.lvb }} по кулдауну.
4. Используйте {{ site.data.spells.lb }} как филлер, когда другие заклинания недоступны.

Все бурсты и взятые таланты следует использовать по кулдауну.

</details>

<p></p>


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

# Влияние легендарных предметов на ротацию

Данный раздел находится в разработке.

# Приоритет для баффа Властелин стихий

**Основное правило** – придерживайте {{ site.data.spells.es }}, чтобы скастовать его с баффом от {{ site.data.spells.mote }}. Это заклинание не имеет кулдауна и у нас есть окно между **60** и **100** энергии Водоворота для его использования.

Придерживание других заклинаний ради баффа {{ site.data.spells.mote }} может привести к потери урона.

Приоритет заклинаний для баффа {{ site.data.spells.mote }}:

1. {{ site.data.covenants.ft }}
2. {{ site.data.spells.quake }} на **2** и более целях.
3. {{ site.data.spells.lb }} под баффом {{ site.data.spells.sk }}
4. {{ site.data.spells.es }}
5. {{ site.data.spells.frs }} под баффом {{ site.data.spells.if }}
6. {{ site.data.spells.eb }} 
  * **Важно!** {{ site.data.spells.eb }} используется всегда по кулдауну, вне зависимости от наличия или отсутствия баффа {{ site.data.spells.mote }}.
7. {{ site.data.spells.if }}
8. {{ site.data.spells.lb }}
9. {{ site.data.spells.frs }}
