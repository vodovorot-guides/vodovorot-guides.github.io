---
layout: page
last_update: 2024-07-23
title: Гайд на Энх Шамана
wow: 11.0
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

<span style="color:#40bf40;font-size:1em;">Плюсы Энха</span>

* Интересный и приятный геймплей, ощущение импакта от нажимаемых кнопок, а также классные анимации.
* Разнообразное древо талантов и варианты билдов, практически полное отсутствие бесполезных «мертвых» талантов.
* Имеет три различных вида контроля больших групп врагов – [Громовой удар](https://www.wowhead.com/ru/spell=378779), [Тотем конденсации](https://ru.wowhead.com/spell=192058) и [Раскол](https://www.wowhead.com/ru/spell=197214).
* Может снимать проклятия, страх и сон, яды, отбрасывать или подкидывать противников, диспелить с врага магию, замедлять и станить группу врагов, превращать врагов в лягушку, а также имеет [Жажду крови](https://ru.wowhead.com/spell=2825).
* Может подхиливать союзников, а также в соло хилить группу с помощью [Наставления предков](https://ru.wowhead.com/spell=108281) во время бурстов на АоЕ.

<span style="color:#ff4040;font-size:1em;">Минусы Энха</span>

* Неправильный отыгрыш приоритетов способностей может привести к простоям и потере урона, так что необходимо продумывать нажимаемые кнопки наперед.
* Основные АоЕ способности имеют кап **5-6** целей.	
* Не имеет иммуна (не считая [Реинкарнации](https://ru.wowhead.com/spell=20608)), для выживания следует полагаться на собственное исцеление и [Астральный сдвиг](https://ru.wowhead.com/spell=108271).

## Изменения в The War Within


* [Тотем неистовства ветра](https://www.wowhead.com/ru/spell=8512/) заменен на [Небесную ярость](https://www.wowhead.com/beta/spell=462854/).
* [Оружие Водоворота](https://www.wowhead.com/ru/spell=187880) теперь изучается на **10** уровне и удалено из обшщей ветки талантов.
* [Шквал](https://www.wowhead.com/ru/spell=382888/) был перенесен из общей ветки талантов в ветку талантов специализации.
* [Свирепый выпад](https://www.wowhead.com/ru/spell=196884) теперь изучается на **14** уровне и был удален из ветки талантов специализации.
* Таланты [Натиск лавы](https://www.wowhead.com/beta/spell=334033/), [Улучшенное оружие Водоворота](https://www.wowhead.com/beta/spell=383303) и [Шаманское наследие](https://www.wowhead.com/beta/spell=384447) теперь требуют **1** очко таланта для полного эффекта вместо **2**. **Данное изменение отсутствует на препатче The War Within.**
* [Первозданная волна](https://www.wowhead.com/ru/spell=375982) теперь имеет время восстановления **30** секунд вместо **45**. 
* [Ветра рока](https://www.wowhead.com/ru/spell=384352) теперь имеет время восстановления **1** минуту вместо **1:30** минут. 
* Радиус распространения [Огненных шоков](https://ru.wowhead.com/spell=188389) от [Натиска лавы](https://www.wowhead.com/beta/spell=334033/) был увеличен на **4** метра.
* Радиус поражения [Сокрушающей молнии](https://www.wowhead.com/ru/spell=187874) увеличен на **4** метра.



<p></p>

{% include button.html name="Все изменения Шамана в The War Within" link="/info/tww.html" %}  

<p></p>

## Видеогайды

<p></p>

{% include youtube.html id="3258mMzUBAA" %}

<p></p>



# Билды талантов

На данный момент (24 июля) существует баг, из-за которого Энх Шаман **не получил** изменения талантов в ветке специализации, и для билдов ниже будет не хватать очков талантов. Используйтье старый билд, но вместо [Тотема неистовства ветра](https://www.wowhead.com/ru/spell=8512/) нужно взять [Шквал](https://www.wowhead.com/ru/spell=382888/).
{: class="bordered"}


## Общая информация

Древо талантов Энха подразумевает использование двух различных билдов – <span class="lightning">Штормового</span> и <span class="fire">Стихийного</span>. 

<span class="lightning">Штормовой</span> билд, или как его еще называют, <span class="physical">Физический</span> билд, отлично сочетается с героической веткой **Вестника шторма** и усилениями урона от школы магии <span class="nature">природы</span>.

<span class="fire">Стихийный</span> билд может играться как в героической ветке **Вестника шторма**, так и ветке **Тотемиста**. Обе ветки взаимодествуют с основными механиками <span class="fire">Стихийного</span> билда, но немного по разному. 

В середине ветки расположены усиления [Оружия Водоворота](https://ru.wowhead.com/spell=187880) и основные АоЕ способности – [Сокрушающая молния](https://www.wowhead.com/ru/spell=187874) и усиление [Цепной молнии](https://www.wowhead.com/ru/spell=188443/). Эти таланты являются **обязательными** в любом билде для Мифик+, так как без них практически нет нормального АоЕ урона. 

В препатче The War Within активно играется только <span class="fire">Стихийный</span> билд, за счет комплекта классовых доспехов текущего сезона.

## Таланты для Рейда


<p></p>

<iframe title="Talent Embed Example 1" src="https://mimiron.raidbots.com/simbot/render/talents/CcQAAAAAAAAAAAAAAAAAAAAAAMzMzyMDYmZYmZmtZmlZAAAAAAAAAAAAAAEAgAAYWmMDmlFzMzMGmZ2wyMzEYsMmZAAmB?width=700&bgcolor=262b39&locale=ru_RU" width="730" height="400"></iframe>

<p></p>

* В данном билде самым главным проком, который ни в коем случае нельзя пропускать, является [Горячая рука](https://www.wowhead.com/ru/spell=201900). **Всегда** чередуйте [Вскипание лавы](https://www.wowhead.com/ru/spell=60103/) с другой способностью во время этого баффа.

* Придерживайте [Первозданную волну](https://ru.wowhead.com/spell=375982) под выход аддов, чтобы получить дополнительную Скорость за счет таланта [Расколотые стихии](https://www.wowhead.com/ru/spell=382042/) и дополнительный урон за счет дублированных [Молний](https://www.wowhead.com/ru/spell=188196/).


* Стаки [Оружия Водоворота](https://ru.wowhead.com/spell=187880) стоит тратить в первую очередь на [Удар духов стихий](https://www.wowhead.com/ru/spell=117014), особенно под баффом от [Духов дикого зверя](https://ru.wowhead.com/spell=51533). Зачастую стоит придерживать [Удар духов стихий](https://www.wowhead.com/ru/spell=117014) под вызов [Духов дикого зверя](https://ru.wowhead.com/spell=51533), если это не уменьшит количество его использования за бой.

* После каждой траты стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880) не забывайте использовать [Ледяной шок](https://www.wowhead.com/ru/spell=196840), так как он получит увеличенный урон за счет таланта [Буря с градом](https://www.wowhead.com/ru/spell=334195).

* Используйте [Ледяной клинок](https://www.wowhead.com/ru/spell=342240) по кулдауну – он не только дает большое количество стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880), но и дополнительно усиливает [Ледяной шок](https://www.wowhead.com/ru/spell=196840).


<p></p>


<hr style="height:1px;background-color:#bbb">
<p></p>



## Таланты для Мифик+


<p></p>

<iframe title="Talent Embed Example 1" src="https://mimiron.raidbots.com/simbot/render/talents/CcQAAAAAAAAAAAAAAAAAAAAAAMzMzyMDGzMDzMzshlZMDAAAAAAAAAAAAAEAgAAYWmMwssYmZGGzMzGWmZmglxyYmBAYG?width=700&bgcolor=262b39&locale=ru_RU" width="730" height="400"></iframe>

<p></p>


* Основным бурстом в <span style="color:#f16f25;font-size:1em;">Cтихийных</span> билдах выступает [Первозданная волна](https://ru.wowhead.com/spell=375982), которая позволяет бурстить практически в каждый пак. [Первозданная волна](https://ru.wowhead.com/spell=375982) позволяет получить бафф вплоть до **40%** Скорости на **12** секунд.

* Также [Вскипание лавы](https://www.wowhead.com/ru/spell=60103) с талантом [Натиск лавы](https://www.wowhead.com/ru/spell=334033) распространяет [Огненные шоки](https://ru.wowhead.com/spell=188389) на **4** ближайших противников, нанося при этом урон при наложении. Стоит использовать [Первозданную волну](https://ru.wowhead.com/spell=375982) при подходе к паку и сразу же спредать его [Вскипанием лавы](https://www.wowhead.com/ru/spell=60103), после чего применить [Огненной шок](https://ru.wowhead.com/spell=188389) и [Молнию](https://www.wowhead.com/ru/spell=188196/). Это даст **40%** бонус к Скорости (за **6** целей под [Огненным шоком](https://ru.wowhead.com/spell=188389)), что является основным бурстом <span style="color:#f16f25;font-size:1em;">**стихийного**</span> билда.

* В данном билде особенно важно чередовать цели под каждое [Вскипание лавы](https://www.wowhead.com/ru/spell=60103), чтобы накладывать дебафф от [Хлещущего пламени](https://www.wowhead.com/ru/spell=334046). Этот дебафф увеличивает урон от [Огненного шока](https://ru.wowhead.com/spell=188389) на **100%**, что ощутимо сказывается на итоговом ДПС.

* Для удобного отслеживания дебаффов используйте [профиль Plater от Amani](https://boosty.to/amani/posts/8dc9d14d-12ae-4f2b-9e34-456a9d625f42?share=post_link) или [мод на Plater](https://wago.io/o9Q7MSLDi) от **Nikyou**.

* С талантом [Буря с градом](https://www.wowhead.com/ru/spell=334195), не нужно каждый [Ледяной шок](https://www.wowhead.com/ru/spell=196840) сдавать **только** с талантом [Ледяной клинок](https://www.wowhead.com/ru/spell=342240). Так как кулдаун [Ледяного клинка](https://www.wowhead.com/ru/spell=342240) в три раза длиннее кулдауна [Ледяного шока](https://www.wowhead.com/ru/spell=196840), то не бойтесь тратить стаки [Бури с градом](https://www.wowhead.com/ru/spell=334195) на [Ледяной шок](https://www.wowhead.com/ru/spell=196840) без баффа от [Ледяного клинка](https://www.wowhead.com/ru/spell=342240).

* [Ледяной клинок](https://www.wowhead.com/ru/spell=342240) стоит кастовать практически по кулдауну, чтобы в момент траты стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880) у вас уже были баффы и от [Ледяного клинка](https://www.wowhead.com/ru/spell=342240), и [Бури с градом](https://www.wowhead.com/ru/spell=334195).

* Всегда поддерживайте бафф от [Сокрущающей молнии](https://www.wowhead.com/ru/spell=187874), который позволяет наносить АоЕ-урон основными способностями, такими как [Удар бури](https://www.wowhead.com/ru/spell=17364), [Вскипание лавы](https://www.wowhead.com/ru/spell=60103) и [Ледяной клинок](https://www.wowhead.com/ru/spell=342240).



<p></p>


<hr style="height:1px;background-color:#bbb">
<p></p>



# Приоритет способностей

Основа игры на Шамане Совершенствования заключается в накоплении стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880) с помощью способностей ближнего боя и трате этих стаков на мощные мгновенные заклинания.

Следуйте следующим основным правилам при игре за Энх Шамана:

* **Следите за количеством стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880)** и своевременно их тратьте. На **10** стаках стоит скастовать подходящее под ситуацию в бою заклинание. Мгновенно применять заклинания можно при накоплении **5** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880) или более, а максимум можно набрать **10** стаков. 

* **Держите способности на кулдауне**. Не тратьте стаки [Оружия Водоворота](https://ru.wowhead.com/spell=187880) сразу же как их накопится **5**, сначала используйте другие ваши способности согласно приоритету. Это поможет избежать простоев в ротации и повысит ваш урон. Пока значение стаков не достигло **10** – используйте все другие способности из списка приоритетов.

* **Реагируйте на проки [Горячей руки](https://www.wowhead.com/ru/spell=201900/)**. Этот бафф крайне сильно влияет на урон и генерацию стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880) и его нужно обязательно отслеживать.

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

Выберите используемые таланты, и приоритет способностей соответственно изменится. Некоторые таланты, такие как [Удар бури](https://www.wowhead.com/ru/spell=17364) и [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533/), подразумеваются как взятые по умолчанию.

<div class="btn-toolbar justify-content-center mt-2 mb-3">
  <div class="btn-group" role="group">
    <button type="button" id="build_enh_elem_raid" class="btn btn-primary rotation-btn">Стихийный билд (СТ)</button>
    <button type="button" id="build_enh_elem_mplus" class="btn btn-primary rotation-btn">Стихийный (АоЕ)</button>
  </div>
</div>

<ul class="rotation_switches form-check form-switch mb-2" style="list-style-type: none;">
  <li markdown="span" class="rotation_switch">
      <input class="form-check-input" type="checkbox" id="rotation_switch_ll"> [Вскипание лавы](https://www.wowhead.com/ru/spell=60103)</li>      
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
      <input class="form-check-input" type="checkbox" id="rotation_switch_sunder"> [Раскол](https://www.wowhead.com/ru/spell=197214/)</li>
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
      <input class="form-check-input" type="checkbox" id="rotation_switch_five"> [Четыре части Т31](https://www.wowhead.com/ru/item-set=1567)</li>    
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
2. {:.no-pw-apl}[Огненный шок](https://ru.wowhead.com/spell=188389) на пути к цели.
3. {:.five-apl .pw-apl}[Первозданная волна](https://www.wowhead.com/ru/spell=375982) для наложения [Огненного шока](https://ru.wowhead.com/spell=188389).
3. [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533/).
4. {:.no-five-apl .pw-apl}[Первозданная волна](https://www.wowhead.com/ru/spell=375982) для наложения [Огненного шока](https://ru.wowhead.com/spell=188389).
1. {:.pw-apl .eb-apl}[Удар духов стихий](https://www.wowhead.com/ru/spell=117014).
5. {:.pw-apl .no-eb-apl}[Молния](https://www.wowhead.com/ru/spell=188196/) с баффом от [Первозданной волны](https://www.wowhead.com/ru/spell=375982).
8. {:.hh-apl .ll-apl}[Вскипание лавы](https://www.wowhead.com/ru/spell=60103/).
2. {:.ic-apl .hs-apl}[Ледяной клинок](https://www.wowhead.com/ru/spell=342240/).
12. {:.ic-apl .pw-apl .hs-apl}[Ледяной шок](https://www.wowhead.com/ru/spell=196840/).
10. {:.asc-apl}[Перерождение](https://ru.wowhead.com/spell=114051) в ближнем бою и сразу же [Удар ветра](https://www.wowhead.com/ru/spell=115356).
11. {:.dw-apl}[Ветра рока](https://www.wowhead.com/ru/spell=384352).
5. {:.pw-apl .eb-apl}[Молния](https://www.wowhead.com/ru/spell=188196/) с баффом от [Первозданной волны](https://www.wowhead.com/ru/spell=375982) и при наличии **8+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
12. {:.dw-apl}[Удар бури](https://www.wowhead.com/ru/spell=17364).
14. Продолжайте обычную ротацию.

<hr style="height:1px;background-color:#bbb">
<p></p>

**Приоритет способностей для боя против одной цели:**


1. {:.five-apl .pw-apl}[Первозданная волна](https://www.wowhead.com/ru/spell=375982).
2. [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533).
  * {:.five-apl .pw-apl}[Дух дикого зверя](https://www.wowhead.com/ru/spell=51533) можно отложить на **1-2** ГКД, если за это время откатится [Первозданная волна](https://www.wowhead.com/ru/spell=375982).
3. {:.asc-apl}[Перерождение](https://www.wowhead.com/ru/spell=114051).
4. {:.dw-apl}[Ветра рока](https://www.wowhead.com/ru/spell=384352).
5. {:.asc-apl}[Удар ветра](https://www.wowhead.com/ru/spell=115356) ([Удар бури](https://www.wowhead.com/ru/spell=17364) во время активного [Перерождения](https://www.wowhead.com/ru/spell=114051)).
6. {:.dre-apl}[Удар ветра](https://www.wowhead.com/ru/spell=115356) / [Удар бури](https://www.wowhead.com/ru/spell=17364).
8. {:.hh-apl .ll-apl}[Вскипание лавы](https://www.wowhead.com/ru/spell=60103/) с баффом от [Горячей руки](https://www.wowhead.com/ru/spell=201900) или при наличии **6+** стаков от таланта [Пепельный катализатор](https://www.wowhead.com/ru/spell=390371/).
15. {:.eb-apl}[Удар духов стихий](https://www.wowhead.com/ru/spell=117014) если у вас **2** заряда этой способности и **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
14. {:.pw-apl}[Молния](https://www.wowhead.com/ru/spell=188196/) с баффом от [Первозданной волны](https://www.wowhead.com/ru/spell=375982) и при наличии **8+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
15. {:.eb-apl}[Удар духов стихий](https://www.wowhead.com/ru/spell=117014) если у вас **1** заряд этой способности и **8+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
  * {:.es-apl}Старайтесь кастовать [Удар духов стихий](https://www.wowhead.com/ru/spell=117014) при активных [Духах дикого зверя](https://www.wowhead.com/ru/spell=51533).
29. {:.sa-apl}[Молния](https://www.wowhead.com/ru/spell=188196/) при наличии **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
21. {:.pw-apl .no-five-apl }[Первозданная волна](https://www.wowhead.com/ru/spell=375982).
20. {:.ll-apl}[Огненный шок](https://ru.wowhead.com/spell=188389), если отстутствует на цели.
17. {:.dw-apl .ic-apl .ll-apl}[Ледяной клинок](https://www.wowhead.com/ru/spell=342240/) во время баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352).
18. {:.dw-apl .cl-apl .ll-apl}[Сокрушающая молния](https://www.wowhead.com/ru/spell=187874) во время баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352).
19. {:.dw-apl .ll-apl .sunder-apl}[Раскол](https://www.wowhead.com/ru/spell=197214) во время баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352).
27. {:.no-eb-apl .no-sa-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505) при наличии **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
29. {:.no-sa-apl}[Молния](https://www.wowhead.com/ru/spell=188196/) при наличии **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
24. {:.ic-apl .hs-apl}[Ледяной клинок](https://www.wowhead.com/ru/spell=342240/).
25. {:.hs-apl}[Ледяной шок](https://www.wowhead.com/ru/spell=196840/) с баффом от таланта [Буря с градом](https://www.wowhead.com/ru/spell=334195).
33. {:.ll-apl}[Вскипание лавы](https://www.wowhead.com/ru/spell=60103).
31. {:.no-dre-apl}[Удар бури](https://www.wowhead.com/ru/spell=17364).
32. {:.ic-apl .no-hs-apl}[Ледяной клинок](https://www.wowhead.com/ru/spell=342240/).
38. {:.cl-apl .no-ll-apl}[Сокрушающая молния](https://www.wowhead.com/ru/spell=187874).
35. {:.sunder-apl}[Раскол](https://www.wowhead.com/ru/spell=197214).
34. [Молния](https://www.wowhead.com/ru/spell=188196/) при наличии **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
35. {:.no-ll-apl}[Огненный шок](https://ru.wowhead.com/spell=188389), если отстутствует на цели.
36. [Ледяной шок](https://www.wowhead.com/ru/spell=196840/).
37. {:.fn-apl}[Кольцо огня](https://www.wowhead.com/ru/spell=333974).
38. {:.cl-apl .ll-apl}[Сокрушающая молния](https://www.wowhead.com/ru/spell=187874).
39. [Огненный шок](https://ru.wowhead.com/spell=188389).
</div>

<div id="aoe" markdown="1" style="display:none;">

**Опенер в бою против 2+ целей:**
2. {:.no-pw-apl}[Огненный шок](https://ru.wowhead.com/spell=188389) на пути к цели.
4. {:.pw-apl .five-apl}[Первозданная волна](https://www.wowhead.com/ru/spell=375982) для наложения [Огненного шока](https://ru.wowhead.com/spell=188389).
3. [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533/).
4. {:.pw-apl .no-five-apl}[Первозданная волна](https://www.wowhead.com/ru/spell=375982) для наложения [Огненного шока](https://ru.wowhead.com/spell=188389).
6. {:.pw-apl}[Огненный шок](https://ru.wowhead.com/spell=188389) на цель без [Огненного шока](https://ru.wowhead.com/spell=188389), если целей **6** или более.
5. {:.pw-apl .ll-apl}[Вскипание лавы](https://www.wowhead.com/ru/spell=60103) для спреда [Огненного шока](https://ru.wowhead.com/spell=188389) на соседние цели.
7. {:.pw-apl}[Молния](https://www.wowhead.com/ru/spell=188196/) с баффом от [Первозданной волны](https://www.wowhead.com/ru/spell=375982) и при наличии **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
10. {:.asc-apl}[Перерождение](https://ru.wowhead.com/spell=114051).
13. {:.dw-apl .cl-apl}[Ветра рока](https://www.wowhead.com/ru/spell=384352).
14. {:.cl-apl}[Сокрушающая молния](https://www.wowhead.com/ru/spell=187874).
11. {:.ic-apl .hs-apl}[Ледяной клинок](https://www.wowhead.com/ru/spell=342240/).
13. {:.ic-apl .hs-apl}[Ледяной шок](https://www.wowhead.com/ru/spell=196840).
12. {:.sunder-apl}[Раскол](https://www.wowhead.com/ru/spell=197214).
15. Продолжайте обычную ротацию.

<hr style="height:1px;background-color:#bbb">
<p></p>

**Приоритет способностей в бою против 2+ целей:**
1. {:.five-apl .pw-apl}[Первозданная волна](https://www.wowhead.com/ru/spell=375982).
1. [Дух дикого зверя](https://www.wowhead.com/ru/spell=51533).
  * {:.five-apl .pw-apl}[Дух дикого зверя](https://www.wowhead.com/ru/spell=51533) можно отложить на **1-2** ГКД, если за это время откатится [Первозданная волна](https://www.wowhead.com/ru/spell=375982).
2. {:.dw-apl}[Ветра рока](https://www.wowhead.com/ru/spell=384352).
2. {:.ll-apl}[Огненный шок](https://ru.wowhead.com/spell=188389), если его нет ни на одной из целей.
3. {:.ll-apl}[Вскипание лавы](https://www.wowhead.com/ru/spell=60103), если на цели есть [Огненный шок](https://ru.wowhead.com/spell=188389), а на соседних целях [Огненный шок](https://ru.wowhead.com/spell=188389) отсутствует.
4. {:.asc-apl}[Перерождение](https://www.wowhead.com/ru/spell=114051), если в [Воззвание к Ториму](https://www.wowhead.com/ru/spell=384444) [записана](https://wago.io/DT4YbYlpN) [Цепная молния](https://ru.wowhead.com/spell=188443).
5. {:.pw-apl}[Молния](https://www.wowhead.com/ru/spell=188196/) с баффом от [Первозданной волны](https://www.wowhead.com/ru/spell=375982) и при наличии **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
1. {:.dre-apl}[Удар ветра](https://www.wowhead.com/ru/spell=115356) во время активного [Перерождения](https://www.wowhead.com/ru/spell=114051).
1. {:.asc-apl}[Удар ветра](https://www.wowhead.com/ru/spell=115356) во время активного [Перерождения](https://www.wowhead.com/ru/spell=114051).
9. {:.dw-apl .cl-apl}[Сокрушающая молния](https://www.wowhead.com/ru/spell=187874) во время баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352).
10. {:.dw-apl .sunder-apl}[Раскол](https://www.wowhead.com/ru/spell=197214) во время баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352).
6. {:.dw-apl}[Цепная молния](https://ru.wowhead.com/spell=188443) при наличии **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880), а во время баффа от [Ветров рока](https://www.wowhead.com/ru/spell=384352) – при **5+** стаках.
2. {:.eb-apl}[Удар духов стихий](https://www.wowhead.com/ru/spell=117014) при наличии **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880) в бою против **2-3** целей.
  * {:.es-apl}Старайтесь кастовать [Удар духов стихий](https://www.wowhead.com/ru/spell=117014) при активных [Духах дикого зверя](https://www.wowhead.com/ru/spell=51533).
6. {:.no-dw-apl}[Цепная молния](https://ru.wowhead.com/spell=188443) при наличии **10** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
1. {:.cl-apl}[Сокрушающая молния](https://www.wowhead.com/ru/spell=187874), если бафф не активен.
13. {:.fn-apl}[Кольцо огня](https://www.wowhead.com/ru/spell=333974), если под [Огненным шоком](https://ru.wowhead.com/spell=188389) находится **6** противников.
17. {:.pw-apl .no-five-apl }[Первозданная волна](https://www.wowhead.com/ru/spell=375982).
5. {:.ic-apl .hs-apl}[Ледяной клинок](https://www.wowhead.com/ru/spell=342240/).
6. {:.hs-apl}[Ледяной шок](https://www.wowhead.com/ru/spell=196840/) с баффом от таланта [Буря с градом](https://www.wowhead.com/ru/spell=334195).
2. {:.lf-apl .ll-apl}[Вскипание лавы](https://www.wowhead.com/ru/spell=60103) по цели с [Огненным шоком](https://ru.wowhead.com/spell=188389) и с наименьшим временем дебаффа от таланта [Хлещущее пламя](https://www.wowhead.com/ru/spell=334046).
21. {:.sunder-apl}[Раскол](https://www.wowhead.com/ru/spell=197214).
13. {:.fn-apl}[Кольцо огня](https://www.wowhead.com/ru/spell=333974), если под [Огненным шоком](https://ru.wowhead.com/spell=188389) находится **2** и более противника.
25. {:.ic-apl .no-hs-apl}[Ледяной клинок](https://www.wowhead.com/ru/spell=342240/).
19. [Удар бури](https://www.wowhead.com/ru/spell=17364).
2. {:.no-lf-apl .ll-apl}[Вскипание лавы](https://www.wowhead.com/ru/spell=60103) по цели с [Огненным шоком](https://ru.wowhead.com/spell=188389).
1. {:.cl-apl}[Сокрушающая молния](https://www.wowhead.com/ru/spell=187874).
2. {:.eb-apl}[Удар духов стихий](https://www.wowhead.com/ru/spell=117014) при наличии **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880) в бою против **2-3** целей.
6. [Цепная молния](https://ru.wowhead.com/spell=188443) при наличии **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
30. [Ледяной шок](https://www.wowhead.com/ru/spell=196840/).
31. [Огненный шок](https://ru.wowhead.com/spell=188389).


</div>

<hr style="height:1px;background-color:#bbb">
<p></p>

# Общая ветка талантов

Общая ветка талантов предлагает широкий выбор вспомогательных способностей, которые найдут применение в различных ситуациях.

Два таланта Энх Шаман получает по умолчанию без траты на них очков – это [Цепная молния](https://ru.wowhead.com/spell=188443) и [Оружие Водоворота](https://www.wowhead.com/ru/spell=187880). Так же есть несколько основных талантов, которые напрямую влияют на наносимый урон и выживаемость и их стоит брать в любом билде. К ним относятся:
* [Шквал](https://www.wowhead.com/ru/spell=382888) – пассивное увеличение урона.
* [Астральный сдвиг](https://www.wowhead.com/ru/spell=108271/) – основной сейв.
* [Тотем каменной преграды](https://www.wowhead.com/ru/spell=108270/) – дополнительный сейв.
* [Лед и пламя](https://www.wowhead.com/ru/spell=382886) – пассивное увеличение урона.
* [Гнев природы](https://www.wowhead.com/ru/spell=381655) – пассивное увеличение урона.
* [Защита от стихий](https://www.wowhead.com/ru/spell=381650) – снижает получаемый магический урон.
* [Переполняющая сила жизни](https://www.wowhead.com/ru/spell=381689/) – увеличивает запас здоровья на **10%**.
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


<p></p>

{% include button.html name="Выбор утилити талантов в Мифик+" link="/info/utility.html" %}  

<p></p>


# Характеристики

**Ловкость** – лучшая характеристика, так как повышает весь урон и растет от уровня предметов гораздо сильнее, чем вторичные статы. Поэтому в первую очередь стоит смотреть на уровень предметов.

С выбором вещей поможет [Raidbots](https://www.raidbots.com/simbot). Краткое руководство доступно [по этой ссылке](https://stormkeeper.ru/info/sim.html).

## Приоритет характеристик

Приоритет статов для <span style="color:#f16f25;font-size:1em;">**Стихийных**</span> билдов в СТ и АоЕ:

1. **Ловкость**.
2. **Искусность**.
3. **Скорость**.
4. **Критический удар**.
5. **Универсальность**.

<hr style="height:1px;background-color:#bbb">
<p></p>

С выбором вещей поможет [Raidbots](https://www.raidbots.com/simbot). Краткое руководство доступно [по этой ссылке](https://stormkeeper.ru/info/sim.html).

**КАПОВ ХАРАКТЕРИСТИК НЕТ. НА ИСКУСНОСТЬ ТОЖЕ НЕТ. И НА СКОРОСТЬ. КАПОВ НЕТ.**

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
* На получение **1%** Критического удара нужно **180** единиц рейтинга Критического удара.
* После набора **5400** рейтинга скорость роста этой характеристики снижается на **10%**. То есть для набора дополнительного **1%** Критического удара потребуется не **180** единиц рейтинга, а **198**.
* Diminishing returns срабатывает на **5400** рейтинга, затем на **7200** и на **9000***, на **10%**, **20%** и **30%** соответственно.

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
* Diminishing returns срабатывает на **5100** рейтинга, затем на **6800** и на **8500***, на **10%**, **20%** и **30%** соответственно.

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
* Diminishing returns срабатывает на **5400** рейтинга, затем на **7200** и на **9000***, на **10%**, **20%** и **30%** соответственно.


</details>
<p></p>

<hr style="height:1px;background-color:#bbb">
<p></p>

* **Универсальность**: увеличивает наносимый урон и снижает получаемый урон.

<details markdown=1><summary><i>Подробнее про Универсальность...</i></summary>
<p></p>

* На получение **1%** Универсальности нужно **205** единиц рейтинга Универсальности, что больше, чем у других характеристик.
* После набора **6150** рейтинга скорость роста этой характеристики снижается на **10%**. То есть для набора дополнительного **1%** Универсальности потребуется не **205** единиц рейтинга, а **225.5**.
* Diminishing returns срабатывает на **6150** рейтинга, затем на **8200** и на **10250***, на **10%**, **20%** и **30%** соответственно.

</details>
<p></p>

<hr style="height:1px;background-color:#bbb">
<p></p>


# Экипировка

## Комплект классовых доспехов

Как можно быстрее получите из рейда **2/4** куска сетового комплекта – [Взор великого волка-изгнанника](https://www.wowhead.com/ru/item-set=1567/). 

* **2 части**: [Первозданная волна](https://www.wowhead.com/ru/spell=375982) призывает одного молниевого [Духа дикого зверя](https://ru.wowhead.com/spell=51533), который увеличивает урон от сил <span style="color:#26d22b;font-size:1em;">**природы**</span> на **20%** на **15** секунд.
* **4 части**: Призыв [Духа дикого зверя](https://ru.wowhead.com/spell=51533) также сокращает время восстановления [Первозданной волны](https://www.wowhead.com/ru/spell=375982) на **7** секунд.

Одно использование [Духа дикого зверя](https://ru.wowhead.com/spell=51533) сокращает время восстановления [Первозданной волны](https://www.wowhead.com/ru/spell=375982) на **14** секунд, так как призываются два волка. Также сам каст [Первозданной волны](https://www.wowhead.com/ru/spell=375982) призывает одного волка, что также идет в расчет его времени восстановления.
{: class="bordered"}

<p></p>

<hr style="height:1px;background-color:#bbb">
<p></p>


**Данные предметы дают сетовые бонусы:**
* [Спутники великого волка-изгнанника](https://www.wowhead.com/ru/item=207207)
* [Отделанный мехом килт великого волка-изгнанника](https://www.wowhead.com/ru/item=207208)
* [Челюсти великого волка-изгнанника](https://www.wowhead.com/ru/item=207209)
* [Захваты великого волка-изгнанника](https://www.wowhead.com/ru/item=207210)
* [Облачение великого волка-изгнанника](https://www.wowhead.com/ru/item=207212)

**Предметы из Катализатора:**
* [Кольчужный плащ великого волка-изгнанника](https://www.wowhead.com/ru/item=207204/)
* [Нарукавники великого волка-изгнанника](https://www.wowhead.com/ru/item=207205)
* [Башмаки великого волка-изгнанника](https://www.wowhead.com/ru/item=207211/)
* [Пояс с печатью великого волка-изгнанника](https://www.wowhead.com/ru/item=207206)


## Аксессуары

Полный рейтинг аксессуаров можно найти на [Bloodmallet](https://bloodmallet.com/chart/shaman/enhancement/trinkets/castingpatchwerk).

Лучшие аксессуары:
1. [Зловещая разноцветная субстанция](https://www.wowhead.com/ru/item=203729/%D0%B7%D0%BB%D0%BE%D0%B2%D0%B5%D1%89%D0%B0%D1%8F-%D1%80%D0%B0%D0%B7%D0%BD%D0%BE%D1%86%D0%B2%D0%B5%D1%82%D0%BD%D0%B0%D1%8F-%D1%81%D1%83%D0%B1%D1%81%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D1%8F?bonus=7981:10358:5871) – дает огромное количество вторичных характеристик, которые так нужны Энху. В идеале в рейде должны быть игроки со всеми видами баффов, при этом Энх может использовать любой из них, в зависимости от остальной экипировки. Однако лучшим выбором является Обсидиановый бафф, дающий **все характеристики**.
2. [Властный зов Нелтариона](https://www.wowhead.com/ru/item=204202/%D0%B2%D0%BB%D0%B0%D1%81%D1%82%D0%BD%D1%8B%D0%B9-%D0%B7%D0%BE%D0%B2-%D0%BD%D0%B5%D0%BB%D1%82%D0%B0%D1%80%D0%B8%D0%BE%D0%BD%D0%B0?bonus=7981:10358:5871) – практически лучший аксессуар для Мифик+, за счет баффа на ловкость под вызов [Духов дикого зверя](https://www.wowhead.com/ru/spell=51533). Пассивная скорость на этом тринкете может повлиять на выбор характеристик на остальной экипировке, имейте это в виду.
3. [Клеймо-печатка Катаклизма](https://www.wowhead.com/ru/item=207166/%D0%BA%D0%BB%D0%B5%D0%B9%D0%BC%D0%BE-%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D0%BA%D0%B0-%D0%BA%D0%B0%D1%82%D0%B0%D0%BA%D0%BB%D0%B8%D0%B7%D0%BC%D0%B0?bonus=7981:10358:5871) – лучший аксессуар для **долгих** боев против одной цели, но практически бесполезный для коротких боев и Мифик+.
4. [Одержимый светоч горя](https://www.wowhead.com/ru/item=194308/%D0%BE%D0%B4%D0%B5%D1%80%D0%B6%D0%B8%D0%BC%D1%8B%D0%B9-%D1%81%D0%B2%D0%B5%D1%82%D0%BE%D1%87-%D0%B3%D0%BE%D1%80%D1%8F?bonus=7981:10358:5871) – отличный тринкет для рейда и Мифик+, который дополнительно раскрывается при гибели союзников. Особенно хорошо себя показывает в том случае, если нужно нанести приоритетный урон в определенную цель. Срабатывает также от [Реинкарнации](https://ru.wowhead.com/spell=20608).
5. [Знак воплощения шепота](https://www.wowhead.com/ru/item=194301/%D0%B7%D0%BD%D0%B0%D0%BA-%D0%B2%D0%BE%D0%BF%D0%BB%D0%BE%D1%89%D0%B5%D0%BD%D0%B8%D1%8F-%D1%88%D0%B5%D0%BF%D0%BE%D1%82%D0%B0?bonus=7981:10358:5871) – отличный пассивный тринкет, но лучше всего раскрывается в том случае, если его носят также танк и хилер. Однако учитывая айтемизацию этих ролей, в четвертом сезоне наличие баффа у танка маловероятно.

Для выживания в высоких ключах:
6. [Оскверненное Яростное сердце Фиракка](https://www.wowhead.com/ru/item=207174/%D0%BE%D1%81%D0%BA%D0%B2%D0%B5%D1%80%D0%BD%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5-%D1%8F%D1%80%D0%BE%D1%81%D1%82%D0%BD%D0%BE%D0%B5-%D1%81%D0%B5%D1%80%D0%B4%D1%86%D0%B5-%D1%84%D0%B8%D1%80%D0%B0%D0%BA%D0%BA%D0%B0?bonus=7981:10358:5878) – поглощает большое количество получаемого урона с кулдауном полторы минуты.
7. [Оберег безликой ярости](https://www.wowhead.com/ru/item=203714/%D0%BE%D0%B1%D0%B5%D1%80%D0%B5%D0%B3-%D0%B1%D0%B5%D0%B7%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9-%D1%8F%D1%80%D0%BE%D1%81%D1%82%D0%B8?bonus=7981:10358:5871) – поглощает меньше урона чем вариант выше, но с меньшим временем восстановления.


## Предметы за бронзовые слитки

Тратить [Старинные бронзовые слитки](https://www.wowhead.com/ru/item=213089) стоит исходя из вашего приоритетного контента (рейд или Мифик+), а также в зависимости от удачи на дроп в самом рейде и еженедельном хранилище.

Приоритет покупок за [Старинные бронзовые слитки](https://www.wowhead.com/ru/item=213089):
1. [Коготь заклинателя шипов](https://www.wowhead.com/ru/item=207784/%D0%BA%D0%BE%D0%B3%D0%BE%D1%82%D1%8C-%D0%B7%D0%B0%D0%BA%D0%BB%D0%B8%D0%BD%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D1%88%D0%B8%D0%BF%D0%BE%D0%B2?bonus=7981:10358:5871) – если в приоритете у вас стоит рейд, а не Мифик+.
2. [Властный зов Нелтариона](https://www.wowhead.com/ru/item=204202/%D0%B2%D0%BB%D0%B0%D1%81%D1%82%D0%BD%D1%8B%D0%B9-%D0%B7%D0%BE%D0%B2-%D0%BD%D0%B5%D0%BB%D1%82%D0%B0%D1%80%D0%B8%D0%BE%D0%BD%D0%B0?bonus=7981:10358:5871) – если в приоритете стоит Мифик+, а не рейд.
2. [Печать избранного Денны](https://www.wowhead.com/ru/item=195480/%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D1%8C-%D0%B8%D0%B7%D0%B1%D1%80%D0%B0%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B4%D0%B5%D0%BD%D0%BD%D1%8B?bonus=7981:10358:5871) – лучшее кольцо для рейда и Мифик+.
3. [Печать сыновнего долга](https://www.wowhead.com/ru/item=195526/%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D1%8C-%D1%81%D1%8B%D0%BD%D0%BE%D0%B2%D0%BD%D0%B5%D0%B3%D0%BE-%D0%B4%D0%BE%D0%BB%D0%B3%D0%B0?bonus=7981:10358:5878) – лучшее кольцо для рейда и Мифик+.
4. [Зловещая разноцветная субстанция](https://www.wowhead.com/ru/item=203729/%D0%B7%D0%BB%D0%BE%D0%B2%D0%B5%D1%89%D0%B0%D1%8F-%D1%80%D0%B0%D0%B7%D0%BD%D0%BE%D1%86%D0%B2%D0%B5%D1%82%D0%BD%D0%B0%D1%8F-%D1%81%D1%83%D0%B1%D1%81%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D1%8F?bonus=7981:10358:5871) – лучше всего использовать когда у ваших союзников есть такой же аксессуар, но с другими вторичными характеристиками.
4. [Клеймо-печатка Катаклизма](https://www.wowhead.com/ru/item=207166/%D0%BA%D0%BB%D0%B5%D0%B9%D0%BC%D0%BE-%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D0%BA%D0%B0-%D0%BA%D0%B0%D1%82%D0%B0%D0%BA%D0%BB%D0%B8%D0%B7%D0%BC%D0%B0?bonus=7981:10358:5871) – только для Рейда.
6. [Голос тихой звезды](https://www.wowhead.com/ru/item=204465/%D0%B3%D0%BE%D0%BB%D0%BE%D1%81-%D1%82%D0%B8%D1%85%D0%BE%D0%B9-%D0%B7%D0%B2%D0%B5%D0%B7%D0%B4%D1%8B?bonus=7981:10358:5878) – лучший ДПС, но меньше выживаемости за счет потери выносливости.
7. [Одержимый светоч горя](https://www.wowhead.com/ru/item=194308/%D0%BE%D0%B4%D0%B5%D1%80%D0%B6%D0%B8%D0%BC%D1%8B%D0%B9-%D1%81%D0%B2%D0%B5%D1%82%D0%BE%D1%87-%D0%B3%D0%BE%D1%80%D1%8F?bonus=7981:10358:5871) – для приоритетного урона или если в рейде кто-то часто умирает.
8. [Оскверненное Яростное сердце Фиракка](https://www.wowhead.com/ru/item=207174/%D0%BE%D1%81%D0%BA%D0%B2%D0%B5%D1%80%D0%BD%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5-%D1%8F%D1%80%D0%BE%D1%81%D1%82%D0%BD%D0%BE%D0%B5-%D1%81%D0%B5%D1%80%D0%B4%D1%86%D0%B5-%D1%84%D0%B8%D1%80%D0%B0%D0%BA%D0%BA%D0%B0?bonus=7981:10358:5878) или [Оберег безликой ярости](https://www.wowhead.com/ru/item=203714/%D0%BE%D0%B1%D0%B5%D1%80%D0%B5%D0%B3-%D0%B1%D0%B5%D0%B7%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9-%D1%8F%D1%80%D0%BE%D1%81%D1%82%D0%B8?bonus=7981:10358:5871) – защитный вариант для пуша выскоих ключей.


## Улучшение предметов за гребни

1. Оружие.
2. Лучшие аксессуары. 
3. Сетовые предметы. 
4. Предметы с лучшими характеристиками. 


## Крафтовые предметы

Рекомендованная очередность крафта:
1. [Адаптивные дракотистовые боевые наручи](https://www.wowhead.com/ru/item=204704/) – лучшее украшение. Не дает возможность использовать инженерские наручи с боевым воскрешением.
2. [Пламенная цепь](https://www.wowhead.com/ru/item=193425/%D0%BF%D0%BB%D0%B0%D0%BC%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F-%D1%86%D0%B5%D0%BF%D1%8C?bonus=10249:1511:8793) c [Подкладкой из синего шелка](https://www.wowhead.com/ru/item=193946) или [Закаленной в пламени Тьмы броневой пластиной](https://www.wowhead.com/ru/item=204710).
3. Все остальные предметы низкого уровня.
4. Для Мифик+ можно заменить [Голос тихой звезды](https://www.wowhead.com/ru/item=204465/%D0%B3%D0%BE%D0%BB%D0%BE%D1%81-%D1%82%D0%B8%D1%85%D0%BE%D0%B9-%D0%B7%D0%B2%D0%B5%D0%B7%D0%B4%D1%8B?bonus=7981:10358:5878) на [Яркую пелерину из ткани стихий](https://www.wowhead.com/ru/item=193511/%D1%8F%D1%80%D0%BA%D0%B0%D1%8F-%D0%BF%D0%B5%D0%BB%D0%B5%D1%80%D0%B8%D0%BD%D0%B0-%D0%B8%D0%B7-%D1%82%D0%BA%D0%B0%D0%BD%D0%B8-%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B9?bonus=9405:10249:10359) с [Мешочком алхимических приправ](https://www.wowhead.com/ru/item=200652/).


# Расходуемые предметы

<hr style="height:1px;background-color:#bbb">
<p></p>

**Зачарования** лучше всего использовать максимального качества. Как альтернатива здесь также указаны более дешевые варианты:
* **Оружие в правой руке**: [Веющее посвящение](https://www.wowhead.com/ru/item=200058).
* **Оружие в левой руке**: [Веющее посвящение](https://www.wowhead.com/ru/item=200058).
* **Шлем**: [Раскаленная сущность](https://www.wowhead.com/ru/item=210494).
* **Нагрудный доспех**: [Пробужденные характеристики](https://www.wowhead.com/ru/spell=389410/).
* **Поножи**: [Лютые накладки для брони](https://www.wowhead.com/ru/item=193565/) или [Лучистые накладки для брони](https://www.wowhead.com/ru/item=204702).
* **Кольца**: [Посвящение искусности](https://www.wowhead.com/ru/spell=389294/).
* **Плащ**: [Грациозное избежание](https://www.wowhead.com/ru/spell=389403/).
* **Наручи**: [Посвящение избежания](https://www.wowhead.com/ru/spell=389301/).
* **Ботинки**: [Ветер равнин](https://www.wowhead.com/ru/spell=389479/).
* **Пояс**: [Затененная поясная застежка](https://www.wowhead.com/ru/item=205039).

<hr style="height:1px;background-color:#bbb">
<p></p>


**Самоцветы** теперь есть двух видов – уникальные эпические, которые нужно делать через стол заказов, и обычные, которые покупаются на аукционе. Лучше всего использовать камни максимального качества. Эпических камней может быть не более одного во всей экипировке. 
* Эпический самоцвет: [Броский бесконечный алмаз](https://www.wowhead.com/ru/item=192985/) либо [Мастерский бесконечный алмаз](https://www.wowhead.com/ru/item=192988/).
* Обычные самоцветы: [Острый изерилл](https://www.wowhead.com/ru/item=192948/) либо [Острый нелтарит](https://www.wowhead.com/ru/item=192961/).


<hr style="height:1px;background-color:#bbb">
<p></p>


Лучший **флакон**:
* [Замерзший флакон оскверненной ярости](https://www.wowhead.com/ru/item=191329).

<hr style="height:1px;background-color:#bbb">
<p></p>


**Зелье** используются следующее:
* [Зелье великой мощи стихий](https://www.wowhead.com/ru/item=191383).

<hr style="height:1px;background-color:#bbb">
<p></p>


**Еду** следует использовать следующую:
* [Шипящие морепродукты](https://www.wowhead.com/ru/item=197784/): лучшая еда при высоком уровне экипировки.
* [Большой калуакский банкет](https://www.wowhead.com/ru/item=197794): пир на множество игроков, увеличивает Ловкость.

<hr style="height:1px;background-color:#bbb">
<p></p>


**Руны на оружие** Энх Шаман **не использует**, так как они не сочетаются с [Оружием неистовства ветра](https://www.wowhead.com/ru/spell=33757/) и [Оружием языка пламени](https://www.wowhead.com/ru/spell=318038/).

<hr style="height:1px;background-color:#bbb">
<p></p>

**Руны** на Ловкость:
* [Сновидческая руна усиления](https://www.wowhead.com/ru/item=211495/).
* [Драконья руна усиления](https://www.wowhead.com/ru/item=201325).

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

* Маусовер макрос, который позволяет назначить на одну кнопку два действия – для врага и для союзника. Можно использовать на {{ site.data.spells.purge }} и [Очищение духа](https://ru.wowhead.com/spell=51886):
~~~
#showtooltip 
/use [@mouseover,nodead,harm] Развеивание магии;[@mouseover,nodead,help] Очищение духа;[@target,nodead,harm] Развеивание магии;[@target,nodead,help][@player] Очищение духа
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
    <img src="https://media.wago.io/screenshots/HJxL_fG7C/6543717e0cc9668f64e2f460.gif"> 
</p>

<p></p>

{% include button.html name="Сборки WA на Wago.io" link="https://wago.io/search/enhancement" %}  

<p></p>



<p></p>

{% include button.html name="Обсудить на сервере Водоворот" link="https://discord.gg/8Bag6kT" %}  

<p></p>
