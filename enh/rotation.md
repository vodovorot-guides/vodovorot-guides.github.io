---
title: Ротация Шамана Совершенствования
layout: page
last_update: 2022-04-05
wow: 9.2
toc: true
author: Amani
description: Описание ротации Шамана Совершенствования. Приоритет способностей на этой странице динамически меняется в зависимости от того, какие выбраны таланты, легендарный предмет и ковенант.
image: /assets/img/logos/rotation.png
custom-javascript-list:
    - "/assets/js/rotation_switches.js"
---

<details markdown=1><summary><i>Журнал изменений</i></summary>
<br>

* **13.03.2022**: Добавлен опенер на АоЕ.
* **22.02.2022**: Полное обновление под патч **9.2**. Ознакомиться со списком изменений для Энх Шамана можно [по этой ссылке](https://stormkeeper.ru/enh/patch-9-2.html).
* **05.10.2021**: Приоритет при активном баффе от легендарки Ветра рока теперь показан сразу в соответствующих разделах. Добавлен динамический список приоритетов на АоЕ. Изменен приоритет Удара бури, Сокрушающей молнии и Цепной молнии на АоЕ.
* **17.09.2021**: Обновлен опенер, теперь динамически меняется для любого билда.
* **20.08.2021**: Добавлен выбор билда для Мифик+ и рейда.

</details>
<p></p>

# Выбор билда

**Важно!** Приоритет способностей на этой странице динамически меняется в зависимости от того, какие выбраны таланты, легендарка и ковенант. Если какой то прок или бафф не указаны, значит в данном случае они не влияют на приоритет способностей. **Все кнопки ниже кликабельны**.
{: class="bordered"}

<div class="container">
  <div class="row">
    <div class="col text-center">
      <a href="/enh/rotation.html" id="raid_build_enh" button="button" class="btn btn-outline-primary guide-btn">Выбрать билд для Рейда</a>
      <a href="/enh/rotation.html" id="mplus_build_enh" button="button" class="btn btn-outline-primary guide-btn">Выбрать билд для Мифик+</a>
    </div>
  </div>
</div>

<p></p>

{% include talents.html data=site.data.talents.enh active="1201031" switch=true %}

**Важно!** Вне зависимости от билда, талантов или типа боя – убедитесь, что у вас всегда наложены усиления на оружия – [Оружие неистовства ветра](https://ru.wowhead.com/spell=33757/) и [Оружие языка пламени](https://ru.wowhead.com/spell=318038/).
{: class="bordered"}

# Бой против одной цели

## Опенер

**Опенер** – это фиксированный порядок способностей в самом начале боя.

1. {:.witch-apl}{{ site.data.spells.wt }} до пула, максимально близко к боссу.
1. {:.actuators-apl}{{ site.data.spells.wt }} до пула, максимально близко к боссу.
1. {:.wolf-apl}{{ site.data.spells.wt }} до пула, максимально близко к боссу.
2. {:.sk_enh-apl}[Хранитель бурь](https://ru.wowhead.com/spell=320137) прекастом до пула.
3. {:.vt-apl}{{ site.data.spells.fs }} в момент пула, по дороге к боссу.
3. {:.ch-apl}{{ site.data.spells.fs }} в момент пула, по дороге к боссу.
3. {:.ft-apl}{{ site.data.spells.fs }} в момент пула, по дороге к боссу.
3. {:.pw-apl}{{ site.data.covenants.pw }} в момент пула, по дороге к боссу.
3. {:.vt-apl}{{ site.data.covenants.vt }} сразу после пула, под босса.
4. {:.spike-apl}{{ site.data.spells.spike }}.
5. {:.wolf-apl}{{ site.data.spells.feral }}.
6. {{ site.data.spells.ss }}.
7. {:.ft-apl}{{ site.data.covenants.ft }}.
5. {:.witch-apl}{{ site.data.spells.feral }}.
5. {:.actuators-apl}{{ site.data.spells.feral }}.
5. {:.doom-apl}{{ site.data.spells.feral }}.
6. {:.asc_enh-apl}{{ site.data.spells.asc_enh }}.
6. {:.asc_enh-apl}{{ site.data.spells.windstrike }}.
1. {:.doom-apl}{{ site.data.spells.wt }} для активации эффекта легендарки {{ site.data.legend.doom }}.
7. Следуйте списку приоритетов.

## Список приоритетов

Ниже представлен список приоритетов способностей, который динамически меняется в зависимости от выбранных выше талантов, легендарки и ковенанта.

* {:.doom-apl}Список приоритетов **БЕЗ** активного баффа от легендарки {{ site.data.legend.doom }}:

8. {:.witch-apl}{{ site.data.spells.wt }}, если тотем не активен.
9. {:.actuators-apl}{{ site.data.spells.wt }}, если тотем не активен.
10. {:.wolf-apl}{{ site.data.spells.wt }}, если тотем не активен.
4. {{ site.data.spells.feral }}.
4. {:.ft-apl}{{ site.data.covenants.ft }}. 
5. {:.asc_enh-apl}{{ site.data.spells.asc_enh }}.
14. {:.doom-apl}{{ site.data.spells.wt }}, если возможно получить бафф от легендарки {{ site.data.legend.doom }}.
5. {:.asc_enh-apl}{{ site.data.spells.windstrike }}.
6. {:.actuators-apl .hh-apl}{{ site.data.spells.ll }}, если есть бафф от [Горячей руки](https://ru.wowhead.com/spell=201900) или при **6+** стаках [Преобразователей изначальной лавы](https://ru.wowhead.com/spell=335895).
6. {:.actuators-apl .flurry-apl}{{ site.data.spells.ll }} при **6+** стаках [Преобразователей изначальной лавы](https://ru.wowhead.com/spell=335895).
6. {:.actuators-apl .is-apl}{{ site.data.spells.ll }} при **6+** стаках [Преобразователей изначальной лавы](https://ru.wowhead.com/spell=335895).
6. {:.hh-apl .witch-apl}{{ site.data.spells.ll }}, если есть бафф от [Горячей руки](https://ru.wowhead.com/spell=201900).
6. {:.hh-apl .doom-apl}{{ site.data.spells.ll }}, если есть бафф от [Горячей руки](https://ru.wowhead.com/spell=201900).
6. {:.hh-apl .wolf-apl}{{ site.data.spells.ll }}, если есть бафф от [Горячей руки](https://ru.wowhead.com/spell=201900).
14. {:.doom-apl}{{ site.data.spells.ss }}, если есть бафф от [Ветров рока](https://ru.wowhead.com/spell=335902).
14. {:.doom-apl}{{ site.data.spells.crush }}, если есть бафф от [Ветров рока](https://ru.wowhead.com/spell=335902).
14. {:.doom-apl .sunder-apl}{{ site.data.spells.sunder }}, если есть бафф от [Ветров рока](https://ru.wowhead.com/spell=335902).
1. {:.pw-apl}{{ site.data.spells.lb }}, если есть бафф от [Первозданной волны](https://ru.wowhead.com/spell=326059) и **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
8. {:.pw-apl}{{ site.data.covenants.pw }}, если нет активного баффа от этого заклинания.
9. {{ site.data.spells.fs }}, если отсутствует на цели.
16. {:.hailstorm-apl}{{ site.data.spells.frs }}, если есть бафф от [Бури с градом](https://ru.wowhead.com/spell=334195).
17. {:.spike-apl}{{ site.data.spells.spike }}.
15. {:.vt-apl}{{ site.data.covenants.vt }}. 
19. {:.flurry-apl}{{ site.data.spells.ss }} с проком [Вестника шторма](https://ru.wowhead.com/spell=201845/).
20. {:.sk_enh-apl}{{ site.data.spells.cl }}, если есть бафф от [Хранителя бурь](https://ru.wowhead.com/spell=320137).
21. {:.eb-apl}{{ site.data.spells.eb }} при **5+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
22. {:.ch-apl}{{ site.data.covenants.ch }} при **5+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
24. {{ site.data.spells.lb }} при **8+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
26. {{ site.data.spells.ss }}.
23. {:.sk_enh-apl}[Хранитель бурь](https://ru.wowhead.com/spell=320137) при **5+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
29. {{ site.data.spells.ll }}.
36. {{ site.data.spells.lb }} при **5+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
34. {:.sunder-apl}{{ site.data.spells.sunder }}.
32. {{ site.data.spells.frs }}. 
30. {{ site.data.spells.crush }}.
33. {:.is-apl}{{ site.data.spells.is }}.
35. {:.fn-apl}{{ site.data.spells.fn }}.
32. {{ site.data.spells.fs }}. 
37. {{ site.data.spells.wt }}, если все другие способности недоступны.

* {:.vt-apl}<span style="color:#68ccef;font-size:1em;">Кирии</span> могут активировать эффект  легендарки [Яростный перезвон](https://ru.wowhead.com/spell=356789/) с помощью одного каста [Тотема исцеляющего потока](https://ru.wowhead.com/spell=5394) и двух кастов [Щита земли](https://ru.wowhead.com/spell=974).
* {:.ft-apl .wolf-apl}Не стоит придерживать [Волшебное переливание](https://ru.wowhead.com/spell=328923), если до конца кулдауна [Духа дикого зверя](https://ru.wowhead.com/spell=51533/) осталось более **30** секунд. Однако, это зависит от текущего энкаунтера и общего количества сданных [Волшебных переливаний](https://ru.wowhead.com/spell=328923) за бой. Смотрите по ситуации.
* {:.pw-apl}Перед кастом [Молнии](https://ru.wowhead.com/spell=188196) с баффом [Первозданной волны](https://ru.wowhead.com/spell=326059) раскидайте максимально возможное количество [Огненных шоков](https://ru.wowhead.com/spell=188389) на все доступные цели.
* {:.pw-apl}При сбросе кулдауна с помощью проводника [Волна за волной](https://ru.wowhead.com/spell=339186?ilvl=252) всегда поглощайте предыдущий бафф от [Первозданной волны](https://ru.wowhead.com/spell=326059)
* {:.ch-apl}Внимательно следите за кулдауном [Цепной жатвы](https://ru.wowhead.com/spell=320674) во время АоЕ, так как легендарка [Проводник стихий](https://ru.wowhead.com/spell=356250/) стихий может очень быстро откатить её и к этому моменту у вас должно быть **5** стаков  [Оружия Водоворота](https://ru.wowhead.com/spell=187880).

# Бой на АоЕ

## Опенер

**Опенер** – это фиксированный порядок способностей в самом начале боя.

1. {:.witch-apl}{{ site.data.spells.wt }} на подходе к паку.
1. {:.actuators-apl}{{ site.data.spells.wt }} на подходе к паку.
1. {:.wolf-apl}{{ site.data.spells.wt }} на подходе к паку.
2. {:.sk_enh-apl}[Хранитель бурь](https://ru.wowhead.com/spell=320137) прекастом до пула.
3. {{ site.data.spells.fs }} в самого живучего врага.
3. {:.vt-apl}{{ site.data.covenants.vt }}.
9. {{ site.data.spells.feral }}.
7. {:.ft-apl}{{ site.data.covenants.ft }}.
11. {:.ft-apl}{{ site.data.spells.crush }}.
12. {:.ch-apl}{{ site.data.spells.crush }}.
13. {:.vt-apl}{{ site.data.spells.crush }}.
14. {{ site.data.spells.ll }} в цель под [Огненным шоком](https://ru.wowhead.com/spell=188389).
15. {:.pw-apl}{{ site.data.covenants.pw }} в цель, на которой нет [Огненного шока](https://ru.wowhead.com/spell=188389).
16. {:.pw-apl}{{ site.data.spells.fs }}, если отсутствует на одной из целей.
17. {:.fn-apl}{{ site.data.spells.fn }}.
18. {:.sunder-apl}{{ site.data.spells.sunder }}.
19. {:.pw-apl}{{ site.data.spells.crush }}.
20. {:.pw-apl}{{ site.data.spells.lb }} c баффом от [Первозданной волны](https://ru.wowhead.com/spell=326059) и с **5+** стаками [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
21. {:.asc_enh-apl}{{ site.data.spells.asc_enh }}.
22. {:.asc_enh-apl}{{ site.data.spells.windstrike }}.
23. {:.doom-apl}{{ site.data.spells.wt }} для активации эффекта легендарки {{ site.data.legend.doom }}.
24. Следуйте списку приоритетов.

## Список приоритетов

Ниже представлен список приоритетов в бою против **2** и более целей, который динамически меняется в зависимости от выбранных выше талантов, легендарки и ковенанта. Если какой то прок или бафф не указаны, значит в данном случае они не влияют на приоритет способностей. 

* {:.lf-apl}**Важно!** При игре с талантом {{ site.data.spells.lf }}, всегда старайтесь ударить [Вскипанием лавы](https://ru.wowhead.com/spell=60103) по цели с [Огненным шоком](https://ru.wowhead.com/spell=188389), но без дебаффа от [Хлещущего пламени](https://ru.wowhead.com/spell=334046). Поддерживать дебафф от этого таланта на максимально возможном количестве целей – основа АоЕ ротации Энха. Используйте [этот мод на Plater](https://wago.io/o9Q7MSLDi) для удобного отслеживания наличия обоих дебаффов.

8. {:.witch-apl}{{ site.data.spells.wt }}, если тотем не активен.
9. {:.actuators-apl}{{ site.data.spells.wt }}, если тотем не активен.
1. {:.wolf-apl}{{ site.data.spells.wt }}, если тотем не активен.
1. {{ site.data.spells.feral }}.
4. {:.ft-apl}{{ site.data.covenants.ft }}. 
1. {:.asc_enh-apl}{{ site.data.spells.asc_enh }}, стараясь задеть максимальное количество целей при активации.
15. {:.ch-apl}{{ site.data.covenants.ch }} при **5+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
1. {:.doom-apl}{{ site.data.spells.wt }}, если возможно получить бафф от легендарки {{ site.data.legend.doom }}.
15. {:.fn-apl}{{ site.data.spells.fn }}, если под [Огненным шоком](https://ru.wowhead.com/spell=188389) **4+** цели.
137. {:.pw-apl}{{ site.data.covenants.pw }}, если нет активного баффа от этого заклинания.
143. {:.lf-apl}{{ site.data.spells.ll }} по цели с [Огненным шоком](https://ru.wowhead.com/spell=188389) без активного дебаффа от таланта {{ site.data.spells.lf }}.
6. {{ site.data.spells.fs }}, если отсутствует на цели.
14. {:.pw-apl}{{ site.data.spells.lb }}, если есть бафф от [Первозданной волны](https://ru.wowhead.com/spell=326059) и **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
2. {:.hailstorm-apl}{{ site.data.spells.frs }}, если есть бафф от [Бури с градом](https://ru.wowhead.com/spell=334195).
1. {:.doom-apl}{{ site.data.spells.crush }}, если есть бафф от [Ветров рока](https://ru.wowhead.com/spell=335902).
3. {:.sunder-apl}{{ site.data.spells.sunder }} на максимальное количество целей.
139. {:.vt-apl}{{ site.data.covenants.vt }}.
141. {:.sk_enh-apl}{{ site.data.spells.cl }}, если есть бафф от [Хранителя бурь](https://ru.wowhead.com/spell=320137).
142. {{ site.data.spells.crush }}, если бафф не активен.
154. {{ site.data.spells.ll }}, если есть бафф от [Сокрушающей молнии](https://ru.wowhead.com/spell=187874/).
153. {{ site.data.spells.cl }} при **8+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
156. {{ site.data.spells.ss }}, если есть бафф от [Сокрушающей молнии](https://ru.wowhead.com/spell=187874/).
157. {:.fn-apl}{{ site.data.spells.fn }}, если под [Огненным шоком](https://ru.wowhead.com/spell=188389) **2+** цели.
158. {:.sk_enh-apl}[Хранитель бурь](https://ru.wowhead.com/spell=320137) при **5+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
159. {{ site.data.spells.crush }}.
160. {:.asc_enh-apl}{{ site.data.spells.ss }} / {{ site.data.spells.windstrike }}.
161. {:.spirits-apl}{{ site.data.spells.ss }}.
162. {:.spike-apl}{{ site.data.spells.ss }}.
163. {{ site.data.spells.frs }}.
164. {:.ch-apl}{{ site.data.covenants.ch }} при **5+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
165. {:.eb-apl}{{ site.data.spells.eb }} при **5+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
166. {:.is-apl}{{ site.data.spells.is }}.
167. {:.spike-apl}{{ site.data.spells.spike }}.
168. {:.witch-apl}{{ site.data.spells.wt }}.
169. {:.actuators-apl}{{ site.data.spells.wt }}.
170. {:.wolf-apl}{{ site.data.spells.wt }}.


# Важные моменты 

* {{ site.data.spells.wt }} стоит использовать в том случае, если ваша группа будет находиться в его радиусе не менее **45** секунд. В противном случае лучше потратить ГКД на другие способности. 
* Не стоит сразу тратить стаки [Оружия Водоворота](https://ru.wowhead.com/spell=187880), и не стоит уходить в оверкап. Лучше всего сливать их на **7-8** стаках, в удобное время между кулдаунами других способностей.
* [Удар бури](https://ru.wowhead.com/spell=17364/) с проком [Вестника шторма](https://ru.wowhead.com/spell=201845/) имеет такой же высокий приоритет, что и без прока.
* {:.hh-apl}Обратная ситуция с талантом {{ site.data.spells.hh }} – в бою против одной цели {{ site.data.spells.ll }} с этим баффом имеет гораздо больший приоритет, чем без него.
* {:.hh-apl}Во время прока баффа [Горячей руки](https://ru.wowhead.com/spell=201900) всегда чередуйте {{ site.data.spells.ll }} и следующую по приоритету способность. Кулдаун [Вскипания лавы](https://ru.wowhead.com/spell=60103) под этим баффом всегда равняется одному ГКД. Исключение – бафф от Урта в Мифик+, под которым можно просто спамить [Вскипание лавы](https://ru.wowhead.com/spell=60103).
* Бафф [Ледяного шока](https://ru.wowhead.com/spell=196840) на **40%** урона в патче **9.2** поднял его приоритет над [Сокрушающей молнией](https://ru.wowhead.com/spell=187874) в бою против одной цели.
* {:.asc_enh-apl}Перед применением [Перерождения](https://ru.wowhead.com/spell=114051) всегда используйте {{ site.data.spells.ss }}, так как его кулдаун сбросится после активации этого таланта.
* {:.doom-apl}Во время активного баффа от легендарки {{ site.data.legend.doom }} главная задача – нанести как можно больше ударов с **правой руки**, вызывая прок [Неистовства ветра](https://ru.wowhead.com/spell=33757). К таким способностям относятся {{ site.data.spells.windstrike }}, {{ site.data.spells.ss }}, {{ site.data.spells.crush }}, {{ site.data.spells.sunder }} и автоатаки.
* {:.doom-apl}За счет того, что {{ site.data.spells.crush }} считается атакой с правой руки, шанс на прок [Оружия неистовства ветра](https://ru.wowhead.com/spell=33757) рассчитывается на каждую пораженную цель.
