---
layout: page
last_update: 2023-05-02
title: Гайд на Энх Шамана
wow: 10.1
toc: true
author: Amani
description: Большое руководство по всем аспектам игры за Шамана Совершенствования. Здесь разобраны билды талантов, приоритет заклинаний, подбор экипировки, настройка интерфейса, макросы и WA и многое другое.
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

Подробная статья по всем заклинаниям и талантам Энх Шамана:

<p></p>

{% include button.html name="Способности и таланты Энх Шамана" link="/enh/spells.html" %}  

<p></p>

## Плюсы и минусы 

<span style="color:#40bf40;font-size:1em;">Плюсы Энха в Мифик+</span>

* Интересный и приятный геймплей, ощущение импакта от нажимаемых кнопок, а также классные анимации.
* Разнообразное древо талантов и варианты билдов, практически полное отсутствие бесполезных «мертвых» талантов.
* Имеет три различных вида контроля больших групп врагов – [Громовой удар](https://www.wowhead.com/ru/spell=378779), [Тотем конденсации](https://ru.wowhead.com/spell=192058) и [Раскол](https://www.wowhead.com/ru/spell=197214).
* Может снимать проклятия, страх и сон, яды, отбрасывать или подкидывать противников, диспелить с врага магию, замедлять и станить группу врагов, превращать врагов в лягушку, а также имеет [Жажду крови](https://ru.wowhead.com/spell=2825).
* Может подхиливать союзников, а также в соло хилить группу с помощью [Наставления предков](https://ru.wowhead.com/spell=108281) во время бурстов на АоЕ.

<span style="color:#ff4040;font-size:1em;">Минусы Энха в Мифик+</span>

* Большое количество кнопок, необходимых для игры на адекватном уровне. 
* Неправильный отыгрыш приоритетов способностей может привести к простоям и потере урона, так что необходимо продумывать нажимаемые кнопки наперед.
* Основные АоЕ способности имеют кап **5-6** целей.	
* Не имеет иммуна (не считая [Реинкарнации](https://ru.wowhead.com/spell=20608)), для выживания следует полагаться на собственное исцеление и [Астральный сдвиг](https://ru.wowhead.com/spell=108271).

# Билды талантов

## Общая информация

Древо талантов Энха подразумевает использование двух различных билдов – с одной стороны расположены усиления <span style="color:#FFFFFF;font-size:1em;">**физического**</span> урона ([Ветра рока](https://www.wowhead.com/ru/spell=384352), [Оружие неистовства ветра](https://www.wowhead.com/ru/spell=33757/)), а с другой – <span style="color:#f16f25;font-size:1em;">**стихийного**</span> ([Вскипание лавы](https://www.wowhead.com/ru/spell=60103), [Огненный шок](https://ru.wowhead.com/spell=188389), [Духи стихий](https://ru.wowhead.com/spell=262624)).

В середине ветки расположены усиления [Оружия Водоворота](https://ru.wowhead.com/spell=187880) и основные АоЕ способности – [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874) и усиление [Цепной молнии](https://www.wowhead.com/ru/spell=188443/). Эти таланты являются **обязательными** в любом билде для Мифик+, так как без них практически нет нормального АоЕ урона. 

Соответственно, билды Энха можно разделить на <span style="color:#f16f25;font-size:1em;">**стихийные**</span> и <span style="color:#FFFFFF;font-size:1em;">**физические**</span>.

## Изменения в патче 10.1


<p></p>

{% include button.html name="Изменения Шамана в патче 10.1" link="https://stormkeeper.ru/2023/05/02/101.html" %}  

<p></p>

Энх получил достаточно большое количество изменений, направленных на усиление <span style="color:#FFFFFF;font-size:1em;">**физического**</span> билда. Последний стал лучше как в бою против одной цели, так и на АоЕ, за счет усиления [Кольца огня](https://www.wowhead.com/ru/spell=333974). Однако этот билд не является единственным выбором во всех ситуациях.

<span style="color:#f16f25;font-size:1em;">**Стихийный**</span> билд в бою против одной цели станет использовать не [Первозданную волну](https://www.wowhead.com/ru/spell=375982) и связанные с ней таланты, а [Перерождение](https://ru.wowhead.com/spell=114051), так как это дает доступ к усиленным пассивным эффектам талантов [Статическое накопление](https://www.wowhead.com/ru/spell=384411) и [Воззвание к Ториму](https://www.wowhead.com/ru/spell=384444). 

[Раскол](https://www.wowhead.com/ru/spell=197214) с новым сетом становится по настоящему бурст-способностью и его следует нажимать вместе с [Ветрами рока](https://www.wowhead.com/ru/spell=384352) или [Первозданной волной](https://www.wowhead.com/ru/spell=375982). А под баффом от **4** кусков сета нужно будет кастовать [Цепную молнию](https://ru.wowhead.com/spell=188443) в том числе и в бою против одной цели. 

## Таланты для Рейда

<span style="color:#f16f25;font-size:1em;">**Cтихийный**</span> рейдовый билд для боя против одной цели:

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BcQAAAAAAAAAAAAAAAAAAAAAAIJJpEJJIJhAJUSIAAAAAAAAAAAAgSEiQCKCk0SSKBCkkgGC?width=700&bgcolor=262b39&locale=ru_RU" width="730" height="500"></iframe>

<p></p>

* В стихийном билде в патче **10.1** теперь имеет смысл брать [Перерождение](https://www.wowhead.com/ptr/spell=114051/), по большей части за счет усиления талантов [Статическое накопление](https://www.wowhead.com/ru/spell=384411/) и [Воззвание к Ториму](https://www.wowhead.com/ru/spell=384444). Во время баффа [Перерождения](https://www.wowhead.com/ptr/spell=114051/) стоит как можно чаще использовать [Удар ветра](https://www.wowhead.com/ru/spell=115356), а также не забывать заряжать [Молнию](https://www.wowhead.com/ru/spell=188196/) для автоматической активации талантом [Воззвание к Ториму](https://www.wowhead.com/ru/spell=384444) после использования [Цепной молнии](https://www.wowhead.com/ru/spell=188443/) от бонуса [сетового комплекта](https://www.wowhead.com/ptr/item=202470).

* Стаки [Оружия Водоворота](https://ru.wowhead.com/spell=187880) стоит тратить в первую очередь на [Удар духов стихий](https://www.wowhead.com/ru/spell=117014), особенно под баффом от [Духов дикого зверя](https://ru.wowhead.com/spell=51533). Сочетание [Удара духов стихий](https://www.wowhead.com/ru/spell=117014) и баффов на стихии от таланта [Духи стихий](https://www.wowhead.com/ru/spell=262624) является одним из основных источников урона в этом билде.

* Не забывайте также использовать [Вскипание лавы](https://www.wowhead.com/ru/spell=60103/) под баффом от таланта [Горячая рука](https://www.wowhead.com/ru/spell=201900). В этом билде может накладываться сразу много различных проков и баффов. Правильно расставить приоритеты в бою – одна из основных ваших задач.

* В некоторых ситуациях получится иметь сразу **4** волка от таланта [Дух дикого зверя](https://ru.wowhead.com/spell=51533). Убедитесь, что вы успеете скастовать [Удар духов стихий](https://www.wowhead.com/ru/spell=117014) с максимальным количеством стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880) в этот момент.


<span style="color:#FFFFFF;font-size:1em;">**Физический**</span> рейдовый билд для боя против одной цели:


<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BcQAAAAAAAAAAAAAAAAAAAAAAIJJHAkcARSSSQSiECAAAAAAAAAAAAoEhkQCKCk0SSKBAJJkCC?width=700&bgcolor=262b39&locale=ru_RU" width="730" height="500"></iframe>

<p></p>

* Данный билд гораздо больше располагает к использованию [Молнии](https://www.wowhead.com/ru/spell=188196/) для траты стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880), за счет талантов [Статическое накопление](https://www.wowhead.com/ru/spell=384411/) и [Воззвание к Ториму](https://www.wowhead.com/ru/spell=384444). Если вы не берете [Удар духов стихий](https://www.wowhead.com/ru/spell=117014) в этом билде, то [Молния](https://www.wowhead.com/ru/spell=188196/) со всеми баффами обходит по урону [Выброс лавы](https://ru.wowhead.com/spell=51505), который в этом билде не используется.

* В этом билде вы гораздо чаще используете [Удар бури](https://www.wowhead.com/ru/spell=17364), но он служит не основным источником урона, а генератором проков и стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).

* Потенциально этот билд имеет самый высокий урон в бою против одной цели, но достигается это ценой практически полностью отсутствующего АоЕ урона. Вы можете заменить [Ледяной клинок](https://www.wowhead.com/ru/spell=342240) на [Сокрушающую молнию](https://www.wowhead.com/ru/spell=187874) для добавления клив урона в этот билд.

* Вы можете заменить [Укоренившиеся стихии](https://www.wowhead.com/ru/spell=378270) на [Перерождение](https://www.wowhead.com/ru/spell=114051) для более контролируемого и бурстового урона, если этого требует энкаунтер.


## Таланты для Мифик+


<span style="color:#f16f25;font-size:1em;">**Cтихийный**</span> билд для Мифик+ и АоЕ боя:

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BcQAAAAAAAAAAAAAAAAAAAAAAIJJpEJISSISCUSkAAAAAAAAAAAAAKRIJkokioQSLJpAoEkQgA?width=700&bgcolor=262b39&locale=ru_RU" width="730" height="500"></iframe>

<p></p>


* Основным бурстом в <span style="color:#f16f25;font-size:1em;">**стихийных**</span> билдах выступает [Первозданная волна](https://ru.wowhead.com/spell=375982), которая позволяет бурстить практически в каждый пак, так как имеет кулдаун всего **45** секунд. [Первозданная волна](https://ru.wowhead.com/spell=375982) позволяет получить бафф на **60%** Скорости на **12** секунд.

* Также [Вскипание лавы](https://www.wowhead.com/ru/spell=60103) с талантом [Натиск лавы](https://www.wowhead.com/ru/spell=334033) распространяет [Огненные шоки](https://ru.wowhead.com/spell=188389) на **4** ближайших противников, нанося при этом урон при наложении. Стоит использовать [Первозданную волну](https://ru.wowhead.com/spell=375982) при подходе к паку и сразу же спредать его [Вскипанием лавы](https://www.wowhead.com/ru/spell=60103), после чего применить [Огненной шок](https://ru.wowhead.com/spell=188389) и [Молнию](https://www.wowhead.com/ru/spell=188196/). Это даст **60%** бонус к Скорости (за **6** целей под [Огненным шоком](https://ru.wowhead.com/spell=188389)), что является основным бурстом <span style="color:#f16f25;font-size:1em;">**стихийного**</span> билда.

Для удобного отслеживания дебаффов используйте этот [мод на Plater](https://wago.io/o9Q7MSLDi) или от **Nikyou**.
{: class="bordered"}

* С талантом [Буря с градом](https://www.wowhead.com/ru/spell=334195), не нужно каждый [Ледяной шок](https://www.wowhead.com/ru/spell=196840) сдавать **только** с талантом [Ледяной клинок](https://www.wowhead.com/ru/spell=342240). Так как кулдаун [Ледяного клинка](https://www.wowhead.com/ru/spell=342240) в три раза длиннее кулдауна [Ледяного шока](https://www.wowhead.com/ru/spell=196840), то не бойтесь тратить стаки [Бури с градом](https://www.wowhead.com/ru/spell=334195) без баффа от [Ледяного клинка](https://www.wowhead.com/ru/spell=342240).

* Практически после каждой траты стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880) стоит сразу же кастовать [Ледяной клинок](https://www.wowhead.com/ru/spell=342240), а если он на кулдауне – то усиленный [Бурей с градом](https://www.wowhead.com/ru/spell=334195) [Ледяной шок](https://www.wowhead.com/ru/spell=196840). Не стоит его задерживать даже на один ГКД.


* Всегда поддерживайте бафф от [Сокрущающей молнией](https://www.wowhead.com/ru/spell=187874), который позволяет наносить АоЕ-урон основными способностями, такими как [Удар бури](https://www.wowhead.com/ru/spell=17364), [Вскипание лавы](https://www.wowhead.com/ru/spell=60103) и [Ледяной клинок](https://www.wowhead.com/ru/spell=342240).



<span style="color:#FFFFFF;font-size:1em;">**Физический**</span> билд для Мифик+ и АоЕ боя:

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BcQAAAAAAAAAAAAAAAAAAAAAAIRSaQSSikIAJtEJAAAAAAAAAAAAgSESCJapIKk0SSKAKBJkCC?width=700&bgcolor=262b39&locale=ru_RU" width="730" height="500"></iframe>

<p></p>

* Таланты [Статическое накопление](https://www.wowhead.com/ru/spell=384411/) и [Воззвание к Ториму](https://www.wowhead.com/ru/spell=384444) ощутимо усиливают [Цепную молнию](https://ru.wowhead.com/spell=188443), делая её крайне сильной способностью на АоЕ.

* [Кольцо огня](https://www.wowhead.com/ru/spell=333974) теперь считается и огненным, и физическим уроном, что позволяет талантам [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533/) и [Наследие ледяной ведьмы](https://www.wowhead.com/ru/spell=384450) дополнительно усиливать его урон. 

* За счет большого количества генерации [Оружия Водоворота](https://ru.wowhead.com/spell=187880) можно будет вызывать сразу несколько [Духов дикого зверя](https://www.wowhead.com/ru/spell=51533/), что в сочетании с талантом [Альфа-волк](https://ru.wowhead.com/spell=198434) даст большое количество АоЕ урона без ограничения на количество целей.

* Если заменить всю ветку после таланта [Укоренившиеся стихии](https://www.wowhead.com/ru/spell=378270) на [Первозданную волну](https://ru.wowhead.com/spell=375982) и связанные с ней таланты, то получится так называемый **гибридный** билд, который дает самый сильный бурст Энх Шамана – сочетание бонусной Скорости от таланта [Расколотые стихии](https://www.wowhead.com/ru/spell=382042), урон от [Ветров рока](https://www.wowhead.com/ru/spell=384352) и бонус [сетового комплекта](https://www.wowhead.com/ptr/item-set=1550) после использования [Раскола](https://www.wowhead.com/ru/spell=197214).


# Приоритет способностей

Основа игры на Шамане Совершенствования заключается в накоплении стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880) с помощью способностей ближнего боя и трате этих стаков на мощные мгновенные заклинания.

Следуйте следующим правилам при игре за Энх Шамана:


* **Не допускайте оверкапа стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880)**. На **10** стаках всегда стоит скастовать подходящее под ситуацию в бою заклинание. Мгновенно применять заклинания можно при накоплении **5** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880) или более, а максимум можно набрать **10** стаков, за счет таланта [Бурлящий Водоворот](https://www.wowhead.com/ru/spell=384149). Не стоит сразу же тратить стаки, как только их накопится **5**, сначала используйте способности с кулдауном, чтобы они не простаивали. Но и не стоит долгое время находиться на значении **10** стаков, так как в этот момент новые стаки будут просто теряться. 

* **Держите способности на кулдауне**. Не тратье стаки [Оружия Водоворота](https://ru.wowhead.com/spell=187880) сразу же как их накопится **5**, сначала используйте другие ваши способности. Это поможет избежать простоев в ротации и повысит ваш урон. Пока значение стаков не достигло **10** – используйте все другие способности из списка приоритетов.

* **Реагируйте на проки [Горячей руки](https://www.wowhead.com/ru/spell=201900/) и [Вестника шторма](https://www.wowhead.com/ru/spell=201845/).** Эти баффы увеличивают урон связанных с ними заклинаний и уменьшают количество простоев в ротации. Всегда обращайте на них внимание, чтобы не терять ДПС. 

* **Всегда используйте две [Цепные молнии](https://www.wowhead.com/ru/spell=188443/) от бонуса [сетового комплекта](https://www.wowhead.com/ptr/item-set=1550) даже в бою против одной цели**. [Раскол](https://www.wowhead.com/ru/spell=197214) ощутимо усиливает [Цепную молнию](https://www.wowhead.com/ru/spell=188443/), как увеличивая её урон, так и возвращая стаки [Оружия Водоворота](https://ru.wowhead.com/spell=187880), и этим не стоит пренебрегать.



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

Выберите используемые таланты, и приоритет способностей соответственно изменится. Некоторые таланты, такие как [Удар бури](https://www.wowhead.com/ru/spell=17364), [Вскипание лавы](https://www.wowhead.com/ru/spell=60103), [Раскол](https://www.wowhead.com/ru/spell=197214) и [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533/), подразумеваются как взятые по умолчанию.

<div class="btn-toolbar justify-content-center mt-2 mb-3">
  <div class="btn-group" role="group">
    <button type="button" id="build_enh_elem_raid" class="btn btn-primary rotation-btn">Стихийный билд (СТ)</button>
    <button type="button" id="build_enh_elem_mplus" class="btn btn-primary rotation-btn">Стихийный билд (АоЕ)</button>
    <button type="button" id="build_enh_phys_raid" class="btn btn-primary rotation-btn">Физический билд (СТ)</button>
    <button type="button" id="build_enh_phys_mplus" class="btn btn-primary rotation-btn">Физический билд (АоЕ)</button>
  </div>
</div>

<ul class="rotation_switches form-check form-switch mb-2" style="list-style-type: none;">
  <li markdown="span" class="rotation_switch">
      <input class="form-check-input" type="checkbox" id="rotation_switch_totem"> [Тотем неистовства ветра](https://www.wowhead.com/ru/spell=8512)</li>
  <li markdown="span" class="rotation_switch">
      <input class="form-check-input" type="checkbox" id="rotation_switch_cl"> [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874)</li>
  <li markdown="span" class="rotation_switch">
      <input class="form-check-input" type="checkbox" id="rotation_switch_asc"> [Перерождение](https://ru.wowhead.com/spell=114051)</li>
  <li markdown="span" class="rotation_switch">
      <input class="form-check-input" type="checkbox" id="rotation_switch_dre"> [Укоренившиеся стихии](https://www.wowhead.com/ru/spell=378270)</li>
   <li markdown="span" class="rotation_switch">
      <input class="form-check-input" type="checkbox" id="rotation_switch_sa"> [Статическое накопление](https://www.wowhead.com/ru/spell=384411)</li>     
  <li markdown="span" class="rotation_switch">
      <input class="form-check-input" type="checkbox" id="rotation_switch_ic"> [Ледяной клинок](https://www.wowhead.com/ru/spell=342240/)</li>
  <li markdown="span" class="rotation_switch">
      <input class="form-check-input" type="checkbox" id="rotation_switch_hs"> [Буря с градом](https://www.wowhead.com/ru/spell=334195/)</li>
  <li markdown="span" class="rotation_switch">
      <input class="form-check-input" type="checkbox" id="rotation_switch_fn"> [Кольцо огня](https://www.wowhead.com/ru/spell=333974/)</li>
  <li markdown="span" class="rotation_switch">
      <input class="form-check-input" type="checkbox" id="rotation_switch_eb"> [Удар духов стихий](https://www.wowhead.com/ru/spell=117014)</li>
  <li markdown="span" class="rotation_switch">
      <input class="form-check-input" type="checkbox" id="rotation_switch_dw"> [Ветра рока](https://www.wowhead.com/ru/spell=384352)</li>
  <li markdown="span" class="rotation_switch">
      <input class="form-check-input" type="checkbox" id="rotation_switch_pw"> [Первозданная волна](https://www.wowhead.com/ru/spell=375982)</li>
  <li markdown="span" class="rotation_switch">
      <input class="form-check-input" type="checkbox" id="rotation_switch_hh"> [Горячая рука](https://www.wowhead.com/ru/spell=201900)</li>
  <li markdown="span" class="rotation_switch">
      <input class="form-check-input" type="checkbox" id="rotation_switch_lf"> [Хлещущее пламя](https://www.wowhead.com/ru/spell=334046)</li>
  <li markdown="span" class="rotation_switch">
      <input class="form-check-input" type="checkbox" id="rotation_switch_fw"> [Наследие ледяной ведьмы](https://www.wowhead.com/ru/spell=384450)</li>
  <li markdown="span" class="rotation_switch">
      <input class="form-check-input" type="checkbox" id="rotation_switch_es"> [Духи стихий](https://www.wowhead.com/ru/spell=262624)</li>
  <li markdown="span" class="rotation_switch">
      <input class="form-check-input" type="checkbox" id="rotation_switch_two"> [Две части сетового комплекта](https://www.wowhead.com/ptr/item-set=1550)</li>
  <li markdown="span" class="rotation_switch">
      <input class="form-check-input" type="checkbox" id="rotation_switch_four"> [Четыре части сетового комплекта](https://www.wowhead.com/ptr/item-set=1550)</li>
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
1. {:.totem-apl}[Тотем неистовства ветра](https://www.wowhead.com/ru/spell=8512) как можно ближе к боссу на момент пула.
2. {:.no-pw-apl}[Огненный шок](https://ru.wowhead.com/spell=188389) на пути к цели.
3. [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533/).
4. {:.pw-apl}[Первозданная волна](https://www.wowhead.com/ru/spell=375982) для наложения [Огненного шока](https://ru.wowhead.com/spell=188389).
5. {:.pw-apl}[Молния](https://www.wowhead.com/ru/spell=188196/) с баффом от [Первозданной волны](https://www.wowhead.com/ru/spell=375982) и при наличии **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
8. {:.hh-apl}[Вскипание лавы](https://www.wowhead.com/ru/spell=60103/).
2. {:.ic-apl}[Ледяной клинок](https://www.wowhead.com/ru/spell=342240/).
12. {:.ic-apl .pw-apl .hs-apl}[Ледяной шок](https://www.wowhead.com/ru/spell=196840/).
10. {:.asc-apl}[Перерождение](https://ru.wowhead.com/spell=114051) в ближнем бою и сразу же [Удар ветра](https://www.wowhead.com/ru/spell=115356).
11. {:.dw-apl}[Ветра рока](https://www.wowhead.com/ru/spell=384352) и сразу же [Удар бури](https://www.wowhead.com/ru/spell=17364).
14. Продолжайте обычную ротацию.

<hr style="height:1px;background-color:#bbb">
<p></p>

**Приоритет способностей для боя против одной цели:**






2. [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533).
5. {:.two-apl}[Раскол](https://www.wowhead.com/ru/spell=197214) для активации сет-бонуса [Мощь земли](https://www.wowhead.com/ru/spell=409689).
3. {:.asc-apl}[Перерождение](https://www.wowhead.com/ru/spell=114051).
4. {:.dw-apl}[Ветра рока](https://www.wowhead.com/ru/spell=384352).
5. {:.asc-apl}[Удар ветра](https://www.wowhead.com/ru/spell=115356) ([Удар бури](https://www.wowhead.com/ru/spell=17364) во время активного [Перерождения](https://www.wowhead.com/ru/spell=114051)).
6. {:.dre-apl}[Удар ветра](https://www.wowhead.com/ru/spell=115356) ([Удар бури](https://www.wowhead.com/ru/spell=17364) во время активного [Перерождения](https://www.wowhead.com/ru/spell=114051)).
1. {:.totem-apl}[Тотем неистовства ветра](https://www.wowhead.com/ru/spell=8512), если он не активен.
8. {:.hh-apl}[Вскипание лавы](https://www.wowhead.com/ru/spell=60103/) с баффом от [Горячей руки](https://www.wowhead.com/ru/spell=201900) или при наличии **6+** стаков от таланта [Пепельный катализатор](https://www.wowhead.com/ru/spell=390371/).
14. {:.pw-apl}[Молния](https://www.wowhead.com/ru/spell=188196/) с баффом от [Первозданной волны](https://www.wowhead.com/ru/spell=375982) и при наличии **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
15. {:.eb-apl .no-dre-apl}[Удар духов стихий](https://www.wowhead.com/ru/spell=117014) если у вас **2** заряда этой способности и **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880), либо если **1** заряд и **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
  * {:.es-apl}Старайтесь использовать [Удар духов стихий](https://www.wowhead.com/ru/spell=117014) при активных [Духах дикого зверя](https://www.wowhead.com/ru/spell=51533) с талантом [Духи стихий](https://www.wowhead.com/ru/spell=262624).
12. {:.four-apl}[Цепная молния](https://ru.wowhead.com/spell=188443) с баффом от сет-бонуса [Трескучий гром](https://www.wowhead.com/ru/spell=409834/) и при наличии **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
15. {:.eb-apl .dre-apl}[Удар духов стихий](https://www.wowhead.com/ru/spell=117014) если у вас **2** заряда этой способности и **8+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
21. {:.pw-apl}[Первозданная волна](https://www.wowhead.com/ru/spell=375982).
30. {:.dre-apl}[Удар бури](https://www.wowhead.com/ru/spell=17364).
17. {:.dw-apl .ic-apl}[Ледяной клинок](https://www.wowhead.com/ru/spell=342240/) во время баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352).
18. {:.dw-apl .cl-apl}[Сокрушающая молния](https://www.wowhead.com/ru/spell=187874) во время баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352).
19. {:.dw-apl .no-two-apl}[Раскол](https://www.wowhead.com/ru/spell=197214) во время баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352).
20. [Огненный шок](https://ru.wowhead.com/spell=188389), если отстутствует на цели.
24. {:.ic-apl .hs-apl}[Ледяной клинок](https://www.wowhead.com/ru/spell=342240/).
25. {:.hs-apl}[Ледяной шок](https://www.wowhead.com/ru/spell=196840/) с баффом от таланта [Буря с градом](https://www.wowhead.com/ru/spell=334195).
33. [Вскипание лавы](https://www.wowhead.com/ru/spell=60103), если время действия [Огненного шока](https://ru.wowhead.com/spell=188389) менее **5.4** секунд.
15. {:.eb-apl .dre-apl}[Удар духов стихий](https://www.wowhead.com/ru/spell=117014) при наличии **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
27. {:.no-eb-apl .no-sa-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505) при наличии **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
29. [Молния](https://www.wowhead.com/ru/spell=188196/) при наличии **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
33. [Вскипание лавы](https://www.wowhead.com/ru/spell=60103).
31. {:.no-dre-apl}[Удар бури](https://www.wowhead.com/ru/spell=17364).
32. {:.ic-apl .no-hs-apl}[Ледяной клинок](https://www.wowhead.com/ru/spell=342240/).
35. {:.no-two-apl}[Раскол](https://www.wowhead.com/ru/spell=197214).
34. [Молния](https://www.wowhead.com/ru/spell=188196/) при наличии **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
36. [Ледяной шок](https://www.wowhead.com/ru/spell=196840/).
37. {:.fn-apl}[Кольцо огня](https://www.wowhead.com/ru/spell=333974).
38. {:.cl-apl}[Сокрушающая молния](https://www.wowhead.com/ru/spell=187874).
39. [Огненный шок](https://ru.wowhead.com/spell=188389).
40. {:.totem-apl}[Тотем неистовства ветра](https://www.wowhead.com/ru/spell=8512), если все остальные способности недоступны.
</div>

<div id="aoe" markdown="1" style="display:none;">
**Опенер в бою против 2+ целей:**
1. {:.totem-apl}[Тотем неистовства ветра](https://www.wowhead.com/ru/spell=8512) как можно ближе к боссу на момент пула.
2. {:.no-pw-apl}[Огненный шок](https://ru.wowhead.com/spell=188389) на пути к цели.
3. [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533/).
4. {:.pw-apl}[Первозданная волна](https://www.wowhead.com/ru/spell=375982) для наложения [Огненного шока](https://ru.wowhead.com/spell=188389).
6. {:.pw-apl}[Огненный шок](https://ru.wowhead.com/spell=188389) на цель без [Огненного шока](https://ru.wowhead.com/spell=188389), если целей **6** или более.
5. {:.pw-apl}[Вскипание лавы](https://www.wowhead.com/ru/spell=60103) для спреда [Огненного шока](https://ru.wowhead.com/spell=188389) на соседние цели.
7. {:.pw-apl}[Молния](https://www.wowhead.com/ru/spell=188196/) с баффом от [Первозданной волны](https://www.wowhead.com/ru/spell=375982) и при наличии **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
10. {:.asc-apl}[Перерождение](https://ru.wowhead.com/spell=114051).
13. {:.dw-apl .cl-apl}[Ветра рока](https://www.wowhead.com/ru/spell=384352) и сразу же [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874).
14. {:.no-dw-apl .cl-apl}[Сокрушающая молния](https://www.wowhead.com/ru/spell=187874).
11. {:.ic-apl .hs-apl}[Ледяной клинок](https://www.wowhead.com/ru/spell=342240/).
12. {:.ic-apl .hs-apl}[Удар бури](https://www.wowhead.com/ru/spell=17364).
13. {:.ic-apl .hs-apl}[Ледяной шок](https://www.wowhead.com/ru/spell=196840).
15. Продолжайте обычную ротацию.

<hr style="height:1px;background-color:#bbb">
<p></p>

**Приоритет способностей в бою против 2+ целей:**
1. [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533).
2. [Огненный шок](https://ru.wowhead.com/spell=188389), если его нет ни на одной из целей.
3. [Вскипание лавы](https://www.wowhead.com/ru/spell=60103), если на цели есть [Огненный шок](https://ru.wowhead.com/spell=188389), а на соседних целях [Огненный шок](https://ru.wowhead.com/spell=188389) отсутствует.
3. {:.totem-apl}[Тотем неистовства ветра](https://www.wowhead.com/ru/spell=8512), если он не активен.
4. {:.asc-apl}[Перерождение](https://www.wowhead.com/ru/spell=114051), если в [Воззвание к Ториму](https://www.wowhead.com/ru/spell=384444) [записана](https://wago.io/DT4YbYlpN) [Цепная молния](https://ru.wowhead.com/spell=188443).
5. {:.ic-apl .hs-apl}[Ледяной клинок](https://www.wowhead.com/ru/spell=342240/).
6. {:.hs-apl}[Ледяной шок](https://www.wowhead.com/ru/spell=196840/) с баффом от таланта [Буря с градом](https://www.wowhead.com/ru/spell=334195).
5. {:.pw-apl}[Молния](https://www.wowhead.com/ru/spell=188196/) с баффом от [Первозданной волны](https://www.wowhead.com/ru/spell=375982) и при наличии **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
18. {:.dre-apl}[Удар ветра](https://www.wowhead.com/ru/spell=115356) ([Удар бури](https://www.wowhead.com/ru/spell=17364) во время активного [Перерождения](https://www.wowhead.com/ru/spell=114051)).
18. {:.asc-apl}[Удар ветра](https://www.wowhead.com/ru/spell=115356) ([Удар бури](https://www.wowhead.com/ru/spell=17364) во время активного [Перерождения](https://www.wowhead.com/ru/spell=114051)).
6. [Цепная молния](https://ru.wowhead.com/spell=188443) при наличии **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
8. {:.dw-apl}[Ветра рока](https://www.wowhead.com/ru/spell=384352).
10. {:.dw-apl .no-two-apl}[Раскол](https://www.wowhead.com/ru/spell=197214) во время баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352).
10. {:.two-apl}[Раскол](https://www.wowhead.com/ru/spell=197214) для активации сет-бонуса [Мощь земли](https://www.wowhead.com/ru/spell=409689).
9. {:.dw-apl}[Сокрушающая молния](https://www.wowhead.com/ru/spell=187874) во время баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352).
13. {:.fn-apl}[Кольцо огня](https://www.wowhead.com/ru/spell=333974), если под [Огненным шоком](https://ru.wowhead.com/spell=188389) находится **6** противников.
17. {:.pw-apl}[Первозданная волна](https://www.wowhead.com/ru/spell=375982).
10. {:.cl-apl}[Сокрушающая молния](https://www.wowhead.com/ru/spell=187874) с баффом после каста [Цепной молнии](https://ru.wowhead.com/spell=188443). 
19. {:.dre-apl}[Удар бури](https://www.wowhead.com/ru/spell=17364).
20. {:.lf-apl}[Вскипание лавы](https://www.wowhead.com/ru/spell=60103) по цели с [Огненным шоком](https://ru.wowhead.com/spell=188389), но без дебаффа от таланта [Хлещущее пламя](https://www.wowhead.com/ru/spell=334046).
21. {:.no-two-apl}[Раскол](https://www.wowhead.com/ru/spell=197214).
22. {:.asc-apl}[Удар ветра](https://www.wowhead.com/ru/spell=115356) ([Удар бури](https://www.wowhead.com/ru/spell=17364) во время активного [Перерождения](https://www.wowhead.com/ru/spell=114051)).
23. {:.fn-apl}[Кольцо огня](https://www.wowhead.com/ru/spell=333974), если под [Огненным шоком](https://ru.wowhead.com/spell=188389) находится **2** и более противников.
24. [Вскипание лавы](https://www.wowhead.com/ru/spell=60103).
25. {:.ic-apl .no-hs-apl}[Ледяной клинок](https://www.wowhead.com/ru/spell=342240/).
26. {:.no-dre-apl}[Удар бури](https://www.wowhead.com/ru/spell=17364).
27. {:.cl-apl}[Сокрушающая молния](https://www.wowhead.com/ru/spell=187874).
28. {:.cl-apl .eb-apl}[Удар духов стихий](https://www.wowhead.com/ru/spell=117014) при наличии **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880) и если в бою не более **2** целей.
  * {:.es-apl}Старайтесь использовать [Удар духов стихий](https://www.wowhead.com/ru/spell=117014) при активных [Духах дикого зверя](https://www.wowhead.com/ru/spell=51533).
28. {:.no-cl-apl .eb-apl}[Удар духов стихий](https://www.wowhead.com/ru/spell=117014) при наличии **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
  * {:.es-apl}Старайтесь использовать [Удар духов стихий](https://www.wowhead.com/ru/spell=117014) при активных [Духах дикого зверя](https://www.wowhead.com/ru/spell=51533).
29. [Цепная молния](https://ru.wowhead.com/spell=188443) при наличии **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
30. [Ледяной шок](https://www.wowhead.com/ru/spell=196840/).
31. [Огненный шок](https://ru.wowhead.com/spell=188389).
32. {:.totem-apl}[Тотем неистовства ветра](https://www.wowhead.com/ru/spell=8512), если все остальные способности недоступны.
</div>

<hr style="height:1px;background-color:#bbb">
<p></p>

# Общая ветка талантов

Общая ветка талантов предлагает широкий выбор вспомогательных способностей, которые найдут применение в различных ситуациях.

Два таланта Энх Шаман получает по умолчанию без траты на них очков – это [Цепная молния](https://ru.wowhead.com/spell=188443) и [Оружие Водоворота](https://www.wowhead.com/ru/spell=187880). Так же есть несколько основных талантов, которые напрямую влияют на наносимый урон и выживаемость и их стоит брать в любом билде. К ним относятся:
* [Шквал](https://www.wowhead.com/ru/spell=382888) – пассивное увеличение урона.
* [Астральный сдвиг](https://www.wowhead.com/ru/spell=108271/) – основной сейв.
* [Лед и пламя](https://www.wowhead.com/ru/spell=382886) – пассивное увеличение урона.
* [Гнев природы](https://www.wowhead.com/ru/spell=381655) – пассивное увеличение урона.
* [Улучшенная молния](https://www.wowhead.com/ru/spell=381674) – пассивное увеличение урона.
* [Защита от стихий](https://www.wowhead.com/ru/spell=381650) – снижает получаемый магический урон.
* [Защита предков](https://www.wowhead.com/ru/spell=382947) – увеличивает Избежание и Самоисцеление.
* [Переполняющая сила жизни](https://www.wowhead.com/ru/spell=381689/) – увеличивает запас здоровья на **8%**.
* [Пронизыващий ветер](https://www.wowhead.com/ru/spell=57994/) – сбитие кастов, обязательный талант в Мифик+.
* [Поступь духов](https://www.wowhead.com/ru/spell=58875/) – увеличение скорости передвижения и снятие ограничивающих передвижение эффектов. Как альтернативу можно взять [Порыв ветра](https://ru.wowhead.com/spell=192063), если нужен аналог блинка, а не ускорение.
* [Наставления предков](https://www.wowhead.com/ru/spell=108281) – позволяет раз в **2** минуты в течение **10** секунд хилить союзников на процент от нанесенного вами урона. Во время бурстов вы можете практически соло держать всю группу на максимальном здоровье. Не имеет ГКД.

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

## Формулы расчета урона

Урон способностей Энх Шамана считается по следующей формуле:

* **Урон способности** = (**Сила атаки** + **ДПС оружия** * **6**) * **Коэффициент AP способности** * **Коэффициент классовой ауры** * **Универсальность**

**Сила атаки** зависит от показателя Ловкости и урона в секунду оружия. Формула расчета следующая:

* **Сила атаки** = **Ловкость** + **ДПС оружия** * **6**

При расчете урона от оружия не важны показатели скорости или минимальных и максимальных значений урона, главное – **урон в секунду**. А он, в свою очередь, напрямую зависит от уровня предмета оружия.
{: class="bordered"}

Для расчета урона заклинаний, таких как [Молния](https://ru.wowhead.com/spell=188196) и [Огненный шок](https://ru.wowhead.com/spell=188389), в формуле используется **Сила заклинаний**, а не **Сила атаки**. Но для Энх Шамана Сила заклинаний практически равна Силе атаки:

* **Сила заклинаний** = **Сила атаки** * **1.01**

После этого **Сила заклинаний** перемножается на **Коэффициент силы атаки** или **Коэффициент силы заклинаний** способности.

Коэффициент силы атаки способности – это то значение, что можно найти в подсказке на Wowhead. Например, коэффициент урона у [Вскипания лавы](https://ru.wowhead.com/spell=60103/) составляет **75.6%**. Для заклинаний, соответственно, это будет коэффициент силы заклинаний.

Следующий модификатор, что влияет на урон способности – классовая аура. Её можно найти на Wowhead, для Энха она выглядит вот так: [Шаман - Совершенствование](https://ru.wowhead.com/spell=137041). С её помощью разработчики могут усилить или ослабить сразу весь урон специализации, не меняя коэффициенты силы атаки и силы заклинаний у каждой отдельной способности.

Это аура никак не отображается в игре, но все её значения можно увидеть также на Wowhead.

Например у [Вскипания лавы](https://ru.wowhead.com/spell=60103/), как и у многих других атакующих способностей, в классовой ауре стоит модификатор **+16%**, что следует учитывать в формуле расчета урона.

## Вторичные характеристики

* **Критический удар**: дает шанс, равный значению Критического удара, увеличить урон ваших способностей в **2** раза. 

<details markdown=1><summary><i>Подробнее про Критический удар...</i></summary>
<p></p>

* Талант [Шквал](https://www.wowhead.com/ru/spell=382888) дополнительно повышает ценность Критического удара.
* Базовое значение Критического удара, без учета характеристик, составляет **10%**.
* На получение **1%** Критического удара нужно **170** единиц рейтинга Критического удара.
* После набора **5100** рейтинга скорость роста этой характеристики снижается на **10%**. То есть для набора дополнительного **1%** Критического удара потребуется не **170** единиц рейтинга, а **187**.

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
* На получение **1%** Скорости нужно **170** единиц рейтинга Скорости. 
* После набора **5100** рейтинга скорость роста этой характеристики снижается на **10%**. То есть для набора дополнительного **1%** Скорости потребуется не **170** единиц рейтинга, а **187**.

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
* На получение **1%** Искусности нужно **90** единиц рейтинга Искусности.
* После набора **5400** рейтинга скорость роста этой характеристики снижается на **10%**. То есть для набора дополнительного **1%** Искусности потребуется не **90** единиц рейтинга, а **99**.


</details>
<p></p>

<hr style="height:1px;background-color:#bbb">
<p></p>

* **Универсальность**: увеличивает наносимый урон и снижает получаемый урон.

<details markdown=1><summary><i>Подробнее про Универсальность...</i></summary>
<p></p>

* На получение **1%** Универсальности нужно **205** единиц рейтинга Универсальности, что больше, чем у других характеристик.
* После набора **6150** рейтинга скорость роста этой характеристики снижается на **10%**. То есть для набора дополнительного **1%** Универсальности потребуется не **205** единиц рейтинга, а **225.5**.

</details>
<p></p>

<hr style="height:1px;background-color:#bbb">
<p></p>


## Приоритет характеристик

Приоритет статов для **всех** билдов и **всех** типов PvE контента следующий:

* **Ловкость** > **Искусность** = **Скорость** > **Критический удар** > **Универсальность**.

При этом <span style="color:#FFFFFF;font-size:1em;">**физические**</span> билды **чуть больше** предпочитают Скорость, а <span style="color:#f16f25;font-size:1em;">**стихийные**</span> билды **чуть больше** предпочитают Искусность.

# Экипировка

## Комплект классовых доспехов

Как можно быстрее получите из рейда **2/4** куска сетового комплекта. В идеале нужно носить **4** предмета без перчаток, так как они имеют не лучшие статы и уровень предмета. Шаман делит классовые куски с **Паладином** и **Жрецом**.

* Бонус **2** предметов: [Раскол](https://www.wowhead.com/ru/spell=197214) повышает Искусность на **24%** на **15** секунд. 
* Бонус **4** предметов: [Раскол](https://www.wowhead.com/ru/spell=197214) увеличивает наносимый вами <span style="color:#FFFFFF;font-size:1em;">**физический**</span> и <span style="color:#f16f25;font-size:1em;">**огненный**</span> урон на **20%** на **15** секунд. Кроме того, **2** следующих [Цепных молнии](https://ru.wowhead.com/ru/spell=188443) нанесут на **100%** больше урона и вернут **50%** затраченных стаков [Оружия Водоворота](https://ru.wowhead.com/ru/spell=187880). 

Сет выпадает из следующих боссов:

* [Брэ золоволка](https://www.wowhead.com/ru/item=202469) – Рашок Древний.
* [Кастет золоволка](https://www.wowhead.com/ru/item=202471) – Забытые эксперименты.
* [Наряд золоволка](https://www.wowhead.com/ru/item=202473) – Бдительный распорядитель Зкарн.
* [Каркасный шлем золоволка](https://www.wowhead.com/ru/item=202470) – Магморакс.
* [Молниевые пластины золоволка](https://www.wowhead.com/ru/item=202468) – Эхо Нелтариона.

Помимо Рейда сетовый комплект можно также получить из еженедельного сундука за Мифик+ и через Катализатор, который открывается через **5** недель после старта патча **10.1**.
{: class="bordered"}

## Аксессуары

Полный рейтинг аксессуаров можно найти на [Bloodmallet](https://bloodmallet.com/chart/shaman/enhancement/trinkets/castingpatchwerk).

Лучшие аксессуары:
* [Зловещая разноцветная субстанция](https://www.wowhead.com/ru/item=203729/) – Забытые эксперименты. Выбираем Искусность или Скорость.
* [Бомбомет драконьего огня](https://www.wowhead.com/ru/item=202610/) – Бдительный распорядитель Зкарн. Лучший аксессуар для СТ.
* [Шулерские кости Харлана](https://www.wowhead.com/ru/item=155881) – Вольная Гавань. Лучший аксессуар из Мифик+.

Если нет перечисленных выше:
* [Властный зов Нелтариона](https://www.wowhead.com/ru/item=204202) – Эхо Нелтариона, «очень редкий» дроп.
* [Огненный камень потока](https://www.wowhead.com/ru/item=203996/) – Магморакс. Указан как дроп для РДД, но является лучшим тринкетом для Энха.
* [Зловещая разноцветная субстанция](https://www.wowhead.com/ru/item=203729/) – Забытые эксперименты. Выбираем Искусность или Скорость.
* [Кричащая чешуйка черного дракона](https://www.wowhead.com/ru/item=202612/) – Каззара Огнекованная.
* [Боевой рог родной земли](https://www.wowhead.com/ru/item=193815) – Ульдаман: наследие Тира.

## Оружие

Лучшее оружие:
* Крафтовое оружие **447** ilvl с характеристиками Скорость и Искусность.

Оружие из Подгнилья и Нелтария **не эффективно** на Энхе и вместо него стоит использовать обычное оружие с характеристиками.
{: class="bordered"}


## Улучшение предметов

В патче **10.1** добавлена новая система улучшения экипировки, которая пришла на место очкам Доблести из прошлых патчей.

Подробнее про систему улучшения можно почитать в специальных материалах, например от [Dratnos](https://docs.google.com/spreadsheets/d/e/2PACX-1vQogGG6tjV-PtQgunxFgNVMizsfZ9YhhCRQw9vh0vmmeickHwH9HAaB5o58oKhl-IoTNkKqS_pHEC_F/pubhtml), [Laria](https://docs.google.com/document/d/e/2PACX-1vSMrFpkgeIz6Q1fefG71xH0xNgGu0uXEnNNru6yJ8vtxr6DrQKj2uNtOWYlAestRFeH5Z2XxuAFExrv/pub) или [Video](https://docs.google.com/spreadsheets/d/e/2PACX-1vQmjfnXKpGyKmQK3O2TQP-pIbWbVh7Yss636Wkn83XssTRu7BG4ON7UBSbmsdEcQN-knC1DhYXD3fHZ/pubhtml).
{: class="bordered"}

Так как количество Гребней, необходимых для улучшения предметов, ограничено еженедельным кулдауном, нужно с умом их тратить. Лучше всего улучшать те предметы, которые вы не скоро смените на версии более высокого ilvl или крафтом:
1. **Аксессуары из рейда**. Если вы выбили нужный аксессуар в Героике, стоит улучшить его до **441** ilvl.
2. **Оружие для правой руки**. Лучше всего оружие крафтить с помощью [Искры пламени Тьмы](https://www.wowhead.com/ru/item=204440/), однако если вам повезло выбить отличный предмет в этот слот – стоит потратить Гребни на него, а [Искру пламени Тьмы](https://www.wowhead.com/ru/item=204440/) применить для другой экипировки.
3. **Сетовые предметы**. До открытия Катализатора стоит тратить Гребни на улучшение сетовых предметов, но только в том случае, если вы не собираетесь в самое ближайшее время убивать босса с этим куском.
4. **Предметы с лучшими характеристиками**. Вы получаете скидки на использование Гребней в том случае, если уже обладаете предметом более высокого ilvl в данном слоте. Так что имеет смысл улучшать бисовые предметы за бесценок, без привязки к еженедельному капу Гребней.

## Крафтовые предметы

Начиная со старта патча **3 мая** вы сможете получать одну [Искру пламени Тьмы](https://www.wowhead.com/ru/item=204440/) раз в две недели. С помощью [Искры пламени Тьмы](https://www.wowhead.com/ru/item=204440/) можно крафтить экипировку вплоть до **447** ilvl, что является эквивалентом предметов с предпоследних боссов Эпохального рейда.

Лучшие предметы для крафта с помощью [Искры пламени Тьмы](https://www.wowhead.com/ru/item=204440/):
1. **Одноручное оружие**. Не имеет значения какое именно это будет оружие, булава, топор или кастет. Главное – не делайте оружие с Интеллектом или кинжал.
2. **Нон-сетовый кольчужный предмет**. Не все предметы можно получить из Рейда или Мифик+ с желаемыми статами и высокого ilvl, так что крафт таких предметов будет очень кстати. Плюс это открывает свободу в выборе украшений, так как всегда можно использовать рекрафт и заменить или добавить украшение.
3. **Кольцо**. За счет крафта кольца вы получите сразу предмет с нужными характеристиками и с гарантированным гнездом для самоцвета.
4. **Комплект** [Облачения бегущего за горизонт](https://www.wowhead.com/ru/item-set=1510/), [Пояс](https://www.wowhead.com/ru/item=193463) и [Перчатки](https://www.wowhead.com/ru/item=193465). Один из лучших вариантов для крафта за счет сильного украшения, но требует сразу две [Искры пламени Тьмы](https://www.wowhead.com/ru/item=204440/), либо придется носить предмет из первого сезона низкого ilvl.
5. **Ожерелье**. Как и в случае с кольцом, на крафтовом ожерелье можно выбрать желаемые статы. Плюс это отличный вариант в том случае, если вы будете менять [Аркан стихий](https://www.wowhead.com/ru/item=193001/) ради освобождения слота украшения.
6. [Сложные манжеты](https://www.wowhead.com/ru/item=198332). Инженерные наручи будут особенно полезны для любителей Мифик+, так как дают доступ к боевому воскрешению – [Тангенциальный корректор жизненной силы](https://www.wowhead.com/ru/item=201409/).
7. [Адаптивные дракотистовые боевые наручи](https://www.wowhead.com/ru/item=204704/) либо [Пропитанные ядом высокие ботинки](https://www.wowhead.com/ru/item=193460) – дают неплохие проки вторичных статов.

[Аркан стихий](https://www.wowhead.com/ru/item=193001/) после добавления зависимости силы прока от количества камней это уже не такой хороший вариант, как в первом сезоне. Учитывая усиление других украшений, [Аркан стихий](https://www.wowhead.com/ru/item=193001/) теперь можно спокойно заменить на другой крафтовый предмет.



## Украшения


[Ботфорты кислотного града](https://www.wowhead.com/ru/item=193466/) на данный момент являются одним из лучших украшений, особенно в сочетании с [Пропитанной ядом броневой пластиной](https://www.wowhead.com/ru/item=193552), однако не стоит забывать про негативный эффект – снижение скорости передвижения. Вместе с аксессуаром [Властный зов Нелтариона](https://www.wowhead.com/ru/item=204202) мы будем иметь **30%** снижение скорости передвижения, что может быть особенно критично в момент бурста.
{: class="bordered"}


1. **Комплект** [Облачения бегущего за горизонт](https://www.wowhead.com/ru/item-set=1510/), [Пояс](https://www.wowhead.com/ru/item=193463) и [Перчатки](https://www.wowhead.com/ru/item=193465). Один из самых сильных проков и в СТ, и на АоЕ. Требует две искры и ограничивает выбор сетовых предметов – вы не сможете использовать перчатки для набора **4** кусков сета, так что в случае невезения крафт этого сета может выйти боком. 
2. [Украшения для клыков](https://www.wowhead.com/ru/item=193554) (только оружие) – так как первый крафт будет почти наверняка оружие, то эти украшения отличный выбор. Это украшение не являются лучшим вариантом в плане чистой эффективности, так что в будущем его можно будет заменить на более профитный вариант. Более полезно в СТ, чем в АоЕ.
3. [Закаленная в пламени тьмы броневая пластина](https://www.wowhead.com/ptr/item=204710) (только броня) – новое украшение патча **10.1**, наиболее эффективно в СТ. Можно использовать как временную заглушку в зависимости от вашего крафта и в будущем заменить на более эффективный вариант.
4. [Адаптивные дракотистовые боевые наручи](https://www.wowhead.com/ru/item=204704/) – чем-то напоминает [Аркан стихий](https://www.wowhead.com/ru/item=193001/) из первого сезона. Главный минус – данные наручи не позволяют использовать [Сложные манжеты](https://www.wowhead.com/ru/item=198332) для боевого воскрешения в Мифик+.
5. [Пропитанные ядом высокие ботинки](https://www.wowhead.com/ru/item=193460) – снижает не самые нужные нам статы на более полезные, такие как Искусность и Скорость. Но сам предмет не имеет лучших статов, так что это всё таки не идеальный вариант украшения.
6. [Замедлитель усвоения зелий](https://www.wowhead.com/ru/item=191532) – продлевает время действия [Зелья великой мощи стихий](https://www.wowhead.com/ru/item=191383/) на **15** секунд, что усиливает бурст, но является далеко не самым лучшим выбором по общей полезности. По ходу сезона можно использовать это украшение на запасном оружии и переодевать его под каждое зелье, а потом менять обратно.
7. [Подкладка из синего шелка](https://www.wowhead.com/ru/item=193946/) – хорошее украшение в том случае, если вы сможете держать его аптайм в районе **90%**. Однако это крайне редко удается на освоении нового рейда и в высоких Мифик+, так что лучше рассмотреть другие варианты.
8. [Мешочек алхимических приправ](https://www.wowhead.com/ru/item=200652/) – технически является украшением, но не занимает слота. Позволяет не терять бафф еды в случае смерти и воскрешения, что особенно актуально для Шамана с учетом [Реинкарнации](https://ru.wowhead.com/spell=20608).


# Расходуемые предметы

<hr style="height:1px;background-color:#bbb">
<p></p>


**Зачарования** лучше всего использовать максимального качества. Как альтернатива здесь также указаны более дешевые варианты:
* **Оружие в правой руке**: [Посвящение мудрости](https://www.wowhead.com/ru/spell=389550/).
* **Оружие в левой руке**: [Посвящение мудрости](https://www.wowhead.com/ru/spell=389550/) (это не ошибка, одинаковые инчанты на обе руки).
* **Нагрудный доспех**: [Пробужденные характеристики](https://www.wowhead.com/ru/spell=389550/).
* **Поножи**: [Лютые накладки для брони](https://www.wowhead.com/ru/item=193565/).
* **Кольца**: [Посвящение искусности](https://www.wowhead.com/ru/spell=389294/).
* **Плащ**: [Грациозное избежание](https://www.wowhead.com/ru/spell=389403/).
* **Наручи**: [Посвящение избежания](https://www.wowhead.com/ru/spell=389301/).
* **Ботинки**: [Ветер равнин](https://www.wowhead.com/ru/spell=389479/).

<hr style="height:1px;background-color:#bbb">
<p></p>


**Самоцветы** теперь есть двух видов – уникальные эпические, которые нужно делать через стол заказов, и обычные, которые покупаются на аукционе. Лучше всего использовать камни максимального качества. Эпических камней может быть не более одного во всей экипировке. 
* Эпический самоцвет: [Броский бесконечный алмаз](https://www.wowhead.com/ru/item=192985/) либо [Мастерский бесконечный алмаз](https://www.wowhead.com/ru/item=192988/).
* Обычные самоцветы: [Острый изерилл](https://www.wowhead.com/ru/item=192948/) либо [Острый нелтарит](https://www.wowhead.com/ru/item=192961/).


<hr style="height:1px;background-color:#bbb">
<p></p>


Лучшие **флаконы**:
* [Замерзший флакон оскверненной ярости](https://www.wowhead.com/ru/item=191329): дает больше всего урона, но имеет неприятный негативный эффект, который рано или поздно станет причиной гибели вашего персонажа.
* [Флакон стихийного хаоса](https://www.wowhead.com/ru/item=191357): отличный вариант без каких-либо негативных эффектов.
* [Флакон сдержанной универсальности](https://www.wowhead.com/ru/item=191341): дешевый вариант.

<hr style="height:1px;background-color:#bbb">
<p></p>


**Зелье** используются следующее:
* [Зелье великой мощи стихий](https://www.wowhead.com/ru/item=191383): дорогой вариант.

Не забудьте про хилпот – [Освежающее лечебное зелье](https://www.wowhead.com/ru/item=191380), а также про новые зелья, которые можно применить после смерти: [Неустойчивая суспензия из спор](https://www.wowhead.com/ru/item=191377/) и [Остаточный реагент нейронной активности](https://www.wowhead.com/ru/item=191374).
{: class="bordered"}

<hr style="height:1px;background-color:#bbb">
<p></p>


**Еду** следует использовать следующую:
* [Большой калуакский банкет](https://www.wowhead.com/ru/item=197794): пир на множество игроков, увеличивает Ловкость.
* [Печенье с судьбоносными предсказаниями](https://www.wowhead.com/ru/item=197792) или [Жестоко фаршированные яйца](https://www.wowhead.com/ru/item=204072/): аналог пира, но для одного игрока.

<hr style="height:1px;background-color:#bbb">
<p></p>


**Руны на оружие** Энх Шаман **не использует**, так как они не сочетаются с [Оружием неистовства ветра](https://www.wowhead.com/ru/spell=33757/) и [Оружием языка пламени](https://www.wowhead.com/ru/spell=318038/) (кроме [эпохальной Рашагет](https://www.warcraftlogs.com/zone/rankings/31#boss=2607&class=Shaman&spec=Enhancement)).

<hr style="height:1px;background-color:#bbb">
<p></p>


* [Драконья руна усиления](https://www.wowhead.com/ru/item=201325): руна на Ловкость, спадающая при смерти.
* [Затененная руна усиления](https://www.wowhead.com/ru/item=181468/): дешевый вариант.

<hr style="height:1px;background-color:#bbb">
<p></p>


# Интерфейс

В каждом билде Энх Шамана крайне важно отслеживать [Огненный шок](https://ru.wowhead.com/spell=188389) на целях. В стихийном билде также необходимо отслеживать [Хлещущее пламя](https://www.wowhead.com/ru/spell=334046). Для отслеживания обоих этих дебаффов рекомендую использовать этот [мод на Plater](https://wago.io/o9Q7MSLDi).


## Макросы

В первую очередь – рекомендую настроить на касты по наведению мыши (mouseover) через стандартный интерфейс. Это позволит кастовать все заклинания без выбора цели, что особенно удобно для [Огненного шока](https://ru.wowhead.com/spell=188389) и [Пронизыващего ветра](https://www.wowhead.com/ru/spell=57994/), но я это использую для всех заклинаний:

<p align="center">
    <img src="/assets/img/mouseover.png"> 
</p>

<p></p>

{% include button.html name="Общие макросы" link="https://stormkeeper.ru/info/macros.html" %}  

<p></p>

* Маусовер макрос для атакующих заклинаний:
~~~
#showtooltip  
/cast [@mouseover,harm,exists,nodead][] Огненный шок
~~~

* Маусовер макрос для лечащих заклинаний:
~~~
#showtooltip 
/cast [@mouseover,noharm,exists] [@target,noharm,exists] [@player] Исцеляющий всплеск
~~~

* Макрос для [Первозданной волны](https://www.wowhead.com/ru/spell=375982) по маусоверу, чтобы она кастовалась только во врагов, а не союзников:
~~~
#showtooltip Первозданная волна
/cast [@mouseover,harm,exists,nodead][@target,harm,exists,nodead] Первозданная волна
~~~

* Макрос для [Ледяного клинка](https://www.wowhead.com/ru/spell=342240/) и [Кольца огня](https://www.wowhead.com/ru/spell=333974/) на одной кнопке:
~~~
#showtooltip
/cast [known: 342240] Ледяной клинок; [known: 333974] Кольцо огня
~~~

* Добавить оповещние в чат об использовании какой-либо способности. Сообщение не будет показано, если способность на КД. Не злоупотребляйте этим макросом! Пример для [Наставления предков](https://ru.wowhead.com/spell=108281):
~~~
#showtooltip Наставления предков
/run if GetSpellCooldown("Наставления предков") == 0 then SendChatMessage("Ancestral Guidance","SAY") end
/cast Наставления предков
~~~

* Данный макрос позволяет кастовать любые тотемы сразу на место под курсором, избавляя от лишнего клика мышкой:  
~~~
#showtooltip
/cast [@cursor] Тотем конденсации
~~~

* Использование [Оружия неистовства ветра](https://www.wowhead.com/ru/spell=33757) и [Оружия языка пламени](https://www.wowhead.com/ru/spell=318038) на одной кнопке:
~~~
#showtooltip
/castsequence Оружие неистовства ветра, Оружие языка пламени
~~~

* [Проецирование тотемов](https://www.wowhead.com/ru/spell=108287) не имеет ГКД, и его можно кастовать по КД для переноса [Тотема неистовства ветра](https://www.wowhead.com/ru/spell=8512). Можно использовать следующий макрос, привязанный на любую атакующую способность:
~~~
#showtooltip Удар бури
/cast [@player] Проецирование тотемов
/cast Удар бури
~~~

* Накладывание дебаффа по фокусу, а если фокус отсутствует – по фрейму босса. Полезно на энкаунтерах, где нужно поддерживать {{ site.data.spells.fs }} на 2 целях, атакуя по приоритету одну из них:
~~~
#showtooltip 
/cast [@focus,exists,nodead,harm] [@boss1,exists,nodead,harm] Огненный шок
~~~

* Сбивание каста по фокусу, если фокуса нет, то сбивает цели под маусовером. Если там нет врага, то сбивает текущей цели:
~~~
#showtooltip
/cast [@focus,exists,harm,nodead][@mouseover,harm,exists,nodead][] Пронизывающий ветер
~~~

* Этот макрос позволяет кинуть {{ site.data.spells.fs }} на соседнюю цель, не меняя вашей текущей. Выбирается ближайшая к вам цель, в сторону которой направлена камера. Данный макрос не работает, если цель одна:
~~~
#showtooltip  
/targetenemy  
/cast Огненный шок  
/targetlasttarget  
~~~

* Применяет {{ site.data.spells.wrt }} прямо под вашего персонажа, позволяя сразу получить бонус скорости и не терять времени на установку тотема:  
~~~
#showtooltip
/cast [@player] Тотем ветряного порыва
~~~

* Позволяет вынести [Реинкарнацию](https://www.wowhead.com/ru/spell=20608) на панель заклинаний чтобы следить за временем восстановления:  
~~~
#showtooltip Реинкарнация
~~~

* Вне боя использует {{ site.data.spells.ressurect }}, а в бою – инженерский батл-рес [Сложные манжеты](https://ru.wowhead.com/item=198332): 
~~~
#showtooltip
/use [combat] Сложные манжеты; [nocombat] Дух предков
~~~

## WeakAuras

Рекомендованная сборка от [Amani](https://www.twitch.tv/amanizandalari) – [по этой ссылке](https://wago.io/HJxL_fG7C).

<p align="center">
    <img src="https://media.wago.io/screenshots/HJxL_fG7C/635540795a2ec4b6e0ac2195.gif"> 
</p>

<p></p>

{% include button.html name="Сборки WA на Wago.io" link="https://wago.io/search/enhancement" %}  

<p></p>



<p></p>

{% include button.html name="Обсудить на сервере Водоворот" link="https://discord.gg/8Bag6kT" %}  

<p></p>
