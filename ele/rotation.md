---
title: Ротация Шамана Стихии
layout: page
last_update: 2022-02-23
wow: 9.2
toc: true
author: Amani
description: Описание ротации Шамана Стихии. Приоритет способностей на этой странице динамически меняется в зависимости от того, какие выбраны таланты, легендарный предмет и ковенант.
image: /assets/img/logos/rotation.png
custom-javascript-list:
    - "/assets/js/rotation_switches.js"
---

<details markdown=1><summary><i>Журнал изменений</i></summary>
<br>

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

> English version of this page [here](https://stormkeeper.ru/ele/rotation_en.html).

# Выбор билда

**Важно!** Для просмотра списка приоритетов из патча **9.1.5** перейдите на [эту страницу](https://stormkeeper.ru/ele/rotation-9-1.html).
{: class="bordered"}

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

# Открывающая ротация, Opener

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
28. {:.asc_ele-apl}{{ site.data.spells.asc_ele }}.
29. Продолжайте обычную ротацию.

* {:.ft-apl .lava-apl .sk-apl .mote-apl .eote-apl}Если вы не успеваете сдать вторую [Молнию](https://ru.wowhead.com/spell=188196/) до истечения времени действия баффа [Хранителя бурь](https://ru.wowhead.com/spell=191634), то используйте {{ site.data.covenants.ft }} в конце опенера, а не в начале. Но в таком случае стоит усиливать {{ site.data.spells.es }} баффом от [Властелина стихий](https://ru.wowhead.com/spell=16166).

# Бой против **1** цели

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
29. {:.mote-apl}{{ site.data.spells.es }}, если следующее заклинание накопит более **100** ед. энергии Водоворота.
29. {:.lmt-apl}{{ site.data.spells.es }}, если следующее заклинание накопит более **100** ед. энергии Водоворота.
34. {:.eb-apl}{{ site.data.spells.eb }}.
35. {:.sk-apl}{{ site.data.spells.sk }}.
36. {:.pw-apl}{{ site.data.covenants.pw }}, если у вас нет активного баффа от этого заклинания.
37. {:.mote-apl .eogs-apl}{{ site.data.spells.quake }} с баффами от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215) и [Властелина стихий](https://ru.wowhead.com/spell=16166).
26. {:.ecs-apl}{{ site.data.spells.ecs }}, если следующее заклинание – {{ site.data.spells.lvb }}.
38. {:.vt-apl}{{ site.data.covenants.vt }}.
39. {:.ft-apl .mote-apl}{{ site.data.covenants.ft }} c баффом от [Властелина стихий](https://ru.wowhead.com/spell=16166).
40. {:.ft-apl .lmt-apl}{{ site.data.covenants.ft }}.
41. {:.lmt-apl}{{ site.data.spells.lmt }}.
42. {:.sk-apl .mote-apl}{{ site.data.spells.lb }} с баффами от [Хранителя бурь](https://ru.wowhead.com/spell=191634) и [Властелина стихий](https://ru.wowhead.com/spell=16166).
42. {:.sop-apl}{{ site.data.spells.lb }} с баффом от таланта [Прилив мощи](https://ru.wowhead.com/spell=262303).
43. {{ site.data.spells.lvb }}.
43. {:.if-apl}{{ site.data.spells.if }}.
44. {:.mote-apl}{{ site.data.spells.es }} c баффом от [Властелина стихий](https://ru.wowhead.com/spell=16166).
49. {:.storm-apl .eogs-apl}{{ site.data.spells.quake }} с баффом от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215).
50. {:.lmt-apl .eogs-apl}{{ site.data.spells.quake }} с баффом от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215).
52. {:.lmt-apl}{{ site.data.spells.es }}, если есть **60+** ед. энергии Водоворота.
29. {:.storm-apl}{{ site.data.spells.es }}, если есть **60+** ед. энергии Водоворота.
48. {{ site.data.spells.fs }}, если до спадения осталось менее **5.4** секунд.
53. {:.if-apl}{{ site.data.spells.frs }} с баффом от [Ледяной ярости](https://ru.wowhead.com/spell=210714).
38. {:.vt-apl}[Наставления предков](https://ru.wowhead.com/spell=108281), [Щит земли](https://ru.wowhead.com/spell=974), [Тотем исцеляющего потока](https://ru.wowhead.com/spell=5394) или [Исцелющий всплеск](https://ru.wowhead.com/spell=8004) для прока легендарки [Яростный перезвон](https://ru.wowhead.com/spell=356789).
54. {:.ch-apl}{{ site.data.covenants.ch }}.
57. {{ site.data.spells.lb }}.



# АоЕ бой (**2+** цели)

Изменения приоритетов в бою против двух целей при использовании полного [комплекта классовых доспехов](https://stormkeeper.ru/ele/patch-9-2.html#%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BE%D0%B2%D1%8B%D0%B9-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%82-%D0%B4%D0%BE%D1%81%D0%BF%D0%B5%D1%85%D0%BE%D0%B2) – [Огненное сердце](https://ptr.wowhead.com/spell=363671). Для просмотра списка приоритетов из патча **9.1.5** перейдите на [эту страницу](https://stormkeeper.ru/ele/rotation-9-1.html).

* {{ site.data.spells.fs }} больше не нужно специально поддерживать, если вы не <span style="color:#40bf40;font-size:1em;">**Некролорд**</span> или не используете легендарку [Огненная гибель "Усмирителя небес"](https://ru.wowhead.com/spell=336734/).
* {:.pw-apl}Если вы <span style="color:#40bf40;font-size:1em;">**Некролорд**</span>, то развешивайте максимальное количество [Огненных шоков](https://ru.wowhead.com/spell=188389) за **15** секунд до окончания кулдауна [Первозданной волны](https://ru.wowhead.com/spell=326059).
* {:.pw-apl}В начале боя с **3+** целями, сначала развесьте несколько [Огненных шоков](https://ru.wowhead.com/spell=188389) и [Первозданную волну](https://ru.wowhead.com/spell=326059), и только потом кастуйте {{ site.data.spells.lvb }}.
* {:.fire-apl}При использовании легендарки [Огненная гибель "Усмирителя небес"](https://ru.wowhead.com/spell=336734/) развешивайте максимальное количество [Огненных шоков](https://ru.wowhead.com/spell=188389) в те моменты, когда [Элементаль бури](https://ru.wowhead.com/spell=192249/) не активен.
* Можно повесить один {{ site.data.spells.fs }} во время перебежки.
* С сетом [Огненное сердце](https://ptr.wowhead.com/spell=364472) {{ site.data.spells.lvb }} кастуется только по проку во время передвижения, даже без наличия на цели [Огненного шока](https://ru.wowhead.com/spell=188389). 
* {{ site.data.spells.cl }} заменяет обычную [Молнию](https://ru.wowhead.com/spell=188196) в качестве филлера на АоЕ.
* {:.sk-apl}В бою против **2** целей бафф от [Хранителя бурь](https://ru.wowhead.com/spell=191634) следует тратить на [Молнию](https://ru.wowhead.com/spell=188196). На **3+** цели – на [Цепную молнию](https://ru.wowhead.com/spell=188443).
* {:.eogs-apl}{{ site.data.spells.quake }} заменяет {{ site.data.spells.es }} на АоЕ боях. Всегда чередуйте {{ site.data.spells.es }} и {{ site.data.spells.quake }} при использовании легендарки [Отголоски Великого Раскола](https://ru.wowhead.com/spell=336215).
* {:.fire-apl}{{ site.data.spells.quake }} заменяет {{ site.data.spells.es }} на АоЕ боях.
* {:.lava-apl}{{ site.data.spells.quake }} заменяет {{ site.data.spells.es }} на АоЕ боях.
* {:.ee-apl}{{ site.data.spells.quake }} заменяет {{ site.data.spells.es }} на АоЕ боях.
* {:.primal_elem-apl .mote-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
* {:.primal_elem-apl .lmt-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
* {:.primal_elem-apl .storm-apl}Не забывайте использовать {{ site.data.spells.eye_storm }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
* {:.ecs-apl}{{ site.data.spells.ecs }} следует использовать на {{ site.data.spells.quake }}.
* {:.vt-apl}{{ site.data.covenants.vt }} используется по кулдауну. Кастуйте [Наставления предков](https://ru.wowhead.com/spell=108281), [Щит земли](https://ru.wowhead.com/spell=974), [Тотем исцеляющего потока](https://ru.wowhead.com/spell=5394) или [Исцелющий всплеск](https://ru.wowhead.com/spell=8004) для прока легендарки [Яростный перезвон](https://ru.wowhead.com/spell=356789).
* {:.ch-apl}{{ site.data.covenants.ch }} используется по кулдауну.
* {:.ft-apl}{{ site.data.covenants.ft }} используется по кулдауну. По возможности, старайтесь откатить с его помощью кулдаун [Элементаля бури](https://ru.wowhead.com/spell=192249/).


## Удар духов стихий

<a href="https://ru.wowhead.com/spell=117014" target="blank" data-wh-icon-size="medium" >**Удар духов стихий**</a> – активная способность с кулдауном **12** секунд, наносит средний урон и дает бафф к случайной характеристике на **10** секунд, а также генерирует **30** ед. энергии Водоворота.

* В бою против **одной**, **двух** или **трёх** целей {{ site.data.spells.eb }} кастуется.
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
