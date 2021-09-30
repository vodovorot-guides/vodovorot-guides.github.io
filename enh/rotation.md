---
title: Ротация Шамана Совершенствования
layout: page
last_update: 2021-09-30
wow: 9.1
toc: true
author: "Amani, Wordup"
description: Описание ротации Шамана Совершенствования. Приоритет способностей на этой странице динамически меняется в зависимости от того, какие выбраны таланты, легендарный предмет и ковенант.
image: /assets/img/logos/rotation.png
custom-javascript-list:
    - "/assets/js/rotation_switches.js"
---

<details markdown=1><summary><i>Журнал изменений</i></summary>
<br>

* **17.09.2021**: Обновлен опенер, теперь динамически меняется для любого билда.
* **20.08.2021**: Добавлен выбор билда для Мифик+ и рейда.

</details>
<p></p>

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

**Опенер** – это фиксированный порядок кастов в самом начале боя против одной цели.

1. {:.witch-apl}{{ site.data.spells.wt }} до пула, максимально близко к боссу.
1. {:.actuators-apl}{{ site.data.spells.wt }} до пула, максимально близко к боссу.
1. {:.wolf-apl}{{ site.data.spells.wt }} до пула, максимально близко к боссу.
1. {:.leg_kyrian-apl}{{ site.data.spells.wt }} до пула, максимально близко к боссу.
1. {:.leg_venthyr-apl}{{ site.data.spells.wt }} до пула, максимально близко к боссу.
1. {:.leg_fae-apl}{{ site.data.spells.wt }} до пула, максимально близко к боссу.
1. {:.leg_necrolords-apl}{{ site.data.spells.wt }} до пула, максимально близко к боссу.
2. {:.sk_enh-apl}[Хранитель бурь](https://ru.wowhead.com/spell=320137) прекастом до пула.
3. {:.vt-apl}{{ site.data.spells.fs }} в момент пула, по дороге к боссу.
3. {:.ch-apl}{{ site.data.spells.fs }} в момент пула, по дороге к боссу.
3. {:.ft-apl}{{ site.data.spells.fs }} в момент пула, по дороге к боссу.
3. {:.pw-apl}{{ site.data.covenants.pw }} в момент пула, по дороге к боссу.
3. {:.vt-apl}{{ site.data.covenants.vt }} сразу после пула, под босса.
4. {:.spike-apl}{{ site.data.spells.spike }}.
5. {:.wolf-apl}{{ site.data.spells.feral }}.
6. {{ site.data.spells.ss }}.
5. {:.leg_fae-apl}{{ site.data.spells.feral }}.
7. {:.ft-apl}{{ site.data.covenants.ft }}.
5. {:.witch-apl}{{ site.data.spells.feral }}.
5. {:.actuators-apl}{{ site.data.spells.feral }}.
5. {:.doom-apl}{{ site.data.spells.feral }}.
5. {:.leg_kyrian-apl}{{ site.data.spells.feral }}.
5. {:.leg_venthyr-apl}{{ site.data.spells.feral }}.
5. {:.leg_necrolords-apl}{{ site.data.spells.feral }}.
6. {:.asc_enh-apl}{{ site.data.spells.asc_enh }}.
6. {:.asc_enh-apl}{{ site.data.spells.windstrike }}.
1. {:.doom-apl}{{ site.data.spells.wt }} для активации эффекта легендарки {{ site.data.legend.doom }}.
7. Продолжайте обычную ротацию.

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
13. {:.sk_enh-apl}{{ site.data.spells.cl }} под баффом от [Хранителя бурь](https://ru.wowhead.com/spell=320137).
14. {:.eb-apl}{{ site.data.spells.eb }} при **5+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
15. {:.ch-apl}{{ site.data.covenants.ch }} при **5+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
13. {:.sk_enh-apl}[Хранитель бурь](https://ru.wowhead.com/spell=320137) при **5+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
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
26. {{ site.data.spells.wt }}, если все другие способности недоступны.

# Основные моменты ротации

* **Не стоит сразу тратить стаки {{ site.data.spells.mw }}, и не стоит уходить в оверкап.** Лучше всего сливать их на **7-8** стаках, в удобное время между кулдаунами других способностей.
* **Держите шоки на кулдауне.** Это относится как к бою против одной цели, где необходимо поддерживать {{ site.data.spells.fs }}, так и к АОЕ со взятым талантом {{ site.data.spells.hailstorm }}. Шоки позволяют снижать простои в ротации, так что используйте их по первой возможности.
* **Используйте прок {{ site.data.spells.sb }} так быстро, насколько это возможно.** Наша задача не дать прокам и кулдауну {{ site.data.spells.ss }} пропасть зря, поэтому реагировать на {{ site.data.spells.sb }} крайне важно.
* Аналогичная ситуация с талантом {{ site.data.spells.hh }} – {{ site.data.spells.ll }} с этим баффом имеет гораздо больший приоритет, чем без него.
* Перед применением [Перерождения](https://ru.wowhead.com/spell=114051) всегда используйте {{ site.data.spells.ss }}, так как его кулдаун сбросится после после активации этого таланта.
* Обновляйте {{ site.data.spells.fs }}, когда до конца его спадения осталось менее **5.4** секунд, чтобы это время добавилось к новому {{ site.data.spells.fs }}.
* Не стоит тратить стаки [Оружия Водоворота](https://ru.wowhead.com/spell=187880) на [Молнию](https://ru.wowhead.com/spell=188196) сразу же, как только вы набрали **5** стаков. Так как максимум возможно набрать **10** стаков, используйте сначала другие способности, чтобы начать их кулдаун. 
* Для уменьшения количества простоев следует сначала использовать способности с коротким кулдауном, а уже затем с долгим. Это отражено в списке приоритетов.


# Бой на АоЕ

Ротация на АоЕ (**2+** цели) при взятых талантах {{ site.data.spells.fw }}, {{ site.data.spells.flurry }}, {{ site.data.spells.sunder }} и {{ site.data.spells.asc_enh }}:

1. {{ site.data.spells.wt }} – если тотем не активен.
2. {{ site.data.spells.crush }}, если бафф не активен.
3. {{ site.data.spells.asc_enh }}, стараясь задеть максимальное количество целей при активации.
5. {{ site.data.spells.sunder }} на максимально количество целей.
9. {{ site.data.spells.ss }} / {{ site.data.spells.windstrike }}.
8. {{ site.data.spells.crush }}.
7. {{ site.data.spells.cl }} при **5+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
10. {{ site.data.spells.ll }}.
11. {{ site.data.spells.fs }}, если ничего более не доступно.

* [Цепная молния](https://ru.wowhead.com/spell=188443) заменяет [Молнию](https://ru.wowhead.com/spell=188196) начиная от **2** целей.
* Способности ковенантов и {{ site.data.spells.feral }} следует использовать по кулдауну. {{ site.data.covenants.ch }} только на **5+** стаках {{ site.data.spells.mw }}.


# Ветра рока

Приоритет способностей в бою против **одной цели** при активном баффе от легендарки {{ site.data.legend.doom }}:

1. {{ site.data.spells.windstrike }} при активном {{ site.data.spells.asc_enh }}.
2. {{ site.data.spells.ss }}.
3. {{ site.data.spells.crush }}.
4. {{ site.data.spells.sunder }}.
5. Все остальные способности, согласно обычной ротации.

Приоритет способностей на **АоЕ** при активном баффе от легендарки {{ site.data.legend.doom }}.

За счет того, что {{ site.data.spells.crush }} считается атакой с правой руки, шанс на прок [Оружия неистовства ветра](https://ru.wowhead.com/spell=33757) рассчитывается на каждую пораженную цель. А с легендаркой {{ site.data.legend.doom }} этот шанс становится равен **100%**, что также усиливает талант {{ site.data.spells.fw }}, делая эту легу лучшим вариантом для боя со множеством целей. 
{: class="bordered"}

1. {{ site.data.spells.crush }}.
2. {{ site.data.spells.sunder }}.
3. {{ site.data.spells.ss }} / {{ site.data.spells.windstrike }}.
4. Все остальные способности, согласно обычной ротации.

**Важно!** Если до конца кулдауна [Сокрушающей молнии](https://ru.wowhead.com/spell=187874) осталось более **3** секунд, используйте [Цепную молнию](https://ru.wowhead.com/spell=188443) для сброса её КД. Это даст дополнительный прок [Оружия неистовства ветра](https://ru.wowhead.com/spell=33757) по всем целям.
