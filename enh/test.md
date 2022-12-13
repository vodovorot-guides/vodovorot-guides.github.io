---
layout: page
last_update: 2022-12-13
title: Гайд на Энх Шамана
wow: 10.0.2
toc: true
author: Amani
description: Большое руководство по всем аспектам игры за Шамана Исцеления. Здесь разобраны билды талантов, приоритет заклинаний, подбор экипировки, настройка интерфейса, макросы и WA и многое другое.
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

Соответственно, билды Энха можно разделить на <span style="color:#FFFFFF;font-size:1em;">**физические**</span>, <span style="color:#f16f25;font-size:1em;">**стихийного**</span>, и **гибридные** варианты.

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

## <span style="color:#FFFFFF;font-size:1em;">**Физический**</span> билд в Рейде

В рейдовом <span style="color:#FFFFFF;font-size:1em;">**физическом**</span> билде берутся большинство талантов, усиливающих [Оружие неистовства ветра](https://www.wowhead.com/ru/spell=33757/) и [Удар бури](https://www.wowhead.com/ru/spell=17364).

Талант [Укоренившиеся стихии](https://ru.wowhead.com/spell=378270) дает прок [Перерождения](https://ru.wowhead.com/spell=114051) на **6** секунд, что также ощутимо увеличивает урон в СТ и АоЕ, но он зависит от рандома. Для гарантированного бурста стоит использовать обычную версию [Перерождения](https://ru.wowhead.com/spell=114051), с кулдауном **3** минуты.

Билды для рейда являются **рекомендацией** для тех, кто не хочет подбирать таланты самостоятельно. На каждом боссе так или иначе будут представлены разные билды, которые можно увидеть на [Warcraftlogs](https://www.warcraftlogs.com/) и [Subcreation](https://raid.subcreation.net/enhancement-shaman.html).
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

## <span style="color:#FFFFFF;font-size:1em;">**Физический**</span> билд с Мифик+

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BcQAAAAAAAAAAAAAAAAAAAAAAIRSaQSiIJCIJtEJAAAAAAAAAAAAAUiQES0CRBSJJJFAlEJBK?width=700&bgcolor=262b39&locale=ru_RU" width="730" height="500"></iframe>

<p></p>

[Ветра рока](https://www.wowhead.com/ru/spell=384352) – основной бурст талант <span style="color:#FFFFFF;font-size:1em;">**физического**</span> билда. Раз в полторы минуты он дает бафф на **8** секунд, утраивающий шанс срабатывания [Оружия неистовства ветра](https://www.wowhead.com/ru/spell=33757/) и увеличивающий его урон на **10%**. Помните, что [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874), как и [Раскол](https://www.wowhead.com/ru/spell=197214), являются ударами с правой руки и при использовании под баффом [Ветров рока](https://www.wowhead.com/ru/spell=384352) вызывают срабатывание [Оружия неистовства ветра](https://www.wowhead.com/ru/spell=33757/) по всем пораженным целям. 

Следовательно основная задача на АоЕ во время активного баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352) – использовать [Раскол](https://www.wowhead.com/ru/spell=197214) и максимальное количество раз прожать [Сокрушающую молнию](https://www.wowhead.com/ru/spell=187874). Кулдаун [Сокрушающей молнии](https://www.wowhead.com/ru/spell=187874) составляет **12** секунд и снижается Скоростью, но его можно сократить еще больше за счет [Цепной молнии](https://ru.wowhead.com/spell=188443) с талантом [Сокрушающие бури](https://www.wowhead.com/ru/spell=334308). [Цепная молния](https://ru.wowhead.com/spell=188443) сокращает кулдаун [Сокрушающей молнии](https://www.wowhead.com/ru/spell=187874) на **1** секунду за каждого пораженного противника, и поражает до **5** противников.

Не забывайте также перед [Ветрами рока](https://www.wowhead.com/ru/spell=384352) использовать [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533/), который усиливает весь наносимый физический урон на **32%** на **15** секунд.

Ротация вне бурста в <span style="color:#FFFFFF;font-size:1em;">**физическом**</span> билде заключается в трате стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880) на [Цепную молнию](https://ru.wowhead.com/spell=188443) (желательно при **10** стаках) и использовании [Раскола](https://www.wowhead.com/ru/spell=197214), [Сокрушающей молнии](https://www.wowhead.com/ru/spell=187874), [Ледяного клинка](https://www.wowhead.com/ru/spell=342240/), [Удара бури](https://www.wowhead.com/ru/spell=17364) и [Вскипания лавы](https://www.wowhead.com/ru/spell=60103) согласно приоритетам.

[Вскипание лавы](https://www.wowhead.com/ru/spell=60103) с талантом [Натиск лавы](https://www.wowhead.com/ru/spell=334033) распространяет [Огненные шоки](https://ru.wowhead.com/spell=188389) на **4** ближайших противников и этим тоже не стоит пренебрегать. Используйте [Огненной шок](https://ru.wowhead.com/spell=188389) при подходе к паку и сразу же спредайте его [Вскипанием лавы](https://www.wowhead.com/ru/spell=60103), после чего переходите к другим способностям.

При использовании таланта [Буря с градом](https://www.wowhead.com/ru/spell=334195/) следует использовать [Ледяной шок](https://www.wowhead.com/ru/spell=196840/) после каждой траты стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880). Также стоит использовать по кулдауну [Ледяной клинок](https://www.wowhead.com/ru/spell=342240/), увеличивающим урон следующего [Ледяного шока](https://www.wowhead.com/ru/spell=196840/) на **100%**.

Можно заменить [Бурю с градом](https://www.wowhead.com/ru/spell=334195) и [Ледяной клинок](https://www.wowhead.com/ru/spell=342240/) на [Кольцо огня](https://www.wowhead.com/ru/spell=333974/), что сделает билд проще для реализации, но ценой меньшего урона в бою против **1-3** целей.

Еще один важный момент – реализация таланта [Воззвание к Ториму](https://www.wowhead.com/ru/spell=384444), который автоматически применяет [Молнию](https://www.wowhead.com/ru/spell=188196/) или [Цепную молнию](https://ru.wowhead.com/spell=188443) к текущей цели при использовании [Удара ветра](https://www.wowhead.com/ru/spell=115356) (это [Удар бури](https://www.wowhead.com/ru/spell=17364) во время активного [Перерождения](https://www.wowhead.com/ru/spell=114051)). Выбор между [Молнией](https://www.wowhead.com/ru/spell=188196/) или [Цепной молнией](https://ru.wowhead.com/spell=188443) зависит от последнего примененного заклинания, так что если в бою против одной цели у вас автоматически применяется [Цепная молния](https://ru.wowhead.com/spell=188443), то стоит вручную «перезаписать» его на [Молнию](https://www.wowhead.com/ru/spell=188196/). На АоЕ, соответственно, следует тоже самое сделать с [Цепной молнией](https://ru.wowhead.com/spell=188443). [WA для отслеживания](https://wago.io/DT4YbYlpN) [Воззвания к Ториму](https://www.wowhead.com/ru/spell=384444) (она же есть в [сборке на Энха](https://wago.io/HJxL_fG7C) от [Амани](https://www.twitch.tv/amanizandalari)).


## <span style="color:#f16f25;font-size:1em;">**Стихийный**</span> билд в Рейде



<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BcQAAAAAAAAAAAAAAAAAAAAAAIJJpEJgkEikkQJhAAAAAAAAAAAAAQLCRIBFBkUSSSJASkEA?width=700&bgcolor=262b39&locale=ru_RU" width="730" height="500"></iframe>

<p></p>

Основной <span style="color:#f16f25;font-size:1em;">**стихийный**</span> для рейда, с небольшим кливом. Основной урон идет от [Вскипания лавы](https://www.wowhead.com/ru/spell=60103) и [Удара духов стихий](https://www.wowhead.com/ru/spell=117014), усиленных такими талантами, как  [Горячая рука](https://www.wowhead.com/ru/spell=201900) и [Духи стихий](https://www.wowhead.com/ru/spell=262624).


Билды для рейда являются **рекомендацией** для тех, кто не хочет подбирать таланты самостоятельно. На каждом боссе так или иначе будут представлены разные билды, которые можно увидеть на [Warcraftlogs](https://www.warcraftlogs.com/) и [Subcreation](https://raid.subcreation.net/enhancement-shaman.html).
{: class="bordered"}

## <span style="color:#f16f25;font-size:1em;">**Стихийный**</span> билд в Мифик+

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BcQAAAAAAAAAAAAAAAAAAAAAAIRSaRCiIhIJJUSkAAAAAAAAAAAAAQJCRIRLEFIlkkUAUSkEA?width=700&bgcolor=262b39&locale=ru_RU" width="730" height="500"></iframe>

<p></p>

Основа <span style="color:#f16f25;font-size:1em;">**стихийного**</span> билда в Мифик+ – спред [Огненных шоков](https://ru.wowhead.com/spell=188389) вплоть до **6** целей (максимальное количество активных дебаффов) и последующее их усиление с помощью таланта [Хлещущее пламя](https://www.wowhead.com/ru/spell=334046). В этом также помогают таланты [Пепельный катализатор](https://www.wowhead.com/ru/spell=390370/) и [Горячая рука](https://www.wowhead.com/ru/spell=201900), сокращающие кулдаун [Вскипания лавы](https://www.wowhead.com/ru/spell=60103).

Для удобного отслеживания дебаффов используйте этот [мод на Plater](https://wago.io/o9Q7MSLDi) или [WA](https://wago.io/aga_S7YFN) от **Nikyou**.
{: class="bordered"}

Также [Вскипание лавы](https://www.wowhead.com/ru/spell=60103) с талантом [Натиск лавы](https://www.wowhead.com/ru/spell=334033) распространяет [Огненные шоки](https://ru.wowhead.com/spell=188389) на **4** ближайших противников, нанося при этом урон при наложении. Стоит использовать [Огненной шок](https://ru.wowhead.com/spell=188389) при подходе к паку и сразу же спредать его [Вскипанием лавы](https://www.wowhead.com/ru/spell=60103), после чего применить [Первозданную волну](https://ru.wowhead.com/spell=375982) и [Молнию](https://www.wowhead.com/ru/spell=188196/). Это даст **60%** бонус к Скорости (за **6** целей под [Огненным шоком](https://ru.wowhead.com/spell=188389)), что является основным бурстом <span style="color:#f16f25;font-size:1em;">**стихийного**</span> билда.

Когда под [Огненными шоками](https://ru.wowhead.com/spell=188389) находится максимальное количество целей следует кастовать [Кольцо огня](https://www.wowhead.com/ru/spell=333974/), которое наносит отличный АоЕ урон. С талантом [Кружащий Водоворот](https://www.wowhead.com/ru/spell=384359) оно также дает довольно много стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880), так что не стоит кастовать его при максимальном количестве стаков, сначала потратьте их на [Цепную молнию](https://ru.wowhead.com/spell=188443).

В <span style="color:#f16f25;font-size:1em;">**стихийном**</span> билде также берется [Удар духов стихий](https://www.wowhead.com/ru/spell=117014), хотя его использование в Мифик+ опционально. Но этот талант дает отличный урон в бою против одной цели, и особенно с активными волками от таланта [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533), которые в сочетании с талантом [Духи стихий](https://www.wowhead.com/ru/spell=262624) увеличивают не физический урон, а стихийный. При этом на АоЕ [Удар духов стихий](https://www.wowhead.com/ru/spell=117014) используется только в том случае, если активны волки от [Духа дикого зверя](https://www.wowhead.com/ru/spell=51533).




## Гибридный билд в Мифик+

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BcQAAAAAAAAAAAAAAAAAAAAAAIRSaAJikISik0SkAAAAAAAAAAAAAQJCRIJCRBSJJJFAlEJBA?width=700&bgcolor=262b39&locale=ru_RU" width="730" height="500"></iframe>

<p></p>

Данный билд сочетает в себе оба бурста <span style="color:#FFFFFF;font-size:1em;">**физического**</span> и <span style="color:#f16f25;font-size:1em;">**стихийного**</span> билдов – [Ветра рока](https://www.wowhead.com/ru/spell=384352) и [Первозданную волну](https://ru.wowhead.com/spell=375982). В результате бурст от [Ветров рока](https://www.wowhead.com/ru/spell=384352) будет усилен дополнительной Скоростью от [Расколотых стихий](https://ru.wowhead.com/spell=382042), что очень сильно увеличивает урон на АоЕ.

Во время активных [Ветров рока](https://www.wowhead.com/ru/spell=384352) с баффом на Скорость получится сдать гораздо больше [Сокрушающих молний](https://www.wowhead.com/ru/spell=187874), чем без дополнительной Скорости. Нередко получается чередовать подряд только [Сокрушающую молнию](https://www.wowhead.com/ru/spell=187874) и [Цепную молнию](https://ru.wowhead.com/spell=188443), которые усиливают друг друга. [Сокрушающая молнию](https://www.wowhead.com/ru/spell=187874) под [Ветрами рока](https://www.wowhead.com/ru/spell=384352) часто дает достаточно стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880) для применения [Цепной молнии](https://ru.wowhead.com/spell=188443), которая в свою очередь снижает кулдаун и увеличивает урон следующей [Сокрушающей молнии](https://www.wowhead.com/ru/spell=187874).

Этот билд не зависит от рандома, а только от реализации ваших бурстов и понимания таймингов. Здесь не используется талант [Укоренившиеся стихии](https://ru.wowhead.com/spell=378270), а волки от таланта [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533/) всегда дают фиксированный бафф на физический урон, а не один из трех стихийных.

Еще один плюс этого билда – отсутствие необходимости менять цели для реализации дебаффа от таланта [Хлещущее пламя](https://www.wowhead.com/ru/spell=334046), как это следует делать в стихийном билде. Главное первым [Вскипанием лавы](https://www.wowhead.com/ru/spell=60103) ударить именно по цели с [Огненным шоком](https://ru.wowhead.com/spell=188389), чтобы развесить этот дебафф на **4** дополнительные цели. Здесь нет сокращения кулдауна [Вскипания лавы](https://www.wowhead.com/ru/spell=60103) от таланта [Пепельный катализатор](https://www.wowhead.com/ru/spell=390370), поэтому нужно быть внимательным и не промахнуться по цели без [Огненного шока](https://ru.wowhead.com/spell=188389).

К минусам гибридного билда можно отнести его чуть более низкий урон в бою против одной цели, в сравнении с <span style="color:#FFFFFF;font-size:1em;">**физическим**</span> и <span style="color:#f16f25;font-size:1em;">**стихийным**</span>, из-за чего его не стоит использовать в рейде. Однако это окупается его бурст потенциалом на АоЕ в Мифик+, если вы сможете полноценно реализовать свои кулдауны. 


# Приоритет способностей

В этом разделе разобран приоритет заклинаний согласно выбранным талантам. Посмотреть подробное описание всех способностей Энх Шамана можно в [этой статье](https://stormkeeper.ru/enh/spells.html).
{: class="bordered"}

Основа игры на Шамане Совершенствования заключается в накоплении стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880) с помощью способностей ближнего боя и тратой этих стаков на мощные мгновенные заклинания ([Удар духов стихий](https://www.wowhead.com/ru/spell=117014), [Выброс лавы](https://ru.wowhead.com/spell=51505), [Молния](https://www.wowhead.com/ru/spell=188196/)).

Мгновенно применять заклинания можно при накоплении **5** стаков или более, а максимум можно набрать **10** стаков. Не стоит сразу же тратить стаки, как только их накопится **5**, сначала используйте способности с кулдауном, чтобы они не простаивали.

Ниже вы найдете приоритет способностей, который читается следующим образом:
1. Выберите интересующие вас таланты с помощью галочек, после чего приоритет изменится соответствующим образом.
2. Читайте приоритет с первого пункта и вниз. Если вы можете «выполнить» первый пункт, например когда способность не на кулдауне и соблюдены другие условия, вы используете эту способность.
3. Если вы не можете «выполнить» её, то переходите к следующему пункту.
4. После каждого применения заклинаний мысленно возвращайтесь в начала списка приоритетов и проходите по всем пунктам заново.


## Опенер

Опенер – это фиксированный порядок способностей в самом начале боя. Подразумевается, что перед боем у вас нет стаков [Оружия Водоворота](https://www.wowhead.com/ru/spell=187880) и все способности не на кулдауне.

Выберите используемые таланты и опенер соответственно поменяется. Данный опенер является универсальным и для боя против одной цели, и для АоЕ.

<ul markdown="1" class="rotation_switches" style="list-style-type: none;" >

  <li markdown=1 id="rotation_switch_ascopen" class="rotation_switch"><input type="checkbox"> [Перерождение](https://ru.wowhead.com/spell=114051)</li>
  <li markdown=1 id="rotation_switch_dwopen" class="rotation_switch"><input type="checkbox"> [Ветра рока](https://www.wowhead.com/ru/spell=384352)</li>
  <li markdown=1 id="rotation_switch_feralopen" class="rotation_switch"><input type="checkbox"> [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533/)</li>
  <li markdown=1 id="rotation_switch_pwopen" class="rotation_switch"><input type="checkbox"> [Первозданная волна](https://ru.wowhead.com/spell=375982)</li>
  <li markdown=1 id="rotation_switch_alphaopen" class="rotation_switch"><input type="checkbox"> [Альфа-волк](https://ru.wowhead.com/spell=198434)</li>
  <li markdown=1 id="rotation_switch_ebopen" class="rotation_switch"><input type="checkbox"> [Удар духов стихий](https://www.wowhead.com/ru/spell=117014)</li>
  <li markdown=1 id="rotation_switch_totemopen" class="rotation_switch"><input type="checkbox"> [Тотем неистовства ветра](https://www.wowhead.com/ru/spell=8512)</li>
    
</ul>


1. {:.rotation_line_totemopen_on style="display:none;"}[Тотем неистовства ветра](https://www.wowhead.com/ru/spell=8512) как можно ближе к боссу на момент пула.
2. {:.rotation_line_pwopen_off style="display:checked;"}[Огненный шок](https://ru.wowhead.com/spell=188389) на пути к цели.
3. {:.rotation_line_feralopen_on style="display:none;"}[Дух дикого зверя](https://www.wowhead.com/ru/spell=51533/).
4. {:.rotation_line_pwopen_on style="display:none;"}[Первозданная волна](https://ru.wowhead.com/spell=375982) для наложения [Огненного шока](https://ru.wowhead.com/spell=188389) и генерации стаков [Оружия Водоворота](https://www.wowhead.com/ru/spell=187880).
5. {:.rotation_line_pwopen_on style="display:none;"}[Вскипание лавы]() для спреда [Огненного шока](https://ru.wowhead.com/spell=188389), если в бою несколько целей.
6. {:.rotation_line_pwopen_on style="display:none;"}[Молния](https://www.wowhead.com/ru/spell=188196/) с **10** стаками [Оружия Водоворота](https://www.wowhead.com/ru/spell=187880) и баффом от [Первозданной волны](https://ru.wowhead.com/spell=375982).
7. {:.rotation_line_alphaopen_on style="display:none;"}[Сокрушающая молния](https://www.wowhead.com/ru/spell=187874) или [Цепная молния](https://ru.wowhead.com/spell=188443) для активации таланта [Альфа-волк](https://ru.wowhead.com/spell=198434).
8. [Удар бури]() для генерации стаков [Оружия Водоворота](https://www.wowhead.com/ru/spell=187880).
9. {:.rotation_line_ascopen_on style="display:none;"}[Перерождение](https://ru.wowhead.com/spell=114051) в ближнем бою и сразу же [Удар ветра]().
10. {:.rotation_line_dwopen_on style="display:none;"}[Ветра рока](https://www.wowhead.com/ru/spell=384352) и соазу же [Удар бури]().
11. {:.rotation_line_ebopen_on style="display:none;"}[Удар духов стихий](https://www.wowhead.com/ru/spell=117014) как только накопится **8+** стаков [Оружия Водоворота](https://www.wowhead.com/ru/spell=187880) и если в бою не более **2** целей.
12. {:.rotation_line_ebopen_off style="display:checked;"}[Выброс лавы]() как только накопится **8+** стаков [Оружия Водоворота](https://www.wowhead.com/ru/spell=187880).
13. Продолжайте обычную ротацию.

## Бой против одной цели

## АоЕ-бой

### Приоритет заклинаний

**Важно!** Убедитесь, что у вас всегда наложены усиления на оружия – [Оружие неистовства ветра](https://ru.wowhead.com/spell=33757/) и [Оружие языка пламени](https://ru.wowhead.com/spell=318038/).
{: class="bordered"}


**Бой против одной цели:**
1. [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533) по кулдауну.
2. [Ветра рока](https://www.wowhead.com/ru/spell=384352), если в ближайшее время не будет дополнительных мобов.
3. [Удар ветра](https://www.wowhead.com/ru/spell=115356) ([Удар бури](https://www.wowhead.com/ru/spell=17364) во время активного [Перерождения](https://www.wowhead.com/ru/spell=114051)).
4. [Удар бури](https://www.wowhead.com/ru/spell=17364) во время баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352).
5. [Ледяной клинок](https://www.wowhead.com/ru/spell=342240/) во время баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352).
6. [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874) во время баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352).
7. [Раскол](https://www.wowhead.com/ru/spell=197214) во время баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352).
8. [Огненный шок](https://ru.wowhead.com/spell=188389), если отстутствует на цели.
9. [Ледяной клинок](https://www.wowhead.com/ru/spell=342240/) по кулдауну.
10. [Ледяной шок](https://www.wowhead.com/ru/spell=196840/) с баффом от таланта [Буря с градом](https://www.wowhead.com/ru/spell=334195).
11. [Выброс лавы](https://ru.wowhead.com/spell=51505) при наличии **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
12. [Молния](https://www.wowhead.com/ru/spell=188196/) при наличии **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
13. [Удар бури](https://www.wowhead.com/ru/spell=17364) по кулдауну.
14. [Вскипание лавы](https://www.wowhead.com/ru/spell=60103) по кулдауну.
15. [Выброс лавы](https://ru.wowhead.com/spell=51505) при наличии **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
16. [Молния](https://www.wowhead.com/ru/spell=188196/) при наличии **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
17. [Раскол](https://www.wowhead.com/ru/spell=197214) по кулдауну, если в ближайшее время не будет дополнительных целей.
18. [Ледяной шок](https://www.wowhead.com/ru/spell=196840/) по кулдауну.
19. [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874) по кулдауну.
20. [Огненный шок](https://ru.wowhead.com/spell=188389), если все остальные способности недоступны.

<hr style="height:1px;background-color:#bbb">
<p></p>

**Бой против 2+ целей:**
1. [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533) по кулдауну.
2. [Огненный шок](https://ru.wowhead.com/spell=188389), если его нет ни на одной из целей.
3. [Вскипание лавы](https://www.wowhead.com/ru/spell=60103), если на цели есть [Огненный шок](https://ru.wowhead.com/spell=188389), а на соседних целях [Огненный шок](https://ru.wowhead.com/spell=188389) отсутствует.
4. [Ветра рока](https://www.wowhead.com/ru/spell=384352) по кулдауну.
5. [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874) во время баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352).
6. [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874), если нет активного баффа от этого заклинания.
7. [Раскол](https://www.wowhead.com/ru/spell=197214) во время баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352).
8. [Удар ветра](https://www.wowhead.com/ru/spell=115356) по кулдауну ([Удар бури](https://www.wowhead.com/ru/spell=17364) во время активного [Перерождения](https://www.wowhead.com/ru/spell=114051)).
9. [Цепная молния](https://ru.wowhead.com/spell=188443) при наличии **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880) во время баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352).
10. [Ледяной клинок](https://www.wowhead.com/ru/spell=342240/) по кулдауну.
11. [Ледяной шок](https://www.wowhead.com/ru/spell=196840/) с баффом от таланта [Буря с градом](https://www.wowhead.com/ru/spell=334195).
12. [Раскол](https://www.wowhead.com/ru/spell=197214) по кулдауну, желательно с баффами от талантов [Наследие ледяной ведьмы](https://www.wowhead.com/ru/spell=384450) и/или [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533).
13. [Цепная молния](https://ru.wowhead.com/spell=188443) при наличии **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
14. [Удар бури](https://www.wowhead.com/ru/spell=17364) по кулдауну.
15. [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874) по кулдауну.
16. [Вскипание лавы](https://www.wowhead.com/ru/spell=60103) по кулдауну.
17. [Цепная молния](https://ru.wowhead.com/spell=188443) при наличии **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
18. [Ледяной шок](https://www.wowhead.com/ru/spell=196840/) по кулдауну.
19. [Огненный шок](https://ru.wowhead.com/spell=188389), если остальные способности недоступны.



<hr style="height:1px;background-color:#bbb">
<p></p>











## Cтихийный билд

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BcQAAAAAAAAAAAAAAAAAAAAAAIRSaRCiIhIJJUSkAAAAAAAAAAAAAQJCRIJCRBSJJJFAlEJBA?width=700&bgcolor=262b39&locale=ru_RU" width="730" height="500"></iframe>

<p></p>

Основа стихийного билда – спред [Огненных шоков](https://ru.wowhead.com/spell=188389) на **6** целей (максимальное количество активных дебаффов) и последующее их усиление с помощью таланта [Хлещущее пламя](https://www.wowhead.com/ru/spell=334046). В этом также помогают таланты [Пепельный катализатор](https://www.wowhead.com/ru/spell=390370/) и [Горячая рука](https://www.wowhead.com/ru/spell=201900), сокращающие кулдаун [Вскипания лавы](https://www.wowhead.com/ru/spell=60103).

Также [Вскипание лавы](https://www.wowhead.com/ru/spell=60103) с талантом [Натиск лавы](https://www.wowhead.com/ru/spell=334033) распространяет [Огненные шоки](https://ru.wowhead.com/spell=188389) на **4** ближайших противников, нанося при этом урон при наложении. Стоит использовать [Огненной шок](https://ru.wowhead.com/spell=188389) при подходе к паку и сразу же спредать его [Вскипанием лавы](https://www.wowhead.com/ru/spell=60103), после чего применить [Первозданную волну](https://ru.wowhead.com/spell=375982) и [Молнию](https://www.wowhead.com/ru/spell=188196/). Это даст **60%** бонус к Скорости (за **6** целей под [Огненным шоком](https://ru.wowhead.com/spell=188389)), что является основным бурстом стихийного билда.

Когда под [Огненными шоками](https://ru.wowhead.com/spell=188389) находится максимальное количество целей следует кастовать [Кольцо огня](https://www.wowhead.com/ru/spell=333974/), которое наносит отличный АоЕ урон. С талантом [Кружащий Водоворот](https://www.wowhead.com/ru/spell=384359) оно также дает довольно много стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880), так что не стоит кастовать его при максимальном количестве стаков, сначала потратьте их на [Цепную молнию](https://ru.wowhead.com/spell=188443).

В стихийном билде также берется [Удар духов стихий](https://www.wowhead.com/ru/spell=117014), хотя его использование в Мифик+ опционально. Но этот талант дает отличный урон в бою против одной цели, и особенно с активными волками от таланта [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533), которые в сочетании с талантом [Духи стихий](https://www.wowhead.com/ru/spell=262624) увеличивают не физический урон, а стихийный. При этом на АоЕ [Удар духов стихий](https://www.wowhead.com/ru/spell=117014) используется только в том случае, если активны волки от [Духа дикого зверя](https://www.wowhead.com/ru/spell=51533).

### Приоритет заклинаний

**Важно!** Убедитесь, что у вас всегда наложены усиления на оружия – [Оружие неистовства ветра](https://ru.wowhead.com/spell=33757/) и [Оружие языка пламени](https://ru.wowhead.com/spell=318038/).
{: class="bordered"}

**Бой против одной цели:**
1. [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533) по кулдауну.
2. [Первозданная волна](https://ru.wowhead.com/spell=375982), если в ближайшее время не будет дополнительных целей.
3. [Огненный шок](https://ru.wowhead.com/spell=188389), если отстутствует на цели.
4. [Вскипание лавы](https://www.wowhead.com/ru/spell=60103) при активном баффе [Горячая рука](https://www.wowhead.com/ru/spell=201900) или при наличии **6+** стаков от таланта [Пепельный катализатор](https://www.wowhead.com/ru/spell=390370/).
5. [Молния](https://www.wowhead.com/ru/spell=188196/) с баффом от [Первозданной волны](https://ru.wowhead.com/spell=375982).
6. [Удар духов стихий](https://www.wowhead.com/ru/spell=117014) если у вас **2** заряда этой способности и **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880), либо если **1** заряд и **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
7. [Молния](https://www.wowhead.com/ru/spell=188196/) при наличии **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
8. [Удар бури](https://www.wowhead.com/ru/spell=17364) по кулдауну.
9. [Вскипание лавы](https://www.wowhead.com/ru/spell=60103) по кулдауну.
10. [Молния](https://www.wowhead.com/ru/spell=188196/) при наличии **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
11. [Раскол](https://www.wowhead.com/ru/spell=197214) по кулдауну, если в ближайшее время не будет дополнительных целей.
12. [Кольцо огня](https://www.wowhead.com/ru/spell=333974/) по кулдауну.
13. [Ледяной шок](https://www.wowhead.com/ru/spell=196840/) по кулдауну.
19. [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874) по кулдауну.
20. [Огненный шок](https://ru.wowhead.com/spell=188389), если остальные способности недоступны.


<hr style="height:1px;background-color:#bbb">
<p></p>

**Бой против 2+ целей:**
1. [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533) по кулдауну.
2. [Первозданная волна](https://ru.wowhead.com/spell=375982) по кулдауну.
3. [Молния](https://www.wowhead.com/ru/spell=188196/) с баффом от [Первозданной волны](https://ru.wowhead.com/spell=375982), если под [Огненным шоком](https://ru.wowhead.com/spell=188389) находится максимальное количество врагов и при наличии **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
4. [Цепная молния](https://ru.wowhead.com/spell=188443) при наличии **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
5. [Кольцо огня](https://www.wowhead.com/ru/spell=333974/), если под [Огненным шоком](https://ru.wowhead.com/spell=188389) находится максимальное количество врагов.
6. [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874), если нет активного баффа от этого заклинания.
7. [Вскипание лавы](https://www.wowhead.com/ru/spell=60103) по цели с [Огненным шоком](https://ru.wowhead.com/spell=188389) и без активного дебаффа от таланта [Хлещущее пламя](https://www.wowhead.com/ru/spell=334046).
8. [Огненный шок](https://ru.wowhead.com/spell=188389), если под этим дебаффом не максимальное количество целей.
9. [Раскол](https://www.wowhead.com/ru/spell=197214) по кулдауну.
10. [Удар духов стихий](https://www.wowhead.com/ru/spell=117014) при наличии **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880) и если в бою не более **2** целей.
11. [Удар бури](https://www.wowhead.com/ru/spell=17364) по кулдауну.
12. [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874) по кулдауну.
13. [Кольцо огня](https://www.wowhead.com/ru/spell=333974/), если в бою не более **2** целей.
14. [Цепная молния](https://ru.wowhead.com/spell=188443) при наличии **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
15. [Ледяной шок](https://www.wowhead.com/ru/spell=196840/), если остальные способности недоступны.


<hr style="height:1px;background-color:#bbb">
<p></p>

### Вариации билда

* Если заменить [Кольцо огня](https://www.wowhead.com/ru/spell=333974/) на [Бурю с градом](https://www.wowhead.com/ru/spell=334195) и взять [Ледяной клинок](https://www.wowhead.com/ru/spell=342240/), то приоритет усиленного [Ледяного шока](https://www.wowhead.com/ru/spell=196840/) будет примерно равен [Кольцу огня](https://www.wowhead.com/ru/spell=333974/) с максимальным количеством [Огненных шоков](https://ru.wowhead.com/spell=188389).
* Если вместо талантов [Горячая рука](https://www.wowhead.com/ru/spell=201900), [Пепельный катализатор](https://www.wowhead.com/ru/spell=390370) и [Хлещущее пламя](https://www.wowhead.com/ru/spell=334046) взять таланты на физический урон, вплоть до [Ветров рока](https://www.wowhead.com/ru/spell=384352), то получится аналог гибридного билда, описанного дальше в этом руководстве.
* Если взять такие таланты, как [Свирепость бури](https://www.wowhead.com/ru/spell=319930) и [Сливающиеся бури](https://www.wowhead.com/ru/spell=384363), то это поднимет ценность [Удара бури](https://www.wowhead.com/ru/spell=17364) на АоЕ.

## Гибридный билд

<p></p>

<iframe title="Talent Embed Example 1" src="https://www.raidbots.com/simbot/render/talents/BcQAAAAAAAAAAAAAAAAAAAAAAIRSaAJikISik0SkAAAAAAAAAAAAAQJCRIJCRBSJJJFAlEJBA?width=700&bgcolor=262b39&locale=ru_RU" width="730" height="500"></iframe>

<p></p>


Данный билд сочетает в себе оба бурста физического и стихийного билдов – [Ветра рока](https://www.wowhead.com/ru/spell=384352) и [Первозданную волну](https://ru.wowhead.com/spell=375982). В результате бурст от [Ветров рока](https://www.wowhead.com/ru/spell=384352) будет усилен дополнительной Скоростью от [Расколотых стихий](https://ru.wowhead.com/spell=382042), что очень сильно увеличивает урон на АоЕ.

Во время активных [Ветров рока](https://www.wowhead.com/ru/spell=384352) с баффом на Скорость получится сдать гораздо больше [Сокрушающих молний](https://www.wowhead.com/ru/spell=187874), чем без дополнительной Скорости. Нередко получается чередовать подряд только [Сокрушающую молнию](https://www.wowhead.com/ru/spell=187874) и [Цепную молнию](https://ru.wowhead.com/spell=188443), которые усиливают друг друга. [Сокрушающая молнию](https://www.wowhead.com/ru/spell=187874) под [Ветрами рока](https://www.wowhead.com/ru/spell=384352) часто дает достаточно стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880) для применения [Цепной молнии](https://ru.wowhead.com/spell=188443), которая в свою очередь снижает кулдаун и увеличивает урон следующей [Сокрушающей молнии](https://www.wowhead.com/ru/spell=187874).

Этот билд не зависит от рандома, а только от реализации ваших бурстов и понимания таймингов. Здесь не используется талант [Укоренившиеся стихии](https://ru.wowhead.com/spell=378270), а волки от таланта [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533/) всегда дают фиксированный бафф на физический урон, а не один из трех стихийных.

Еще один плюс этого билда – отсутствие необходимости менять цели для реализации дебаффа от таланта [Хлещущее пламя](https://www.wowhead.com/ru/spell=334046), как это следует делать в стихийном билде. Главное первым [Вскипанием лавы](https://www.wowhead.com/ru/spell=60103) ударить именно по цели с [Огненным шоком](https://ru.wowhead.com/spell=188389), чтобы развесить этот дебафф на **4** дополнительные цели. Здесь нет сокращения кулдауна [Вскипания лавы](https://www.wowhead.com/ru/spell=60103) от таланта [Пепельный катализатор](https://www.wowhead.com/ru/spell=390370), поэтому нужно быть внимательным и не промахнуться по цели без [Огненного шока](https://ru.wowhead.com/spell=188389).

К минусам гибридного билда можно отнести его чуть более низкий урон в бою против одной цели, в сравнении с физическим и стихийным. Однако это окупается его бурст потенциалом на АоЕ, если вы сможете полноценно реализовать свои кулдауны.


### Приоритет заклинаний

**Важно!** Убедитесь, что у вас всегда наложены усиления на оружия – [Оружие неистовства ветра](https://ru.wowhead.com/spell=33757/) и [Оружие языка пламени](https://ru.wowhead.com/spell=318038/).
{: class="bordered"}

**Бой против одной цели:**
1. [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533) по кулдауну.
2. [Первозданная волна](https://ru.wowhead.com/spell=375982), если в ближайшее время не будет дополнительных целей.
3. [Огненный шок](https://ru.wowhead.com/spell=188389), если отстутствует на цели.
4. [Молния](https://www.wowhead.com/ru/spell=188196/) с баффом от [Первозданной волны](https://ru.wowhead.com/spell=375982).
5. [Ветра рока](https://www.wowhead.com/ru/spell=384352), если в ближайшее время не будет дополнительных целей.
6. [Удар бури](https://www.wowhead.com/ru/spell=17364) во время баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352).
7. [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874) во время баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352).
8. [Раскол](https://www.wowhead.com/ru/spell=197214) во время баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352).
9. [Выброс лавы](https://ru.wowhead.com/spell=51505) при наличии **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
10. [Молния](https://www.wowhead.com/ru/spell=188196/) при наличии **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
11. [Удар бури](https://www.wowhead.com/ru/spell=17364) по кулдауну.
12. [Вскипание лавы](https://www.wowhead.com/ru/spell=60103) по кулдауну.
13. [Выброс лавы](https://ru.wowhead.com/spell=51505) при наличии **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
14. [Молния](https://www.wowhead.com/ru/spell=188196/) при наличии **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
15. [Раскол](https://www.wowhead.com/ru/spell=197214) по кулдауну, если в ближайшее время не будет дополнительных целей.
16. [Кольцо огня](https://www.wowhead.com/ru/spell=333974/) по кулдауну.
17. [Ледяной шок](https://www.wowhead.com/ru/spell=196840/) по кулдауну.
18. [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874) по кулдауну.
19. [Огненный шок](https://ru.wowhead.com/spell=188389), если все остальные способности недоступны.


<hr style="height:1px;background-color:#bbb">
<p></p>

**Бой против 2+ целей:**

1. [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533) по кулдауну.
2. [Первозданная волна](https://ru.wowhead.com/spell=375982) по кулдауну.
3. [Молния](https://www.wowhead.com/ru/spell=188196/) с баффом от [Первозданной волны](https://ru.wowhead.com/spell=375982), если под [Огненным шоком](https://ru.wowhead.com/spell=188389) находится максимальное количество целей и при наличии **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
4. [Ветра рока](https://www.wowhead.com/ru/spell=384352) по кулдауну.
5. [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874) во время баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352)
6. [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874), если нет активного баффа от этого заклинания.
7. [Раскол](https://www.wowhead.com/ru/spell=197214) во время баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352).
8. [Цепная молния](https://ru.wowhead.com/spell=188443) при наличии **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880) во время баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352), либо при наличии **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880) без баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352).
9. [Кольцо огня](https://www.wowhead.com/ru/spell=333974/), если под [Огненным шоком](https://ru.wowhead.com/spell=188389) находится максимальное количество целей.
11. [Вскипание лавы](https://www.wowhead.com/ru/spell=60103) по цели с [Огненным шоком](https://ru.wowhead.com/spell=188389).
12. [Огненный шок](https://ru.wowhead.com/spell=188389), если под этим дебаффом не максимальное количество целей.
13. [Раскол](https://www.wowhead.com/ru/spell=197214) по кулдауну, желательно с баффами от талантов [Наследие ледяной ведьмы](https://www.wowhead.com/ru/spell=384450) и/или [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533).
14. [Удар бури](https://www.wowhead.com/ru/spell=17364) по кулдауну.
15. [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874) по кулдауну.
16. [Кольцо огня](https://www.wowhead.com/ru/spell=333974/), если в бою не более **2** целей.
17. [Цепная молния](https://ru.wowhead.com/spell=188443) при наличии **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
18. [Ледяной шок](https://www.wowhead.com/ru/spell=196840/), если остальные способности недоступны.


<hr style="height:1px;background-color:#bbb">
<p></p>

### Вариации билда

* Можно заменить [Кольцо огня](https://www.wowhead.com/ru/spell=333974/) и [Кружащий Водоворот](https://www.wowhead.com/ru/spell=384359/) на [Бурю с градом](https://www.wowhead.com/ru/spell=334195) и [Ледяной клинок](https://www.wowhead.com/ru/spell=342240/) для большего урона по **1-4** целям.

## Общая ветка талантов

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

<p></p>

{% include button.html name="Подробнее про способности и таланты Энх Шамана" link="/ele/spells.html" %}  

<p></p>

# Характеристики

**Ловкость** – лучшая характеристика, так как повышает весь урон и растет от уровня предметов гораздо сильнее, чем вторичные статы. Поэтому в первую очередь стоит смотреть на уровень предметов.

Приоритет статов для Мифик+ для **всех** билдов и **всех** типов PvE контента следующий:

* **Ловкость** > **Скорость** = **Искусность** > **Критический удар** =  > **Универсальность**.

Данный раздел будет дополнен ближе к открытию Мифик+. 
{: class="bordered"}

# Экипировка

<p align="center">
    <img src="/assets/img/ilvl.png"> 
</p>

До старта первого сезона **14** декабря одевайтесь в максимальный уровень предметов, который можно будет получить из Мифик+0 и с помощью крафта. Для крафта потребуется реагент [Тренировочная матрица титанов IV](https://www.wowhead.com/ru/item=198059/), который также добывается в Мифик+0. То есть за две недели вы смотрите в какие слоты вы получили лут из нулей, и потом докрафчиваете экипировку в необходимые слоты.

Стоит с умом потратить первую полученную [Искру искусности](https://www.wowhead.com/ru/item=190453) на мощный крафтовый шмот. Информация по крафту предметов высокого уровня будет добавлена в этот раздел позже.

Данный раздел будет дополнен ближе к открытию Мифик+. 
{: class="bordered"}

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
