---
title: Ротация Шамана Совершенствования
layout: page
last_update: 2021-09-16
wow: 9.1
toc: true
author: "Amani, Wordup"
description: Описание ротации Шамана Совершенствования. Приоритет способностей на этой странице динамически меняется в зависимости от того, какие выбраны таланты, легендарный предмет и ковенант.
image: /assets/img/logos/rotation.png
custom-javascript-list:
    - "/assets/js/rotation_switches.js"
---

# Выбор билда

Приоритет способностей на этой странице динамически меняется в зависимости от того, какие выбраны таланты, легендарка и ковенант:

<div class="container">
  <div class="row">
    <div class="col text-center">
      <a href="/enh/rotation.html" id="raid_build_enh" button="button" class="btn btn-outline-primary guide-btn">Выбрать билд для Рейда</a>
      <a href="/enh/rotation.html" id="mplus_build_enh" button="button" class="btn btn-outline-primary guide-btn">Выбрать билд для Мифик+</a>
    </div>
  </div>
</div>

<p></p>

{% include talents.html data=site.data.talents.enh active="3201031" switch=true %}

# Открывающая ротация, «Opener»

**Опенер** – это фиксированный порядок кастов в самом начале боя. 

Опенер в билде для **Рейда**, с талантами [Духи стихий](https://ru.wowhead.com/spell=262624) и {{ site.data.spells.eb }}:

1. {{ site.data.spells.wt }} максимально близко к боссу.
2. {{ site.data.spells.fs }} по дороге к боссу
3. {{ site.data.spells.feral }}
4. {{ site.data.spells.ss }}
5. {{ site.data.covenants.ft }}.
6. Продолжаем обычную ротацию.


Опенер в билде для **Мифик+**, с талантом {{ site.data.spells.asc_enh }} и легендаркой {{ site.data.legend.doom }}:

1. {{ site.data.spells.fs }} по дороге к боссу.
2. {{ site.data.spells.ss }}
3. {{ site.data.spells.feral }}
4. {{ site.data.spells.asc_enh }} и сразу же {{ site.data.spells.windstrike }}
5. {{ site.data.spells.wt }}
6. Продолжаем обычную ротацию.

# Бой против одной цели

Ниже представлен список приоритетов заклинаний, который динамически меняется в зависимости от выбранных выше талантов, легендарки и ковенанта:

1. {:.witch-apl}{{ site.data.spells.wt }}, если тотем не активен.
1. {:.actuators-apl}{{ site.data.spells.wt }}, если тотем не активен.
1. {:.wolf-apl}{{ site.data.spells.wt }}, если тотем не активен.
2. {:.pw-apl}{{ site.data.covenants.pw }}.
3. {{ site.data.spells.fs }}, если отсутствует на цели.
4. {{ site.data.spells.feral }} для генерации стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
16. {:.hh-apl}{{ site.data.spells.ll }} с баффом от таланта {{ site.data.spells.hh }}.
6. {:.lf-apl}{{ site.data.spells.ll }} при отсутствии дебаффа {{ site.data.spells.lf }}.
7. {:.doom-apl}{{ site.data.spells.wt }}, если возможно получить бафф от легендарки {{ site.data.legend.doom }}.
8. {:.asc_enh-apl}{{ site.data.spells.asc_enh }}.
9. {:.asc_enh-apl}{{ site.data.spells.windstrike }}.
10. {:.hailstorm-apl}{{ site.data.spells.frs }} с баффом от таланта {{ site.data.spells.hailstorm }}.
11. {:.vt-apl}{{ site.data.covenants.vt }}. 
12. {:.spike-apl}{{ site.data.spells.spike }}.
13. {:.ft-apl}{{ site.data.covenants.ft }}. 
14. {:.eb-apl}{{ site.data.spells.eb }} при **5+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
15. {:.ch-apl}{{ site.data.covenants.ch }} при **5+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
16. {{ site.data.spells.lb }} при **8+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
17. {{ site.data.spells.ss }}.
18. {{ site.data.spells.ll }}.
19. {{ site.data.spells.crush }}.
20. {{ site.data.spells.fs }}, если до спадения осталось менее **5.4** секунд.
21. {{ site.data.spells.frs }}. 
22. {:.is-apl}{{ site.data.spells.is }}.
23. {:.sunder-apl}{{ site.data.spells.sunder }}.
24. {:.fn-apl}{{ site.data.spells.fn }} при активном {{ site.data.spells.fs }}.
25. {{ site.data.spells.lb }} при **5+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
26. {{ site.data.spells.wt }} если все другие способности недоступны.

# Основные моменты ротации

* **Не стоит сразу тратить стаки {{ site.data.spells.mw }}, и не стоит уходить в оверкап.** Лучше всего сливать их на **7-8** стаках, в удобное время между кулдаунами других способностей.
* **Держите шоки на кулдауне.** Это относится как к бою против одной цели, где необходимо поддерживать {{ site.data.spells.fs }}, так и к АОЕ со взятым талантом {{ site.data.spells.hailstorm }}. Шоки позволяют снижать простои в ротации, так что используйте их по первой возможности.
* **Используйте прок {{ site.data.spells.sb }} так быстро, насколько это возможно.** Наша задача не дать прокам и кулдауну {{ site.data.spells.ss }} пропасть зря, поэтому реагировать на {{ site.data.spells.sb }} крайне важно.
* Аналогичная ситуация с талантом {{ site.data.spells.hh }} – {{ site.data.spells.ll }} с этим баффом имеет гораздо больший приоритет, чем без него.
* Перед применением [Перерождения](https://ru.wowhead.com/spell=114051) всегда используйте {{ site.data.spells.ss }}, так как его кулдаун сбросится после после активации этого таланта.
* Обновляйте {{ site.data.spells.fs }}, когда до конца его спадения осталось менее **5.4** секунд, чтобы это время добавилось к новому {{ site.data.spells.fs }}.
* Не стоит тратить стаки {{ site.data.spells.mw }} на {{ site.data.spells.lb }} сразу же, как только вы набрали **5** стаков. Так как максимум возможно набрать **10** стаков, используйте сначала другие способности, чтобы начать их кулдаун. 
* Для уменьшения количества простоев следует сначала использовать способности с коротким кулдауном, а уже затем с долгим. Это отражено в списке приоритетов.

# Бой на АоЕ

Ротация на АоЕ при взятых талантах {{ site.data.spells.fw }}, {{ site.data.spells.flurry }}, {{ site.data.spells.sunder }} и {{ site.data.spells.asc_enh }}:

1. {{ site.data.spells.wt }} – если тотем не активен.
3. {{ site.data.spells.asc_enh }}, стараясь задеть максимальное количество целей при активации.
5. {{ site.data.spells.sunder }} на максимально количество целей.
7. {{ site.data.spells.cl }} при **5+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
8. {{ site.data.spells.crush }}.
9. {{ site.data.spells.ss }}.
10. {{ site.data.spells.ll }} если ничего больше не доступно.

* Способности ковенантов и {{ site.data.spells.feral }} следует использовать по кулдауну. {{ site.data.covenants.ch }} только на **5+** стаках {{ site.data.spells.mw }}. {{ site.data.covenants.ft }} стоит придержать, пока не останется **1-3** моба.

# Влияние легендарных предметов

Приоритет способностей в бою против **одной цели** под баффом от легендарки {{ site.data.legend.doom }}:

1. {{ site.data.spells.windstrike }} при активном {{ site.data.spells.asc_enh }}
2. {{ site.data.spells.ss }}
3. {{ site.data.spells.crush }}
4. {{ site.data.spells.sunder }}
5. Все остальные способности, согласно обычной ротации.

Приоритет способностей на **АоЕ** под баффом от легендарки {{ site.data.legend.doom }}.

За счет того, что {{ site.data.spells.crush }} считается атакой с правой руки, шанс на прок [Оружия неистовства ветра](https://ru.wowhead.com/spell=33757) рассчитывается на каждую пораженную цель. А с легендаркой {{ site.data.legend.doom }} этот шанс становится равен **100%**, что также усиливает талант {{ site.data.spells.fw }}, делая эту легу лучшим вариантом для боя со множеством целей. 
{: class="bordered"}

1. {{ site.data.spells.crush }}
2. {{ site.data.spells.sunder }}
3. {{ site.data.spells.ss }} / {{ site.data.spells.windstrike }} 
4. Все остальные способности, согласно обычной ротации.

**Важно!** Если до конца кулдауна [Сокрушающей молнии](https://ru.wowhead.com/spell=187874) осталось более **3** секунд, используйте [Цепную молнию](https://ru.wowhead.com/spell=188443) для сброса её КД. Это даст дополнительный прок [Оружия неистовства ветра](https://ru.wowhead.com/spell=33757) по всем целям.
