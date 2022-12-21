---
layout: page
last_update: 2022-12-13
title: Гайд на Элем Шамана
wow: 10.0.2
toc: true
author: Amani
description: Большое руководство по всем аспектам игры за Шамана Стихии. Здесь разобраны билды талантов, приоритет заклинаний, подбор экипировки, настройка интерфейса, макросы и WA и многое другое.
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

И <span style="color:#71d5ff;font-size:1em;">**молниевые**</span>, и <span style="color:#f16f25;font-size:1em;">**огненные**</span> билды актуальны в зависимости от энкаунтера. Не существует одного билда на все случаи жизни, но вы можете модифицировать ваш любимый билд под необходимые ситуации.

В рейде используются различные комбинации данных билдов, например под выход аддов вы хотите использовать [Хранитель бурь](https://www.wowhead.com/ru/spell=191634), а для урона по боссу – [Первозданную волну](https://www.wowhead.com/ru/spell=326059/) с талантом [Первозданный выброс](https://www.wowhead.com/ru/spell=386474). Ниже будут представлены рейдовые билды под каждого босса, а еще больше вариантов можно найти на [Warcraftlogs](https://www.warcraftlogs.com/).

## <span style="color:#71d5ff;font-size:1em;">**Молниевый**</span> билд

Основные таланты для любого <span style="color:#71d5ff;font-size:1em;">**молниевого**</span> билда это [Хранитель бурь](https://www.wowhead.com/ru/spell=191634), [Безжалостное бедствие](https://www.wowhead.com/ru/spell=382685/) и [Призыв грома](https://www.wowhead.com/ru/spell=378241/).

Также часто берутся [Ледяная ярость](https://ru.wowhead.com/spell=210714) и [Электрический шок](https://ru.wowhead.com/spell=382086). Они практически не используются на АоЕ, но вот в бою против одной цели необходимо поддерживать на враге дебафф от [Электрического шока](https://ru.wowhead.com/spell=382086). 

Также важно правильное отыгрывание таланта [Прилив мощи](https://www.wowhead.com/ru/spell=262303). Он используется не во всех билдах, однако очень важно помнить о нем в бою против одной цели. Этот талант усиливает следующее после [Земного шока](https://ru.wowhead.com/spell=8042) и [Удара духов стихий](https://www.wowhead.com/ru/spell=117014) заклинание, добавляя ему дополнительные эффекты.

В <span style="color:#71d5ff;font-size:1em;">**молниевом**</span> билде нас интересует именно бафф [Молнии](https://ru.wowhead.com/spell=188196) от [Прилива мощи](https://www.wowhead.com/ru/spell=262303). Он добавляет две дополнительные [Перегрузки](https://ru.wowhead.com/spell=168534), которые к тому же усиливаются от таланта [Хранитель бурь](https://www.wowhead.com/ru/spell=191634). То есть мы хотим обе [Молнии](https://ru.wowhead.com/spell=188196) баффнутые [Хранителем бурь](https://www.wowhead.com/ru/spell=191634) дополнительно усилить [Приливом мощи](https://www.wowhead.com/ru/spell=262303).

Данная комбинация называется **Surge-combo** (от англ. [Surge of Power](https://www.wowhead.com/spell=262303)) и выглядит следующим образом (пример при использовании талантов [Око бури](https://www.wowhead.com/ru/spell=381708/) и [Поток силы](https://www.wowhead.com/ru/spell=385923/)):
1. Накопите **58** ед. Энергии Водоворота и используйте [Хранитель бурь](https://www.wowhead.com/ru/spell=191634).
2. Используйте [Земной шок](https://www.wowhead.com/ru/spell=8042) – у вас осталось **8** ед. Энергии Водоворота и вы получили бафф [Прилива мощи](https://www.wowhead.com/ru/spell=262303).
3. Используйте [Молнию](https://ru.wowhead.com/spell=188196), после которой вылетят **3** [Перегрузки](https://ru.wowhead.com/spell=168534) (**1** от [Хранителя бурь](https://www.wowhead.com/ru/spell=191634) и **2** от [Прилива мощи](https://www.wowhead.com/ru/spell=262303)). У вас получится **30** ед. Энергии Водоворота.
4. Используйте [Выброс лавы](https://www.wowhead.com/ru/spell=51505/), после чего будет **42** ед. Энергии Водоворота.
5. Используйте [Ледяной шок](https://www.wowhead.com/ru/spell=196840), что даст **50** ед. Энергии Водоворота и бафф от [Электрического шока](https://ru.wowhead.com/spell=382086).
6. Используйте вторую [Молнию](https://ru.wowhead.com/spell=188196) с баффами от [Хранителя бурь](https://www.wowhead.com/ru/spell=191634), [Прилива мощи](https://www.wowhead.com/ru/spell=262303) и [Электрического шока](https://ru.wowhead.com/spell=382086).

## <span style="color:#f16f25;font-size:1em;">**Огненный**</span> билд

<span style="color:#f16f25;font-size:1em;">**Огненные**</span> билды подразумевают активное использование [Первозданной волны](https://www.wowhead.com/ru/spell=326059/), [Укоренившихся стихий](https://www.wowhead.com/ru/spell=378270) / [Перерождения](https://www.wowhead.com/ru/spell=114050/), а также талантов с правой стороны древа в различных комбинациях.

Основной урон в бою против одной цели идет от [Выброса лавы](https://www.wowhead.com/ru/spell=51505), который получает усиление от различных талантов. Однако на АоЕ основным источником урона всё также остается [Цепная молния](https://www.wowhead.com/ru/spell=188443/), которая под действием [Перерождения](https://www.wowhead.com/ru/spell=114050) превращается в [Поток лавы](https://www.wowhead.com/ru/spell=114074).





## Таланты для Рейда

У Элема есть большое разнообразие билдов, которые крайне близки по эффективности. Очень хорошо себя показывает [Хранитель бурь](https://www.wowhead.com/ru/spell=191634) в тех случаях, где можно его использовать под выход аддов.

Билды для рейда являются **рекомендацией** для тех, кто не хочет подбирать таланты самостоятельно. На каждом боссе так или иначе будут использоваться разные билды, которые можно увидеть на [Warcraftlogs](https://www.warcraftlogs.com/) и [Subcreation](https://raid.subcreation.net/enhancement-shaman.html).
{: class="bordered"}

### Эраног

[Хранитель бурь](https://www.wowhead.com/ru/spell=191634) + [Первозданная волна](https://ru.wowhead.com/spell=375982) являются основными талантами. Пример билда:

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSrUSSLJQCJNKBSSSAAAAAAAlAkSS0STUgUSSSLASSAA?width=700&bgcolor=262b39&locale=ru_RU" width="710" height="450"></iframe>

<p></p>

### Террос

Стандартный СТ билд. Очко из [Повелителя изначальных стихий](https://ru.wowhead.com/spell=117013) можно перекинуть в [Равновесие стихий](https://www.wowhead.com/ru/spell=378271/), разница между ними в районе погрешности:

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSrUSCAJlkUoElUSCRAAAAAAQJApkESRSBSJJJtAHgkAA?width=700&bgcolor=262b39&locale=ru_RU" width="710" height="450"></iframe>

<p></p>

### Совет Стихий

На Совете можно использовать как огненный, так и молниевый билды. Пример наиболее популярного огненного билда:

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0SrIJtkACSjSOQLtkQOAAAAAAAUCQKJhUIFQJJJlUCQQSA?width=700&bgcolor=262b39&locale=ru_RU" width="710" height="450"></iframe>

<p></p>

### Сеннарт

Стандартный СТ билд с [Повелителем изначальных стихий](https://ru.wowhead.com/spell=117013):

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSrUSCAJlkUoElUSCRAAAAAAQJApkESRSBSJJJtAHgkAA?width=700&bgcolor=262b39&locale=ru_RU" width="710" height="450"></iframe>

<p></p>

### Дафия

[Хранитель бурь](https://www.wowhead.com/ru/spell=191634) + [Первозданная волна](https://ru.wowhead.com/spell=375982) для бурста по мелким аддам на платформе и урона в одну цель:

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSrUSSLJQCJNKBSSSAAAAAAAlAkSS0STUgUSSSLASSAA?width=700&bgcolor=262b39&locale=ru_RU" width="710" height="450"></iframe>

<p></p>

### Курог

Стандартный СТ билд с [Повелителем изначальных стихий](https://ru.wowhead.com/spell=117013):

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSrUSCAJlkUoElUSCRAAAAAAQJApkESRSBSJJJtAHgkAA?width=700&bgcolor=262b39&locale=ru_RU" width="710" height="450"></iframe>

<p></p>

### Денна

Стандартный СТ билд, но с [Тотемом жидкой магмы](https://ru.wowhead.com/spell=192222) под спавны аддов:

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSrUSCAJlkUoEl0SCRAAAAAAQJApkESRSBSJJJtAHgkAA?width=700&bgcolor=262b39&locale=ru_RU" width="710" height="450"></iframe>

<p></p>

### Рашагет

[Хранитель бурь](https://www.wowhead.com/ru/spell=191634) + [Первозданная волна](https://ru.wowhead.com/spell=375982) для бурста по аддам на переходках и для урона в одну цель:

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSrUSSLJQCJNKBSSSAAAAAAAlAkSS0STUgUSSSLASSAA?width=700&bgcolor=262b39&locale=ru_RU" width="710" height="450"></iframe>

<p></p>


### Таланты для Мифик+

<span style="color:#71d5ff;font-size:1em;">**Молниевый**</span> билд, вариант через [Удар духов стихий](https://ru.wowhead.com/spell=117014):

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoVSSJJJlDk0SUQQBJSAAAAAAQLAKJJCJFIlkk0AIJJBA?width=700&bgcolor=262b39&locale=ru_RU" width="710" height="450"></iframe>

<p></p>

Данный билд является по сути «стандартным» билдом для Мифик+ и точкой отсчета для экспериментов. Довольно сбалансированный билд в соотношении урона по одной цели и АоЕ. Основные бурсты это [Элементаль бури](https://www.wowhead.com/ru/spell=192249) и [Хранитель бурь](https://www.wowhead.com/ru/spell=191634), кулдаун которых к тому же сокращается за счет [Вспышки молнии](https://www.wowhead.com/ru/spell=381936).

Несмотря на взятые таланты [Ледяная ярость](https://ru.wowhead.com/spell=210714) и [Электрический шок](https://ru.wowhead.com/spell=382086), усиленные [Ледяные шоки](https://ru.wowhead.com/spell=196840) используются только в бою против **1-2** целей, потому что уже на **3** целях это потеря ДПС. В результате чего АоЕ ротация (не считая бурстов) представляет собой буквально спам трех кнопок – [Цепной молнии](https://ru.wowhead.com/spell=188443), [Удара духов стихий](https://ru.wowhead.com/spell=117014) и [Землетрясения](https://ru.wowhead.com/spell=61882). Главное не забывать менять цели при касте спендеров для равномерного развешивания [Грозового разрядника](https://www.wowhead.com/spell=210689).

В бою против одной цели кнопок становится больше – необходимо поддерживать [Огненный шок](https://ru.wowhead.com/spell=188389), кастовать [Выброс лавы](https://ru.wowhead.com/spell=51505) по кулдауну (но только если нет активного [Элементаля бури](https://www.wowhead.com/ru/spell=192249)) и поддерживать на цели дебафф [Электрического шока](https://ru.wowhead.com/spell=382086) с помощью [Ледяного шока](https://ru.wowhead.com/spell=196840).

[Землетрясение](https://ru.wowhead.com/spell=61882) в этом билде в бою против одной цели не используется, несмотря на взятый талант [Отголоски Великого Раскола](https://ru.wowhead.com/spell=384087). Если нет дополнительных целей, то вся энергия Водоворота тратится на [Удар духов стихий](https://ru.wowhead.com/spell=117014). 

<span style="color:#71d5ff;font-size:1em;">**Молниевый**</span> билд, вариант через [Прилив мощи](https://www.wowhead.com/ru/spell=262303):

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoVSSJJJlItENEUQiEAAAAAA0CgSSiQSBSJJJNASSSA?width=700&bgcolor=262b39&locale=ru_RU" width="710" height="450"></iframe>

<p></p>

Вариация билда для тех, кто не любит использование [Удара духов стихий](https://ru.wowhead.com/spell=117014) на АоЕ. [Прилив мощи](https://www.wowhead.com/ru/spell=262303) также дает неплохой урон в бою против 1 и 6+ целей.



<span style="color:#f16f25;font-size:1em;">**Огненный**</span> билд, упор в максимальный бурст:

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0SpIJlkACSJpFOQLJkDAAAAAAAtAkSSIkUASSSLlAkkEA?width=700&bgcolor=262b39&locale=ru_RU" width="710" height="450"></iframe>

<p></p>

Эта версия <span style="color:#f16f25;font-size:1em;">**огненного**</span> билда является более бурстовой, за счет сочетания сразу нескольких способностей:
* [Перерождение](https://ru.wowhead.com/spell=114050), которое продлевается с помощью таланта [Дальние пределы](https://ru.wowhead.com/spell=381787).
* [Хранитель бурь](https://www.wowhead.com/ru/spell=191634) как бурст с коротким кулдауном.
* [Первозданная волна](https://ru.wowhead.com/spell=375982) с баффом на Скорость от таланта [Расколотые стихии](https://ru.wowhead.com/spell=382042).
* [Тотем жидкой магмы](https://www.wowhead.com/ru/spell=192222/), который помогает развешивать [Огненные шоки](https://ru.wowhead.com/spell=188389).

Этот билд не зависит от проков таланта [Укоренившиеся стихии](https://www.wowhead.com/ru/spell=378270/), так как основная идея билда – реализация [Перерождения](https://ru.wowhead.com/spell=114050) на больших запулах, где гораздо эффективней версия через двухминутный кулдаун, а не прок от [Выброса лавы](https://ru.wowhead.com/spell=51505).

Однако в случае неудачного развития событий в этом билде вы потеряете гораздо больше, чем в молниевом. Данный билд критичен к большим запулам и лучше всего себя раскрывает в подземельях типа Академии Алгет'ар, а также в скоординированной группе.
{: class="bordered"}

Основная идея билда – мега-бурст через комбинацию различных талантов. Сначала стоит скастовать [Хранитель бурь](https://www.wowhead.com/ru/spell=191634), потом с помощью [Тотема жидкой магмы](https://www.wowhead.com/ru/spell=192222/) и сброса его кулдауна от [Возвращения тотемов](https://www.wowhead.com/ru/spell=108285/) наложить [Огненные шоки](https://ru.wowhead.com/spell=188389), после чего скастовать [Первозданну волну](https://ru.wowhead.com/spell=375982), затем [Перерождение](https://ru.wowhead.com/spell=114050) и один [Выброс лавы](https://ru.wowhead.com/spell=51505).

В результате вы получите **15** секунд [Перерождения](https://ru.wowhead.com/spell=114050) с баффом **60%** Скорости от таланта [Расколотые стихии](https://ru.wowhead.com/spell=382042), а ваша [Цепная молния](https://ru.wowhead.com/spell=188443) превратится в [Поток лавы](https://ru.wowhead.com/spell=114074). Плюс каждое [Землетрясение](https://ru.wowhead.com/spell=61882) будет на **2.5** секунд продлевать длительность [Перерождения](https://ru.wowhead.com/spell=114050) за счет таланта [Дальние пределы](https://ru.wowhead.com/spell=381787). На достаточно большом запуле это может дать более **40** секунд активного [Перерождения](https://ru.wowhead.com/spell=114050)!

В бою против одной цели этот билд слабее, чем молниевый, так что это будет не лучший выбор на [Тиранические](https://www.wowhead.com/ru/affix=9/) недели.
{: class="bordered"}

<span style="color:#f16f25;font-size:1em;">**Огненный**</span> билд, сустейн урон:

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0SpIJlkEAShS0SLJOQCAAAAAA0CQKJhQSBIJJtUCQSSA?width=700&bgcolor=262b39&locale=ru_RU" width="710" height="450"></iframe>

<p></p>

Этот билд не так сильно полагается на бурст во время [Перерождения](https://ru.wowhead.com/spell=114050) и наносит более равномерный урон. В нем можно заменить [Повторный толчок](https://ru.wowhead.com/spell=273221) на [Прилив мощи](https://ru.wowhead.com/spell=262303) и взять [Повелитель изначальных стихий](https://ru.wowhead.com/spell=117013) вместо [Тотема жидкой магмы](https://ru.wowhead.com/spell=192222).


# Приоритет заклинаний


Приоритет способностей ниже читается следующим образом:
1. Выберите интересующие вас таланты с помощью чекбоксов, после чего приоритет изменится соответствующим образом.
2. Читайте приоритет с первого пункта и вниз. Если вы можете «выполнить» первый пункт, например когда способность не на кулдауне и соблюдены другие условия, вы используете эту способность.
3. Если вы не можете «выполнить» какой-то пункт, то переходите к следующему пункту до тех пор, пока не встретите выполнимый.
4. После каждого применения заклинаний мысленно возвращайтесь в начало списка приоритетов и проходите по всем пунктам заново.

<hr style="height:1px;background-color:#bbb">
<p></p>

Выберите используемые таланты, и приоритет способностей соответственно изменится:

  <ul class="rotation_switches" style="list-style-type: none;">
  <li markdown="span" class="rotation_switch"><input type="checkbox" id="rotation_switch_fire"> [Элементаль огня](https://ru.wowhead.com/spell=198067)</li>
  <li markdown="span" class="rotation_switch"><input type="checkbox" id="rotation_switch_storm"> [Элементаль бури](https://ru.wowhead.com/spell=192249)</li>    
  <li markdown="span" class="rotation_switch"><input type="checkbox" id="rotation_switch_lmt"> [Тотем жидкой магмы](https://www.wowhead.com/ru/spell=192222/)</li>
  <li markdown="span" class="rotation_switch"><input type="checkbox" id="rotation_switch_pw"> [Первозданная волна](https://ru.wowhead.com/spell=375982)</li>    
  <li markdown="span" class="rotation_switch"><input type="checkbox" id="rotation_switch_sk"> [Хранитель бурь](https://ru.wowhead.com/spell=191634)</li>    
  <li markdown="span" class="rotation_switch"><input type="checkbox" id="rotation_switch_asc"> [Перерождение](https://ru.wowhead.com/spell=114050)</li>
  <li markdown="span" class="rotation_switch"><input type="checkbox" id="rotation_switch_dre"> [Укоренившиеся стихии](https://ru.wowhead.com/spell=378270)</li>
  <li markdown="span" class="rotation_switch"><input type="checkbox" id="rotation_switch_sop"> [Прилив мощи](https://www.wowhead.com/ru/spell=262303/)</li>   
  <li markdown="span" class="rotation_switch"><input type="checkbox" id="rotation_switch_mote"> [Властелин стихий](https://ru.wowhead.com/spell=16166)</li> 
  <li markdown="span" class="rotation_switch"><input type="checkbox" id="rotation_switch_if"> [Ледяная ярость](https://ru.wowhead.com/spell=210714)</li> 
  <li markdown="span" class="rotation_switch"><input type="checkbox" id="rotation_switch_flux"> [Расплавленная порода](https://www.wowhead.com/ru/spell=381776/)</li>
  <li markdown="span" class="rotation_switch"><input type="checkbox" id="rotation_switch_es"> [Электрический шок](https://www.wowhead.com/ru/spell=382086)</li>
  <li markdown="span" class="rotation_switch"><input type="checkbox" id="rotation_switch_ls"> [Волна лавы](https://ru.wowhead.com/spell=77756) или [Извержение говорящего с ветром](https://www.wowhead.com/ru/spell=378268)</li>
  <li markdown="span" class="rotation_switch"><input type="checkbox" id="rotation_switch_eb"> [Удар духов стихий](https://ru.wowhead.com/spell=117014)</li>
  <li markdown="span" class="rotation_switch"><input type="checkbox" id="rotation_switch_eogs"> [Отголоски Великого Раскола](https://ru.wowhead.com/spell=384087)</li>
</ul>

<hr style="height:1px;background-color:#bbb">
<p></p>

**Опенер:**
1. {:.sk-apl .no-sop-apl}[Хранитель бурь](https://www.wowhead.com/ru/spell=191634/) за **5** секунд до пула.
1. {:.no-if-apl}[Выброс лавы](https://www.wowhead.com/ru/spell=51505) за **1.5** секунд до пула.
2. {:.if-apl}[Ледяная ярость](https://ru.wowhead.com/spell=210714) за **1.5** секунд до пула.
3. {:.fire-apl}[Элементаль огня](https://www.wowhead.com/ru/spell=198067).
4. {:.storm-apl}[Элементаль бури](https://www.wowhead.com/ru/spell=192249).
5. {:.no-pw-apl}[Огненный шок](https://www.wowhead.com/ru/spell=188389).
6. {:.pw-apl}[Первозданная волна](https://www.wowhead.com/ru/spell=326059).
7. {:.if-apl}[Ледяной шок](https://www.wowhead.com/ru/spell=196840/).
8. [Выброс лавы](https://www.wowhead.com/ru/spell=51505).
9. {:.sk-apl .sop-apl}Придержите [Хранитель бурь](https://www.wowhead.com/ru/spell=191634/) для комбо с [Приливом мощи](https://www.wowhead.com/ru/spell=262303/), описанным выше.


<hr style="height:1px;background-color:#bbb">
<p></p>

**Бой против одной цели:**
1. {:.fire-apl}[Элементаль огня](https://ru.wowhead.com/spell=198067).
2. {:.storm-apl}[Элементаль бури](https://ru.wowhead.com/spell=192249).
3. {:.lmt-apl}[Возвращение тотемов](https://www.wowhead.com/ru/spell=108285), если [Тотем жидкой магмы](https://www.wowhead.com/ru/spell=192222/) на кулдауне.
4. {:.lmt-apl}[Тотем жидкой магмы](https://www.wowhead.com/ru/spell=192222/).
5. {:.pw-apl}[Первозданная волна](https://ru.wowhead.com/spell=375982).
6. {:.no-sop-apl}[Огненный шок](https://ru.wowhead.com/spell=188389), если длительность дебаффа на цели менее **5.4** секунд.
6. {:.sop-apl}[Огненный шок](https://ru.wowhead.com/spell=188389), если длительность дебаффа на цели менее **5.4** секунд и у вас нет баффа от [Прилива мощи](https://www.wowhead.com/ru/spell=262303/).
7. {:.sk-apl .asc-apl}[Хранитель бурь](https://ru.wowhead.com/spell=191634), если [Перерождение](https://ru.wowhead.com/spell=114050) не активно.
7. {:.sk-apl .no-asc-apl}[Хранитель бурь](https://ru.wowhead.com/spell=191634).
8. {:.asc-apl .sk-apl}[Перерождение](https://ru.wowhead.com/spell=114050), если [Хранитель бурь](https://ru.wowhead.com/spell=191634) не активен.
8. {:.asc-apl .no-sk-apl}[Перерождение](https://ru.wowhead.com/spell=114050).
9. {:.sk-apl .mote-apl .sop-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505) если есть бафф от [Хранителя бурь](https://ru.wowhead.com/spell=191634), но нет баффов от талантов [Властелин стихий](https://ru.wowhead.com/spell=16166) и [Прилив мощи](https://www.wowhead.com/ru/spell=262303/).
9. {:.sk-apl .mote-apl .no-sop-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505) если есть бафф от [Хранителя бурь](https://ru.wowhead.com/spell=191634), но нет баффаот таланта [Властелин стихий](https://ru.wowhead.com/spell=16166).
9. {:.sk-apl .no-mote-apl .sop-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505) если есть бафф от [Хранителя бурь](https://ru.wowhead.com/spell=191634), но нет баффа от таланта [Прилив мощи](https://www.wowhead.com/ru/spell=262303/).
10. {:.sk-apl .mote-apl .no-sop-apl}[Молния](https://ru.wowhead.com/spell=188196) с баффом от [Хранителя бурь](https://ru.wowhead.com/spell=191634) и [Властелина стихий](https://ru.wowhead.com/spell=16166).
10. {:.sk-apl .no-mote-apl .no-sop-apl}[Молния](https://ru.wowhead.com/spell=188196) с баффом от [Хранителя бурь](https://ru.wowhead.com/spell=191634).
11. {:.sop-apl}[Молния](https://ru.wowhead.com/spell=188196) с баффом от [Прилива мощи](https://www.wowhead.com/ru/spell=262303/).
16. {:.if-apl .es-apl}[Ледяной шок](https://ru.wowhead.com/spell=196840), если у вас есть бафф от [Ледяной ярости](https://ru.wowhead.com/spell=210714), а на цели нет дебаффа от [Электрического шока](https://www.wowhead.com/ru/spell=382086).
17. {:.if-apl .flux-apl}[Ледяной шок](https://ru.wowhead.com/spell=196840), если у вас есть бафф от [Ледяной ярости](https://ru.wowhead.com/spell=210714), но нет баффа от [Расплавленной породы](https://www.wowhead.com/ru/spell=381776/).
18. {:.ls-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505) с баффом от [Волны лавы](https://ru.wowhead.com/spell=77756).
19. {:.eogs-apl .no-eb-apl}[Землетрясение](https://ru.wowhead.com/spell=61882) с баффом от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=384087).
20. {:.no-eb-apl}[Земной шок](https://ru.wowhead.com/spell=8042).
21. {:.eb-apl}[Удар духов стихий](https://ru.wowhead.com/spell=117014).
22. {:.no-dre-apl .flux-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505) с баффом от [Расплавленной породы](https://www.wowhead.com/ru/spell=381776/).
23. {:.dre-apl .flux-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505).
23. {:.dre-apl .no-flux-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505).
24. {:.if-apl}[Ледяная ярость](https://ru.wowhead.com/spell=210714).
26. {:.if-apl .no-es-apl .no-flux-apl}[Ледяной шок](https://ru.wowhead.com/spell=196840) с баффом от [Ледяной ярости](https://ru.wowhead.com/spell=210714).
27. {:.storm-apl}[Молния](https://ru.wowhead.com/spell=188196) во время активного [Элементаля бури](https://ru.wowhead.com/spell=192249).
28. {:.no-dre-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505).
29. [Молния](https://ru.wowhead.com/spell=188196).
30. [Огненный шок](https://ru.wowhead.com/spell=188389) во время передвижения.
31. [Ледяной шок](https://ru.wowhead.com/spell=196840) во время передвижения.

**АоЕ бой:**
1. {:.fire-apl}[Элементаль огня](https://ru.wowhead.com/spell=198067).
2. {:.storm-apl}[Элементаль бури](https://ru.wowhead.com/spell=192249).
3. {:.lmt-apl}[Тотем жидкой магмы](https://www.wowhead.com/ru/spell=192222/). 
4. {:.lmt-apl}[Возвращение тотемов](https://www.wowhead.com/ru/spell=108285), если [Тотем жидкой магмы](https://www.wowhead.com/ru/spell=192222/) на кулдауне, а с целей спали [Огненные шоки](https://ru.wowhead.com/spell=188389).
5. {:.pw-apl}[Первозданная волна](https://ru.wowhead.com/spell=375982) и на цель без [Огненного шока](https://ru.wowhead.com/spell=188389).
6. {:.pw-apl}[Огненный шок](https://ru.wowhead.com/spell=188389) на цель без этого дебаффа.
7. {:.sk-apl}[Хранитель бурь](https://ru.wowhead.com/spell=191634).
8. {:.asc-apl}[Перерождение](https://ru.wowhead.com/spell=114050).
9. {:.pw-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505), если под [Огненным шоком](https://ru.wowhead.com/spell=188389) максимальное количество целей и у вас есть бафф от [Первозданной волны](https://ru.wowhead.com/spell=375982).
10. {:.asc-apl}[Поток лавы](https://www.wowhead.com/ru/spell=114074/) во время активного [Перерождения](https://ru.wowhead.com/spell=114050).
11. {:.dre-apl}[Поток лавы](https://www.wowhead.com/ru/spell=114074/) во время активного [Перерождения](https://ru.wowhead.com/spell=114050).
12. {:.storm-apl}[Буря](https://ru.wowhead.com/spell=157375/) с панели питомца или макросом, если [Элементаль бури](https://ru.wowhead.com/spell=192249) имеет бафф [Призыв молнии](https://ru.wowhead.com/spell=157348).
13. {:.fire-apl}[Метеорит](https://ru.wowhead.com/spell=117588) с панели питомца или макросом.
14. {:.if-apl .es-apl}[Ледяная ярость](https://ru.wowhead.com/spell=210714), если в бою не более **2** целей, либо если в ближайшие несколько секунд предстоит перебежка.
15. {:.if-apl .es-apl}[Ледяной шок](https://ru.wowhead.com/spell=196840), если на целях нет дебаффа от [Электрического шока](https://www.wowhead.com/ru/spell=382086) и в бою не более **2** целей.
16. {:.no-eogs-apl}[Землетрясение](https://ru.wowhead.com/spell=61882), если у вас достаточно Энергии Водоворота.
17. {:.eogs-apl}[Землетрясение](https://ru.wowhead.com/spell=61882) c баффом от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=384087), если у вас достаточно Энергии Водоворота.
18. {:.no-eb-apl .eogs-apl}[Земной шок](https://ru.wowhead.com/spell=8042), если у вас нет баффа от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=384087) и если у вас достаточно Энергии Водоворота.
18. {:.eb-apl .eogs-apl}[Удар духов стихий](https://www.wowhead.com/ru/spell=117014), если у вас нет баффа от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=384087) и если у вас достаточно Энергии Водоворота.
19. [Цепная молния](https://www.wowhead.com/ru/spell=188443).

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


## Выбор утилити для Мифик+

Данный раздел дополняется. Пишите [Амани](https://www.twitch.tv/amanizandalari) для добавления сюда информации по вспомогательным способностям в подземельях.
{: class="bordered"}

**Академия Алгет'ар:**
* [Тотем трепета](https://www.wowhead.com/ru/spell=8143) нужен для снятия [Монотонной лекции](https://www.wowhead.com/ru/spell=388392), которую накладывает [Хаотичный учебник](https://www.wowhead.com/ru/npc=196044) (треш перед Вексамом), особенно в случае большого запула.
* [Развеивание магии](https://www.wowhead.com/ru/spell=370/) снимает [Небесный щит](https://www.wowhead.com/ru/spell=387955/) [Алгет'арского целителя](https://www.wowhead.com/ru/npc=196203/).
* [Тотем противоядия](https://www.wowhead.com/ru/spell=383013) пригодится в бою c боссом [Заросшее древо](https://www.wowhead.com/ru/npc=196482), для снятия [Токсина плеточника](https://www.wowhead.com/ru/spell=389033) с танка.


**Рубиновые Омуты Жизни:**
* [Развеивание магии](https://www.wowhead.com/ru/spell=370/) снимает [Ледяной щит](https://www.wowhead.com/ru/spell=372749/) [Ткача Холода Морозной Вспышки](https://www.wowhead.com/ru/npc=188067), прерывая чтение этого заклинания.

**Лазурное Хранилище:**
* [Тотем трепета](https://www.wowhead.com/ru/spell=8143) можно использовать для снятия [Изгнания в сон](https://www.wowhead.com/ru/spell=386546/), которое кастуют элементали.
* [Развеивание магии](https://www.wowhead.com/ru/spell=370/) снимает [Сверкающую чешую](https://www.wowhead.com/ru/spell=374778/), которую накладывают [Стражи хранилища](https://www.wowhead.com/ru/npc=190510/) перед вторым боссом.
* [Поступь духа](https://www.wowhead.com/ru/spell=58875/) позволяет полностью снять дебафф от [Чародейской изоляции](https://www.wowhead.com/ru/spell=207278/) на первом боссе, без необходимости подпрыгивать.


**Нападаение клана Нокхуд:**
* [Тотем трепета](https://www.wowhead.com/ru/spell=8143) может снять эффект [Отпугивающего рыка](https://www.wowhead.com/ru/spell=386063/) на третьем боссе ([Маруук](https://www.wowhead.com/ru/npc=186338/)), игрок всё равно получит большой урон от наложения этого эффекта. Не стойте в круге!
* [Тотем трепета](https://www.wowhead.com/ru/spell=8143) также снимает эффект [Кровожадного вопля](https://www.wowhead.com/ru/spell=373395/), который накладывает [Батак](https://www.wowhead.com/ru/npc=193462/) перед финальным боссом.
* [Развеивание магии](https://www.wowhead.com/ru/spell=370/) снимает [Щит бури](https://www.wowhead.com/ru/spell=386223), который накладывает [Яростная бури](https://www.wowhead.com/ru/npc=186615/) на треше перед вторым боссом.
* [Очищение духа](https://www.wowhead.com/ru/spell=51886) позволяет снять дебафф [Хватка мертвеца](https://www.wowhead.com/ru/spell=387615) перед третьим боссом.

**Квартал Звезд:**
* [Очищение духа](https://www.wowhead.com/ru/spell=51886) снимает дебафф от [Луча дезинтеграции](https://www.wowhead.com/ru/spell=207981/) [Баалгара Бдительного](https://www.wowhead.com/ru/npc=104274) перед вторым боссом.
* [Поступь духа](https://www.wowhead.com/ru/spell=58875/) позволяет полностью снять дебафф от [Чародейской изоляции](https://www.wowhead.com/ru/spell=207278/) на первом боссе, без необходимости подпрыгивать.


**Некрополь Призрачной Луны:**
* [Развеивание магии](https://www.wowhead.com/ru/spell=370/) снимает бафф [Жуткая концентрация](https://www.wowhead.com/ru/spell=398151), который накладывают [Верные служительницы из клана Призрачной Луны](https://www.wowhead.com/ru/npc=75506).
* [Развеивание магии](https://www.wowhead.com/ru/spell=370/) также позвоялет снять щит с [Эксгумированных духов](https://www.wowhead.com/ru/npc=75979), ощутимо уменьшя общее количество их здоровья.
* [Тотем хватки земли](https://www.wowhead.com/ru/spell=51485/) будет полезен на первом боссе, чтобы не дать подойти к боссу [Темному сектанту](https://www.wowhead.com/ru/spell=153153).

**Храм Нефритовой Змеи:**
* [Тотем трепета](https://www.wowhead.com/ru/spell=8143) снимает эффект [Потустороннего крика](https://www.wowhead.com/ru/spell=395859/) от [Навязчивого ша](https://www.wowhead.com/ru/npc=58865).
* [Тотем трепета](https://www.wowhead.com/ru/spell=8143) также снимает сон от [Вялого монолога](https://www.wowhead.com/ru/spell=395872/), который накладывает [Говорящая рыба](https://www.wowhead.com/ru/npc=59546/).

**Чертоги Доблести:**
* [Развеивание магии](https://www.wowhead.com/ru/spell=370/) снимает бафф [Защитный свет](https://www.wowhead.com/ru/spell=198745/), который накладывают на себя [Закаленные бурей стражи](https://www.wowhead.com/ru/npc=96574).

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
* На получение **1%** Скорости нужно **170** единиц рейтинга Критического удара.
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

Приоритет статов для **рейдового** <span style="color:#f16f25;font-size:1em;">**огненного**</span> билда следующий:

* **Интеллект** > **Искусность** > **Скорость** > **Критический удар** > **Универсальность**.

Приоритет статов для любого <span style="color:#71d5ff;font-size:1em;">**молниевого**</span>, а также для всех **Мифик+** билдов следующий:

* **Интеллект** > **Скорость** > **Критический удар** > **Искусность** > **Универсальность**.

# Экипировка

## Комплект классовых доспехов

Как можно быстрее получите из рейда **2/4** куска сетового комплекта. Предметы для него падают с последних пяти боссов рейда. Шаман делит классовые куски с **Паладином** и **Жрецом**.

Сет выпадает из следующих боссов:
* [Поножи зачарованной земли](https://www.wowhead.com/ru/item=200400) – **Сеннарт Дыхание Льда**.
* [Рукавицы зачарованной земли](https://www.wowhead.com/ru/item=200398) – **Дафия Перерожденная**.
* [Одеяние зачарованной земли](https://www.wowhead.com/ru/item=200396) – **Курог Зловещий Тотем**.
* [Кальдерры зачарованной земли](https://www.wowhead.com/ru/item=200401) – **Хранительница стаи Денна**.
* [Большой шлем зачарованной земли](https://www.wowhead.com/ru/item=200399) – **Рашагет Пожирательница бурь**.

Помимо Рейда сетовый комплект можно также получить из еженедельного сундука за Мифик+, а в конце января откроется [Катализатор](https://stormkeeper.ru/2022/04/01/catalyst-of-creation.html) с возможностью переделать любой предмет (кроме крафтового) в сетовый.
{: class="bordered"}

Также в Хранилище Воплощений можно выбить кольца с уникальными особенностями:
* [Печать избранного Денны](https://www.wowhead.com/ru/item=195480/) – **Эраног**. «Очень редкий» дроп, лучшее кольцо на АоЕ за счет большого количества Критического удара. В бою против одной цели проиграет кольцам с Искусностью (при использовании рейдового билда).
* [Печать сыновнего долга](https://www.wowhead.com/ru/item=195526) – **Хранительница стаи Денна**. « «Очень редкий» дроп, лучшее кольцо для боя против одной цели, плюс прок на щит. На АоЕ стоит рассмотреть варианты с Критическим ударом.

## Аксессуары

Ниже представлены неплохие аксессуары из Мифик+ и рейда. Полный рейтинг аксессуаров можно найти на [Bloodmallet.com](https://bloodmallet.com/chart/shaman/elemental/trinkets/castingpatchwerk).

**Аксессуары из Мифик+:**
* [Яростное перо](https://www.wowhead.com/ru/item=193677/) – Наступление клана Нокхуд.
* [Инфернальное писание](https://www.wowhead.com/ru/item=137485/) – Квартал Звезд.
* [Рог доблести](https://www.wowhead.com/ru/item=133642/) – Чертоги Доблести.
* [Камень теней исцелителя Бездны](https://www.wowhead.com/ru/item=110007/) – Некрополь Призрачной луны (падает только с лутом на Рестора).

**Аксессуары из Хранилища Воплощений:**
* [Знак воплощения шепота](https://www.wowhead.com/ru/item=194301) – **Совет стихий**. «Очень редкий» дроп, лучший пассивный тринкет.
* [Чародейская леденящая сфера](https://www.wowhead.com/ru/item=194300/) – Совет стихий. 
* [Злопамятный вихрь](https://www.wowhead.com/ru/item=194309/) – Рашагет.


* Крафтовые аксессуары на данный момент проигрывают перечисленным выше вариантам.

WA на все аксессуары есть в [сборке на Элема](https://wago.io/KbqSzg3ps) от [Amani](https://www.twitch.tv/amanizandalari).
{: class="bordered"}

## Крафтовые предметы

<p></p>

{% include button.html name="Обзорная статья по профессиям Dragonflight" link="https://stormkeeper.ru/info/professions.html" %}  

<p></p>

Для крафта лучших предметов необходима [Искра искусности](https://www.wowhead.com/ru/item=190453/), которая выдается по квесту раз в две недели. После получения пятой квестовой [Искры искусности](https://www.wowhead.com/ru/item=190453/), она начнет выпадать с низким шансом из различного контента. 

Количество носимой крафтовой экипировки ограничено количеством [Искр искусности](https://www.wowhead.com/ru/item=190453/), а также наличием на вещах баффов от **Украшения** (максимум **2**).

Крафтовые предметы можно улучшить вплоть до **418** ilvl, для чего потребуется опциональный реагент – [Концентрированный первичный настой](https://ru.wowhead.com/item=198046). Его можно получить в Эпохальном рейде, Мифик+ (от **16** ключа и выше) и на Арене.

Вы можете переделать крафтовые предметы, повышая их ilvl, при этом для рекрафта **не потребуется** [Искра искусности](https://www.wowhead.com/ru/item=190453/), а только базовые реагенты. При рекрафте на предмете остаются зачарования, гнезда для самоцветов и инкрустированные камни.

Лучшим предметом для первого крафта является ожерелье [Аркан стихий](https://www.wowhead.com/ru/item=193001/%D0%B0%D1%80%D0%BA%D0%B0%D0%BD-%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B9?bonus=8960:8840:8836:8902:8783:8784:8780&crafted-stats=36:49&ilvl=418&spec=263). Не забудьте использовать на него [Сложную оправу для медальона](https://www.wowhead.com/ru/item=192994/) чтобы добавить дополнительные сокеты (вплоть до **3**, зависит от качества [Сложной оправы для медальона](https://www.wowhead.com/ru/item=192994/)). 

[Аркан стихий](https://www.wowhead.com/ru/item=193001/%D0%B0%D1%80%D0%BA%D0%B0%D0%BD-%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B9?bonus=8960:8840:8836:8902:8783:8784:8780&crafted-stats=36:49&ilvl=418&spec=263) занимает один из двух слотов **Украшения**, давая прок на вторичные характеристики. 

<p></p>

{% include button.html name="Подробнее про Аркан Стихий, лучшее крафтовое ожерелье" link="https://stormkeeper.ru/2022/12/10/lariat.html" %}  

<p></p>

Вторую  [Искру искусности](https://www.wowhead.com/ru/item=190453/) можно потратить на одноручное оружие, если не повезло с его дропом  из Мифик+ или в Рейде. Третью и далее – на самые слабые слоты экипировки. Со временем стоит также скрафтить инженерские наручи – [Сложные манжеты](https://www.wowhead.com/ru/item=198332/%D1%81%D0%BB%D0%BE%D0%B6%D0%BD%D1%8B%D0%B5-%D0%BC%D0%B0%D0%BD%D0%B6%D0%B5%D1%82%D1%8B?bonus=8840:8836:8902&class=7&crafted-stats=36:36&ilvl=418&spec=263) в которые можно вставить гаджет, например [Переключатель измерений](https://www.wowhead.com/ru/item=198300) или [Тангенциальный корректор жизненной силы](https://www.wowhead.com/ru/item=201409).

Второй слот украшения можно занять одним из перечисленных ниже вариантов. Все остальные, не указанные здесь украшения, слабее представленных:
* [Подкладка из синего шелка](https://www.wowhead.com/ru/item=193946/) – добавляет Искусность при здоровье более **90%**, значение эквивалентно **2-3** самоцветам. Не лучший и не худший вариант.
* [Замедлитель усвоения зелий](https://www.wowhead.com/ru/item=191534) – увеличивает длительность боевого зелья на **15** секунд, полезно под [Жажду крови](https://www.wowhead.com/ru/spell=2825/). Неплохой вариант, но не обязательный. Теряет пользу в Мифик+, так как паки могут жить меньше длительности зелья.
* [Тугие бронзовые ленты](https://www.wowhead.com/ru/item=193941) – можно поставить только в оружие. Хороший вариант для боя против одной цели, но слабый на АоЕ.

С ростом качества на Украшениях снижается уровень рецепта, а значит и его сложность – чем ниже сложность рецепта, тем проще крафтеру сделать предмет более высокого уровня предмета.
{: class="bordered"}

Помните, что всегда можно переделать крафтовый предмет, заменив украшение на другое, а также изменив вторичные характеристики или подняв ilvl. 


# Расходуемые предметы

<hr style="height:1px;background-color:#bbb">
<p></p>


**Зачарования** лучше всего использовать максимального качества. Как альтернатива здесь также указаны более дешевые варианты:
* **Оружие**: [Посвящение мудрости](https://www.wowhead.com/ru/spell=389550/) либо [Завет мудрости](https://www.wowhead.com/ru/spell=389542/).
* **Нагрудный доспех**: [Пробужденные характеристики](https://www.wowhead.com/ru/spell=389550/).
* **Поножи**: [Замерзшая чародейская нить](https://www.wowhead.com/ru/spell=376539/) или [Яркая чародейская нить](https://www.wowhead.com/ru/item=376538/).
* **Кольца**: [Посвящение скорости](https://www.wowhead.com/ru/spell=389293/) либо [Завет скорости](https://www.wowhead.com/ru/spell=389135/).
* **Плащ**: [Грациозное избежание](https://www.wowhead.com/ru/spell=389403/) или [Завет избежания](https://www.wowhead.com/ru/spell=389397/).
* **Наручи**: [Посвящение избежания](https://www.wowhead.com/ru/spell=389301/) либо [Завет избежания](https://www.wowhead.com/ru/spell=389297/).
* **Ботинки**: [Ветер равнин](https://www.wowhead.com/ru/spell=389479/).

<hr style="height:1px;background-color:#bbb">
<p></p>


**Самоцветы** теперь есть двух видов – уникальные эпические, которые нужно делать через стол заказов, и обычные, которые покупаются на аукционе. Лучше всего использовать камни максимального качества. Эпических камней может быть не более одного во всей экипировке. 
* Эпический самоцвет: [Мастерский бесконечный алмаз](https://www.wowhead.com/ru/item=192988/) для Рейда или [Покрытый письменами бесконечный алмаз](https://www.wowhead.com/ru/item=192982/) для Мифик+.
* Обычные самоцветы: [Острый нелтарит](https://www.wowhead.com/ru/item=192961/) для Рейда или [Коварный алекстразит](https://www.wowhead.com/ru/item=192919) для Мифик+.


<hr style="height:1px;background-color:#bbb">
<p></p>


Вместо настоев теперь используются **флаконы** – они длятся меньше времени, но и стоят меньше реагентов. Лучше всего использовать флаконы максимального качества. Существует множество различных видов флаконов, лучшие из них следующие:
* [Флакон статичного усиления](https://www.wowhead.com/ru/item=191338/): лучший показатель ДПС, но при его использовании нужно меньше бегать и чаще стоять на месте.
* [Флакон ледового неистовства](https://www.wowhead.com/ru/item=191333/): подойдет для Мифик+ и для боссов с большим количеством спавнящихся аддов.
* [Флакон сдержанной универсальности](https://www.wowhead.com/ru/item=191341): дешевый вариант.

<hr style="height:1px;background-color:#bbb">
<p></p>


**Зелья** используются в зависимости от типа контента:
* [Зелье великой мощи стихий](https://www.wowhead.com/ru/item=191383): дорогой вариант, делается только через стол заказов либо берется из [Котла с зельями великой мощи](https://www.wowhead.com/ru/item=191487/).
* [Зелье мощи стихий](https://www.wowhead.com/ru/item=191389/): более распространенный вариант зелья, покупается на аукционе.

Не забудьте про хилпот – [Освежающее лечебное зелье](https://www.wowhead.com/ru/item=191380), а также про новые зелья, которые можно применить после смерти: [Неустойчивая суспензия из спор](https://www.wowhead.com/ru/item=191377/) и [Остаточный реагент нейронной активности](https://www.wowhead.com/ru/item=191374).
{: class="bordered"}

<hr style="height:1px;background-color:#bbb">
<p></p>


**Еду** следует использовать следующую:
* [Большой калуакский банкет](https://www.wowhead.com/ru/item=197794): пир на множество игроков, увеличивает Интеллект.
* [Печенье с судьбоносными предсказаниями](https://www.wowhead.com/ru/item=197792): аналог пира, но для одного игрока.

<hr style="height:1px;background-color:#bbb">
<p></p>


Вместо масел теперь используются **руны на оружие**. Лучшим вариантом является [Воющая руна](https://www.wowhead.com/ru/item=194820/), однако она не сочетается с талантом [Улучшенное оружие языка пламени](https://www.wowhead.com/ru/spell=382027).

<hr style="height:1px;background-color:#bbb">
<p></p>


* [Драконья руна усиления](https://www.wowhead.com/ru/item=201325): руна на Интеллект, спадающая при смерти.

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

* [Природная стремительность](https://ru.wowhead.com/spell=378081) и [Цепная молния](https://www.wowhead.com/ru/spell=188443/) на одной кнопке:
~~~
#showtooltip Цепная молния
/cast Природная стремительность
/cast [@mouseover,harm,exists,nodead][] Цепная молния
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

Рекомендованная сборка от [Amani](https://www.twitch.tv/amanizandalari) – [по этой ссылке](https://wago.io/KbqSzg3ps).

<p align="center">
    <img src="https://media.wago.io/screenshots/KbqSzg3ps/6351036870c70b6bca4d14f6.gif"> 
</p>

<p></p>

{% include button.html name="Сборки WA на Wago.io" link="https://wago.io/search/elemental" %}  

<p></p>


# Особенности подземелий

Данный раздел будет дополнен ближе к открытию Мифик+. 
{: class="bordered"}

<p></p>

{% include button.html name="Обсудить на сервере Водоворот" link="https://discord.gg/8Bag6kT" %}  

<p></p>
