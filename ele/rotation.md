---
title: Ротация Шамана Стихии
layout: page
last_update: 2022-03-10
wow: 9.0.5
toc: true
author: Amani
custom-javascript-list:
    - "/assets/js/rotation_switches.js"
---


<!--1. {:.vt-apl}Pre-cast  {{ site.data.covenants.vt }} no later than 6.5 seconds before the pull
2. {:.sk-apl}Pre-cast  {{ site.data.spells.sk }} at 5 seconds before the pull
3. {:.mote-apl}Pre-cast  {{ site.data.spells.fe }} at 3.5 seconds before the pull
3. {:.lmt-apl}Pre-cast  {{ site.data.spells.fe }} at 3.5 seconds before the pull
4. {:.storm-apl}Pre-cast  {{ site.data.spells.storm }} at 3.5 seconds before the pull
5. {:.eb-apl}Pre-cast  {{ site.data.spells.eb }} at 2 seconds before the pull
6. {:.ecs-apl}Pre-cast  {{ site.data.spells.lvb }} at 2 seconds before the pull
7. {:.afs-apl}Pre-cast  {{ site.data.spells.lvb }} at 2 seconds before the pull
8. {:.ch-apl}As the boss is pulled, cast  {{ site.data.spells.fs }}
8. {:.ft-apl}As the boss is pulled, cast  {{ site.data.spells.fs }}
8. {:.vt-apl}As the boss is pulled, cast  {{ site.data.spells.fs }}
9. {:.ecs-apl .pw-apl}As the boss is pulled, cast  {{ site.data.spells.fs }}
9. {:.afs-apl .pw-apl}As the boss is pulled, cast  {{ site.data.spells.fs }}
9. {:.pw-apl}Cast  {{ site.data.covenants.pw }}
9. {:.eb-apl}Cast  {{ site.data.spells.lvb }}
12. {:.sk-apl}Cast your first  {{ site.data.spells.sk }} -empowered   {{ site.data.spells.lb }}
10. {:.ecs-apl}Cast  {{ site.data.spells.ecs }}
11. {:.eote-apl}Cast  {{ site.data.spells.lvb }}
12. {:.sk-apl}Cast your second  {{ site.data.spells.sk }} -empowered   {{ site.data.spells.lb }}
13. {:.if-apl} {{ site.data.spells.if }}
14. {:.asc_ele-apl}  {{ site.data.spells.asc_ele }}
15. {:.discharge-apl}Cast  {{ site.data.spells.discharge }}
16. {:.lmt-apl}Cast  {{ site.data.spells.lmt }}
17. {:.ft-apl}Cast  {{ site.data.covenants.ft }}
18. {:.ch-apl}Cast  {{ site.data.covenants.ch }}
19. Follow the standard priority from here-->

# Выбор билда

Приоритет способностей на этой странице динамически меняется в зависимости от того, какие выбраны таланты, легендарный предмет и ковенант. Ниже представлен билд для боя против **одной цели**. 

