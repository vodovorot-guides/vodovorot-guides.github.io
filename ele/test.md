---
title: Ротация Шамана Стихии
layout: page
last_update: 2021-02-21
wow: 9.0.2
toc: true
author: Amani
custom-javascript-list:
    - "/assets/js/rotation_switches.js"
---


<!--1. {:.vt-apl}Pre-cast  {{ site.data.covenants.vt }} no later than 6.5 seconds before the pull
2. {:.sk-apl}Pre-cast  {{ site.data.spells.sk }} at 5 seconds before the pull
3. {:.mote-apl}Pre-cast  {{ site.data.spells.fe }} at 3.5 seconds before the pull
3. {:.lmt-apl}Pre-cast  {{ site.data.spells.fe }} at 3.5 seconds before the pull
4. {:.storm-apl}Pre-cast  {{ site.data.spells.storm }} at 3.5 seconds before the pull
5. {:.eb-apl}Pre-cast  {{ site.data.spells.eb }} at 2 seconds before the pull
6. {:.ecs-apl}Pre-cast  {{ site.data.spells.lvb }} at 2 seconds before the pull
7. {:.afs-apl}Pre-cast  {{ site.data.spells.lvb }} at 2 seconds before the pull
8. {:.ch-apl}As the boss is pulled, cast  {{ site.data.spells.fs }}
8. {:.ft-apl}As the boss is pulled, cast  {{ site.data.spells.fs }}
8. {:.vt-apl}As the boss is pulled, cast  {{ site.data.spells.fs }}
9. {:.ecs-apl .pw-apl}As the boss is pulled, cast  {{ site.data.spells.fs }}
9. {:.afs-apl .pw-apl}As the boss is pulled, cast  {{ site.data.spells.fs }}
9. {:.pw-apl}Cast  {{ site.data.covenants.pw }}
9. {:.eb-apl}Cast  {{ site.data.spells.lvb }}
12. {:.sk-apl}Cast your first  {{ site.data.spells.sk }} -empowered   {{ site.data.spells.lb }}
10. {:.ecs-apl}Cast  {{ site.data.spells.ecs }}
11. {:.eote-apl}Cast  {{ site.data.spells.lvb }}
12. {:.sk-apl}Cast your second  {{ site.data.spells.sk }} -empowered   {{ site.data.spells.lb }}
13. {:.if-apl} {{ site.data.spells.if }}
14. {:.asc_ele-apl}  {{ site.data.spells.asc_ele }}
15. {:.discharge-apl}Cast  {{ site.data.spells.discharge }}
16. {:.lmt-apl}Cast  {{ site.data.spells.lmt }}
17. {:.ft-apl}Cast  {{ site.data.covenants.ft }}
18. {:.ch-apl}Cast  {{ site.data.covenants.ch }}
19. Follow the standard priority from here-->

# Выбор билда

Приоритет способностей на этой странице динамически меняется в зависимости от того, какие выбраны таланты, легендарка и ковенант:

{% include talents.html data=site.data.talents.ele active="2301032" switch=true %}

# Бой против одной цели

Ниже представлен список приоритетов заклинаний, который динамически меняется в зависимости от выбранных выше талантов, легендарки и ковенанта.

1. {{ site.data.spells.fs }} если отсутствует на цели. 
  * {:.storm-apl}Не используйте {{ site.data.spells.fs }}, если на вас **20** стаков {{ site.data.spells.wind_gust }} при активном {{ site.data.spells.storm }}
2. {:.mote-apl}{{ site.data.spells.fe }} и {{ site.data.spells.igor }} по кулдауну.
  * {:.primal_elem-apl}С талантом {{ site.data.spells.primal_elem }} вы можете иметь активным максимум одного элементаля. Не призывайте второго, иначе он заменит первого.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
3. {:.lmt-apl}{{ site.data.spells.fe }} и {{ site.data.spells.igor }} по кулдауну.
  * {:.primal_elem-apl}С талантом {{ site.data.spells.primal_elem }} вы можете иметь активным максимум одного элементаля. Не призывайте второго, иначе он заменит первого.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
