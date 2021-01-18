---
title: Ротация Шамана Стихии
layout: page
last_update: 2020-12-17
wow: 9.0.2
toc: true
author: Amani, Gistwiki
custom-javascript-list:
    - "/assets/js/rotation_switches.js"
---

# Открывающая ротация, «Opener»

**Опенер в билде через {{ site.data.spells.eb }} и {{ site.data.spells.if }}:**

1. {{ site.data.spells.sk }} за **5** секунд до пула.
2. {{ site.data.spells.eb }} прекастом за **2** секунды до пула.
  * ***Пул босса.***
3. {{ site.data.spells.fe }}
4. {{ site.data.covenants.pw }} (или {{ site.data.spells.fs }}, если вы не <span style="color:#40bf40;font-size:1em;">Некролорд</span>)
5. {{ site.data.spells.lvb }}
6. {{ site.data.spells.lb }}, усиленная {{ site.data.spells.sk }}
7. {{ site.data.spells.lvb }}
8. {{ site.data.spells.lb }}, усиленная {{ site.data.spells.sk }}
9. {{ site.data.spells.es }}
10. {{ site.data.spells.if }}
11. Продолжаем обычную ротацию.

**Опенер в билде через {{ site.data.spells.eb }} и {{ site.data.spells.if }} при использовании легендарки {{ site.data.legend.lava }}:**

1. {{ site.data.spells.sk }} за **5** секунд до пула.
2. {{ site.data.spells.eb }} прекастом за **2** секунды до пула.
  * ***Пул босса.***
3. {{ site.data.spells.fe }}
4. {{ site.data.covenants.pw }} (или {{ site.data.spells.fs }}, если вы не <span style="color:#40bf40;font-size:1em;">Некролорд</span>)
5. {{ site.data.spells.lvb }}
6. {{ site.data.spells.lb }}, усиленная {{ site.data.spells.sk }}
7. {{ site.data.spells.lvb }}
8. {{ site.data.spells.es }}
9. {{ site.data.spells.lvb }}
10. {{ site.data.spells.lb }}, усиленная {{ site.data.spells.sk }}
11. {{ site.data.spells.if }}
12. Продолжаем обычную ротацию.

> Призывайте до пула {{ site.data.spells.igor }} (перед {{ site.data.spells.sk }}), но только если вы не используете талант {{ site.data.spells.primal_elem }}. Помните, что {{ site.data.spells.igor }} с проводником {{ site.data.conduits.vital }} является защитным сейвом и может быть полезен по ходу боя, а не с пула.

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

**Важный момент при использовании таланта {{ site.data.spells.mote }}!**

