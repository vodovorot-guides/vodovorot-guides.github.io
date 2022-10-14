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
    - "/assets/js/rotation_switches.js"
---

<details markdown=1><summary><i>Журнал изменений</i></summary>
<br>

* **09.07.2022**: Большое обновление АоЕ приоритетов.
* **09.07.2022**: Изменен приоритет Выброса лавы во время активного Перерождения – Земной шок в одну цель стоит кастовать только во время движения.
* **28.06.2022**: Изменен приоритет Удара духов стихий во время активного Перерождения.
* **23.02.2022**: Полное обновление под патч **9.2**. Упрощение списков приоритетов. 
* **04.10.2021**: Упростил список приоритетов при взятом Элементале бури, разделив активного и не активного элементаля.
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

* English version of this page [here](https://stormkeeper.ru/ele/rotation_en.html).

# Выбор билда

**Важно!** Приоритет способностей на этой странице динамически меняется в зависимости от того, какие выбраны таланты, легендарка и ковенант. Все кнопки ниже кликабельны.
{: class="bordered"}

<div class="container">
  <div class="row">
    <div class="col text-center">
      <a href="/ele/rotation.html" id="raid_build_ele" button="button" class="btn btn-outline-primary guide-btn">Выбрать билд для Рейда</a>
      <a href="/ele/rotation.html" id="mplus_build_ele" button="button" class="btn btn-outline-primary guide-btn">Выбрать билд для Мифик+</a>
    </div>
  </div>
</div>

<p></p>

{% include talents.html data=site.data.talents.ele active="2301022" switch=true %}

# Бой против **1** цели

## Опенер

**Опенер** – это фиксированный порядок кастов в самом начале боя против одной цели. 

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
28. {:.pw-apl .asc_ele-apl}{{ site.data.spells.asc_ele }}.
11. {:.eb-apl}{{ site.data.spells.lvb }}.
13. {:.storm-apl}{{ site.data.spells.storm }}
12. {:.ft-apl}{{ site.data.covenants.ft }}.
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
28. {:.ch-apl .asc_ele-apl}{{ site.data.spells.asc_ele }}.
28. {:.vt-apl .asc_ele-apl}{{ site.data.spells.asc_ele }}.
28. {:.ft-apl .asc_ele-apl}{{ site.data.spells.asc_ele }}.
29. Продолжайте обычную ротацию.

* {:.ft-apl .lava-apl .sk-apl .mote-apl .eote-apl}Если вы не успеваете сдать вторую [Молнию](https://ru.wowhead.com/spell=188196/) до истечения времени действия баффа [Хранителя бурь](https://ru.wowhead.com/spell=191634), то используйте {{ site.data.covenants.ft }} в конце опенера, а не в начале. Но в таком случае стоит усиливать {{ site.data.spells.es }} баффом от [Властелина стихий](https://ru.wowhead.com/spell=16166).

## Список приоритетов

Ниже представлен список приоритетов заклинаний, который динамически меняется в зависимости от выбранных выше талантов, легендарки и ковенанта. Подробнее о том, как правильно читать список приоритетов можно посмотреть в [этом видео](https://youtu.be/1i5EKuKEpFY).

2. {{ site.data.spells.fs }}, если отсутствует на цели. 
3. {:.mote-apl}{{ site.data.spells.fe }}.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
4. {:.lmt-apl}{{ site.data.spells.fe }}.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
23. {:.storm-apl}{{ site.data.spells.storm }}.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.eye_storm }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
20. {{ site.data.spells.lvb }} с проком [Волны лавы](https://ru.wowhead.com/spell=77756).
21. {:.ft-apl .storm-apl}{{ site.data.covenants.ft }}.
24. {:.asc_ele-apl}{{ site.data.spells.asc_ele }}.
25. {:.eogs-apl}{{ site.data.spells.quake }}, если активен бафф от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215), и если следующее заклинание накопит больше **100** ед. энергии Водоворота.
24. {:.asc_ele-apl}{{ site.data.spells.lvb }} во время активного [Перерождения](https://ru.wowhead.com/spell=114050).
25. {:.deeply-apl}{{ site.data.spells.lvb }} во время активного [Перерождения](https://ru.wowhead.com/spell=114050).
29. {:.mote-apl}{{ site.data.spells.es }}, если следующее заклинание накопит более **100** ед. энергии Водоворота.
29. {:.lmt-apl}{{ site.data.spells.es }}, если следующее заклинание накопит более **100** ед. энергии Водоворота.
34. {:.eb-apl .sk-apl}{{ site.data.spells.eb }}.
34. {:.eb-apl .up-apl}{{ site.data.spells.eb }}.
34. {:.eb-apl .asc_ele-apl}{{ site.data.spells.eb }}, если вы не находитесь в форме [Перерождения](https://ru.wowhead.com/spell=114050).
36. {:.sk-apl}{{ site.data.spells.sk }}.
   * {:.deeply-apl}Не допускайте потери стаков [Хранителя бурь](https://ru.wowhead.com/spell=191634), даже если вам напрокало [Перерождение](https://ru.wowhead.com/spell=114050/).
38. {:.pw-apl}{{ site.data.covenants.pw }}, если у вас нет активного баффа от ковенантской легендарки [Расколотые стихии](https://ru.wowhead.com/spell=354647).
39. {:.mote-apl .eogs-apl}{{ site.data.spells.quake }} с баффами от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215) и [Властелина стихий](https://ru.wowhead.com/spell=16166).
40. {:.ecs-apl}{{ site.data.spells.ecs }}, если следующее заклинание – {{ site.data.spells.lvb }}.
41. {:.vt-apl}{{ site.data.covenants.vt }}.
42. {:.ft-apl .mote-apl}{{ site.data.covenants.ft }} c баффом от [Властелина стихий](https://ru.wowhead.com/spell=16166).
43. {:.ft-apl .lmt-apl}{{ site.data.covenants.ft }}.
44. {:.lmt-apl}{{ site.data.spells.lmt }}.
45. {:.sk-apl .mote-apl}{{ site.data.spells.lb }} с баффами от [Хранителя бурь](https://ru.wowhead.com/spell=191634) и [Властелина стихий](https://ru.wowhead.com/spell=16166).
46. {{ site.data.spells.lvb }}.
47. {:.if-apl}{{ site.data.spells.if }}.
48. {:.mote-apl}{{ site.data.spells.es }} c баффом от [Властелина стихий](https://ru.wowhead.com/spell=16166).
49. {:.storm-apl .eogs-apl}{{ site.data.spells.quake }} с баффом от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215).
50. {:.lmt-apl .eogs-apl}{{ site.data.spells.quake }} с баффом от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215).
52. {:.lmt-apl}{{ site.data.spells.es }}, если есть **60+** ед. энергии Водоворота.
52. {:.storm-apl}{{ site.data.spells.es }}, если есть **60+** ед. энергии Водоворота.
53. {{ site.data.spells.fs }}, если до спадения осталось менее **5.4** секунд.
54. {:.if-apl}{{ site.data.spells.frs }} с баффом от [Ледяной ярости](https://ru.wowhead.com/spell=210714).
55. {:.vt-apl}[Наставления предков](https://ru.wowhead.com/spell=108281), [Щит земли](https://ru.wowhead.com/spell=974), [Тотем исцеляющего потока](https://ru.wowhead.com/spell=5394) или [Исцелющий всплеск](https://ru.wowhead.com/spell=8004) для прока легендарки [Яростный перезвон](https://ru.wowhead.com/spell=356789).
56. {:.ch-apl}{{ site.data.covenants.ch }}.
57. {{ site.data.spells.lb }}.


# АоЕ бой (**2+** цели)

## Опенер

1. {:.deeply-apl .sk-apl}{{ site.data.spells.sk }} до пула
1. {:.deeply-apl .mote-apl}{{ site.data.spells.fe }} до пула.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
1. {:.deeply-apl .lmt-apl}{{ site.data.spells.fe }} до пула.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
1. {:.deeply-apl .storm-apl}{{ site.data.spells.storm }} до пула.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.eye_storm }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
1. {:.deeply-apl}{{ site.data.spells.fs }} в **первую** цель.
1. {:.deeply-apl .pw-apl}{{ site.data.covenants.pw }} во **вторую** цель.
1. {:.deeply-apl}{{ site.data.spells.cl }}.
1. {:.deeply-apl}{{ site.data.spells.quake }}.
1. {:.deeply-apl}{{ site.data.spells.cl }}.
1. {:.deeply-apl}{{ site.data.spells.quake }}.
1. {:.deeply-apl}{{ site.data.spells.fs }} в **третью** цель.
1. {:.deeply-apl}{{ site.data.spells.lvb }}.
2. {:.eogs-apl .sk-apl}{{ site.data.spells.sk }} до пула.
2. {:.eogs-apl .mote-apl}{{ site.data.spells.fe }} до пула.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
2. {:.eogs-apl .lmt-apl}{{ site.data.spells.fe }} до пула.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
2. {:.eogs-apl .storm-apl}{{ site.data.spells.storm }} до пула.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.eye_storm }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
2. {:.eogs-apl}{{ site.data.spells.fs }}.
2. {:.eogs-apl .pw-apl}{{ site.data.covenants.pw }}.
2. {:.eogs-apl .ft-apl}{{ site.data.covenants.ft }}.
2. {:.eogs-apl}{{ site.data.spells.cl }}.
2. {:.eogs-apl}{{ site.data.spells.es }}.
2. {:.eogs-apl}{{ site.data.spells.cl }}.
2. {:.eogs-apl}{{ site.data.spells.quake }}.
3. {:.fire-apl .sk-apl}{{ site.data.spells.sk }} до пула.
3. {:.fire-apl .mote-apl}{{ site.data.spells.fe }} до пула.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
3. {:.fire-apl .lmt-apl}{{ site.data.spells.fe }} до пула.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
3. {:.fire-apl .storm-apl}{{ site.data.spells.storm }} до пула.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.eye_storm }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
3. {:.fire-apl .fire-apl}{{ site.data.spells.fs }}.
3. {:.fire-apl .pw-apl}{{ site.data.covenants.pw }}.
3. {:.fire-apl}{{ site.data.spells.cl }}.
3. {:.fire-apl}{{ site.data.spells.quake }}.
3. {:.fire-apl}{{ site.data.spells.cl }}.
3. {:.fire-apl}{{ site.data.spells.quake }}.
4. {:.lava-apl .sk-apl}{{ site.data.spells.sk }} до пула.
4. {:.lava-apl .mote-apl}{{ site.data.spells.fe }} до пула.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
4. {:.lava-apl .lmt-apl}{{ site.data.spells.fe }} до пула.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
4. {:.lava-apl .storm-apl}{{ site.data.spells.storm }} до пула.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.eye_storm }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
4. {:.lava-apl}{{ site.data.spells.fs }}.
4. {:.lava-apl .pw-apl}{{ site.data.covenants.pw }}.
4. {:.lava-apl .ft-apl}{{ site.data.covenants.ft }}.
4. {:.lava-apl}{{ site.data.spells.cl }}.
4. {:.lava-apl}{{ site.data.spells.quake }}.
4. {:.lava-apl}{{ site.data.spells.cl }}.
4. {:.lava-apl}{{ site.data.spells.quake }}.
4. Продолжаем обычную ротацию.


## Список приоритетов

1. {:.deeply-apl}{{ site.data.spells.fe }}
  * Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
1. {:.deeply-apl .sk-apl}{{ site.data.spells.sk }}.
  * Если целей не более **2**, то заряд [Хранителя бурь](https://ru.wowhead.com/spell=191634) следует тратить на обычную [Молнию](https://ru.wowhead.com/spell=188196). На **3+** цели – на [Цепную молнию](https://ru.wowhead.com/spell=188443).
  * Не допускайте потери стаков [Хранителя бурь](https://ru.wowhead.com/spell=191634), даже если вам напрокало [Перерождение](https://ru.wowhead.com/spell=114050/).
1. {:.deeply-apl}{{ site.data.spells.lvb }} с проком [Волны лавы](https://ru.wowhead.com/spell=77756), если следующее заклинание – {{ site.data.spells.quake }}.
1. {:.deeply-apl}{{ site.data.spells.quake }}.
1. {:.deeply-apl}{{ site.data.spells.fs }}, если целей под шоками меньше **6**.
1. {:.deeply-apl}{{ site.data.covenants.pw }}, если у вас нет активного баффа от ковенантской легендарки [Расколотые стихии](https://ru.wowhead.com/spell=354647).
1. {:.deeply-apl}{{ site.data.spells.lvb }}, если вы в бою против **2-3** целей.
1. {:.deeply-apl}{{ site.data.spells.cl }}.
2. {:.eogs-apl .mote-apl}{{ site.data.spells.fe }}.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
2. {:.eogs-apl .lmt-apl}{{ site.data.spells.fe }}.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
2. {:.eogs-apl .storm-apl}{{ site.data.spells.storm }}.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.eye_storm }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
2. {:.eogs-apl .sk-apl}{{ site.data.spells.sk }}.
  * Если целей не более **2**, то заряд [Хранителя бурь](https://ru.wowhead.com/spell=191634) следует тратить на обычную [Молнию](https://ru.wowhead.com/spell=188196). На **3+** цели – на [Цепную молнию](https://ru.wowhead.com/spell=188443).
2. {:.eogs-apl .pw-apl}{{ site.data.covenants.pw }}.
2. {:.eogs-apl .ft-apl}{{ site.data.covenants.ft }}.
2. {:.eogs-apl}{{ site.data.spells.es }}, если нет баффа от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215).
2. {:.eogs-apl}{{ site.data.spells.quake }}, если активен бафф от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215).
2. {:.eogs-apl}{{ site.data.spells.fs }}, если {{ site.data.spells.storm }} **не активен**
2. {:.eogs-apl}{{ site.data.spells.lvb }} по проку [Волны лавы](https://ru.wowhead.com/spell=77756), если {{ site.data.spells.storm }} **не активен**.
  * Если {{ site.data.spells.storm }} **активен** и если цели проживут дольше **50** секунд, стоит скастовоать примерно **5-7** [Выбросов лавы](https://ru.wowhead.com/spell=51505) для того, чтобы продлить [Элементаля бури](https://ru.wowhead.com/spell=192249/) и использовать второй раз {{ site.data.spells.eye_storm }}.
  * Если целей не более двух, то {{ site.data.spells.lvb }} кастуется по кулдауну.
2. {:.eogs-apl}{{ site.data.spells.cl }}.
2. {:.eogs-apl}{{ site.data.spells.fs }} во время перебежки.
3. {:.fire-apl .mote-apl}{{ site.data.spells.fe }}.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
3. {:.fire-apl .lmt-apl}{{ site.data.spells.fe }}.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
3. {:.fire-apl .storm-apl}{{ site.data.spells.storm }}.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.eye_storm }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
3. {:.fire-apl .sk-apl}{{ site.data.spells.sk }}.
  * Если целей не более **2**, то заряд [Хранителя бурь](https://ru.wowhead.com/spell=191634) следует тратить на обычную [Молнию](https://ru.wowhead.com/spell=188196). На **3+** цели – на [Цепную молнию](https://ru.wowhead.com/spell=188443).
3. {:.fire-apl .pw-apl}{{ site.data.covenants.pw }}.
3. {:.fire-apl .ft-apl}{{ site.data.covenants.ft }}.
3. {:.fire-apl}{{ site.data.spells.quake }}
3. {:.fire-apl}{{ site.data.spells.fs }}
3. {:.fire-apl}{{ site.data.spells.lvb }} по проку [Волны лавы](https://ru.wowhead.com/spell=77756), если {{ site.data.spells.storm }} **не активен**.
  * Если {{ site.data.spells.storm }} **активен** и если цели проживут дольше **50** секунд, стоит скастовоать примерно **5-7** [Выбросов лавы](https://ru.wowhead.com/spell=51505) для того, чтобы продлить [Элементаля бури](https://ru.wowhead.com/spell=192249/) и использовать второй раз {{ site.data.spells.eye_storm }}.
  * Если целей не более двух, то {{ site.data.spells.lvb }} кастуется по КД
3. {:.fire-apl}{{ site.data.spells.cl }}.
3. {:.fire-apl}{{ site.data.spells.lvb }} с проком [Волны лавы](https://ru.wowhead.com/spell=77756) во время перебежки.
4. {:.lava-apl .mote-apl}{{ site.data.spells.fe }}.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
4. {:.lava-apl .lmt-apl}{{ site.data.spells.fe }}.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
4. {:.lava-apl .storm-apl}{{ site.data.spells.storm }}.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.eye_storm }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
4. {:.lava-apl .sk-apl}{{ site.data.spells.sk }}.
  * Если целей не более **2**, то заряд [Хранителя бурь](https://ru.wowhead.com/spell=191634) следует тратить на обычную [Молнию](https://ru.wowhead.com/spell=188196). На **3+** цели – на [Цепную молнию](https://ru.wowhead.com/spell=188443).
4. {:.lava-apl .pw-apl}{{ site.data.covenants.pw }}.
4. {:.lava-apl .ft-apl}{{ site.data.covenants.ft }}.
4. {:.lava-apl}{{ site.data.spells.quake }}
4. {:.lava-apl}{{ site.data.spells.fs }}
4. {:.lava-apl}{{ site.data.spells.lvb }} по проку [Волны лавы](https://ru.wowhead.com/spell=77756), если {{ site.data.spells.storm }} **не активен**.
  * Если {{ site.data.spells.storm }} **активен** и если цели проживут дольше **50** секунд, стоит скастовоать примерно **5-7** [Выбросов лавы](https://ru.wowhead.com/spell=51505) для того, чтобы продлить [Элементаля бури](https://ru.wowhead.com/spell=192249/) и использовать второй раз {{ site.data.spells.eye_storm }}.
  * Если целей не более двух, то {{ site.data.spells.lvb }} кастуется по КД
4. {:.lava-apl}{{ site.data.spells.cl }}.
4. {:.lava-apl}{{ site.data.spells.lvb }} с проком [Волны лавы](https://ru.wowhead.com/spell=77756) во время перебежки.
 

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
