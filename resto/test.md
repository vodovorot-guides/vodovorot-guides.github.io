---
layout: page
last_update: 2024-07-23
title: Гайд на Рестор Шамана
wow: 11.0
toc: true
author: Amani
description: Большое руководство по всем аспектам игры за Шамана Исцеления. Здесь разобраны билды талантов, приоритет заклинаний, подбор экипировки, настройка интерфейса, макросы и WA и многое другое.
image: /assets/img/resto_tb2.png
custom-javascript-list:
    - "/assets/js/rotation_switches.js"
---


<hr style="height:1px;background-color:#bbb">
<p></p>


<center>Выберите используемые таланты, и приоритет способностей соответственно изменится:</center>

<div class="btn-toolbar justify-content-center mt-2 mb-3">
  <div class="btn-group" role="group">
    <button type="button" id="build_resto_ww" class="btn btn-primary rotation-btn">Рейд билд через Шепчущие волны</button>
    <button type="button" id="build_resto_ch" class="btn btn-primary rotation-btn">Рейд билд через Цепное исцеление</button>
    <button type="button" id="build_resto_mplus" class="btn btn-primary rotation-btn">Мифик+ билд</button>
  </div>
</div>


<ul class="rotation_switches form-check form-switch mb-2" style="list-style-type: none;">
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_totem"> [Пульсирующий тотем](https://ru.wowhead.com/spell=444995)</li>  
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_cbt"> [Тотем разразившегося ливня](https://ru.wowhead.com/spell=157153)</li>     
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_rain"> [Целительный ливень](https://ru.wowhead.com/spell=73920)</li>    
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_ul"> [Высвободить чары жизни](https://www.wowhead.com/ru/spell=73685/)</li>  
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_und"> [Пульсация](https://ru.wowhead.com/spell=200071)</li>  
  <li markdown="span" class="rotation_switch"> 
    <input class="form-check-input" type="checkbox" id="rotation_switch_ww"> [Шепчущие волны](https://www.wowhead.com/ru/spell=1217598/)</li>
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_ws"> [Родник](https://www.wowhead.com/ru/spell=197995/)</li>
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_ewt"> [Тотем земляной стены](https://ru.wowhead.com/spell=198838)</li>  
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_reach"> [Устремление предков](https://www.wowhead.com/ru/spell=382732/)</li>
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_flow"> [Приливные течения](https://www.wowhead.com/ru/spell=382039/)</li>  
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_tide"> [Прилив](https://www.wowhead.com/ru/spell=157154/)</li>
  <li markdown="span" class="rotation_switch">
    <input class="form-check-input" type="checkbox" id="rotation_switch_mote"> [Властелин стихий](https://www.wowhead.com/ru/spell=462375/)</li>
</ul>


<center>Количество целей:</center>
<div class="btn-toolbar justify-content-center mt-2 mb-3">
  <div class = "btn-group btn-group-sm">
    <button type="button" id="target_1" class="btn btn-primary px-3 rotation-btn active">Одна цель</button>
    <button type="button" id="target_2" class="btn btn-primary px-3 rotation-btn">АоЕ / 2+ цели</button>
  </div>
</div>

<hr style="height:1px;background-color:#bbb">
<p></p>

<div id="st" markdown="1">


1. Используйте [Быстрину](https://ru.wowhead.com/spell=61295) для получения двух стаков [Приливных волн](https://www.wowhead.com/ru/spell=51564/).
2. {:.rain-apl}[Целительный ливень](https://ru.wowhead.com/spell=73920), но **НЕ** кастуйте сразу же [Ливневый дождь](https://www.wowhead.com/ru/spell=462488), он потребуется чуть позже.
4. {:.cbt-apl}Устанавливайте [Тотем разразившегося ливня](https://www.wowhead.com/ru/spell=157153).
5. Используйте [Перерождение](https://ru.wowhead.com/spell=114052).
3. Используйте [Высвободить чары жизни](https://www.wowhead.com/ru/spell=73685/).
6. Используйте [Ливневый дождь](https://www.wowhead.com/ru/spell=462488), поглощая эффект от таланта [Высвободить чары жизни](https://www.wowhead.com/ru/spell=73685/).
7. Используйте [Родник](https://www.wowhead.com/ru/spell=197995/).
8. Кастуйте два [Цепных исцеления](https://ru.wowhead.com/spell=1064).
9. Мгновенно кастуйте [Целительный ливень](https://ru.wowhead.com/spell=73920) с баффом от [Природной стремительности](https://www.wowhead.com/ru/spell=132158/) и сразу же [Ливневый дождь](https://www.wowhead.com/ru/spell=462488), пока все бурсты еще активны.
10. Возвращайтесь к обычной ротации, не забыв взорвать [Тотем разразившегося ливня](https://www.wowhead.com/ru/spell=157153) в момент просадки рейда.




</div>

<div id="aoe" markdown="1" style="display:none;">

**Опенер в бою против 2+ целей:**
1. [Элементаль бури](https://ru.wowhead.com/spell=192249) за **4** секунды до пула. Убедитесь, что вы не взяли противника в цель чтобы не запулить раньше времени.
2. [Хранитель бурь](https://ru.wowhead.com/spell=191634) за **3** секунды до пула.
3. [Выброс лавы](https://ru.wowhead.com/spell=51505) за **1.5** секунд до пула.
4. {:.lmt-apl}[Тотем жидкой магмы](https://ru.wowhead.com/spell=192222) в момент пула.
4. {:.no-lmt-apl}[Огненный шок](https://ru.wowhead.com/spell=188389) в момент пула.
2. {:.pw-apl .tempest-apl .lmt-apl}[Первозданная волна](https://ru.wowhead.com/spell=375982).
2. {:.pw-apl .no-tempest-apl .lmt-apl}[Первозданная волна](https://ru.wowhead.com/spell=375982) в макросе со [Стремительностью предков](https://ru.wowhead.com/spell=448861).
3. [Перерождение](https://www.wowhead.com/ru/spell=114050/) в момент пула вместе с прожимным аксессуаром и [Охлажденным зельем](https://www.wowhead.com/ru/item=212265).
2. {:.pw-apl .tempest-apl .no-lmt-apl}[Первозданная волна](https://ru.wowhead.com/spell=375982).
2. {:.pw-apl .no-tempest-apl .no-lmt-apl}[Первозданная волна](https://ru.wowhead.com/spell=375982) в макросе со [Стремительностью предков](https://ru.wowhead.com/spell=448861).
4. [Цепная молния](https://www.wowhead.com/ru/spell=188443).
4. [Цепная молния](https://www.wowhead.com/ru/spell=188443).
7. Продолжайте согласно приоритету заклинаний, указанному ниже.

<p></p>

**Приоритет в бою против 2+ целей:**
1. [Элементаль бури](https://ru.wowhead.com/spell=192249) по кулдауну.
  * Можно синхронизировать [Элементаля бури](https://ru.wowhead.com/spell=192249) и [Перерождение](https://www.wowhead.com/ru/spell=114050/), придержав использование [Элементаля бури](https://ru.wowhead.com/spell=192249), но следите за общим количеством его использований за бой.
2. [Хранитель бурь](https://ru.wowhead.com/spell=191634).
2. {:.lmt-apl}[Тотем жидкой магмы](https://ru.wowhead.com/spell=192222) по кулдауну.
2. {:.lmt-apl .pw-apl .no-tempest-apl}[Первозданная волна](https://ru.wowhead.com/spell=375982) в макросе со [Стремительностью предков](https://ru.wowhead.com/spell=448861).
2. [Перерождение](https://www.wowhead.com/ru/spell=114050/), вместе с прожимным аксессуаром и [Охлажденным зельем](https://www.wowhead.com/ru/item=212265).
2. {:.no-lmt-apl .pw-apl .tempest-apl}[Первозданная волна](https://ru.wowhead.com/spell=375982).
4. [Цепная молния](https://www.wowhead.com/ru/spell=188443), если есть **2** стака баффа [Ярости шторма](https://www.wowhead.com/ru/spell=462695/) и это не приведет к оверкапу энергии Водоворота.
4. {:.no-tempest-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505) с проком [Волны лавы](https://www.wowhead.com/ru/spell=77756), чтобы поглотить огненную часть баффа [Слияние стихий](https://www.wowhead.com/ru/spell=462840).
4. {:.no-eogs-apl}[Землетрясение](https://ru.wowhead.com/spell=61882).
  * {:.no-tempest-apl}В бою против **2-3** целей, в случае **отсутствия** предков, [Землетрясение](https://ru.wowhead.com/spell=61882) можно заменить на [Земной шок](https://ru.wowhead.com/spell=8042).
4. {:.eogs-apl}[Землетрясение](https://ru.wowhead.com/spell=61882) с баффом [Отголоски Великого Раскола](https://www.wowhead.com/ru/spell=384087).
2. {:.eb-apl .eogs-apl}[Удар духов стихий](https://ru.wowhead.com/spell=117014) для получения баффа [Отголоски Великого Раскола](https://www.wowhead.com/ru/spell=384087).
2. {:.no-eb-apl  .eogs-apl}[Земной шок](https://ru.wowhead.com/spell=8042) для получения баффа [Отголоски Великого Раскола](https://www.wowhead.com/ru/spell=384087).
3. {:.tempest-apl}[Буря](https://ru.wowhead.com/spell=454009).
4. {:.no-eb-apl}[Ледяная ярость](https://ru.wowhead.com/spell=462816).
4. {:.no-tempest-apl}[Выброс лавы](https://ru.wowhead.com/spell=51505), если в бою не более **2-3** целей.
  * {:.mote-apl}Всегда чередуйте [Выброс лавы](https://ru.wowhead.com/spell=51505) с другой способностью для реализации баффа [Властелина стихий](https://www.wowhead.com/ru/spell=16166/).
4. {:.no-tempest-apl}[Ледяной шок](https://ru.wowhead.com/spell=196840) с баффом [Ледяной ярости](https://ru.wowhead.com/spell=462816), если [Перерождение](https://www.wowhead.com/ru/spell=114050/) не активно.
6. {:.tempest-apl}[Молния](https://ru.wowhead.com/spell=188196) с баффом от [Хранителя бурь](https://ru.wowhead.com/spell=191634) в бою против **2** целей.
4. [Цепная молния](https://www.wowhead.com/ru/spell=188443).
4. {:.eb-apl}[Ледяная ярость](https://ru.wowhead.com/spell=462816) во время передвижения.
9. [Благосклонность предков](https://ru.wowhead.com/spell=79206) / [Ледяной шок](https://ru.wowhead.com/spell=196840) / [Огненный шок](https://ru.wowhead.com/spell=188389) во время передвижения.



</div>



<hr style="height:1px;background-color:#bbb">
<p></p>