---
layout: page
last_update: 2026-03-15
title: Гайд на Элем Шамана
wow: 12.0.1
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


## Изменения в Midnight

Полный список изменений Шамана в патче **12.0** можно найти [по этой ссылке](https://stormkeeper.ru/info/midnight.html).
{: class="bordered"}

Было удалено более **20** и добавлено более **15** талантов, а также переработана почти вся ветка специализации, особенно в Огненном разделе.

В Midnight Элем будет меньше зависеть от [Перерождения](https://www.wowhead.com/beta/spell=114050), так как урон этой способности был ослаблен, а эффект дополнительных проков [Искусности](https://www.wowhead.com/beta/spell=168534) перенесен в высшие таланты.

Если говорить про удаленные таланты, то под нож попали многие активные и пассивные способности, которые не пользовались популярностью, такие как [Расплавленная порода](https://www.wowhead.com/ru/spell=381776/) и [Магматическая камера](https://www.wowhead.com/ru/spell=381932), а также "лишние" кнопки, которые были частью ротации и ощутимо её усложняли – [Ледяная ярость](https://ru.wowhead.com/spell=462816) и [Тотем жидкой магмы](https://ru.wowhead.com/spell=192222).

Мы также получили долгожданное изменение [Выброса лавы](https://www.wowhead.com/beta/spell=51505), благодаря которому, шанс критического удара больше не бесполезен для этой способности, а напрямую увеличивает её урон. Однако был добавлен новый талант со **100%** шансом крита и без бонусного урона – [Гальваническое пламя](https://www.wowhead.com/beta/spell=470057), который будет повторять проблемы старого [Выброса лавы](https://www.wowhead.com/beta/spell=51505).

Новый талант [Гальваническое пламя](https://www.wowhead.com/beta/spell=470057), за счет таланта [Очищающее пламя](https://www.wowhead.com/ru/spell=1259471), будет раскидывать [Выбросы лавы](https://www.wowhead.com/beta/spell=51505) во все цели (кроме основной), подобно старой версии [Первозданной волны](https://www.wowhead.com/ru/spell=375982/), но у нас больше не будет баффа на Скорость от [Расколотых стихий](https://www.wowhead.com/ru/spell=382042).

Также мы лишились обоих элементалей в качестве бурста. Теперь [Элементаль бури](https://www.wowhead.com/ru/spell=192249/) вызывается только при взятом таланте [Гнев бурь](https://www.wowhead.com/beta/spell=191717/) после применения [Хранителя бурь](https://www.wowhead.com/ru/spell=191634), и на гораздо меньшее время, а бонусная Скорость от [Порыва ветра](https://www.wowhead.com/ru/spell=263806/) будет доступна только со взятым талантом [Повелитель изначальных стихий](https://www.wowhead.com/ru/spell=117013/).

[Элементаль огня](https://www.wowhead.com/ru/spell=198067/) теперь является пассивным баффом после активации [Перерождения](https://www.wowhead.com/beta/spell=114050), при этом его эффект остался прежним, но урон ощутимо вырос.

[Грозовой разрядник](https://www.wowhead.com/beta/spell=210689/) станет гораздо проще использовать, так как был удален талант [Отголоски Великого Раскола](https://www.wowhead.com/ru/spell=384087/), а [Землетрясение](https://ru.wowhead.com/spell=61882) раскидывает этот бафф самостоятельно на соседние цели.

Подробнее про все изменения можно посмотреть в этом видео:

<p></p>

{% include youtube.html id="5ahqseww2mw" %}

<p></p>

# Билды талантов

## Общая информация

На текущий момент, в первом сезоне Midnight, **Вестник шторма** показывает себя гораздо лучше **Предсказателя** во всех типах контента.

Текущие актуальные билды на каждого босса в рейде можно найти на [Warcraftlogs](https://www.warcraftlogs.com/), а для Мифик+ – на [Archon.gg](https://www.archon.gg/wow/builds/elemental/shaman/mythic-plus/overview/10/all-dungeons/this-week).


## Таланты для Рейда


Основной билд **Вестника шторма** для рейда:

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/CYQAAAAAAAAAAAAAAAAAAAAAAAAAAAzMbbzMzMzMLbbDMmZAAAAAgFzYYDWgZ0QjNAYWmZmxYbxEmZWGLzMzMGWsMjFzMMzCAwwAzMwwwA?width=700&bgcolor=262b39&locale=ru_RU" width="100%" height="470px" style="overflow: hidden"></iframe>

<p></p>

<hr style="height:1px;background-color:#bbb">
<p></p>

Альтернативный билд **Предсказателя**:

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/CYQAAAAAAAAAAAAAAAAAAAAAAAAAAAmZZbmxMzMbbbjxMmZAAAAAbmZDGwAmNmQmFAYWmZmxYbxEmZWGLzMzMGWsMjFMzMzCAwwAYmxwwA?width=700&bgcolor=262b39&locale=ru_RU" width="100%" height="470px" style="overflow: hidden"></iframe>

<p></p>

* Данный билд проигрывает Вестнику шторма как в бою против одной цели, так и на кливе.



<hr style="height:1px;background-color:#bbb">
<p></p>


## Таланты для Мифик+

Основной билд **Вестника шторма**:


<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/CYQAAAAAAAAAAAAAAAAAAAAAAAAAAAzMbbzMzYML2mhZMzAAAAAALmxwGsAzohGbAwsMzMjx2ipNmZMWmZmZMsYxYxMzYmFAgZMwMDMMMA?width=700&bgcolor=262b39&locale=ru_RU" width="100%" height="470px" style="overflow: hidden"></iframe>

<p></p>



## Таланты для Вылазок

Билд **Вестника шторма** для вылазок:

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/CYQAAAAAAAAAAAAAAAAAAAAAAAAAAAzMbbzMzMzML2GMjZAAAAAALmxwGsAzohGbAwsMzMjx2ipNmZMWmZmZMsYxYxMzYmFAgZMwMDMMMA?width=700&bgcolor=262b39&locale=ru_RU" width="100%" height="470px" style="overflow: hidden"></iframe>

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
    <button type="button" id="build_ele_raid_storm" class="btn btn-primary rotation-btn">Вестник шторма – Рейд</button>
    <button type="button" id="build_ele_mplus" class="btn btn-primary rotation-btn">Вестник Шторма – Мифик+</button>
    <button type="button" id="build_ele_raid_fs" class="btn btn-primary rotation-btn">Предсказатель – Рейд</button>
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
    <input class="form-check-input" type="checkbox" id="rotation_switch_vb"> [Гальваническое пламя](https://www.wowhead.com/ru/spell=470057/)</li>  
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_pf"> [Очищающее пламя](https://www.wowhead.com/ru/spell=1259471/)</li>  
</ul>


<center>Количество целей:</center>
<div class="btn-toolbar justify-content-center mt-2 mb-3">
  <div class = "btn-group btn-group-sm">
    <button type="button" id="target_1" class="btn btn-primary px-3 rotation-btn active">1-2 цели</button>
    <button type="button" id="target_3" class="btn btn-primary px-3 rotation-btn">3 цели</button>    
    <button type="button" id="target_aoe" class="btn btn-primary px-3 rotation-btn">4+ цели</button>
  </div>
</div>

<hr style="height:1px;background-color:#bbb">
<p></p>

<div id="st" markdown="1">

**Опенер в бою против 1-2 целей:**

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

**Приоритет в бою против 1-2 целей:**
1. [Хранитель бурь](https://ru.wowhead.com/spell=191634) по кулдауну.
2. {:.no-tempest-apl}[Стремительность предков](https://ru.wowhead.com/spell=448861) по кулдауну.
3. [Перерождение](https://www.wowhead.com/ru/spell=114050/) по кулдауну.
  * Если до кулдауна [Хранителя бурь](https://ru.wowhead.com/spell=191634) осталось менее **15** секунд, стоит придержать [Перерождение](https://www.wowhead.com/ru/spell=114050/) под него.
6. {:.no-vb-apl .tempest-apl .mote-apl}[Огненный шок](https://ru.wowhead.com/spell=188389), если нет баффа [Властелина стихий](https://www.wowhead.com/ru/spell=16166/) и выполняется любое из условий:
  * До спадения осталось менее **5.4** секунд и за это время не будет [Перерождения](https://www.wowhead.com/ru/spell=114050/).
  * До исчезновения [Элементаля огня](https://www.wowhead.com/ru/spell=378255) осталось менее **2** секунд.
6. {:.no-vb-apl .tempest-apl .no-mote-apl}[Огненный шок](https://ru.wowhead.com/spell=188389), если выполняется любое из условий:
  * До спадения осталось менее **5.4** секунд и за это время не будет [Перерождения](https://www.wowhead.com/ru/spell=114050/).
  * До исчезновения [Элементаля огня](https://www.wowhead.com/ru/spell=378255) осталось менее **2** секунд.  
6. {:.vb-apl .tempest-apl .mote-apl}[Гальваническое пламя](https://www.wowhead.com/ru/spell=470057/), если нет баффа [Властелина стихий](https://www.wowhead.com/ru/spell=16166/) и выполняется любое из условий:
  * До спадения осталось менее **5.4** секунд и за это время не будет [Перерождения](https://www.wowhead.com/ru/spell=114050/).
  * До исчезновения [Элементаля огня](https://www.wowhead.com/ru/spell=378255) осталось менее **2** секунд.
6. {:.vb-apl .tempest-apl .no-mote-apl}[Гальваническое пламя](https://www.wowhead.com/ru/spell=470057/), если выполняется любое из условий:
  * До спадения осталось менее **5.4** секунд и за это время не будет [Перерождения](https://www.wowhead.com/ru/spell=114050/).
  * До исчезновения [Элементаля огня](https://www.wowhead.com/ru/spell=378255) осталось менее **2** секунд.
5. {:.mote-apl .tempest-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505), если нет баффа [Властелина стихий](https://www.wowhead.com/ru/spell=16166/).
5. {:.no-mote-apl .tempest-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505), если есть бафф [Волны лавы](https://www.wowhead.com/ru/spell=77756/).
  * Без взятого таланта [Властелин стихий](https://www.wowhead.com/ru/spell=16166/), [Выброс лавы](https://ru.wowhead.com/spell=51505) кастуется только по проку [Волны лавы](https://www.wowhead.com/ru/spell=77756/).
7. {:.tempest-apl .mote-apl}[Буря](https://ru.wowhead.com/spell=454009) для поглощения баффа [Властелина стихий](https://www.wowhead.com/ru/spell=16166/).
7. {:.tempest-apl .mote-apl}[Молния](https://ru.wowhead.com/spell=188196) с баффом [Хранителя бурь](https://ru.wowhead.com/spell=191634) для поглощения баффа [Властелина стихий](https://www.wowhead.com/ru/spell=16166/).
7. {:.tempest-apl .no-mote-apl}[Буря](https://ru.wowhead.com/spell=454009).
7. {:.tempest-apl .no-mote-apl}[Молния](https://ru.wowhead.com/spell=188196) с баффом [Хранителя бурь](https://ru.wowhead.com/spell=191634).
4. {:.tempest-apl .eb-apl}[Удар духов стихий](https://ru.wowhead.com/spell=117014), если хватает энергии Водоворота.
4. {:.tempest-apl .no-eb-apl}[Земной шок](https://ru.wowhead.com/spell=8042), если хватает энергии Водоворота.
7. {:.tempest-apl .no-mote-apl}[Молния](https://ru.wowhead.com/spell=188196), если другие способности недоступны.
7. {:.tempest-apl .mote-apl}[Буря](https://ru.wowhead.com/spell=454009) / [Молния](https://ru.wowhead.com/spell=188196), если другие способности недоступны.
4. {:.no-tempest-apl .no-mote-apl .no-eb-apl}[Земной шок](https://ru.wowhead.com/spell=8042), если хватает энергии Водоворота.
4. {:.no-tempest-apl .no-mote-apl .eb-apl}[Удар духов стихий](https://ru.wowhead.com/spell=117014), если хватает энергии Водоворота.
4. {:.no-tempest-apl .mote-apl .no-eb-apl}[Земной шок](https://ru.wowhead.com/spell=8042), если выполняется **любое** из условий:
  * Следующее заклинание приведет к оверкапу энергии Водоворота.
  * У вас есть бафф [Властелин стихий](https://www.wowhead.com/ru/spell=16166/).
4. {:.no-tempest-apl .mote-apl .eb-apl}[Удар духов стихий](https://ru.wowhead.com/spell=117014), если выполняется **любое** из условий:
  * Следующее заклинание приведет к оверкапу энергии Водоворота.
  * У вас есть бафф [Властелин стихий](https://www.wowhead.com/ru/spell=16166/).
5. {:.no-mote-apl .no-tempest-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505) по кулдауну.
5. {:.mote-apl .no-tempest-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505), если нет баффа [Властелин стихий](https://www.wowhead.com/ru/spell=16166/).
7. {:.no-tempest-apl .mote-apl}[Молния](https://ru.wowhead.com/spell=188196), для поглощения баффа [Властелин стихий](https://www.wowhead.com/ru/spell=16166/).
6. {:.no-vb-apl .no-tempesst-apl}[Огненный шок](https://ru.wowhead.com/spell=188389), если до спадения осталось менее **5.4** секунд.
6. {:.vb-apl .no-tempesst-apl}[Гальваническое пламя](https://www.wowhead.com/ru/spell=470057/), если до спадения [Огненного шока](https://ru.wowhead.com/spell=188389) осталось менее **5.4** секунд.
7. {:.no-tempest-apl}[Цепная молния](https://www.wowhead.com/ru/spell=188443) в бою против двух целей, если другие способности недоступны.
7. {:.no-tempest-apl}[Молния](https://ru.wowhead.com/spell=188196) в бою против одной цели, если другие способности недоступны.
8. {:.no-tempest-apl}[Благосклонность предков](https://ru.wowhead.com/spell=79206) / [Ледяной шок](https://ru.wowhead.com/spell=196840) во время передвижения.
8. {:.tempest-apl}[Благосклонность предков](https://ru.wowhead.com/spell=79206) / [Природная стремительность](https://www.wowhead.com/ru/spell=378081) / [Ледяной шок](https://ru.wowhead.com/spell=196840) во время передвижения.


</div>



<div id="3t" markdown="1">


**Опенер в бою против 3 целей:**
1. [Хранитель бурь](https://ru.wowhead.com/spell=191634) за **1.5** секунд до пула.
4. {:.no-tempest-apl}[Стремительность предков](https://ru.wowhead.com/spell=448861).
6. {:.vb-apl .pf-apl}[Гальваническое пламя](https://www.wowhead.com/ru/spell=470057/)
3. {:.tempest-apl}[Перерождение](https://www.wowhead.com/ru/spell=114050/), вместе с прожимным аксессуаром, зельем и [Природной стремительностью](https://www.wowhead.com/ru/spell=378081).
3. {:.no-tempest-apl}[Перерождение](https://www.wowhead.com/ru/spell=114050/), вместе с прожимным аксессуаром и зельем.
6. {:.vb-apl .pf-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505).
4. {:.tempest-apl}[Буря](https://ru.wowhead.com/spell=454009).
7. Продолжайте согласно приоритету заклинаний, указанному ниже.





<p></p>

**Приоритет в бою против 3 целей:**

1. [Хранитель бурь](https://ru.wowhead.com/spell=191634) по кулдауну.
1. {:.no-tempest-apl}[Стремительность предков](https://ru.wowhead.com/spell=448861) по кулдауну.
1. [Перерождение](https://www.wowhead.com/ru/spell=114050/) по кулдауну, но обязательно после активации [Хранителя бурь](https://ru.wowhead.com/spell=191634).
2. {:.mote-apl .no-vb-apl}[Огненный шок](https://ru.wowhead.com/spell=188389), если на основной цели нет этого дебаффа.
2. {:.vb-apl .pf-apl}[Гальваническое пламя](https://www.wowhead.com/ru/spell=470057/) по кулдауну, если [Перерождение](https://www.wowhead.com/ru/spell=114050/) не активно.
2. {:.vb-apl .no-pf-apl}[Гальваническое пламя](https://www.wowhead.com/ru/spell=470057/) для поддержания на целях [Огненного шока](https://ru.wowhead.com/spell=188389).
3. {:.eb-apl .tempest-apl}[Удар духов стихий](https://ru.wowhead.com/spell=117014) на цель без [Грозового разрядника](https://www.wowhead.com/ru/spell=210689), если у вас менее **2** зарядов [Бури](https://ru.wowhead.com/spell=454009).
3. {:.tempest-apl}[Землетрясение](https://ru.wowhead.com/spell=61882), если есть цель без [Грозового разрядника](https://www.wowhead.com/ru/spell=210689) и у вас менее **2** зарядов [Бури](https://ru.wowhead.com/spell=454009).
4. {:.vb-apl .pf-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505), если у вас есть бафф [Очищающее пламя](https://www.wowhead.com/beta/spell=1259471).
  * Старайтесь дожидаться прока [Волны лавы](https://www.wowhead.com/ru/spell=77756/), если новое [Гальваническое пламя](https://www.wowhead.com/ru/spell=470057/) еще не доступно.
5. {:.mote-apl .tempest-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505) с проком [Волны лавы](https://www.wowhead.com/ru/spell=77756/), если есть заряд [Бури](https://ru.wowhead.com/spell=454009).
5. {:.mote-apl .tempest-apl}[Буря](https://ru.wowhead.com/spell=454009) с баффом [Властелин стихий](https://www.wowhead.com/ru/spell=16166/).
6. {:.tempest-apl}[Буря](https://ru.wowhead.com/spell=454009) на цель без [Грозового разрядника](https://www.wowhead.com/ru/spell=210689), если у вас **2** заряда этой способности и не более **3** зарядов [Хранителя бурь](https://www.wowhead.com/ru/spell=191634).
7. [Цепная молния](https://www.wowhead.com/ru/spell=188443) с баффом [Хранителя бурь](https://www.wowhead.com/ru/spell=191634), если это не приведет к оверкапу энергии Водоворота.
8. {:.no-eb-apl}[Землетрясение](https://ru.wowhead.com/spell=61882), если следующее заклинание приведет к оверкапу энергии Водоворота.
8. {:.eb-apl .no-tempest-apl}[Землетрясение](https://ru.wowhead.com/spell=61882), если следующее заклинание приведет к оверкапу энергии Водоворота.
8. {:.eb-apl}[Удар духов стихий](https://ru.wowhead.com/spell=117014) в приоритетную цель, если на всех целях есть дебафф [Грозового разрядника](https://www.wowhead.com/ru/spell=210689).
9. {:.tempest-apl}[Буря](https://ru.wowhead.com/spell=454009).
9. [Цепная молния](https://www.wowhead.com/ru/spell=188443), если другие способности недоступны.
8. {:.no-tempest-apl}[Благосклонность предков](https://ru.wowhead.com/spell=79206) / [Ледяной шок](https://ru.wowhead.com/spell=196840) во время передвижения.
8. {:.tempest-apl}Во время передвижения можно использовать следующие способности:
  * [Благосклонность предков](https://ru.wowhead.com/spell=79206)
  * [Природная стремительность](https://www.wowhead.com/ru/spell=378081)
  * [Гальваническое пламя](https://www.wowhead.com/ru/spell=470057/)
  * [Выброс лавы](https://ru.wowhead.com/spell=51505) с проком [Волны лавы](https://www.wowhead.com/ru/spell=77756/)
  * [Ледяной шок](https://ru.wowhead.com/spell=196840)


</div>




<div id="aoe" markdown="1" style="display:none;">

**Опенер в бою против 4+ целей:**
1. [Хранитель бурь](https://ru.wowhead.com/spell=191634) за **1.5** секунд до пула.
4. {:.no-tempest-apl}[Стремительность предков](https://ru.wowhead.com/spell=448861).
6. {:.vb-apl .pf-apl}[Гальваническое пламя](https://www.wowhead.com/ru/spell=470057/)
3. {:.tempest-apl}[Перерождение](https://www.wowhead.com/ru/spell=114050/), вместе с прожимным аксессуаром, зельем и [Природной стремительностью](https://www.wowhead.com/ru/spell=378081).
3. {:.no-tempest-apl}[Перерождение](https://www.wowhead.com/ru/spell=114050/), вместе с прожимным аксессуаром и зельем.
6. {:.vb-apl .pf-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505).
4. {:.tempest-apl}[Буря](https://ru.wowhead.com/spell=454009).
7. Продолжайте согласно приоритету заклинаний, указанному ниже.



<p></p>

**Приоритет в бою против 4+ целей:**

1. [Хранитель бурь](https://ru.wowhead.com/spell=191634) по кулдауну.
1. {:.no-tempest-apl}[Стремительность предков](https://ru.wowhead.com/spell=448861) по кулдауну.
1. [Перерождение](https://www.wowhead.com/ru/spell=114050/) по кулдауну, но обязательно после активации [Хранителя бурь](https://ru.wowhead.com/spell=191634).
2. {:.vb-apl .pf-apl}[Гальваническое пламя](https://www.wowhead.com/ru/spell=470057/) по кулдауну, если [Перерождение](https://www.wowhead.com/ru/spell=114050/) не активно.
2. {:.vb-apl .no-pf-apl}[Гальваническое пламя](https://www.wowhead.com/ru/spell=470057/) для поддержания на целях [Огненного шока](https://ru.wowhead.com/spell=188389).
3. {:.tempest-apl}[Землетрясение](https://ru.wowhead.com/spell=61882), если есть цель без [Грозового разрядника](https://www.wowhead.com/ru/spell=210689) и у вас менее **2** зарядов [Бури](https://ru.wowhead.com/spell=454009).
4. {:.vb-apl .pf-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505), если у вас есть бафф [Очищающее пламя](https://www.wowhead.com/beta/spell=1259471).
  * Старайтесь дожидаться прока [Волны лавы](https://www.wowhead.com/ru/spell=77756/), если новое [Гальваническое пламя](https://www.wowhead.com/ru/spell=470057/) еще не доступно.
6. {:.tempest-apl}[Буря](https://ru.wowhead.com/spell=454009) на цель без [Грозового разрядника](https://www.wowhead.com/ru/spell=210689), если у вас **2** заряда этой способности и не более **3** зарядов [Хранителя бурь](https://www.wowhead.com/ru/spell=191634).
7. [Цепная молния](https://www.wowhead.com/ru/spell=188443) с баффом [Хранителя бурь](https://www.wowhead.com/ru/spell=191634), если это не приведет к оверкапу энергии Водоворота.
8. {:.no-eb-apl}[Землетрясение](https://ru.wowhead.com/spell=61882), если следующее заклинание приведет к оверкапу энергии Водоворота.
8. {:.eb-apl .no-tempest-apl}[Землетрясение](https://ru.wowhead.com/spell=61882), если следующее заклинание приведет к оверкапу энергии Водоворота.
8. {:.eb-apl}[Удар духов стихий](https://ru.wowhead.com/spell=117014) в приоритетную цель, если на всех целях есть дебафф [Грозового разрядника](https://www.wowhead.com/ru/spell=210689).
9. {:.tempest-apl}[Буря](https://ru.wowhead.com/spell=454009).
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

* В Midnight мы лишились нескольких мгновенных кастов, которые позволяли не терять урон во время движения. Для компенсации этих изменений, рекомендуется использовать [Гальваническое пламя](https://www.wowhead.com/ru/spell=470057/) под перебежки, а если оно на кулдауне, то [Ледяной шок](https://ru.wowhead.com/spell=196840).

* Второе и последующие использования [Перерождения](https://www.wowhead.com/ru/spell=114050) стоит придерживать под [Хранитель бурь](https://www.wowhead.com/ru/spell=191634), если это не приведет к потере его использования за бой.

* Приоритет баффа [Властелин стихий](https://www.wowhead.com/ru/spell=16166/) в бою против одной цели в билде Вестника шторма следующий:
  * [Буря](https://ru.wowhead.com/spell=454009).
  * [Молния](https://ru.wowhead.com/spell=188196) с баффом [Хранителя бурь](https://www.wowhead.com/ru/spell=191634).
  * [Удар духов стихий](https://ru.wowhead.com/spell=117014).

* В билде Вестника шторма **не нужно** кастовать [Выброс лавы](https://ru.wowhead.com/spell=51505) перед обычной [Молнией](https://ru.wowhead.com/spell=188196), не усиленной [Хранителем бурь](https://www.wowhead.com/ru/spell=191634).

* [Удар духов стихий](https://ru.wowhead.com/spell=117014) наносит настолько много урона, плюс дает баффы на вторичные характеристики, что его стоит использовать в бою против **1-3** целей, а на **4+** уже переходить на [Землетрясение](https://ru.wowhead.com/spell=61882).

* В ветке Вестника шторма не стоит придерживать касты [Бури](https://ru.wowhead.com/spell=454009), так как нельзя накопить более двух зарядов этой способности.

* При касте [Бури](https://ru.wowhead.com/spell=454009) на АоЕ, старайтесь выбирать цель без дебаффа от [Грозового разрядника](https://www.wowhead.com/ru/spell=210689). При этом со взятым талантом [Грозовой разрядник](https://www.wowhead.com/ru/spell=210689), [Землетрясение](https://ru.wowhead.com/spell=61882) раскидывает его автоматически на соседние цели без этого дебаффа.

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

Приоритет статов для Вестника шторма


1. **Интеллект**.
1. **Искусность** до **1200** рейтинга.
2. **Критический удар**.
3. **Скорость**.
3. **Универсальность**.

Приоритет статов для Предсказателя:

1. **Интеллект**.
1. **Искусность** до **1200** рейтинга.
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
* [Первозданная ярость](https://www.wowhead.com/ru/spell=378193) повышает критический урон до **275%**, а [Цикл ответной реакции](https://www.wowhead.com/ru/spell=1270062) – до **325%**.
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


## Комплект классовых доспехов

Сетовый комлпет Шамана Стихии, [Оболочка изначального ядра](https://www.wowhead.com/ru/item-set=1988), дает следующие бонусы:

* **2 части**: [Хранитель бурь](https://www.wowhead.com/ru/spell=191634) повышает Скорость на **15%** на **10** секунд.
* **4 части**: [Хранитель бурь](https://www.wowhead.com/ru/spell=191634) дает еще один заряд, а также увеличивает урон от [Молнии](https://ru.wowhead.com/spell=188196) и [Цепной молнии](https://www.wowhead.com/ru/spell=188443) на **25%**.

Элем Шаман носит сетовый шлем, наплечники, нагрудник и перчатки, а штаны стоит заменить на предмет с более подходящими характеристиками.
{: class="bordered"}

## Редкие предметы из рейда

* [Око полуночи](https://www.wowhead.com/ru/item=249920) – данное кольцо дает на одно гнездо для самоцвета больше, чем другие кольца и является отличным вариантом для Элема. Проковый барьер является приятным бонусом, но не более того.
* [Вечная цепь песни Пустоты](https://www.wowhead.com/ru/item=249368) – мы не наносим урон от темной магии, поэтому прок от этого ожерелья будет для нас бесполезен. 
* [Амулет гимна пустоты](https://www.wowhead.com/ru/item=250247) – не является редким предметом, но имеет два гнезда для самоцвета и отличные характеристики для Элем Шамана.

## Аксессуары


Полный рейтинг аксессуаров можно найти на [Bloodmallet](https://bloodmallet.com/chart/shaman/elemental/trinkets/castingpatchwerk).
{: class="bordered"}

Лучшие активные аксессуары:
* [Перо Алозар](https://www.wowhead.com/ru/item=250144/) – единственный аксессуар в сезоне с двухминутным кулдауном. Лучший выбор для Элем Шамана.
* [Последний взор Ваэлгора](https://www.wowhead.com/ru/item=249346/) – в случае использования этого аксессуара, можно снизить количество Искусности на экипировке.

Лучшие пассивные аксессуары:
* [Взор ясновидца Альн](https://www.wowhead.com/ru/item=249343/) – пассивная Искусность, отличный прок и аптайм. Лучший пассивный тринкет для Элем Шамана.
* [Лента Странника](https://www.wowhead.com/ru/item=249809/) – лучший пассивный тринкет на долгие бои, но крайне слаб в Мифик+.
* [Сосуд замученных душ](https://www.wowhead.com/ru/item=250258/) – альтернатива указанным выше вариантам. Можно нафармить в Мифик+.
* [Сердце ветра](https://www.wowhead.com/ru/item=250256/) – неплохой пассивный аксессуар, особенно если у вас мало Скорости на экипировке.

<p></p>



## Крафтовые предметы

1. Если к моменту получения четырех [Искр сияния](https://www.wowhead.com/ru/item=232875) у вас еще нет оружия эпохального уровня, то следует скрафтить [Прощание магистра](https://www.wowhead.com/ru/item=237849/%D0%BF%D1%80%D0%BE%D1%89%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BC%D0%B0%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B0?bonus=12214:8960:12497:12066:13622:13667) / [Трость Альн'ары](https://www.wowhead.com/ru/item=245770/%D1%82%D1%80%D0%BE%D1%81%D1%82%D1%8C-%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%80%D1%8B?bonus=12214:8960:12497:12066:13622:13667) с украшением [Символ Новолуния "Охота"](https://www.wowhead.com/ru/item=245875). Это лучшее из возможных украшений Новолуния, вне зависимости от типа противника.
2. [Корневые туфли хранителя Древа](https://www.wowhead.com/ru/item=244610/%D0%BA%D0%BE%D1%80%D0%BD%D0%B5%D0%B2%D1%8B%D0%B5-%D1%82%D1%83%D1%84%D0%BB%D0%B8-%D1%85%D1%80%D0%B0%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8F-%D0%B4%D1%80%D0%B5%D0%B2%D0%B0?bonus=12214:8960:12497:12066:13622:13667) + [Древесная пряжка хранителя Древа](https://www.wowhead.com/ru/item=244611/%D0%B4%D1%80%D0%B5%D0%B2%D0%B5%D1%81%D0%BD%D0%B0%D1%8F-%D0%BF%D1%80%D1%8F%D0%B6%D0%BA%D0%B0-%D1%85%D1%80%D0%B0%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8F-%D0%B4%D1%80%D0%B5%D0%B2%D0%B0?bonus=12214:8960:12497:12066:13622:13667). Лучшая комбинация украшений, которая дает характеристики и не требует для активации особых условий.
3. Любые предметы низкого уровня.

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
* **Оружие**: [Чародейская искусность](https://www.wowhead.com/ru/item=244031) / [Точность Джан'алай](https://www.wowhead.com/ru/item=243971). [Симьтесь](https://stormkeeper.ru/info/sim.html) персонально для точных данных.
* **Шлем**: [Усиленная руна избежания](https://www.wowhead.com/ru/item=244007)
* **Наплечники**: [Милость Амирдрассила](https://www.wowhead.com/ru/item=243991)
* **Нагрудник**: [Метка души мира](https://www.wowhead.com/ru/item=243977)
* **Поножи**: [Чародейская шелковая нить солнечного огня](https://www.wowhead.com/ru/item=240133)
* **Ботинки**: [Рысья стремительность](https://www.wowhead.com/ru/item=243953)
* **Кольца**: [Искусность Зул'джина](https://www.wowhead.com/ru/item=243959)
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
* **Настой**: [Настой магистров](https://www.wowhead.com/ru/item=241322)
* **Зелье**: [Зелье безрассудства](https://www.wowhead.com/ru/item=241288/), если у вас мало Искусности. Иначе [Потенциал Света](https://www.wowhead.com/ru/item=241308/). [Симьтесь](https://stormkeeper.ru/info/sim.html) персонально для точных данных.
* **Чары на оружие**: [Талассийское масло феникса](https://www.wowhead.com/ru/item=243734) – только в том случае, если **не взят** талант [Оружие языка пламени](https://www.wowhead.com/ru/spell=318038).
* **Руна**: [Меченная Бездной руна усиления](https://www.wowhead.com/ru/item=259085)
* **Еда**: [Празднество Харандара](https://www.wowhead.com/ru/item=255846), либо [Невообразимое королевское жаркое](https://www.wowhead.com/ru/item=255847/).
* **Зелье лечения**: [Луносветское лечебное зелье](https://www.wowhead.com/ru/item=241304)


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
