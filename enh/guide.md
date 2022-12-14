---
layout: page
last_update: 2022-12-13
title: Гайд на Энх Шамана
wow: 10.0.2
toc: true
author: Amani
description: Большое руководство по всем аспектам игры за Шамана Совершенствования. Здесь разобраны билды талантов, приоритет заклинаний, подбор экипировки, настройка интерфейса, макросы и WA и многое другое.
image: /assets/img/enh_tb2.png
custom-javascript-list:
    - "/assets/js/rotation_switches2.js"
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

В середине ветки расположены усиления [Оружия Водоворота](https://ru.wowhead.com/spell=187880) и основные АоЕ способности – [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874) и усиление [Цепной молнии](https://www.wowhead.com/ru/spell=188443/). Эти таланты являются **обязательными** в любом билде для Мифик+, так как без них практически нет нормального АоЕ урона. Другой талант, который также отлично себя показывает в АоЕ бою – [Раскол](https://www.wowhead.com/ru/spell=197214), к тому же он не имеет ограничения на количество целей, плюс усиливается и от <span style="color:#FFFFFF;font-size:1em;">**физического**</span>, и от <span style="color:#f16f25;font-size:1em;">**стихийного**</span> билдов.

Соответственно, билды Энха можно разделить на <span style="color:#FFFFFF;font-size:1em;">**физические**</span>, <span style="color:#f16f25;font-size:1em;">**стихийные**</span>, и **гибридные** варианты. 

Для новичков рекомендуется попробовать в первую очередь именно <span style="color:#FFFFFF;font-size:1em;">**физические**</span> и <span style="color:#f16f25;font-size:1em;">**стихийные**</span> билды, тогда как **гибридные** варианты будут чуть сложнее за счет контроля таймингов бурстов.

**Важно!** Не существует одного билда на все случаи жизни – вы так или иначе будете менять таланты под разные типы боя в рейде и под разные недели и инсты в Мифик+.
{: class="bordered"}

Основа <span style="color:#FFFFFF;font-size:1em;">**физических**</span> билдов – способность [Ветра рока](https://www.wowhead.com/ru/spell=384352), которая является основным бурстом с кулдауном полторы минуты, а также усиления [Оружия неистовства ветра](https://www.wowhead.com/ru/spell=33757/) и [Удара бури](https://www.wowhead.com/ru/spell=17364). Талант [Укоренившиеся стихии](https://ru.wowhead.com/spell=378270) дает прок [Перерождения](https://ru.wowhead.com/spell=114051) на **6** секунд, что также ощутимо увеличивает урон в СТ и АоЕ.

В <span style="color:#f16f25;font-size:1em;">**стихийных**</span> билдах активно используется [Огненный шок](https://ru.wowhead.com/spell=188389), [Вскипание лавы](https://www.wowhead.com/ru/spell=60103) и их усиления – [Горячая рука](https://www.wowhead.com/ru/spell=201900), [Пепельный катализатор](https://www.wowhead.com/ru/spell=390370) и [Хлещущее пламя](https://www.wowhead.com/ru/spell=334046). Вместо обычных волков от таланта [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533/), которые по умолчанию усиливают физический урон, призываются стихийные версии, за счет таланта [Духи стихий](https://ru.wowhead.com/spell=262624). Бурстом в стихийном билде выступает [Первозданная волна](https://ru.wowhead.com/spell=375982), которая за счет таланта [Расколотые стихии](https://ru.wowhead.com/spell=382042) дает **60%** Скорости на **12** секунд.

В **гибридном** билде берутся и [Ветра рока](https://www.wowhead.com/ru/spell=384352) и [Первозданная волна](https://ru.wowhead.com/spell=375982), что обеспечивает **60%** Скорости под всю длительность бурста от [Ветров рока](https://www.wowhead.com/ru/spell=384352). Но в этом билде чуть слабее урон по одной цели, чем в физическом и стихийном, зато бурст – гораздо сильнее. Поэтому гибридный билд стоит использовать только в Мифик+, но не в Рейде.

В бою против одной цели можно не брать [Сокрушающую молнию](https://www.wowhead.com/ru/spell=187874) и [Сокрушающие бури](https://www.wowhead.com/ru/spell=334308), а освободившиеся очки вложить в другие таланты, например в [Тотем неистовства ветра](https://www.wowhead.com/ru/spell=8512/), который наиболее полезен именно в СТ.

Обязательные таланты для любого Мифик+ билда это [Буря с градом](https://www.wowhead.com/ru/spell=334195) либо [Кольцо огня](https://www.wowhead.com/ru/spell=333974/). Можно выбрать любой из них, у каждого из талантов есть свои плюсы и минусы:
* [Буря с градом](https://www.wowhead.com/ru/spell=334195) чуть сложнее в реализации и требует еще один талант для полной работоспособности – [Ледяной клинок](https://www.wowhead.com/ru/spell=342240/). Но [Буря с градом](https://www.wowhead.com/ru/spell=334195) дает чуть больше урона в **1-3** цели, чем [Кольцо огня](https://www.wowhead.com/ru/spell=333974/).

* [Кольцо огня](https://www.wowhead.com/ru/spell=333974/) проще для реализации и дает большое количество стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880) за счет таланта [Кружащий Водоворот](https://www.wowhead.com/ru/spell=384359), но наносит меньше урона в бою против одной цели.

Не бойтесь экспериментировать с билдами если вы считаете, что какие-то таланты лучше подойдут в определенной ситуации. 
{: class="bordered"}

## <span style="color:#FFFFFF;font-size:1em;">**Физический**</span> билд

### Для рейда

В рейдовом <span style="color:#FFFFFF;font-size:1em;">**физическом**</span> билде берутся большинство талантов, усиливающих [Оружие неистовства ветра](https://www.wowhead.com/ru/spell=33757/) и [Удар бури](https://www.wowhead.com/ru/spell=17364).

Талант [Укоренившиеся стихии](https://ru.wowhead.com/spell=378270) дает прок [Перерождения](https://ru.wowhead.com/spell=114051) на **6** секунд, что также ощутимо увеличивает урон в СТ и АоЕ, но он зависит от рандома. Для гарантированного бурста стоит использовать обычную версию [Перерождения](https://ru.wowhead.com/spell=114051), с кулдауном **3** минуты.

Билды для рейда являются **рекомендацией** для тех, кто не хочет подбирать таланты самостоятельно. На каждом боссе так или иначе будут использоваться разные билды, которые можно увидеть на [Warcraftlogs](https://www.warcraftlogs.com/) и [Subcreation](https://raid.subcreation.net/enhancement-shaman.html).
{: class="bordered"}

<span style="color:#FFFFFF;font-size:1em;">**Физический**</span> для рейда, бой с небольшим кливом:

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BcQAAAAAAAAAAAAAAAAAAAAAAIJJpAJRSSiAJJSAAAAAAAAAAAAAAtIEhEUEQSJJJlAIRSgC?width=700&bgcolor=262b39&locale=ru_RU" width="730" height="500"></iframe>

<p></p>

* В этом билде можно поменять [Укоренившиеся стихии](https://ru.wowhead.com/spell=378270) на [Перерождение](https://ru.wowhead.com/spell=114051) для более контролируемого бурста.

<span style="color:#FFFFFF;font-size:1em;">**Физический**</span> для рейда, максимальный урон против одной цели, без клива:

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BcQAAAAAAAAAAAAAAAAAAAAAAIJJHAkcARSSSQSiECAAAAAAAAAAAAAtIEhEUEQSJJJlAIRSgC?width=700&bgcolor=262b39&locale=ru_RU" width="730" height="500"></iframe>

<p></p>

* Данный билд также известен как **Gambling Build**. Он зависит от проков таланта [Укоренившиеся стихии](https://ru.wowhead.com/spell=378270), но показывает лучший результат в бою против одной цели даже со средним количеством проков.



### Для Мифик+


<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BcQAAAAAAAAAAAAAAAAAAAAAAIRSaQSiIJCIJtEJAAAAAAAAAAAAAUiQES0CRBSJJJFAlEJBK?width=700&bgcolor=262b39&locale=ru_RU" width="730" height="500"></iframe>

<p></p>

[Ветра рока](https://www.wowhead.com/ru/spell=384352) – основной бурст талант <span style="color:#FFFFFF;font-size:1em;">**физического**</span> билда на АоЕ. Раз в полторы минуты он дает бафф на **8** секунд, утраивающий шанс срабатывания [Оружия неистовства ветра](https://www.wowhead.com/ru/spell=33757/) и увеличивающий его урон на **10%**. Помните, что [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874), как и [Раскол](https://www.wowhead.com/ru/spell=197214), являются ударами с правой руки и при использовании под баффом [Ветров рока](https://www.wowhead.com/ru/spell=384352) вызывают срабатывание [Оружия неистовства ветра](https://www.wowhead.com/ru/spell=33757/) по всем пораженным целям. 

Следовательно основная задача на АоЕ во время активного баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352) – использовать [Раскол](https://www.wowhead.com/ru/spell=197214) и максимальное количество раз прожать [Сокрушающую молнию](https://www.wowhead.com/ru/spell=187874). Кулдаун [Сокрушающей молнии](https://www.wowhead.com/ru/spell=187874) составляет **12** секунд и снижается Скоростью, но его можно сократить еще больше за счет [Цепной молнии](https://ru.wowhead.com/spell=188443) с талантом [Сокрушающие бури](https://www.wowhead.com/ru/spell=334308). [Цепная молния](https://ru.wowhead.com/spell=188443) сокращает кулдаун [Сокрушающей молнии](https://www.wowhead.com/ru/spell=187874) на **1** секунду за каждого пораженного противника, и поражает до **5** противников.

Не забывайте также перед [Ветрами рока](https://www.wowhead.com/ru/spell=384352) использовать [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533/), который усиливает весь наносимый физический урон на **32%** на **15** секунд.

Ротация вне бурста на АоЕ в <span style="color:#FFFFFF;font-size:1em;">**физическом**</span> билде заключается в трате стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880) на [Цепную молнию](https://ru.wowhead.com/spell=188443) (желательно при **10** стаках) и использовании [Раскола](https://www.wowhead.com/ru/spell=197214), [Сокрушающей молнии](https://www.wowhead.com/ru/spell=187874), [Ледяного клинка](https://www.wowhead.com/ru/spell=342240/), [Удара бури](https://www.wowhead.com/ru/spell=17364) и [Вскипания лавы](https://www.wowhead.com/ru/spell=60103) согласно приоритетам.

[Вскипание лавы](https://www.wowhead.com/ru/spell=60103) с талантом [Натиск лавы](https://www.wowhead.com/ru/spell=334033) распространяет [Огненные шоки](https://ru.wowhead.com/spell=188389) на **4** ближайших противников и этим тоже не стоит пренебрегать. Используйте [Огненной шок](https://ru.wowhead.com/spell=188389) при подходе к паку и сразу же спредайте его [Вскипанием лавы](https://www.wowhead.com/ru/spell=60103), после чего переходите к другим способностям.

При использовании таланта [Буря с градом](https://www.wowhead.com/ru/spell=334195/) следует использовать [Ледяной шок](https://www.wowhead.com/ru/spell=196840/) после каждой траты стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880). Также стоит использовать по кулдауну [Ледяной клинок](https://www.wowhead.com/ru/spell=342240/), увеличивающим урон следующего [Ледяного шока](https://www.wowhead.com/ru/spell=196840/) на **100%**.

Можно заменить [Бурю с градом](https://www.wowhead.com/ru/spell=334195) + [Ледяной клинок](https://www.wowhead.com/ru/spell=342240/) на [Кольцо огня](https://www.wowhead.com/ru/spell=333974/) + [Кружащий Водоворот](https://www.wowhead.com/ru/spell=384359/), что сделает билд проще для реализации, но ценой меньшего урона в бою против **1-3** целей.

Еще один важный момент – реализация таланта [Воззвание к Ториму](https://www.wowhead.com/ru/spell=384444), который автоматически применяет [Молнию](https://www.wowhead.com/ru/spell=188196/) или [Цепную молнию](https://ru.wowhead.com/spell=188443) к текущей цели при использовании [Удара ветра](https://www.wowhead.com/ru/spell=115356) (это [Удар бури](https://www.wowhead.com/ru/spell=17364) во время активного [Перерождения](https://www.wowhead.com/ru/spell=114051)). Выбор между [Молнией](https://www.wowhead.com/ru/spell=188196/) или [Цепной молнией](https://ru.wowhead.com/spell=188443) зависит от последнего примененного заклинания, так что если в бою против одной цели у вас автоматически применяется [Цепная молния](https://ru.wowhead.com/spell=188443), то стоит вручную «перезаписать» его на [Молнию](https://www.wowhead.com/ru/spell=188196/). На АоЕ, соответственно, следует тоже самое сделать с [Цепной молнией](https://ru.wowhead.com/spell=188443). [WA для отслеживания](https://wago.io/DT4YbYlpN) [Воззвания к Ториму](https://www.wowhead.com/ru/spell=384444) (она же есть в [сборке на Энха](https://wago.io/HJxL_fG7C) от [Амани](https://www.twitch.tv/amanizandalari)).



## <span style="color:#f16f25;font-size:1em;">**Стихийный**</span> билд

### В рейде

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BcQAAAAAAAAAAAAAAAAAAAAAAIJJpEJgkEikkQJhAAAAAAAAAAAAAQLCRIBFBkUSSSJASkEA?width=700&bgcolor=262b39&locale=ru_RU" width="730" height="500"></iframe>

<p></p>

Основной <span style="color:#f16f25;font-size:1em;">**стихийный**</span> билд для рейда, с небольшим кливом. Основной урон идет от [Вскипания лавы](https://www.wowhead.com/ru/spell=60103) и [Удара духов стихий](https://www.wowhead.com/ru/spell=117014), усиленных такими талантами, как [Горячая рука](https://www.wowhead.com/ru/spell=201900) и [Духи стихий](https://www.wowhead.com/ru/spell=262624).


Билды для рейда являются **рекомендацией** для тех, кто не хочет подбирать таланты самостоятельно. На каждом боссе так или иначе будут использоваться разные билды, которые можно увидеть на [Warcraftlogs](https://www.warcraftlogs.com/) и [Subcreation](https://raid.subcreation.net/enhancement-shaman.html).
{: class="bordered"}

### В Мифик+

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BcQAAAAAAAAAAAAAAAAAAAAAAIRSaRCiIhIJJUSkAAAAAAAAAAAAAQJCRIRLEFIlkkUAUSkEA?width=700&bgcolor=262b39&locale=ru_RU" width="730" height="500"></iframe>

<p></p>

Основа <span style="color:#f16f25;font-size:1em;">**стихийного**</span> билда в Мифик+ – спред [Огненных шоков](https://ru.wowhead.com/spell=188389) вплоть до **6** целей (максимальное количество активных дебаффов) и последующее их усиление с помощью таланта [Хлещущее пламя](https://www.wowhead.com/ru/spell=334046). В этом также помогают таланты [Пепельный катализатор](https://www.wowhead.com/ru/spell=390370/) и [Горячая рука](https://www.wowhead.com/ru/spell=201900), сокращающие кулдаун [Вскипания лавы](https://www.wowhead.com/ru/spell=60103).

Для удобного отслеживания дебаффов используйте этот [мод на Plater](https://wago.io/o9Q7MSLDi) или [WA](https://wago.io/aga_S7YFN) от **Nikyou**.
{: class="bordered"}

Также [Вскипание лавы](https://www.wowhead.com/ru/spell=60103) с талантом [Натиск лавы](https://www.wowhead.com/ru/spell=334033) распространяет [Огненные шоки](https://ru.wowhead.com/spell=188389) на **4** ближайших противников, нанося при этом урон при наложении. Стоит использовать [Огненной шок](https://ru.wowhead.com/spell=188389) при подходе к паку и сразу же спредать его [Вскипанием лавы](https://www.wowhead.com/ru/spell=60103), после чего применить [Первозданную волну](https://ru.wowhead.com/spell=375982) и [Молнию](https://www.wowhead.com/ru/spell=188196/). Это даст **60%** бонус к Скорости (за **6** целей под [Огненным шоком](https://ru.wowhead.com/spell=188389)), что является основным бурстом <span style="color:#f16f25;font-size:1em;">**стихийного**</span> билда.

Когда под [Огненными шоками](https://ru.wowhead.com/spell=188389) находится максимальное количество целей следует кастовать [Кольцо огня](https://www.wowhead.com/ru/spell=333974/), которое наносит отличный АоЕ урон. С талантом [Кружащий Водоворот](https://www.wowhead.com/ru/spell=384359) оно также дает довольно много стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880), так что не стоит кастовать его при максимальном количестве стаков, сначала потратьте их на [Цепную молнию](https://ru.wowhead.com/spell=188443).

В <span style="color:#f16f25;font-size:1em;">**стихийном**</span> билде также берется [Удар духов стихий](https://www.wowhead.com/ru/spell=117014), хотя его использование в Мифик+ опционально. Но этот талант дает отличный урон в бою против одной цели, и особенно с активными волками от таланта [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533), которые в сочетании с талантом [Духи стихий](https://www.wowhead.com/ru/spell=262624) увеличивают не физический урон, а стихийный. 


## **Гибридный** билд в Мифик+

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BcQAAAAAAAAAAAAAAAAAAAAAAIRSaAJikISik0SkAAAAAAAAAAAAAQJCRIJCRBSJJJFAlEJBA?width=700&bgcolor=262b39&locale=ru_RU" width="730" height="500"></iframe>

<p></p>

Данный билд сочетает в себе оба бурста <span style="color:#FFFFFF;font-size:1em;">**физического**</span> и <span style="color:#f16f25;font-size:1em;">**стихийного**</span> билдов – [Ветра рока](https://www.wowhead.com/ru/spell=384352) и [Первозданную волну](https://ru.wowhead.com/spell=375982). В результате бурст от [Ветров рока](https://www.wowhead.com/ru/spell=384352) будет усилен дополнительной Скоростью от [Расколотых стихий](https://ru.wowhead.com/spell=382042), что очень сильно увеличивает урон на АоЕ.

Во время активных [Ветров рока](https://www.wowhead.com/ru/spell=384352) с баффом на Скорость получится сдать гораздо больше [Сокрушающих молний](https://www.wowhead.com/ru/spell=187874), чем без дополнительной Скорости. Нередко получается чередовать подряд только [Сокрушающую молнию](https://www.wowhead.com/ru/spell=187874) и [Цепную молнию](https://ru.wowhead.com/spell=188443), которые усиливают друг друга. [Сокрушающая молнию](https://www.wowhead.com/ru/spell=187874) под [Ветрами рока](https://www.wowhead.com/ru/spell=384352) часто дает достаточно стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880) для применения [Цепной молнии](https://ru.wowhead.com/spell=188443), которая в свою очередь снижает кулдаун и увеличивает урон следующей [Сокрушающей молнии](https://www.wowhead.com/ru/spell=187874).

Этот билд не зависит от рандома, а только от реализации ваших бурстов и понимания таймингов. Здесь не используется талант [Укоренившиеся стихии](https://ru.wowhead.com/spell=378270), а волки от таланта [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533/) всегда дают фиксированный бафф на физический урон, а не один из трех стихийных.

Еще один плюс этого билда – отсутствие необходимости менять цели для реализации дебаффа от таланта [Хлещущее пламя](https://www.wowhead.com/ru/spell=334046), как это следует делать в стихийном билде. Главное первым [Вскипанием лавы](https://www.wowhead.com/ru/spell=60103) ударить именно по цели с [Огненным шоком](https://ru.wowhead.com/spell=188389), чтобы развесить этот дебафф на **4** дополнительные цели. Здесь нет сокращения кулдауна [Вскипания лавы](https://www.wowhead.com/ru/spell=60103) от таланта [Пепельный катализатор](https://www.wowhead.com/ru/spell=390370), поэтому нужно быть внимательным и не промахнуться по цели без [Огненного шока](https://ru.wowhead.com/spell=188389).

К минусам гибридного билда можно отнести его чуть более низкий урон в бою против одной цели, в сравнении с <span style="color:#FFFFFF;font-size:1em;">**физическим**</span> и <span style="color:#f16f25;font-size:1em;">**стихийным**</span>, из-за чего его не стоит использовать в рейде. Однако это окупается его бурст потенциалом на АоЕ в Мифик+, если вы сможете полноценно реализовать свои кулдауны. 




# Приоритет способностей

Основа игры на Шамане Совершенствования заключается в накоплении стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880) с помощью способностей ближнего боя и трате этих стаков на мощные мгновенные заклинания.

Следуйте следующим правилам при игре за Энх Шамана:

* **Не допускайте оверкапа стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880)**. На **10** стаках всегда стоит скастовать подходящее под ситуацию в бою заклинание. Мгновенно применять заклинания можно при накоплении **5** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880) или более, а максимум можно набрать **10** стаков, за счет таланта [Бурлящий Водоворот](https://www.wowhead.com/ru/spell=384149). Не стоит сразу же тратить стаки, как только их накопится **5**, сначала используйте способности с кулдауном, чтобы они не простаивали. Но и не стоит долгое время находиться на значении **10** стаков, так как в этот момент новые стаки будут просто теряться. 

* **Держите способности на кулдауне**. Не тратье стаки [Оружия Водоворота](https://ru.wowhead.com/spell=187880) сразу же как их накопится **5**, сначала используйте другие ваши способности. Это поможет избежать простоев в ротации и повысит ваш урон. Пока значение стаков не достигло **10** – используйте все другие способности из списка приоритетов.

* **Реагируйте на проки [Горячей руки](https://www.wowhead.com/ru/spell=201900/) и [Вестника шторма](https://www.wowhead.com/ru/spell=201845/).** Эти баффы увеличивают урон связанных с ними заклинаний и уменьшают количество простоев в ротации. Всегда обращайте на них внимание, чтобы не терять ДПС. 

Также довольно важно следить за баффами от [Духов дикого зверя](https://www.wowhead.com/ru/spell=51533) и [Наследия ледяной ведьмы](https://www.wowhead.com/ru/spell=384450), которые увеличивают физический урон. Под действием этих баффов меняется приоритет некоторых способностей.

Приоритет способностей ниже читается следующим образом:
1. Выберите интересующие вас таланты с помощью чекбоксов, после чего приоритет изменится соответствующим образом.
2. Читайте приоритет с первого пункта и вниз. Если вы можете «выполнить» первый пункт, например когда способность не на кулдауне, и соблюдены другие условия – вы используете эту способность.
3. Если вы не можете «выполнить» какой-то пункт, то переходите к следующему пункту до тех пор, пока не встретите выполнимый.
4. После каждого применения заклинаний мысленно возвращайтесь в начало списка приоритетов и проходите по всем пунктам заново.

**Важно!** Убедитесь, что у вас всегда наложены усиления на оружие – [Оружие неистовства ветра](https://ru.wowhead.com/spell=33757/) и [Оружие языка пламени](https://ru.wowhead.com/spell=318038/).
{: class="bordered"}

<hr style="height:1px;background-color:#bbb">
<p></p>

Выберите используемые таланты, и приоритет способностей соответственно изменится. Некоторые таланты, такие как [Удар бури](https://www.wowhead.com/ru/spell=17364), [Вскипание лавы](https://www.wowhead.com/ru/spell=60103), [Раскол](https://www.wowhead.com/ru/spell=197214) и [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533/), подразумеваются как взятые по умолчанию.

<ul class="rotation_switches" style="list-style-type: none;">
  <li markdown="span" id="rotation_switch_totem" class="rotation_switch"><input type="checkbox"> [Тотем неистовства ветра](https://www.wowhead.com/ru/spell=8512)</li>
  <li markdown="span" id="rotation_switch_cl" class="rotation_switch"><input type="checkbox"> [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874)</li> 
  <li markdown="span" id="rotation_switch_asc" class="rotation_switch"><input type="checkbox"> [Перерождение](https://ru.wowhead.com/spell=114051)</li>
  <li markdown="span" id="rotation_switch_dre" class="rotation_switch"><input type="checkbox"> [Укоренившиеся стихии](https://www.wowhead.com/ru/spell=378270)</li>
  <li markdown="span" id="rotation_switch_ic" class="rotation_switch"><input type="checkbox"> [Ледяной клинок](https://www.wowhead.com/ru/spell=342240/)</li> 
  <li markdown="span" id="rotation_switch_hs" class="rotation_switch"><input type="checkbox"> [Буря с градом](https://www.wowhead.com/ru/spell=334195/)</li>
  <li markdown="span" id="rotation_switch_fn" class="rotation_switch"><input type="checkbox"> [Кольцо огня](https://www.wowhead.com/ru/spell=333974/)</li> 
  <li markdown="span" id="rotation_switch_eb" class="rotation_switch"><input type="checkbox"> [Удар духов стихий](https://www.wowhead.com/ru/spell=117014)</li>
  <li markdown="span" id="rotation_switch_alpha" class="rotation_switch"><input type="checkbox"> [Альфа-волк](https://ru.wowhead.com/spell=198434)</li>
  <li markdown="span" id="rotation_switch_dw" class="rotation_switch"><input type="checkbox"> [Ветра рока](https://www.wowhead.com/ru/spell=384352)</li>   
  <li markdown="span" id="rotation_switch_pw" class="rotation_switch"><input type="checkbox"> [Первозданная волна](https://www.wowhead.com/ru/spell=375982)</li>   
  <li markdown="span" id="rotation_switch_hh" class="rotation_switch"><input type="checkbox"> [Горячая рука](https://www.wowhead.com/ru/spell=201900)</li>     
  <li markdown="span" id="rotation_switch_lf" class="rotation_switch"><input type="checkbox"> [Хлещущее пламя](https://www.wowhead.com/ru/spell=334046)</li>       
</ul>


<hr style="height:1px;background-color:#bbb">
<p></p>



**Опенер для боя против одной цели:**
1. {:.rotation_line_totem_on style="display:none;"}[Тотем неистовства ветра](https://www.wowhead.com/ru/spell=8512) как можно ближе к боссу на момент пула.
2. {:.rotation_line_pw_off style="display:checked;"}[Огненный шок](https://ru.wowhead.com/spell=188389) на пути к цели.
3. [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533/).
4. {:.rotation_line_pw_on style="display:none;"}[Первозданная волна](https://www.wowhead.com/ru/spell=375982) для наложения [Огненного шока](https://ru.wowhead.com/spell=188389).
5. {:.rotation_line_pw_on style="display:none;"}[Молния](https://www.wowhead.com/ru/spell=188196/) с баффом от [Первозданной волны](https://www.wowhead.com/ru/spell=375982) и при наличии **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
7. {:.rotation_line_alpha_on style="display:none;"}[Сокрушающая молния](https://www.wowhead.com/ru/spell=187874) для активации таланта [Альфа-волк](https://ru.wowhead.com/spell=198434).
8. [Удар бури](https://www.wowhead.com/ru/spell=17364) для генерации стаков [Оружия Водоворота](https://www.wowhead.com/ru/spell=187880).
9. {:.rotation_line_asc_on style="display:none;"}[Перерождение](https://ru.wowhead.com/spell=114051) в ближнем бою и сразу же [Удар ветра](https://www.wowhead.com/ru/spell=115356).
10. {:.rotation_line_dw_on style="display:none;"}[Ветра рока](https://www.wowhead.com/ru/spell=384352) и сразу же [Удар бури](https://www.wowhead.com/ru/spell=17364).
11. {:.rotation_line_eb_on style="display:none;"}[Удар духов стихий](https://www.wowhead.com/ru/spell=117014) как только накопится **8+** стаков [Оружия Водоворота](https://www.wowhead.com/ru/spell=187880) и если в бою не более **2** целей.
12. {:.rotation_line_eb_off style="display:checked;"}[Выброс лавы](https://www.wowhead.com/ru/spell=51505) как только накопится **8+** стаков [Оружия Водоворота](https://www.wowhead.com/ru/spell=187880).
13. Продолжайте обычную ротацию.

<hr style="height:1px;background-color:#bbb">
<p></p>

**Бой против одной цели:**
1. {:.rotation_line_totem_on style="display:none;"}[Тотем неистовства ветра](https://www.wowhead.com/ru/spell=8512) как можно ближе к боссу на момент пула.
2. [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533).
3. {:.rotation_line_asc_on style="display:none;"}[Перерождение](https://www.wowhead.com/ru/spell=114051).
4. {:.rotation_line_dw_on style="display:none;"}[Ветра рока](https://www.wowhead.com/ru/spell=384352).
5. {:.rotation_line_asc_on style="display:none;"}[Удар ветра](https://www.wowhead.com/ru/spell=115356) ([Удар бури](https://www.wowhead.com/ru/spell=17364) во время активного [Перерождения](https://www.wowhead.com/ru/spell=114051)).
6. {:.rotation_line_dre_on style="display:none;"}[Удар ветра](https://www.wowhead.com/ru/spell=115356) ([Удар бури](https://www.wowhead.com/ru/spell=17364) во время активного [Перерождения](https://www.wowhead.com/ru/spell=114051)).
7. {:.rotation_line_dw_on style="display:none;"}[Удар бури](https://www.wowhead.com/ru/spell=17364) во время баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352).
8. {:.rotation_line_hh_on style="display:none;"}[Вскипание лавы](https://www.wowhead.com/ru/spell=60103/) с баффом от [Горячей руки](https://www.wowhead.com/ru/spell=201900) или при наличии **6+** стаков от таланта [Пепельный катализатор](https://www.wowhead.com/ru/spell=390371/).
9. {:.rotation_line_dw_on style="display:none;"}[Ледяной клинок](https://www.wowhead.com/ru/spell=342240/) во время баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352).
10. {:.rotation_line_dw_on style="display:none;"}[Сокрушающая молния](https://www.wowhead.com/ru/spell=187874) во время баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352).
11. {:.rotation_line_dw_on style="display:none;"}[Раскол](https://www.wowhead.com/ru/spell=197214) во время баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352).
12. [Огненный шок](https://ru.wowhead.com/spell=188389), если отстутствует на цели.
13. {:.rotation_line_pw_on style="display:none;"}[Молния](https://www.wowhead.com/ru/spell=188196/) с баффом от [Первозданной волны](https://www.wowhead.com/ru/spell=375982) и при наличии **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
14. {:.rotation_line_pw_on style="display:none;"}[Первозданная волна](https://www.wowhead.com/ru/spell=375982).
17. [Раскол](https://www.wowhead.com/ru/spell=197214) с баффами от талантов [Наследие ледяной ведьмы](https://www.wowhead.com/ru/spell=384450) и/или [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533).
19. {:.rotation_line_ic_on style="display:none;"}[Ледяной клинок](https://www.wowhead.com/ru/spell=342240/).
20. {:.rotation_line_hs_on style="display:none;"}[Ледяной шок](https://www.wowhead.com/ru/spell=196840/) с баффом от таланта [Буря с градом](https://www.wowhead.com/ru/spell=334195).
15. {:.rotation_line_eb_on style="display:none;"}[Удар духов стихий](https://www.wowhead.com/ru/spell=117014) если у вас **2** заряда этой способности и **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880), либо если **1** заряд и **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
16. {:.rotation_line_eb_off style="display:checked;"}[Выброс лавы](https://ru.wowhead.com/spell=51505) при наличии **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
18. [Вскипание лавы](https://www.wowhead.com/ru/spell=60103), если длительность [Огненного шока](https://ru.wowhead.com/spell=188389) на цели составляет **4** секунды или менее.
22. [Удар бури](https://www.wowhead.com/ru/spell=17364) с баффами от талантов [Наследие ледяной ведьмы](https://www.wowhead.com/ru/spell=384450) и/или [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533).
23. [Молния](https://www.wowhead.com/ru/spell=188196/) при наличии **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
24. [Удар бури](https://www.wowhead.com/ru/spell=17364).
25. [Вскипание лавы](https://www.wowhead.com/ru/spell=60103).
26. [Молния](https://www.wowhead.com/ru/spell=188196/) при наличии **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
27. [Раскол](https://www.wowhead.com/ru/spell=197214).
28. [Ледяной шок](https://www.wowhead.com/ru/spell=196840/).
29. {:.rotation_line_fn_on style="display:none;"}[Кольцо огня](https://www.wowhead.com/ru/spell=333974).
30. {:.rotation_line_cl_on style="display:none;"}[Сокрушающая молния](https://www.wowhead.com/ru/spell=187874).
31. [Огненный шок](https://ru.wowhead.com/spell=188389).
32. {:.rotation_line_totem_on style="display:none;"}[Тотем неистовства ветра](https://www.wowhead.com/ru/spell=8512), если все остальные способности недоступны.

<hr style="height:1px;background-color:#bbb">
<p></p>

**Опенер в бою против 2+ целей:**
1. {:.rotation_line_totem_on style="display:none;"}[Тотем неистовства ветра](https://www.wowhead.com/ru/spell=8512) как можно ближе к боссу на момент пула.
2. {:.rotation_line_pw_off style="display:checked;"}[Огненный шок](https://ru.wowhead.com/spell=188389) на пути к цели.
3. [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533/).
4. {:.rotation_line_pw_on style="display:none;"}[Первозданная волна](https://www.wowhead.com/ru/spell=375982) для наложения [Огненного шока](https://ru.wowhead.com/spell=188389).
5. {:.rotation_line_pw_on style="display:none;"}[Вскипание лавы](https://www.wowhead.com/ru/spell=60103) для спреда [Огненного шока](https://ru.wowhead.com/spell=188389) на соседние цели.
6. {:.rotation_line_pw_on style="display:none;"}[Огненный шок](https://ru.wowhead.com/spell=188389) на цель без [Огненного шока](https://ru.wowhead.com/spell=188389).
7. {:.rotation_line_pw_on style="display:none;"}[Молния](https://www.wowhead.com/ru/spell=188196/) с баффом от [Первозданной волны](https://www.wowhead.com/ru/spell=375982) и при наличии **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
10. {:.rotation_line_asc_on style="display:none;"}[Перерождение](https://ru.wowhead.com/spell=114051).
11. {:.rotation_line_dw_on style="display:none;"}[Ветра рока](https://www.wowhead.com/ru/spell=384352) и сразу же [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874).
12. {:.rotation_line_dw_off style="display:checked;"}[Сокрушающая молния](https://www.wowhead.com/ru/spell=187874).
14. Продолжайте обычную ротацию.

<hr style="height:1px;background-color:#bbb">
<p></p>

**Бой против 2+ целей:**
1. {:.rotation_line_totem_on style="display:none;"}[Тотем неистовства ветра](https://www.wowhead.com/ru/spell=8512) как можно ближе к боссу на момент пула.
1. [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533).
2. [Огненный шок](https://ru.wowhead.com/spell=188389), если его нет ни на одной из целей.
3. [Вскипание лавы](https://www.wowhead.com/ru/spell=60103), если на цели есть [Огненный шок](https://ru.wowhead.com/spell=188389), а на соседних целях [Огненный шок](https://ru.wowhead.com/spell=188389) отсутствует.
4. {:.rotation_line_asc_on style="display:none;"}[Перерождение](https://www.wowhead.com/ru/spell=114051), если в [Воззвание к Ториму](https://www.wowhead.com/ru/spell=384444) [записана](https://wago.io/DT4YbYlpN) [Цепная молния](https://ru.wowhead.com/spell=188443).
5. {:.rotation_line_pw_on style="display:none;"}[Молния](https://www.wowhead.com/ru/spell=188196/) с баффом от [Первозданной волны](https://www.wowhead.com/ru/spell=375982) и при наличии **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
6. [Цепная молния](https://ru.wowhead.com/spell=188443) при наличии **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
7. {:.rotation_line_dw_on style="display:none;"}[Ветра рока](https://www.wowhead.com/ru/spell=384352).
8. {:.rotation_line_dw_on style="display:none;"}[Сокрушающая молния](https://www.wowhead.com/ru/spell=187874) во время баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352).
9. {:.rotation_line_dw_on style="display:none;"}[Раскол](https://www.wowhead.com/ru/spell=197214) с баффами от [Ветров рока](https://www.wowhead.com/ru/spell=384352), [Наследия ледяной ведьмы](https://www.wowhead.com/ru/spell=384450) и [Духа дикого зверя](https://www.wowhead.com/ru/spell=51533) (чем больше, тем лучше).
10. {:.rotation_line_dw_off style="display:checked;"}[Раскол](https://www.wowhead.com/ru/spell=197214) с баффами от [Наследия ледяной ведьмы](https://www.wowhead.com/ru/spell=384450) и/или [Духа дикого зверя](https://www.wowhead.com/ru/spell=51533).
11. {:.rotation_line_fn_on style="display:none;"}[Кольцо огня](https://www.wowhead.com/ru/spell=333974), если под [Огненным шоком](https://ru.wowhead.com/spell=188389) находится **6** противников.
12. {:.rotation_line_cl_on style="display:none;"}[Сокрушающая молния](https://www.wowhead.com/ru/spell=187874), если нет активного баффа от этого заклинания.
13. {:.rotation_line_ic_on style="display:none;"}[Ледяной клинок](https://www.wowhead.com/ru/spell=342240/).
14. {:.rotation_line_hailstorm_on style="display:none;"}[Ледяной шок](https://www.wowhead.com/ru/spell=196840/) с баффом от таланта [Буря с градом](https://www.wowhead.com/ru/spell=334195).
15. {:.rotation_line_pw_on style="display:none;"}[Первозданная волна](https://www.wowhead.com/ru/spell=375982).
16. {:.rotation_line_dre_on style="display:none;"}[Удар ветра](https://www.wowhead.com/ru/spell=115356) ([Удар бури](https://www.wowhead.com/ru/spell=17364) во время активного [Перерождения](https://www.wowhead.com/ru/spell=114051)).
17. {:.rotation_line_dre_on style="display:none;"}[Удар бури](https://www.wowhead.com/ru/spell=17364).
18. {:.rotation_line_lf_on style="display:none;"} [Вскипание лавы](https://www.wowhead.com/ru/spell=60103) по цели с [Огненным шоком](https://ru.wowhead.com/spell=188389), но без дебаффа от таланта [Хлещущее пламя](https://www.wowhead.com/ru/spell=334046).
19. {:.rotation_line_cl_on style="display:none;"}[Сокрушающая молния](https://www.wowhead.com/ru/spell=187874).
20. [Раскол](https://www.wowhead.com/ru/spell=197214).
21. {:.rotation_line_asc_on style="display:none;"}[Удар ветра](https://www.wowhead.com/ru/spell=115356) ([Удар бури](https://www.wowhead.com/ru/spell=17364) во время активного [Перерождения](https://www.wowhead.com/ru/spell=114051)).
22. {:.rotation_line_fn_on style="display:none;"}[Кольцо огня](https://www.wowhead.com/ru/spell=333974), если под [Огненным шоком](https://ru.wowhead.com/spell=188389) находится **2** и более противников.
23. [Вскипание лавы](https://www.wowhead.com/ru/spell=60103).
24. {:.rotation_line_dre_off style="display:checked;"}[Удар бури](https://www.wowhead.com/ru/spell=17364).
15. {:.rotation_line_eb_on style="display:none;"}[Удар духов стихий](https://www.wowhead.com/ru/spell=117014) при наличии **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880) и если в бою не более **2** целей.
26. [Цепная молния](https://ru.wowhead.com/spell=188443) при наличии **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
27. [Ледяной шок](https://www.wowhead.com/ru/spell=196840/).
28. [Огненный шок](https://ru.wowhead.com/spell=188389).
29. {:.rotation_line_totem_on style="display:none;"}[Тотем неистовства ветра](https://www.wowhead.com/ru/spell=8512), если все остальные способности недоступны.

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
* [Поступь духов](https://www.wowhead.com/ru/spell=58875/) – увеличение скорости передвижения и снятие ограничивающих передвижение эффектов.
* [Наставления предков](https://www.wowhead.com/ru/spell=108281) – позволяет раз в **2** минуты в течение **10** секунд хилить союзников на процент от нанесенного вами урона. Во время бурстов вы можете практически соло держать всю группу на максимальном здоровье. Не имеет ГКД.

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

**Нападаение клана Нокхуд:**
* [Тотем трепета](https://www.wowhead.com/ru/spell=8143) может снять эффект [Отпугивающего рыка](https://www.wowhead.com/ru/spell=386063/) на третьем боссе ([Маруук](https://www.wowhead.com/ru/npc=186338/)), игрок всё равно получит большой урон от наложения этого эффекта. Не стойте в круге!
* [Тотем трепета](https://www.wowhead.com/ru/spell=8143) также снимает эффект [Кровожадного вопля](https://www.wowhead.com/ru/spell=373395/), который накладывает [Батак](https://www.wowhead.com/ru/npc=193462/) перед финальным боссом.
* [Развеивание магии](https://www.wowhead.com/ru/spell=370/) снимает [Щит бури](https://www.wowhead.com/ru/spell=386223), который накладывает [Яростная бури](https://www.wowhead.com/ru/npc=186615/) на треше перед вторым боссом.
* [Улучшенное возрождение духа](https://www.wowhead.com/ru/spell=383016) позволяет снять дебафф [Хватка мертвеца](https://www.wowhead.com/ru/spell=387615) перед третьим боссом.

**Квартал Звезд:**
* [Улучшенное возрождение духа](https://www.wowhead.com/ru/spell=383016) снимает дебафф от [Луча дезинтеграции](https://www.wowhead.com/ru/spell=207981/) [Баалгара Бдительного](https://www.wowhead.com/ru/npc=104274) перед вторым боссом.
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
* На получение **1%** Скорости нужно **170** единиц рейтинга Критического удара.
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

* **Ловкость** > **Скорость** = **Искусность** > **Критический удар** > **Универсальность**.

При этом <span style="color:#FFFFFF;font-size:1em;">**физические**</span> билды **чуть больше** предпочитают Скорость, а <span style="color:#f16f25;font-size:1em;">**стихийные**</span> билды **чуть больше** предпочитают Искусность.


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
* [Печать избранного Денны](https://www.wowhead.com/ru/item=195480/) – **Эраног**. «Очень редкий» дроп, лучшее кольцо для рейда и Мифик+ за счет прока на урон.
* [Печать сыновнего долга](https://www.wowhead.com/ru/item=195526) – **Хранительница стаи Денна**. «Очень редкий» дроп, отличные статы и высокий уровень предмета, плюс прок на щит.

## Аксессуары

Ниже представлены неплохие аксессуары из Мифик+ и рейда. Полный рейтинг аксессуаров можно найти на [QE Live](https://questionablyepic.com/live/trinkets).

**Аксессуары из Мифик+:**
* [Алгет'арская шкатулка с секретом](https://www.wowhead.com/ru/item=193701) – **Академия Алгет'ар**.
* [Бутылка вьющихся вихрей](https://www.wowhead.com/ru/item=193697/) – **Наступление клана Нокхуд**.
* [Светозарный дар](https://www.wowhead.com/ru/item=133647) – **Чертоги Доблести** (падает только танку, можно потрейдить).
* [Голод стаи](https://www.wowhead.com/ru/item=136975/) – **Чертоги Доблести**.
* [Унесенные ветром страницы](https://www.wowhead.com/ru/item=144113) – **Храм Нефритовой Змеи**.


**Аксессуары из Хранилища Воплощений:**
* [Одержимый светоч горя](https://www.wowhead.com/ru/item=194308/) – **Хранительница стаи Денна**. Лучший тринкет для боя против одной цели.
* [Благословение Пожирательницы Бурь](https://www.wowhead.com/ru/item=194302/) – **Дафия Перерожденная**. Лучший тринкет для АоЕ.
* [Знак воплощения шепота](https://www.wowhead.com/ru/item=194301) – **Совет стихий**. «Очень редкий» дроп, лучший пассивный тринкет.
* [Техника направленных течений](https://www.wowhead.com/ru/item=194305/) – **Курог Зловещий Тотем**. На случай, если нет вышеперечисленных аксессуаров.


* Крафтовые аксессуары на данный момент проигрывают перечисленным выше вариантам.

WA на все аксессуары есть в [сборке на Энха](https://wago.io/HJxL_fG7C) от [Amani](https://www.twitch.tv/amanizandalari).
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

Вторую  [Искру искусности](https://www.wowhead.com/ru/item=190453/) можно потратить на оружие, если не повезло с его дропом  из Мифик+ или в Рейде. Третью и далее – на самые слабые слоты экипировки. Со временем стоит также скрафтить инженерские наручи – [Сложные манжеты](https://www.wowhead.com/ru/item=198332/%D1%81%D0%BB%D0%BE%D0%B6%D0%BD%D1%8B%D0%B5-%D0%BC%D0%B0%D0%BD%D0%B6%D0%B5%D1%82%D1%8B?bonus=8840:8836:8902&class=7&crafted-stats=36:36&ilvl=418&spec=263) в которые можно вставить гаджет, например [Переключатель измерений](https://www.wowhead.com/ru/item=198300) или [Тангенциальный корректор жизненной силы](https://www.wowhead.com/ru/item=201409).

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
* **Оружие в правой руке**: [Посвящение мудрости](https://www.wowhead.com/ru/spell=389550/) либо [Завет мудрости](https://www.wowhead.com/ru/spell=389542/).
* **Оружие в правой руке**: [Посвящение мудрости](https://www.wowhead.com/ru/spell=389550/) либо [Завет мудрости](https://www.wowhead.com/ru/spell=389542/) (это не ошибка, одинаковые инчанты на обе руки).
* **Нагрудный доспех**: [Пробужденные характеристики](https://www.wowhead.com/ru/spell=389550/).
* **Поножи**: [Лютые накладки для брони](https://www.wowhead.com/ru/item=193565/) или [Укрепленные накладки для брони](https://www.wowhead.com/ru/item=193567/).
* **Кольца**: [Посвящение искусности](https://www.wowhead.com/ru/spell=389294/) либо [Завет искусности](https://www.wowhead.com/ru/spell=389136/).
* **Плащ**: [Грациозное избежание](https://www.wowhead.com/ru/spell=389403/) или [Завет избежания](https://www.wowhead.com/ru/spell=389397/).
* **Наручи**: [Посвящение избежания](https://www.wowhead.com/ru/spell=389301/) либо [Завет избежания](https://www.wowhead.com/ru/spell=389297/).
* **Ботинки**: [Ветер равнин](https://www.wowhead.com/ru/spell=389479/).

<hr style="height:1px;background-color:#bbb">
<p></p>


**Самоцветы** теперь есть двух видов – уникальные эпические, которые нужно делать через стол заказов, и обычные, которые покупаются на аукционе. Лучше всего использовать камни максимального качества. Эпических камней может быть не более одного во всей экипировке. 
* Эпический самоцвет: [Броский бесконечный алмаз](https://www.wowhead.com/ru/item=192985/) либо [Мастерский бесконечный алмаз](https://www.wowhead.com/ru/item=192988/).
* Обычные самоцветы: [Острый изерилл](https://www.wowhead.com/ru/item=192948/) либо [Острый нелтарит](https://www.wowhead.com/ru/item=192961/).


<hr style="height:1px;background-color:#bbb">
<p></p>


Вместо настоев теперь используются **флаконы** – они длятся меньше времени, но и стоят меньше реагентов. Лучше всего использовать флаконы максимального качества. Существует множество различных видов флаконов, лучшие из них следующие:
* [Флакон стихийного хаоса](https://www.wowhead.com/ru/item=191357): отличный вариант без каких-либо негативных эффектов.
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
* [Большой калуакский банкет](https://www.wowhead.com/ru/item=197794): пир на множество игроков, увеличивает Ловкость.
* [Печенье с судьбоносными предсказаниями](https://www.wowhead.com/ru/item=197792): аналог пира, но для одного игрока.

<hr style="height:1px;background-color:#bbb">
<p></p>


**Руны на оружие** Энх Шаман **не использует**, так как они не сочетаются с [Оружием неистовства ветра](https://www.wowhead.com/ru/spell=33757/) и [Оружием языка пламени](https://www.wowhead.com/ru/spell=318038/).

<hr style="height:1px;background-color:#bbb">
<p></p>


* [Драконья руна усиления](https://www.wowhead.com/ru/item=201325): руна на Ловкость, спадающая при смерти.

<hr style="height:1px;background-color:#bbb">
<p></p>


# Интерфейс

В каждом билде Энх Шамана крайне важно отслеживать [Огненный шок](https://ru.wowhead.com/spell=188389) на целях. В стихийном билде также необходимо отслеживать [Хлещущее пламя](https://www.wowhead.com/ru/spell=334046). Для отслеживания обоих этих дебаффов рекомендую использовать этот [мод на Plater](https://wago.io/o9Q7MSLDi).

## Макросы

В первую очередь – рекомендую настроить на касты по наведению мыши (mouseover) через стандартный интерфейс. Это позволит кастовать все заклинания без выбора цели, что особенно удобно для [Огненного шока](https://ru.wowhead.com/spell=188389) и [Пронизыващего ветра](https://www.wowhead.com/ru/spell=57994/), но я это использую для всех заклинаний:

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

* Макрос для [Ледяного клинка](https://www.wowhead.com/ru/spell=342240/) и [Кольца огня](https://www.wowhead.com/ru/spell=333974/) на одной кнопке:
~~~
#showtooltip
/cast [known: 342240] Ледяной клинок; [known: 333974] Кольцо огня
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


# Особенности подземелий

Данный раздел будет дополнен ближе к открытию Мифик+. 
{: class="bordered"}


<p></p>

{% include button.html name="Обсудить на сервере Водоворот" link="https://discord.gg/8Bag6kT" %}  

<p></p>