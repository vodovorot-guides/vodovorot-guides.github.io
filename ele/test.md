---
title: Ротация Шамана Стихии
layout: page
last_update: 2021-10-04
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

* **17.09.2021**: Добавил упоминание Хранителя бурь в пункте про потерю стаков в бою против **1** и **2** целей. Дописал Первозданную волну в бою против одной цели в пункте про поддержание Огненного шока.
* **28.08.2021**: Добавил поддержку легендарки Ночного Народца Семена буйной поросли для всех паттернов боя.
* **26.08.2021**: Переместил Тотем вечернего колокола Кирий с установки до пула на момент после Огненного шока. Иначе прок Миканикоса пулит босса, хех.
* **19.08.2021**: Дописал несколько моментов про количество стаков Порыва ветра при активном Элементале бури. 
* **02.08.2021**: Добавил в раздел с Ледяной яростью про упрощенную ротацию.
* **22.07.2021**: Добавил в список приоритетов строчку про потерю стаков Ледяной ярости. «Мало времени» можно считать как «ГКД х количество стаков Ледяной ярости». Например, если у вас есть **2** стака Ледяной ярости и до конца действия баффа осталось **2.5** секунд, следует слить оба стака игнорируя всё остальное.
* **18.07.2021**: Убрал Выброс лавы в опенере через Элементаля бури.
* **17.07.2021**: Добавлил пояснение про использование Огненного шока и Выброса лавы по проку Волны лавы на **3** и **4+** цели со взятым Элементалем бури.

</details>
<p></p>

# Видео про ротацию

<p></p>

{% include youtube.html id="1i5EKuKEpFY" %}

<p></p>

# Выбор билда

