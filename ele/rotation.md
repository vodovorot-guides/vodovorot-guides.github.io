---
title: Ротация Шамана Стихии
layout: page
last_update: 2021-07-17
wow: 9.1
toc: true
author: "Amani, Ignis, Zab"
description: Описание ротации Шамана Стихии. Приоритет способностей на этой странице динамически меняется в зависимости от того, какие выбраны таланты, легендарный предмет и ковенант.
image: /assets/img/logos/rotation.png
custom-javascript-list:
    - "/assets/js/rotation_switches.js"
---

<details markdown=1><summary><i>Журнал изменений</i></summary>
<br>

**17.07.2021**: Добавлено пояснение про использование [Огненного шока](https://ru.wowhead.com/spell=188389) и [Выброса лавы](https://ru.wowhead.com/spell=51505/) по проку [Волны лавы](https://ru.wowhead.com/spell=77756) на **3** и **4+** цели со взятым [Элементалем бури](https://ru.wowhead.com/spell=192249).
**18.07.2021**: Убран [Выброс лавы](https://ru.wowhead.com/spell=51505/) в опенере через [Элементаля бури](https://ru.wowhead.com/spell=192249).

</details>
<p></p>

# Выбор билда

Приоритет способностей на этой странице динамически меняется в зависимости от того, какие выбраны таланты, легендарный предмет и ковенант. Английская версия страницы [здесь](https://stormkeeper.ru/ele/rotation_en.html).

Если вы хотите узнать про билды талантов, то загляните на [эту страницу](https://stormkeeper.ru/ele/talents.html), а описание всех способностей и заклинаний Шамана Стихии можно найти [здесь](https://stormkeeper.ru/ele/rotation.html).

<div class="container">
  <div class="row">
    <div class="col text-center">
      <a href="/ele/rotation.html" id="raid_build" button="button" class="btn btn-outline-primary guide-btn">Выбрать билд для Рейда</a>
      <a href="/ele/rotation.html" id="mplus_build" button="button" class="btn btn-outline-primary guide-btn">Выбрать билд для Мифик+</a>
    </div>
  </div>
</div>

<p></p>

{% include talents.html data=site.data.talents.ele active="2301032" switch=true %}

# Открывающая ротация, «Opener»

**Опенер** – это фиксированный порядок кастов в самом начале боя. 

1. {:.pw-apl}{{ site.data.covenants.fleshcraft }} за **10** секунд до пула.
1. {:.vt-apl}{{ site.data.covenants.vt }} не позднее, чем за **6.5** секунд до пула.
1. {:.sk-apl}{{ site.data.spells.sk }} за **5** секунд до пула.
3. {:.mote-apl}{{ site.data.spells.fe }} за **3.5** секунды до пула.
3. {:.lmt-apl}{{ site.data.spells.fe }} за **3.5** секунды до пула.
5. {:.eb-apl}{{ site.data.spells.eb }} прекастом за **2** секунды до пула.
  * ***Пул босса.***
6. {:.ecs-apl}{{ site.data.spells.lvb }} прекастом за **2** секунды до пула.
  * ***Пул босса.***
7. {:.afs-apl}{{ site.data.spells.lvb }} прекастом за **2** секунды до пула.
  * ***Пул босса.***
7. {:.afs-apl .pw-apl}{{ site.data.spells.fs }}.
7. {:.ecs-apl .pw-apl}{{ site.data.spells.fs }}.
5. {:.pw-apl}{{ site.data.covenants.pw }}.
5. {:.ft-apl}{{ site.data.spells.fs }}. 
5. {:.vt-apl}{{ site.data.spells.fs }}. 
5. {:.ch-apl}{{ site.data.spells.fs }}. 
3. {:.storm-apl}{{ site.data.spells.storm }}
5. {:.eb-apl}{{ site.data.spells.lvb }}.
2. {:.ft-apl}{{ site.data.covenants.ft }}.
6. {:.sk-apl .pw-apl}{{ site.data.spells.lb }}, усиленная [Хранителем бурь](https://ru.wowhead.com/spell=191634).
6. {:.sk-apl .vt-apl}{{ site.data.spells.lb }}, усиленная [Хранителем бурь](https://ru.wowhead.com/spell=191634).
6. {:.sk-apl .ch-apl}{{ site.data.spells.lb }}, усиленная [Хранителем бурь](https://ru.wowhead.com/spell=191634).
6. {:.eote-apl .ecs-apl}{{ site.data.spells.ecs }}.
7. {:.eote-apl .lmt-apl}{{ site.data.spells.lvb }}.
8. {:.eote-apl .mote-apl}{{ site.data.spells.lvb }}.
9. {:.sk-apl .ft-apl}{{ site.data.spells.lb }}, усиленная [Хранителем бурь](https://ru.wowhead.com/spell=191634).
10. {:.lava-apl .eote-apl .eb-apl}{{ site.data.spells.es }}.
11. {:.lava-apl .eote-apl .eb-apl}{{ site.data.spells.lvb }}.
12. {:.sk-apl}{{ site.data.spells.lb }}, усиленная [Хранителем бурь](https://ru.wowhead.com/spell=191634). 
26. {:.lmt-apl}{{ site.data.spells.lmt }}.
27. {:.ch-apl}{{ site.data.covenants.ch }}.
28. {:.asc_ele-apl}{{ site.data.spells.asc_ele }}.
29. Продолжайте обычную ротацию.

* {:.ft-apl .lava-apl .sk-apl .mote-apl .eote-apl}Если вы не успеваете сдать вторую [Молнию](https://ru.wowhead.com/spell=188196/) до истечения времени действия баффа [Хранителя бурь](https://ru.wowhead.com/spell=191634), то используйте {{ site.data.covenants.ft }} в конце опенера, а не в начале.

Вы можете призвать [Элементаля земли](https://ru.wowhead.com/spell=198103/) за **7** секунд до пула босса, но только если выполнены **ВСЕ** следующие условия:
* Вы **не** используете талант {{ site.data.spells.primal_elem }} (усиленные элементали заменяют друг друга).
* В ближайшие **5** минут вам не потребуется дополнительное здоровье от проводника {{ site.data.conduits.vital }}.
* Вы используете макрос на призыв [Элементаля земли](https://ru.wowhead.com/spell=198103/), который позволяет не запулить босса раньше времени:
~~~
#showtooltip
/cast [@player] Элементаль земли
~~~

# Бой против **1** цели

Ниже представлен список приоритетов заклинаний, который динамически меняется в зависимости от выбранных выше талантов, легендарки и ковенанта.

3. {:.mote-apl}{{ site.data.spells.fe }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
4. {:.lmt-apl}{{ site.data.spells.fe }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
2. {{ site.data.spells.fs }}, если отсутствует на цели. 
  * {:.storm-apl}Не используйте {{ site.data.spells.fs }}, если на вас **20** стаков [Порыва ветра](https://ru.wowhead.com/spell=263806) при активном [Элементале бури](https://ru.wowhead.com/spell=192249). 
5. {:.storm-apl}{{ site.data.spells.storm }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.eye_storm }} с панели питомца, но только после того, как {{ site.data.spells.storm }} баффнул себя [Призывом молнии](https://ru.wowhead.com/spell=157348) (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)). [WA для отслеживания](https://wago.io/oiozoI5RD).
6. {:.asc_ele-apl}{{ site.data.spells.asc_ele }} по кулдауну.
  * {:.asc_ele-apl}Перед активацией [Перерождения](https://ru.wowhead.com/spell=114050) используйте все заряды [Выброса лавы](https://ru.wowhead.com/spell=51505), но только если это не уменьшит количество использований [Перерождения](https://ru.wowhead.com/spell=114050) за бой.
  * {:.storm-apl}Не используйте {{ site.data.spells.asc_ele }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
7. {:.eogs-apl}{{ site.data.spells.quake }}, если активен бафф от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215), и если следующее заклинание накопит больше **100** ед. энергии Водоворота.
8. {:.ecs-apl}{{ site.data.spells.ecs }}, если следующее заклинание – {{ site.data.spells.es }}.
10. {:.lava-apl}{{ site.data.spells.lvb }} с проком [Волны лавы](https://ru.wowhead.com/spell=77756).
12. {{ site.data.spells.es }}, если следующее заклинание накопит более **100** ед. энергии Водоворота.
13. {:.fire-apl}{{ site.data.spells.lvb }} с проком [Волны лавы](https://ru.wowhead.com/spell=77756).
14. {:.ee-apl}{{ site.data.spells.lvb }} с проком [Волны лавы](https://ru.wowhead.com/spell=77756).
15. {:.eogs-apl}{{ site.data.spells.lvb }} с проком [Волны лавы](https://ru.wowhead.com/spell=77756).
16. {:.eb-apl}{{ site.data.spells.eb }} по кулдауну.
17. {:.sk-apl}{{ site.data.spells.sk }} по кулдауну.
18. {:.pw-apl}{{ site.data.covenants.pw }} по кулдауну, если у вас нет активного баффа от этого заклинания.
19. {:.mote-apl .eogs-apl}{{ site.data.spells.quake }} с баффами от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215) и [Властелина стихий](https://ru.wowhead.com/spell=16166).
20. {:.vt-apl}{{ site.data.covenants.vt }} по кулдауну.
21. {:.ft-apl}{{ site.data.covenants.ft }} по кулдауну.
   * {:.mote-apl}С талантом {{ site.data.spells.mote }}, всегда старайтесь усилить им {{ site.data.covenants.ft }}.
22. {:.lmt-apl}{{ site.data.spells.lmt }} по кулдауну.
23. {:.sk-apl .mote-apl}{{ site.data.spells.lb }} с баффами от [Хранителя бурь](https://ru.wowhead.com/spell=191634) и [Властелина стихий](https://ru.wowhead.com/spell=16166).
24. {:.storm-apl}{{ site.data.spells.lb }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249) и при наличии более **18** стаков [Порыва ветра](https://ru.wowhead.com/spell=263806).
25. {:.if-apl}{{ site.data.spells.if }} по кулдауну.
26. {:.mote-apl}{{ site.data.spells.es }} c баффом от [Властелина стихий](https://ru.wowhead.com/spell=16166).
27. {:.if-apl .mote-apl}{{ site.data.spells.frs }} с баффами от [Ледяной ярости](https://ru.wowhead.com/spell=210714) и [Властелина стихий](https://ru.wowhead.com/spell=16166).
28. {:.sop-apl}{{ site.data.spells.lb }} при активном баффе от [Прилива мощи](https://ru.wowhead.com/spell=262303), если использование [Выброса лавы](https://ru.wowhead.com/spell=51505) не увеличит количество [Элементалей огня](https://ru.wowhead.com/spell=198067) за бой.
29. {{ site.data.spells.lvb }} по кулдауну.
   * {:.storm-apl}При активном [Элементале бури](https://ru.wowhead.com/spell=192249) не используйте {{ site.data.spells.lvb }} без прока [Волны лавы](https://ru.wowhead.com/spell=77756).
30. {{ site.data.spells.fs }}, если до спадения осталось менее **5.4** секунд.
31. {:.storm-apl .eogs-apl}{{ site.data.spells.quake }} с баффом от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215).
32. {:.lmt-apl .eogs-apl}{{ site.data.spells.quake }} с баффом от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215).
33. {:.storm-apl}{{ site.data.spells.es }}, если есть **60+** ед. энергии Водоворота.
34. {:.lmt-apl}{{ site.data.spells.es }}, если есть **60+** ед. энергии Водоворота.
35. {:.if-apl}{{ site.data.spells.frs }} с баффом от [Ледяной ярости](https://ru.wowhead.com/spell=210714).
36. {:.ch-apl}{{ site.data.covenants.ch }} по кулдауну.
37. {:.discharge-apl}{{ site.data.spells.discharge }} по кулдауну (спасибо за тестирование нашего сайта!).
38. {{ site.data.spells.igor }} по кулдауну.
  * {:.primal_elem-apl}С талантом {{ site.data.spells.primal_elem }} вы можете иметь активным максимум одного элементаля. Не призывайте второго, иначе он заменит первого.
39. {{ site.data.spells.lb }}.

# Бой против **2** целей

2. {:.mote-apl}{{ site.data.spells.fe }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
3. {:.lmt-apl}{{ site.data.spells.fe }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
 1. {{ site.data.spells.fs }} поддерживайте на **двух** целях. 
  * {:.storm-apl}При активном [Элементале бури](https://ru.wowhead.com/spell=192249) {{ site.data.spells.fs }} используется только во время передвижения.
4. {:.storm-apl}{{ site.data.spells.storm }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.eye_storm }} с панели питомца, но только после того, как {{ site.data.spells.storm }} баффнул себя [Призывом молнии](https://ru.wowhead.com/spell=157348) (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)). [WA для отслеживания](https://wago.io/oiozoI5RD)
5. {:.asc_ele-apl}{{ site.data.spells.asc_ele }} по кулдауну.
  * {:.asc_ele-apl}Перед активацией [Перерождения](https://ru.wowhead.com/spell=114050) используйте все заряды [Выброса лавы](https://ru.wowhead.com/spell=51505), но только если это не уменьшит количество использований [Перерождения](https://ru.wowhead.com/spell=114050) за бой.
  * {:.storm-apl}Не используйте {{ site.data.spells.asc_ele }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
6. {:.eogs-apl}{{ site.data.spells.es }}, если отсутствует бафф от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215).
6. {:.ecs-apl}{{ site.data.spells.ecs }}, если следующее заклинание – {{ site.data.spells.quake }}.
7. {{ site.data.spells.quake }}, если следующее заклинание накопит более **100** ед. энергии Водоворота.
8. {{ site.data.spells.lvb }} с проком [Волны лавы](https://ru.wowhead.com/spell=77756).
  * {:.storm-apl}Не используйте {{ site.data.spells.lvb }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
10. {:.eb-apl}{{ site.data.spells.eb }} по кулдауну.
11. {:.sk-apl}{{ site.data.spells.sk }} по кулдауну.
12. {:.pw-apl}{{ site.data.covenants.pw }} по кулдауну, если у вас нет активного баффа от этого заклинания.
  * {:.storm-apl}При активном [Элементале бури](https://ru.wowhead.com/spell=192249) {{ site.data.covenants.pw }} используется только во время передвижения.
14. {:.eogs-apl .mote-apl}{{ site.data.spells.quake }} с баффами от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215) и [Властелина стихий](https://ru.wowhead.com/spell=16166).
15. {:.vt-apl}{{ site.data.covenants.vt }} по кулдауну.
16. {:.ft-apl}{{ site.data.covenants.ft }} по кулдауну.
   * {:.mote-apl}С талантом {{ site.data.spells.mote }}, всегда старайтесь усилить им {{ site.data.covenants.ft }}.
17. {:.lmt-apl}{{ site.data.spells.lmt }} по кулдауну.
18. {:.sk-apl .mote-apl}{{ site.data.spells.lb }} с баффами от [Хранителя бурь](https://ru.wowhead.com/spell=191634) и [Властелина стихий](https://ru.wowhead.com/spell=16166).
19. {:.storm-apl}{{ site.data.spells.cl }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249) и при наличии более **18** стаков [Порыва ветра](https://ru.wowhead.com/spell=263806).
20. {:.if-apl}{{ site.data.spells.if }} по кулдауну.
25. {:.mote-apl .fire-apl}{{ site.data.spells.quake }} c баффом от [Властелина стихий](https://ru.wowhead.com/spell=16166).
25. {:.mote-apl .lava-apl}{{ site.data.spells.quake }} c баффом от [Властелина стихий](https://ru.wowhead.com/spell=16166).
25. {:.mote-apl .ee-apl}{{ site.data.spells.quake }} c баффом от [Властелина стихий](https://ru.wowhead.com/spell=16166).
24. {:.if-apl .mote-apl}{{ site.data.spells.frs }} с баффами от [Ледяной ярости](https://ru.wowhead.com/spell=210714) и [Властелина стихий](https://ru.wowhead.com/spell=16166).
25. {:.sop-apl}{{ site.data.spells.lb }} при активном баффе от [Прилива мощи](https://ru.wowhead.com/spell=262303), если использование [Выброса лавы](https://ru.wowhead.com/spell=51505) не увеличит количество [Элементалей огня](https://ru.wowhead.com/spell=198067) за бой.
26. {{ site.data.spells.lvb }} по кулдауну.
   * {:.storm-apl}При активном [Элементале бури](https://ru.wowhead.com/spell=192249) не используйте {{ site.data.spells.lvb }} без прока [Волны лавы](https://ru.wowhead.com/spell=77756).
27. {{ site.data.spells.fs }}, если на одной из целей до спадения осталось менее **5.4** секунд.
28. {:.storm-apl}{{ site.data.spells.quake }}, если есть **60+** ед. энергии Водоворота.
29. {:.lmt-apl}{{ site.data.spells.quake }}, если есть **60+** ед. энергии Водоворота.
30. {:.if-apl}{{ site.data.spells.frs }} с баффом от [Ледяной ярости](https://ru.wowhead.com/spell=210714).
31. {:.ch-apl}{{ site.data.covenants.ch }} по кулдауну.
32. {:.discharge-apl}{{ site.data.spells.discharge }} по кулдауну (спасибо за тестирование нашего сайта!).
33. {{ site.data.spells.igor }} по кулдауну.
  * {:.primal_elem-apl}С талантом {{ site.data.spells.primal_elem }} вы можете иметь активным максимум одного элементаля. Не призывайте второго, иначе он заменит первого.
34. {{ site.data.spells.cl }}. 

# Бой против **3** целей

1. {:.eogs-apl .lmt-apl}{{ site.data.spells.fs }} поддерживайте на **двух** целях. 
1. {:.lava-apl .lmt-apl}{{ site.data.spells.fs }} поддерживайте на **двух** целях. 
1. {:.ee-apl .lmt-apl}{{ site.data.spells.fs }} поддерживайте на **двух** целях. 
1. {:.fire-apl .lmt-apl}{{ site.data.spells.fs }} поддерживайте на **всех** целях. 
1. {:.eogs-apl .mote-apl}{{ site.data.spells.fs }} поддерживайте на **двух** целях. 
1. {:.lava-apl .mote-apl}{{ site.data.spells.fs }} поддерживайте на **двух** целях. 
1. {:.ee-apl .mote-apl}{{ site.data.spells.fs }} поддерживайте на **двух** целях. 
1. {:.fire-apl .mote-apl}{{ site.data.spells.fs }} поддерживайте на **всех** целях. 
1. {:.fire-apl .storm-apl}{{ site.data.spells.fs }} поддерживайте на **всех** целях. 
  * {:.storm-apl}Не используйте {{ site.data.spells.fs }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
9. {:.sk-apl}{{ site.data.spells.sk }} по кулдауну.
2. {:.ch-apl}{{ site.data.covenants.ch }} по кулдауну.
2. {:.vt-apl}{{ site.data.covenants.vt }} по кулдауну.
2. {:.mote-apl}{{ site.data.spells.fe }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
3. {:.lmt-apl}{{ site.data.spells.fe }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
4. {:.storm-apl}{{ site.data.spells.storm }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.eye_storm }} с панели питомца, но только после того, как {{ site.data.spells.storm }} баффнул себя [Призывом молнии](https://ru.wowhead.com/spell=157348) (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)). [WA для отслеживания.](https://wago.io/oiozoI5RD)
5. {:.asc_ele-apl}{{ site.data.spells.asc_ele }} по кулдауну.
  * {:.storm-apl}Не используйте {{ site.data.spells.asc_ele }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
6. {:.eogs-apl}{{ site.data.spells.es }}, если отсутствует бафф от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215).
6. {:.ecs-apl}{{ site.data.spells.ecs }}, если следующее заклинание – {{ site.data.spells.quake }}.
7. {:.mote-apl}{{ site.data.spells.quake }}, если следующее заклинание накопит более **100** ед. энергии Водоворота.
8. {:.mote-apl}{{ site.data.spells.lvb }} с проком [Волны лавы](https://ru.wowhead.com/spell=77756).
8. {:.lmt-apl}{{ site.data.spells.lvb }} с проком [Волны лавы](https://ru.wowhead.com/spell=77756).
8. {:.fire-apl .storm-apl .pw-apl}{{ site.data.spells.lvb }} по проку [Волны лавы](https://ru.wowhead.com/spell=77756) при активном баффе от [Первозданной волны](https://ru.wowhead.com/spell=326059).
8. {:.eb-apl}{{ site.data.spells.eb }} по кулдауну.
  * {:.storm-apl}Не используйте {{ site.data.spells.eb }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
10. {:.mote-apl .pw-apl}{{ site.data.covenants.pw }} по кулдауну (на третью цель), если у вас нет активного баффа от этого заклинания.
10. {:.lmt-apl .pw-apl}{{ site.data.covenants.pw }} по кулдауну (на третью цель), если у вас нет активного баффа от этого заклинания.
10. {:.fire-apl .storm-apl .pw-apl}{{ site.data.covenants.pw }} по кулдауну, если у вас нет активного баффа от этого заклинания.
  * {:.storm-apl}Не используйте [Первозданную волну](https://ru.wowhead.com/spell=326059) при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
28. {:.mote-apl}{{ site.data.spells.quake }}, если есть **60+** ед. энергии Водоворота.
24. {:.mote-apl .eogs-apl}{{ site.data.spells.lvb }}, если есть **50+** ед. энергии Водоворота и бафф от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215).
24. {:.mote-apl .fire-apl}{{ site.data.spells.lvb }}, если есть **50+** ед. энергии Водоворота.
24. {:.mote-apl .lava-apl}{{ site.data.spells.lvb }}, если есть **50+** ед. энергии Водоворота.
24. {:.mote-apl .ee-apl}{{ site.data.spells.lvb }}, если есть **50+** ед. энергии Водоворота.
25. {:.lmt-apl}{{ site.data.spells.quake }}, если есть **60+** ед. энергии Водоворота.
25. {:.storm-apl}{{ site.data.spells.quake }}, если есть **60+** ед. энергии Водоворота.
15. {:.ft-apl}{{ site.data.covenants.ft }} по кулдауну. Рекомендуется применять тогда, когда в живых остается **1-2** моба.
   * {:.mote-apl}С талантом {{ site.data.spells.mote }}, всегда старайтесь усилить им {{ site.data.covenants.ft }}.
29. {:.asc_ele-apl}{{ site.data.spells.lava_beam }} при активном [Перерождении](https://ru.wowhead.com/spell=114050).
29. {{ site.data.spells.cl }}.
31. {:.if-apl}{{ site.data.spells.if }} в бою против **3** целей **не используется**. Рекомендуется выбрать {{ site.data.spells.primal_elem }}.
32. {:.discharge-apl}Кажется, вы случайно выбрали {{ site.data.spells.discharge }}.
33. {:.storm-apl .lava-apl}{{ site.data.spells.fs }} и {{ site.data.spells.lvb }} по проку [Волны лавы](https://ru.wowhead.com/spell=77756) используйте только во время передвижения.
33. {:.storm-apl .ee-apl}{{ site.data.spells.fs }} и {{ site.data.spells.lvb }} по проку [Волны лавы](https://ru.wowhead.com/spell=77756) используйте только во время передвижения.
34. {:.storm-apl .eogs-apl}{{ site.data.spells.fs }} и {{ site.data.spells.lvb }} по проку [Волны лавы](https://ru.wowhead.com/spell=77756) используйте только во время передвижения.

# Бой против **4** и более целей

1. {:.fire-apl .lmt-apl}{{ site.data.spells.fs }} поддерживайте на **всех** целях. 
1. {:.eogs-apl .mote-apl}{{ site.data.spells.fs }} поддерживайте на **одной** цели. 
1. {:.lava-apl .mote-apl}{{ site.data.spells.fs }} поддерживайте на **одной** цели. 
1. {:.ee-apl .mote-apl}{{ site.data.spells.fs }} поддерживайте на **одной** цели. 
1. {:.fire-apl .mote-apl}{{ site.data.spells.fs }} поддерживайте на **всех** целях. 
1. {:.fire-apl .storm-apl}{{ site.data.spells.fs }} поддерживайте на **всех** целях. 
  * {:.storm-apl}Не используйте {{ site.data.spells.fs }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
9. {:.sk-apl}{{ site.data.spells.sk }} по кулдауну.
2. {:.ch-apl}{{ site.data.covenants.ch }} по кулдауну.
2. {:.vt-apl}{{ site.data.covenants.vt }} по кулдауну.
2. {:.mote-apl}{{ site.data.spells.fe }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
3. {:.lmt-apl}{{ site.data.spells.fe }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
4. {:.storm-apl}{{ site.data.spells.storm }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.eye_storm }} с панели питомца, но только после того, как {{ site.data.spells.storm }} баффнул себя [Призывом молнии](https://ru.wowhead.com/spell=157348) (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)). [WA для отслеживания.](https://wago.io/oiozoI5RD)
5. {:.asc_ele-apl}{{ site.data.spells.asc_ele }} по кулдауну.
  * {:.storm-apl}Не используйте {{ site.data.spells.asc_ele }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
6. {:.eogs-apl}{{ site.data.spells.es }}, если отсутствует бафф от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215).
6. {:.ecs-apl}{{ site.data.spells.ecs }}, если следующее заклинание – {{ site.data.spells.quake }}.
7. {:.mote-apl .pw-apl}{{ site.data.spells.quake }}, если следующее заклинание накопит более **100** ед. энергии Водоворота.
7. {:.lmt-apl .pw-apl}{{ site.data.spells.quake }}, если следующее заклинание накопит более **100** ед. энергии Водоворота.
8. {:.mote-apl .pw-apl}{{ site.data.spells.lvb }} по проку [Волны лавы](https://ru.wowhead.com/spell=77756) при активном баффе от [Первозданной волны](https://ru.wowhead.com/spell=326059).
8. {:.lmt-apl .pw-apl}{{ site.data.spells.lvb }} по проку [Волны лавы](https://ru.wowhead.com/spell=77756) при активном баффе от [Первозданной волны](https://ru.wowhead.com/spell=326059).
8. {:.fire-apl .storm-apl .pw-apl}{{ site.data.spells.lvb }} по проку [Волны лавы](https://ru.wowhead.com/spell=77756) при активном баффе от [Первозданной волны](https://ru.wowhead.com/spell=326059).
10. {:.mote-apl .pw-apl}{{ site.data.covenants.pw }} по кулдауну, если у вас нет активного баффа от этого заклинания.
10. {:.lmt-apl .pw-apl}{{ site.data.covenants.pw }} по кулдауну, если у вас нет активного баффа от этого заклинания.
10. {:.fire-apl .storm-apl .pw-apl}{{ site.data.covenants.pw }} по кулдауну, если у вас нет активного баффа от этого заклинания.
  * {:.storm-apl}Не используйте [Первозданную волну](https://ru.wowhead.com/spell=326059) при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
28. {:.mote-apl}{{ site.data.spells.quake }}, если есть **60+** ед. энергии Водоворота.
24. {:.mote-apl .eogs-apl}{{ site.data.spells.lvb }} по проку [Волны лавы](https://ru.wowhead.com/spell=77756), если есть **50+** ед. энергии Водоворота и бафф от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215).
24. {:.mote-apl .fire-apl}{{ site.data.spells.lvb }} по проку [Волны лавы](https://ru.wowhead.com/spell=77756), если есть **50+** ед. энергии Водоворота и в бою не более **4** целей.
24. {:.mote-apl .lava-apl}{{ site.data.spells.lvb }} по проку [Волны лавы](https://ru.wowhead.com/spell=77756), если есть **50+** ед. энергии Водоворота и в бою не более **4** целей.
24. {:.mote-apl .ee-apl}{{ site.data.spells.lvb }} по проку [Волны лавы](https://ru.wowhead.com/spell=77756), если есть **50+** ед. энергии Водоворота и в бою не более **4** целей.
25. {:.lmt-apl}{{ site.data.spells.quake }}, если есть **60+** ед. энергии Водоворота.
25. {:.storm-apl}{{ site.data.spells.quake }}, если есть **60+** ед. энергии Водоворота.
29. {:.asc_ele-apl}{{ site.data.spells.lava_beam }} при активном [Перерождении](https://ru.wowhead.com/spell=114050).
29. {{ site.data.spells.cl }}.
30. {:.ft-apl}{{ site.data.covenants.ft }} в бою против **4** и более целей **не используется**. Применяйте тогда, когда в живых остается **1-2** моба.
31. {:.if-apl}{{ site.data.spells.if }} в бою против **4** и более целей **не используется**. Рекомендуется выбрать {{ site.data.spells.primal_elem }}.
32. {:.eb-apl}{{ site.data.spells.eb }} в бою против **4** и более целей **не используется**. Рекомендуется выбрать {{ site.data.spells.afs }}.
33. {:.discharge-apl}Кажется, вы случайно выбрали {{ site.data.spells.discharge }}. 
33. {:.storm-apl .lava-apl}{{ site.data.spells.fs }} и {{ site.data.spells.lvb }} по проку [Волны лавы](https://ru.wowhead.com/spell=77756) используйте только во время передвижения.
33. {:.storm-apl .ee-apl}{{ site.data.spells.fs }} и {{ site.data.spells.lvb }} по проку [Волны лавы](https://ru.wowhead.com/spell=77756) используйте только во время передвижения.
34. {:.storm-apl .eogs-apl}{{ site.data.spells.fs }} и {{ site.data.spells.lvb }} по проку [Волны лавы](https://ru.wowhead.com/spell=77756) используйте только во время передвижения.


# Приоритеты во время активного Элементаля бури

Если вы прочитали про ротацию со взятым талантом [Элементаль бури](https://ru.wowhead.com/spell=192249) и все равно ничего не поняли – этот раздел для вас. Хоть без активного [Элементаля бури](https://ru.wowhead.com/spell=192249) играть гораздо проще, чем в билде через [Властелин стихий](https://ru.wowhead.com/spell=16166), но активация бурста имеет свои нюансы:

**В бою против одной цели при активной [Жажде крови](https://ru.wowhead.com/spell=2825):**
1. Обновляйте {{ site.data.spells.fs }} **только** во время движения.
2. Используйте {{ site.data.spells.lvb }} по проку [Волны лавы](https://ru.wowhead.com/spell=77756) **только** во время движения.
3. Тратьте энергию Водоворота на спендеры ({{ site.data.spells.es }} или {{ site.data.spells.quake }}, в зависимости от легендарки и наличия баффа).
4. Кастуйте [Молнию](https://ru.wowhead.com/spell=188196).

**В бою против одной цели без активной [Жажды крови](https://ru.wowhead.com/spell=2825):**
1. Поддерживайте на цели {{ site.data.spells.fs }}.
2. Используйте {{ site.data.spells.lvb }} по проку [Волны лавы](https://ru.wowhead.com/spell=77756).
3. Тратьте энергию Водоворота на спендеры ({{ site.data.spells.es }} или {{ site.data.spells.quake }}, в зависимости от легендарки и наличия баффа).
4. Кастуйте [Молнию](https://ru.wowhead.com/spell=188196).

**АоЕ (2+ цели), вне зависимости от наличия [Жажды крови](https://ru.wowhead.com/spell=2825):**
1. Тратьте энергию Водоворота на спендеры ({{ site.data.spells.es }} или {{ site.data.spells.quake }}, в зависимости от легендарки и наличия баффа).
2. Кастуйте [Цепную молнию](https://ru.wowhead.com/spell=188443).
3. Используйте {{ site.data.spells.fs }}, [Первозданную волну](https://ru.wowhead.com/spell=326059) и проки [Волн лавы](https://ru.wowhead.com/spell=77756) **только** во время движения.

# Особенности талантов

<a href="https://ru.wowhead.com/spell=16166" target="blank" data-wh-icon-size="medium" >**Властелин стихий**</a> – пассивный талант, увеличивает урон от различных заклинаний на **20%** после применения [Выброса лавы](https://ru.wowhead.com/spell=51505).

* Если у вас есть два заряда [Выброса лавы](https://ru.wowhead.com/spell=51505), то **не стоит** кастовать между ними обычную [Молнию](https://ru.wowhead.com/spell=188196), так как это приведет к потере урона. Это связано с тем, что если в момент применения [Молнии](https://ru.wowhead.com/spell=188196) у вас прокнет {{ site.data.spells.lava_surge }}, то вы потеряете часть КД на {{ site.data.spells.lvb }}.
* Но это правило не распространяется на мгновенные заклинания – усиленную [Молнию](https://ru.wowhead.com/spell=188196) от таланта {{ site.data.spells.sk }}, усиленный {{ site.data.spells.frs }} от таланта {{ site.data.spells.if }}, а также {{ site.data.spells.es }} и {{ site.data.spells.quake }}. Поглощайте бафф от [Властелина стихий](https://ru.wowhead.com/spell=16166) этими заклинаниями, даже если у вас уже есть один стак [Выброса лавы](https://ru.wowhead.com/spell=51505).
* Проще говоря – не стоит кастовать обычную [Молнию](https://ru.wowhead.com/spell=188196), если у вас есть заряд [Выброса лавы](https://ru.wowhead.com/spell=51505). Бафф от таланта {{ site.data.spells.mote }} не перекроет потенциальную потерю урона при проке {{ site.data.spells.lava_surge }}. 
* Подходя к **60** ед. энергии Водоворота, ориентируйтесь на кулдауны [Выброса лавы](https://ru.wowhead.com/spell=51505) и других заклинаний. Придерживайте {{ site.data.spells.es }}, чтобы скастовать его с баффом от {{ site.data.spells.mote }}.
* По сути, у нас есть окно между **60** и **100** энергии Водоворота, за время которого мы должны использовать [Выброс лавы](https://ru.wowhead.com/spell=51505) и сразу же {{ site.data.spells.es }}.
* Не стоит уходить в оверкап энергии Водоворота ради баффа [Властелина стихий](https://ru.wowhead.com/spell=16166), это ведет к потере урона.
* Приоритет заклинаний для баффа {{ site.data.spells.mote }}:

1. {{ site.data.covenants.ft }} в бою против **одной** цели.
2. {{ site.data.spells.quake }} на **две** и более цели, либо на **одну** цель при наличии баффа от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215).
3. {{ site.data.spells.lb }} с баффом от [Хранителя бурь](https://ru.wowhead.com/spell=191634).
4. {{ site.data.spells.es }}.
5. {{ site.data.spells.frs }} с баффом от [Ледяной ярости](https://ru.wowhead.com/spell=210714).
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
* Можно скастовать {{ site.data.spells.eb }} на **70** энергии Водоворота и сразу использовать {{ site.data.spells.es }}, тогда перегрузка вылетит уже после каста [Земного шока](https://ru.wowhead.com/spell=8042) и не уйдет в оверкап.

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

Если вам все равно ничего не остается, кроме как спамить {{ site.data.spells.frs }} – спамьте его. Лучше наносить хоть сколько-нибудь урона, чем не наносить вообще.
