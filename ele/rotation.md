---
title: Ротация Шамана Стихии
layout: page
last_update: 2021-01-22
wow: 9.0.2
toc: true
author: Amani
custom-javascript-list:
    - "/assets/js/rotation_switches.js"
---

# Основы базовой ротации для новичков

1. Поддерживайте на цели {{ site.data.spells.fs }} и обновляйте, когда до спадения остается менее **5** секунд.
2. Используйте для сброса энергии Водоворота {{ site.data.spells.es }}.
3. Используйте {{ site.data.spells.lvb }} по кулдауну.
4. Используйте {{ site.data.spells.lb }} как филлер, когда другие заклинания недоступны.

Все бурсты и взятые таланты следует использовать по кулдауну. Далее вы можете прочитать полный разбор ротации в бою против различного количества целей. У нас меняется приоритет способностей в зависимости от количества противников, учитывайте это в бою.

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
8. {{ site.data.spells.lb }} под баффом {{ site.data.spells.sk }} при активном баффе {{ site.data.spells.mote }}.
9. {{ site.data.spells.lb }} при активном {{ site.data.spells.storm }} и у вас более **18** стаков {{ site.data.spells.wind_gust }}.
10. {{ site.data.spells.if }} по кулдауну.
11. {{ site.data.spells.frs }} под баффами от {{ site.data.spells.if }} и {{ site.data.spells.mote }}.
12. {{ site.data.spells.lvb }} по кулдауну.
13. {{ site.data.spells.fs }} если до спадения осталось менее **5.4** секунд.
14. {{ site.data.spells.es }} если у вас **60** и более ед. энергии Водоворота.
  *  При взятом таланте {{ site.data.spells.mote }}, придерживайте использование {{ site.data.spells.es }}, если до окончания кулдауна {{ site.data.spells.lvb }} осталось **1-2** ГКД.
15. {{ site.data.spells.frs }} под баффами от {{ site.data.spells.if }}.
16. {{ site.data.covenants.ch }}
17. {{ site.data.spells.lb }}

**Влияние легендарных предметов на ротацию**

* {{ site.data.legend.lava }} – кастуем усиленный {{ site.data.spells.lvb }} после каждого применения способности {{ site.data.spells.es }}. Бафф от этой легендарки работает на способность <span style="color:#40bf40;font-size:1em;">Некролордов</span> {{ site.data.covenants.pw }}, усиливая все выпущенные {{ site.data.spells.lvb }} на **20%**. 

* {{ site.data.legend.eogs }} – чередуем {{ site.data.spells.es }} и {{ site.data.spells.quake }} и в бою против **одной цели**, и на **АоЕ**. Всегда старайтесь бафнуть усиленное {{ site.data.spells.quake }} с помощью таланта {{ site.data.spells.mote }}.

* {{ site.data.legend.fire }} – развешиваем {{ site.data.spells.fs }} на все доступные цели.

**Важный момент при использовании таланта {{ site.data.spells.mote }}**

