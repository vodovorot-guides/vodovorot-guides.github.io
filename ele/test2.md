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
6. Используйте вторую [Молнию](https://ru.wowhead.com/spell=188196) с баффами от [Хранителя бурь](https://www.wowhead.com/ru/spell=191634) и [Прилива мощи](https://www.wowhead.com/ru/spell=262303).


## Изменения в патче 10.1


<p></p>

{% include button.html name="Изменения Шамана в патче 10.1" link="https://stormkeeper.ru/2023/05/02/101.html" %}  

<p></p>


С учетом нового сета и изменения талантов, Элем теперь активно использует именно <span style="color:#71d5ff;font-size:1em;">**молниевые**</span> билды как для рейда, так и для Мифик+. Данный гайд рассчитан на использование сетового комплекта из второго сезона Dragonflight, перейти на гайд версии **10.0.7** можно [по этой ссылке](https://stormkeeper.ru/ele/old_guide.html).



## Таланты для Рейда


<hr style="height:1px;background-color:#bbb">
<p></p>


<details markdown=1><summary><b><span style="color:#f16f25;font-size:1em;">**Огненный**</span> билд для боя против одной цели из первого сезона:</b></summary>
<p></p>

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSrUSCAJlkUSKBSiDEBAAAAAoFgUSCaCItkk2BKhgQSAC?width=700&bgcolor=262b39&locale=ru_RU" width="710" height="450"></iframe>

<p></p>

</details>
<p></p>

<hr style="height:1px;background-color:#bbb">
<p></p>



Основной <span style="color:#71d5ff;font-size:1em;">**молниевый**</span> билд для боя против одной цели:

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoVSSLJUSSLRDRJQiEAAAAAgSASJJkiEItkkWAkkEAC?width=700&bgcolor=262b39&locale=ru_RU" width="710" height="450"></iframe>

<p></p>



Гибридный <span style="color:#71d5ff;font-size:1em;">**молниевый**</span> билд для рейда:

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoVSSLJSRSLRDRJQiEAAAAAgSASJJkiEItkkWAkkEAC?width=700&bgcolor=262b39&locale=ru_RU" width="710" height="450"></iframe>

<p></p>

## Таланты для Мифик+


Основной <span style="color:#71d5ff;font-size:1em;">**молниевый**</span> билд для Мифик+ и АоЕ:

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoVSSLJJlk0S0QAkIBAAAAAoEgUSCpIpISLJpFgSCBgA?width=700&bgcolor=262b39&locale=ru_RU" width="710" height="450"></iframe>

<p></p>
