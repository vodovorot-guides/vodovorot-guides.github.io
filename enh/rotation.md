---
title: Ротация Шамана Совершенствования
layout: page
last_update: 2021-10-05
wow: 9.1
toc: true
author: Amani
description: Описание ротации Шамана Совершенствования. Приоритет способностей на этой странице динамически меняется в зависимости от того, какие выбраны таланты, легендарный предмет и ковенант.
image: /assets/img/logos/rotation.png
custom-javascript-list:
    - "/assets/js/rotation_switches.js"
---

<details markdown=1><summary><i>Журнал изменений</i></summary>
<br>

* **05.10.2021**: Приоритет при активном баффе от легендарки Ветра рока теперь показан сразу в соответствующих разделах. Добавлен динамический список приоритетов на АоЕ. Изменен приоритет Удара бури, Сокрушающей молнии и Цепной молнии на АоЕ.
* **17.09.2021**: Обновлен опенер, теперь динамически меняется для любого билда.
* **20.08.2021**: Добавлен выбор билда для Мифик+ и рейда.

</details>
<p></p>

# Выбор билда

**Важно!** Приоритет способностей на этой странице динамически меняется в зависимости от того, какие выбраны таланты, легендарка и ковенант. Все кнопки ниже кликабельны.
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

{% include talents.html data=site.data.talents.enh active="3201031" switch=true %}

# Открывающая ротация, Opener

