---
title: Характеристики Шамана Стихии
layout: page
last_update: 2022-02-23
wow: 9.2
author: Amani
toc: true
description: Все про характеристки Элем Шамана – подробное описание статов, как правильно их собирать и что такое «Diminishing Returns».
image: /assets/img/logos/stats.png
---

# Вступление


* **Интеллект** – лучшая характеристика, так как повышает весь урон и растет от уровня предметов гораздо сильнее, чем вторичные статы. Поэтому собираемся в первую очередь в уровень предметов.

* **Скорость** и **Универсальность** – подходят для любого контента.
* **Искусность** – полезна в бою против одной цели.
* **Критический удар** – отличная характеристика для АоЕ.

С выбором вещей поможет [Raidbots](https://www.raidbots.com/simbot).

{% include button.html name="Руководство по Raidbots" link="/info/sim.html" %}  

<p></p>

# Вторичные характеристики

## Критический удар

* Базовое значение Критического удара, без учета характеристик, составляет **5%**.
* Дает шанс, равный значению Критического удара, увеличить урон и исцеление ваших заклинаний на **250%**, то есть в **2.5** раз. Это больше, чем у остальных специализаций в игре (**200%**).
* Так как {{ site.data.spells.lvb }} всегда наносит критический удар, полезность этой характеристики падает на кливе разрозненных целей и при использовании легендарки {{ site.data.legend.lava }}.
* {{ site.data.spells.quake }} лучше всего усиливается именно от критического удара.
* [Неистовство стихий](https://ru.wowhead.com/spell=60188) – пассивная способность, позволяет Элем шаману наносить больше Критического урона всеми своими способностями, включая способности Ковенантов.
* Эта пассивка работает как «белый список», то есть действует только на те способности и заклинания, которые указаны на странице Wowhead.
* Пассивка **не действует** на аксессуары.
* Пассивка **не действует** на предметы и баффы в Смертельной тризне: [Кровавое копье](https://ru.wowhead.com/spell=328351), [Забытый кузнечный молот](https://ru.wowhead.com/spell=328128), [Освобожденная анима](https://ru.wowhead.com/spell=328404).
* Пассивка **не действует** на способности [Элементаля огня](https://ru.wowhead.com/spell=198067) и [Элементаля бури](https://ru.wowhead.com/spell=192249).
* Работает на исцеляющие заклинания, за счет пассивной способности на **52** уровне: [Неистовство стихий: Ранг 2](https://ru.wowhead.com/spell=343190).
* В PvP Критический удар для Элем Шамана увеличивает урон на **225%**, тогда как у остальных классов – на **175%**.

## Скорость

* Снижает время произнесения заклинаний и ГКД. Снижение ГКД не относится к тотемам, так как у них он и так базово снижен до **1** секунды.
* Снижает время между тиками {{ site.data.spells.fs }}. Добавляет дополнительный тик в конце действия эффекта, ослабленный в зависимости от недостающего времени до «полного» тика.
* На {{ site.data.spells.quake }} Скорость **НЕ** работает, влияние идет только за счет генерации энергии Водоворота от сокращения времени произнесения [Цепной молнии](https://ru.wowhead.com/spell=188443). Сами тики [Землетрясения](https://ru.wowhead.com/spell=61882) не будут срабатывать чаще и её время действия не изменится.
* Формула расчета влияния скорости на заклинания: **2 / 1.15**, где **2** это базовая скорость произнесения заклинания, а **15** – процент Скорости.
* В игре время произнесения заклинания отображается вплоть до первой цифры после запятой (например, **1.6** секунд). Однако это просто округление и фактически каждая единичка Скорости влияет на касты.
* Например, с **18%** Скорости {{ site.data.spells.lvb }} кастуется **1,694915254237288** секунд, а с **19%** Скорости {{ site.data.spells.lvb }} кастуется **1,680672268907563** секунд. Однако в игре, если прочитать подсказку заклинания, с обоими значениями вы увидите время произнесения **1.6** секунд.

## Универсальность

* Увеличивает наносимый урон, исцеление и снижает получаемый урон.
* Лучшая характеристика для PvP.
* Для поднятия Универсальности на **1%** требуется больше рейтинга, чем на остальные характеристики.
* Эффекты снижения получаемого урона складываются **мультипликативно**, то есть значения снижения урона перемножаются, а не складываются.

Проценты снижения получаемого урона высчитываются не все разом (например, **40%** + **40%**), а как бы по порядку. То есть если вам наносится **1000** урона, то при активном [Астральном сдвиге](https://ru.wowhead.com/spell=108271) и [Каменных доспехах](https://ru.wowhead.com/spell=118337) сначала посчитается первый сейв, **1000**-**40%**, что равняется **600** урона. Потом от **600** урона отнимается еще раз **40%**, то есть **600**-**40%**=**360**. Таким же образом считается снижение урона от Универсальности и внешние сейвы, например [Железная кора](https://ru.wowhead.com/spell=102342) Друида и другие подобные заклинания.
{: class="bordered"}

## Искусность

* Базовое значение Искусности, без учета характеристик, составляет **15%**.
* [Искусность: волнение стихий](https://ru.wowhead.com/spell=168534) – дает шанс некоторым заклинаниям поразить цель повторно, нанеся меньше урона и давая меньше энергии Водоворота.
* Урон дублированного заклинания при проке перегрузки снижен до **85%** от базового.
* Критический удар рассчитывается для прока Искусности отдельно.
* Количество энергии Водоворота при проке перегрузки отличается для каждого заклинания:
1. {{ site.data.spells.lb }} – **8** ед. энергии Водоворота базово и **3** ед. при проке.
2. {{ site.data.spells.lvb }} – **10** ед. энергии Водоворота базово и **4** ед. при проке.
3. {{ site.data.spells.cl }} – по **4** ед. энергии Водоворота за каждую пораженную цель и дополнительно по **3** ед. при проке.
4. {{ site.data.spells.eb }} – **30** ед. энергии Водоворота базово и **15** ед. при проке.
5. {{ site.data.spells.if }} – **25** ед. энергии Водоворота базово и **12** ед. при проке.
* Эффективность [Искусности](https://ru.wowhead.com/spell=168534) для [Цепной молнии](https://ru.wowhead.com/spell=188443) **снижена до 33%**. То есть, если у вас **60%** Искусности, то [Цепная молния](https://ru.wowhead.com/spell=188443) имеет только **20%** на прок перегрузки.
* Перегрузка вылетает не сразу после завершения каста заклинания, а примерно через **1** секунду.
* Если сразу же после каста заклинания скастовать, например, {{ site.data.spells.es }}, то перегрузка вылетит уже после траты энергии Водоворота и энергия не уйдет в оверкап.
* Перегрузка [Выброса лавы](https://ru.wowhead.com/spell=51505) не дает бафф от таланта {{ site.data.spells.mote }}, но перегрузка [Удара духов стихий](https://ru.wowhead.com/spell=117014) гарантированно дает второй бафф на статы, отличный от первого.
* Перегрузка [Выброса лавы](https://ru.wowhead.com/spell=51505) дает снижение КД и продления длительности элементалей от сет бонуса – [Огненное сердце](https://ru.wowhead.com/spell=363671).
* Талант {{ site.data.spells.mote }} увеличивает урон и основного заклинания, и его прока Искусности.
* Искусность не влияет на тотемы и лечащие заклинания.
* Искусность увеличивает генерацию энергии Водоворота, а следовательно, количество кастов наших «финишеров» ({{ site.data.spells.es }} и {{ site.data.spells.quake }}), но не увеличивает их урон. То есть мы чаще кастуем заклинания, которые не получают пользу от Искусности, что естественным образом снижает эффективность самой характеристики.
* Грубо говоря, чем больше у вас Искусности, тем меньше от неё пользы.
* Исключением является использование легендарки {{ site.data.legend.lava }}, которая повышает ценность Искусности в бою против одной цели.
* При использовании [Первозданной волны](https://ru.wowhead.com/spell=326059) <span style="color:#40bf40;font-size:1em;">**Некролордов**</span> шанс на прок Искусности расчитывается отдельно на каждую цель. Подробнее про [Первозданную волну](https://ru.wowhead.com/spell=326059) в разделе [Ковенанты и медиумы»](https://stormkeeper.ru/ele/covenants.html#%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%B2%D0%BE%D0%BB%D0%BD%D0%B0).

# Diminishing Returns

В Shadowlands ввели новую систему снижения скорости набора рейтинга характеристик – **Diminishing Returns**. При наборе определенных значений характеристик их эффективность их набора снижается и рост процентов стата замедлится. Считается именно характеристика в виде рейтинга, а не процентах, то есть {{ site.data.spells.bl }} никак с этим не связана.   

Это **НЕ КАПЫ** статов, мы не стремимся набрать определенное значение статов, забивая на все остальное, это просто инструмент снижения роста мощи персонажей. [Raidbots](https://www.raidbots.com/simbot) учитывает это в своих расчетах.

На **1%** характеристик требуется:

* **35** ед. Критического удара
* **33** ед. Скорости
* **40** ед. Универсальности
* **18.6** ед. Искусности (коэффициент **1.875**)

Diminishing Returns начинает снижать эффективность набора рейтинга на **10%** по достижению следующих значений:

* **35%** / **1050** для Критического удара (**5%** базового Крита и **30%** за счет набора рейтинга)
* **30%** / **990** для Скорости
* **30%** / **1200** для Универсальности
* **71.25%** / **1050** для Искусности (коэффициент **1.875**)

Скорость набора характеристик ослабевает следующий образом (пример для Скорости / Универсальности):

* От **0%** до **30%** – не ослабевает.
* От **30%** до **39%** – растет на **10%** медленнее.
* От **39%** до **47%** – растет на **20%** медленнее.
* От **47%** до **54%** – растет на **30%** медленнее.
* От **54%** до **66%** – растет на **40%** медленнее.
* От **66%** до **126%** – растет на **50%** медленнее.
* Более **126%** – достигнуть нельзя.

**Пример:** при наборе **990** единиц рейтинга скорости, что равняется **30%** стата, рост этой характеристики замедляется на **10%**. То есть если у вас есть **990** скорости, то добавив еще **100** единиц сверху вы получите процентов статов столько, сколько даст **90** рейтинга, а не **100**. Помните, что [Raidbots](https://www.raidbots.com/simbot) учитывает это в своих расчетах.
{: class="bordered"}