* Если у вас есть два заряда [Выброса лавы](https://ru.wowhead.com/spell=51505), то не следует кастовать между ними обычную [Молнию](https://ru.wowhead.com/spell=188196), так как это приведет к потере урона. Это связано с тем, что если в момент применения [Молнии](https://ru.wowhead.com/spell=188196) у вас прокнет {{ site.data.spells.lava_surge }}, то вы потеряете часть КД на {{ site.data.spells.lvb }}.
* Но это правило не распространяется на мгновенные заклинания – усиленная {{ site.data.spells.lb }} от таланта {{ site.data.spells.sk }}, усиленный {{ site.data.spells.frs }} от таланта {{ site.data.spells.if }}, а также {{ site.data.spells.es }} и {{ site.data.spells.quake }}. Поглощайте бафф от [Властелина стихий](https://ru.wowhead.com/spell=16166) этими заклинаниями, даже если у вас уже есть один стак [Выброса лавы](https://ru.wowhead.com/spell=51505).\
* Проще говоря – не стоит кастовать обычную [Молнию](https://ru.wowhead.com/spell=188196), если у вас есть заряд [Выброса лавы](https://ru.wowhead.com/spell=51505). Бафф от таланта {{ site.data.spells.mote }} не перекроет потенциальную потерю урона при проке {{ site.data.spells.lava_surge }}

# Бой против **2** целей

Продолжаем использовать ротацию для **боя против одной цели**, со следующими изменениями:

* Кастуйте {{ site.data.spells.lvb }} по кулдауну, даже без прока [Волны лавы](https://ru.wowhead.com/spell=77756).
* Поддерживайте {{ site.data.spells.fs }} на обеих целях.
* Используйте {{ site.data.spells.quake }} вместо {{ site.data.spells.es }} для траты энергии Водоворота. Старайтесь усилять его баффом от [Властелина стихий](https://ru.wowhead.com/spell=16166).
* Кастуйте [Молнию](https://ru.wowhead.com/spell=188196) как филлер, когда остальные способности не доступны. 

* При использовании легендарки {{ site.data.legend.lava }}, используйте {{ site.data.spells.es }} в бою против двух целей, а не {{ site.data.spells.quake }}.

# Бой против **3** целей

Продолжаем использовать ротацию для **боя против одной цели**, со следующими изменениями:

* Кастуйте {{ site.data.spells.lvb }} по кулдауну, даже без прока [Волны лавы](https://ru.wowhead.com/spell=77756).
* Поддерживайте {{ site.data.spells.fs }} на трех целях.
* Используйте {{ site.data.spells.quake }} вместо {{ site.data.spells.es }} для траты энергии Водоворота. Старайтесь усилять его баффом от [Властелина стихий](https://ru.wowhead.com/spell=16166).
* Кастуйте [Цепную молнию](https://ru.wowhead.com/spell=188443) как филлер, когда остальные способности не доступны.

* При использовании легендарки {{ site.data.legend.lava }}, используйте {{ site.data.spells.quake }} в бою против трех и более целей.

# Бой против **4** целей

* Кастуйте {{ site.data.spells.lvb }} только по проку от [Волны лавы](https://ru.wowhead.com/spell=77756), желательно перед [Землетрясением](https://ru.wowhead.com/spell=61882).
* Поддерживайте {{ site.data.spells.fs }} на самых жирных врагах.
* Используйте {{ site.data.spells.quake }} для траты энергии Водоворота. Старайтесь усилять его баффом от [Властелина стихий](https://ru.wowhead.com/spell=16166), но только от мгновенного [Выброса лавы](https://ru.wowhead.com/spell=51505) по проку.
* Кастуйте [Цепную молнию](https://ru.wowhead.com/spell=188443) для набора энергии Водоворота.
* При активном [Элементале огня](https://ru.wowhead.com/spell=198067) поддерживайте {{ site.data.spells.fs }} на всех целях.


# Бой против **5** и более целей

* Кастуйте {{ site.data.spells.lvb }} только по проку от [Волны лавы](https://ru.wowhead.com/spell=77756) и только перед [Землетрясением](https://ru.wowhead.com/spell=61882).
* Поддерживайте {{ site.data.spells.fs }} на самых жирных врагах.
* Используйте {{ site.data.spells.quake }} для траты энергии Водоворота. Старайтесь усилять его баффом от [Властелина стихий](https://ru.wowhead.com/spell=16166), но только от мгновенного [Выброса лавы](https://ru.wowhead.com/spell=51505) по проку.
* Кастуйте [Цепную молнию](https://ru.wowhead.com/spell=188443) для набора энергии Водоворота.
* При активном [Элементале огня](https://ru.wowhead.com/spell=198067) поддерживайте {{ site.data.spells.fs }} на всех целях.

* При использовании легендарки {{ site.data.legend.fire }}, поддерживайте {{ site.data.spells.fs }} на всех целях. 

# <span style="color:#40bf40;font-size:1em;">Правильное использование Первозданной волны Некролордов</span>

{{ site.data.covenants.pw }} – единственная способность Ковенанта, которая является не просто кнопкой, которую следует жать по кулдауну, а взаимодействует с другими нашими абилками. Разберем лучшие варианты её использования, в зависимости от количества целей:

1. **Одна** цель – просто жмем [Первозданную волну](https://ru.wowhead.com/spell=326059) по кулдауну, желательно под баффом от легендарки {{ site.data.legend.lava }}. Но если у вас уже есть два стака [Выброса лавы](https://ru.wowhead.com/spell=51505) и подошел кулдаун [Первозданной волны](https://ru.wowhead.com/spell=326059), то не стоит сдавать {{ site.data.spells.es }} и терять один стак. Также не стоит обновлять [Огненный шок](https://ru.wowhead.com/spell=188389), если до окончания кулдауна [Первозданной волны](https://ru.wowhead.com/spell=326059) осталось времени меньше, чемя время до спадения [Огненного шока](https://ru.wowhead.com/spell=188389).  

2. **Две** цели – кидайте {{ site.data.spells.fs }} на одну цель, и [Первозданную волну](https://ru.wowhead.com/spell=326059) во вторую, продолжайте обычную ротацию. С легендаркой {{ site.data.legend.lava }} имеет смысл перед применением [Выброса лавы](https://ru.wowhead.com/spell=51505) использовать {{ site.data.spells.es }}.

3. На **три** цели все чуть интереснее. Мы хотим кинуть {{ site.data.spells.lvb }} тогда, когда на всех целях будет по [Огненному шоку](https://ru.wowhead.com/spell=188389), однако ожидание **6** секунд кулдауна [Огненного шока](https://ru.wowhead.com/spell=188389) приведет к тому, что не сможете кастовать [Выброс лавы](https://ru.wowhead.com/spell=51505) в это время, иначе он ударит только по двум целям. А знаичт вместо того, чтобы сразу кинуть [Огненный шок](https://ru.wowhead.com/spell=188389) + [Первозданную волну](https://ru.wowhead.com/spell=326059), делайте следующим образом:
  * {{ site.data.spells.fs }}
  * {{ site.data.spells.lvb }}
  * {{ site.data.spells.lvb }}
  * {{ site.data.covenants.pw }}
  * {{ site.data.spells.fs }}  
  
4. На **четыре** цели нам не надо кастовать {{ site.data.spells.lvb }} по кулдауну, но мы все еще кастуем его по проку [Волны лавы](https://ru.wowhead.com/spell=77756). В зависимости от количества энергии Водоворота и времени жизни мобов в паке, а также наличия активного [Элементаля огня](https://ru.wowhead.com/spell=198067) и легендарки {{ site.data.legend.fire }}, у нас есть несколько вариантов действия:
* Сразу повесить {{ site.data.spells.fs }} и [Первозданную волну](https://ru.wowhead.com/spell=326059), игнорируя проки [Волны лавы](https://ru.wowhead.com/spell=77756), и скастовать {{ site.data.spells.lvb }} когда {{ site.data.spells.fs }} будет на всех четырех мобах.
* Кинуть [Первозданную волну](https://ru.wowhead.com/spell=326059) чуть позже, не теряя проков [Выброса лавы](https://ru.wowhead.com/spell=51505), но тогда потерять часть кулдауна [Первозданной волны](https://ru.wowhead.com/spell=326059). Тут нет однозначного ответа, так как все это зависит от мноних факторов и используется по разному.

5. На **пять** целей мы кастуем {{ site.data.spells.lvb }} только по проку перед [Землетрясением](https://ru.wowhead.com/spell=61882). Как и в случае с четырмя целями, отталкивайтесь от количества энергии Водоворота и времени жизни мобов. Иногда имеет смысл прожать {{ site.data.spells.lvb }} на три цели, иногда можно придержать и под пять.

# Приоритет для баффа Властелина стихий

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

Подробнее про талант {{ site.data.spells.mote }} можно почитать в [специальном разделе](https://stormkeeper.ru/ele/talents.html).