Ротация на **АоЕ** расписана для всех типов боев – на две, три, четыре и более целей. Билд на **АоЕ** отличается от билда против **одной цели** и указан разделе [«Таланты и билды»](https://stormkeeper.ru/ele/talents.html)

{% include talents.html data=site.data.talents.ele active="2301032" switch=true %}

# Бой против одной цели

Ниже представлен список приоритетов заклинаний, который динамически меняется в зависимости от выбранных выше талантов, легендарки и ковенанта.

1. {{ site.data.spells.fs }} если отсутствует на цели. 
  * {:.storm-apl}Не используйте {{ site.data.spells.fs }}, если на вас **20** стаков [Порыва ветра](https://ru.wowhead.com/spell=263806) при активном [Элементале бури](https://ru.wowhead.com/spell=192249).
2. {:.mote-apl}{{ site.data.spells.fe }} и {{ site.data.spells.igor }} по кулдауну.
  * {:.primal_elem-apl}С талантом {{ site.data.spells.primal_elem }} вы можете иметь активным максимум одного элементаля. Не призывайте второго, иначе он заменит первого.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
3. {:.lmt-apl}{{ site.data.spells.fe }} и {{ site.data.spells.igor }} по кулдауну.
  * {:.primal_elem-apl}С талантом {{ site.data.spells.primal_elem }} вы можете иметь активным максимум одного элементаля. Не призывайте второго, иначе он заменит первого.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.meteor }} с панели питомца (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
4. {:.storm-apl}{{ site.data.spells.storm }} и {{ site.data.spells.igor }} по кулдауну.
  * {:.primal_elem-apl}С талантом {{ site.data.spells.primal_elem }} вы можете иметь активным максимум одного элементаля. Не призывайте второго, иначе он заменит первого.
  * {:.primal_elem-apl}Не забывайте использовать {{ site.data.spells.eye_storm }} с панели питомца, но только после того, как {{ site.data.spells.storm }} баффнул себя [Призывом молнии](https://ru.wowhead.com/spell=157348) (рекомендуется использовать [макрос](https://stormkeeper.ru/info/macros.html#%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%B8)).
5. {:.asc_ele-apl}{{ site.data.spells.asc_ele }} по кулдауну.
  * {:.asc_ele-apl}Перед активацией [Перерождения](https://ru.wowhead.com/spell=114050) используйте все заряды [Выброса лавы](https://ru.wowhead.com/spell=51505), но только если это не уменьшит количество использований [Перерождения](https://ru.wowhead.com/spell=114050) за бой.
6. {:.eogs-apl}{{ site.data.spells.quake }} если активен бафф от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215) и если следующее ваше заклинание накопит больше **100** ед. энергии Водоворота.
7. {{ site.data.spells.es }} если следующее заклинание накопит более **100** ед. энергии Водоворота.
8. {:.eb-apl}{{ site.data.spells.eb }} по кулдауну.
9. {:.sk-apl}{{ site.data.spells.sk }} по кулдауну.
10. {:.pw-apl}{{ site.data.covenants.pw }} по кулдауну, если у вас нет активного баффа от этого заклинания.
11. {:.eogs-apl .mote-apl}{{ site.data.spells.quake }} под баффами от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215) и [Властелина стихий](https://ru.wowhead.com/spell=16166).
12. {:.ecs-apl}{{ site.data.spells.ecs }} если у вас более **60** ед. энергии Водоворота или {{ site.data.spells.lvb }} не на кулдауне.
13. {:.ecs-apl}{{ site.data.spells.lvb }} если активен бафф от [Вторящего шока](https://ru.wowhead.com/spell=320125).
14. {:.vt-apl}{{ site.data.covenants.vt }} по кулдауну.
15. {:.ft-apl}{{ site.data.covenants.ft }} по кулдауну.
   * {:.mote-apl}С талантом {{ site.data.spells.mote }}, всегда старайтесь усилить им {{ site.data.covenants.ft }}.
16. {:.lmt-apl}{{ site.data.spells.lmt }} по кулдауну.
17. {:.sk-apl .mote-apl}{{ site.data.spells.lb }} под баффами от [Хранителя бурь](https://ru.wowhead.com/spell=191634) и [Властелина стихий](https://ru.wowhead.com/spell=16166).
18. {:.storm-apl}{{ site.data.spells.lb }} при активном [Элементале бури](https://ru.wowhead.com/spell=192249) и при наличии более **18** стаков [Порыва ветра](https://ru.wowhead.com/spell=263806).
19. {:.if-apl}{{ site.data.spells.if }} по кулдауну.
20. {:.if-apl .mote-apl}{{ site.data.spells.frs }} под баффами от [Ледяной ярости](https://ru.wowhead.com/spell=210714) и [Властелина стихий](https://ru.wowhead.com/spell=16166).
21. {:.sop-apl}{{ site.data.spells.lb }} при активном баффе от [Прилива мощи](https://ru.wowhead.com/spell=26303), если использование [Выброса лавы](https://ru.wowhead.com/spell=51505) не увеличиит количество [Элементалей огня](https://ru.wowhead.com/spell=198067) за бой.
22. {{ site.data.spells.lvb }} по кулдауну.
23. {{ site.data.spells.fs }} если до спадения осталось менее **5.4** секунд.
24. {:.eogs-apl}{{ site.data.spells.quake }} если активен бафф от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215).
25. {{ site.data.spells.es }} если есть **60** или более ед. энергии Водоворота.
  * {:.mote-apl}С талантом {{ site.data.spells.mote }}, придерживайте использование [Земного шока](https://ru.wowhead.com/spell=8042), если до окончания кулдауна [Выброса лавы](https://ru.wowhead.com/spell=51505) осталось **1-2** ГКД.
26. {:.if-apl}{{ site.data.spells.frs }} под баффом от [Ледяной ярости](https://ru.wowhead.com/spell=210714).
27. {:.ch-apl}{{ site.data.covenants.ch }} по кулдауну.
28. {:.discharge-apl}{{ site.data.spells.discharge }} по кулдауну (спасибо за тестирование нашего сайта!).
29. {{ site.data.spells.lb }} 

# Открывающая ротация, «Opener»

**Опенер** – это фиксированный порядок кастов в самом начале боя. Динамический опенер находится в разработке, ниже представлены стандартный вариант опенера, с талантами {{ site.data.spells.eb }} и {{ site.data.spells.if }} и с легендаркой {{ site.data.legend.lava }}:

1. {{ site.data.spells.sk }} за **5** секунд до пула.
3. {{ site.data.spells.fe }} за **3.5** секунд до пула.
2. {{ site.data.spells.eb }} прекастом за **2** секунды до пула.
  * ***Пул босса.***
4. {{ site.data.covenants.pw }} (или {{ site.data.spells.fs }}, если вы не <span style="color:#40bf40;font-size:1em;">Некролорд</span>)
5. {{ site.data.spells.lvb }}
6. {{ site.data.spells.lb }}, усиленная {{ site.data.spells.sk }}
7. {{ site.data.spells.lvb }}
8. {{ site.data.spells.es }}
9. {{ site.data.spells.lvb }}
10. {{ site.data.spells.lb }}, усиленная {{ site.data.spells.sk }}
11. {{ site.data.spells.if }}
12. Продолжаем обычную ротацию.

Призывайте до пула {{ site.data.spells.igor }} (перед {{ site.data.spells.sk }}), но только если вы не используете талант {{ site.data.spells.primal_elem }}. Помните, что {{ site.data.spells.igor }} с проводником {{ site.data.conduits.vital }} является защитным сейвом и может быть полезен по ходу боя, а не с пула.
{: class="bordered"}

**Влияние легендарных предметов на ротацию**

* {{ site.data.legend.lava }} – кастуем усиленный {{ site.data.spells.lvb }} после каждого применения [Земного шока](https://ru.wowhead.com/spell=8042) (точные приоритеты указаны выше). Бафф от этой легендарки работает на [Первозданную волну](https://ru.wowhead.com/spell=326059) <span style="color:#40bf40;font-size:1em;">Некролордов</span>, усиливая все выпущенные [Выбросы лавы](https://ru.wowhead.com/spell=51505) на **20%**. Используется только в бою против **одной цейли**, на **две** и более цели стоит использовать {{ site.data.spells.quake }}.

* {{ site.data.legend.eogs }} – чередуем {{ site.data.spells.es }} и {{ site.data.spells.quake }} и в бою против **одной цели**, и на **АоЕ**. Всегда следует бафать усиленное {{ site.data.spells.quake }} с помощью таланта {{ site.data.spells.mote }}.

* {{ site.data.legend.fire }} – развешиваем [Огненные шоки](https://ru.wowhead.com/spell=188389) на все доступные цели. При взятом таланте {{ site.data.legend.storm }} – только когда {{ site.data.legend.storm }} не активнен (в бою против одной цели следуйте приоритетам выше).

<a href="https://ru.wowhead.com/spell=16166" target="blank" data-wh-icon-size="medium" >**Властелин стихий**</a> – особые моменты при использовании.

* Если у вас есть два заряда [Выброса лавы](https://ru.wowhead.com/spell=51505), то **не стоит** кастовать между ними обычную [Молнию](https://ru.wowhead.com/spell=188196), так как это приведет к потере урона. Это связано с тем, что если в момент применения [Молнии](https://ru.wowhead.com/spell=188196) у вас прокнет {{ site.data.spells.lava_surge }}, то вы потеряете часть КД на {{ site.data.spells.lvb }}.
* Но это правило не распространяется на мгновенные заклинания – усиленная {{ site.data.spells.lb }} от таланта {{ site.data.spells.sk }}, усиленный {{ site.data.spells.frs }} от таланта {{ site.data.spells.if }}, а также {{ site.data.spells.es }} и {{ site.data.spells.quake }}. Поглощайте бафф от [Властелина стихий](https://ru.wowhead.com/spell=16166) этими заклинаниями, даже если у вас уже есть один стак [Выброса лавы](https://ru.wowhead.com/spell=51505).
* Проще говоря – не стоит кастовать обычную [Молнию](https://ru.wowhead.com/spell=188196), если у вас есть заряд [Выброса лавы](https://ru.wowhead.com/spell=51505). Бафф от таланта {{ site.data.spells.mote }} не перекроет потенциальную потерю урона при проке {{ site.data.spells.lava_surge }}. 
* Подходя к **60** ед. энергии Водоворота, ориентируйтесь на кулдаун [Выброса лавы](https://ru.wowhead.com/spell=51505) и других заклинаний. Придерживайте {{ site.data.spells.es }}, чтобы скастовать его с баффом от {{ site.data.spells.mote }}.
* По сути, у нас есть окно между **60** и **100** энергии Водоворота, за время которого мы должны использовать [Выброс лавы](https://ru.wowhead.com/spell=51505) и сразу же {{ site.data.spells.es }}.
* Всегда-всегда усиливайте {{ site.data.spells.quake }} при игре с легендаркой {{ site.data.legend.eogs }}.
* Не стоит уходить в оверкап энергии Водоворота ради баффа [Властелина стихий](https://ru.wowhead.com/spell=16166), это ведет к потере урона.
* Приоритет заклинаний для баффа {{ site.data.spells.mote }}:

1. {{ site.data.covenants.ft }}
2. {{ site.data.spells.quake }} на **две** и более целях, либо на **одну** цель при наличии баффа от [Отголосков Великого Раскола](https://ru.wowhead.com/spell=336215).
3. {{ site.data.spells.lb }} под баффом от [Хранителя бурь](https://ru.wowhead.com/spell=191634)
4. {{ site.data.spells.es }}
5. {{ site.data.spells.frs }} под баффом от [Ледяной ярости](https://ru.wowhead.com/spell=210714)
6. {{ site.data.spells.eb }} 
  * **Важно!** {{ site.data.spells.eb }} используется всегда по кулдауну, вне зависимости от наличия или отсутствия баффа {{ site.data.spells.mote }}.
7. {{ site.data.spells.lb }}
8. {{ site.data.spells.if }}
9. {{ site.data.spells.frs }}

Подробнее про талант {{ site.data.spells.mote }} можно почитать в [специальном разделе](https://stormkeeper.ru/ele/talents.html).

<a href="https://ru.wowhead.com/spell=117014" target="blank" data-wh-icon-size="medium" >**Удар духов стихий**</a> – особые моменты при использовании.

* В бою против **одной**, **двух** или **трёх** целей {{ site.data.spells.eb }} кастуется по кулдауну.
* В бою против **четырех** и более целей {{ site.data.spells.eb }} **не используется**.
* Главное правило – не уходить в оверкап энергии Водоворота.
* {{ site.data.spells.eb }} генерирует **30** ед. энергии Водоворота, и еще **15** при проке Перегрузки.
* Прок перегрузки вылетает не сразу, а спустя небольшой промежуток времени после завершения каста.
* Можно скастовать {{ site.data.spells.eb }} на **70** энергии Воворота и сразу использовать {{ site.data.spells.es }}, тогда перегрузка вылетит уже после каста [Земного шока](https://ru.wowhead.com/spell=8042) и не уйдет в оверкап.

# Урон в движении

Нанесение урона при движении – важная часть при игре за Элем шамана. Всегда кастуйте что-нибудь на перебежках, иначе вы будете терять на этом урон. Старайтесь минимизировать время нахождения в форме [Призрачного волка](https://ru.wowhead.com/spell=2645), ведь в этой форме вы точно не можете наносить урон.

Вот те способности, которые мы можем использовать в движении:

1. {{ site.data.spells.es }} или {{ site.data.spells.quake }}, в зависимости от количества целей.
2. Мгновенный {{ site.data.spells.lvb }} с проком [Волны лавы](https://ru.wowhead.com/spell=77756)
3. Обновить {{ site.data.spells.fs }}
4. {{ site.data.spells.frs }}, даже без баффа от [Ледяной ярости](https://ru.wowhead.com/spell=210714)
5. Прожать {{ site.data.spells.swg }} и просто продолжать обычную ротацию.

Перебежки можно разделить на **короткие** и **длинные**.

**Короткая** перебежка длится несколько ГКД – например выйти из лужи или отбежать от какой-нибудь абилки босса. Если такая перебежка запланирована, то мы можем накопить под неё **60+** ед. энергии Водоворота, чтобы использовать мгновенные {{ site.data.spells.es }} и {{ site.data.spells.lvb }} (при игре с легендаркой {{ site.data.legend.lava }}). Если вы не ожидали, что вам придется резко начать движение – используйте доступные заклинания из списка выше. Не стоит использовать форму [Призрачного волка](https://ru.wowhead.com/spell=2645), только если вы точно знаете, что без неё не успеете выйти из опасной лужи.

**Длинная** перебежка длится дольше нескольких ГКД, и именно на таких перебежках игроки используют форму [Призрачного волка](https://ru.wowhead.com/spell=2645) или просто бегут, теряя урон. Примеры таких перебежек: притягивание на Алчном разрушителе, притягивание на Зи'моксе, перебежка на чисту площадку на Леди Инерве Дарквейн и т.д.

Следующие действия помогут избежать потери урона на **длинных** перебежках:

1. Заранее занимайте позицию таким образом, чтобы уменьшить длительность перебежки.
2. Планируйте использование [Благосклонности предков](https://ru.wowhead.com/spell=79206).
3. Приберегите использование [Ледяной ярости](https://ru.wowhead.com/spell=210714) под долгую перебежку.

Если у вас все равно ничего не остается, кроме как спамить {{ site.data.spells.frs }} – спамьте его. Лучше наносить хоть сколько-нибудь урона, чем не наносить вообще.

# Бой против **2** целей

В бою против **двух** целей следует продолжать использовать ротацию для **боя против одной цели** (указанную выше), со следующими изменениями:

1. Используйте {{ site.data.spells.quake }} вместо [Земного шока](https://ru.wowhead.com/spell=8042) для траты энергии Водоворота. Старайтесь усилять его баффом от [Властелина стихий](https://ru.wowhead.com/spell=16166).
2. Поддерживайте {{ site.data.spells.fs }} на **обеих** целях.
3. Кастуйте {{ site.data.spells.eb }} **по кулдауну**.
4. Кастуйте {{ site.data.spells.lvb }} **по кулдауну**, даже без прока [Волны лавы](https://ru.wowhead.com/spell=77756).
5. Кастуйте [Цепную молнию](https://ru.wowhead.com/spell=188196) для генерации энергии Водоворота.

# Бой против **3** целей

В бою против **трех** целей мы все еще используемротацию для **боя против одной цели**(указанную выше), но уделяем меньше внимания [Выбросу лавы](https://ru.wowhead.com/spell=51505), кастуя его только по проку, либо перед [Землетрясением](https://ru.wowhead.com/spell=61882).

1. Используйте {{ site.data.spells.quake }} вместо [Земного шока](https://ru.wowhead.com/spell=8042) для траты энергии Водоворота. Старайтесь усилять его баффом от [Властелина стихий](https://ru.wowhead.com/spell=16166).
2. Поддерживайте {{ site.data.spells.fs }} на **всех** целях.
3. Кастуйте {{ site.data.spells.eb }} **по кулдауну**.
4. Кастуйте {{ site.data.spells.lvb }} **по проку** [Волны лавы](https://ru.wowhead.com/spell=77756).
5. {{ site.data.spells.lvb }} даже без прока [Волны лавы](https://ru.wowhead.com/spell=77756) перед [Землетрясением](https://ru.wowhead.com/spell=61882).
6. Кастуйте [Цепную молнию](https://ru.wowhead.com/spell=188196) для генерации энергии Водоворота.

# Бой против **4** и более целей

В бою против **четыре** целей мы переходим на полноценную **АоЕ** ротацию: прекращаем использовать {{ site.data.spells.eb }} и {{ site.data.spells.if }}, а {{ site.data.spells.lvb }} кастуем **только** по проку перед [Землетрясением](https://ru.wowhead.com/spell=61882)

1. Используйте {{ site.data.spells.quake }} для траты энергии Водоворота. Старайтесь усилять его баффом от [Властелина стихий](https://ru.wowhead.com/spell=16166).
2. Кастуйте {{ site.data.spells.lvb }} **по проку** от [Волны лавы](https://ru.wowhead.com/spell=77756), только перед [Землетрясением](https://ru.wowhead.com/spell=61882).
3. Поддерживайте {{ site.data.spells.fs }} на **1-2** самых живучих целях.
4. Кастуйте [Цепную молнию](https://ru.wowhead.com/spell=188443) для набора энергии Водоворота.

# АоЕ бой через Элементаля бури

При игре через [Элементаля бури](https://ru.wowhead.com/spell=192249) ротация становится гораздо проще, так как без таланта {{ site.data.spells.mote }} нам не надо думать про бафф [Землетрясения](https://ru.wowhead.com/spell=61882) с помощью [Выброса лавы](https://ru.wowhead.com/spell=51505).

Начиная от **2** целей мы просто спамим [Цепную молнию](https://ru.wowhead.com/spell=188443) и тратим энергию Водоворота на [Землетрясение](https://ru.wowhead.com/spell=61882). Даже с легендаркой {{ site.data.legend.fire }}, можно не развешивать [Огненные шоки](https://ru.wowhead.com/spell=188389) на АоЕ (или только во время перебежек).

Помните, что [Элементаль бури](https://ru.wowhead.com/spell=192249) в Мифик+ раскрывает себя только в организованной группе, когда вы знаете что ваш бурст не уйдет в пустоту. Нет ничего хуже, чем вызвать [Элементаля бури](https://ru.wowhead.com/spell=192249) и увидеть как маг применяет [Возгорание](https://ru.wowhead.com/spell=190319).
{: class="bordered"}

# <span style="color:#40bf40;font-size:1em;">Правильное использование Первозданной волны Некролордов</span>

{{ site.data.covenants.pw }} – единственная способность Ковенанта, которая является не просто кнопкой, которую следует жать по кулдауну, а взаимодействует с другими нашими абилками. Разберем лучшие варианты её использования, в зависимости от количества целей:

1. **Одна** цель – просто жмем [Первозданную волну](https://ru.wowhead.com/spell=326059) по кулдауну, желательно под баффом от легендарки {{ site.data.legend.lava }}. Но если у вас уже есть два стака [Выброса лавы](https://ru.wowhead.com/spell=51505) и подошел кулдаун [Первозданной волны](https://ru.wowhead.com/spell=326059), то не стоит сдавать {{ site.data.spells.es }} и терять один стак. Также не стоит обновлять [Огненный шок](https://ru.wowhead.com/spell=188389), если до окончания кулдауна [Первозданной волны](https://ru.wowhead.com/spell=326059) осталось времени меньше, чемя время до спадения [Огненного шока](https://ru.wowhead.com/spell=188389).  

2. **Две** цели – кидайте {{ site.data.spells.fs }} на одну цель, и [Первозданную волну](https://ru.wowhead.com/spell=326059) во вторую, продолжайте обычную ротацию. С легендаркой {{ site.data.legend.lava }} имеет смысл перед применением [Выброса лавы](https://ru.wowhead.com/spell=51505) использовать {{ site.data.spells.es }}.

3. На **три** цели сначала развешивайте [Огненные шоки](https://ru.wowhead.com/spell=188389) и только потом используйте [Выброс лавы](https://ru.wowhead.com/spell=51505). Делайте следующим образом:
  * {{ site.data.spells.fs }}
  * {{ site.data.spells.lvb }}
  * {{ site.data.spells.lvb }}
  * {{ site.data.covenants.pw }}
  * {{ site.data.spells.fs }}  
  
4. На **четыре и более** цели нам не надо кастовать {{ site.data.spells.lvb }} по кулдауну, но мы все еще кастуем его по проку [Волны лавы](https://ru.wowhead.com/spell=77756) перед  [Землетрясением](https://ru.wowhead.com/spell=61882). В зависимости от количества энергии Водоворота и времени жизни мобов в паке, а также наличия активного [Элементаля огня](https://ru.wowhead.com/spell=198067) и легендарки {{ site.data.legend.fire }}, у нас есть несколько вариантов действия:
* Сразу повесить {{ site.data.spells.fs }} и [Первозданную волну](https://ru.wowhead.com/spell=326059), игнорируя проки [Волны лавы](https://ru.wowhead.com/spell=77756), и скастовать {{ site.data.spells.lvb }} когда {{ site.data.spells.fs }} будет на всех четырех мобах.
* Кинуть [Первозданную волну](https://ru.wowhead.com/spell=326059) чуть позже, не теряя проков [Выброса лавы](https://ru.wowhead.com/spell=51505), но тогда потерять часть кулдауна [Первозданной волны](https://ru.wowhead.com/spell=326059). Тут нет однозначного ответа, так как все это зависит от многих факторов и используется по разному.

