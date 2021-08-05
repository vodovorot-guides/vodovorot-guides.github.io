---
title: Рейд Святилище Господства – Шаман Стихии
layout: page
last_update: 2021-07-05
wow: 9.1
toc: true
author: Amani
description: Всё про боссов рейда Святилище Господства – выбор талантов, легендарки, паттерны боев, советы и многое другое.
image: /assets/img/logos/sanctum.png
---

# Вступление

Вся информация в этом разделе подразумевает, что вы в курсе как работают [заклинания](https://stormkeeper.ru/ele/spells.html), [таланты](https://stormkeeper.ru/ele/talents.html) и [легендарки](https://stormkeeper.ru/ele/legendaries.html) Шамана Стихии, а также понимаете основы [ротации](https://stormkeeper.ru/ele/rotation.html). Ознакомьтесь с соответствующими [разделами](https://stormkeeper.ru/ele/intro.html) перед прочтением.

* Тактики на всех боссов на русском языке – [Mythic Trap](https://mythictrap.com/ru/sanctumOfDomination/tarrargue/heroic/none).
* YouTube канал Амани – [ссылка](https://www.youtube.com/Amanizandalari).
* Twitch канал Амани – [ссылка](https://www.twitch.tv/amanizandalari).

# Основные моменты

* Пока вы в форме {{ site.data.spells.wolf }}, вы теряете ДПС. Правильно используйте {{ site.data.spells.swg }} для сокращения потерь урона во время движения. Подробнее про урон во время движения можно почитать [здесь](https://stormkeeper.ru/ele/rotation.html#%D1%83%D1%80%D0%BE%D0%BD-%D0%B2-%D0%B4%D0%B2%D0%B8%D0%B6%D0%B5%D0%BD%D0%B8%D0%B8).

* На освоении думайте не только об уроне. Помогайте своим хилам, используя {{ site.data.spells.hs }} в критических ситуациях. 

* При взятом таланте {{ site.data.spells.primal_elem }}, не забывайте про дополнительный сейв от {{ site.data.spells.igor }} – {{ site.data.spells.harden_skin }}, а также стан одной цели – {{ site.data.spells.pulverize }}.

* Прокачку медиумов каждого ковенанта для боя против одной цели и на АоЕ можно посмотреть в [этом разделе](https://stormkeeper.ru/ele/covenants.html).

Данная статья будет дополнятся. После убийства боссов на Героической и Эпохальной сложности здесь будут представлены записи видео от лица [Элем Шамана](https://www.youtube.com/playlist?list=PLyJJJno2krW2f6_5lsX5UXKlOmUR9aldb), а также разобраны различные полезные фишки, советы и многое другое.
{: class="bordered"}

# Макрос на Демонические врата

В данном рейде есть несколько боссов, где крайне важно использовать [Демонические врата](https://ru.wowhead.com/spell=111771) с макросом на фокусу + назначенная клавиша на взаимодействие с курсором. Данная комбинация позволяет использовать Врата в толпе союзников, просто подойдя к ним поближе.  

Потребуется две вещи – макрос на маусовер и назначенная клавиша на взаимодействие с курсором. Макрос выгялдит следующим образом:
~~~
/focus [target=mouseover,exists][exists]
/stopmacro [target=mouseover,exists][exists]
/clearfocus
~~~

При его нажатии вы берете в фокус объект под маусовером, а если там никого нет, то текущую цель. Если нет ни цели, ни маусовера, то очищает фокус.  

Далее надо назначить клавишу на взаимодействие с курсором. Для этого надо перейти в **Назначение клавиш** => **Выбор цели** => **Взаимодействие с курсором**. 

<details markdown=1><summary><i>Картинка</i></summary>
<br>

<p align="center">
<img src="/assets/img/cursor_bind.jpg" > 
</p>

</details>
<p></p>

После этого действовать надо следующим образом:
* Наводите на врата мышь и жмите **макрос**.
* Врата появятся в фокус-фрейме.
* Когда нужно телепортироваться, подходите к вратам, наводите курсор на фрейм фокуса и жмите кнопку **Взаимодействовать с курсором**.
* Готово, вы восхитительны.

* **Важно!** Брать в фокус нужно именно те врата, от которых вы будете телепортироваться, а не просто любые.

# Боссы

## Таррагр

**Тип боя:** Одна цель  
**Разбор тактики:** [Ссылка](https://mythictrap.com/ru/sanctumOfDomination/tarragrue/heroic/none)  
**Warcraftlogs:** [Ссылка](https://ru.warcraftlogs.com/zone/rankings/28#boss=2423&class=Shaman&spec=Elemental)

**Таланты:**
* **15**: {{ site.data.spells.eote }}
* **25**: {{ site.data.spells.eb }}
* **30**: {{ site.data.spells.spirit_wolf }}
* **35**: {{ site.data.spells.mote }}
* **40**: {{ site.data.spells.wrt }}
* **45**: {{ site.data.spells.if }}
* **50**: {{ site.data.spells.sk }}

**Легендарные предметы:**
* {{ site.data.legend.lava }}

**Советы:**
* Лучшие силы анимы – на основную характеристику. На освоении берите [Нестабильную форму](https://ru.wowhead.com/spell=347980) при первой возможности.
* На освоении не стоит брать [Огромный облик](https://ru.wowhead.com/spell=348043) и [Десять башен](https://ru.wowhead.com/spell=347988) – это может привести к вайпу.
* Собирайте с земли белые шарики от способности анимы союзников [Душеспасительная пряжка](https://ru.wowhead.com/spell=353743/), они дают **25%** урона на **10** секунд.
* Стойте рядом с союзниками, от которых отходят три зеленых луча. Вы получите **15%** урона за счет силы анимы [Искаженный самофланж](https://ru.wowhead.com/spell=348059).
* Используйте {{ site.data.spells.wrt }} и {{ site.data.spells.swg }} на переходке.

## Око Тюремщика

**Тип боя:** Одна цель / Клив
**Разбор тактики:** [Ссылка](https://mythictrap.com/ru/sanctumOfDomination/eyeOfTheJailer/heroic/none)  
**Warcraftlogs:** [Ссылка](https://ru.warcraftlogs.com/zone/rankings/28#boss=2433&class=Shaman&spec=Elemental)

**Таланты:**
* **15**: {{ site.data.spells.eote }}
* **25**: {{ site.data.spells.eb }}
* **30**: {{ site.data.spells.spirit_wolf }}
* **35**: {{ site.data.spells.mote }}
* **40**: {{ site.data.spells.wrt }}
* **45**: {{ site.data.spells.if }}
* **50**: {{ site.data.spells.sk }}

**Легендарные предметы:**
* {{ site.data.legend.lava }}

**Советы:**
* Ставьте {{ site.data.spells.wrt }} под притягивание цепями.
* Используйте {{ site.data.spells.swg }} под перебежку от луча. Также на луч можно использовать [Ледяную ярость](https://ru.wowhead.com/spell=210714).
* **НЕ СТОИТ** пытаться перепрыгнуть луч с помощью [Облика души](https://ru.wowhead.com/spell=310143). У луча кривой хитбокс и вы можете погибнуть даже в том случае, если думаете что всё пройдет хорошо. Исключением может являться последняя фаза, где можно попробовать перепрыгнуть единственный луч и в случае неудачи встать с помощью [Реинкарнации](https://ru.wowhead.com/spell=20608).
* Самый опасный момент боя – фаза с аддами. Используйте все кулдауны и бурсты по откату на эту фазу, не держите их на фазу с самим боссом. Также на фазу с аддами стоит приберечь [Астральный сдвиг](https://ru.wowhead.com/spell=108271), особенно под конец.

## Девять

**Тип боя:** Клив / Одна цель  
**Разбор тактики:** [Ссылка](https://mythictrap.com/ru/sanctumOfDomination/theNine/heroic/none)  
**Warcraftlogs:** [Ссылка](https://ru.warcraftlogs.com/zone/rankings/28#boss=2429&class=Shaman&spec=Elemental)

**Таланты:**
* **15**: {{ site.data.spells.eote }}
* **25**: {{ site.data.spells.eb }}
* **30**: {{ site.data.spells.spirit_wolf }}
* **35**: {{ site.data.spells.mote }}
* **40**: {{ site.data.spells.wrt }}
* **45**: {{ site.data.spells.if }}
* **50**: {{ site.data.spells.sk }}

**Легендарные предметы:**
* {{ site.data.legend.lava }} – освоение.
* {{ site.data.legend.eogs }} – фарм.

**Советы:**
* {{ site.data.legend.eogs }} даст больше оверола за бой, но на второй фазе, когда выходит Скайя, полезнее {{ site.data.legend.lava }}.
* Ставьте {{ site.data.spells.wrt }} под притягивание и отталкивание Сигни и Киры.
* Обычно на сбитие кастов назначают милишников, но Элему тоже стоит по возможности интераптить, особенно касты мелкого адда.

## Душа Нер'зула

**Тип боя:** Одна цель / Клив
**Разбор тактики:** [Ссылка](https://mythictrap.com/ru/sanctumOfDomination/nerZhul/heroic/none)  
**Warcraftlogs:** [Ссылка](https://ru.warcraftlogs.com/zone/rankings/28#boss=2432&class=Shaman&spec=Elemental)

**Таланты:**
* **15**: {{ site.data.spells.eote }}
* **25**: {{ site.data.spells.eb }}
* **30**: {{ site.data.spells.spirit_wolf }}
* **35**: {{ site.data.spells.mote }}
* **40**: {{ site.data.spells.wrt }}
* **45**: {{ site.data.spells.if }}
* **50**: {{ site.data.spells.sk }}

**Легендарные предметы:**
* {{ site.data.legend.lava }}

**Советы:**
* Чтобы не улетать с платформы, всегда смотрите в сторону пропасти при диспеле. По команде рейд-лидера занимайте позицию либо ближе к пропасти, либо ближе к центру босса.
* Феечкам лучше использовать здесь [Корейн](https://ru.wowhead.com/soulbind-calc/night-fae/korayn/shaman/AwCWar4BJShxCBIFKX8IJSzvCCIVdgAIJSg9CA) и получать **25%** крита от [Первого удара](https://ru.wowhead.com/spell=325069/%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B9-%D1%83%D0%B4%D0%B0%D1%80) в нужные моменты. Желательно перед [Земным шоком](https://ru.wowhead.com/spell=8042) и усиленными [Ледяными шоками](https://ru.wowhead.com/spell=196840).
* Используйте [Астральный сдвиг](https://ru.wowhead.com/spell=108271) под раскол во время переходки, на **60%** и **30%** здоровья босса.
* Больше всего урона на боссе входит на последней фазе, приберегите туда [Элементаля земли](https://ru.wowhead.com/spell=198103) с проводником [Прирост жизненных сил](https://ru.wowhead.com/spell=337981/%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D1%81%D1%82-%D0%B6%D0%B8%D0%B7%D0%BD%D0%B5%D0%BD%D0%BD%D1%8B%D1%85-%D1%81%D0%B8%D0%BB?ilvl=252).
* Если на вас кинулось несколько доток, прохиливайтесь [Исцеляющим всплеском](https://ru.wowhead.com/spell=8004). На последней фазе хилам может быть не до вас.

## Раздиратель душ Дормацайн

**Тип боя:** АоЕ
**Разбор тактики:** [Ссылка](https://mythictrap.com/ru/sanctumOfDomination/dormazain/heroic/none)  
**Warcraftlogs:** [Ссылка](https://ru.warcraftlogs.com/zone/rankings/28#boss=2434&class=Shaman&spec=Elemental)

**Таланты:**
* **15**: {{ site.data.spells.eote }}
* **25**: {{ site.data.spells.afs }}
* **30**: {{ site.data.spells.spirit_wolf }}
* **35**: {{ site.data.spells.mote }}
* **40**: {{ site.data.spells.wrt }}
* **45**: {{ site.data.spells.if }}
* **50**: {{ site.data.spells.sk }}

**Легендарные предметы:**
* {{ site.data.legend.eogs }} 

**Советы:**
* На этом боссе крайне важно использовать макрос на [Демонические врата](https://ru.wowhead.com/spell=111771) из начала статьи. Врата используются в момент разрыва цепи. При разрыве стоит использовать [Астральный сдвиг](https://ru.wowhead.com/spell=108271).
* Урон рейда в этом бою нужно грамотно распределять между ДПС в босса и в аддов. Элем, за счет своей механики, отлично играет по аддам не сильно теряя при этом урон в босса.
* Можно использовать {{ site.data.spells.sk }} до начала боя, примерно на **9-10** секунде отсчета, но это зависит от таймингов стяжки аддов в вашем рейде. Лучше не рисковать и придержать {{ site.data.spells.sk }} под первых аддов, иначе есть вероятность остаться без главного бурста в нужный момент.
* Вы можете накопить энергию Водоворота и получить бафф от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215) на большом адде, чтобы потом сразу разрядить это всё в мелких.
* Старайтесь бурстить в аддов только тогда, когда в них стоят игроки с красным кругом – это ощутимо увеличивает получаемый аддами урон.
* Если у вас нет монаха, то сразу после появления большого адда раскидайте от него мелких аддов с помощью [Грома и молнии](https://ru.wowhead.com/spell=51490).
* Адды являются гуманоидами, а значит на них действует [Сглаз](https://ru.wowhead.com/spell=51514).
* {{ site.data.spells.wrt }} отлично заходит на фазу с красной заливкой. Ставьте его сразу под ноги, а не на ход рейда, иначе кто-то может не успеть перебежать.

## Кузнец боли Разнал

**Тип боя:** Одна цель  
**Разбор тактики:** [Ссылка](https://mythictrap.com/ru/sanctumOfDomination/raznal/heroic/none)  
**Warcraftlogs:** [Ссылка](https://ru.warcraftlogs.com/zone/rankings/28#boss=2430&class=Shaman&spec=Elemental)

**Таланты:**
* **15**: {{ site.data.spells.eote }}
* **25**: {{ site.data.spells.eb }}
* **30**: {{ site.data.spells.spirit_wolf }}
* **35**: {{ site.data.spells.mote }}
* **40**: {{ site.data.spells.wrt }}
* **45**: {{ site.data.spells.if }}
* **50**: {{ site.data.spells.sk }}

**Легендарные предметы:**
* {{ site.data.legend.lava }}

* На этом боссе крайне важно использовать макрос на [Демонические врата](https://ru.wowhead.com/spell=111771) из начала статьи. Врата используются под последние шипы на переходке, чтобы заспамить всех аддов в одной точке.
* Бой не про ДПС-чек, а про исполнение механик.
* Быстро убивайте шары, свичайтесь в них сразу при появлении.
* Феечкам лучше использовать здесь [Корейн](https://ru.wowhead.com/soulbind-calc/night-fae/korayn/shaman/AwCWar4BJShxCBIFKX8IJUX6CCIVdgAIJSg9CA), получая **25%** крита от [Первого удара](https://ru.wowhead.com/spell=325069/%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B9-%D1%83%D0%B4%D0%B0%D1%80) на каждый спавн шаров.
* {{ site.data.spells.wrt }} будет полезен на переходке, ставьте его ближе к центру.
* Самый важный момент момент переходки – сплошная стена с шипами. Чтобы не умереть от неё, можно использовать следующее:
  * Феечки просто перепрыгивают [Обликом души](https://ru.wowhead.com/spell=310143).
  * Вентиры... кто вообще играет за Элема в Вентирах?
  * Некролорды могут использовать следующую комбинацию: щит в инвентаре (вместо посоха), трейты [Обманчивые колыхания](https://ru.wowhead.com/spell=352109) и [Совершенный облик](https://ru.wowhead.com/spell=323095), [Астральный сдвиг](https://ru.wowhead.com/spell=108271) и [Элементаль земли](https://ru.wowhead.com/spell=198103) с проводником [Прирост жизненных сил](https://ru.wowhead.com/spell=337981/%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D1%81%D1%82-%D0%B6%D0%B8%D0%B7%D0%BD%D0%B5%D0%BD%D0%BD%D1%8B%D1%85-%D1%81%D0%B8%D0%BB?ilvl=252) (элементаля лучше оставлять на вторую переходку). Желательно также, чтобы на этом моменте стоял [Тотем защиты предков](https://ru.wowhead.com/spell=207399) от Рестор шамана, он даст **10%** здоровья и реснет в случае неудачи. Перед шипами встаньте в центр квадрата на земле, кастуйте [Скульптор плоти](https://ru.wowhead.com/spell=324631/) и не двигайтесь.
  * Кирии могут попросить БОП от паладина.
  * Гоблины могут перепрыгнуть шипы с помощью [Реактивного прыжка](https://ru.wowhead.com/spell=69070). Прыгать стоит не через сами шипы, а вне платформы, как бы падая в пропасть и возвращаясь на прыжке на платформу.

## Стражница Предвечных

**Тип боя:** Одна цель  
**Разбор тактики:** [Ссылка](https://mythictrap.com/ru/sanctumOfDomination/guardian/heroic/none)  
**Warcraftlogs:** [Ссылка](https://ru.warcraftlogs.com/zone/rankings/28#boss=2436&class=Shaman&spec=Elemental)

**Таланты:**
* **15**: {{ site.data.spells.eote }}
* **25**: {{ site.data.spells.eb }}
* **30**: {{ site.data.spells.spirit_wolf }}
* **35**: {{ site.data.spells.mote }}
* **40**: {{ site.data.spells.wrt }}
* **45**: {{ site.data.spells.if }}
* **50**: {{ site.data.spells.sk }}

**Легендарные предметы:**
* {{ site.data.legend.lava }}

**Советы:**
* Раздел в разработке.

## Писарь судьбы Ро-Кало

**Тип боя:** Одна цель / Клив / АоЕ  
**Разбор тактики:** [Ссылка](https://mythictrap.com/ru/sanctumOfDomination/rohKalo/heroic/none)  
**Warcraftlogs:** [Ссылка](https://www.warcraftlogs.com/zone/rankings/28#boss=2431&class=Shaman&spec=Elemental)

**Таланты:**
* **15**: {{ site.data.spells.eote }}
* **25**: {{ site.data.spells.eb }}
* **30**: {{ site.data.spells.spirit_wolf }}
* **35**: {{ site.data.spells.mote }}
* **40**: {{ site.data.spells.wrt }}
* **45**: {{ site.data.spells.if }}
* **50**: {{ site.data.spells.sk }}

**Легендарные предметы:**
* {{ site.data.legend.eogs }}

**Советы:**
* Раздел в разработке.
* Феечкам лучше использовать здесь [Корейн](https://ru.wowhead.com/soulbind-calc/night-fae/korayn/shaman/AwCWar4BJShxCBIFKX8IJSzvCCIVdgAIJSg9CA)

## Кел'Тузад

**Тип боя:** Одна цель / Клив / АоЕ  
**Разбор тактики:** [Ссылка](https://mythictrap.com/ru/sanctumOfDomination/kelThuzad/heroic/none)  
**Warcraftlogs:** [Ссылка](https://www.warcraftlogs.com/zone/rankings/28#boss=2422&class=Shaman&spec=Elemental)

**Таланты для верхнего мира:**
* **15**: {{ site.data.spells.eote }}
* **25**: {{ site.data.spells.afs }} 
* **30**: {{ site.data.spells.spirit_wolf }}
* **35**: {{ site.data.spells.storm }} или {{ site.data.spells.mote }} 
* **40**: {{ site.data.spells.wrt }}
* **45**: {{ site.data.spells.primal_elem }}
* **50**: {{ site.data.spells.sk }}

**Легендарные предметы:**
* {{ site.data.legend.eogs }}

**Советы:**
* Раздел в разработке.

## Сильвана Ветрокрылая

**Тип боя:** Одна цель  
**Разбор тактики:** [Ссылка](https://mythictrap.com/ru/sanctumOfDomination/sylvanas/heroic/none)  
**Warcraftlogs:** [Ссылка](https://www.warcraftlogs.com/zone/rankings/28#boss=2435&class=Shaman&spec=Elemental)

**Таланты:**
* **15**: {{ site.data.spells.eote }}
* **25**: {{ site.data.spells.eb }}
* **30**: {{ site.data.spells.spirit_wolf }}
* **35**: {{ site.data.spells.mote }}
* **40**: {{ site.data.spells.wrt }}
* **45**: {{ site.data.spells.primal_elem }} или {{ site.data.spells.if }}
* **50**: {{ site.data.spells.sk }}

**Легендарные предметы:**
* {{ site.data.legend.lava }}

**Советы:**
* Раздел в разработке.



