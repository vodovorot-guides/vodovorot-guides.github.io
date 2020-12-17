---
title: Ротация Шамана Совершенствования
layout: page
last_update: 2020-12-18
wow: 9.0.2
toc: true
author: Amani, Wordup
---

# Основные моменты ротации

* **Не стоит сразу тратить стаки {{ site.data.spells.mw }}, и не стоит уходить в оверкап.** Лучше всего сливать их на **7-8** стаках, в удобное время между кулдаунами других способностей.

* **Держите шоки на кулдауне.** Это относится как к бою против одной цели, где необходимо поддерживать {{ site.data.spells.fs }}, так и к АОЕ, где кулдаун {{ site.data.spells.frs }} является практически нашим основным ресурсом. Шоки позволяют снижать простои в ротации, так что используйте их по первой возможности.

* **Используйте прок {{ site.data.spells.sb }} так быстро, насколько это возможно.** Наша задача не дать прокам и кулдауну {{ site.data.spells.ss }} пропасть зря, поэтому реагировать на {{ site.data.spells.sb }} крайне важно.

* Имейте в виду, что списки ниже это не строгие правила, а скорее общие рекомендации. Наша ротация зависит от многих факторов, типа количества стаков {{ site.data.spells.mw }}, наличия прока {{ site.data.spells.sb }} или других кулдаунов, так что это необходимо учитывать.

# Открывающая ротация, «Opener»

1. Прекаст {{ site.data.spells.sk_enh }}
2. Прекаст {{ site.data.spells.wt }} максимально близко к боссу.
  * При использовании легендарки {{ site.data.legend.doom }}, не ставьте {{ site.data.spells.wt }} заранее.
3. {{ site.data.spells.fs }} по дороге к боссу.
4. {{ site.data.spells.spike }} 
5. {{ site.data.spells.ss }}
6. {{ site.data.spells.feral }}
7. {{ site.data.spells.asc_enh }} и сразу же {{ site.data.spells.windstrike }}
8. Продолжаем обычную ротацию.

# Бой против одной цели

**Основы базовых приоритетов без учета талантов и ковенантов:**

1. {{ site.data.spells.wt }} если тотем не активен
2. {{ site.data.spells.fs }} если отсутствует на цели.
3. {{ site.data.spells.feral }} для генерации стаков {{ site.data.spells.mw }}
4. {{ site.data.spells.lb }} при **8+** стаках {{ site.data.spells.mw }}
5. {{ site.data.spells.ss }}
6. {{ site.data.spells.ll }}
7. {{ site.data.spells.crush }}
8. {{ site.data.spells.fs }} если до спадения осталось менее **5.4** секунд.
9. {{ site.data.spells.frs }} 
10. {{ site.data.spells.lb }} при **5+** стаках {{ site.data.spells.mw }}
11. {{ site.data.spells.wt }} если все другие способности недоступны.

**Список приоритетов со всеми основными талантами, за исключением наиболее слабых вариантов:**

1. {{ site.data.spells.wt }} если тотем не активен и вы **не** используете легендарку {{ site.data.legend.doom }}
2. {{ site.data.covenants.pw }} (<span style="color:#40bf40;font-size:1em;">Некролорды</span>)
3. {{ site.data.spells.fs }} если отсутствует на цели.
4. {{ site.data.spells.feral }} для генерации стаков {{ site.data.spells.mw }}
5. {{ site.data.spells.ll }} при отсутствии дебаффа {{ site.data.spells.lf }}
6. {{ site.data.spells.wt }} если возможно получить бафф от легенедарки {{ site.data.legend.doom }}
7. {{ site.data.spells.asc_enh }}
8. {{ site.data.spells.windstrike }} при активном {{ site.data.spells.asc_enh }}
9. {{ site.data.spells.frs }} с баффом от таланта {{ site.data.spells.hailstorm }} 
10. {{ site.data.covenants.vt }} (<span style="color:#68ccef;font-size:1em;">Кирии</span>)
11. {{ site.data.spells.spike }}
12. {{ site.data.covenants.ft }} (<span style="color:#a330c9;font-size:1em;">Ночной Народец</span>)
13. {{ site.data.spells.eb }} по кулдауну, при **5+** стаках {{ site.data.spells.mw }}
14. {{ site.data.covenants.ch }} (<span style="color:#ff4040;font-size:1em;">Вентиры</span>) при **5+** стаках {{ site.data.spells.mw }}
15. {{ site.data.spells.lb }} при **8+** стаках {{ site.data.spells.mw }}
16. {{ site.data.spells.ll }} во время прока {{ site.data.spells.hh }}
17. {{ site.data.spells.ss }}
18. {{ site.data.spells.ll }}
19. {{ site.data.spells.crush }}
20. {{ site.data.spells.fs }} если до спадения осталось менее **5.4** секунд.
21. {{ site.data.spells.frs }} 
22. {{ site.data.spells.sunder }}
23. {{ site.data.spells.lb }} при **5+** стаках {{ site.data.spells.mw }}
24. {{ site.data.spells.wt }} если все другие способности недоступны.

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
4. Все остальные способности, согласно обычной ротации.

Приоритет способностей на **АоЕ** под баффом от легендарки {{ site.data.legend.doom }} **не меняется**, следуйте АоЕ ротации выше.