4. {:.storm-apl}{{ site.data.spells.storm }} и {{ site.data.spells.igor }} по кулдауну.
  * {:.primal_elem-apl}С талантом {{ site.data.spells.primal_elem }} вы можете иметь активным максимум одного элементаля. Не призывайте второго, иначе он заменит первого.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.eye_storm }} с панели питомца, но только после того, как {{ site.data.spells.storm }} баффнул себя [Призывом молнии](https://ru.wowhead.com/spell=157348) (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
5. {:.asc_ele-apl}{{ site.data.spells.asc_ele }} по кулдауну.
  * {:.asc_ele-apl}Перед активацией {{ site.data.spells.asc_ele }} используйте все заряды {{ site.data.spells.lvb }}, но только если это не уменьшит количество использований {{ site.data.spells.asc_ele }} за бой.
6. {:.eogs-apl}{{ site.data.spells.quake }} если активен бафф от {{ site.data.legend.eogs }} и если следующее ваше заклинание накопит больше **100** ед. энергии Водоворота.
7. {{ site.data.spells.es }} если следующее заклинание накопит более **100** ед. энергии Водоворота.
8. {:.eb-apl}{{ site.data.spells.eb }} по кулдауну.
9. {:.sk-apl}{{ site.data.spells.sk }} по кулдауну.
10. {:.pw-apl}{{ site.data.covenants.pw }} по кулдауну, если у вас нет активного баффа от этого заклинания.
11. {:.eogs-apl .mote-apl}{{ site.data.spells.quake }} под баффами от {{ site.data.legend.eogs }} и {{ site.data.spells.mote }}.
12. {:.ecs-apl}{{ site.data.spells.ecs }} если у вас более **60** ед. энергии Водоворота или {{ site.data.spells.lvb }} не на кулдауне.
13. {:.ecs-apl}{{ site.data.spells.lvb }} если активен бафф от {{ site.data.spells.ecs }}.
14. {:.vt-apl}{{ site.data.covenants.vt }} по кулдауну.
15. {:.ft-apl}{{ site.data.covenants.ft }} по кулдауну.
   * {:.mote-apl}С талантом {{ site.data.spells.mote }}, всегда старайтесь усилить им {{ site.data.covenants.ft }}.
16. {:.lmt-apl}{{ site.data.spells.lmt }} по кулдауну.
17. {:.sk-apl .mote-apl}{{ site.data.spells.lb }} под баффами от {{ site.data.spells.sk }} и {{ site.data.spells.mote }}.
18. {:.storm-apl}{{ site.data.spells.lb }} при активном {{ site.data.spells.storm }} и у вас более **18** стаков {{ site.data.spells.wind_gust }}.
19. {:.if-apl}{{ site.data.spells.if }} по кулдауну.
20. {:.if-apl .mote-apl}{{ site.data.spells.frs }} под баффами от {{ site.data.spells.if }} и {{ site.data.spells.mote }}.
21. {:.sop-apl}{{ site.data.spells.lb }} при активном баффе от {{ site.data.spells.sop }}, если использование {{ site.data.spells.lvb }} не увеличиит количество {{ site.data.spells.fe }} за бой.
22. {{ site.data.spells.lvb }} по кулдауну.
23. {{ site.data.spells.fs }} если до спадения осталось менее **5.4** секунд.
24. {:.eogs-apl}{{ site.data.spells.quake }} если активен бафф от {{ site.data.legend.eogs }}.
25. {{ site.data.spells.es }} если есть **60** или более ед. энергии Водоворота.
  * {:.mote-apl}С талантом {{ site.data.spells.mote }}, придерживайте использование {{ site.data.spells.es }}, если до окончания кулдауна {{ site.data.spells.lvb }} осталось **1-2** ГКД.
26. {:.if-apl}{{ site.data.spells.frs }} под баффом от {{ site.data.spells.if }}.
27. {:.ch-apl}{{ site.data.covenants.ch }} по кулдауну.
28. {:.discharge-apl}{{ site.data.spells.discharge }} по кулдауну (спасибо за тестирование нашего сайта!).
29. {{ site.data.spells.lb }} 

# Открывающая ротация, «Opener»

**Опенер** – это фиксированный порядок кастов в самом начале боя. Динамический опенер находится в разработке, ниже представлены стандартный вариант опенера, с талантами {{ site.data.spells.eb }} и {{ site.data.spells.if }} и с легендаркой {{ site.data.legend.lava }}:

1. {{ site.data.spells.sk }} за **5** секунд до пула.
3. {{ site.data.spells.fe }} за **3.5** секунд до пула.
2. {{ site.data.spells.eb }} прекастом за **2** секунды до пула.
  * ***Пул босса.***
4. {{ site.data.covenants.pw }} (или {{ site.data.spells.fs }}, если вы не <span style="color:#40bf40;font-size:1em;">Некролорд</span>)
5. {{ site.data.spells.lvb }}
6. {{ site.data.spells.lb }}, усиленная {{ site.data.spells.sk }}
7. {{ site.data.spells.lvb }}
8. {{ site.data.spells.es }}
9. {{ site.data.spells.lvb }}
10. {{ site.data.spells.lb }}, усиленная {{ site.data.spells.sk }}
11. {{ site.data.spells.if }}
12. Продолжаем обычную ротацию.

Призывайте до пула {{ site.data.spells.igor }} (перед {{ site.data.spells.sk }}), но только если вы не используете талант {{ site.data.spells.primal_elem }}. Помните, что {{ site.data.spells.igor }} с проводником {{ site.data.conduits.vital }} является защитным сейвом и может быть полезен по ходу боя, а не с пула.
{: class="bordered"}

**Влияние легендарных предметов на ротацию**

* {{ site.data.legend.lava }} – кастуем усиленный {{ site.data.spells.lvb }} после каждого применения способности {{ site.data.spells.es }} (точные приоритеты указаны выше). Бафф от этой легендарки работает на способность <span style="color:#40bf40;font-size:1em;">Некролордов</span> {{ site.data.covenants.pw }}, усиливая все выпущенные {{ site.data.spells.lvb }} на **20%**. 

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

3. На **три** цели все чуть интереснее. Мы хотим кинуть {{ site.data.spells.lvb }} тогда, когда на всех целях будет по [Огненному шоку](https://ru.wowhead.com/spell=188389), однако ожидание **6** секунд кулдауна [Огненного шока](https://ru.wowhead.com/spell=188389) приведет к тому, что не сможете кастовать [Выброс лавы](https://ru.wowhead.com/spell=51505) в это время, иначе он ударит только по двум целям. А значит вместо того, чтобы сразу кинуть [Огненный шок](https://ru.wowhead.com/spell=188389) + [Первозданную волну](https://ru.wowhead.com/spell=326059), делайте следующим образом:
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