**Важно!** Вне зависимости от билда, талантов или типа боя – убедитесь, что у вас всегда наложены усиления на оружия – [Оружие неистовства ветра](https://ru.wowhead.com/spell=33757/) и [Оружие языка пламени](https://ru.wowhead.com/spell=318038/).
{: class="bordered"}

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

Ниже представлен список приоритетов способностей, который динамически меняется в зависимости от выбранных выше талантов, легендарки и ковенанта.

* {:.doom-apl}Список приоритетов **БЕЗ** активного баффа от легендарки {{ site.data.legend.doom }}:

5. {{ site.data.spells.feral }}.
6. {:.hh-apl}{{ site.data.spells.ll }} с баффом от таланта {{ site.data.spells.hh }}.
8. {:.pw-apl}{{ site.data.covenants.pw }}, если нет активного баффа от этого заклинания.
9. {{ site.data.spells.fs }}, если отсутствует на цели.
8. {:.witch-apl}{{ site.data.spells.wt }}, если тотем не активен.
9. {:.actuators-apl}{{ site.data.spells.wt }}, если тотем не активен.
10. {:.wolf-apl}{{ site.data.spells.wt }}, если тотем не активен.
11. {:.lf-apl}{{ site.data.spells.ll }} при отсутствии дебаффа от таланта {{ site.data.spells.lf }}.
12. {:.asc_enh-apl}{{ site.data.spells.asc_enh }}.
13. {:.asc_enh-apl}{{ site.data.spells.windstrike }}.
14. {:.doom-apl}{{ site.data.spells.wt }}, если возможно получить бафф от легендарки {{ site.data.legend.doom }}.
15. {:.vt-apl}{{ site.data.covenants.vt }}. 
16. {:.hailstorm-apl}{{ site.data.spells.frs }} с баффом от таланта {{ site.data.spells.hailstorm }}.
17. {:.spike-apl}{{ site.data.spells.spike }}.
18. {:.ft-apl}{{ site.data.covenants.ft }}. 
19. {:.witch-apl}{{ site.data.spells.ss }} с проком [Вестника шторма](https://ru.wowhead.com/spell=201845/) или без него.
20. {:.sk_enh-apl}{{ site.data.spells.cl }} под баффом от [Хранителя бурь](https://ru.wowhead.com/spell=320137).
21. {:.eb-apl}{{ site.data.spells.eb }} при **5+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
22. {:.ch-apl}{{ site.data.covenants.ch }} при **5+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
23. {:.sk_enh-apl}[Хранитель бурь](https://ru.wowhead.com/spell=320137) при **5+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
24. {{ site.data.spells.lb }} при **8+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
25. {:.actuators-apl}{{ site.data.spells.ss }} с проком [Вестника шторма](https://ru.wowhead.com/spell=201845/) или без него.
26. {:.wolf-apl}{{ site.data.spells.ss }} с проком [Вестника шторма](https://ru.wowhead.com/spell=201845/) или без него.
27. {:.doom-apl}{{ site.data.spells.ss }} с проком [Вестника шторма](https://ru.wowhead.com/spell=201845/) или без него.
28. {:.leg_fae-apl}{{ site.data.spells.ss }} с проком [Вестника шторма](https://ru.wowhead.com/spell=201845/) или без него.
26. {:.leg_kyrian-apl}{{ site.data.spells.ss }} с проком [Вестника шторма](https://ru.wowhead.com/spell=201845/) или без него. 
26. {:.leg_venthyr-apl}{{ site.data.spells.ss }} с проком [Вестника шторма](https://ru.wowhead.com/spell=201845/) или без него.
26. {:.leg_necrolords-apl}{{ site.data.spells.ss }} с проком [Вестника шторма](https://ru.wowhead.com/spell=201845/) или без него.
29. {{ site.data.spells.ll }}.
30. {{ site.data.spells.crush }}.
31. {{ site.data.spells.fs }}, если до спадения осталось менее **5.4** секунд.
32. {{ site.data.spells.frs }}. 
33. {:.is-apl}{{ site.data.spells.is }}.
34. {:.sunder-apl}{{ site.data.spells.sunder }}.
35. {:.fn-apl}{{ site.data.spells.fn }} при активном {{ site.data.spells.fs }}.
36. {{ site.data.spells.lb }} при **5+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
37. {{ site.data.spells.wt }}, если все другие способности недоступны.

<hr style="height:1px;background-color:#bbb">
<p></p>

* {:.doom-apl}Список приоритетов **при активном** баффе от легендарки {{ site.data.legend.doom }}:

1. {:.doom-apl .asc_enh-apl}{{ site.data.spells.ss }} / {{ site.data.spells.windstrike }}.
1. {:.doom-apl .spirits-apl}{{ site.data.spells.ss }}.
1. {:.doom-apl .spike-apl}{{ site.data.spells.ss }}.
3. {:.doom-apl}{{ site.data.spells.crush }}.
4. {:.doom-apl .sunder-apl}{{ site.data.spells.sunder }}.
5. {:.doom-apl .is-apl}{{ site.data.spells.is }}.
6. {:.doom-apl}Все остальные способности, согласно обычной ротации.

# Бой на АоЕ

Ниже представлен список приоритетов в бою против **2** и более целей, который динамически меняется в зависимости от выбранных выше талантов, легендарки и ковенанта.

* {:.doom-apl}Список приоритетов **БЕЗ** активного баффа от легендарки {{ site.data.legend.doom }}:

1. {{ site.data.spells.feral }}.
1. {:.asc_enh-apl}{{ site.data.spells.asc_enh }}, стараясь задеть максимальное количество целей при активации.
1. {:.doom-apl}{{ site.data.spells.wt }}, если возможно получить бафф от легендарки {{ site.data.legend.doom }}.
2. {:.hailstorm-apl}{{ site.data.spells.frs }} с баффом от таланта {{ site.data.spells.hailstorm }}.
3. {:.sunder-apl}{{ site.data.spells.sunder }} на максимальное количество целей.
6. {:.pw-apl .actuators-apl .lf-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
7. {:.pw-apl .actuators-apl .lf-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
8. {:.pw-apl .actuators-apl .lf-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
9. {:.pw-apl .actuators-apl .fw-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
10. {:.pw-apl .actuators-apl .fw-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
11. {:.pw-apl .actuators-apl .fw-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
12. {:.pw-apl .actuators-apl .eb-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
13. {:.pw-apl .actuators-apl .eb-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
14. {:.pw-apl .actuators-apl .eb-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
15. {:.pw-apl .witch-apl .lf-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
16. {:.pw-apl .witch-apl .lf-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
17. {:.pw-apl .witch-apl .lf-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
18. {:.pw-apl .witch-apl .fw-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
19. {:.pw-apl .witch-apl .fw-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
20. {:.pw-apl .witch-apl .fw-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
21. {:.pw-apl .witch-apl .eb-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
22. {:.pw-apl .witch-apl .eb-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
23. {:.pw-apl .witch-apl .eb-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
24. {:.pw-apl .wolf-apl .lf-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
25. {:.pw-apl .wolf-apl .lf-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
26. {:.pw-apl .wolf-apl .lf-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
27. {:.pw-apl .wolf-apl .fw-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
28. {:.pw-apl .wolf-apl .fw-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
29. {:.pw-apl .wolf-apl .fw-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
30. {:.pw-apl .wolf-apl .eb-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
31. {:.pw-apl .wolf-apl .eb-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
32. {:.pw-apl .wolf-apl .eb-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
33. {:.pw-apl .doom-apl .lf-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
34. {:.pw-apl .doom-apl .lf-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
35. {:.pw-apl .doom-apl .lf-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
36. {:.pw-apl .doom-apl .fw-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
37. {:.pw-apl .doom-apl .fw-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
38. {:.pw-apl .doom-apl .fw-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
39. {:.pw-apl .doom-apl .eb-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
40. {:.pw-apl .doom-apl .eb-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
41. {:.pw-apl .doom-apl .eb-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
42. {:.pw-apl .leg_fae-apl .lf-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
43. {:.pw-apl .leg_fae-apl .lf-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
44. {:.pw-apl .leg_fae-apl .lf-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
45. {:.pw-apl .leg_fae-apl .fw-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
46. {:.pw-apl .leg_fae-apl .fw-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
47. {:.pw-apl .leg_fae-apl .fw-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
48. {:.pw-apl .leg_fae-apl .eb-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
49. {:.pw-apl .leg_fae-apl .eb-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
50. {:.pw-apl .leg_fae-apl .eb-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
51. {:.vt-apl .actuators-apl .lf-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
52. {:.vt-apl .actuators-apl .lf-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
53. {:.vt-apl .actuators-apl .lf-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
54. {:.vt-apl .actuators-apl .fw-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
55. {:.vt-apl .actuators-apl .fw-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
56. {:.vt-apl .actuators-apl .fw-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
57. {:.vt-apl .actuators-apl .eb-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
58. {:.vt-apl .actuators-apl .eb-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
59. {:.vt-apl .actuators-apl .eb-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
60. {:.vt-apl .witch-apl .lf-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
61. {:.vt-apl .witch-apl .lf-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
62. {:.vt-apl .witch-apl .fw-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
63. {:.vt-apl .witch-apl .eb-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
64. {:.vt-apl .wolf-apl .lf-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
65. {:.vt-apl .wolf-apl .lf-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
66. {:.vt-apl .wolf-apl .lf-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
67. {:.vt-apl .wolf-apl .fw-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
68. {:.vt-apl .wolf-apl .eb-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
69. {:.vt-apl .doom-apl .lf-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
70. {:.vt-apl .doom-apl .lf-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
71. {:.vt-apl .doom-apl .lf-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
72. {:.vt-apl .doom-apl .fw-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
73. {:.vt-apl .doom-apl .eb-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
74. {:.vt-apl .leg_fae-apl .lf-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
75. {:.vt-apl .leg_fae-apl .lf-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
76. {:.vt-apl .leg_fae-apl .lf-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
77. {:.vt-apl .leg_fae-apl .fw-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
78. {:.vt-apl .leg_fae-apl .eb-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
79. {:.ch-apl .actuators-apl .lf-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
80. {:.ch-apl .actuators-apl .lf-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
81. {:.ch-apl .actuators-apl .lf-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
82. {:.ch-apl .actuators-apl .fw-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
83. {:.ch-apl .actuators-apl .fw-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
84. {:.ch-apl .actuators-apl .fw-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
85. {:.ch-apl .actuators-apl .eb-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
86. {:.ch-apl .actuators-apl .eb-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
87. {:.ch-apl .actuators-apl .eb-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
88. {:.ch-apl .witch-apl .lf-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
89. {:.ch-apl .witch-apl .lf-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
90. {:.ch-apl .witch-apl .lf-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
91. {:.ch-apl .witch-apl .fw-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
92. {:.ch-apl .witch-apl .eb-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
93. {:.ch-apl .wolf-apl .lf-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
94. {:.ch-apl .wolf-apl .lf-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
95. {:.ch-apl .wolf-apl .lf-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
96. {:.ch-apl .wolf-apl .fw-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
97. {:.ch-apl .wolf-apl .eb-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
98. {:.ch-apl .doom-apl .lf-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
99. {:.ch-apl .doom-apl .lf-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
100. {:.ch-apl .doom-apl .lf-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
101. {:.ch-apl .doom-apl .fw-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
102. {:.ch-apl .doom-apl .eb-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
103. {:.ch-apl .leg_fae-apl .lf-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
104. {:.ch-apl .leg_fae-apl .lf-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
105. {:.ch-apl .leg_fae-apl .lf-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
106. {:.ch-apl .leg_fae-apl .fw-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
107. {:.ch-apl .leg_fae-apl .eb-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
108. {:.ft-apl .actuators-apl .lf-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
109. {:.ft-apl .actuators-apl .lf-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
110. {:.ft-apl .actuators-apl .lf-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
111. {:.ft-apl .actuators-apl .fw-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
112. {:.ft-apl .actuators-apl .fw-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
113. {:.ft-apl .actuators-apl .fw-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
114. {:.ft-apl .actuators-apl .eb-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
115. {:.ft-apl .actuators-apl .eb-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
116. {:.ft-apl .actuators-apl .eb-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
117. {:.ft-apl .witch-apl .lf-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
118. {:.ft-apl .witch-apl .lf-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
119. {:.ft-apl .witch-apl .lf-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
120. {:.ft-apl .witch-apl .fw-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
121. {:.ft-apl .witch-apl .eb-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
122. {:.ft-apl .wolf-apl .lf-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
123. {:.ft-apl .wolf-apl .lf-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
124. {:.ft-apl .wolf-apl .lf-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
125. {:.ft-apl .wolf-apl .fw-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
126. {:.ft-apl .wolf-apl .eb-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
127. {:.ft-apl .doom-apl .lf-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
128. {:.ft-apl .doom-apl .lf-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
129. {:.ft-apl .doom-apl .lf-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
130. {:.ft-apl .doom-apl .fw-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
131. {:.ft-apl .doom-apl .eb-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
132. {:.ft-apl .leg_fae-apl .lf-apl .ea-apl}{{ site.data.spells.fs }} на максимальное количество целей.
133. {:.ft-apl .leg_fae-apl .lf-apl .hailstorm-apl}{{ site.data.spells.fs }} на максимальное количество целей.
134. {:.ft-apl .leg_fae-apl .lf-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
135. {:.ft-apl .leg_fae-apl .fw-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
136. {:.ft-apl .leg_fae-apl .eb-apl .fn-apl}{{ site.data.spells.fs }} на максимальное количество целей.
137. {:.pw-apl}{{ site.data.covenants.pw }}, если нет активного баффа от этого заклинания.
138. {:.fn-apl}{{ site.data.spells.fn }}, если под [Огненным шоком](https://ru.wowhead.com/spell=188389) **3+** цели.
139. {:.vt-apl}{{ site.data.covenants.vt }}.
140. {:.pw-apl}{{ site.data.spells.lb }}, если есть бафф от [Первозданной волны](https://ru.wowhead.com/spell=326059) и **5+** стаков [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
141. {:.sk_enh-apl}{{ site.data.spells.cl }}, если есть бафф от [Хранителя бурь](https://ru.wowhead.com/spell=320137).
142. {{ site.data.spells.crush }}, если бафф не активен.
143. {:.lf-apl}{{ site.data.spells.ll }} по цели без активного дебаффа от таланта {{ site.data.spells.lf }}.
144. {:.actuators-apl}{{ site.data.spells.ll }} при наличии **6+** стаков от легендарки [Преобразователи изначальной лавы](https://ru.wowhead.com/spell=335895).
145. {:.hh-apl}{{ site.data.spells.ll }} с баффом от таланта {{ site.data.spells.hh }}.
146. {:.asc_enh-apl}{{ site.data.spells.ss }} / {{ site.data.spells.windstrike }}.
147. {:.spirits-apl}{{ site.data.spells.ss }}.
148. {:.spike-apl}{{ site.data.spells.ss }}.
149. {{ site.data.spells.crush }}.
150. {:.ch-apl}{{ site.data.covenants.ch }} при **5+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
151. {:.eb-apl}{{ site.data.spells.eb }} при **5+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
152. {:.sk_enh-apl}[Хранитель бурь](https://ru.wowhead.com/spell=320137) при **5+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
153. {{ site.data.spells.cl }} при **5+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
154. {{ site.data.spells.ll }}.
155. {{ site.data.spells.fs }}.
156. {:.is-apl}{{ site.data.spells.is }}.
157. {:.fn-apl}{{ site.data.spells.fn }}, если под [Огненным шоком](https://ru.wowhead.com/spell=188389) **2** цели.
158. {:.spike-apl}{{ site.data.spells.spike }}.
159. {:.witch-apl}{{ site.data.spells.wt }}.
160. {:.actuators-apl}{{ site.data.spells.wt }}.
161. {:.wolf-apl}{{ site.data.spells.wt }}.
162. {:.leg_fae-apl}{{ site.data.spells.wt }}.

<hr style="height:1px;background-color:#bbb">
<p></p>

* {:.doom-apl}Список приоритетов **при активном** баффе от легендарки {{ site.data.legend.doom }}:

1. {:.doom-apl}{{ site.data.spells.crush }}.
4. {:.doom-apl .sunder-apl}{{ site.data.spells.sunder }}.
1. {:.doom-apl .asc_enh-apl}{{ site.data.spells.ss }} / {{ site.data.spells.windstrike }}.
1. {:.doom-apl .spirits-apl}{{ site.data.spells.ss }}.
1. {:.doom-apl .spike-apl}{{ site.data.spells.ss }}.
4. {:.doom-apl}{{ site.data.spells.cl }} при **5+** стаках [Оружия Водоворота](https://ru.wowhead.com/spell=187880).
5. {:.doom-apl}Все остальные способности, согласно обычной ротации.

# Важные моменты 

* Не стоит сразу тратить стаки [Оружия Водоворота](https://ru.wowhead.com/spell=187880), и не стоит уходить в оверкап. Лучше всего сливать их на **7-8** стаках, в удобное время между кулдаунами других способностей.
* [Удар бури](https://ru.wowhead.com/spell=17364/) с проком [Вестника шторма](https://ru.wowhead.com/spell=201845/) имеет такой же высокий приоритет, что и без прока.
* {:.hh-apl}Обратная ситуция с талантом {{ site.data.spells.hh }} – {{ site.data.spells.ll }} с этим баффом имеет гораздо больший приоритет, чем без него.
* Держите шоки на кулдауне – то относится как к бою против одной цели, где необходимо поддерживать {{ site.data.spells.fs }}, так и к АоЕ со взятым талантом {{ site.data.spells.hailstorm }}. Шоки позволяют снижать простои в ротации, так что используйте их по первой возможности.
* {:.asc_enh-apl}Перед применением [Перерождения](https://ru.wowhead.com/spell=114051) всегда используйте {{ site.data.spells.ss }}, так как его кулдаун сбросится после активации этого таланта.
* Обновляйте {{ site.data.spells.fs }}, когда до конца его спадения осталось менее **5.4** секунд, чтобы это время добавилось к новому [Огненному шоку](https://ru.wowhead.com/spell=188389).
* Для уменьшения количества простоев следует сначала использовать способности с коротким кулдауном, а уже затем с долгим. Это отражено в списке приоритетов.
* {:.doom-apl}Во время активного баффа от легендарки {{ site.data.legend.doom }} главная задача – нанести как можно больше ударов с **правой руки**, вызывая прок [Неистовства ветра](https://ru.wowhead.com/spell=33757). К таким способностям относятся {{ site.data.spells.windstrike }}, {{ site.data.spells.ss }}, {{ site.data.spells.crush }}, {{ site.data.spells.sunder }} и автоатаки.
* За счет того, что {{ site.data.spells.crush }} считается атакой с правой руки, шанс на прок [Оружия неистовства ветра](https://ru.wowhead.com/spell=33757) рассчитывается на каждую пораженную цель.
