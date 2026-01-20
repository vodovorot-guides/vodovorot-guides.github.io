---
layout: page
last_update: 2026-01-20
title: Гайд на Энх Шамана
wow: 12.0
toc: true
author: Amani
description: Большое руководство по всем аспектам игры за Шамана Совершенствования. Здесь разобраны билды талантов, приоритет заклинаний, подбор экипировки, настройка интерфейса, макросы и многое другое.
image: /assets/img/enh_tb2.png
custom-javascript-list:
    - "/assets/js/rotation_switches.js"
---

<p align="center">
<img src="/assets/img/enh_tb2.png" width=400x> 
</p>



# Вступление
* Шаман Совершенствования, он же Энх Шаман – боец ближнего боя, который обрушивает на врагов ярость стихий. Основная характеристика – Ловкость.
* Энх использует кольчужные доспехи, а из оружия предпочитает одноручные булавы и топоры, а также кистевое оружие.
* Помимо <span style="color:#FFFFFF;font-size:1em;">**физического**</span> урона, Шаман Совершенствования использует также школы магии <span style="color:#26d22b;font-size:1em;">**природы**</span>, <span style="color:#f16f25;font-size:1em;">**огня**</span> и <span style="color:#8fd5fe;font-size:1em;">**льда**</span>.
* Основной ресурс Шамана Совершенствования – стаки [Оружия Водоворота](https://ru.wowhead.com/spell=187880), а дополнительный – **Мана** (используется для лечения и вспомогательных заклинаний).
* Дальность действия способностей и атак ближнего боя – **5** метров, дальность атакующих и лечащих заклинаний **40** метров. Некоторые вспомогательные способности имеют радиус действия **30** метров.


## Изменения в Midnight


Полный список изменений Шамана в патче **11.2** можно найти [по этой ссылке](https://stormkeeper.ru/info/midnight.html).
{: class="bordered"}

Шаман Совершенствования в Midnight получил ощутимую переработку и вместе с тем, упрощение геймплея. Однако при этом специализация осталась узнаваемой и интересной.

[Сокрушающая молния](https://www.wowhead.com/beta/spell=187874/) полностью поменяла свою суть, и теперь это не АоЕ-кнопка для активации баффа и генерации стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880), а полноценная часть ротации, в том числе и в бою против одной цели. Она также усиливается высшими талантами, новой фишкой Midnight, и будет использоваться во всех типах контента и билдах.

Было удалено более **20** талантов и добавлено больше **15** новых.

При этом мы не получили новых активных способностей, если не считать обновленную [Сокрушающую молнию](https://www.wowhead.com/beta/spell=187874/).

Что касается героических веток, то и Вестник шторма, и Тотемист получили заметные нововведения. [Буря](https://ru.wowhead.com/spell=454009) больше не требует специальной WeakAura для отслеживания ресурсов до получения прока, а [Пульсирующий тотем](https://www.wowhead.com/beta/spell=444995/) теперь имеет минутный кулдаун и его не получится держать активным в течение всего боя.

Энх Шаман также лишился некоторых вспомогательных способностей: [Тотема каменной преграды](https://www.wowhead.com/ru/spell=108270) был удален, а [Гром и молния](https://www.wowhead.com/ru/spell=51490) был перенесен в базовые способности Элем Шамана.

Сетовый комплект выглядит как типичный сет из первого сезона нового дополнения, когда он пассивно увеличивает урон отдельных способностей и не является чем то сложным и мудреным, чтобы игроки могли привыкнуть к обновленным механикам.



# Билды талантов

## Общая информация


В препатче Midnight недоступна прокачка до девяностого уровня, нет высших талантов – [Необузданная буря](https://www.wowhead.com/beta/spell=1262713) и не хватает трех очков талантов в героической ветке, и все вместе это ощутимо усиливает нашу специализацию.

В бою против одной цели и в вылазках рекомендуется использовать **Тотемиста**, а в Мифик+ и на АоЕ – **Вестника шторма**.

Текущие актуальные билды на каждого босса в рейде можно найти на [Warcraftlogs](https://www.warcraftlogs.com/), а для Мифик+ – на [Archon.gg](https://www.archon.gg/wow/builds/enhancement/shaman/mythic-plus/overview/10/all-dungeons/this-week).


## Таланты для Рейда

На текущий момент, **Тотемист** показывает себя сильнее в бою против одной цели. Основной билда является бафф [Горячей руки](https://www.wowhead.com/ru/spell=201900/), усиливающий урон [Вскипания лавы](https://www.wowhead.com/ru/spell=60103) и сокращающий его кулдаун, который так же можно продлить с помощью таланта [Энергия тотемов](https://www.wowhead.com/ru/spell=1260644/). Бурстом в этом билде является сочетание [Пульсирующего тотема](https://www.wowhead.com/ru/spell=444995) и [Ветров рока](https://www.wowhead.com/ru/spell=384352), которые имеют время восстановления **1** минуту и позволяют усиливать свой урон в нужные моменты боя.


**Вестник шторма** отстает не так сильно, но у него не самый удобный паттерн урона и слабее клив урон, но зато он имеет более сильный бурст за счет [Перерождения](https://www.wowhead.com/ru/spell=114051/).


<p></p>
<hr style="height:1px;background-color:#bbb">
<p></p>

Рейдовый билд **Тотемиста**:

<p></p>

<iframe title="Talent Embed Example 1" src="https://mimiron.raidbots.com/simbot/render/talents/CcQAkLQa6cKSpnHFD9kPlf7o7PzMzMzMzMzMzMmZGzAAAAAAAAAALAYG0YbAMC2AYWmxMGLLGYmZjlZmZGwYGAADDDzoxMDAMA?width=700&bgcolor=262b39&locale=ru_RU" width="100%" height="470px" style="overflow: hidden"></iframe>

<p></p>


<p></p>
<hr style="height:1px;background-color:#bbb">
<p></p>

Рейдовый билд **Вестника шторма**:

<p></p>

<iframe title="Talent Embed Example 1" src="https://mimiron.raidbots.com/simbot/render/talents/CcQAkLQa6cKSpnHFD9kPlf7o7PzMzYmZmZmZmhZGDAAAAAAAAgNAMjhNCYGQDWAYWmxMzYZxAzMbsMzMzAGzAAMDjZGGNwMDgB?width=700&bgcolor=262b39&locale=ru_RU" width="100%" height="480px" style="overflow: hidden"></iframe>

<p></p>


<p></p>
<hr style="height:1px;background-color:#bbb">
<p></p>




## Таланты для Мифик+

В препатче Midnight обе героические ветки хорошо себя показывают в Мифик+, но **Вестник шторма** немного обходит **Тотемиста** за счет отсутствия необходимых талантов на пути к девяностому уровню. 

**Вестник шторма** полагается на двухминутный кулдаун [Перерождения](https://www.wowhead.com/ru/spell=114051/) и новый талант [Оседлать молнию](https://www.wowhead.com/ru/spell=204357), который позволяет раскидывать [Грозовые разрядники](https://www.wowhead.com/ru/spell=455123) за счет филлерных способностей. У **Вестника шторма** в препатче есть возможность использовать гибридный билд, средний между боев против одной цели и АоЕ, что будет особенно полезно в Мифик+.

**Тотемист** имеет бурст раз в минуту за счет [Пульсирующего тотема](https://www.wowhead.com/ru/spell=444995) и [Ветров рока](https://www.wowhead.com/ru/spell=384352), а талант [Энергия тотемов](https://www.wowhead.com/ru/spell=1260644/) позволяет активнее поддерживать бафф [Горячей руки](https://www.wowhead.com/ru/spell=201900/) на АоЕ, чтобы реализовывать [Разветвленный поток](https://www.wowhead.com/ru/spell=445035). 



<p></p>
<hr style="height:1px;background-color:#bbb">
<p></p>

Билд **Вестника шторма** для Мифик+:

<p></p>

<iframe title="Talent Embed Example 1" src="https://mimiron.raidbots.com/simbot/render/talents/CcQAkLQa6cKSpnHFD9kPlf7o7PzMzYMzMzMzMMzMDAAAAAAAAgNAMjhNCYGQDWAYWmxMGLLGYmBLzMzMDMmBAwwYmhRDMzgBD?width=700&bgcolor=262b39&locale=ru_RU" width="100%" height="490px" style="overflow: hidden"></iframe>

<p></p>


<p></p>
<hr style="height:1px;background-color:#bbb">
<p></p>



Билд **Тотемиста** для Мифик+:

<p></p>

<iframe title="Talent Embed Example 1" src="https://mimiron.raidbots.com/simbot/render/talents/CcQAkLQa6cKSpnHFD9kPlf7o7PzMzMjZMzMzMzMzYGAAAAAAAAAYBAzgGbDgRwGAzyMmxYZxAzMbsMjZmBGzAAAjZYmJmZAGMA?width=700&bgcolor=262b39&locale=ru_RU" width="100%" height="490px" style="overflow: hidden"></iframe>

<p></p>


<p></p>
<hr style="height:1px;background-color:#bbb">
<p></p>

## Таланты для Вылазок



Билд **Тотемиста** для вылазок:

<p></p>

<iframe title="Talent Embed Example 1" src="https://mimiron.raidbots.com/simbot/render/talents/CcQAkLQa6cKSpnHFD9kPlf7o7PzMzMjZMzMzMzMzYGAAAAAAAAAYBAzgGbDgRwGAzyMmxYZxAzMbsMjZmBGzAAAjZYmJmZAGMA?width=700&bgcolor=262b39&locale=ru_RU" width="100%" height="490px" style="overflow: hidden"></iframe>

<p></p>


<p></p>
<hr style="height:1px;background-color:#bbb">
<p></p>

# Приоритет способностей

Основа игры на Шамане Совершенствования заключается в накоплении стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880) с помощью способностей ближнего боя и трате этих стаков на мощные мгновенные заклинания.


Приоритет способностей ниже читается следующим образом:
1. Выберите интересующие вас таланты с помощью переключателей, после чего приоритет изменится соответствующим образом.
2. Читайте приоритет с первого пункта и вниз. Если вы можете «выполнить» первый пункт, например когда способность не на кулдауне, и соблюдены другие условия – вы используете эту способность.
3. Если вы не можете «выполнить» какой-то пункт, то переходите к следующему пункту до тех пор, пока не встретите выполнимый.
4. После каждого применения заклинаний мысленно возвращайтесь в начало списка приоритетов и проходите по всем пунктам заново.
5. Данный список **НЕ РОТАЦИЯ**, которую следует безумно заучить и пытаться повторить. Это динамический список приоритетов, который меняется в зависимости от доступности ваших способностей, происходящего в бою и так далее.

**Важно!** Убедитесь, что у вас всегда наложены усиления на оружие – [Оружие неистовства ветра](https://ru.wowhead.com/spell=33757/) и [Оружие языка пламени](https://ru.wowhead.com/spell=318038/).
{: class="bordered"}

<hr style="height:1px;background-color:#bbb">
<p></p>

Выберите используемые таланты, и приоритет способностей соответственно изменится.

<div class="btn-toolbar justify-content-center mt-2 mb-3">
  <div class="btn-group" role="group">
    <button type="button" id="build_enh_sb_totem" class="btn btn-primary rotation-btn">Тотемист - рейд</button>
    <button type="button" id="build_enh_sb_storm" class="btn btn-primary rotation-btn">Вестник шторма – Мифик+</button>
  </div>
</div>





<ul class="rotation_switches form-check form-switch mb-2" style="list-style-type: none;"> 
  <li markdown="span" class="rotation_switch">
      <input class="form-check-input" type="checkbox" id="rotation_switch_totem"> [Пульсирующий тотем](https://www.wowhead.com/ru/spell=444995)</li>
  <li markdown="span" class="rotation_switch">
      <input class="form-check-input" type="checkbox" id="rotation_switch_pw"> [Первозданная буря](https://www.wowhead.com/ru/spell=1218047/)</li>
  <li markdown="span" class="rotation_switch">
      <input class="form-check-input" type="checkbox" id="rotation_switch_fn"> [Кольцо огня](https://www.wowhead.com/ru/spell=1260666/)</li>
  <li markdown="span" class="rotation_switch">
      <input class="form-check-input" type="checkbox" id="rotation_switch_sunder"> [Раскол](https://www.wowhead.com/ru/spell=197214/)</li>
  <li markdown="span" class="rotation_switch">
      <input class="form-check-input" type="checkbox" id="rotation_switch_hh"> [Горячая рука](https://www.wowhead.com/ru/spell=201900)</li>
  <li markdown="span" class="rotation_switch">
      <input class="form-check-input" type="checkbox" id="rotation_switch_dw"> [Ветра рока](https://ru.wowhead.com/spell=384352) без взятого [Перерождения](https://ru.wowhead.com/spell=114051)</li>      
  <li markdown="span" class="rotation_switch">
      <input class="form-check-input" type="checkbox" id="rotation_switch_asc"> [Перерождение](https://ru.wowhead.com/spell=114051)</li>
  <li markdown="span" class="rotation_switch">
      <input class="form-check-input" type="checkbox" id="rotation_switch_dre"> [Укоренившиеся стихии](https://ru.wowhead.com/spell=378270)</li>




</ul>


<center>Количество целей:</center>
<div class="btn-toolbar justify-content-center mt-2 mb-3">
  <div class = "btn-group btn-group-sm">
    <button type="button" id="target_1" class="btn btn-primary px-3 rotation-btn active">1</button>
    <button type="button" id="target_p" class="btn btn-primary px-3 rotation-btn">2+</button>
  </div>
</div>

<hr style="height:1px;background-color:#bbb">
<p></p>

<div id="st" markdown="1">

**Опенер для боя против одной цели:**


1. [Гальваническое пламя](https://www.wowhead.com/ru/spell=470057) на пути к цели.
1. {:.totem-apl}[Пульсирующий тотем](https://www.wowhead.com/ru/spell=444995).
1. {:.sunder-apl}[Раскол](https://www.wowhead.com/ru/spell=197214/).
1. {:.hh-apl}[Вскипание лавы](https://www.wowhead.com/ru/spell=60103) для активации [Горячей руки](https://www.wowhead.com/ru/spell=201900).
1. {:.dw-apl}[Ветра рока](https://ru.wowhead.com/spell=384352) и сразу же [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874/).
1. {:.dw-apl .no-asc-apl .no-totem-apl}[Удар бури](https://www.wowhead.com/ru/spell=17364).
1. {:.dw-apl .no-asc-apl .no-totem-apl}[Удар бури](https://www.wowhead.com/ru/spell=17364).
1. {:.dre-apl .no-asc-apl .no-totem-apl}[Удар бури](https://www.wowhead.com/ru/spell=17364).
1. {:.dre-apl .no-asc-apl .no-totem-apl}[Удар бури](https://www.wowhead.com/ru/spell=17364).
1. {:.no-dw-apl}[Сокрушающая молния](https://www.wowhead.com/ru/spell=187874/).
1. {:.asc-apl}[Перерождение](https://ru.wowhead.com/spell=114051).
2. {:.asc-apl .no-dre-apl}[Удар ветра](https://www.wowhead.com/ru/spell=115356) каждый ГКД.
2. {:.no-asc-apl .dre-apl}[Удар ветра](https://www.wowhead.com/ru/spell=115356) каждый ГКД.
1. {:.hh-apl}[Вскипание лавы](https://www.wowhead.com/ru/spell=60103).
1. {:.pw-apl}[Первозданная буря](https://www.wowhead.com/ru/spell=1218047/) на **10** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880), пока активен бафф [Ветров рока](https://ru.wowhead.com/spell=384352).
7. Продолжайте согласно приоритету способностей, указанному ниже.



<hr style="height:1px;background-color:#bbb">
<p></p>

**Приоритет способностей для боя против одной цели:**



1. {:.dw-apl .no-totem-apl}[Ветра рока](https://ru.wowhead.com/spell=384352).
  * [Ветра рока](https://ru.wowhead.com/spell=384352) не имеет ГКД, старайтесь активировать эту способность одновременно с [Сокрушающей молнией](https://www.wowhead.com/ru/spell=187874/) или [Ударом бури](https://www.wowhead.com/ru/spell=17364).
1. {:.asc-apl}[Перерождение](https://ru.wowhead.com/spell=114051).
2. {:.asc-apl .no-dre-apl}[Удар ветра](https://www.wowhead.com/ru/spell=115356) во время [Перерождения](https://ru.wowhead.com/spell=114051).
2. {:.no-asc-apl .dre-apl}[Удар ветра](https://www.wowhead.com/ru/spell=115356) во время [Перерождения](https://ru.wowhead.com/spell=114051).
4. {:.no-totem-apl}[Удар бури](https://www.wowhead.com/ru/spell=17364) во время активных [Ветров рока](https://ru.wowhead.com/spell=384352).
3. {:.no-totem-apl}[Сокрушающая молния](https://www.wowhead.com/ru/spell=187874/) во время активных [Ветров рока](https://ru.wowhead.com/spell=384352).
5. {:.no-totem-apl .dw-apl}[Молния](https://www.wowhead.com/ru/spell=188196/) / [Буря](https://www.wowhead.com/ru/spell=454009), если [Ветра рока](https://ru.wowhead.com/spell=384352) не активны и есть **9+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
5. {:.no-totem-apl .asc-apl .no-dre-apl}[Молния](https://www.wowhead.com/ru/spell=188196/) / [Буря](https://www.wowhead.com/ru/spell=454009), если [Перерождение](https://ru.wowhead.com/spell=114051) не активно и есть **9+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
5. {:.no-totem-apl .no-asc-apl .dre-apl}[Молния](https://www.wowhead.com/ru/spell=188196/) / [Буря](https://www.wowhead.com/ru/spell=454009), если [Перерождение](https://ru.wowhead.com/spell=114051) не активно и есть **9+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
6. {:.no-totem-apl}[Удар бури](https://www.wowhead.com/ru/spell=17364).
1. {:.totem-apl}[Гальваническое пламя](https://www.wowhead.com/ru/spell=470057), если [Огненный шок](https://ru.wowhead.com/spell=188389) отсутствует на цели.
1. {:.totem-apl}[Пульсирующий тотем](https://www.wowhead.com/ru/spell=444995).
1. {:.sunder-apl}[Раскол](https://www.wowhead.com/ru/spell=197214/).
  * Используйте по кулдауну, но каждое второе применение [Раскола](https://www.wowhead.com/ru/spell=197214/) должно выпадать на [Пульсирующий тотем](https://www.wowhead.com/ru/spell=444995).
1. {:.hh-apl .no-totem-apl}[Вскипание лавы](https://www.wowhead.com/ru/spell=60103), если есть бафф [Горячей руки](https://www.wowhead.com/ru/spell=201900).
1. {:.hh-apl .totem-apl}[Вскипание лавы](https://www.wowhead.com/ru/spell=60103), если есть бафф [Горячей руки](https://www.wowhead.com/ru/spell=201900) или [Бушующего урагана](https://www.wowhead.com/ru/spell=453405/).
2. {:.dw-apl .totem-apl}[Ветра рока](https://ru.wowhead.com/spell=384352).
  * [Ветра рока](https://ru.wowhead.com/spell=384352) не имеет ГКД, старайтесь активировать эту способность одновременно с [Сокрушающей молнией](https://www.wowhead.com/ru/spell=187874/) или [Ударом бури](https://www.wowhead.com/ru/spell=17364).
1. {:.pw-apl}[Первозданная буря](https://www.wowhead.com/ru/spell=1218047/) если есть **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
  * Старайтесь применять [Первозданную бурю](https://www.wowhead.com/ru/spell=1218047/) во время активных [Ветров рока](https://ru.wowhead.com/spell=384352).
3. [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874/).
1. {:.no-totem-apl}[Вскипание лавы](https://www.wowhead.com/ru/spell=60103).
4. {:.totem-apl .dw-apl}[Удар бури](https://www.wowhead.com/ru/spell=17364) во время активных [Ветров рока](https://ru.wowhead.com/spell=384352).
5. {:.totem-apl}[Молния](https://www.wowhead.com/ru/spell=188196/), если выполняется **любое** из условий:
  * Есть **9+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
  * Есть **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880) и [Молния](https://www.wowhead.com/ru/spell=188196/) продлит бафф [Горячей руки](https://www.wowhead.com/ru/spell=201900) на дополнительный каст [Вскипания лавы](https://www.wowhead.com/ru/spell=60103).
6. {:.totem-apl}[Удар бури](https://www.wowhead.com/ru/spell=17364).
2. [Гальваническое пламя](https://www.wowhead.com/ru/spell=470057)
5. [Молния](https://www.wowhead.com/ru/spell=188196/), если есть **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).


</div>

<div id="aoe" markdown="1" style="display:none;">

**Опенер в бою против 2+ целей:**



1. [Гальваническое пламя](https://www.wowhead.com/ru/spell=470057) на пути к цели.
1. {:.totem-apl}[Пульсирующий тотем](https://www.wowhead.com/ru/spell=444995).
1. {:.sunder-apl}[Раскол](https://www.wowhead.com/ru/spell=197214/).
1. {:.hh-apl}[Вскипание лавы](https://www.wowhead.com/ru/spell=60103) для активации [Горячей руки](https://www.wowhead.com/ru/spell=201900).
1. {:.asc-apl}[Перерождение](https://ru.wowhead.com/spell=114051).
1. {:.no-dw-apl}[Сокрушающая молния](https://www.wowhead.com/ru/spell=187874/).
1. {:.dw-apl}[Ветра рока](https://ru.wowhead.com/spell=384352) и сразу же [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874/).
1. {:.dw-apl .no-asc-apl .no-totem-apl}[Удар бури](https://www.wowhead.com/ru/spell=17364).
1. {:.dw-apl .no-asc-apl .no-totem-apl}[Удар бури](https://www.wowhead.com/ru/spell=17364).
1. {:.dre-apl .no-asc-apl .no-totem-apl}[Удар бури](https://www.wowhead.com/ru/spell=17364).
1. {:.dre-apl .no-asc-apl .no-totem-apl}[Удар бури](https://www.wowhead.com/ru/spell=17364).
2. {:.asc-apl .no-dre-apl}[Удар ветра](https://www.wowhead.com/ru/spell=115356) каждый ГКД.
2. {:.no-asc-apl .dre-apl}[Удар ветра](https://www.wowhead.com/ru/spell=115356) каждый ГКД.
1. {:.hh-apl}[Вскипание лавы](https://www.wowhead.com/ru/spell=60103).
1. {:.pw-apl}[Первозданная буря](https://www.wowhead.com/ru/spell=1218047/) на **10** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880), пока активен бафф [Ветров рока](https://ru.wowhead.com/spell=384352).
7. Продолжайте согласно приоритету способностей, указанному ниже.


<hr style="height:1px;background-color:#bbb">
<p></p>

**Приоритет способностей в бою против 2+ целей:**
1. {:.totem-apl}[Гальваническое пламя](https://www.wowhead.com/ru/spell=470057), если [Огненный шок](https://ru.wowhead.com/spell=188389) отсутствует на цели.
1. {:.totem-apl}[Пульсирующий тотем](https://www.wowhead.com/ru/spell=444995).
1. {:.sunder-apl}[Раскол](https://www.wowhead.com/ru/spell=197214/).
  * {:.dw-apl}Старайтесь использовать [Раскол](https://www.wowhead.com/ru/spell=197214/) перед [Ветрами рока](https://ru.wowhead.com/spell=384352).
  * {:.asc-apl}Старайтесь использовать [Раскол](https://www.wowhead.com/ru/spell=197214/) перед [Перерождением](https://ru.wowhead.com/spell=114051).
1. {:.hh-apl .no-totem-apl}[Вскипание лавы](https://www.wowhead.com/ru/spell=60103), если есть бафф [Горячей руки](https://www.wowhead.com/ru/spell=201900).
1. {:.hh-apl .totem-apl}[Вскипание лавы](https://www.wowhead.com/ru/spell=60103), если есть бафф [Горячей руки](https://www.wowhead.com/ru/spell=201900) или [Бушующего урагана](https://www.wowhead.com/ru/spell=453405/).
1. {:.dw-apl}[Ветра рока](https://ru.wowhead.com/spell=384352).
  * [Ветра рока](https://ru.wowhead.com/spell=384352) не имеет ГКД, старайтесь активировать эту способность одновременно с [Сокрушающей молнией](https://www.wowhead.com/ru/spell=187874/).
1. {:.asc-apl}[Перерождение](https://ru.wowhead.com/spell=114051).
1. {:.pw-apl}[Первозданная буря](https://www.wowhead.com/ru/spell=1218047/) если есть **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
  * Старайтесь применять [Первозданную бурю](https://www.wowhead.com/ru/spell=1218047/) во время активных [Ветров рока](https://ru.wowhead.com/spell=384352).
1. [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874/) по кулдауну.
  * {:.dw-apl}Во время активных [Ветров рока](https://ru.wowhead.com/spell=384352), [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874/) тратит стаки [Оружия Водоворота](https://ru.wowhead.com/spell=187880) за счет таланта [Воззвание к Ториму](https://www.wowhead.com/ru/spell=384444/).
  * {:.asc-apl}Во время активного [Перерождения](https://ru.wowhead.com/spell=114051), [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874/) тратит стаки [Оружия Водоворота](https://ru.wowhead.com/spell=187880) за счет таланта [Воззвание к Ториму](https://www.wowhead.com/ru/spell=384444/).
2. {:.no-asc-apl .dre-apl}[Удар ветра](https://www.wowhead.com/ru/spell=115356) во время [Перерождения](https://ru.wowhead.com/spell=114051).
2. {:.asc-apl .no-dre-apl}[Удар ветра](https://www.wowhead.com/ru/spell=115356) во время [Перерождения](https://ru.wowhead.com/spell=114051).
2. {:.dw-apl}[Удар бури](https://www.wowhead.com/ru/spell=17364) во время [Ветров рока](https://ru.wowhead.com/spell=384352).
2. {:.no-dw-apl .asc-apl}[Удар бури](https://www.wowhead.com/ru/spell=17364) во время прока [Ветров рока](https://ru.wowhead.com/spell=384352).
5. {:.no-totem-apl .dw-apl}[Буря](https://www.wowhead.com/ru/spell=454009), если [Ветра рока](https://ru.wowhead.com/spell=384352) не активны и есть **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
5. {:.no-totem-apl .asc-apl .no-dre-apl}[Буря](https://www.wowhead.com/ru/spell=454009), если [Перерождение](https://ru.wowhead.com/spell=114051) не активно и есть **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
5. {:.no-totem-apl .no-asc-apl .dre-apl}[Буря](https://www.wowhead.com/ru/spell=454009), если [Перерождение](https://ru.wowhead.com/spell=114051) не активно и есть **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
1. {:.no-totem-apl}[Цепная молния](https://www.wowhead.com/ru/spell=188443/), если есть **7+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
1. {:.totem-apl}[Цепная молния](https://www.wowhead.com/ru/spell=188443/), если есть **9+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
1. {:.totem-apl}[Вскипание лавы](https://www.wowhead.com/ru/spell=60103).
6. {:.no-totem-apl}[Удар бури](https://www.wowhead.com/ru/spell=17364).
1. {:.fn-apl}[Гальваническое пламя](https://www.wowhead.com/ru/spell=470057).
1. {:.no-totem-apl}[Вскипание лавы](https://www.wowhead.com/ru/spell=60103).
1. {:.totem-apl}[Удар бури](https://www.wowhead.com/ru/spell=17364).
1. {:.no-fn-apl}[Гальваническое пламя](https://www.wowhead.com/ru/spell=470057).
1. [Цепная молния](https://www.wowhead.com/ru/spell=188443/), если есть **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).




</div>

<hr style="height:1px;background-color:#bbb">
<p></p>

# Основные моменты

Следуйте следующим основным правилам при игре за Энх Шамана:

* **Следите за количеством стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880)** и своевременно их тратьте, согласно приоритетам, указанным выше. Мгновенно применять заклинания можно при накоплении **5** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880) или более, а максимум можно набрать **10** стаков. 

* **Реагируйте на проки!** В зависимости от билда, обращайте внимание на доступность таких способностей, как [Буря](https://www.wowhead.com/ru/spell=454009/), [Пульсирующий тотем](https://www.wowhead.com/ru/spell=444995) и [Горячая рука](https://www.wowhead.com/ru/spell=201900/).

* **Всегда поддерживайте усиления на оружие** – [Оружие неистовства ветра](https://ru.wowhead.com/spell=33757/) и [Оружие языка пламени](https://ru.wowhead.com/spell=318038/) используются в любом билде и не сочетаются с маслами на оружие и точильными камнями.

* **Используйте филлеры согласно приоритетам!** В зависимости от выбранной героической ветки меняется приоритет филлеров. Основное правило: сперва [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874/), затем [Вскипание лавы](https://www.wowhead.com/ru/spell=60103) для **Тотемиста** или [Удар бури](https://www.wowhead.com/ru/spell=17364) для **Вестника шторма**, затем [Гальваническое пламя](https://www.wowhead.com/ru/spell=470057).

* **Сочетайте бурсты друг с другом!** Тотемист использует [Пульсирующий тотем](https://www.wowhead.com/ru/spell=444995) и [Ветра рока](https://ru.wowhead.com/spell=384352) каждую минуту, а Вестник шторма активирует [Перерождение](https://ru.wowhead.com/spell=114051) каждые две минуты.

## Вестник шторма

* Вестник шторма в бою полагается на трату стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880), чтобы получить прок [Бури](https://www.wowhead.com/ru/spell=454009/).

* Используйте [Бурю](https://www.wowhead.com/ru/spell=454009/) по приоритетам, желательно на **10+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880), иначе кастуйте [Молнию](https://www.wowhead.com/ru/spell=188196/) на **9+** стаках в бою против одной цели или [Цепную молнию](https://www.wowhead.com/ru/spell=188443) на **7+** стаках на АоЕ.

* При активации [Перерождения](https://ru.wowhead.com/spell=114051), **каждое** ГКД нужно тратить на [Удар ветра](https://www.wowhead.com/ru/spell=115356), вне зависимости от других проков. Его кулдаун будет постоянно сбрасываться за счет талантов [Стихийный ритм](https://www.wowhead.com/ru/spell=1250364) и [Воззвание к Ториму](https://www.wowhead.com/ru/spell=384444).

* В момент прока [Ветров рока](https://ru.wowhead.com/spell=384352) старайтесь тратить каждый ГКД либо на [Удар бури](https://www.wowhead.com/ru/spell=17364), либо на [Сокрушающую молнию](https://www.wowhead.com/ru/spell=187874). Имейте в виду, что в Midnight [Ветра рока](https://ru.wowhead.com/spell=384352) больше не имеют ГКД.

* Когда у вас нет более приоритетных заклинаний, порядок филлеров в бою против одной цели выглядит следующим образом:
  * [Удар бури](https://www.wowhead.com/ru/spell=17364).
  * [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874).
  * [Вскипание лавы](https://www.wowhead.com/ru/spell=60103/).
  * [Гальваническое пламя](https://www.wowhead.com/ru/spell=470057).

* Со взятым талантом [Раскол](https://www.wowhead.com/ru/spell=197214/), старайтесь применять его каждые **30** секунд для нанесения урона и активации баффа от таланта [Бурные стихии](https://www.wowhead.com/ru/spell=382042/).


## Тотемист


* [Пульсирующий тотем](https://www.wowhead.com/ru/spell=444995) является основной способностью в этой героической ветке и его всегда нужно ставить по кулдауну каждую минуту.

* В бою против одной цели, после активации [Пульсирующего тотема](https://www.wowhead.com/ru/spell=444995), используйте [Раскол](https://www.wowhead.com/ru/spell=197214/) и затем [Вскипание лавы](https://www.wowhead.com/ru/spell=60103/), которое гарантированно активирует бафф [Горячей руки](https://www.wowhead.com/ru/spell=201900). Затем сразу применяйте [Ветра рока](https://ru.wowhead.com/spell=384352) (без ГКД) и [Сокрушающую молнию](https://www.wowhead.com/ru/spell=187874).

* Во время активного баффа [Горячей руки](https://www.wowhead.com/ru/spell=201900) чередуйте [Вскипание лавы](https://www.wowhead.com/ru/spell=60103/) с [Сокрушающей молнией](https://www.wowhead.com/ru/spell=187874) и [Ударом бури](https://www.wowhead.com/ru/spell=17364).

* [Молнию](https://www.wowhead.com/ru/spell=188196/) или [Цепную молнию](https://www.wowhead.com/ru/spell=188443/) следует кастовать на **9+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880), за исключением ситуаций, если каст [Молнии](https://www.wowhead.com/ru/spell=188196/) сбросит кулдаун [Вскипания лавы](https://www.wowhead.com/ru/spell=60103/) за счет таланта [Стихийный ритм](https://www.wowhead.com/ru/spell=1250364) или продлит бафф [Горячей руки](https://www.wowhead.com/ru/spell=201900) на еще одно применение [Вскипания лавы](https://www.wowhead.com/ru/spell=60103/).

* Старайтесь использовать [Раскол](https://www.wowhead.com/ru/spell=197214/) каждые **30** секунд и синхронизировать его с [Пульсирующим тотемом](https://www.wowhead.com/ru/spell=444995). Не забывайте также использовать [Первозданную бурю](https://www.wowhead.com/ru/spell=1218047) на **10** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880), желательно во время [Ветров рока](https://ru.wowhead.com/spell=384352).

* Когда у вас нет более приоритетных заклинаний, порядок филлеров в бою против одной цели выглядит следующим образом:
  * [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874).
  * [Вскипание лавы](https://www.wowhead.com/ru/spell=60103/) без баффа [Горячей руки](https://www.wowhead.com/ru/spell=201900).
  * [Удар бури](https://www.wowhead.com/ru/spell=17364).
  * [Гальваническое пламя](https://www.wowhead.com/ru/spell=470057).


<hr style="height:1px;background-color:#bbb">
<p></p>


# Общая ветка талантов


Общая ветка талантов предлагает широкий выбор вспомогательных способностей, которые найдут применение в различных ситуациях.

Два таланта Элем Шаман получает по умолчанию без траты на них очков – это [Выброс лавы](https://ru.wowhead.com/spell=51505) и [Цепная молния](https://ru.wowhead.com/spell=188443). Так же есть несколько основных талантов, которые напрямую влияют на наносимый урон и выживаемость и их стоит брать практически в любом билде. К ним относятся:
* [Астральный сдвиг](https://www.wowhead.com/ru/spell=108271/) – основной сейв.
* [Элементаль земли](https://www.wowhead.com/ru/spell=198103) и [Первозданная связь](https://www.wowhead.com/ru/spell=381764) – дополнительный сейв.
* [Лед и пламя](https://www.wowhead.com/ru/spell=382886) – пассивное увеличение урона.
* [Гнев природы](https://www.wowhead.com/ru/spell=381655) – пассивное увеличение урона.
* [Пробуждение духа](https://www.wowhead.com/ru/spell=1270375) – пассивное увеличение урона.
* [Инстинктивные чары](https://www.wowhead.com/ru/spell=1270350/) – пассивное увеличение урона.
* [Защита от стихий](https://www.wowhead.com/ru/spell=381650) – снижает получаемый магический урон.
* [Щит земли](https://www.wowhead.com/ru/spell=974/) + [Кружащие стихии](https://www.wowhead.com/ru/spell=383010) + [Стойкость Теразан](https://www.wowhead.com/ru/spell=1217622/) – пассивное лечение на себя и на одного союзника.
* [Переполняющая сила жизни](https://www.wowhead.com/ru/spell=381689/) – увеличивает запас здоровья на **10%**.
* [Пронизыващий ветер](https://www.wowhead.com/ru/spell=57994/) – сбитие кастов, обязательный талант в Мифик+.
* [Благосклонность предков](https://www.wowhead.com/ru/spell=79206) – позволяет кастовать на ходу.
* [Природная стремительность](https://www.wowhead.com/ru/spell=378081/) – позволяет раз в минуту применить одно заклинание школы магии природы мгновенно. Не имеет ГКД. Обязательный талант для **Предсказателя**.

Следующие таланты выбираются в зависимости от подземелья и состава группы:
* [Тотем конденсации](https://www.wowhead.com/ru/spell=192058/) – АоЕ стан на **3** секунды.
* [Развеивание магии](https://www.wowhead.com/ru/spell=370) – снятие магического эффекта с врага.
* [Очищение духа](https://www.wowhead.com/ru/spell=51886) – снятие проклятия с союзника.
* [Тотем трепета](https://www.wowhead.com/ru/spell=8143) – снятие эффектов страха, подчинения и сна.
* [Тотем противоядия](https://www.wowhead.com/ru/spell=383013) – снятие эффектов яда.
* [Сглаз](https://www.wowhead.com/ru/spell=51514) – контроль одного противника.






# Характеристики

**Ловкость** – лучшая характеристика, так как повышает весь урон и растет от уровня предметов гораздо сильнее, чем вторичные статы. Поэтому в первую очередь стоит смотреть на уровень предметов.

С выбором вещей поможет [Raidbots](https://www.raidbots.com/simbot). Краткое руководство доступно [по этой ссылке](https://stormkeeper.ru/info/sim.html).

## Приоритет характеристик

Приоритет статов для **Вестника шторма**:

1. **Ловкость**.
1. **Скорость**.
2. **Искусность**.
3. **Критический удар**.
4. **Универсальность**.

Приоритет статов для **Тотемиста**:

1. **Ловкость**.
2. **Искусность**.
1. **Скорость**.
3. **Критический удар**.
4. **Универсальность**.



<hr style="height:1px;background-color:#bbb">
<p></p>

С выбором вещей поможет [Raidbots](https://www.raidbots.com/simbot). Краткое руководство доступно [по этой ссылке](https://stormkeeper.ru/info/sim.html).

**КАПОВ ХАРАКТЕРИСТИК НЕТ. НА СКОРОСТЬ ТОЖЕ НЕТ. И НА ИСКУСНОСТЬ. КАПОВ НЕТ.**

## Вторичные характеристики

* **Критический удар**: дает шанс, равный значению Критического удара, увеличить урон ваших способностей в **2** раза. 

<details markdown=1><summary><i>Подробнее про Критический удар...</i></summary>
<p></p>

* Талант [Шквал](https://www.wowhead.com/ru/spell=382888) дополнительно повышает ценность Критического удара.
* Базовое значение Критического удара, без учета характеристик, составляет **10%**.
* На получение **1%** Критического удара нужно **700** единиц рейтинга Критического удара.
* После набора **21000** рейтинга скорость роста этой характеристики снижается на **10%**. То есть для набора дополнительного **1%** Критического удара потребуется не **700** единиц рейтинга, а **770**. 

</details>
<p></p>

<hr style="height:1px;background-color:#bbb">
<p></p>

* **Cкорость**: снижает время между атаками и ГКД, а также снижает время восстановления некоторых способностей.

<details markdown=1><summary><i>Подробнее про Скорость...</i></summary>
<p></p>

* Снижает время восстановления следующих способностей: {{ site.data.spells.ss }}, {{ site.data.spells.ll }}, {{ site.data.spells.crush }}, {{ site.data.spells.fn }}, {{ site.data.spells.is }}. 
* Снижение ГКД от Скорости не относится к тотемам, так как у них он и так базово снижен до **1** секунды.
* Снижает время между тиками [Огненного шока](https://ru.wowhead.com/spell=188389). Добавляет дополнительный тик в конце действия эффекта, ослабленный в зависимости от недостающего времени до «полного» тика.
* Нет никаких капов и брейкпоинтов на Скорость. Каждая единица рейтинга оказывает соответствующее влияние на время произнесения заклинаний, ГКД и периодическое исцеление.
* На получение **1%** Скорости нужно **660** единиц рейтинга Скорости.
* После набора **19800** рейтинга скорость роста этой характеристики снижается на **10%**. То есть для набора дополнительного **1%** Скорости потребуется не **660** единиц рейтинга, а **726**.

</details>
<p></p>

<hr style="height:1px;background-color:#bbb">
<p></p>


* **Искусность**: увеличивает эффективность пассивного бонуса [Искусность: великая сила стихий](https://www.wowhead.com/ru/spell=77223).

<details markdown=1><summary><i>Подробнее про Искусность...</i></summary>
<p></p>

* Базовое значение Искусности, без учета характеристик, составляет **16%**.
* Повышает вероятность срабатывания [Вестника шторма](https://ru.wowhead.com/spell=319930/) и [Неистовства ветра](https://ru.wowhead.com/spell=33757), а также увеличивает наносимый урон от огня, магии льда и сил природы.
* Талант [Гнев шторма](https://www.wowhead.com/ru/spell=392352/) увеличивает влияение Искусности на вероятность срабатывания [Вестника шторма](https://ru.wowhead.com/spell=319930/) и [Неистовства ветра](https://ru.wowhead.com/spell=33757) на **150%**.
* Увеличение урона от Искусности работает как **белый список**, то есть только на те заклинания, которые указаны в описании на Wowhead.
* Искусность не увеличивает урон от аксессуаров и иных способностей, не указанных в списке (см. [Искусность: великая сила стихий](https://www.wowhead.com/ru/spell=77223)).
* На получение **1%** Искусности нужно **350** единиц рейтинга Искусности.
* После набора **21000** рейтинга скорость роста этой характеристики снижается на **10%**. То есть для набора дополнительного **1%** Искусности потребуется не **350** единиц рейтинга, а **385**.


</details>
<p></p>

<hr style="height:1px;background-color:#bbb">
<p></p>

* **Универсальность**: увеличивает наносимый урон и снижает получаемый урон.

<details markdown=1><summary><i>Подробнее про Универсальность...</i></summary>
<p></p>

* На получение **1%** Универсальности нужно **780** единиц рейтинга Универсальности, что больше, чем у других характеристик.
* После набора **23400** рейтинга скорость роста этой характеристики снижается на **10%**. То есть для набора дополнительного **1%** Универсальности потребуется не **780** единиц рейтинга, а **858**.

</details>
<p></p>

<hr style="height:1px;background-color:#bbb">
<p></p>


# Экипировка

## Загадочные фишки картелей

Лучшие предметы для покупки за [Загадочные фишки картелей](https://www.wowhead.com/ru/item=250741):
1. [Ритуальный горн Араза](https://www.wowhead.com/ru/item=242402) – при игре с талантом [Перерождение](https://www.wowhead.com/ru/spell=114051).
2. [Незыблемая призма Пустоты](https://www.wowhead.com/ru/item=242396) – при игре с талантом [Укоренившиеся стихии](https://www.wowhead.com/ru/spell=378270).
3. [Плетеные сапоги захватчика](https://www.wowhead.com/ru/item=243308/).
5. [Астральный усик](https://www.wowhead.com/ru/item=242395/).
6. [Импровизированный сефориевый стимулятор](https://www.wowhead.com/ru/item=232541) – альтернативный вариант пассивного тринкета, если не хочется отыгрывать сбор сфер.

<p></p>

## Повязки реши

Волокно в новом артефактном плаще [Повязки реши](https://www.wowhead.com/ru/item=235499) стоит ставить на Скорость.


## Комплект классовых доспехов

Сетовые комплекты в препатче пассивно увеличивают урон, но не дают никаких отдельных бонусов к способностям.


<p></p>

Энх Шаман носит сетовые плечи, штаны, перчатки и шлем, а нагрудник стоит заменить на предмет с более подходящими характеристиками.
{: class="bordered"}

## Редкие предметы из рейда


* [Плетеные сапоги захватчика](https://www.wowhead.com/ru/item=243308) – лучшие сапоги, усиливающие артефактный плащ [Повязки реши](https://www.wowhead.com/ru/item=235499).
* [Перстень расколотой души](https://www.wowhead.com/ru/item=242405/) – имеет не лучшие для Энха характеристики, а его щит не настолько силен, чтобы жертвовать уроном. Потенциально может использоваться в определенном сочетании с другой бижутерией, но в целом это кольцо в начале сезона лучше оставить тому, кому оно принесет больше пользы.



## Аксессуары

Полный рейтинг аксессуаров можно найти на [Bloodmallet](https://bloodmallet.com/chart/shaman/enhancement/trinkets/castingpatchwerk).


Лучшие активные аксессуары:

* [Ритуальный горн Араза](https://www.wowhead.com/ru/item=242402/%D1%80%D0%B8%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE%D1%80%D0%BD-%D0%B0%D1%80%D0%B0%D0%B7%D0%B0?bonus=7981:12052:5877:12361) – лучший прожимной аксессуар с огромным отрывом.
* [Перстень приората](https://www.wowhead.com/ru/item=219308/%D0%BF%D0%B5%D1%80%D1%81%D1%82%D0%B5%D0%BD%D1%8C-%D0%BF%D1%80%D0%B8%D0%BE%D1%80%D0%B0%D1%82%D0%B0?bonus=657:12052:5877:10390:12361) – альтернатива из Мифик+.

<p></p>


Лучшие пассивные аксессуары:
* [Астральный усик](https://www.wowhead.com/ru/item=242395/%D0%B0%D1%81%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D1%83%D1%81%D0%B8%D0%BA?bonus=1533:12361:12239&class=7&hero=56&ilvl=723&spec=262) – лучший пассивный тринкет. Дает не самый лучший для нас стат, но какое-то его количество всё равно стоит иметь на экипировке или в виде прока аксессуара.
* [Импровизированный сефориевый стимулятор](https://www.wowhead.com/ru/item=232541/%D0%B8%D0%BC%D0%BF%D1%80%D0%BE%D0%B2%D0%B8%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9-%D1%81%D0%B5%D1%84%D0%BE%D1%80%D0%B8%D0%B5%D0%B2%D1%8B%D0%B9-%D1%81%D1%82%D0%B8%D0%BC%D1%83%D0%BB%D1%8F%D1%82%D0%BE%D1%80?bonus=657:12052:5877:10390:12361) – прокает стабильно раз в минуту и отлично сочетается с нашими бурстами.
* [Тайный прием Со'леи](https://www.wowhead.com/ru/item=190958/%D1%82%D0%B0%D0%B9%D0%BD%D1%8B%D0%B9-%D0%BF%D1%80%D0%B8%D0%B5%D0%BC-%D1%81%D0%BE%D0%BB%D0%B5%D0%B8?bonus=657:12052:5877:10390:12361) – отличный пассивный тринкет с возможностью выбора характеристик, который к тому же усиливает союзника. В Вестнике шторма мы предпочитаем использовать бафф на Скорость.
* [Кокон выводка Ара-Кары](https://www.wowhead.com/ru/item=219314/%D0%BA%D0%BE%D0%BA%D0%BE%D0%BD-%D0%B2%D1%8B%D0%B2%D0%BE%D0%B4%D0%BA%D0%B0-%D0%B0%D1%80%D0%B0-%D0%BA%D0%B0%D1%80%D1%8B?bonus=657:12052:5877:10390:12361) – неплохой пассивный вариант.
* [Усиливающий кристалл Ануб'иккаджа](https://www.wowhead.com/ru/item=219312/%D1%83%D1%81%D0%B8%D0%BB%D0%B8%D0%B2%D0%B0%D1%8E%D1%89%D0%B8%D0%B9-%D0%BA%D1%80%D0%B8%D1%81%D1%82%D0%B0%D0%BB%D0%BB-%D0%B0%D0%BD%D1%83%D0%B1%D0%B8%D0%BA%D0%BA%D0%B0%D0%B4%D0%B6%D0%B0?bonus=657:12052:5877:10390:12361) – неплохой пассивный тринкет с проком на случайную характеристику.
* [Печать космической охоты](https://www.wowhead.com/ru/item=242397/%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D1%8C-%D0%BA%D0%BE%D1%81%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B9-%D0%BE%D1%85%D0%BE%D1%82%D1%8B?bonus=7981:12052:5877:12361) – хороший вариант для боя против одной цели, но не лучший на АоЕ.


## Улучшение предметов за гребни

1. Оружие.
2. Лучшие аксессуары. 
3. Сетовые предметы. 
4. Предметы с лучшими характеристиками. 


## Крафтовые предметы

1. Оружие, например [Заряженный разбиватель шлемов](https://www.wowhead.com/ru/item=222446/%D0%B7%D0%B0%D1%80%D1%8F%D0%B6%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D1%80%D0%B0%D0%B7%D0%B1%D0%B8%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D1%88%D0%BB%D0%B5%D0%BC%D0%BE%D0%B2?bonus=12040:1515:11300:8793), [Выкованная навеки булава](https://www.wowhead.com/ru/item=222442/) с украшением [Символ Новолуния "Вознесение"](https://www.wowhead.com/ru/item=226024/).
2. [Гравированные символами тяжелые наручи](https://www.wowhead.com/ru/item=219342) с [Извивающейся окантовкой доспеха](https://www.wowhead.com/ru/item=219506/). Данное украшение усиливает [Символ Новолуния "Вознесение"](https://www.wowhead.com/ru/item=226024/) в два раза.
3. Любой предмет низкого уровня.



# Расходуемые предметы
<hr style="height:1px;background-color:#bbb">
<p></p>


**Зачарования** и **самоцветы**:
* **Оружие**: [Искусство Каменных](https://www.wowhead.com/ru/item=223765) + [Неистовство странника бурь](https://www.wowhead.com/ru/item=223762/). [Симьтесь](https://stormkeeper.ru/info/sim.html) персонально для точных данных.
* **Бижутерия**: [Великолепная ювелирная оправа](https://www.wowhead.com/ru/item=213777/) – добавляет до **2** гнезд для самоцветов в **амулет** или **кольцо**.
* **Нагрудный доспех**: [Кристаллическое сияние](https://www.wowhead.com/ru/item=223692/)
* **Поножи**: [Усиленные штормом накладки для доспехов](https://www.wowhead.com/ru/item=219911)
* **Кольца**: [Сияющая скорость](https://www.wowhead.com/ru/item=223674/)
* **Плащ**: [Песнь крылатой грации](https://www.wowhead.com/ru/item=223731/)
* **Наручи**: [Песнь брони и избежания](https://www.wowhead.com/ru/item=223713/)
* **Ботинки**: [Ход разведчика](https://www.wowhead.com/ru/item=223653/) или [Ход защитника](https://www.wowhead.com/ru/item=223656/).
* **Эпический самоцвет**: [Профанит апогея](https://www.wowhead.com/ru/item=213743/)
* **Остальные самоцветы**: [Изумруд искусности](https://www.wowhead.com/ru/item=213482/). [Симьтесь](https://stormkeeper.ru/info/sim.html) персонально для точных данных.

<hr style="height:1px;background-color:#bbb">
<p></p>

Расходуемые предметы:
* **Настой**: [Настой алхимического хаоса](https://www.wowhead.com/ru/item=212283) или [Настой охлажденной стремительности](https://www.wowhead.com/ru/item=212274)
* **Зелье**: [Охлажденное зелье](https://www.wowhead.com/ru/item=212265/)
* **Чары на оружие**: [Оружие неистовства ветра](https://www.wowhead.com/ru/spell=33757/) и [Оружие языка пламени](https://www.wowhead.com/ru/spell=318038)
* **Руна**: [Кристаллизованная руна усиления](https://www.wowhead.com/ru/item=224572)
* **Еда**: [Пир полуночного маскарада](https://www.wowhead.com/ru/item=220425), либо [Суши-сюрприз](https://www.wowhead.com/ru/item=222720) / [Провизия чужака](https://www.wowhead.com/ru/item=222731) / [Блюдо шута](https://www.wowhead.com/ru/item=222730) / [Прощание императрицы](https://www.wowhead.com/ru/item=222729/) / [Благодать Беледар](https://www.wowhead.com/ru/item=222728)
* **Зелье лечения**: [Бодрящее лечебное зелье](https://www.wowhead.com/ru/item=244839)


<hr style="height:1px;background-color:#bbb">
<p></p>


# Интерфейс


Несмотря на то, что функционал аддонов в Midnight был ощутимо ограничен, всё еще имеется возможность подробно настроить таким образом, чтобы отслеживать различные проки и кулдауны было гораздо удобнее, чем в стандартном интерфейсе.  

[Мой](https://www.twitch.tv/amanizandalari) настроенный интерфейс доступен на [Boosty](https://boosty.to/amani).


## Макросы

В первую очередь – рекомендую настроить на касты по наведению мыши (mouseover) через стандартный интерфейс. Это позволит кастовать все заклинания без выбора цели, что особенно удобно для [Огненного шока](https://ru.wowhead.com/spell=188389) и [Пронизыващего ветра](https://www.wowhead.com/ru/spell=57994/), но я это использую для всех заклинаний:

<p align="center">
    <img src="/assets/img/mouseover.png"> 
</p>

<p></p>

{% include button.html name="Макросы для Энх Шамана" link="https://stormkeeper.ru/info/macros.html#%D1%81%D0%BE%D0%B2%D0%B5%D1%80%D1%88%D0%B5%D0%BD%D1%81%D1%82%D0%B2%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5" %}  

<p></p>


