---
layout: page
last_update: 2023-03-22
title: Гайд на Элем Шамана
wow: 10.0.7
toc: true
author: Amani
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
* Шаман Стихии использует школы магии <span style="color:#26d22b;font-size:1em;">**природы**</span>, <span style="color:#f16f25;font-size:1em;">**огня**</span> и <span style="color:#8fd5fe;font-size:1em;">**льда**</span>, а также наносит <span style="color:#FFFFFF;font-size:1em;">**Физический**</span> урон (только [Землетрясение](https://ru.wowhead.com/spell=61882)).
* Дальность всех атакующих заклинаний – **40** метров. Исключениями являются некоторые вспомогательные способности, которые имеют дальность **30** метров.
* Основной ресурс Шамана Стихии – [Водоворот](https://ru.wowhead.com/spell=343725), а дополнительный – **Мана** (используется для лечения и вспомогательных заклинаний).

Подробная статья по всем заклинаниям и талантам Элем Шамана:

<p></p>

{% include button.html name="Способности и таланты Элем Шамана" link="/ele/spells.html" %}  

<p></p>

## Плюсы и минусы 

<span style="color:#40bf40;font-size:1em;">Плюсы Элема</span>

* Имеет большое количество играбельных и эффективных билдов на любой вкус.
* Может дать отличный бурст на АоЕ фазах, при правильном использовании кулдаунов.
* Хороший урон в одну цель.
* Может снимать проклятия, страх и сон, яды, отбрасывать или подкидывать противников, диспелить с врага магию, замедлять и станить группу врагов, превращать врагов в лягушку, а также имеет [Жажду крови](https://ru.wowhead.com/spell=2825).
* Может подхиливать союзников, а также в соло хилить группу с помощью [Наставления предков](https://ru.wowhead.com/spell=108281) во время бурстов на АоЕ.

<span style="color:#ff4040;font-size:1em;">Минусы Элема</span>
* Не имеет заметного рейдового утилити.
* В зависимости от билда, ротация может показаться неудобной и переусложненной.
* Требуется время для набора энергии чтобы наносить урон на АоЕ, особенно при отсутствии бурстов.
* Не имеет иммуна, для выживания следует полагаться на собственное исцеление и [Астральный сдвиг](https://ru.wowhead.com/spell=108271).

# Билды талантов

## Общая информация

Древо талантов Элема условно разделено на две стороны – слева расположены таланты, усиливающие заклинания природы ([Молния](https://ru.wowhead.com/spell=188196), [Цепная молния](https://ru.wowhead.com/spell=188443)), которые обычно называют <span style="color:#71d5ff;font-size:1em;">**молниевые**</span>, а справа находятся таланты, усиливающие школу магии <span style="color:#f16f25;font-size:1em;">**огня**</span> ([Выброс лавы](https://ru.wowhead.com/spell=51505), [Огненный шок](https://ru.wowhead.com/spell=188389)). В середине ветки расположены усиления энергии [Водоворота](https://ru.wowhead.com/spell=343725), [Искусности](https://ru.wowhead.com/spell=168534) и другие общие таланты.


<span style="color:#f16f25;font-size:1em;">**Огненные**</span> билды подразумевают активное использование [Выброса лавы](https://www.wowhead.com/ru/spell=51505), [Первозданной волны](https://www.wowhead.com/ru/spell=326059/), [Укоренившихся стихий](https://www.wowhead.com/ru/spell=378270), а также талантов с правой стороны древа в различных комбинациях.

Основной урон в бою против одной цели идет от [Выброса лавы](https://www.wowhead.com/ru/spell=51505), который получает усиление от различных талантов. Однако на АоЕ основным источником урона всё также остается [Цепная молния](https://www.wowhead.com/ru/spell=188443/), которая под действием [Перерождения](https://www.wowhead.com/ru/spell=114050) превращается в [Поток лавы](https://www.wowhead.com/ru/spell=114074). На проки [Перерождения](https://ru.wowhead.com/spell=114050) от таланта [Укоренившиеся стихии](https://www.wowhead.com/ru/spell=378270) на АоЕ можно рассчитывать только в бою против небольшого количества целей.


Для <span style="color:#71d5ff;font-size:1em;">**молниевого**</span> билда основными талантами являются [Хранитель бурь](https://www.wowhead.com/ru/spell=191634), [Безжалостное бедствие](https://www.wowhead.com/ru/spell=382685/) и [Призыв грома](https://www.wowhead.com/ru/spell=378241/). Также часто берутся [Ледяная ярость](https://ru.wowhead.com/spell=210714) и [Электрический шок](https://ru.wowhead.com/spell=382086), которые усиливают природные заклинания как в бою против одной цели, так и на АоЕ.

Также важно правильное отыгрывание таланта [Прилив мощи](https://www.wowhead.com/ru/spell=262303). Он используется не во всех билдах, однако очень важно помнить о нем в бою против одной цели. Этот талант усиливает следующее после [Земного шока](https://ru.wowhead.com/spell=8042) и [Удара духов стихий](https://www.wowhead.com/ru/spell=117014) заклинание, добавляя ему дополнительные эффекты.

В <span style="color:#71d5ff;font-size:1em;">**молниевом**</span> билде нас интересует именно бафф [Молнии](https://ru.wowhead.com/spell=188196) от [Прилива мощи](https://www.wowhead.com/ru/spell=262303). Он добавляет две дополнительные [Перегрузки](https://ru.wowhead.com/spell=168534), которые к тому же усиливаются от таланта [Хранитель бурь](https://www.wowhead.com/ru/spell=191634). То есть мы хотим обе [Молнии](https://ru.wowhead.com/spell=188196) баффнутые [Хранителем бурь](https://www.wowhead.com/ru/spell=191634) дополнительно усилить [Приливом мощи](https://www.wowhead.com/ru/spell=262303).

Данная комбинация называется **Surge-combo** (от англ. [Surge of Power](https://www.wowhead.com/spell=262303)) и выглядит следующим образом (пример при использовании талантов [Око бури](https://www.wowhead.com/ru/spell=381708/) и [Поток силы](https://www.wowhead.com/ru/spell=385923/)):
1. Накопите **116** ед. Энергии Водоворота и используйте [Хранитель бурь](https://www.wowhead.com/ru/spell=191634).
2. Используйте [Удар духов стихий](https://www.wowhead.com/ru/spell=117014) – у вас осталось **41** ед. Энергии Водоворота и вы получили бафф [Прилива мощи](https://www.wowhead.com/ru/spell=262303).
3. Используйте [Молнию](https://ru.wowhead.com/spell=188196), после которой вылетят **3** [Перегрузки](https://ru.wowhead.com/spell=168534) (**1** от [Хранителя бурь](https://www.wowhead.com/ru/spell=191634) и **2** от [Прилива мощи](https://www.wowhead.com/ru/spell=262303)). У вас получится **63** ед. Энергии Водоворота.
4. Используйте [Выброс лавы](https://www.wowhead.com/ru/spell=51505/), после чего будет **75** ед. Энергии Водоворота.
5. Используйте второй [Удар духов стихий](https://www.wowhead.com/ru/spell=117014) для получения баффа [Прилива мощи](https://www.wowhead.com/ru/spell=262303).
6. Используйте вторую [Молнию](https://ru.wowhead.com/spell=188196) с баффами от [Хранителя бурь](https://www.wowhead.com/ru/spell=191634) и [Прилива мощи](https://www.wowhead.com/ru/spell=262303).


## Изменения в патче 10.1


<p></p>

{% include button.html name="Изменения Шамана в патче 10.1" link="https://stormkeeper.ru/2023/05/02/101.html" %}  

<p></p>


С учетом нового сета и изменений талантов, Элем теперь активно использует именно <span style="color:#71d5ff;font-size:1em;">**молниевые**</span> билды как для рейда, так и для Мифик+. Данный гайд рассчитан на использование сетового комплекта из второго сезона Dragonflight. Перейти на гайд версии **10.0.7** можно [по этой ссылке](https://stormkeeper.ru/ele/old_guide.html).



## Таланты для Рейда




<details markdown=1><summary><b><span style="color:#71d5ff;font-size:1em;">Молниевый</span> билд для боя против одной цели:</b></summary>
<p></p>

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoVSSLJUSSLRDRJQiEAAAAAgSASJJkiASLJpFAJJJAC?width=700&bgcolor=262b39&locale=ru_RU" width="710" height="450"></iframe>

<p></p>

</details>
<p></p>

<hr style="height:1px;background-color:#bbb">
<p></p>



<details markdown=1><summary><b><span style="color:#71d5ff;font-size:1em;">Молниевый</span> билд для рейда, гибридный на СТ и АоЕ:</b></summary>
<p></p>

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoVSSLJSRSLRDRJQiEAAAAAgSASJJkiEItkkWAkkEAC?width=700&bgcolor=262b39&locale=ru_RU" width="710" height="450"></iframe>

<p></p>

</details>
<p></p>

<hr style="height:1px;background-color:#bbb">
<p></p>





## Таланты для Мифик+






<hr style="height:1px;background-color:#bbb">
<p></p>



<details markdown=1><summary><b><span style="color:#71d5ff;font-size:1em;">Молниевый</span> билд для Мифик+ и АоЕ:</b></summary>
<p></p>

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoVSSLJJlk0S0QAkIBAAAAAoEgUSCpIKk0SSaBhSCBgA?width=700&bgcolor=262b39&locale=ru_RU" width="710" height="450"></iframe>

<p></p>

</details>
<p></p>

<hr style="height:1px;background-color:#bbb">
<p></p>



<details markdown=1><summary><b><span style="color:#f16f25;font-size:1em;">Огненный</span> билд для Мифик+ из первого сезона:</b></summary>
<p></p>

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0SrIJlkAJtINKRLNJEAAAAAAKBIlkQKiCSLJppEokQEgA?width=700&bgcolor=262b39&locale=ru_RU" width="710" height="450"></iframe>

<p></p>

</details>
<p></p>


<hr style="height:1px;background-color:#bbb">
<p></p>


# Приоритет заклинаний


Приоритет способностей ниже читается следующим образом:
1. Выберите интересующий вас билд, после чего приоритет изменится соответствующим образом. Вы можете изменять выбор талантов с помощью переключателей. 
2. Читайте приоритет с первого пункта и вниз. Если вы можете «выполнить» первый пункт, например когда способность не на кулдауне и соблюдены другие условия, вы используете эту способность.
3. Если вы не можете «выполнить» какой-то пункт, то переходите к следующему пункту до тех пор, пока не встретите выполнимый.
4. После каждого применения заклинаний мысленно возвращайтесь в начало списка приоритетов и проходите по всем пунктам заново.

Вы можете активировать подробные комментарии по каждому пункту ротации в разделе выбора билда.
{: class="bordered"}

<hr style="height:1px;background-color:#bbb">
<p></p>

<center>Выберите используемые таланты, и приоритет способностей соответственно изменится:</center>

<div class="btn-toolbar justify-content-center mt-2 mb-3">
  <div class="btn-group" role="group">
    <button type="button" id="build_ele_storm_raid" class="btn btn-primary rotation-btn">Молниевый билд (СТ)</button>
    <button type="button" id="build_ele_storm_mplus" class="btn btn-primary rotation-btn">Молниевый билд (АоЕ)</button>
    <button type="button" id="build_ele_fire_raid" class="btn btn-primary rotation-btn">Огненный билд (СТ)</button>
    <button type="button" id="build_ele_fire_mplus" class="btn btn-primary rotation-btn">Огненный билд (АоЕ)</button>
  </div>
</div>

<ul class="rotation_switches form-check form-switch mb-2" style="list-style-type: none;">
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_fire"> [Элементаль огня](https://ru.wowhead.com/spell=198067)</li>
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_storm"> [Элементаль бури](https://ru.wowhead.com/spell=192249)</li>
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_ls"> [Волна лавы](https://ru.wowhead.com/spell=77756) или [Извержение говорящего с ветром](https://www.wowhead.com/ru/spell=378268)</li>
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_if"> [Ледяная ярость](https://ru.wowhead.com/spell=210714)</li>
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_es"> [Электрический шок](https://www.wowhead.com/ru/spell=382086)</li>
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_sk"> [Хранитель бурь](https://ru.wowhead.com/spell=191634)</li>
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_sop"> [Прилив мощи](https://www.wowhead.com/ru/spell=262303/)</li>
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_mote"> [Властелин стихий](https://ru.wowhead.com/spell=16166)</li>
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_eb"> [Удар духов стихий](https://ru.wowhead.com/spell=117014)</li>
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_pw"> [Первозданная волна](https://ru.wowhead.com/spell=375982)</li>
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_dre"> [Укоренившиеся стихии](https://ru.wowhead.com/spell=378270)</li>
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_lmt"> [Тотем жидкой магмы](https://www.wowhead.com/ru/spell=192222/) + [Возвращение тотемов](https://www.wowhead.com/ru/spell=108285)</li>
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_primal"> [Повелитель изначальных стихий](https://www.wowhead.com/ru/spell=117013/)</li>
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_eogs"> [Отголоски Великого Раскола](https://ru.wowhead.com/spell=384087)</li>
</ul>

<center>Количество целей:</center>
<div class="btn-toolbar justify-content-center mt-2 mb-3">
  <div class = "btn-group btn-group-sm">
    <button type="button" id="target_1" class="btn btn-primary px-3 rotation-btn active">1</button>
    <button type="button" id="target_2" class="btn btn-primary px-3 rotation-btn">2</button>
    <button type="button" id="target_3" class="btn btn-primary px-3 rotation-btn">3</button>
    <button type="button" id="target_4" class="btn btn-primary px-3 rotation-btn">4</button>
    <button type="button" id="target_p" class="btn btn-primary px-3 rotation-btn">5+</button>
  </div>
</div>

<hr style="height:1px;background-color:#bbb">
<p></p>

<div id="st" markdown="1">

**Опенер в бою против одной цели:**
1. {:.sk-apl .no-sop-apl}[Хранитель бурь](https://www.wowhead.com/ru/spell=191634/) за **5** секунд до пула.
1. {:.fire-apl}[Элементаль огня](https://www.wowhead.com/ru/spell=198067) за **3** секунды до пула.
1. {:.storm-apl}[Элементаль бури](https://ru.wowhead.com/spell=192249) за **3** секунды до пула.
1. {:.no-if-apl}[Выброс лавы](https://www.wowhead.com/ru/spell=51505) за **1.5** секунд до пула.
1. {:.if-apl}[Ледяная ярость](https://ru.wowhead.com/spell=210714) за **1.5** секунд до пула.
1. {:.no-pw-apl .if-apl}[Огненный шок](https://www.wowhead.com/ru/spell=188389).
1. {:.no-if-apl}[Огненный шок](https://www.wowhead.com/ru/spell=188389).
1. {:.pw-apl}[Первозданная волна](https://www.wowhead.com/ru/spell=326059).
1. {:.if-apl .pw-apl}[Выброс лавы](https://www.wowhead.com/ru/spell=51505).
1. {:.if-apl}[Ледяной шок](https://ru.wowhead.com/spell=196840).
1. {:.sk-apl .sop-apl}Придержите [Хранитель бурь](https://www.wowhead.com/ru/spell=191634/) до набора достаточного количества энергии Водоворота, чтобы усилить [Молнию](https://ru.wowhead.com/spell=188196) [Приливом мощи](https://www.wowhead.com/ru/spell=262303/).
1. Продолжайте обычную ротацию, указанную ниже.

**Приоритет в бою против одной цели:**
1. {:.fire-apl}[Элементаль огня](https://ru.wowhead.com/spell=198067).
1. {:.fire-apl .primal-apl}[Метеорит](https://ru.wowhead.com/spell=117588) с панели питомца или макросом.
2. {:.storm-apl}[Элементаль бури](https://ru.wowhead.com/spell=192249).
2. {:.fire-apl .primal-apl}[Буря](https://ru.wowhead.com/spell=157375/) с панели питомца или макросом, если [Элементаль бури](https://ru.wowhead.com/spell=192249) имеет бафф [Призыв молнии](https://ru.wowhead.com/spell=157348).
4. {:.lmt-apl}[Тотем жидкой магмы](https://www.wowhead.com/ru/spell=192222/).
4. {:.lmt-apl}[Возвращение тотемов](https://www.wowhead.com/ru/spell=108285) для сброса кулдауна [Тотема жидкой магмы](https://www.wowhead.com/ru/spell=192222/).
5. {:.pw-apl}[Первозданная волна](https://ru.wowhead.com/spell=375982).
6. {:.no-sop-apl}[Огненный шок](https://ru.wowhead.com/spell=188389), если длительность дебаффа на цели составляет менее **5.4** секунд.
6. {:.sop-apl}[Огненный шок](https://ru.wowhead.com/spell=188389), если длительность дебаффа на цели составляет менее **5.4** секунд и у вас нет баффа от [Прилива мощи](https://www.wowhead.com/ru/spell=262303/).
1. {:.no-eb-apl .dre-apl}[Земной шок](https://ru.wowhead.com/spell=8042) во время активного [Перерождения](https://ru.wowhead.com/spell=114050), если следующий [Выброс лавы](https://ru.wowhead.com/spell=51505) приведет к оверкапу энергии Водоворота.
1. {:.eb-apl .dre-apl}[Удар духов стихий](https://ru.wowhead.com/spell=117014) во время активного [Перерождения](https://ru.wowhead.com/spell=114050).
1. {:.dre-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505) во время активного [Перерождения](https://ru.wowhead.com/spell=114050).
1. {:.sop-apl}[Молния](https://ru.wowhead.com/spell=188196) с баффом от [Прилива мощи](https://www.wowhead.com/ru/spell=262303/).
7. {:.sk-apl .no-sop-apl}[Хранитель бурь](https://ru.wowhead.com/spell=191634).
7. {:.sk-apl .sop-apl}[Хранитель бурь](https://ru.wowhead.com/spell=191634) если у вас есть **116+** энергии Водоворота или если есть бафф от [Прилива мощи](https://www.wowhead.com/ru/spell=262303/).
2. {:.if-apl .es-apl}[Ледяная ярость](https://ru.wowhead.com/spell=210714).
2. {:.if-apl .es-apl}[Ледяной шок](https://ru.wowhead.com/spell=196840) с баффом от [Ледяной ярости](https://ru.wowhead.com/spell=210714), если на цели нет дебаффа от [Электрического шока](https://www.wowhead.com/ru/spell=382086).
1. {:.sk-apl .no-sop-apl}[Молния](https://ru.wowhead.com/spell=188196) с баффом от [Хранителя бурь](https://ru.wowhead.com/spell=191634).
1. {:.ls-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505) с баффом от [Волны лавы](https://ru.wowhead.com/spell=77756).
1. {:.eb-apl .no-mote-apl}[Удар духов стихий](https://ru.wowhead.com/spell=117014).
1. {:.eb-apl .mote-apl}[Удар духов стихий](https://ru.wowhead.com/spell=117014), желательно с баффом от [Властелина стихий](https://ru.wowhead.com/spell=16166).
1. {:.eogs-apl .no-eb-apl}[Землетрясение](https://ru.wowhead.com/spell=61882) с баффом от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=384087).
1. {:.no-eb-apl}[Земной шок](https://ru.wowhead.com/spell=8042).
2. {:.storm-apl}[Молния](https://ru.wowhead.com/spell=188196) во время активного [Элементаля бури](https://ru.wowhead.com/spell=192249).
1. [Выброс лавы](https://ru.wowhead.com/spell=51505).
2. {:.if-apl}[Ледяной шок](https://ru.wowhead.com/spell=196840) с баффом от [Ледяной ярости](https://ru.wowhead.com/spell=210714).
2. {:.if-apl .no-es-apl}[Ледяная ярость](https://ru.wowhead.com/spell=210714).
2. [Молния](https://ru.wowhead.com/spell=188196).
3. [Огненный шок](https://ru.wowhead.com/spell=188389) во время передвижения.
3. [Ледяной шок](https://ru.wowhead.com/spell=196840) во время передвижения.


</div>

<div id="aoe" markdown="1" style="display:none;">

**Опенер на АоЕ:**

1. {:.sk-apl}[Хранитель бурь](https://ru.wowhead.com/spell=191634).
1. {:.fire-apl}[Элементаль огня](https://ru.wowhead.com/spell=198067).
  * {:.primal-apl .fire-apl}[Метеорит](https://ru.wowhead.com/spell=117588) с панели питомца или макросом.
1. {:.storm-apl}[Элементаль бури](https://ru.wowhead.com/spell=192249).
  * {:.primal-apl .storm-apl}[Буря](https://ru.wowhead.com/spell=157375/) с панели питомца или макросом, если [Элементаль бури](https://ru.wowhead.com/spell=192249) имеет бафф [Призыв молнии](https://ru.wowhead.com/spell=157348).
1. {:.lmt-apl}[Тотем жидкой магмы](https://www.wowhead.com/ru/spell=192222/).
1. {:.lmt-apl}[Возвращение тотемов](https://www.wowhead.com/ru/spell=108285).
1. {:.pw-apl}[Первозданная волна](https://ru.wowhead.com/spell=375982).
7. {:.pw-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505).
1. Продолжайте обычную ротацию, указанную ниже.


<hr style="height:1px;background-color:#bbb">
<p></p>


**Приоритет в бою на АоЕ:**
1. {:.fire-apl}[Элементаль огня](https://ru.wowhead.com/spell=198067).
  * {:.primal-apl .fire-apl}[Метеорит](https://ru.wowhead.com/spell=117588) с панели питомца или макросом.
1. {:.storm-apl}[Элементаль бури](https://ru.wowhead.com/spell=192249).
  * {:.primal-apl .storm-apl}[Буря](https://ru.wowhead.com/spell=157375/) с панели питомца или макросом, если [Элементаль бури](https://ru.wowhead.com/spell=192249) имеет бафф [Призыв молнии](https://ru.wowhead.com/spell=157348).
1. {:.lmt-apl}[Тотем жидкой магмы](https://www.wowhead.com/ru/spell=192222/).
1. {:.lmt-apl}[Возвращение тотемов](https://www.wowhead.com/ru/spell=108285), если [Тотем жидкой магмы](https://www.wowhead.com/ru/spell=192222/) на кулдауне.
  * {:.comm-apl}В низких ключах не стоит ставить сразу два [Тотема жидкой магмы](https://www.wowhead.com/ru/spell=192222/), а лучше распределять их на разные паки.
1. {:.pw-apl}[Первозданная волна](https://ru.wowhead.com/spell=375982) на цель без [Огненного шока](https://ru.wowhead.com/spell=188389).
1. {:.pw-apl}[Огненный шок](https://ru.wowhead.com/spell=188389) на цель без [Огненного шока](https://ru.wowhead.com/spell=188389).
1. {:.sk-apl}[Хранитель бурь](https://ru.wowhead.com/spell=191634).
1. {:.sop-apl targets="2"}[Молния](https://ru.wowhead.com/spell=188196) с баффом от [Прилива мощи](https://www.wowhead.com/ru/spell=262303/).
1. {:.pw-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505), если под [Огненным шоком](https://ru.wowhead.com/spell=188389) максимальное количество целей и у вас есть бафф от [Первозданной волны](https://ru.wowhead.com/spell=375982).
1. {:.dre-apl targets="<4"}[Выброс лавы](https://ru.wowhead.com/spell=51505) в цель с наибольшим количеством здоровья.
1. {:.dre-apl .ls-apl targets=">3"}[Выброс лавы](https://ru.wowhead.com/spell=51505) с баффом от [Волны лавы](https://ru.wowhead.com/spell=77756).
3. {:.no-eogs-apl .no-eb-apl}[Землетрясение](https://ru.wowhead.com/spell=61882).
4. {:.no-eogs-apl .eb-apl targets=">3"}[Землетрясение](https://ru.wowhead.com/spell=61882).
6. {:.no-eogs-apl .eb-apl targets="<4"}[Удар духов стихий](https://www.wowhead.com/ru/spell=117014).
7. {:.eogs-apl}[Землетрясение](https://ru.wowhead.com/spell=61882) c баффом от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=384087).
8. {:.no-eb-apl .eogs-apl}[Земной шок](https://ru.wowhead.com/spell=8042), если у вас нет баффа от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=384087).
9. {:.eb-apl .eogs-apl}[Удар духов стихий](https://www.wowhead.com/ru/spell=117014), если у вас нет баффа от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=384087).
10. {:.dre-apl targets=">3"}[Поток лавы](https://www.wowhead.com/ru/spell=114074/) во время активного [Перерождения](https://ru.wowhead.com/spell=114050).
11. {:.if-apl .es-apl targets="<5"}[Ледяной шок](https://ru.wowhead.com/spell=196840), если на целях нет дебаффа от [Электрического шока](https://www.wowhead.com/ru/spell=382086).
12. {:.if-apl .es-apl targets="<5"}[Ледяная ярость](https://ru.wowhead.com/spell=210714).
13. [Цепная молния](https://www.wowhead.com/ru/spell=188443).




</div>

# Общая ветка талантов

Общая ветка талантов предлагает широкий выбор вспомогательных способностей, которые найдут применение в различных ситуациях.

Два таланта Элем Шаман получает по умолчанию без траты на них очков – это [Выброс лавы](https://ru.wowhead.com/spell=51505) и [Цепная молния](https://ru.wowhead.com/spell=188443). Так же есть несколько основных талантов, которые напрямую влияют на наносимый урон и выживаемость и их стоит брать в любом билде. К ним относятся:
* [Астральный сдвиг](https://www.wowhead.com/ru/spell=108271/) – основной сейв.
* [Лед и пламя](https://www.wowhead.com/ru/spell=382886) – пассивное увеличение урона.
* [Гнев природы](https://www.wowhead.com/ru/spell=381655) – пассивное увеличение урона.
* [Улучшенная молния](https://www.wowhead.com/ru/spell=381674) – пассивное увеличение урона.
* [Защита от стихий](https://www.wowhead.com/ru/spell=381650) – снижает получаемый магический урон.
* [Защита предков](https://www.wowhead.com/ru/spell=382947) – увеличивает Избежание и Самоисцеление.
* [Переполняющая сила жизни](https://www.wowhead.com/ru/spell=381689/) – увеличивает запас здоровья на **8%**.
* [Пронизыващий ветер](https://www.wowhead.com/ru/spell=57994/) – сбитие кастов, обязательный талант в Мифик+.
* [Благосклонность предков](https://www.wowhead.com/ru/spell=79206) – позволяет кастовать на ходу.
* При игре с [Тотемом жидкой магмы](https://www.wowhead.com/ru/spell=192222/) также берутся таланты [Возвращение тотемов](https://www.wowhead.com/ru/spell=108285) и [Зов стихий](https://www.wowhead.com/ru/spell=383011).
* [Наставления предков](https://www.wowhead.com/ru/spell=108281) – позволяет раз в **2** минуты в течение **10** секунд хилить союзников на процент от нанесенного вами урона. Во время бурстов вы можете практически соло держать всю группу на максимальном здоровье. Не имеет ГКД.
* [Природная стремительность](https://www.wowhead.com/ru/spell=378081/) – позволяет раз в минуту применить одно заклинание школы магии природы мгновенно. Не имеет ГКД.

Следующие таланты выбираются в зависимости от подземелья и состава группы:
* [Тотем конденсации](https://www.wowhead.com/ru/spell=192058/) – АоЕ стан на **3** секунды.
* [Развеивание магии](https://www.wowhead.com/ru/spell=370) – снятие магического эффекта с врага.
* [Очищение духа](https://www.wowhead.com/ru/spell=51886) – снятие проклятия с союзника.
* [Тотем трепета](https://www.wowhead.com/ru/spell=8143) – снятие эффектов страха, подчинения и сна.
* [Тотем противоядия](https://www.wowhead.com/ru/spell=383013) – снятие эффектов яда.
* [Сглаз](https://www.wowhead.com/ru/spell=51514) – контроль одного противника.


# Характеристики

**Интеллект** – лучшая характеристика, так как повышает весь урон и растет от уровня предметов гораздо сильнее, чем вторичные статы. Поэтому в первую очередь стоит смотреть на уровень предметов.

С выбором вещей поможет [Raidbots](https://www.raidbots.com/simbot). Краткое руководство доступно [по этой ссылке](https://stormkeeper.ru/info/sim.html).


## Вторичные характеристики

* **Критический удар**: дает шанс, равный значению Критического удара, увеличить урон ваших способностей в **2.5** раза. 

<details markdown=1><summary><i>Подробнее про Критический удар...</i></summary>
<p></p>

* Базовое значение Критического удара, без учета характеристик, составляет **5%**.
* Базовое значение увеличения Критического урона составляет **200%**, а талант [Неистовство стихий](https://www.wowhead.com/ru/spell=60188) повышает его до **250%**.
* [Неистовство стихий](https://www.wowhead.com/ru/spell=60188) не работает на аксессуары и способности [Элементаля огня](https://ru.wowhead.com/spell=198067) и [Элементаля бури](https://ru.wowhead.com/spell=192249).
* На получение **1%** Критического удара нужно **170** единиц рейтинга Критического удара.
* После набора **5100** рейтинга скорость роста этой характеристики снижается на **10%**. То есть для набора дополнительного **1%** Критического удара потребуется не **170** единиц рейтинга, а **187**.

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
* Например с **7%** Скорости (**1190** рейтинга) [Выброс лавы](https://ru.wowhead.com/spell=51505) кастуется **1.869** секунд, а с **7.1%** (**1207** рейтинга) – **1.867** секунд. Однако в игре, если прочитать подсказку заклинания, с обоими значениями вы увидите время произнесения **1.87** секунды.
* На получение **1%** Скорости нужно **170** единиц рейтинга Скорости.
* После набора **5100** рейтинга скорость роста этой характеристики снижается на **10%**. То есть для набора дополнительного **1%** Скорости потребуется не **170** единиц рейтинга, а **187**.

</details>
<p></p>

<hr style="height:1px;background-color:#bbb">
<p></p>


* **Искусность**: дает шанс некоторым заклинаниям поразить цель повторно, нанеся меньше урона и давая меньше энергии Водоворота.

<details markdown=1><summary><i>Подробнее...</i></summary>
<p></p>

* Увеличивает эффективность пассивного бонуса [Искусность: великая сила стихий](https://www.wowhead.com/ru/spell=77223).
* Базовое значение Искусности, без учета характеристик, составляет **16%**.
* Урон дублированного заклинания при проке перегрузки снижен до **85%** от базового. При взятии таланта [Камера эхо](https://www.wowhead.com/ru/spell=382032) урон повышается до **93%/100%**.
* Критический удар рассчитывается для прока Искусности отдельно.
* Искусность срабатывает на следующие заклинания:
  * [Молния](https://ru.wowhead.com/spell=188196)
  * [Цепная молния](https://ru.wowhead.com/spell=188443)
  * [Выброс лавы](https://ru.wowhead.com/spell=51505)
  * [Ледяная ярость](https://ru.wowhead.com/spell=210714)
* Талант [Горы не вечны](https://www.wowhead.com/ru/spell=381726) позволяет вызывать срабатывание искусности [Земному шоку](https://ru.wowhead.com/spell=8042), [Землетрясению](https://ru.wowhead.com/spell=61882) и [Удару духов стихий](https://www.wowhead.com/ru/spell=117014), нанося при этом в два раза меньше урона.
* Эффективность [Искусности](https://ru.wowhead.com/spell=168534) для [Цепной молнии](https://ru.wowhead.com/spell=188443) **снижена до 33%**. То есть, если у вас **60%** Искусности, то [Цепная молния](https://ru.wowhead.com/spell=188443) имеет только **20%** на прок перегрузки.
* Перегрузка вылетает не сразу после завершения каста заклинания, а примерно через **1** секунду.
* Если сразу же после каста заклинания использовать, например, {{ site.data.spells.es }}, то перегрузка вылетит уже после траты энергии Водоворота и последняя не уйдет в оверкап.
* Перегрузка [Выброса лавы](https://ru.wowhead.com/spell=51505) не дает бафф от таланта {{ site.data.spells.mote }}, но перегрузка [Удара духов стихий](https://ru.wowhead.com/spell=117014) гарантированно дает второй бафф на статы, отличный от первого.
* Все таланты, увеличивающие урон основного заклинания, влияют также и на его прок искусности.
* Искусность не влияет на тотемы и лечащие заклинания.
* При использовании [Первозданной волны](https://ru.wowhead.com/spell=375982) шанс на прок Искусности расчитывается отдельно на каждую цель. 
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

Приоритет статов для **всех** <span style="color:#71d5ff;font-size:1em;">Молниевых</span> билдов и **всех** типов PvE контента следующий:

* **Интеллект** > **Скорость** = **Критический удар** > **Универсальность** > **Искусность**.

# Экипировка

## Комплект классовых доспехов

Как можно быстрее получите из рейда **2/4** куска сетового комплекта. Шаман делит классовые куски с **Паладином** и **Жрецом**.

* Бонус **2** предметов: Вы получаете **1** заряд [Хранителя бурь](https://www.wowhead.com/ru/spell=191634) каждые **50** секунд (**100** секунд в PvP).
* Бонус **4** предметов: В течение **8** секунд после того, как вы поглотите заряд [Хранителя бурь](https://www.wowhead.com/ru/spell=191634), ваши [Молния](https://www.wowhead.com/ru/spell=188196), [Выброс лавы](https://www.wowhead.com/ru/spell=51505), [Ледяная ярость](https://ru.wowhead.com/ru/spell=210714) и [Ледяной шок](https://ru.wowhead.com/ru/spell=196840) дают на **50%** больше энергии Водоворота. Кроме того, [Цепная молния](https://ru.wowhead.com/ru/spell=188443), [Поток лавы](https://ru.wowhead.com/ru/spell=114074) и [Землетрясение](https://ru.wowhead.com/ru/spell=61882) наносят на **20%** больше критического урона.

<p></p>

<hr style="height:1px;background-color:#bbb">
<p></p>


<details markdown=1><summary><i>Подробнее про 2 части комплекта...</i></summary>
<p></p>

Подробности про **2** части комплекта:
* После начала первого боя после загрузки персонажа, вы автоматически получите **1** заряд [Хранителя бурь](https://www.wowhead.com/ru/spell=191634) через **0-5** секунд.
* Точное время получения баффа после начала боя случайно в пределах **0-5** секунд.
* После этой первоначальной случайной задержки, сетовый комплект будет пытаться дать заряд [Хранителя бурь](https://www.wowhead.com/ru/spell=191634) каждые **50** секунд.
* Если в этот момент на вас висит вручную скастованный бафф от [Хранителя бурь](https://www.wowhead.com/ru/spell=191634), то наложение баффа от сета будет отложено на **5** секунд.
* Откладывание баффа на **5** секунд будет происходить до тех пор, пока вы не сможете его получить.
* Эта задержка не учитывается в расчете получения следующего баффа от сетового комплекта.
* Пример работы сетового комплекта:
  * **0** секунд – начало боя.
  * **3** секунды – получение баффа от сета спустя случайный промежуток времени.
  * **53** секунды – получение баффа от сета.
  * **103** секунды – попытка получения баффа от сета, но на игроке висит наложенный вручную [Хранитель бурь](https://www.wowhead.com/ru/spell=191634).
  * **108** секунд – еще одна попытка получения баффа, на игроке уже нет вручную наложенного [Хранителя бурь](https://www.wowhead.com/ru/spell=191634), и эта попытка успешна.
  * **153** секунды – получение баффа от сета.
* При выходе из боя, сетовый комплект также пытается каждые **5** секунд дать бафф [Хранителя бурь](https://www.wowhead.com/ru/spell=191634), пока игрок на зайдет в бой. 
* Если на примере выше вы выйдите из боя на **120** секунде и зайдете на **130**, то бонус сета будет получен все равно на **153** секунде.

</details>
<p></p>

<hr style="height:1px;background-color:#bbb">
<p></p>

<details markdown=1><summary><i>Подробнее про 4 части комплекта...</i></summary>
<p></p>

* Эффект [Изначального разлома](https://www.wowhead.com/ptr/spell=410018/) накладывается только после траты **всех** стаков [Хранителя бурь](https://www.wowhead.com/ru/spell=191634).
* Данный эффект накладывается также в том случае, если бафф [Хранителя бурь](https://www.wowhead.com/ru/spell=191634) был снят правой кнопкой мыши, командой /cancelaura или закончился от времени действия.
* Генерация энергии Водоворота также затрагивает и проки Перегрузки.
* Талант [Поток силы](https://www.wowhead.com/ru/spell=385923/) влияет на генерацию энергии Водоворота от сета.
* Талант [Жгучее пламя](https://www.wowhead.com/ru/spell=381782/) **не** влияет на генерацию энергии Водоворота от сета.
* Увеличение критического урона поднимает его значение с **250%** до **270%**.
* [Отголоски Великого Раскола](https://www.wowhead.com/ru/spell=384087/) позволяют получить бонус критического урона не только на АоЕ, но и в бою против одной цели.

</details>
<p></p>

<hr style="height:1px;background-color:#bbb">
<p></p>



Сет выпадает из следующих боссов:

* [Брэ золоволка](https://www.wowhead.com/ru/item=202469) – Рашок Древний.
* [Кастет золоволка](https://www.wowhead.com/ru/item=202471) – Забытые эксперименты.
* [Наряд золоволка](https://www.wowhead.com/ru/item=202473) – Бдительный распорядитель Зкарн.
* [Каркасный шлем золоволка](https://www.wowhead.com/ru/item=202470) – Магморакс.
* [Молниевые пластины золоволка](https://www.wowhead.com/ru/item=202468) – Эхо Нелтариона.

Помимо Рейда сетовый комплект можно также получить из еженедельного сундука за Мифик+ и через Катализатор, который открывается через **5** недель после старта патча **10.1**.
{: class="bordered"}


## Аксессуары

Ниже представлены неплохие аксессуары из Мифик+ и рейда. Полный рейтинг аксессуаров можно найти на [Bloodmallet.com](https://bloodmallet.com/chart/shaman/elemental/trinkets/castingpatchwerk).

Лучшие аксессуары:
* [Зловещая разноцветная субстанция](https://www.wowhead.com/ru/item=203729) – Забытые эксперименты. Выбираем Скорость или Критический удар.
* [Подгнившая кукла вуду](https://www.wowhead.com/ru/item=159624) – Подгнилье.

Если нет перечисленных выше:
* [Сосуд жгучей тени](https://www.wowhead.com/ru/item=202615) – Чертог Слияния.
* [Огненный камень потока](https://www.wowhead.com/ru/item=203996/) – Магморакс. Лучший тринкет для всех типов боев.
* [Идол чистого разложения](https://www.wowhead.com/ru/item=193660) – Лощина Бурошкуров.
* [Добыча Нелтария](https://www.wowhead.com/ru/item=193773) – Нелтарий.
* [Кричащая чешуйка черного дракона](https://www.wowhead.com/ru/item=202612/) – Каззара Огнекованная.
* [Взрывающийся фрагмент копья](https://www.wowhead.com/ru/item=193769/) – Нелтарий.


## Оружие

Лучшее оружие:
* [Эретрос, Обманутые Надежды](https://www.wowhead.com/ru/item=202565/) – Дракомандир Саркарет.
* [Пронзатель разума Ликсы](https://www.wowhead.com/item=159652) (Подгнилье) + [Чудовищное обжорство](https://www.wowhead.com/item=205974) (Логово Нелтаориона).


## Улучшение предметов

В патче **10.1** добавлена новая система улучшения экипировки, которая пришла на место очкам Доблести из прошлых патчей.

Подробнее про систему улучшения можно почитать в специальных материалах, например от [Dratnos](https://docs.google.com/spreadsheets/d/e/2PACX-1vQogGG6tjV-PtQgunxFgNVMizsfZ9YhhCRQw9vh0vmmeickHwH9HAaB5o58oKhl-IoTNkKqS_pHEC_F/pubhtml), [Laria](https://docs.google.com/document/d/e/2PACX-1vSMrFpkgeIz6Q1fefG71xH0xNgGu0uXEnNNru6yJ8vtxr6DrQKj2uNtOWYlAestRFeH5Z2XxuAFExrv/pub) или [Video](https://docs.google.com/spreadsheets/d/e/2PACX-1vQmjfnXKpGyKmQK3O2TQP-pIbWbVh7Yss636Wkn83XssTRu7BG4ON7UBSbmsdEcQN-knC1DhYXD3fHZ/pubhtml).
{: class="bordered"}

Так как количество Гребней, необходимых для улучшения предметов, ограничено еженедельным кулдауном, нужно с умом их тратить. Лучше всего улучшать те предметы, которые вы не скоро смените на версии более высокого ilvl или крафтом:
1. **Аксессуары из рейда**. Если вы выбили нужный аксессуар в Нормале или Героике, то стоит его улучшить до максимально доступного уровня предмета.
2. **Оружие**. Лучше всего оружие крафтить с помощью [Искры пламени Тьмы](https://www.wowhead.com/ru/item=204440/), однако если вам повезло выбить отличный предмет в этот слот – стоит потратить Гребни на него, а [Искру пламени Тьмы](https://www.wowhead.com/ru/item=204440/) применить для другой экипировки.
3. **Сетовые предметы**. До открытия Катализатора стоит тратить Гребни на улучшение сетовых предметов, но только в том случае, если вы не собираетесь в самое ближайшее время убивать босса с этим куском.
4. **Предметы с лучшими характеристиками**. Вы получаете скидки на использование Гребней в том случае, если уже обладаете предметом более высокого ilvl в данном слоте. Так что имеет смысл улучшать бисовые предметы за бесценок, без привязки к еженедельному капу Гребней.

## Крафтовые предметы

Начиная со старта патча **3 мая** вы сможете получать одну [Искру пламени Тьмы](https://www.wowhead.com/ru/item=204440/) раз в две недели. С помощью [Искры пламени Тьмы](https://www.wowhead.com/ru/item=204440/) можно крафтить экипировку вплоть до **447** ilvl, что является эквивалентом предметов с предпоследних боссов Эпохального рейда.

Лучшие предметы для крафта с помощью [Искры пламени Тьмы](https://www.wowhead.com/ru/item=204440/):
1. **Одноручное оружие**. [Изначальный раскаленный чародейский клинок](https://www.wowhead.com/ru/item=190506/).
2. **Комплект** [Облачения бегущего за горизонт](https://www.wowhead.com/ru/item-set=1510/), [Пояс](https://www.wowhead.com/ru/item=193463) и [Перчатки](https://www.wowhead.com/ru/item=193465). Один из лучших вариантов для крафта за счет сильного украшения, но требует сразу две [Искры пламени Тьмы](https://www.wowhead.com/ru/item=204440/), либо придется носить предмет из первого сезона низкого ilvl.
5. **Ожерелье**. Как и в случае с кольцом, на крафтовом ожерелье можно выбрать желаемые статы. Плюс это отличный вариант в том случае, если вы будете менять [Аркан стихий](https://www.wowhead.com/ru/item=193001/) ради освобождения слота украшения.
6. [Сложные манжеты](https://www.wowhead.com/ru/item=198332). Инженерные наручи будут особенно полезны для любителей Мифик+, так как дают доступ к боевому воскрешению – [Тангенциальный корректор жизненной силы](https://www.wowhead.com/ru/item=201409/).

[Аркан стихий](https://www.wowhead.com/ru/item=193001/) после добавления зависимости силы прока от количества камней это уже не такой хороший вариант, как в первом сезоне. Учитывая усиление других украшений, [Аркан стихий](https://www.wowhead.com/ru/item=193001/) теперь можно спокойно заменить на другой крафтовый предмет.


## Украшения

[Ботфорты кислотного града](https://www.wowhead.com/ru/item=193466/) на данный момент являются одним из лучших украшений, особенно в сочетании с [Пропитанной ядом броневой пластиной](https://www.wowhead.com/ru/item=193552), однако не стоит забывать про негативный эффект – снижение скорости передвижения. В некоторых моментах снижение скорости передвижения на **10-20%** может стоить вам жизни или потери ДПС, что перекроет пользу от этих ботинок.
{: class="bordered"}


1. **Комплект** [Облачения бегущего за горизонт](https://www.wowhead.com/ru/item-set=1510/), [Пояс](https://www.wowhead.com/ru/item=193463) и [Перчатки](https://www.wowhead.com/ru/item=193465). Один из самых сильных проков и в СТ, и на АоЕ. Требует две искры и ограничивает выбор сетовых предметов – вы не сможете использовать перчатки для набора **4** кусков сета, так что в случае невезения крафт этого сета может выйти боком. 
3. [Закаленная в пламени тьмы броневая пластина](https://www.wowhead.com/ptr/item=204710) (только броня) – новое украшение патча **10.1**, наиболее эффективно в СТ. Можно использовать как временную заглушку в зависимости от вашего крафта и в будущем заменить на более эффективный вариант.
2. [Аркан стихий](https://www.wowhead.com/ru/item=193001/) – чем больше в вашей экипировке гнезд для самоцветов, тем будет лучше. Но этот вариант все равно проигрывает комплекту на Скорость.
8. [Мешочек алхимических приправ](https://www.wowhead.com/ru/item=200652/) – технически является украшением, но не занимает слота. Позволяет не терять бафф еды в случае смерти и воскрешения, что особенно актуально для Шамана с учетом [Реинкарнации](https://ru.wowhead.com/spell=20608).



# Расходуемые предметы

<hr style="height:1px;background-color:#bbb">
<p></p>


**Зачарования** лучше всего использовать максимального качества. Как альтернатива здесь также указаны более дешевые варианты:
* **Оружие**: [Посвящение мудрости](https://www.wowhead.com/ru/spell=389550/).
* **Нагрудный доспех**: [Пробужденные характеристики](https://www.wowhead.com/ru/spell=389410/).
* **Поножи**: [Замерзшая чародейская нить](https://www.wowhead.com/ru/spell=376539/).
* **Кольца**: [Посвящение скорости](https://www.wowhead.com/ru/spell=389293/).
* **Плащ**: [Грациозное избежание](https://www.wowhead.com/ru/spell=389403/).
* **Наручи**: [Посвящение избежания](https://www.wowhead.com/ru/spell=389301/).
* **Ботинки**: [Ветер равнин](https://www.wowhead.com/ru/spell=389479/).

<hr style="height:1px;background-color:#bbb">
<p></p>


**Самоцветы** теперь есть двух видов – уникальные эпические, которые нужно делать через стол заказов, и обычные, которые покупаются на аукционе. Лучше всего использовать камни максимального качества. Эпических камней может быть не более одного во всей экипировке. 
* Эпический самоцвет: [Покрытый письменами бесконечный алмаз](https://www.wowhead.com/ru/item=192982/).
* Обычные самоцветы: [Коварный алекстразит](https://www.wowhead.com/ru/item=192919).


<hr style="height:1px;background-color:#bbb">
<p></p>


Вместо настоев теперь используются **флаконы** – они длятся меньше времени, но и стоят меньше реагентов. Лучше всего использовать флаконы максимального качества. Существует множество различных видов флаконов, лучшие из них следующие:
* [Флакон стихийного хаоса](https://www.wowhead.com/ru/item=191357): хороший вариант без каких-либо негативных эффектов.
* [Флакон сдержанной универсальности](https://www.wowhead.com/ru/item=191341): универсальный дешевый вариант. Также подойдет для высоких ключей.
* [Замерзший флакон оскверняющей ярости](https://www.wowhead.com/ru/item=191329/): вариант для Мифик+, имеет довольно высокий аптайм, но может быть опасен в высоких ключах.


<hr style="height:1px;background-color:#bbb">
<p></p>


**Зелье** используются следующее:
* [Зелье великой мощи стихий](https://www.wowhead.com/ru/item=191383): дорогой вариант.

Не забудьте про хилпот – [Освежающее лечебное зелье](https://www.wowhead.com/ru/item=191380), а также про новые зелья, которые можно применить после смерти: [Неустойчивая суспензия из спор](https://www.wowhead.com/ru/item=191377/) и [Остаточный реагент нейронной активности](https://www.wowhead.com/ru/item=191374).
{: class="bordered"}

<hr style="height:1px;background-color:#bbb">
<p></p>


**Еду** следует использовать следующую:
* [Большой калуакский банкет](https://www.wowhead.com/ru/item=197794): пир на множество игроков, увеличивает Интеллект.
* [Печенье с судьбоносными предсказаниями](https://www.wowhead.com/ru/item=197792) или [Жестоко фаршированные яйца](https://www.wowhead.com/ru/item=204072/): аналог пира, но для одного игрока.

<hr style="height:1px;background-color:#bbb">
<p></p>

Вместо масел теперь используются **руны на оружие**, однако они не сочетаются с талантом [Улучшенное оружие языка пламени](https://www.wowhead.com/ru/spell=382027).
* [Жужжащая руна](https://www.wowhead.com/ru/item=194823): руна на Критический удар.
* [Воющая руна](https://www.wowhead.com/ru/item=194820): руна на Скорость.

<hr style="height:1px;background-color:#bbb">
<p></p>


* [Драконья руна усиления](https://www.wowhead.com/ru/item=201325): руна на Интеллект, спадающая при смерти.
* [Затененная руна усиления](https://www.wowhead.com/ru/item=181468/): дешевый вариант.

<hr style="height:1px;background-color:#bbb">
<p></p>


# Интерфейс

В зависимости от билда Элем отслеживает два типа дебаффов на цели. В молниевом это [Грозовой разрядник](https://www.wowhead.com/spell=210689), а в огненном – [Огненный шок](https://ru.wowhead.com/spell=188389). Для отслеживания этих дебаффов рекомендую использовать этот [мод на Plater](https://wago.io/o9Q7MSLDi).

## Макросы

В первую очередь – рекомендую настроить на касты по наведению мыши (mouseover) через стандартный интерфейс. Это позволит кастовать все заклинания без выбора цели, что особенно удобно для [Огненного шока](https://ru.wowhead.com/spell=188389) и [Пронизывающего ветра](https://www.wowhead.com/ru/spell=57994/), но я это использую для всех заклинаний:

<p align="center">
    <img src="/assets/img/mouseover.png"> 
</p>

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

* Маусовер макрос, который позволяет назначить на одну кнопку два действия – для врага и для союзника. Можно использовать на {{ site.data.spells.purge }} и [Очищение духа](https://ru.wowhead.com/spell=51886):
~~~
#showtooltip 
/use [@mouseover,nodead,harm] Развеивание магии;[@mouseover,nodead,help] Очищение духа;[@target,nodead,harm] Развеивание магии;[@target,nodead,help][@player] Очищение духа
~~~

* Данный макрос позволяет кастовать {{ site.data.spells.quake }} сразу на место под курсором, избавляя от лишнего клика мышкой:  
~~~
#showtooltip
/cast [@cursor] Землетрясение
~~~

* Способности элементалей [Метеорит](https://www.wowhead.com/ru/spell=117588) и [Буря](https://ru.wowhead.com/spell=157375/) на одну кнопку:
~~~
#showtooltip
/cast Метеорит
/cast Буря
~~~

* [Природная стремительность](https://ru.wowhead.com/spell=378081) и [Удар духов стихий](https://ru.wowhead.com/spell=117014/) на одной кнопке. Аналогичны макрос рекомендуется сделать на [Молнию](https://ru.wowhead.com/spell=188196) и [Цепную молни](https://ru.wowhead.com/spell=188443)
~~~
#showtooltip Удар духов стихий
/cast Природная стремительность
/cast [@mouseover,harm,exists,nodead][] Удар духов стихий
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

* Добавить оповещние в чат об использовании какой-либо способности. Сообщение не будет показано, если способность на КД. Не злоупотребляйте этим макросом! Пример для [Наставления предков](https://ru.wowhead.com/spell=108281):
~~~
#showtooltip Наставления предков
/run if GetSpellCooldown("Наставления предков") == 0 then SendChatMessage("Ancestral Guidance","SAY") end
/cast Наставления предков
~~~

## WeakAuras

Рекомендованная сборка от [Amani](https://www.twitch.tv/amanizandalari) – [по этой ссылке](https://wago.io/KbqSzg3ps).

<p align="center">
    <img src="https://media.wago.io/screenshots/KbqSzg3ps/6351036870c70b6bca4d14f6.gif"> 
</p>

<p></p>

{% include button.html name="Сборки WA на Wago.io" link="https://wago.io/search/elemental" %}  

<p></p>


<p></p>

{% include button.html name="Обсудить на сервере Водоворот" link="https://discord.gg/8Bag6kT" %}  

<p></p>
