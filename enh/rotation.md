---
title: Ротация Шамана Совершенствования
layout: page
last_update: 2021-03-20
wow: 9.0.5
toc: true
author: Amani, Wordup
custom-javascript-list:
    - "/assets/js/rotation_switches.js"
---

# Выбор билда

Приоритет способностей на этой странице динамически меняется в зависимости от того, какие выбраны таланты, легендарка и ковенант:

{% include talents.html data=site.data.talents.enh active="2101033" switch=true %}

# Открывающая ротация, «Opener»

**Опенер** – это фиксированный порядок кастов в самом начале боя. Динамический опенер находится в разработке, ниже представлены стандартный вариант опенера, с талантами {{ site.data.spells.asc_enh }} и с легендаркой {{ site.data.legend.doom }}:

1. {{ site.data.spells.fs }} по дороге к боссу.
2. {{ site.data.spells.ss }}
3. {{ site.data.spells.feral }}
4. {{ site.data.spells.asc_enh }} и сразу же {{ site.data.spells.windstrike }}
5. {{ site.data.spells.wt }}
6. Продолжаем обычную ротацию.

# Бой против одной цели

Ниже представлен список приоритетов заклинаний, который динамически меняется в зависимости от выбранных выше талантов, легендарки и ковенанта:

1. {:.witch-apl}{{ site.data.spells.wt }} если тотем не активен.
1. {:.actuators-apl}{{ site.data.spells.wt }} если тотем не активен.
1. {:.wolf-apl}{{ site.data.spells.wt }} если тотем не активен.
2. {:.pw-apl}{{ site.data.covenants.pw }} 
3. {{ site.data.spells.fs }} если отсутствует на цели.
4. {{ site.data.spells.feral }} для генерации стаков {{ site.data.spells.mw }}
5. {:.lf-apl}{{ site.data.spells.ll }} при отсутствии дебаффа {{ site.data.spells.lf }}
6. {:.doom-apl}{{ site.data.spells.wt }} если возможно получить бафф от легенедарки {{ site.data.legend.doom }}
7. {:.asc_enh-apl}{{ site.data.spells.asc_enh }}
8. {:.asc_enh-apl}{{ site.data.spells.windstrike }}
9. {:.hailstorm-apl}{{ site.data.spells.frs }} с баффом от таланта {{ site.data.spells.hailstorm }} 
10. {:.vt-apl}{{ site.data.covenants.vt }} 
11. {:.spike-apl}{{ site.data.spells.spike }}
12. {:.ft-apl}{{ site.data.covenants.ft }} 
13. {:.eb-apl}{{ site.data.spells.eb }} по кулдауну, при **5+** стаках {{ site.data.spells.mw }}
14. {:.ch-apl}{{ site.data.covenants.ch }}  при **5+** стаках {{ site.data.spells.mw }}
15. {{ site.data.spells.lb }} при **8+** стаках {{ site.data.spells.mw }}
16. {:.hh-apl}{{ site.data.spells.ll }} во время прока {{ site.data.spells.hh }}
17. {{ site.data.spells.ss }}
18. {{ site.data.spells.ll }}
19. {{ site.data.spells.crush }}
20. {{ site.data.spells.fs }} если до спадения осталось менее **5.4** секунд.
21. {{ site.data.spells.frs }} 
22. {:.is-apl}{{ site.data.spells.is }}
22. {:.sunder-apl}{{ site.data.spells.sunder }}
22. {:.fn-apl}{{ site.data.spells.fn }} при активном {{ site.data.spells.fs }}
23. {{ site.data.spells.lb }} при **5+** стаках {{ site.data.spells.mw }}
24. {{ site.data.spells.wt }} если все другие способности недоступны.

# Основные моменты ротации

* **Не стоит сразу тратить стаки {{ site.data.spells.mw }}, и не стоит уходить в оверкап.** Лучше всего сливать их на **7-8** стаках, в удобное время между кулдаунами других способностей.

* **Держите шоки на кулдауне.** Это относится как к бою против одной цели, где необходимо поддерживать {{ site.data.spells.fs }}, так и к АОЕ, где кулдаун {{ site.data.spells.frs }} является практически нашим основным ресурсом. Шоки позволяют снижать простои в ротации, так что используйте их по первой возможности.

* **Используйте прок {{ site.data.spells.sb }} так быстро, насколько это возможно.** Наша задача не дать прокам и кулдауну {{ site.data.spells.ss }} пропасть зря, поэтому реагировать на {{ site.data.spells.sb }} крайне важно.

* Имейте в виду, что приортет способностей это не строгие правила, а скорее общие рекомендации. Наша ротация зависит от многих факторов, типа количества стаков {{ site.data.spells.mw }}, наличия прока {{ site.data.spells.sb }} или других кулдаунов, так что это необходимо учитывать.

**Важные замечания:**

* Обновляйте {{ site.data.spells.fs }}, когда до конца его спадения осталось менее **5.4** секунд, чтобы это время добавилось к новому {{ site.data.spells.fs }}.

* {{ site.data.spells.crush }} не стоит никаких ресурсов, так что используйте его как филлер. С него может прокнуть {{ site.data.spells.sb }}.

* Не стоит тратить стаки {{ site.data.spells.mw }} на {{ site.data.spells.lb }} сразу же, как только вы набрали **5** стаков. Так как максимум возможно набрать **10** стаков, используйте сначала другие способности, чтобы начать их кулдаун. 

* Для уменьшения количества простоев следует сначала использовать способности с коротким кулдауном, а уже затем с долгим. Это отражено в списке приоритетов.

# Бой на АоЕ

Ротация на АоЕ при взятых талантах {{ site.data.spells.fw }}, {{ site.data.spells.flurry }}, {{ site.data.spells.hailstorm }}, {{ site.data.spells.sunder }} и {{ site.data.spells.asc_enh }}:

1. {{ site.data.spells.wt }} – если тотем не активен.
2. {{ site.data.spells.frs }} с баффом {{ site.data.spells.hailstorm }}
3. {{ site.data.spells.feral }}
4. {{ site.data.spells.sunder }} на максимально возможное количество целей.
5. {{ site.data.spells.asc_enh }} и {{ site.data.spells.windstrike }} по кулдауну.
6. {{ site.data.spells.cl }} при **5+** стаках {{ site.data.spells.mw }}
7. {{ site.data.spells.crush }}
8. {{ site.data.spells.ss }}
9. {{ site.data.spells.ll }}

* {{ site.data.spells.fs }} на АоЕ не используется.
* Способности ковенантов следует использовать по кулдауну. {{ site.data.covenants.ch }} только на **5+** стаках {{ site.data.spells.mw }}.

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

1. {{ site.data.spells.windstrike }} при активном {{ site.data.spells.asc_enh }}, если есть бафф [Сокрушающей молнии](https://ru.wowhead.com/spell=187874).
2. {{ site.data.spells.crush }}
3. {{ site.data.spells.sunder }}
4. {{ site.data.spells.ss }}
5. {{ site.data.spells.frs }}, если есть бафф [Бури с градом](https://ru.wowhead.com/spell=334195/)

Если ничего из списка выше не доступно, продолжайте обычную ротацию.

**Важно!** Если до конца кулдауна [Сокрушающей молнии](https://ru.wowhead.com/spell=187874) осталось более **3** секунд, используйте [Цепную молнию](https://ru.wowhead.com/spell=188443) для сброса её КД. Это даст дополнительный прок [Оружия неистовства ветра](https://ru.wowhead.com/spell=33757) по всем целям.
