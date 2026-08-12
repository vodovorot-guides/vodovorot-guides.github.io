---
layout: page
last_update: 2026-08-12
title: Гайд на Элем Шамана
wow: 12.1
toc: true
author: Amani
description: Большое руководство по всем аспектам игры за Шамана Стихии. Здесь разобраны билды талантов, приоритет заклинаний, подбор экипировки, настройка интерфейса, макросы и многое другое.
image: /assets/img/ele_tb2.png
custom-javascript-list:
    - "/assets/js/rotation_switches.js"
---


<p align="center">
<img src="/assets/img/ele_tb2.png" width=400x> 
</p>


# Вступление

* Шаман Стихии, он же Элем Шаман – боец дальнего боя, полагающийся на заклинания и помощь стихий. Основная характеристика – Интеллект.
* Элем использует кольчужные доспехи, а из оружия предпочитает щит с одноручным молотом, кинжалом или кистевым оружием, а также посохи.
* Шаман Стихии использует школы магии <span style="color:#26d22b;font-size:1em;">**природы**</span>, <span style="color:#f16f25;font-size:1em;">**огня**</span> и <span style="color:#8fd5fe;font-size:1em;">**льда**</span>.
* Дальность всех атакующих заклинаний – **40** метров. Исключениями являются некоторые вспомогательные способности, которые имеют дальность **30** метров.
* Основной ресурс Шамана Стихии – [Водоворот](https://ru.wowhead.com/spell=343725), а дополнительный – **Мана**, который ииспользуется для лечения и вспомогательных заклинаний.



# Изменения Элема в 12.1

<p></p>

{% include button.html name="Полный разбор изменений Элем Шамана в патче 12.1" link="https://stormkeeper.ru/2026/07/02/ptr.html#%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-%D1%8D%D0%BB%D0%B5%D0%BC-%D1%88%D0%B0%D0%BC%D0%B0%D0%BD%D0%B0" %}  

<p></p>


Видео с разбором изменений:

<p></p>

{% include youtube.html id="cY-I_yEfiB4&t" %}

<p></p>

# Билды талантов

## Общая информация

В патче **12.1** основным билдом для рейда и ключей является **Предсказатель**. Данная героическая ветка получила очень сильные баффы, что вместе с переработкой распределения урона сделало её основным вариантом во всех типах контента.

**Вестник Шторма** получил ощутимые нерфы, и хотя он всё еще может давать больше АоЕ урона в некоторых ситуациях, у него гораздо хуже урон против одной, двух, трех и четырех целей.

В некоторых ситуациях в рейде можно выбирать между двух- и трехминутным [Перерождением](https://www.wowhead.com/ru/spell=114050/). Смотрите по количеству использований за бой и учитывайте моменты, когда бурсты нужно придерживать под выход аддов. Посмотреть эту информацию в удобном формате можно на сайте [Lorrgs.io](https://lorrgs.io/spec_ranking/shaman-elemental/imperator-averzian).

Текущие актуальные билды на каждого босса в рейде можно найти на [Warcraftlogs](https://www.warcraftlogs.com/), а для Мифик+ – на [Archon.gg](https://www.archon.gg/wow/builds/elemental/shaman/mythic-plus/overview/10/all-dungeons/this-week).


## Билды для рейда


Основной билд **Предсказателя** для рейда и боя против одной цели:

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/CYQAAAAAAAAAAAAAAAAAAAAAAAAAAAzMbLzMmZmZZbZMMjBAAAAsYmNYADY2YCZWAgZZmZGjtFTYmZZsMzMzYYxyMWMzwMLDAYYAMzYYYA?width=700&bgcolor=262b39&locale=ru_RU" width="100%" height="470px" style="overflow: hidden"></iframe>

<p></p>

## Билды для Мифик+


Билд **Предсказателя** для Мифик+ и клива:

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/CYQAAAAAAAAAAAAAAAAAAAAAAAAAAAzMbLzMGjZZZbMmhBAAAAsYmNYADY2YCZWAgZZmZGjtFTbMzYsMzMzYYxixyMzYmZBAYGDgZGDDD?width=700&bgcolor=262b39&locale=ru_RU" width="100%" height="470px" style="overflow: hidden"></iframe>

<p></p>


## Билды для вылазок

Билд **Предсказателя** для вылазок:

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/CYQAAAAAAAAAAAAAAAAAAAAAAAAAAAzMbLzMGjZZZbMmhBAAAAsYmNYADY2YCZWAgZZmZGjtFTbMzYsMzMzYYxixyMzYmZBAYGDgZGDDD?width=700&bgcolor=262b39&locale=ru_RU" width="100%" height="470px" style="overflow: hidden"></iframe>

<p></p>


# Приоритет заклинаний


Приоритет способностей ниже читается следующим образом:
1. Выберите интересующий вас билд, после чего приоритет изменится соответствующим образом. Вы можете изменять выбор талантов с помощью переключателей. 
2. Читайте приоритет с первого пункта и вниз. Если вы можете «выполнить» первый пункт, например когда способность не на кулдауне и соблюдены другие условия, вы используете эту способность.
3. Если вы не можете «выполнить» какой-то пункт, то переходите к следующему пункту до тех пор, пока не встретите выполнимый.
4. После каждого применения заклинаний мысленно возвращайтесь в начало списка приоритетов и проходите по всем пунктам заново.


**Важно!** Убедитесь, что у вас активирован [Щит молний](https://www.wowhead.com/ru/spell=192106) и бафф [Небесная ярость](https://www.wowhead.com/ru/spell=462854)!
{: class="bordered"}

<hr style="height:1px;background-color:#bbb">
<p></p>


<center>Выберите используемые таланты, и приоритет способностей соответственно изменится:</center>

<div class="btn-toolbar justify-content-center mt-2 mb-3">
  <div class="btn-group" role="group">
    <button type="button" id="build_ele_fs_raid" class="btn btn-primary rotation-btn">Предсказатель – Одна цель</button>
    <button type="button" id="build_ele_fs_mplus class="btn btn-primary rotation-btn">Предсказатель – Три цели</button>
  </div>
</div>


<ul class="rotation_switches form-check form-switch mb-2" style="list-style-type: none;">
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_tempest"> [Буря](https://ru.wowhead.com/spell=454009)</li>  
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_eb"> [Удар духов стихий](https://ru.wowhead.com/spell=117014)</li>  
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_mote"> [Властелин стихий](https://www.wowhead.com/ru/spell=16166/)</li>  
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_fusion"> [Слияние стихий](https://www.wowhead.com/ru/spell=462840/)</li>      
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_vb"> [Гальваническое пламя](https://www.wowhead.com/ru/spell=470057/)</li>  
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_pf"> [Очищающее пламя](https://www.wowhead.com/ru/spell=1259471/)</li>  
</ul>


<center>Количество целей:</center>
<div class="btn-toolbar justify-content-center mt-2 mb-3">
  <div class = "btn-group btn-group-sm">
    <button type="button" id="target_1" class="btn btn-primary px-3 rotation-btn active">1 цель</button>
    <button type="button" id="target_aoe" class="btn btn-primary px-3 rotation-btn">2+ цели</button>
  </div>
</div>

<hr style="height:1px;background-color:#bbb">
<p></p>


<ul class="rotation_switches form-check form-switch mb-2" style="list-style-type: none;">
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_hard"> **Активировать продвинутый приоритет**.</li>     
</ul>


<hr style="height:1px;background-color:#bbb">
<p></p>

<div id="st" markdown="1">

**Опенер в бою против одной цели:**

1. [Хранитель бурь](https://ru.wowhead.com/spell=191634) за **1.5** секунд до пула.
3. {:.tempest-apl}[Перерождение](https://www.wowhead.com/ru/spell=114050/), вместе с прожимным аксессуаром, зельем и [Природной стремительностью](https://www.wowhead.com/ru/spell=378081).
3. {:.no-tempest-apl}[Перерождение](https://www.wowhead.com/ru/spell=114050/), вместе с прожимным аксессуаром, зельем и [Стремительностью предков](https://ru.wowhead.com/spell=448861).
2. {:.tempest-apl .mote-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505).
4. {:.tempest-apl}[Буря](https://ru.wowhead.com/spell=454009).
4. {:.no-tempest-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505).
5. {:.no-tempest-apl}[Молния](https://ru.wowhead.com/spell=188196).
4. {:.no-tempest-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505).
4. {:.tempest-apl .mote-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505).
5. [Молния](https://ru.wowhead.com/spell=188196).
7. Продолжайте согласно приоритету заклинаний, указанному ниже.

<p></p>

**Приоритет в бою против одной цели:**
1. [Хранитель бурь](https://ru.wowhead.com/spell=191634) по кулдауну.
2. {:.no-tempest-apl}[Стремительность предков](https://ru.wowhead.com/spell=448861) по кулдауну.
3. [Перерождение](https://www.wowhead.com/ru/spell=114050/) по кулдауну.
  * Если до кулдауна [Хранителя бурь](https://ru.wowhead.com/spell=191634) осталось менее **15** секунд, стоит придержать [Перерождение](https://www.wowhead.com/ru/spell=114050/) под него.
6. {:.no-vb-apl .tempest-apl .mote-apl}[Огненный шок](https://ru.wowhead.com/spell=188389), если выполняется любое из условий:
  * До спадения осталось менее **5.4** секунд и за это время не будет [Перерождения](https://www.wowhead.com/ru/spell=114050/).
  * До исчезновения [Элементаля огня](https://www.wowhead.com/ru/spell=378255) осталось менее **2** секунд.
6. {:.no-vb-apl .tempest-apl .no-mote-apl}[Огненный шок](https://ru.wowhead.com/spell=188389), если выполняется любое из условий:
  * До спадения осталось менее **5.4** секунд и за это время не будет [Перерождения](https://www.wowhead.com/ru/spell=114050/).
  * До исчезновения [Элементаля огня](https://www.wowhead.com/ru/spell=378255) осталось менее **2** секунд.  
6. {:.no-vb-apl .tempest-apl .no-mote-apl}[Огненный шок](https://ru.wowhead.com/spell=188389), если до спадения осталось менее **5.4** секунд.
6. {:.vb-apl .tempest-apl .mote-apl}[Гальваническое пламя](https://www.wowhead.com/ru/spell=470057/), если нет баффа [Властелина стихий](https://www.wowhead.com/ru/spell=16166/) и выполняется любое из условий:
  * До спадения осталось менее **5.4** секунд и за это время не будет [Перерождения](https://www.wowhead.com/ru/spell=114050/).
  * До исчезновения [Элементаля огня](https://www.wowhead.com/ru/spell=378255) осталось менее **2** секунд.
6. {:.vb-apl .tempest-apl .no-mote-apl}[Гальваническое пламя](https://www.wowhead.com/ru/spell=470057/), если выполняется любое из условий:
  * До спадения осталось менее **5.4** секунд и за это время не будет [Перерождения](https://www.wowhead.com/ru/spell=114050/).
  * До исчезновения [Элементаля огня](https://www.wowhead.com/ru/spell=378255) осталось менее **2** секунд.
5. {:.mote-apl .tempest-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505), если нет баффа [Властелина стихий](https://www.wowhead.com/ru/spell=16166/).
5. {:.no-mote-apl .tempest-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505), если есть бафф [Волны лавы](https://www.wowhead.com/ru/spell=77756/).
  * Без взятого таланта [Властелин стихий](https://www.wowhead.com/ru/spell=16166/), [Выброс лавы](https://ru.wowhead.com/spell=51505) кастуется только по проку [Волны лавы](https://www.wowhead.com/ru/spell=77756/).
7. {:.tempest-apl .no-mote-apl}[Буря](https://ru.wowhead.com/spell=454009).
7. {:.tempest-apl .no-mote-apl}[Молния](https://ru.wowhead.com/spell=188196) с баффом [Хранителя бурь](https://ru.wowhead.com/spell=191634).
4. {:.tempest-apl .eb-apl}[Удар духов стихий](https://ru.wowhead.com/spell=117014), если хватает энергии Водоворота.
4. {:.tempest-apl .no-eb-apl}[Земной шок](https://ru.wowhead.com/spell=8042), если хватает энергии Водоворота.
7. {:.tempest-apl .no-mote-apl}[Молния](https://ru.wowhead.com/spell=188196), если другие способности недоступны.
7. {:.tempest-apl .mote-apl}[Буря](https://ru.wowhead.com/spell=454009) / [Молния](https://ru.wowhead.com/spell=188196), если другие способности недоступны.
4. {:.no-tempest-apl .no-mote-apl .no-eb-apl}[Земной шок](https://ru.wowhead.com/spell=8042), если хватает энергии Водоворота или если есть бафф от [Сетового комплекта](https://www.wowhead.com/ptr/spell=1296626).
4. {:.no-tempest-apl .no-mote-apl .eb-apl}[Удар духов стихий](https://ru.wowhead.com/spell=117014), если хватает энергии Водоворота или если есть бафф от [Сетового комплекта](https://www.wowhead.com/ptr/spell=1296626).
4. {:.no-tempest-apl .mote-apl .no-eb-apl}[Земной шок](https://ru.wowhead.com/spell=8042), если выполняется **любое** из условий:
  * Следующее заклинание приведет к оверкапу энергии Водоворота.
  * Есть бафф от [Сетового комплекта](https://www.wowhead.com/ptr/spell=1296626) на бесплатный каст [Земного шока](https://ru.wowhead.com/spell=8042).
  * Есть бафф [Властелин стихий](https://www.wowhead.com/ru/spell=16166/).
4. {:.no-tempest-apl .mote-apl .eb-apl}[Удар духов стихий](https://ru.wowhead.com/spell=117014), если выполняется **любое** из условий:
  * Следующее заклинание приведет к оверкапу энергии Водоворота.
  * Есть бафф от [Сетового комплекта](https://www.wowhead.com/ptr/spell=1296626) на бесплатный каст [Удара духов стихий](https://ru.wowhead.com/spell=117014)
  * Есть бафф [Властелин стихий](https://www.wowhead.com/ru/spell=16166/).
5. {:.no-mote-apl .no-tempest-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505) по кулдауну.
5. {:.mote-apl .no-tempest-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505), если нет баффа [Властелин стихий](https://www.wowhead.com/ru/spell=16166/).
7. {:.no-tempest-apl .mote-apl}[Молния](https://ru.wowhead.com/spell=188196), для поглощения баффа [Властелин стихий](https://www.wowhead.com/ru/spell=16166/).
6. {:.vb-apl .no-tempest-apl .mote-apl}[Гальваническое пламя](https://www.wowhead.com/ru/spell=470057/), если нет баффа [Властелина стихий](https://www.wowhead.com/ru/spell=16166/), если до спадения осталось менее **5.4** секунд.
6. {:.vb-apl .no-tempest-apl .no-mote-apl}[Гальваническое пламя](https://www.wowhead.com/ru/spell=470057/), если до спадения осталось менее **5.4** секунд.
6. {:.no-vb-apl .no-tempest-apl .no-mote-apl}[Огненный шок](https://ru.wowhead.com/spell=188389), если до спадения осталось менее **5.4** секунд.
6. {:.no-vb-apl .no-tempest-apl .mote-apl}[Огненный шок](https://ru.wowhead.com/spell=188389), если нет баффа [Властелина стихий](https://www.wowhead.com/ru/spell=16166/), если до спадения осталось менее **5.4** секунд.
7. {:.no-tempest-apl}[Молния](https://ru.wowhead.com/spell=188196) если другие способности недоступны.
8. {:.no-tempest-apl}[Благосклонность предков](https://ru.wowhead.com/spell=79206) / [Ледяной шок](https://ru.wowhead.com/spell=196840) во время передвижения.
8. {:.tempest-apl}Во время передвижения можно использовать следующие способности:
  * [Благосклонность предков](https://ru.wowhead.com/spell=79206).
  * [Природная стремительность](https://www.wowhead.com/ru/spell=378081).
  * [Выброс лавы](https://ru.wowhead.com/spell=51505) с проком [Волны лавы](https://www.wowhead.com/ru/spell=77756/).
  * [Огненный шок](https://ru.wowhead.com/spell=188389).
  * [Ледяной шок](https://ru.wowhead.com/spell=196840).


</div>


<div id="aoe" markdown="1" style="display:none;">

**Опенер в бою против 2+ целей:**
1. [Хранитель бурь](https://ru.wowhead.com/spell=191634) за **1.5** секунд до пула.
4. {:.no-tempest-apl}[Стремительность предков](https://ru.wowhead.com/spell=448861).
6. {:.vb-apl .pf-apl}[Гальваническое пламя](https://www.wowhead.com/ru/spell=470057/).
3. {:.tempest-apl}[Перерождение](https://www.wowhead.com/ru/spell=114050/), вместе с прожимным аксессуаром, зельем и [Природной стремительностью](https://www.wowhead.com/ru/spell=378081).
3. {:.no-tempest-apl}[Перерождение](https://www.wowhead.com/ru/spell=114050/), вместе с прожимным аксессуаром и зельем.
6. {:.vb-apl .pf-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505).
4. {:.tempest-apl}[Буря](https://ru.wowhead.com/spell=454009).
7. Продолжайте согласно приоритету заклинаний, указанному ниже.



<p></p>

**Приоритет в бою против 2+ целей:**
1. [Хранитель бурь](https://ru.wowhead.com/spell=191634) по кулдауну.
1. {:.no-tempest-apl}[Стремительность предков](https://ru.wowhead.com/spell=448861) по кулдауну.
6. {:.vb-apl .pf-apl}[Гальваническое пламя](https://www.wowhead.com/ru/spell=470057/), если следующее заклинание – [Перерождение](https://www.wowhead.com/ru/spell=114050/).
1. [Перерождение](https://www.wowhead.com/ru/spell=114050/) по кулдауну, но обязательно после активации [Хранителя бурь](https://ru.wowhead.com/spell=191634).
2. {:.tempest-apl .vb-apl .pf-apl}[Гальваническое пламя](https://www.wowhead.com/ru/spell=470057/) по кулдауну, если [Перерождение](https://www.wowhead.com/ru/spell=114050/) не активно.
2. {:.tempest-apl .vb-apl .no-pf-apl}[Гальваническое пламя](https://www.wowhead.com/ru/spell=470057/) для поддержания на целях [Огненного шока](https://ru.wowhead.com/spell=188389).
7. {:.tempest-apl}[Цепная молния](https://www.wowhead.com/ru/spell=188443), если у вас **4** заряда баффа [Хранителя бурь](https://www.wowhead.com/ru/spell=191634).
6. {:.tempest-apl}[Буря](https://ru.wowhead.com/spell=454009) на цель без [Грозового разрядника](https://www.wowhead.com/ru/spell=210689), если у вас **2** заряда этой способности.
3. {:.tempest-apl}[Землетрясение](https://ru.wowhead.com/spell=61882), если хватает энергии Водоворота.
4. {:.vb-apl .pf-apl .tempest-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505), если у вас есть бафф [Очищающее пламя](https://www.wowhead.com/beta/spell=1259471).
  * Старайтесь дожидаться прока [Волны лавы](https://www.wowhead.com/ru/spell=77756/), если новое [Гальваническое пламя](https://www.wowhead.com/ru/spell=470057/) еще не доступно.
8. {:.no-eb-apl .tempest-apl}[Землетрясение](https://ru.wowhead.com/spell=61882), если следующее заклинание приведет к оверкапу энергии Водоворота.
9. {:.tempest-apl}[Буря](https://ru.wowhead.com/spell=454009) на цель без [Грозового разрядника](https://www.wowhead.com/ru/spell=210689).
8. {:.no-tempest-apl}[Землетрясение](https://ru.wowhead.com/spell=61882) в бою против **4+** целей, если хватает энергии Водоворота или если есть бафф от [Сетового комплекта](https://www.wowhead.com/ptr/spell=1296626).
4. {:.no-tempest-apl .eb-apl}[Удар духов стихий](https://ru.wowhead.com/spell=117014) в бою против **2-3** целей, если хватает энергии Водоворота или если есть бафф от [Сетового комплекта](https://www.wowhead.com/ptr/spell=1296626).
4. {:.vb-apl .pf-apl .no-tempest-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505), если у вас есть бафф [Очищающее пламя](https://www.wowhead.com/beta/spell=1259471).
2. {:.no-tempest-apl .vb-apl .pf-apl}[Гальваническое пламя](https://www.wowhead.com/ru/spell=470057/) по кулдауну.
9. {:.tempest-apl}[Молния](https://ru.wowhead.com/spell=188196) с баффом от [Хранителя бурь](https://ru.wowhead.com/spell=191634) в бою против **2** целей.
9. [Цепная молния](https://www.wowhead.com/ru/spell=188443), если другие способности недоступны.
8. {:.no-tempest-apl}[Благосклонность предков](https://ru.wowhead.com/spell=79206) / [Ледяной шок](https://ru.wowhead.com/spell=196840) во время передвижения.
8. {:.tempest-apl}Во время передвижения можно использовать следующие способности:
  * [Благосклонность предков](https://ru.wowhead.com/spell=79206)
  * [Природная стремительность](https://www.wowhead.com/ru/spell=378081)
  * [Гальваническое пламя](https://www.wowhead.com/ru/spell=470057/)
  * [Выброс лавы](https://ru.wowhead.com/spell=51505) с проком [Волны лавы](https://www.wowhead.com/ru/spell=77756/)
  * [Ледяной шок](https://ru.wowhead.com/spell=196840)




</div>



<hr style="height:1px;background-color:#bbb">
<p></p>

# Важные моменты приоритетов

* Предки вызываются после применения [Хранителя бурь](https://www.wowhead.com/ru/spell=191634) и [Стремительности предков](https://ru.wowhead.com/spell=448861), а также от проков из талантов героической ветки.

* Предки повторяют *тип* заклинания, которое вы используете:
  * При касте заклинания против одной цели, они используют в эту цель [Выброс лавы](https://ru.wowhead.com/spell=51505)
  * При касте АоЕ заклинания, они используют в случайную цель в бою [Цепную молнию](https://www.wowhead.com/ru/spell=188443)

<p></p>

* Второе и последующие использования [Перерождения](https://www.wowhead.com/ru/spell=114050) стоит придерживать под [Хранитель бурь](https://www.wowhead.com/ru/spell=191634), если это не приведет к потере его использования за бой.

* В некоторых ситуациях стоит наоборот, придерживать [Хранитель бурь](https://www.wowhead.com/ru/spell=191634) под выход аддов или  [Перерождение](https://www.wowhead.com/ru/spell=114050), сдавая его не раз в **45** секунд, а раз в минуту.

* Всегда старайтесь использовать [Гальваническое пламя](https://www.wowhead.com/ru/spell=470057/) с талантом [Очищающее пламя](https://www.wowhead.com/ru/spell=1259471) перед [Перерождением](https://www.wowhead.com/ru/spell=114050), но после [Хранителя бурь](https://www.wowhead.com/ru/spell=191634) и [Стремительности предков](https://ru.wowhead.com/spell=448861). То есть порядок должен быть примерно такой:
  * [Хранителя бурь](https://www.wowhead.com/ru/spell=191634)
  * [Стремительность предков](https://ru.wowhead.com/spell=448861)
  * [Гальваническое пламя](https://www.wowhead.com/ru/spell=470057/)
  * [Перерождение](https://www.wowhead.com/ru/spell=114050)

<p></p>

* Приоритет баффа [Властелин стихий](https://www.wowhead.com/ru/spell=16166/) не важен, главное не кастовать подряд два [Выброса лавы](https://ru.wowhead.com/spell=51505).

* [Удар духов стихий](https://ru.wowhead.com/spell=117014) наносит настолько много урона, плюс дает баффы на вторичные характеристики, что его стоит использовать в бою против **1-3** целей, а на **4+** уже переходить на [Землетрясение](https://ru.wowhead.com/spell=61882). 

* В Мифик+ стоит сохранять энергию Водоворота под конец жизни пака, чтобы прийти на следующему паку с некоторым количеством ресурсов.

<hr style="height:1px;background-color:#bbb">
<p></p>


# Общая ветка талантов

Общая ветка талантов предлагает широкий выбор вспомогательных способностей, которые найдут применение в различных ситуациях.

Один талант Элем Шаман получает по умолчанию без траты очков – это [Выброс лавы](https://ru.wowhead.com/spell=51505). Так же есть несколько основных талантов, которые напрямую влияют на наносимый урон и выживаемость и их стоит брать практически в любом билде. К ним относятся:
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



<p></p>

{% include button.html name="Выбор утилити талантов в Мифик+" link="/info/utility.html" %}  

<p></p>



# Характеристики

**Интеллект** – лучшая характеристика, так как повышает весь урон и растет от уровня предметов гораздо сильнее, чем вторичные статы. Поэтому в первую очередь стоит смотреть на уровень предметов.

С выбором вещей поможет [Raidbots](https://www.raidbots.com/simbot). Краткое руководство доступно [по этой ссылке](https://stormkeeper.ru/info/sim.html).


## Приоритет характеристик



<hr style="height:1px;background-color:#bbb">
<p></p>

Приоритет статов для Предсказателя:

1. **Интеллект**.
1. **Искусность**.
2. **Скорость** = **Критический удар**.
3. **Универсальность**.



<hr style="height:1px;background-color:#bbb">
<p></p>
## Вторичные характеристики

* **Критический удар**: дает шанс, равный значению Критического удара, увеличить урон ваших способностей в **2.5** раза. 

<details markdown=1><summary><i>Подробнее про Критический удар...</i></summary>
<p></p>

* Базовое значение Критического удара, без учета характеристик, составляет **5%**.
* Базовое значение увеличения Критического урона составляет **200%**, а талант [Неистовство стихий](https://www.wowhead.com/ru/spell=60188) повышает его до **250%**.
* [Первозданная ярость](https://www.wowhead.com/ru/spell=378193) повышает критический урон до **275%**, а [Цикл ответной реакции](https://www.wowhead.com/ru/spell=1270062) – до **305%**.
* [Выброс лавы](https://ru.wowhead.com/spell=51505) всегда наносит критический урон, если попадает по цели с дебаффом от [Огненного шока](https://ru.wowhead.com/spell=188389), и его урон увеличивается от шанса критического удара.
* Дополнительно увеличить критический урон может также талант [Призыватель бури](https://www.wowhead.com/ru/spell=454021), на **5%** для природных заклинаний, а также некоторые расовые бонусы, например [Мощь гор](https://www.wowhead.com/ru/spell=59224/).
* Увеличение урона от критических ударов Шамана Стихии не работает на аксессуары и способности призванных элементалей.
* На получение **1%** Критического удара нужно **46** единиц рейтинга Критического удара.
* После набора **1380** рейтинга скорость роста этой характеристики снижается на **10%**. То есть для набора дополнительного **1%** Критического удара потребуется не **46** единиц рейтинга, а **50.6**. 


</details>
<p></p>

<hr style="height:1px;background-color:#bbb">
<p></p>

* **Cкорость**: снижает время произнесения заклинаний и ГКД.

<details markdown=1><summary><i>Подробнее про Скорость...</i></summary>
<p></p>

* Снижение ГКД от Скорости не относится к тотемам, так как у них он и так базово снижен до **1** секунды.
* Снижает время между тиками [Огненного шока](https://ru.wowhead.com/spell=188389). Добавляет дополнительный тик в конце действия эффекта, ослабленный в зависимости от недостающего времени до «полного» тика.
* Нет никаких капов и брейкпоинтов на Скорость. Каждая единица рейтинга оказывает соответствующее влияние на время произнесения заклинаний, ГКД и периодическое исцеление.
* Формула расчета влияния Скорости на заклинания: **2 / 1.15**, где **2** это базовая скорость произнесения заклинания, а **15** – процент Скорости.
* В игре время произнесения заклинания отображается максимум до первой цифры после запятой (например, **1.6** секунд). Однако это просто округление, фактическое увеличение работает даже в том случае, если вы не видите этой разницы в подсказке к заклинанию.
* Например с **7%** Скорости [Выброс лавы](https://ru.wowhead.com/spell=51505) кастуется **1.869** секунд, а с **7.1%** – **1.867** секунд. Однако в игре, если прочитать подсказку заклинания, с обоими значениями вы увидите время произнесения **1.87** секунды.
* На получение **1%** Скорости нужно **44** единиц рейтинга Скорости.
* После набора **1320** рейтинга скорость роста этой характеристики снижается на **10%**. То есть для набора дополнительного **1%** Скорости потребуется не **44** единиц рейтинга, а **48**.

</details>
<p></p>

<hr style="height:1px;background-color:#bbb">
<p></p>


* **Искусность**: дает шанс некоторым заклинаниям поразить цель повторно, нанеся меньше урона и давая меньше энергии Водоворота. Также пассивно увеличивает урон от сил стихий.

<details markdown=1><summary><i>Подробнее про Искусность</i></summary>
<p></p>

* Повышает эффективность пассивной способности [Икусность: Волнение стихий](https://ru.wowhead.com/spell=168534).
* Базовый шанс на перегрузку, без учета характеристик, составляет **15%**. Базовое увеличение стихийного урона – **4%**.
* Урон дублированного заклинания при проке перегрузки снижен до **25%** от базового. При взятии таланта [Камера эхо](https://www.wowhead.com/ru/spell=382032) урон повышается до **31%**.
* Критический удар рассчитывается для прока Искусности отдельно.
* Прок Искусности срабатывает на следующие заклинания:
  * [Молния](https://ru.wowhead.com/spell=188196)
  * [Буря](https://ru.wowhead.com/spell=454009)
  * [Цепная молния](https://ru.wowhead.com/spell=188443)
  * [Выброс лавы](https://ru.wowhead.com/spell=51505)
* Талант [Горы не вечны](https://www.wowhead.com/ru/spell=381726) позволяет вызывать срабатывание искусности [Земному шоку](https://ru.wowhead.com/spell=8042), [Землетрясению](https://ru.wowhead.com/spell=61882) и [Удару духов стихий](https://www.wowhead.com/ru/spell=117014), нанося при этом в два раза меньше урона.
* Эффективность [Искусности](https://ru.wowhead.com/spell=168534) для [Цепной молнии](https://ru.wowhead.com/spell=188443) **снижена до 33%**. То есть, если у вас **60%** Искусности, то [Цепная молния](https://ru.wowhead.com/spell=188443) имеет только **20%** на прок перегрузки.
* Перегрузка вылетает не сразу после завершения каста заклинания, а примерно через **1** секунду.
* Если сразу же после каста заклинания использовать, например, {{ site.data.spells.es }}, то перегрузка вылетит уже после траты энергии Водоворота и последняя не уйдет в оверкап.
* Перегрузка [Выброса лавы](https://ru.wowhead.com/spell=51505) не дает бафф от таланта {{ site.data.spells.mote }}, но перегрузка [Удара духов стихий](https://ru.wowhead.com/spell=117014) гарантированно дает второй бафф на статы, отличный от первого.
* Все таланты, увеличивающие урон основного заклинания, влияют также и на его прок искусности.
* Искусность не влияет на тотемы и лечащие заклинания.
* На получение **1%** Искусности нужно **24.5** единиц рейтинга Искусности.
* После набора **1380** рейтинга скорость роста этой характеристики снижается на **10%**. То есть для набора дополнительного **1%** Искусности потребуется не **24.5** единиц рейтинга, а **27**.

</details>
<p></p>

<hr style="height:1px;background-color:#bbb">
<p></p>

* **Универсальность**: увеличивает наносимый урон и снижает получаемый урон.

<details markdown=1><summary><i>Подробнее про Универсальность...</i></summary>
<p></p>

* На получение **1%** Универсальности нужно **54** единиц рейтинга Универсальности, что больше, чем у других характеристик.
* После набора **1620** рейтинга скорость роста этой характеристики снижается на **10%**. То есть для набора дополнительного **1%** Универсальности потребуется не **54** единиц рейтинга, а **59**.

</details>
<p></p>

<hr style="height:1px;background-color:#bbb">
<p></p>



# Экипировка

## Фолиант Омниума

Лучшие руны:
1. [Руна высвобожденного пламени](https://www.wowhead.com/ru/spell=1279599/)
2. [Руна рысьих рефлексов](https://www.wowhead.com/ru/spell=1279605)
3. [Руна длительного действия](https://www.wowhead.com/ru/spell=1287555)
4. [Руна критической мощи](https://www.wowhead.com/ru/spell=1279609) / [Руна искусной хитрости](https://www.wowhead.com/ru/spell=1279612)
5. [Руна перегрузки](https://www.wowhead.com/ru/spell=1279614/)



## Комплект классовых доспехов


Сетовый комплект Элем Шамана из обновления **12.1**, [Пророчество змеиного оракула](https://www.wowhead.com/ptr/item-set=2065), дает следующие бонусы:

* **2 части**: увеличивает урон [Земного шока](https://ru.wowhead.com/spell=8042), [Удара духов стихий](https://ru.wowhead.com/spell=117014) и [Землетрясения](https://ru.wowhead.com/spell=61882) на **25%**.
* **4 части**: После окончания действия [Хранителя бурь](https://www.wowhead.com/ptr/spell=191634) и [Перерождения](https://www.wowhead.com/ptr/spell=114050), урон от двух следующих [Молний](https://ru.wowhead.com/spell=188196), [Цепных молний](https://www.wowhead.com/ru/spell=188443) или [Выбросов лавы](https://ru.wowhead.com/spell=51505) увеличивается на **25%**. Заклинания, усиленные этим эффектом, даже сокращают затраты энергии Водоворота на следующее применение [Земного шока](https://ru.wowhead.com/spell=8042), [Удара духов стихий](https://ru.wowhead.com/spell=117014) и [Землетрясения](https://ru.wowhead.com/spell=61882) на **100%**.

<p></p>

Сетовые предметы при использовании катализатора теперь сохраняют вторичные характеристики и дополнительные оссобености от оригинального предмета.

Лучшими предметами для сетового комплекта являются [Кираса пробужденного лютоклыка](https://www.wowhead.com/ru/item=271876/%D0%BA%D0%B8%D1%80%D0%B0%D1%81%D0%B0-%D0%BF%D1%80%D0%BE%D0%B1%D1%83%D0%B6%D0%B4%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BB%D1%8E%D1%82%D0%BE%D0%BA%D0%BB%D1%8B%D0%BA%D0%B0?bonus=13848:13708/), [Наплеч скользящих душ](https://www.wowhead.com/ru/item=268231/%D0%BD%D0%B0%D0%BF%D0%BB%D0%B5%D1%87-%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%B7%D1%8F%D1%89%D0%B8%D1%85-%D0%B4%D1%83%D1%88?bonus=13848) и [Шоссы расплетенного единства](https://www.wowhead.com/ru/item=268237/). Это самые сильные предметы с последних боссов рейда.

Остальные части сетового комплекта можно использовать любые, желательно без Универсальности.

## Лучшие предметы из рейда

Здесь указаны предметы, которые стоит выбивать в первую очередеь и рассмотреть их получение с помощью [Туманных сердечников Бездны](https://www.wowhead.com/ru/currency=3418):
1. [Джан'тразет, клык души](https://www.wowhead.com/ru/item=271092/%D0%B4%D0%B6%D0%B0%D0%BD%D1%82%D1%80%D0%B0%D0%B7%D0%B5%D1%82-%D0%BA%D0%BB%D1%8B%D0%BA-%D0%B4%D1%83%D1%88%D0%B8?bonus=13335:13848)
2. [Кираса пробужденного лютоклыка](https://www.wowhead.com/ru/item=271876/%D0%BA%D0%B8%D1%80%D0%B0%D1%81%D0%B0-%D0%BF%D1%80%D0%BE%D0%B1%D1%83%D0%B6%D0%B4%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BB%D1%8E%D1%82%D0%BE%D0%BA%D0%BB%D1%8B%D0%BA%D0%B0?bonus=13848:13708) 
3. [Реликварий погибели акиров](https://www.wowhead.com/ru/item=268265/%D1%80%D0%B5%D0%BB%D0%B8%D0%BA%D0%B2%D0%B0%D1%80%D0%B8%D0%B9-%D0%BF%D0%BE%D0%B3%D0%B8%D0%B1%D0%B5%D0%BB%D0%B8-%D0%B0%D0%BA%D0%B8%D1%80%D0%BE%D0%B2?bonus=13335:13708:13848)
4. [Бездонная сумка Геббо](https://www.wowhead.com/ru/item=270164/%D0%B1%D0%B5%D0%B7%D0%B4%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F-%D1%81%D1%83%D0%BC%D0%BA%D0%B0-%D0%B3%D0%B5%D0%B1%D0%B1%D0%BE?bonus=13335:13848)

## Лучшие предметы из Мифик+

Здесь указаны предметы, которые стоит фармить в Мифик+:
1. [Омерзительная обманчивая отрава](https://www.wowhead.com/ru/item=273796/%D0%BE%D0%BC%D0%B5%D1%80%D0%B7%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%BE%D0%B1%D0%BC%D0%B0%D0%BD%D1%87%D0%B8%D0%B2%D0%B0%D1%8F-%D0%BE%D1%82%D1%80%D0%B0%D0%B2%D0%B0?bonus=13440:13848)
2. [Фляжка курьера](https://www.wowhead.com/ru/item=250215/%D1%84%D0%BB%D1%8F%D0%B6%D0%BA%D0%B0-%D0%BA%D1%83%D1%80%D1%8C%D0%B5%D1%80%D0%B0?bonus=13440:12806)
3. [Мерзкая печатка Атрокса](https://www.wowhead.com/ru/item=252258/%D0%BC%D0%B5%D1%80%D0%B7%D0%BA%D0%B0%D1%8F-%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D0%BA%D0%B0-%D0%B0%D1%82%D1%80%D0%BE%D0%BA%D1%81%D0%B0?bonus=13440:12806)
4. [Подвеска губительной ярости](https://www.wowhead.com/ru/item=251142/%D0%BF%D0%BE%D0%B4%D0%B2%D0%B5%D1%81%D0%BA%D0%B0-%D0%B3%D1%83%D0%B1%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9-%D1%8F%D1%80%D0%BE%D1%81%D1%82%D0%B8?bonus=13440:12806)

## Аксессуары

Лучшие активные аксессуары:
1. [Омерзительная обманчивая отрава](https://www.wowhead.com/ru/item=273796/%D0%BE%D0%BC%D0%B5%D1%80%D0%B7%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%BE%D0%B1%D0%BC%D0%B0%D0%BD%D1%87%D0%B8%D0%B2%D0%B0%D1%8F-%D0%BE%D1%82%D1%80%D0%B0%D0%B2%D0%B0?bonus=13440:13848) – потенциально лучший вариант, но зависит от прока. Урон может отличаться от пула к пулу.
2. [Фляжка курьера](https://www.wowhead.com/ru/item=250215/%D1%84%D0%BB%D1%8F%D0%B6%D0%BA%D0%B0-%D0%BA%D1%83%D1%80%D1%8C%D0%B5%D1%80%D0%B0?bonus=13440:12806) – стабильный вариант, но хуже чем указанный выше аксессуар в случае его удачного прока.

<p></p>

Лучшие пассивные аксессуары:
1. [Бездонная сумка Геббо](https://www.wowhead.com/ru/item=270164/%D0%B1%D0%B5%D0%B7%D0%B4%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F-%D1%81%D1%83%D0%BC%D0%BA%D0%B0-%D0%B3%D0%B5%D0%B1%D0%B1%D0%BE?bonus=13335:13848) – несмотря на полный рандом в количестве и разнообразии проков, это всё еще лучший пассивный аксессуар из возможных.
2. [Морской камень призывателя волн](https://www.wowhead.com/ru/item=270167/%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%BE%D0%B9-%D0%BA%D0%B0%D0%BC%D0%B5%D0%BD%D1%8C-%D0%BF%D1%80%D0%B8%D0%B7%D1%8B%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D0%B2%D0%BE%D0%BB%D0%BD?bonus=13335:13848) – неплохой аксессуар, хоть и проигрывает варианту выше. Под конец боя можно сдать последний сет бурстов под стаки этого тринкета.


## Крафтовые предметы

1. Ботинки с [Подкладкой из тайной ткани](https://www.wowhead.com/ru/item=240167).
1. Наручи с [Подкладкой из тайной ткани](https://www.wowhead.com/ru/item=240167).

<p></p>

**Важно!** Если вам повезло на выпадение эпохальных ботинок или наручей на первых неделях сезона, то можно рассмотреть крафт в любые другие слоты. Для тех, кто осваивает эпохальный рейд в первые недели сезона, стоит крафтить слот с большим бюджетом характеристик, например шлем.

## Улучшение предметов за гребни

Рекомендованный порядок улучшения предметов за гребни:
1. Оружие. 
2. Лучшие аксессуары. 
3. Сетовые предметы. 
4. Предметы с наибольшим бюджетом характеристик.

# Расходуемые предметы

<hr style="height:1px;background-color:#bbb">
<p></p>


**Зачарования** и **самоцветы**:
* **Оружие**: [Ярость берсерка](https://www.wowhead.com/ru/item=243973) / [Точность Джан'алай](https://www.wowhead.com/ru/item=243971). [Симьтесь](https://stormkeeper.ru/info/sim.html) персонально для точных данных.
* **Шлем**: [Усиленная руна избежания](https://www.wowhead.com/ru/item=244007)
* **Наплечники**: [Милость Амирдрассила](https://www.wowhead.com/ru/item=243991)
* **Нагрудник**: [Метка души мира](https://www.wowhead.com/ru/item=243977)
* **Поножи**: [Чародейская шелковая нить солнечного огня](https://www.wowhead.com/ru/item=240133)
* **Ботинки**: [Рысья стремительность](https://www.wowhead.com/ru/item=243953)
* **Кольца**: [Глаз орла](https://ru.wowhead.com/item=243957?crafting-quality=5)
* **Эпический самоцвет**: [Могучий алмаз Вечной Песни](https://www.wowhead.com/ru/item=240967)
* **Остальные самоцветы**:
  * [Безупречный гранат искусности](https://www.wowhead.com/ru/item=240908)
  * [Безупречный хризолит искусности](https://www.wowhead.com/ru/item=240892)
  * [Безупречный аметист смерти](https://www.wowhead.com/ru/item=240898)
  * [Безупречный лазурит искусности](https://www.wowhead.com/ru/item=240918)
  * Мы хотим использовать разные самоцветы для активации эффекта эпического самоцвета, поэтому [симьтесь](https://stormkeeper.ru/info/sim.html) персонально для точных данных.


<hr style="height:1px;background-color:#bbb">
<p></p>

Расходуемые предметы:
* **Настой**: [Настой магистров](https://www.wowhead.com/ru/item=241322) / [Настой Расколотого Солнца](https://www.wowhead.com/ru/item=241326/). [Симьтесь](https://stormkeeper.ru/info/sim.html) персонально для точных данных.
* **Зелье**: [Потенциал Света](https://www.wowhead.com/ru/item=241308/). 
* **Чары на оружие**: [Талассийское масло феникса](https://www.wowhead.com/ru/item=243734) – только в том случае, если **не взят** талант [Оружие языка пламени](https://www.wowhead.com/ru/spell=318038).
* **Руна**: [Меченная Бездной руна усиления](https://www.wowhead.com/ru/item=259085)
* **Еда**: [Празднество Харандара](https://www.wowhead.com/ru/item=255846), либо [Невообразимое королевское жаркое](https://www.wowhead.com/ru/item=255847/).
* **Зелье лечения**: [Концентрированное луносветское лечебное зелье](https://www.wowhead.com/ru/item=271883)


<hr style="height:1px;background-color:#bbb">
<p></p>


# Интерфейс

Несмотря на то, что функционал аддонов в Midnight был ощутимо ограничен, всё еще имеется возможность подробно настроить таким образом, чтобы отслеживать различные проки и кулдауны было гораздо удобнее, чем в стандартном интерфейсе.  

[Мой](https://www.twitch.tv/amanizandalari) настроенный интерфейс доступен на [Boosty](https://boosty.to/amani).

## Макросы

В первую очередь – рекомендую настроить на касты по наведению мыши (mouseover) через стандартный интерфейс. Это позволит кастовать все заклинания без выбора цели, что особенно удобно для [Огненного шока](https://ru.wowhead.com/spell=188389) и [Пронизывающего ветра](https://www.wowhead.com/ru/spell=57994/), но я это использую для всех заклинаний:

<p align="center">
    <img src="/assets/img/mouseover.png"> 
</p>

<p></p>

{% include button.html name="Макросы для Элем Шамана" link="https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8" %}  

<p></p>
