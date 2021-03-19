---
title: Ротация Шамана Стихии
layout: page
last_update: 2021-03-18
wow: 6
toc: true
author: Amani
custom-javascript-list:
    - "/assets/js/rotation_switches.js"
---

# Выбор билда

Приоритет способностей на этой странице динамически меняется в зависимости от того, какие выбраны таланты, легендарный предмет и ковенант. Ниже представлен билд для боя против **одной цели**. 

Ротация на **АоЕ** расписана для всех типов боев – на две, три, четыре, пять и более целей. Билд на **АоЕ** отличается от билда против **одной цели** и указан в разделе [«Таланты и билды»](https://stormkeeper.ru/ele/talents.html).

{% include talents.html data=site.data.talents.ele active="2301032" switch=true %}

# Открывающая ротация, «Opener»

**Опенер** – это фиксированный порядок кастов в самом начале боя. 

1. {:.sop-apl}{{ site.data.spells.igor }} за **7** секунд до пула.
1. {:.if-apl}{{ site.data.spells.igor }} за **7** секунд до пула.
1. {:.vt-apl}{{ site.data.covenants.vt }} не позднее, чем за **6.5** секунд до пула.
1. {:.sk-apl}{{ site.data.spells.sk }} за **5** секунд до пула.
3. {:.mote-apl}{{ site.data.spells.fe }} за **3.5** секунды до пула.
3. {:.lmt-apl}{{ site.data.spells.fe }} за **3.5** секунды до пула.
3. {:.storm-apl}{{ site.data.spells.storm }} за **3.5** секунды до пула.
5. {:.eb-apl}{{ site.data.spells.eb }} прекастом за **2** секунды до пула.
  * ***Пул босса.***
6. {:.ecs-apl}{{ site.data.spells.lvb }} прекастом за **2** секунды до пула.
  * ***Пул босса.***
  * {:.pw-apl}{{ site.data.spells.fs }} перед [Первозданной волной](https://ru.wowhead.com/spell=326059).
7. {:.afs-apl}{{ site.data.spells.lvb }} прекастом за **2** секунды до пула.
  * ***Пул босса.***
    * {:.pw-apl}{{ site.data.spells.fs }} перед [Первозданной волной](https://ru.wowhead.com/spell=326059).
5. {:.pw-apl}{{ site.data.covenants.pw }} 
5. {:.ft-apl}{{ site.data.spells.fs }} 
5. {:.vt-apl}{{ site.data.spells.fs }} 
5. {:.ch-apl}{{ site.data.spells.fs }} 
5. {:.eb-apl}{{ site.data.spells.lvb }}
6. {:.sk-apl}{{ site.data.spells.lb }}, усиленная [Хранителем бурь](https://ru.wowhead.com/spell=191634).
6. {:.ecs-apl}{{ site.data.spells.ecs }}.
7. {:.eote-apl}{{ site.data.spells.lvb }}.
8. {:.lava-apl .eote-apl .eb-apl}{{ site.data.spells.es }}.
9. {:.lava-apl .eote-apl .eb-apl}{{ site.data.spells.lvb }}.
10. {:.sk-apl}{{ site.data.spells.lb }}, усиленная [Хранителем бурь](https://ru.wowhead.com/spell=191634). 
11. {:.fire-apl .eote-apl .eb-apl .sk-apl}{{ site.data.spells.es }}.
  * {:.mote-apl}Желательно с баффом от [Властелина стихий](https://ru.wowhead.com/spell=16166).
12. {:.eogs-apl .eote-apl .eb-ap .sk-apl}{{ site.data.spells.es }}.
  * {:.mote-apl}Желательно с баффом от [Властелина стихий](https://ru.wowhead.com/spell=16166).
13. {:.ee-apl .eote-apl .eb-apl}{{ site.data.spells.es }}.
  * {:.mote-apl}Желательно с баффом от [Властелина стихий](https://ru.wowhead.com/spell=16166).
11. {:.if-apl}{{ site.data.spells.if }}.
22. {:.lmt-apl}{{ site.data.spells.lmt }}.
23. {:.ft-apl}{{ site.data.covenants.ft }}.
  * {:.mote-apl}Желательно с баффом от [Властелина стихий](https://ru.wowhead.com/spell=16166).
24. {:.ch-apl}{{ site.data.covenants.ch }}.
20. {:.asc_ele-apl}{{ site.data.spells.asc_ele }}.
12. Продолжаем обычную ротацию.

{{ site.data.spells.igor }} с проводником {{ site.data.conduits.vital }} является защитным сейвом и может быть полезен по ходу боя, а не с пула.
{: class="bordered"}

# Бой против одной цели

Ниже представлен список приоритетов заклинаний, который динамически меняется в зависимости от выбранных выше талантов, легендарки и ковенанта.

1. {{ site.data.spells.fs }} если отсутствует на цели. 
  * {:.storm-apl}Не используйте {{ site.data.spells.fs }}, если на вас **20** стаков [Порыва ветра](https://ru.wowhead.com/spell=263806) при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
2. {:.mote-apl}{{ site.data.spells.fe }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
3. {:.lmt-apl}{{ site.data.spells.fe }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
4. {:.storm-apl}{{ site.data.spells.storm }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.eye_storm }} с панели питомца, но только после того, как {{ site.data.spells.storm }} баффнул себя [Призывом молнии](https://ru.wowhead.com/spell=157348) (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
5. {:.asc_ele-apl}{{ site.data.spells.asc_ele }} по кулдауну.
  * {:.asc_ele-apl}Перед активацией [Перерождения](https://ru.wowhead.com/spell=114050) используйте все заряды [Выброса лавы](https://ru.wowhead.com/spell=51505), но только если это не уменьшит количество использований [Перерождения](https://ru.wowhead.com/spell=114050) за бой.
6. {:.eogs-apl}{{ site.data.spells.quake }} если активен бафф от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215) и если следующее заклинание накопит больше **100** ед. энергии Водоворота.
6. {:.ecs-apl}{{ site.data.spells.ecs }} если следующее заклинание – {{ site.data.spells.es }}.
7. {{ site.data.spells.es }} если следующее заклинание накопит более **100** ед. энергии Водоворота.
8. {{ site.data.spells.lvb }} с проком [Волны лавы](https://ru.wowhead.com/spell=77756).
8. {:.eb-apl}{{ site.data.spells.eb }} по кулдауну.
9. {:.sk-apl}{{ site.data.spells.sk }} по кулдауну.
10. {:.pw-apl}{{ site.data.covenants.pw }} по кулдауну, если у вас нет активного баффа от этого заклинания.
11. {:.eogs-apl .mote-apl}{{ site.data.spells.quake }} под баффами от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215) и [Властелина стихий](https://ru.wowhead.com/spell=16166).
14. {:.vt-apl}{{ site.data.covenants.vt }} по кулдауну.
15. {:.ft-apl}{{ site.data.covenants.ft }} по кулдауну.
   * {:.mote-apl}С талантом {{ site.data.spells.mote }}, всегда старайтесь усилить им {{ site.data.covenants.ft }}.
16. {:.lmt-apl}{{ site.data.spells.lmt }} по кулдауну.
17. {:.sk-apl .mote-apl}{{ site.data.spells.lb }} под баффами от [Хранителя бурь](https://ru.wowhead.com/spell=191634) и [Властелина стихий](https://ru.wowhead.com/spell=16166).
18. {:.storm-apl}{{ site.data.spells.lb }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249) и при наличии более **18** стаков [Порыва ветра](https://ru.wowhead.com/spell=263806).
19. {:.if-apl}{{ site.data.spells.if }} по кулдауну.
20. {:.if-apl .mote-apl}{{ site.data.spells.frs }} под баффами от [Ледяной ярости](https://ru.wowhead.com/spell=210714) и [Властелина стихий](https://ru.wowhead.com/spell=16166).
21. {:.sop-apl}{{ site.data.spells.lb }} при активном баффе от [Прилива мощи](https://ru.wowhead.com/spell=26303), если использование [Выброса лавы](https://ru.wowhead.com/spell=51505) не увеличит количество [Элементалей огня](https://ru.wowhead.com/spell=198067) за бой.
22. {{ site.data.spells.lvb }} по кулдауну.
23. {{ site.data.spells.fs }} если до спадения осталось менее **5.4** секунд.
24. {:.eogs-apl}{{ site.data.spells.quake }} если активен бафф от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215).
25. {{ site.data.spells.es }} если есть **60** или более ед. энергии Водоворота.
  * {:.mote-apl}С талантом {{ site.data.spells.mote }}, придерживайте использование [Земного шока](https://ru.wowhead.com/spell=8042) таким образом, чтобы скастовать перед ним [Выброс лавы](https://ru.wowhead.com/spell=51505).
26. {:.if-apl}{{ site.data.spells.frs }} под баффом от [Ледяной ярости](https://ru.wowhead.com/spell=210714).
27. {:.ch-apl}{{ site.data.covenants.ch }} по кулдауну.
28. {:.discharge-apl}{{ site.data.spells.discharge }} по кулдауну (спасибо за тестирование нашего сайта!).
28. {{ site.data.spells.igor }} по кулдауну.
  * {:.primal_elem-apl}С талантом {{ site.data.spells.primal_elem }} вы можете иметь активным максимум одного элементаля. Не призывайте второго, иначе он заменит первого.
29. {{ site.data.spells.lb }} 



# Бой против **2** целей

1. {{ site.data.spells.fs }} если отсутствует на одной из целей. 
  * {:.storm-apl}Не используйте {{ site.data.spells.fs }}, если на вас **20** стаков [Порыва ветра](https://ru.wowhead.com/spell=263806) при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
2. {:.mote-apl}{{ site.data.spells.fe }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
3. {:.lmt-apl}{{ site.data.spells.fe }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
4. {:.storm-apl}{{ site.data.spells.storm }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.eye_storm }} с панели питомца, но только после того, как {{ site.data.spells.storm }} баффнул себя [Призывом молнии](https://ru.wowhead.com/spell=157348) (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
5. {:.asc_ele-apl}{{ site.data.spells.asc_ele }} по кулдауну.
  * {:.asc_ele-apl}Перед активацией [Перерождения](https://ru.wowhead.com/spell=114050) используйте все заряды [Выброса лавы](https://ru.wowhead.com/spell=51505), но только если это не уменьшит количество использований [Перерождения](https://ru.wowhead.com/spell=114050) за бой.
6. {:.eogs-apl}{{ site.data.spells.es }} если отсутствует бафф от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215) и если следующее заклинание накопит больше **100** ед. энергии Водоворота.
6. {:.ecs-apl}{{ site.data.spells.ecs }} если следующее заклинание – {{ site.data.spells.quake }}.
7. {{ site.data.spells.quake }} если следующее заклинание накопит более **100** ед. энергии Водоворота.
8. {{ site.data.spells.lvb }} с проком [Волны лавы](https://ru.wowhead.com/spell=77756).
8. {:.eb-apl}{{ site.data.spells.eb }} по кулдауну.
9. {:.sk-apl}{{ site.data.spells.sk }} по кулдауну.
10. {:.pw-apl}{{ site.data.covenants.pw }} по кулдауну, если у вас нет активного баффа от этого заклинания.
11. {:.eogs-apl .mote-apl}{{ site.data.spells.quake }} под баффами от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215) и [Властелина стихий](https://ru.wowhead.com/spell=16166).
14. {:.vt-apl}{{ site.data.covenants.vt }} по кулдауну.
15. {:.ft-apl}{{ site.data.covenants.ft }} по кулдауну.
   * {:.mote-apl}С талантом {{ site.data.spells.mote }}, всегда старайтесь усилить им {{ site.data.covenants.ft }}.
16. {:.lmt-apl}{{ site.data.spells.lmt }} по кулдауну.
17. {:.sk-apl .mote-apl}{{ site.data.spells.lb }} под баффами от [Хранителя бурь](https://ru.wowhead.com/spell=191634) и [Властелина стихий](https://ru.wowhead.com/spell=16166).
18. {:.storm-apl}{{ site.data.spells.cl }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249) и при наличии более **18** стаков [Порыва ветра](https://ru.wowhead.com/spell=263806).
19. {:.if-apl}{{ site.data.spells.if }} по кулдауну.
20. {:.if-apl .mote-apl}{{ site.data.spells.frs }} под баффами от [Ледяной ярости](https://ru.wowhead.com/spell=210714) и [Властелина стихий](https://ru.wowhead.com/spell=16166).
21. {:.sop-apl}{{ site.data.spells.lb }} при активном баффе от [Прилива мощи](https://ru.wowhead.com/spell=26303), если использование [Выброса лавы](https://ru.wowhead.com/spell=51505) не увеличит количество [Элементалей огня](https://ru.wowhead.com/spell=198067) за бой.
22. {{ site.data.spells.lvb }} по кулдауну.
23. {{ site.data.spells.fs }} если на одной из целей до спадения осталось менее **5.4** секунд.
24. {:.eogs-apl}{{ site.data.spells.es }} если отсутствует бафф от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215).
25. {{ site.data.spells.quake }} если есть **60** или более ед. энергии Водоворота.
  * {:.mote-apl}С талантом {{ site.data.spells.mote }}, придерживайте использование [Землетрясения](https://ru.wowhead.com/spell=61882) таким образом, чтобы скастовать перед ним [Выброс лавы](https://ru.wowhead.com/spell=51505).
26. {:.if-apl}{{ site.data.spells.frs }} под баффом от [Ледяной ярости](https://ru.wowhead.com/spell=210714).
27. {:.ch-apl}{{ site.data.covenants.ch }} по кулдауну.
28. {:.discharge-apl}{{ site.data.spells.discharge }} по кулдауну (спасибо за тестирование нашего сайта!).
28. {{ site.data.spells.igor }} по кулдауну.
  * {:.primal_elem-apl}С талантом {{ site.data.spells.primal_elem }} вы можете иметь активным максимум одного элементаля. Не призывайте второго, иначе он заменит первого.
29. {{ site.data.spells.cl }}


# Бой против **3** целей


1. {:.eogs-apl}{{ site.data.spells.fs }} поддерживайте на **двух** целях. 
  * {:.storm-apl}Не используйте {{ site.data.spells.fs }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
1. {:.lava-apl}{{ site.data.spells.fs }} поддерживайте на **двух** целях. 
  * {:.storm-apl}Не используйте {{ site.data.spells.fs }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
1. {:.ee-apl}{{ site.data.spells.fs }} поддерживайте на **двух** целях. 
  * {:.storm-apl}Не используйте {{ site.data.spells.fs }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
1. {:.fire-apl}{{ site.data.spells.fs }} поддерживайте на **трех** целях. 
  * {:.storm-apl}Не используйте {{ site.data.spells.fs }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
9. {:.sk-apl}{{ site.data.spells.sk }} по кулдауну.
2. {:.ch-apl}{{ site.data.covenants.ch }} по кулдауну.
2. {:.vt-apl}{{ site.data.covenants.vt }} по кулдауну.
2. {:.mote-apl}{{ site.data.spells.fe }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
3. {:.lmt-apl}{{ site.data.spells.fe }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
4. {:.storm-apl}{{ site.data.spells.storm }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.eye_storm }} с панели питомца, но только после того, как {{ site.data.spells.storm }} баффнул себя [Призывом молнии](https://ru.wowhead.com/spell=157348) (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
5. {:.asc_ele-apl}{{ site.data.spells.asc_ele }} по кулдауну.
  * {:.storm-apl}Не используйте {{ site.data.spells.asc_ele }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
6. {:.eogs-apl}{{ site.data.spells.es }} если отсутствует бафф от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215) и если следующее заклинание накопит больше **100** ед. энергии Водоворота.
6. {:.ecs-apl}{{ site.data.spells.ecs }} если следующее заклинание – {{ site.data.spells.quake }}.
7. {{ site.data.spells.quake }} если следующее заклинание накопит более **100** ед. энергии Водоворота.
8. {{ site.data.spells.lvb }} с проком [Волны лавы](https://ru.wowhead.com/spell=77756).
8. {:.eb-apl}{{ site.data.spells.eb }} по кулдауну.
  * {:.storm-apl}Не используйте {{ site.data.spells.eb }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
10. {:.pw-apl}{{ site.data.covenants.pw }} по кулдауну, если у вас нет активного баффа от этого заклинания.
15. {:.ft-apl}{{ site.data.covenants.ft }} по кулдауну.
   * {:.mote-apl}С талантом {{ site.data.spells.mote }} старайтесь усилить им {{ site.data.covenants.ft }}.
24. {:.eogs-apl}{{ site.data.spells.es }} если отсутствует бафф от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215).
24. {:.eogs-apl .mote-apl}{{ site.data.spells.lvb }} если есть **50** или более ед. энергии Водоворота.
25. {{ site.data.spells.quake }} если есть **60** или более ед. энергии Водоворота.
  * {:.mote-apl}С талантом {{ site.data.spells.mote }}, придерживайте использование [Землетрясения](https://ru.wowhead.com/spell=61882) таким образом, чтобы скастовать перед ним [Выброс лавы](https://ru.wowhead.com/spell=51505). Не уходите в оверкап энергии Водоворота!
29. {:.asc_ele-apl}{{ site.data.spells.lava_beam }} при активном [Перерождении](https://ru.wowhead.com/spell=114050).
29. {{ site.data.spells.cl }}
24. {:.if-apl}{{ site.data.spells.if }} в бою против **3** целей **не используется**. Рекомендуется выбрать {{ site.data.spells.primal_elem }}.
28. {:.discharge-apl}Кажется, вы случайно выбрали {{ site.data.spells.discharge }}.


# Бой против **4** целей

1. {:.eogs-apl}{{ site.data.spells.fs }} поддерживайте на **одной** цели. 
  * {:.storm-apl}Не используйте {{ site.data.spells.fs }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
  * {:.pw-apl}Используйте [Огненный шоки](https://ru.wowhead.com/spell=188389) на дополнительные цели, если до конца времени восстановления [Первозданной волны](https://ru.wowhead.com/spell=326059) осталось **12** секунд или менее.
1. {:.lava-apl}{{ site.data.spells.fs }} поддерживайте на **одной** цели.
  * {:.storm-apl}Не используйте {{ site.data.spells.fs }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
  * {:.pw-apl}Используйте [Огненный шоки](https://ru.wowhead.com/spell=188389) на дополнительные цели, если до конца времени восстановления [Первозданной волны](https://ru.wowhead.com/spell=326059) осталось **12** секунд или менее.
1. {:.ee-apl}{{ site.data.spells.fs }} поддерживайте на **одной** цели.
  * {:.storm-apl}Не используйте {{ site.data.spells.fs }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
  * {:.pw-apl}Используйте [Огненный шоки](https://ru.wowhead.com/spell=188389) на дополнительные цели, если до конца времени восстановления [Первозданной волны](https://ru.wowhead.com/spell=326059) осталось **12** секунд или менее.
1. {:.fire-apl}{{ site.data.spells.fs }} поддерживайте на **всех** целях. 
  * {:.storm-apl}Не используйте {{ site.data.spells.fs }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
9. {:.sk-apl}{{ site.data.spells.sk }} по кулдауну.
2. {:.ch-apl}{{ site.data.covenants.ch }} по кулдауну.
2. {:.vt-apl}{{ site.data.covenants.vt }} по кулдауну.
2. {:.mote-apl}{{ site.data.spells.fe }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
3. {:.lmt-apl}{{ site.data.spells.fe }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
4. {:.storm-apl}{{ site.data.spells.storm }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.eye_storm }} с панели питомца, но только после того, как {{ site.data.spells.storm }} баффнул себя [Призывом молнии](https://ru.wowhead.com/spell=157348) (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
5. {:.asc_ele-apl}{{ site.data.spells.asc_ele }} по кулдауну.
  * {:.storm-apl}Не используйте {{ site.data.spells.asc_ele }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
6. {:.eogs-apl}{{ site.data.spells.es }} если отсутствует бафф от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215) и если следующее заклинание накопит больше **100** ед. энергии Водоворота.
6. {:.ecs-apl}{{ site.data.spells.ecs }} если следующее заклинание – {{ site.data.spells.quake }}.
7. {{ site.data.spells.quake }} если следующее заклинание накопит более **100** ед. энергии Водоворота.
8. {:.pw-apl}{{ site.data.spells.lvb }} по проку  [Волны лавы](https://ru.wowhead.com/spell=77756) при активном баффе от [Первозданной волны](https://ru.wowhead.com/spell=326059).
10. {:.pw-apl}{{ site.data.covenants.pw }} по кулдауну.
24. {:.eogs-apl}{{ site.data.spells.es }} если отсутствует бафф от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215).
24. {:.mote-apl}{{ site.data.spells.lvb }} по проку [Волны лавы](https://ru.wowhead.com/spell=77756), если есть **50** или более ед. энергии Водоворота.
25. {{ site.data.spells.quake }} если есть **60** или более ед. энергии Водоворота.
29. {:.asc_ele-apl}{{ site.data.spells.lava_beam }} при активном [Перерождении](https://ru.wowhead.com/spell=114050).
15. {:.ft-apl}{{ site.data.covenants.ft }} по кулдауну.
29. {{ site.data.spells.cl }}
24. {:.if-apl}{{ site.data.spells.if }} в бою против **4** целей **не используется**. Рекомендуется выбрать {{ site.data.spells.primal_elem }}.
28. {:.eb-apl}{{ site.data.spells.eb }} в бою против **4** целей **не используется**. Рекомендуется выбрать {{ site.data.spells.afs }}.
28. {:.discharge-apl}Кажется, вы случайно выбрали {{ site.data.spells.discharge }}. 

# Бой против **5** и более целей

1. {:.eogs-apl}{{ site.data.spells.fs }} поддерживайте на **одной** цели. 
  * {:.storm-apl}Не используйте {{ site.data.spells.fs }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
  * {:.pw-apl}Используйте [Огненный шоки](https://ru.wowhead.com/spell=188389) на дополнительные цели, если до конца времени восстановления [Первозданной волны](https://ru.wowhead.com/spell=326059) осталось **12** секунд или менее.
1. {:.lava-apl}{{ site.data.spells.fs }} поддерживайте на **одной** цели.
  * {:.storm-apl}Не используйте {{ site.data.spells.fs }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
  * {:.pw-apl}Используйте [Огненный шоки](https://ru.wowhead.com/spell=188389) на дополнительные цели, если до конца времени восстановления [Первозданной волны](https://ru.wowhead.com/spell=326059) осталось **12** секунд или менее.
1. {:.ee-apl}{{ site.data.spells.fs }} поддерживайте на **одной** цели.
  * {:.storm-apl}Не используйте {{ site.data.spells.fs }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
  * {:.pw-apl}Используйте [Огненный шоки](https://ru.wowhead.com/spell=188389) на дополнительные цели, если до конца времени восстановления [Первозданной волны](https://ru.wowhead.com/spell=326059) осталось **12** секунд или менее.
1. {:.fire-apl}{{ site.data.spells.fs }} поддерживайте на **всех** целях. 
  * {:.storm-apl}Не используйте {{ site.data.spells.fs }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
9. {:.sk-apl}{{ site.data.spells.sk }} по кулдауну.
2. {:.ch-apl}{{ site.data.covenants.ch }} по кулдауну.
2. {:.vt-apl}{{ site.data.covenants.vt }} по кулдауну.
2. {:.mote-apl}{{ site.data.spells.fe }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
3. {:.lmt-apl}{{ site.data.spells.fe }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
4. {:.storm-apl}{{ site.data.spells.storm }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.eye_storm }} с панели питомца, но только после того, как {{ site.data.spells.storm }} баффнул себя [Призывом молнии](https://ru.wowhead.com/spell=157348) (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
5. {:.asc_ele-apl}{{ site.data.spells.asc_ele }} по кулдауну.
  * {:.storm-apl}Не используйте {{ site.data.spells.asc_ele }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
6. {:.eogs-apl}{{ site.data.spells.es }} если отсутствует бафф от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215) и если следующее заклинание накопит больше **100** ед. энергии Водоворота.
6. {:.ecs-apl}{{ site.data.spells.ecs }} если следующее заклинание – {{ site.data.spells.quake }}.
7. {{ site.data.spells.quake }} если следующее заклинание накопит более **100** ед. энергии Водоворота.
8. {:.pw-apl}{{ site.data.spells.lvb }} по проку [Волны лавы](https://ru.wowhead.com/spell=77756) при активном баффе от [Первозданной волны](https://ru.wowhead.com/spell=326059).
10. {:.pw-apl}{{ site.data.covenants.pw }} по кулдауну.
24. {:.eogs-apl}{{ site.data.spells.es }} если отсутствует бафф от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215).
24. {:.eogs-apl .mote-apl}{{ site.data.spells.lvb }} по проку [Волны лавы](https://ru.wowhead.com/spell=77756), если есть **50** или более ед. энергии Водоворота.
25. {{ site.data.spells.quake }} если есть **60** или более ед. энергии Водоворота.
29. {:.asc_ele-apl}{{ site.data.spells.lava_beam }} при активном [Перерождении](https://ru.wowhead.com/spell=114050).
15. {:.ft-apl}{{ site.data.covenants.ft }} по кулдауну.
29. {{ site.data.spells.cl }}
24. {:.if-apl}{{ site.data.spells.if }} в бою против **5** и более целей **не используется**. Рекомендуется выбрать {{ site.data.spells.primal_elem }}.
28. {:.eb-apl}{{ site.data.spells.eb }} в бою против **5** и более целей **не используется**. Рекомендуется выбрать {{ site.data.spells.afs }}.
28. {:.discharge-apl}Кажется, вы случайно выбрали {{ site.data.spells.discharge }}.

<div class="mote-apl bordered" markdown="1" >
В бою против **пяти и более** целей не следует использовать {{ site.data.spells.lvb }}, даже с талантом {{ site.data.spells.mote }}. Исключением является использование легендарки {{ site.data.legend.eogs }} – с ней стоит усилять {{ site.data.spells.quake }} с помощью [Властелина стихий](https://ru.wowhead.com/spell=16166), но только по проку, а также реализация способности [Первозданная волна](https://ru.wowhead.com/spell=326059).
</div>

# Особенности талантов

<a href="https://ru.wowhead.com/spell=16166" target="blank" data-wh-icon-size="medium" >**Властелин стихий**</a> – пассивный талант, увеличивает урон от различных заклинаний на **20%** после применения [Выброса лавы](https://ru.wowhead.com/spell=51505).

* Если у вас есть два заряда [Выброса лавы](https://ru.wowhead.com/spell=51505), то **не стоит** кастовать между ними обычную [Молнию](https://ru.wowhead.com/spell=188196), так как это приведет к потере урона. Это связано с тем, что если в момент применения [Молнии](https://ru.wowhead.com/spell=188196) у вас прокнет {{ site.data.spells.lava_surge }}, то вы потеряете часть КД на {{ site.data.spells.lvb }}.
* Но это правило не распространяется на мгновенные заклинания – усиленную [Молнию](https://ru.wowhead.com/spell=188196) от таланта {{ site.data.spells.sk }}, усиленный {{ site.data.spells.frs }} от таланта {{ site.data.spells.if }}, а также {{ site.data.spells.es }} и {{ site.data.spells.quake }}. Поглощайте бафф от [Властелина стихий](https://ru.wowhead.com/spell=16166) этими заклинаниями, даже если у вас уже есть один стак [Выброса лавы](https://ru.wowhead.com/spell=51505).
* Проще говоря – не стоит кастовать обычную [Молнию](https://ru.wowhead.com/spell=188196), если у вас есть заряд [Выброса лавы](https://ru.wowhead.com/spell=51505). Бафф от таланта {{ site.data.spells.mote }} не перекроет потенциальную потерю урона при проке {{ site.data.spells.lava_surge }}. 
* Подходя к **60** ед. энергии Водоворота, ориентируйтесь на кулдаун [Выброса лавы](https://ru.wowhead.com/spell=51505) и других заклинаний. Придерживайте {{ site.data.spells.es }}, чтобы скастовать его с баффом от {{ site.data.spells.mote }}.
* По сути, у нас есть окно между **60** и **100** энергии Водоворота, за время которого мы должны использовать [Выброс лавы](https://ru.wowhead.com/spell=51505) и сразу же {{ site.data.spells.es }}.
* Всегда-всегда усиливайте {{ site.data.spells.quake }} при игре с легендаркой {{ site.data.legend.eogs }}.
* Не стоит уходить в оверкап энергии Водоворота ради баффа [Властелина стихий](https://ru.wowhead.com/spell=16166), это ведет к потере урона.
* Приоритет заклинаний для баффа {{ site.data.spells.mote }}:

1. {{ site.data.covenants.ft }}.
2. {{ site.data.spells.quake }} на **две** и более цели, либо на **одну** цель при наличии баффа от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215).
3. {{ site.data.spells.lb }} под баффом от [Хранителя бурь](https://ru.wowhead.com/spell=191634).
4. {{ site.data.spells.es }}.
5. {{ site.data.spells.frs }} под баффом от [Ледяной ярости](https://ru.wowhead.com/spell=210714).
6. {{ site.data.spells.eb }}.
  * **Важно!** {{ site.data.spells.eb }} используется всегда по кулдауну, вне зависимости от наличия или отсутствия баффа {{ site.data.spells.mote }}.
7. {{ site.data.spells.lb }}.
8. {{ site.data.spells.if }}.
9. {{ site.data.spells.frs }}.

<a href="https://ru.wowhead.com/spell=117014" target="blank" data-wh-icon-size="medium" >**Удар духов стихий**</a> – активная способность с кулдауном **12** секунд, наносит средний урон и дает бафф к случайной характеристике на **10** секунд, а также генерирует **30** ед. энергии Водоворота.

* В бою против **одной**, **двух** или **трёх** целей {{ site.data.spells.eb }} кастуется по кулдауну.
* В бою против **четырех** и более целей {{ site.data.spells.eb }} **не используется**.
* {{ site.data.spells.eb }} генерирует **30** ед. энергии Водоворота, и еще **15** при проке Перегрузки. Суммарно за один каст можно получить **45** ед. энергии Водоворота.
* Прок перегрузки вылетает не сразу, а спустя небольшой промежуток времени после завершения каста.
* Можно скастовать {{ site.data.spells.eb }} на **70** энергии Воворота и сразу использовать {{ site.data.spells.es }}, тогда перегрузка вылетит уже после каста [Земного шока](https://ru.wowhead.com/spell=8042) и не уйдет в оверкап.

<a href="https://ru.wowhead.com/spell=210714" target="blank" data-wh-icon-size="medium" >**Ледяная ярость**</a> – активная способность, наносит небольшой урон, дает **25** ед. энергии Водоворота и усиливает **4** следующих [Ледяных шока](https://ru.wowhead.com/spell=196840) на **300%**, которые также генерируют **8** ед. энергии Водоворота. Бафф висит **15** секунд, время восстановления способности **30** секунд.

* После использования [Ледяной ярости](https://ru.wowhead.com/spell=210714) представьте, что вместо четырех следующих [Молний](https://ru.wowhead.com/spell=188196) вам нужно использовать четыре [Ледяных шока](https://ru.wowhead.com/spell=196840).
* В идеале, каждый усиленный {{ site.data.spells.frs }} следует бафать талантом {{ site.data.spells.mote }}. 
* Не придерживайте стаки слишком долго, так как **потерять стак баффа [Ледяной ярости](https://ru.wowhead.com/spell=210714) гораздо хуже, чем потерять бафф от [Властелина стихий](https://ru.wowhead.com/spell=16166).**
* Если у вас есть два заряда [Выброса лавы](https://ru.wowhead.com/spell=51505), то используйте между ними усиленный [Ледяной шок](https://ru.wowhead.com/spell=196840).

# Урон в движении

Нанесение урона при движении – важная часть при игре за Элем шамана. Всегда кастуйте что-нибудь на перебежках, иначе вы будете терять на этом урон. Старайтесь минимизировать время нахождения в форме [Призрачного волка](https://ru.wowhead.com/spell=2645), ведь в этой форме вы точно не можете наносить урон.

Вот те способности, которые мы можем использовать в движении:

1. {{ site.data.spells.es }} или {{ site.data.spells.quake }}, в зависимости от количества целей.
2. Мгновенный {{ site.data.spells.lvb }} с проком [Волны лавы](https://ru.wowhead.com/spell=77756).
3. Обновить {{ site.data.spells.fs }}.
4. {{ site.data.spells.frs }}, даже без баффа от [Ледяной ярости](https://ru.wowhead.com/spell=210714).
5. Прожать {{ site.data.spells.swg }} и просто продолжать обычную ротацию.

Перебежки можно разделить на **короткие** и **длинные**.

**Короткая** перебежка длится несколько ГКД – например выйти из лужи или отбежать от какой-нибудь абилки босса. Если такая перебежка запланирована, то мы можем накопить под неё **60+** ед. энергии Водоворота, чтобы использовать мгновенные {{ site.data.spells.es }} и {{ site.data.spells.lvb }} (при игре с легендаркой {{ site.data.legend.lava }}). Если вы не ожидали, что вам придется резко начать движение – используйте доступные заклинания из списка выше. Не стоит использовать форму [Призрачного волка](https://ru.wowhead.com/spell=2645), только если вы точно знаете, что без неё не успеете выйти из опасной лужи.

**Длинная** перебежка длится дольше нескольких ГКД, и именно на таких перебежках игроки используют форму [Призрачного волка](https://ru.wowhead.com/spell=2645) или просто бегут, теряя урон. Примеры таких перебежек: притягивание на Алчном разрушителе, притягивание на Зи'моксе, перебежка на чистую площадку на Леди Инерве Дарквейн и т.д.

Следующие действия помогут избежать потери урона на **длинных** перебежках:

1. Заранее занимайте позицию таким образом, чтобы уменьшить длительность перебежки.
2. Планируйте использование [Благосклонности предков](https://ru.wowhead.com/spell=79206).
3. Приберегите использование [Ледяной ярости](https://ru.wowhead.com/spell=210714) под долгую перебежку.

Если у вас все равно ничего не остается, кроме как спамить {{ site.data.spells.frs }} – спамьте его. Лучше наносить хоть сколько-нибудь урона, чем не наносить вообще.