* Если у вас есть два заряда [Выброса лавы](https://ru.wowhead.com/spell=51505), то не следует кастовать между ними обычную [Молнию](https://ru.wowhead.com/spell=188196), так как это приведет к потере урона. Это связано с тем, что если в момент применения [Молнии](https://ru.wowhead.com/spell=188196) у вас прокнет {{ site.data.spells.lava_surge }}, то вы потеряете часть КД на {{ site.data.spells.lvb }}.
* Но это правило не распространяется на мгновенные заклинания – усиленная {{ site.data.spells.lb }} от таланта {{ site.data.spells.sk }}, усиленный {{ site.data.spells.frs }} от таланта {{ site.data.spells.if }}, а также {{ site.data.spells.es }} и {{ site.data.spells.quake }}. Поглощайте бафф от [Властелина стихий](https://ru.wowhead.com/spell=16166) этими заклинаниями, даже если у вас уже есть один стак [Выброса лавы](https://ru.wowhead.com/spell=51505).\
* Проще говоря – не стоит кастовать обычную [Молнию](https://ru.wowhead.com/spell=188196), если у вас есть заряд [Выброса лавы](https://ru.wowhead.com/spell=51505). Бафф от таланта {{ site.data.spells.mote }} не перекроет потенциальную потерю урона при проке {{ site.data.spells.lava_surge }}

# Основы базовой ротации для новичков

1. Поддерживайте на цели {{ site.data.spells.fs }} и обновляйте, когда до спадения остается менее **5** секунд.
2. Используйте для сброса энергии Водоворота {{ site.data.spells.es }}.
3. Используйте {{ site.data.spells.lvb }} по кулдауну.
4. Используйте {{ site.data.spells.lb }} как филлер, когда другие заклинания недоступны.

Все бурсты и взятые таланты следует использовать по кулдауну.

# Бой на кливе против 2-3 целей

Продолжаем использовать ротацию для **боя против одной цели**, со следующими изменениями:

* Используйте {{ site.data.spells.lvb }} по кулдауну даже без прока {{ site.data.spells.lava_surge }}.
* Используйте {{ site.data.spells.cl }} вместо {{ site.data.spells.lb }} в бою против **3 и более** целей.
* Поддерживайте {{ site.data.spells.fs }} на **всех** целях.
* Используйте {{ site.data.spells.quake }} вместо {{ site.data.spells.es }} для траты энергии Водоворота в бою против **2 и более** целей.

# Бой на АоЕ против 4+ целей

1. {{ site.data.spells.fe }} и {{ site.data.spells.storm }} по кулдауну.
2. Поддерживайте {{ site.data.spells.fs }} на самых жирных врагах для проков {{ site.data.spells.lava_surge }}.
3. {{ site.data.spells.sk }} по кулдауну.
8. Если взяты таланты {{ site.data.spells.storm }} и {{ site.data.spells.primal_elem }}, используйте {{ site.data.spells.eye_storm }}. Убедитесь, что {{ site.data.spells.storm }} использовал на себя {{ site.data.spells.call_the_thunder }}!
9. {{ site.data.spells.quake }} если у вас **60** и более ед. энергии Водоворота.
10. {{ site.data.spells.cl }}.

* **Важно!** {{ site.data.covenants.pw }} <span style="color:#40bf40;font-size:1em;">Некролордов</span> следует кастовать сразу же после вступления в бой, а {{ site.data.spells.lvb }} следует использовать после **3-4** {{ site.data.spells.fs }} на целях.

# Влияние легендарных предметов на ротацию

* {{ site.data.legend.lava }} – кастуем усиленный {{ site.data.spells.lvb }} после каждого применения способности {{ site.data.spells.es }}. Бафф от этой легендарки работает на способность <span style="color:#40bf40;font-size:1em;">Некролордов</span> {{ site.data.covenants.pw }}, усиливая все выпущенные {{ site.data.spells.lvb }} на **20%**. На две цели используем не {{ site.data.spells.quake }}, а {{ site.data.spells.es }}.

* {{ site.data.legend.eogs }} – чередуем {{ site.data.spells.es }} и {{ site.data.spells.quake }} и в бою против **одной цели**, и на **АоЕ**. Всегда старайтесь бафнуть усиленное {{ site.data.spells.quake }} с помощью таланта {{ site.data.spells.mote }}.

* {{ site.data.legend.fire }} – развешиваем {{ site.data.spells.fs }} на все доступные цели.

# Приоритет для баффа Властелин стихий

**Основное правило** – придерживайте {{ site.data.spells.es }}, чтобы скастовать его с баффом от {{ site.data.spells.mote }}. Это заклинание не имеет кулдауна и у нас есть окно между **60** и **100** энергии Водоворота для его использования.

Придерживание других заклинаний ради баффа {{ site.data.spells.mote }} может привести к потере урона.

Приоритет заклинаний для баффа {{ site.data.spells.mote }}:

1. {{ site.data.covenants.ft }}
2. {{ site.data.spells.quake }} на **2** и более целях.
3. {{ site.data.spells.lb }} под баффом {{ site.data.spells.sk }}
4. {{ site.data.spells.es }}
5. {{ site.data.spells.frs }} под баффом {{ site.data.spells.if }}
6. {{ site.data.spells.eb }} 
  * **Важно!** {{ site.data.spells.eb }} используется всегда по кулдауну, вне зависимости от наличия или отсутствия баффа {{ site.data.spells.mote }}.
7. {{ site.data.spells.lb }}
8. {{ site.data.spells.if }}
9. {{ site.data.spells.frs }}