Приоритет способностей на этой странице динамически меняется в зависимости от того, какие выбраны таланты, легендарный предмет и ковенант. Английская версия страницы [здесь](https://stormkeeper.ru/ele/rotation_en.html).

Если вы хотите узнать про билды талантов, то загляните на [эту страницу](https://stormkeeper.ru/ele/talents.html), а описание всех способностей и заклинаний Шамана Стихии можно найти [здесь](https://stormkeeper.ru/ele/rotation.html).

<div class="container">
  <div class="row">
    <div class="col text-center">
      <a href="/ele/rotation.html" id="raid_build_ele" button="button" class="btn btn-outline-primary guide-btn">Выбрать билд для Рейда</a>
      <a href="/ele/rotation.html" id="mplus_build_ele" button="button" class="btn btn-outline-primary guide-btn">Выбрать билд для Мифик+</a>
    </div>
  </div>
</div>

<p></p>

{% include talents.html data=site.data.talents.ele active="2301032" switch=true %}

# Открывающая ротация, «Opener»

**Опенер** – это фиксированный порядок кастов в самом начале боя против одной цели. 

1. {:.pw-apl}{{ site.data.covenants.fleshcraft }} за **10** секунд до пула.
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
7. {:.ft-apl}{{ site.data.spells.fs }}. 
8. {:.vt-apl}{{ site.data.spells.fs }}. 
9. {:.ch-apl}{{ site.data.spells.fs }}. 
1. {:.vt-apl}{{ site.data.covenants.vt }}.
11. {:.eb-apl}{{ site.data.spells.lvb }}.
12. {:.ft-apl .eogs-apl}{{ site.data.covenants.ft }}.
12. {:.ft-apl .lava-apl}{{ site.data.covenants.ft }}.
12. {:.ft-apl .fire-apl}{{ site.data.covenants.ft }}.
12. {:.ft-apl .ee-apl}{{ site.data.covenants.ft }}.
13. {:.storm-apl}{{ site.data.spells.storm }}
12. {:.ft-apl .leg_fae-apl}{{ site.data.covenants.ft }}.
14. {:.sk-apl .pw-apl}{{ site.data.spells.lb }}, усиленная [Хранителем бурь](https://ru.wowhead.com/spell=191634).
15. {:.sk-apl .vt-apl}{{ site.data.spells.lb }}, усиленная [Хранителем бурь](https://ru.wowhead.com/spell=191634).
16. {:.sk-apl .ch-apl}{{ site.data.spells.lb }}, усиленная [Хранителем бурь](https://ru.wowhead.com/spell=191634).
17. {:.eote-apl .ecs-apl}{{ site.data.spells.ecs }}.
18. {:.eote-apl .lmt-apl}{{ site.data.spells.lvb }}.
19. {:.eote-apl .mote-apl}{{ site.data.spells.lvb }}.
20. {:.sk-apl .ft-apl}{{ site.data.spells.lb }}, усиленная [Хранителем бурь](https://ru.wowhead.com/spell=191634).
21. {:.lava-apl .eote-apl .eb-apl}{{ site.data.spells.es }}.
22. {:.lava-apl .eote-apl .eb-apl}{{ site.data.spells.lvb }}.
23. {:.sk-apl}{{ site.data.spells.lb }}, усиленная [Хранителем бурь](https://ru.wowhead.com/spell=191634). 
26. {:.lmt-apl}{{ site.data.spells.lmt }}.
27. {:.ch-apl}{{ site.data.covenants.ch }}.
28. {:.asc_ele-apl}{{ site.data.spells.asc_ele }}.
29. Продолжайте обычную ротацию.

* {:.ft-apl .lava-apl .sk-apl .mote-apl .eote-apl}Если вы не успеваете сдать вторую [Молнию](https://ru.wowhead.com/spell=188196/) до истечения времени действия баффа [Хранителя бурь](https://ru.wowhead.com/spell=191634), то используйте {{ site.data.covenants.ft }} в конце опенера, а не в начале. Но в таком случае стоит усиливать {{ site.data.spells.es }} баффом от [Властелина стихий](https://ru.wowhead.com/spell=16166).

Вы можете призвать [Элементаля земли](https://ru.wowhead.com/spell=198103/) за **7** секунд до пула босса, но только если выполнены **ВСЕ** следующие условия:
* Вы **не** используете талант {{ site.data.spells.primal_elem }} (усиленные элементали заменяют друг друга).
* В ближайшие **5** минут вам не потребуется дополнительное здоровье от проводника {{ site.data.conduits.vital }}.
* Вы используете макрос на призыв [Элементаля земли](https://ru.wowhead.com/spell=198103/), который позволяет не запулить босса раньше времени:
~~~
#showtooltip
/cast [@player] Элементаль земли
~~~

# Бой против **1** цели

Ниже представлен список приоритетов заклинаний, который динамически меняется в зависимости от выбранных выше талантов, легендарки и ковенанта. Подробнее о том, как правильно читать список приоритетов можно посмотреть в [этом видео](https://youtu.be/1i5EKuKEpFY).

* {:.storm-apl}Список приоритетов **БЕЗ** активного [Элементаля бури](https://ru.wowhead.com/spell=192249):

1. {:.if-apl .asc_ele-apl}{{ site.data.spells.frs }} с баффом от [Ледяной ярости](https://ru.wowhead.com/spell=210714), если до окончания времени действия баффа осталось мало времени. Не допускайте потери стаков.
  * {:.storm-apl}Пожалуй, не стоит использовать вместе [Ледяную ярость](https://ru.wowhead.com/spell=210714) и [Элементаля бури](https://ru.wowhead.com/spell=192249). Спасибо.
1. {:.if-apl .up-apl}{{ site.data.spells.frs }} с баффом от [Ледяной ярости](https://ru.wowhead.com/spell=210714), если до окончания времени действия баффа осталось мало времени. Не допускайте потери стаков.
  * {:.storm-apl}Пожалуй, не стоит использовать вместе [Ледяную ярость](https://ru.wowhead.com/spell=210714) и [Элементаля бури](https://ru.wowhead.com/spell=192249). Спасибо.  
1. {:.sk-apl .primal_elem-apl}{{ site.data.spells.lb }} с баффом от [Хранителя бурь](https://ru.wowhead.com/spell=191634), если до окончания времени действия баффа осталось мало времени. Не допускайте потери стаков.
1. {:.sk-apl .sop-apl}{{ site.data.spells.lb }} с баффом от [Хранителя бурь](https://ru.wowhead.com/spell=191634), если до окончания времени действия баффа осталось мало времени. Не допускайте потери стаков.
1. {:.if-apl .sk-apl}{{ site.data.spells.lb }} с баффом от [Хранителя бурь](https://ru.wowhead.com/spell=191634) и {{ site.data.spells.frs }} с баффом от [Ледяной ярости](https://ru.wowhead.com/spell=210714), если до окончания времени действия баффов осталось мало времени. Не допускайте потери стаков обоих талантов.
  * {:.storm-apl}Пожалуй, не стоит использовать вместе [Ледяную ярость](https://ru.wowhead.com/spell=210714) и [Элементаля бури](https://ru.wowhead.com/spell=192249). Спасибо.
3. {:.mote-apl}{{ site.data.spells.fe }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
4. {:.lmt-apl}{{ site.data.spells.fe }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
2. {:.ft-apl}{{ site.data.spells.fs }}, если отсутствует на цели. 
2. {:.vt-apl}{{ site.data.spells.fs }}, если отсутствует на цели. 
2. {:.ch-apl}{{ site.data.spells.fs }}, если отсутствует на цели. 
2. {:.pw-apl}{{ site.data.covenants.pw }} или {{ site.data.spells.fs }}, если дебафф отсутствует на цели. 
21. {:.ft-apl .storm-apl .eogs-apl}{{ site.data.covenants.ft }} по кулдауну.
21. {:.ft-apl .storm-apl .lava-apl}{{ site.data.covenants.ft }} по кулдауну.
21. {:.ft-apl .storm-apl .fire-apl}{{ site.data.covenants.ft }} по кулдауну.
21. {:.ft-apl .storm-apl .ee-apl}{{ site.data.covenants.ft }} по кулдауну.
23. {:.storm-apl}{{ site.data.spells.storm }} по кулдауну.
21. {:.ft-apl .storm-apl .leg_fae-apl}{{ site.data.covenants.ft }} сразу же после использования [Элементаля бури](https://ru.wowhead.com/spell=192249).
24. {:.asc_ele-apl}{{ site.data.spells.asc_ele }} по кулдауну.
  * {:.asc_ele-apl}Перед активацией [Перерождения](https://ru.wowhead.com/spell=114050) используйте все заряды [Выброса лавы](https://ru.wowhead.com/spell=51505), но только если это не уменьшит количество использований [Перерождения](https://ru.wowhead.com/spell=114050) за бой.
25. {:.eogs-apl}{{ site.data.spells.quake }}, если активен бафф от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215), и если следующее заклинание накопит больше **100** ед. энергии Водоворота.
26. {:.ecs-apl}{{ site.data.spells.ecs }}, если следующее заклинание – {{ site.data.spells.es }}.
29. {:.lava-apl}{{ site.data.spells.lvb }} с проком [Волны лавы](https://ru.wowhead.com/spell=77756).
29. {{ site.data.spells.es }}, если следующее заклинание накопит более **100** ед. энергии Водоворота.
30. {:.fire-apl}{{ site.data.spells.lvb }} с проком [Волны лавы](https://ru.wowhead.com/spell=77756).
31. {:.ee-apl}{{ site.data.spells.lvb }} с проком [Волны лавы](https://ru.wowhead.com/spell=77756).
32. {:.eogs-apl}{{ site.data.spells.lvb }} с проком [Волны лавы](https://ru.wowhead.com/spell=77756).
34. {:.eb-apl}{{ site.data.spells.eb }} по кулдауну.
35. {:.sk-apl}{{ site.data.spells.sk }} по кулдауну.
36. {:.pw-apl}{{ site.data.covenants.pw }} по кулдауну, если у вас нет активного баффа от этого заклинания.
37. {:.mote-apl .eogs-apl}{{ site.data.spells.quake }} с баффами от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215) и [Властелина стихий](https://ru.wowhead.com/spell=16166).
38. {:.vt-apl}{{ site.data.covenants.vt }} по кулдауну.
39. {:.ft-apl .mote-apl}{{ site.data.covenants.ft }} c баффом от [Властелина стихий](https://ru.wowhead.com/spell=16166).
40. {:.ft-apl .lmt-apl}{{ site.data.covenants.ft }} по кулдауну.
41. {:.lmt-apl}{{ site.data.spells.lmt }} по кулдауну.
42. {:.sk-apl .mote-apl}{{ site.data.spells.lb }} с баффами от [Хранителя бурь](https://ru.wowhead.com/spell=191634) и [Властелина стихий](https://ru.wowhead.com/spell=16166).
43. {:.if-apl}{{ site.data.spells.if }} по кулдауну.
44. {:.mote-apl}{{ site.data.spells.es }} c баффом от [Властелина стихий](https://ru.wowhead.com/spell=16166).
45. {:.if-apl .mote-apl}{{ site.data.spells.frs }} с баффами от [Ледяной ярости](https://ru.wowhead.com/spell=210714) и [Властелина стихий](https://ru.wowhead.com/spell=16166).
46. {:.sop-apl}{{ site.data.spells.lb }} при активном баффе от [Прилива мощи](https://ru.wowhead.com/spell=262303), если использование [Выброса лавы](https://ru.wowhead.com/spell=51505) не увеличит количество [Элементалей огня](https://ru.wowhead.com/spell=198067) за бой.
58. {:.mote-apl}{{ site.data.spells.lvb }} по кулдауну.
58. {:.lmt-apl}{{ site.data.spells.lvb }} по кулдауну.
58. {{ site.data.spells.lvb }} по кулдауну.
48. {{ site.data.spells.fs }}, если до спадения осталось менее **5.4** секунд.
49. {:.storm-apl .eogs-apl}{{ site.data.spells.quake }} с баффом от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215).
50. {:.lmt-apl .eogs-apl}{{ site.data.spells.quake }} с баффом от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215).
51. {:.storm-apl}{{ site.data.spells.es }}, если есть **60+** ед. энергии Водоворота.
52. {:.lmt-apl}{{ site.data.spells.es }}, если есть **60+** ед. энергии Водоворота.
53. {:.if-apl}{{ site.data.spells.frs }} с баффом от [Ледяной ярости](https://ru.wowhead.com/spell=210714).
54. {:.ch-apl}{{ site.data.covenants.ch }} по кулдауну.
55. {:.discharge-apl}{{ site.data.spells.discharge }} по кулдауну (спасибо за тестирование нашего сайта!).
56. {{ site.data.spells.igor }} по кулдауну.
  * {:.primal_elem-apl}С талантом {{ site.data.spells.primal_elem }} вы можете иметь активным максимум одного элементаля. Не призывайте второго, иначе он заменит первого.
57. {{ site.data.spells.lb }}.

<hr style="height:1px;background-color:#bbb">
<p></p>

* {:.storm-apl}Список приоритетов **при активном** [Элементале бури](https://ru.wowhead.com/spell=192249) и **С БАФФОМ** от [Жажды крови](https://ru.wowhead.com/spell=2825):

1. {:.storm-apl}Обновляйте {{ site.data.spells.fs }} **только** во время движения.
2. {:.storm-apl}Используйте {{ site.data.spells.lvb }} по проку [Волны лавы](https://ru.wowhead.com/spell=77756) **только** во время движения.
3. {:.storm-apl}Тратьте энергию Водоворота на спендеры ({{ site.data.spells.es }} или {{ site.data.spells.quake }}, в зависимости от легендарки и наличия баффа).
4. {:.storm-apl}Кастуйте [Молнию](https://ru.wowhead.com/spell=188196).
5. {:.storm-apl .primal_elem-apl}Не забывайте использовать {{ site.data.spells.eye_storm }} с панели питомца после того, как элементаль бафнул себя [Призывом молнии](https://ru.wowhead.com/spell=157348). Рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8) и [WA](https://wago.io/oiozoI5RD).

<hr style="height:1px;background-color:#bbb">
<p></p>

* {:.storm-apl}Список приоритетов **при активном** [Элементале бури](https://ru.wowhead.com/spell=192249) и **БЕЗ БАФФА** [Жажды крови](https://ru.wowhead.com/spell=2825):

1. {:.storm-apl}Поддерживайте на цели {{ site.data.spells.fs }}.
2. {:.storm-apl}Используйте {{ site.data.spells.lvb }} по проку [Волны лавы](https://ru.wowhead.com/spell=77756), если у вас не более **18** стаков [Порыва ветра](https://ru.wowhead.com/spell=263806).
3. {:.storm-apl}Тратьте энергию Водоворота на спендеры ({{ site.data.spells.es }} или {{ site.data.spells.quake }}, в зависимости от легендарки и наличия баффа).
4. {:.storm-apl}Кастуйте [Молнию](https://ru.wowhead.com/spell=188196).
5. {:.storm-apl .primal_elem-apl}Не забывайте использовать {{ site.data.spells.eye_storm }} с панели питомца после того, как элементаль бафнул себя [Призывом молнии](https://ru.wowhead.com/spell=157348). Рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8) и [WA](https://wago.io/oiozoI5RD).

* {:.storm-apl}<hr style="height:1px;background-color:#bbb">

# Бой против **2** целей

* {:.storm-apl}<hr style="height:1px;background-color:#bbb"> 

Ротация в бою против двух целей практически не отличается от боя против одной цели. Несколько основных изменений:
* {{ site.data.spells.cl }} заменяет обычную [Молнию](https://ru.wowhead.com/spell=188196) в качестве филлера.
* {:.sk-apl}Бафф от [Хранителя бурь](https://ru.wowhead.com/spell=191634) следует тратить на [Молнию](https://ru.wowhead.com/spell=188196), так как это дает больше урона.
* {:.storm-apl}При активном [Элементале бури](https://ru.wowhead.com/spell=192249) переходим на спам [Цепной молнии](https://ru.wowhead.com/spell=188443), игнорируя {{ site.data.spells.lvb }} и {{ site.data.spells.fs }} – они используются только во время перебежек.
* {:.storm-apl}Обращайте внимание на количество стаков [Порыва ветра](https://ru.wowhead.com/spell=263806) при активном [Элементале бури](https://ru.wowhead.com/spell=192249), так как при **18+** стаках возрастает приоритет [Цепной молнии](https://ru.wowhead.com/spell=188443).
* {:.lava-apl}Несмотря на легендарку {{ site.data.legend.lava }}, на две цели мы используем {{ site.data.spells.quake }}, а не {{ site.data.spells.es }}.

<hr style="height:1px;background-color:#bbb">
<p></p>

1. {:.if-apl .asc_ele-apl}{{ site.data.spells.frs }} с баффом от [Ледяной ярости](https://ru.wowhead.com/spell=210714), если до окончания времени действия баффа осталось мало времени. Не допускайте потери стаков.
  * {:.storm-apl}Пожалуй, не стоит использовать вместе [Ледяную ярость](https://ru.wowhead.com/spell=210714) и [Элементаля бури](https://ru.wowhead.com/spell=192249). Спасибо.
1. {:.if-apl .up-apl}{{ site.data.spells.frs }} с баффом от [Ледяной ярости](https://ru.wowhead.com/spell=210714), если до окончания времени действия баффа осталось мало времени. Не допускайте потери стаков.
  * {:.storm-apl}Пожалуй, не стоит использовать вместе [Ледяную ярость](https://ru.wowhead.com/spell=210714) и [Элементаля бури](https://ru.wowhead.com/spell=192249). Спасибо.  
1. {:.sk-apl .primal_elem-apl}{{ site.data.spells.lb }} с баффом от [Хранителя бурь](https://ru.wowhead.com/spell=191634), если до окончания времени действия баффа осталось мало времени. Не допускайте потери стаков.
1. {:.sk-apl .sop-apl}{{ site.data.spells.lb }} с баффом от [Хранителя бурь](https://ru.wowhead.com/spell=191634), если до окончания времени действия баффа осталось мало времени. Не допускайте потери стаков.
1. {:.if-apl .sk-apl}{{ site.data.spells.lb }} с баффом от [Хранителя бурь](https://ru.wowhead.com/spell=191634) и {{ site.data.spells.frs }} с баффом от [Ледяной ярости](https://ru.wowhead.com/spell=210714), если до окончания времени действия баффов осталось мало времени. Не допускайте потери стаков обоих талантов.
  * {:.storm-apl}Пожалуй, не стоит использовать вместе [Ледяную ярость](https://ru.wowhead.com/spell=210714) и [Элементаля бури](https://ru.wowhead.com/spell=192249). Спасибо.
3. {:.mote-apl}{{ site.data.spells.fe }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
4. {:.lmt-apl}{{ site.data.spells.fe }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
1. {{ site.data.spells.fs }} поддерживайте на **двух** целях. 
  * {:.storm-apl}При активном [Элементале бури](https://ru.wowhead.com/spell=192249) {{ site.data.spells.fs }} используется только во время передвижения.
21. {:.ft-apl .storm-apl .eogs-apl}{{ site.data.covenants.ft }} по кулдауну.
  * Не используйте {{ site.data.covenants.ft }}, если на вас **18+** стаков [Порыва ветра](https://ru.wowhead.com/spell=263806) при активном [Элементале бури](https://ru.wowhead.com/spell=192249). 
21. {:.ft-apl .storm-apl .lava-apl}{{ site.data.covenants.ft }} по кулдауну.
  * Не используйте {{ site.data.covenants.ft }}, если на вас **18+** стаков [Порыва ветра](https://ru.wowhead.com/spell=263806) при активном [Элементале бури](https://ru.wowhead.com/spell=192249). 
21. {:.ft-apl .storm-apl .fire-apl}{{ site.data.covenants.ft }} по кулдауну.
  * Не используйте {{ site.data.covenants.ft }}, если на вас **18+** стаков [Порыва ветра](https://ru.wowhead.com/spell=263806) при активном [Элементале бури](https://ru.wowhead.com/spell=192249). 
21. {:.ft-apl .storm-apl .ee-apl}{{ site.data.covenants.ft }} по кулдауну.
  * Не используйте {{ site.data.covenants.ft }}, если на вас **18+** стаков [Порыва ветра](https://ru.wowhead.com/spell=263806) при активном [Элементале бури](https://ru.wowhead.com/spell=192249).   
23. {:.storm-apl}{{ site.data.spells.storm }} по кулдауну.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.eye_storm }} с панели питомца, но только после того, как {{ site.data.spells.storm }} баффнул себя [Призывом молнии](https://ru.wowhead.com/spell=157348) (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)). [WA для отслеживания](https://wago.io/oiozoI5RD).
21. {:.ft-apl .storm-apl .leg_fae-apl}{{ site.data.covenants.ft }} сразу же после использования [Элементаля бури](https://ru.wowhead.com/spell=192249).
24. {:.asc_ele-apl}{{ site.data.spells.asc_ele }} по кулдауну.
  * {:.asc_ele-apl}Перед активацией [Перерождения](https://ru.wowhead.com/spell=114050) используйте все заряды [Выброса лавы](https://ru.wowhead.com/spell=51505), но только если это не уменьшит количество использований [Перерождения](https://ru.wowhead.com/spell=114050) за бой.
  * {:.storm-apl}Не используйте {{ site.data.spells.asc_ele }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
25. {:.eogs-apl}{{ site.data.spells.es }}, если отсутствует бафф от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215).
26. {:.ecs-apl}{{ site.data.spells.ecs }}, если следующее заклинание – {{ site.data.spells.quake }}.
27. {{ site.data.spells.quake }}, если следующее заклинание накопит более **100** ед. энергии Водоворота.
34. {:.vt-apl}{{ site.data.covenants.vt }} по кулдауну.
38. {:.sk-apl .storm-apl}{{ site.data.spells.lb }} с баффом от [Хранителя бурь](https://ru.wowhead.com/spell=191634).
39. {:.sk-apl .storm-apl}{{ site.data.spells.sk }} по кулдауну.
  * Не используйте {{ site.data.spells.sk }}, если на вас **18+** стаков [Порыва ветра](https://ru.wowhead.com/spell=263806) при активном [Элементале бури](https://ru.wowhead.com/spell=192249).   
41. {:.storm-apl}{{ site.data.spells.cl }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
42. {{ site.data.spells.lvb }} с проком [Волны лавы](https://ru.wowhead.com/spell=77756).
43. {:.eb-apl}{{ site.data.spells.eb }} по кулдауну.
44. {:.sk-apl .mote-apl}{{ site.data.spells.sk }} по кулдауну.
45. {:.sk-apl .lmt-apl}{{ site.data.spells.sk }} по кулдауну.
46. {:.pw-apl}{{ site.data.covenants.pw }} по кулдауну, если у вас нет активного баффа от этого заклинания.
47. {:.eogs-apl .mote-apl}{{ site.data.spells.quake }} с баффами от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215) и [Властелина стихий](https://ru.wowhead.com/spell=16166).
48. {:.ft-apl .mote-apl}{{ site.data.covenants.ft }} c баффом от [Властелина стихий](https://ru.wowhead.com/spell=16166).
49. {:.ft-apl .lmt-apl}{{ site.data.covenants.ft }} по кулдауну.
50. {:.lmt-apl}{{ site.data.spells.lmt }} по кулдауну.
51. {:.sk-apl .mote-apl}{{ site.data.spells.lb }} с баффами от [Хранителя бурь](https://ru.wowhead.com/spell=191634) и [Властелина стихий](https://ru.wowhead.com/spell=16166).
52. {:.if-apl}{{ site.data.spells.if }} по кулдауну.
53. {:.mote-apl .fire-apl}{{ site.data.spells.quake }} c баффом от [Властелина стихий](https://ru.wowhead.com/spell=16166).
54. {:.mote-apl .lava-apl}{{ site.data.spells.quake }} c баффом от [Властелина стихий](https://ru.wowhead.com/spell=16166).
55. {:.mote-apl .ee-apl}{{ site.data.spells.quake }} c баффом от [Властелина стихий](https://ru.wowhead.com/spell=16166).
56. {:.if-apl .mote-apl}{{ site.data.spells.frs }} с баффами от [Ледяной ярости](https://ru.wowhead.com/spell=210714) и [Властелина стихий](https://ru.wowhead.com/spell=16166).
57. {:.sop-apl}{{ site.data.spells.lb }} при активном баффе от [Прилива мощи](https://ru.wowhead.com/spell=262303), если использование [Выброса лавы](https://ru.wowhead.com/spell=51505) не увеличит количество [Элементалей огня](https://ru.wowhead.com/spell=198067) за бой.
58. {:.mote-apl}{{ site.data.spells.lvb }} по кулдауну.
58. {:.lmt-apl}{{ site.data.spells.lvb }} по кулдауну.
58. {:.storm-apl}{{ site.data.spells.lvb }} по кулдауну, если [Элементаль бури](https://ru.wowhead.com/spell=192249) не активен.
59. {{ site.data.spells.fs }}, если на одной из целей до спадения осталось менее **5.4** секунд.
60. {:.storm-apl}{{ site.data.spells.quake }}, если есть **60+** ед. энергии Водоворота.
61. {:.lmt-apl}{{ site.data.spells.quake }}, если есть **60+** ед. энергии Водоворота.
62. {:.if-apl}{{ site.data.spells.frs }} с баффом от [Ледяной ярости](https://ru.wowhead.com/spell=210714).
63. {:.ch-apl}{{ site.data.covenants.ch }} по кулдауну.
64. {:.discharge-apl}{{ site.data.spells.discharge }} по кулдауну (спасибо за тестирование нашего сайта!).
65. {{ site.data.spells.igor }} по кулдауну.
  * {:.primal_elem-apl}С талантом {{ site.data.spells.primal_elem }} вы можете иметь активным максимум одного элементаля. Не призывайте второго, иначе он заменит первого.
66. {{ site.data.spells.cl }}. 

# Бой против **3** целей

Бой против трех целей это уже полноценное АоЕ, так что ротация меняется гораздо сильнее, чем при переходе с одной цели к двум. Основные изменения по сравнению с боем против двух целей следующие:
* Необходимое для поддержания количество [Огненных шоков](https://ru.wowhead.com/spell=188389) зависит от взятой легендарки и талантов, это отражено в списке приоритетов.
* {:.sk-apl}Бафф от [Хранителя бурь](https://ru.wowhead.com/spell=191634) тратим на [Цепную молнию](https://ru.wowhead.com/spell=188443).
* {:.storm-apl}{{ site.data.spells.lvb }} полностью уходит из ротации, вне зависимости от наличия или отсутствия активного [Элементаля бури](https://ru.wowhead.com/spell=192249). Можно кастовать на ходу в случае наличия прока, если нужно срочно перебежать.
* {:.mote-apl}{{ site.data.spells.lvb }} стоит кастовать перед [Землетрясением](https://ru.wowhead.com/spell=61882) либо просто использовать по проку. 
* {:.storm-apl .eogs-apl .ft-apl}{{ site.data.covenants.ft }} кастуем в том случае, если в живых остается **1-2** врага.
* {:.storm-apl .lava-apl .ft-apl}{{ site.data.covenants.ft }} кастуем в том случае, если в живых остается **1-2** врага.
* {:.storm-apl .fire-apl .ft-apl}{{ site.data.covenants.ft }} кастуем в том случае, если в живых остается **1-2** врага.
* {:.storm-apl .ee-apl .ft-apl}{{ site.data.covenants.ft }} кастуем в том случае, если в живых остается **1-2** врага.
* {:.storm-apl .leg_fae-apl .ft-apl}{{ site.data.covenants.ft }} используется для снижения КД [Элементаля бури](https://ru.wowhead.com/spell=192249) и для баффа на Критический удар.
* {:.if-apl}{{ site.data.spells.if }} не используется в бою против трех целей, но может применяться перед активной фазой передвижения для последующего спама [Ледяными шоками](https://ru.wowhead.com/spell=196840).

<hr style="height:1px;background-color:#bbb">
<p></p>

1. {:.eogs-apl .lmt-apl}{{ site.data.spells.fs }} поддерживайте на **двух** целях. 
1. {:.eogs-apl .mote-apl}{{ site.data.spells.fs }} поддерживайте на **двух** целях. 
1. {:.lava-apl .lmt-apl}{{ site.data.spells.fs }} поддерживайте на **двух** целях. 
1. {:.lava-apl .mote-apl}{{ site.data.spells.fs }} поддерживайте на **двух** целях. 
1. {:.ee-apl .lmt-apl}{{ site.data.spells.fs }} поддерживайте на **двух** целях. 
1. {:.ee-apl .mote-apl}{{ site.data.spells.fs }} поддерживайте на **двух** целях. 
1. {:.leg_fae-apl .lmt-apl}{{ site.data.spells.fs }} поддерживайте на **двух** целях. 
1. {:.leg_fae-apl .mote-apl}{{ site.data.spells.fs }} поддерживайте на **двух** целях. 
1. {:.fire-apl .mote-apl}{{ site.data.spells.fs }} поддерживайте на **всех** целях. 
1. {:.fire-apl .lmt-apl}{{ site.data.spells.fs }} поддерживайте на **всех** целях. 
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
21. {:.ft-apl .storm-apl .leg_fae-apl}{{ site.data.covenants.ft }} сразу же после использования [Элементаля бури](https://ru.wowhead.com/spell=192249).
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
15. {:.ft-apl .eogs-apl}{{ site.data.covenants.ft }} по кулдауну. Рекомендуется применять тогда, когда в живых остается **1-2** моба.
   * {:.mote-apl}С талантом {{ site.data.spells.mote }}, всегда старайтесь усилить им {{ site.data.covenants.ft }}.
   * {:.storm-apl}Не используйте {{ site.data.covenants.ft }}, если на вас **18+** стаков [Порыва ветра](https://ru.wowhead.com/spell=263806) при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
15. {:.ft-apl .lava-apl}{{ site.data.covenants.ft }} по кулдауну. Рекомендуется применять тогда, когда в живых остается **1-2** моба.
   * {:.mote-apl}С талантом {{ site.data.spells.mote }}, всегда старайтесь усилить им {{ site.data.covenants.ft }}.
   * {:.storm-apl}Не используйте {{ site.data.covenants.ft }}, если на вас **18+** стаков [Порыва ветра](https://ru.wowhead.com/spell=263806) при активном [Элементале бури](https://ru.wowhead.com/spell=192249). 
15. {:.ft-apl .fire-apl}{{ site.data.covenants.ft }} по кулдауну. Рекомендуется применять тогда, когда в живых остается **1-2** моба.
   * {:.mote-apl}С талантом {{ site.data.spells.mote }}, всегда старайтесь усилить им {{ site.data.covenants.ft }}.
   * {:.storm-apl}Не используйте {{ site.data.covenants.ft }}, если на вас **18+** стаков [Порыва ветра](https://ru.wowhead.com/spell=263806) при активном [Элементале бури](https://ru.wowhead.com/spell=192249). 
15. {:.ft-apl .ee-apl}{{ site.data.covenants.ft }} по кулдауну. Рекомендуется применять тогда, когда в живых остается **1-2** моба.
   * {:.mote-apl}С талантом {{ site.data.spells.mote }}, всегда старайтесь усилить им {{ site.data.covenants.ft }}.
   * {:.storm-apl}Не используйте {{ site.data.covenants.ft }}, если на вас **18+** стаков [Порыва ветра](https://ru.wowhead.com/spell=263806) при активном [Элементале бури](https://ru.wowhead.com/spell=192249). 
29. {:.asc_ele-apl}{{ site.data.spells.lava_beam }} при активном [Перерождении](https://ru.wowhead.com/spell=114050).
29. {{ site.data.spells.cl }}.
31. {:.if-apl}{{ site.data.spells.if }} в бою против **3** целей **не используется**. Рекомендуется выбрать {{ site.data.spells.primal_elem }}.
32. {:.discharge-apl}Кажется, вы случайно выбрали {{ site.data.spells.discharge }}.
33. {:.storm-apl .lava-apl}{{ site.data.spells.fs }} и {{ site.data.spells.lvb }} по проку [Волны лавы](https://ru.wowhead.com/spell=77756) используйте только во время передвижения.
33. {:.storm-apl .ee-apl}{{ site.data.spells.fs }} и {{ site.data.spells.lvb }} по проку [Волны лавы](https://ru.wowhead.com/spell=77756) используйте только во время передвижения.
34. {:.storm-apl .eogs-apl}{{ site.data.spells.fs }} и {{ site.data.spells.lvb }} по проку [Волны лавы](https://ru.wowhead.com/spell=77756) используйте только во время передвижения.

# Бой против **4** и более целей

Бой против четырех целей отличается для боя против трех целей, но не во всех билдах:
* {:.storm-apl}В билде через [Элементаля бури](https://ru.wowhead.com/spell=192249) ротация в бою против четырех целей идентична бою против трех целей.
* {:.mote-apl}{{ site.data.spells.lvb }} кастуется по проку перед [Землетрясением](https://ru.wowhead.com/spell=61882) только в бою против четырех целей, но не когда их пять или более.
* {:.lmt-apl}{{ site.data.spells.lvb }} уходит из ротации в бою против четырех и более целей.

<hr style="height:1px;background-color:#bbb">
<p></p>

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
21. {:.ft-apl .storm-apl .leg_fae-apl}{{ site.data.covenants.ft }} сразу же после использования [Элементаля бури](https://ru.wowhead.com/spell=192249).
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
30. {:.ft-apl .eogs-apl}{{ site.data.covenants.ft }} в бою против **4** и более целей **не используется**, так как его урон не увеличивается от количества целей. Применяйте тогда, когда в живых остается **1-2** моба.
30. {:.ft-apl .lava-apl}{{ site.data.covenants.ft }} в бою против **4** и более целей **не используется**, так как его урон не увеличивается от количества целей. Применяйте тогда, когда в живых остается **1-2** моба.
30. {:.ft-apl .fire-apl}{{ site.data.covenants.ft }} в бою против **4** и более целей **не используется**, так как его урон не увеличивается от количества целей. Применяйте тогда, когда в живых остается **1-2** моба.
30. {:.ft-apl .ee-apl}{{ site.data.covenants.ft }} в бою против **4** и более целей **не используется**, так как его урон не увеличивается от количества целей. Применяйте тогда, когда в живых остается **1-2** моба.
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
2. Используйте {{ site.data.spells.lvb }} по проку [Волны лавы](https://ru.wowhead.com/spell=77756), если у вас не более **18** стаков [Порыва ветра](https://ru.wowhead.com/spell=263806).
3. Тратьте энергию Водоворота на спендеры ({{ site.data.spells.es }} или {{ site.data.spells.quake }}, в зависимости от легендарки и наличия баффа).
4. Кастуйте [Молнию](https://ru.wowhead.com/spell=188196).

**АоЕ (2+ цели), вне зависимости от наличия [Жажды крови](https://ru.wowhead.com/spell=2825):**
1. Тратьте энергию Водоворота на спендеры ({{ site.data.spells.es }} или {{ site.data.spells.quake }}, в зависимости от легендарки и наличия баффа).
2. Кастуйте [Цепную молнию](https://ru.wowhead.com/spell=188443).
3. Используйте {{ site.data.spells.fs }}, [Первозданную волну](https://ru.wowhead.com/spell=326059) и проки [Волны лавы](https://ru.wowhead.com/spell=77756) **только** во время движения.

# Особенности талантов

## Властелин стихий

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

## Ледяная ярость

<a href="https://ru.wowhead.com/spell=210714" target="blank" data-wh-icon-size="medium" >**Ледяная ярость**</a> – активная способность, наносит небольшой урон, дает **25** ед. энергии Водоворота и усиливает **4** следующих [Ледяных шока](https://ru.wowhead.com/spell=196840) на **300%**, которые также генерируют **8** ед. энергии Водоворота. Бафф висит **15** секунд, время восстановления способности **30** секунд.

* После использования [Ледяной ярости](https://ru.wowhead.com/spell=210714) представьте, что вместо четырех следующих [Молний](https://ru.wowhead.com/spell=188196) вам нужно использовать четыре [Ледяных шока](https://ru.wowhead.com/spell=196840).
* В идеале, каждый усиленный {{ site.data.spells.frs }} следует бафать талантом {{ site.data.spells.mote }}. 
* Не придерживайте стаки слишком долго, так как **потерять стак баффа [Ледяной ярости](https://ru.wowhead.com/spell=210714) гораздо хуже, чем потерять бафф от [Властелина стихий](https://ru.wowhead.com/spell=16166).**
* Если у вас есть два заряда [Выброса лавы](https://ru.wowhead.com/spell=51505), то используйте между ними усиленный [Ледяной шок](https://ru.wowhead.com/spell=196840).
* Не допускайте потерь стаков [Ледяной ярости](https://ru.wowhead.com/spell=210714) – если до конца баффа остается мало времени, начинайте спамить [Ледяной шок](https://ru.wowhead.com/spell=196840), игнорируя всё остальное.
* Если в ближайшие несколько секунд гарантирована долгая перебежка имеет смысл придержать каст [Ледяной ярости](https://ru.wowhead.com/spell=210714) на несколько секунд, например, как на Оке Тюремщика во время фазы с лучом.

На самом деле управиться с этим талантом проще, чем может показаться на первый выгляд. Вместо того, чтобы пытаться идеально отыграть все **15** секунд баффа [Ледяной ярости](https://ru.wowhead.com/spell=210714), стараясь усилить каждый [Ледяной шок](https://ru.wowhead.com/spell=196840) [Властелином стихий](https://ru.wowhead.com/spell=16166) и не уйти в оверкап, можно делать следующее:
* Сразу после применения [Ледяной ярости](https://ru.wowhead.com/spell=210714) забудьте про все другие ваши способности кроме мгновенного [Выброса лавы](https://ru.wowhead.com/spell=51505) и [Земного шока](https://ru.wowhead.com/spell=8042).
* Сначала слейте **2-3** стака [Ледяной ярости](https://ru.wowhead.com/spell=210714), а только потом продолжайте обычную ротацию – [Выброс лавы](https://ru.wowhead.com/spell=51505) без прока, [Удар духов стихий](https://ru.wowhead.com/spell=117014) и так далее.
* Это даст вам немного свободы в плане «что кастовать следующим», не загоняя в жесткие рамки тайминга [Ледяной ярости](https://ru.wowhead.com/spell=210714) и других способностей.
* Потери ДПС при этом будут, но не такие большие – с такой упрощенной ротацией вы все равно будете дамажить больше, чем с [Повелителем изначальных стихий](https://ru.wowhead.com/spell=117013). Однако это индивидуально и зависит от вашего персонажа – у кого то разница между этими талантами достигает **300** дпс, а у кого-то не превышает и **50**.
* Со временем вы привыкните и сами начнете вставлять [Выброс лавы](https://ru.wowhead.com/spell=51505) без прока и другие касты во время активной [Ледяной ярости](https://ru.wowhead.com/spell=210714), но поначалу стоит не бояться просто сливать стаки, это всё равно профитно.


## Удар духов стихий

<a href="https://ru.wowhead.com/spell=117014" target="blank" data-wh-icon-size="medium" >**Удар духов стихий**</a> – активная способность с кулдауном **12** секунд, наносит средний урон и дает бафф к случайной характеристике на **10** секунд, а также генерирует **30** ед. энергии Водоворота.

* В бою против **одной**, **двух** или **трёх** целей {{ site.data.spells.eb }} кастуется по кулдауну.
* В бою против **четырех** и более целей {{ site.data.spells.eb }} **не используется**.
* {{ site.data.spells.eb }} генерирует **30** ед. энергии Водоворота, и еще **15** при проке Перегрузки. Суммарно за один каст можно получить **45** ед. энергии Водоворота.
* Прок перегрузки вылетает не сразу, а спустя небольшой промежуток времени после завершения каста.
* Можно скастовать {{ site.data.spells.eb }} на **70** энергии Водоворота и сразу использовать {{ site.data.spells.es }}, тогда перегрузка вылетит уже после каста [Земного шока](https://ru.wowhead.com/spell=8042) и не уйдет в оверкап.

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
