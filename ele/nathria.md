---
title: Рейд Замок Нафрия – Шаман Стихии
layout: page
last_update: 2021-01-12
wow: 9.0.2
toc: true
author: "Altenna, Amani, Cayna, HawkCorrigan, Sheffy"
---

# Вступление

Вся информация в этом разделе подразумевает, что вы в курсе как работают заклинания, таланты и легендарки Шамана Стихии. Ознакомьтесь с соответствующими разделами перед прочтением.

Вся информация была собрана с тестов рейда на бете, поэтому некоторые вещи могут работать иначе на живых серверах. Данный гайд будет обновляться и дополняться. Если вы желаете поделиться какими-либо фишками или полезной информацией, свяжитесь с Amani#0001 в дискорде [«Водоворот»](https://discordapp.com/invite/zTQhBn8).

# Основные моменты

* Пока вы в форме {{ site.data.spells.wolf }}, вы теряете ДПС. В Темных Землях мы получили {{ site.data.spells.swg }}, так что правильное использование этой способности поможет сократить эти потери, как и мгновенные заклинания на ходу.

- На освоении думайте не только об уроне. Помогайте своим хилам, используя {{ site.data.spells.hs }} в критических ситуациях. 

- При взятом таланте {{ site.data.spells.primal_elem }}, не забывайте про дополнительный сейв от {{ site.data.spells.igor }} – {{ site.data.spells.harden_skin }}, а также стан одной цели – {{ site.data.spells.pulverize }}.

- Так как {{ site.data.spells.stampeding_roar }} теперь является базовой способностью друидов всех специализаций, нам не всегда нужно будет брать {{ site.data.spells.wrt }}, что дает нам альтернативу в пятом тире талантов.

# Боссы

## Визгунья (Эпохальный режим)

**Тип боя:** Одна цель

**Таланты:**
* **15**: {{ site.data.spells.eote }}
* **25**: {{ site.data.spells.ecs }} или {{ site.data.spells.eb }}
* **30**: {{ site.data.spells.spirit_wolf }} или {{ site.data.spells.eshield }}
* **35**: {{ site.data.spells.mote }}
* **40**: {{ site.data.spells.wrt }}
* **45**: {{ site.data.spells.if }} или {{ site.data.spells.primal_elem }}
* **50**: {{ site.data.spells.sk }}

**Легендарные предметы:**
- {{ site.data.legend.lava }}

**Нанесение урона:**
- {{ site.data.spells.swg }} следует используйте только на {{ site.data.nathria.echolocation }} (вынос белого круга, куда пикирует летучая мышь и разливается кровь). Всегда относите {{ site.data.nathria.echolocation }} на край комнаты.
- Во время переходки босс не получает урона и имеет полную неуязвимость, поэтому Энергию Водоворота набрать не получится.
- Несмотря на большое количество передвижения, талант {{ site.data.spells.primal_elem }} может быть крайне эффективным в этом бою, так как переходка завершается ровно спустя **2:30** минут после пула, что повышает эффективность нашего {{ site.data.spells.fe }}.

**Защита и сейвы:**
- {{ site.data.spells.as }} можно использовать на [Волну крови](https://ru.wowhead.com/spell=345397/) или для экстренных перебежек по [Кровавому гною](https://ru.wowhead.com/spell=340324).
- {{ site.data.spells.spirit_wolf }} поможет на переходке. {{ site.data.spells.eshield }} неплохо хилит за счет абилки босса [Обескровливание](https://ru.wowhead.com/spell=328897).

**Лечение:**
- Переходка – отличное время для отхила с помощью {{ site.data.spells.hst }}, {{ site.data.spells.ch }}, и {{ site.data.spells.hs }}.

**Вспомогательные способности:**
- Используйте {{ site.data.spells.wrt }} для помощи игрокам с {{ site.data.nathria.echolocation }}, {{ site.data.nathria.echoing_screech }}, или во время переходки.

**Способности ковенантов:**

- <span style="color:#68ccef;font-size:1em;">**Кирии**</span>: {{ site.data.covenants.phial }} снимает эффект кровотечения от способности [Обескровливание](https://ru.wowhead.com/spell=328897).
- <span style="color:#40bf40;font-size:1em;">**Некролорды**</span>: используйте {{ site.data.covenants.fleshcraft }} на переходке.

**Заметки:**
- Большинство абилок на этом боссе наносят летальный урон, поэтому {{ site.data.spells.ng }} вряд ли вас спасет, а вот {{ site.data.spells.wrt }} будет крайне полезен.
- Так как {{ site.data.nathria.echoing_screech }} считается эффектом **Ужаса**, а не **Страха**, он не снимается с помощью {{ site.data.spells.tremor }}. 

## Ловчий Альтимор (Эпохальный режим)

**Тип боя:** Клив / Клив разрозненных целей

**Таланты:**
* **15**: {{ site.data.spells.eote }}
* **25**: {{ site.data.spells.eb }}
* **30**: {{ site.data.spells.spirit_wolf }}
* **35**: {{ site.data.spells.mote }}
* **40**: {{ site.data.spells.ng }}
* **45**: {{ site.data.spells.primal_elem }}
* **50**: {{ site.data.spells.sk }}

**Легендарные предметы:**
- {{ site.data.legend.eogs }}
- {{ site.data.legend.fire }}

**Нанесение урона:**
- Поддерживайте {{ site.data.spells.fs }} на боссе и на активном питомце. Не развешивайте {{ site.data.spells.fs }} на копии аддов на второй фазе, это может привести к вайпу.
- Используйте {{ site.data.spells.quake }} когда босс и питомец стоят рядом.
- Перед бурстом в копии аддов накопите Энергию Водоворота и придержите {{ site.data.spells.sk }}, а также подготовьте бафф от легендарки {{ site.data.legend.eogs }}.

**Защита и сейвы:**
- {{ site.data.spells.swg }} используйте на вынос {{ site.data.nathria.petrifying_howl }} (большой коричневый круг) на третьей фазе.
- Используйте {{ site.data.spells.as }} и {{ site.data.spells.harden_skin }} в критические моменты или если на вас наложилось сразу несколько механик.
- Если вас назначили перекрывать первый {{ site.data.nathria.sinseeker }} (красная стрелка), то заранее займите позицию в нужной метке.

**Лечение:**
- Вы можете подхиливать копии или союзников на последней фазе, если кто-то из ваших хилеров погиб.

**Вспомогательные способности:**
- Используйте {{ site.data.spells.hex }} на {{ site.data.nathria.shades_of_bargast }}, как первоначальный контроль, так и во время бурста по ним, если другие контроли закончились.
- Подойдет также {{ site.data.spells.ct }}, но рассчитывайте время его установки.

**Способности ковенантов:**

- <span style="color:#68ccef;font-size:1em;">**Кирии**</span>: {{ site.data.covenants.phial }} снимает эффект кровотечения от способностей [Зазубренные когти](https://ru.wowhead.com/spell=334971) и [Страшная рана](https://ru.wowhead.com/spell=334960/).

## Спасение Солнечного короля (Эпохальный режим)

**Тип боя:** AoE / Клив

**Таланты:**
* **15**: {{ site.data.spells.eote }}
* **25**: {{ site.data.spells.afs }} или {{ site.data.spells.eb }}
* **30**: {{ site.data.spells.spirit_wolf }}
* **35**: {{ site.data.spells.mote }}
* **40**: {{ site.data.spells.ng }} или {{ site.data.spells.wrt }}
* **45**: {{ site.data.spells.primal_elem }}
* **50**: {{ site.data.spells.sk }}

**Легендарные предметы**
- {{ site.data.legend.fire }}
- {{ site.data.legend.eogs }}
- {{ site.data.legend.lava }} (да-да, это не ошибка)

**Первая фаза – лечение босса до 45%**
- Суть этой фазы в Эпохальном режиме – оставить в живых первого большого адда, [Верховного истязателя Даритоса](https://ru.wowhead.com/npc=168973), прохилить босса до **45%** и перевести его на следующую фазу.
- С пула следует отдать {{ site.data.spells.sk }} в стянутых аддов и сразу же начать прохиливать босса. Это ваша первоочередная задача, как и любого гибридного дамагера.
- Не убейте [Верховного истязателя Даритоса](https://ru.wowhead.com/npc=168973) раньше времени, потому что его смерть вызывает спавн следующих аддов.

**Вторая фаза – урон по боссу до 45%**
- Вторая фаза начинается спустя примерно **50-60** секунд после начала боя.
- На этой фазе, также как и на Героической сложности, будет два адда, [Возрожденный феникс](https://ru.wowhead.com/npc=168962). Если в вашем рейде их будут контролить при появлении, то не стоит развешивать на них {{ site.data.spells.fs }}. Однако если они просто замедлены, то стоит.
- Самый важный момент этой фазе – каст абсорб щита, [Плащ пламени](https://ru.wowhead.com/spell=343026). Первый щит будет спустя **30** секунд после начала **второй фазы**, второй – сптся **60** секунд. Третьего щита не будет, так как босс должен переводиться раньше.
- Рейд лидер распределяет бурсты вашего рейда в первый и второй щиты. Бурст шамана стихии включает в себя вызванного [Элементаля огня](https://ru.wowhead.com/spell=198067), наличие **60+** энергии Водоворота и комбинацию из способностей {{ site.data.spells.sk }}, {{ site.data.covenants.pw }}, {{ site.data.spells.es }} и {{ site.data.spells.lvb }}.
- Во время всей второй фазы двигайтесь одним кемпом для распределения урона от [Взрывоопасных углей](https://ru.wowhead.com/spell=325877) и перебежек от [Пылающего потока](https://ru.wowhead.com/spell=329518). Не стоит заранее забегать вперед, это может привести к вайпу.

**Третья фаза – лечение босса до 90%**
- Сразу после конца второй фазы спускается большой адд, [Скальный покоритель](https://ru.wowhead.com/npc=165764). До момента его появления стоит потратить всю ману на лечение босса.
- В отличие от первой фазы, здесь будет большое количество аддов. Поддерживайте на них {{ site.data.spells.fs }} и заливайте АоЕ. Добивайте [Темнокрылых убийц](https://ru.wowhead.com/npc=167566) на низком уровне их здоровья, иначе они излечатся на **100%** ХП.
- На этой фазе абсорб щит на боссе, [Плаща пламени](https://ru.wowhead.com/spell=343026), необходимо **прохиливать**. Отслеживайте время появления щита через DBM или BigWigs, чтобы у вас была мана к этому моменту. Помните, что полный столб маны с **0%** до **100%** мы регенерируем примерно за **25-30** секунд, так что не сливайте всю ману перед кастом [Плаща пламени](https://ru.wowhead.com/spell=343026).
- Сбивайте касты [Гнусным оккультисткам](https://ru.wowhead.com/npc=165763), фокусите [Насыщательниц душ](https://ru.wowhead.com/npc=165762) (только тех, кого вы в данный момент не контролите), заливайте АоЕ [Докучливых бесов](https://ru.wowhead.com/npc=168700) и наносите основной урон с помощью {{ site.data.spells.lvb }} по [Скальному покорителю](https://ru.wowhead.com/npc=165764).
- Примерно в середине этой фазы сдается {{ site.data.spells.bl }} / {{ site.data.spells.hero }}.

**Четвертая фаза – урон по боссу до 0%**
- Практически ничем не отличается от второй фазы. Фокусите босса и кливайте аддов.

## Изобретатель Зи'мокс (Эпохальный режим)

**Тип боя:** Одна цель

**Таланты:**
* **15**: {{ site.data.spells.eote }}
* **25**: {{ site.data.spells.eb}}
* **30**: {{ site.data.spells.spirit_wolf }}
* **35**: {{ site.data.spells.mote }}
* **40**: {{ site.data.spells.wrt }}
* **45**: {{ site.data.spells.if }}
* **50**: {{ site.data.spells.sk }}

**Легендарные предметы:**
- {{ site.data.legend.lava }}

- Во время боя будут пересекаться все механики из Героической сложности – преследование [Недолговечных духов](https://ru.wowhead.com/npc=168317/), вынос за пределы рейда [Семян истреления](https://ru.wowhead.com/spell=329090) и притяжка от [Грани Аннигиляции](https://ru.wowhead.com/spell=328880).
- Весь бой завязан на строгих таймингах выноса различных механик и использования телепортов.
- Если до вас дойдет [Недолговечный дух](https://ru.wowhead.com/npc=168317/), то это смертельно, контроль разума не спадает при получении урона.
- Не попадайте в [Стазисные ловушки](https://ru.wowhead.com/spell=326271/). Они активируются не сразу, так что у вас будет время из них выйти.
- Не попадайте под белые лучи – [Взрывающийся разломы](https://ru.wowhead.com/spell=329458). На Эпохальной сложности два луча или луч + любая другая механика убьют вас.
- {{ site.data.spells.as }} оставляйте под дебафф [Иссушающее прикосновение](https://ru.wowhead.com/spell=340860). Этот дебафф наносит очень большой урон и при отсутствии [Астрального сдвига](https://ru.wowhead.com/spell=108271/) не стесняйтесь просить у хилов внешние сейвы.
- **Важно!** С помощью {{ site.data.spells.wrt }} есть возможность полностью избежать притяжки от [Грани Аннигиляции](https://ru.wowhead.com/spell=328880). После начала притяжки ставьте тотем и бегите всем рейдом в сторону углубления у стены. Даже обычного бега без различных блинков и телепортов хватает, чтобы полностью избежать этой механики.
- Используйте {{ site.data.spells.swg }} во время первой и третьей притяжки, либо во время убегания от духа.

## Алчущий разрушитель (Эпохальная сложность)

**Тип боя:** Одна цель

**Таланты:**
* **15**: {{ site.data.spells.eote }}
* **25**: {{ site.data.spells.eb }}
* **30**: {{ site.data.spells.spirit_wolf }}
* **35**: {{ site.data.spells.mote }}
* **40**: {{ site.data.spells.wrt }}
* **45**: {{ site.data.spells.if }}
* **50**: {{ site.data.spells.sk }}

**Легендарные предметы:**
- {{ site.data.legend.lava }}


- Крайне полезная WA для отслеживания группы игроков с дебаффом [PescorusMiasma](https://wago.io/PescorusMiasma).
- Будьте осторожны при выносе [Нестабильного выброса](https://ru.wowhead.com/spell=334266), не заденьте других игроков.
- Используйте {{ site.data.spells.as }} при наложении механик, например {{ site.data.nathria.gluttonous_miasma }}, {{ site.data.nathria.expunge }}, и {{ site.data.nathria.desolate }}.
- Используйте {{ site.data.spells.wrt }} перед кастом [Поглощения](https://ru.wowhead.com/spell=334522/). Движение в сейв спот, как и установку тотема, следует начать сразу после применения боссом [Нестабильного выброса](https://ru.wowhead.com/spell=334266) перед набором **100** энергии боссом.

## Леди Инерва Дарквейн

**Тип боя:** Одна цель / AoE / Клив с приоритетной целью

**Таланты:**
* **15**: {{ site.data.spells.eote }}
* **25**: {{ site.data.spells.eb}}
* **30**: {{ site.data.spells.spirit_wolf }} или {{ site.data.spells.eshield }}
* **35**: {{ site.data.spells.mote }}
* **40**: {{ site.data.spells.ng }}
* **45**: {{ site.data.spells.primal_elem }} или {{ site.data.spells.if }}
* **50**: {{ site.data.spells.sk }}

**Легендарные предметы:**
- {{ site.data.legend.lava }}
- {{ site.data.legend.eogs }}
- {{ site.data.legend.fire }} 

**Нанесение урона:**
- Поддерживайте {{ site.data.spells.fs }} на боссе и на {{ site.data.nathria.harnessed_specter }}.
- Используйте {{ site.data.spells.quake }}, когда рядом стоят две или более цели, а также {{ site.data.spells.cl }}, если целей больше трех.
- Набирайте энергию Водоворота перед спавном аддов. Если вы используете {{ site.data.legend.eogs }}, постарайтесь придержать прок этой легендарки под их появление.
- Используйте {{ site.data.spells.swg }} или мгновенные заклинания, если вы стали целью {{ site.data.nathria.shared_suffering }}.

**Защита и сейвы:**
- Используйте {{ site.data.spells.as }} под {{ site.data.nathria.change_of_heart }} и {{ site.data.nathria.bottled_anima }}.
- {{ site.data.spells.spirit_wolf }} может использоваться для снижения урона от {{ site.data.nathria.loose_anima }} или чтобы быстро добежать и поймать {{ site.data.nathria.bottled_anima }}. А {{ site.data.spells.eshield }} достаточно неплохо хилит за счет способности {{ site.data.nathria.loose_anima }}.

**Вспомогательные способности:**
- Сбивайте касты {{ site.data.nathria.condemn }}.

**Заметки:**
- Так как у нас есть интерапт с самым коротким КД в игре – {{ site.data.spells.ws }}, два шамана и танк могут полностью перекрыть ротацию интераптов на аддах {{ site.data.nathria.conjured_manifestation }}.
- При использовании {{ site.data.spells.primal_elem }} для баффа {{ site.data.spells.harden_skin }}, убедитесь, что вы не помешаете вашим танкам, так как {{ site.data.spells.igor }} будет их переагривать.

## Совет Крови

**Тип боя:** Клив с приоритетной целью 

**Таланты:**
* **15**: {{ site.data.spells.eote }}
* **25**: {{ site.data.spells.eb }}
* **30**: {{ site.data.spells.spirit_wolf }} или {{ site.data.spells.eshield }}
* **35**: {{ site.data.spells.mote }}
* **40**: {{ site.data.spells.ng }} или {{ site.data.spells.wrt }}
* **45**: {{ site.data.spells.primal_elem }}
* **50**: {{ site.data.spells.sk }} или {{ site.data.spells.asc_ele }}

**Легендарные предметы:**
- {{ site.data.legend.fire }}
- {{ site.data.legend.lava }}

**Нанесение урона:**
- Так как боссы отхиливаются, наша главная задача – наносить урон в одну приоритетную цель.
- Поддерживайте {{ site.data.spells.fs }} на максимальном количестве целей.
- Во время {{ site.data.nathria.danse_macabre }}, вы все еще можете брать в цель боссов, у которых будет **99%** защиты от урона. Если вы используете {{ site.data.legend.fire }}, то поддерживайте {{ site.data.spells.fs }} в том числе и на этой фазе.
- Используйте {{ site.data.spells.swg }} или мгновенные заклинания под {{ site.data.nathria.anima_fountain }}, {{ site.data.nathria.waltz_of_blood }}, {{ site.data.nathria.dark_recital }} и {{ site.data.nathria.dancing_fever }} (на Эпохальной сложности).

**Защита и сейвы:**
- Используйте {{ site.data.spells.as }} под {{ site.data.nathria.dark_recital }} или на любые другие механики, если урон от {{ site.data.nathria.oppressive_atmosphere }} становится слишком высоким.
- {{ site.data.spells.spirit_wolf }} поможет на таких механиках как {{ site.data.nathria.scarlet_letter }}, {{ site.data.nathria.unstoppable_charge }}, {{ site.data.nathria.castellans_cadre }}, и {{ site.data.nathria.dancing_fools }}. {{ site.data.spells.eshield }} будет хорошо хилить за счет постоянного ДоТ эффекта от {{ site.data.nathria.oppressive_atmosphere }}.

**Вспомогательные способности:**
- Сбивайте касты {{ site.data.nathria.baroness_frieda }} – {{ site.data.nathria.bolt_of_power }}.
- Используйте {{ site.data.spells.wrt }}, чтобы помочь союзникам на таких механиках, как {{ site.data.nathria.danse_macabre }}, {{ site.data.nathria.anima_fountain }} и {{ site.data.nathria.waltz_of_blood }}.

**Заметки:**
- Учитывая особенность боя – множество целей для {{ site.data.spells.fs }}, одна приоритетная цель и долгие переходки, потенциально может заиграть {{ site.data.spells.asc_ele }}, но это очень зависит от таймингов боя.

## Грязешмяк

**Тип боя:** Одна цель

**Таланты:**
* **15**: {{ site.data.spells.eote }}
* **25**: {{ site.data.spells.eb }}
* **30**: {{ site.data.spells.spirit_wolf }} или {{ site.data.spells.eshield }}
* **35**: {{ site.data.spells.mote }}
* **40**: {{ site.data.spells.ng }} или {{ site.data.spells.wrt }}
* **45**: {{ site.data.spells.if }}
* **50**: {{ site.data.spells.sk }}

**Легендарные предметы:**
- {{ site.data.legend.lava }}

**Нанесение урона:**
- Копите энергию Водоворота под {{ site.data.nathria.destructive_impact }}, чтобы слить её на фазу с  увеличенным уроном по боссу.
- {{ site.data.nathria.destructive_impact }} активируется каждую минуту, поэтому придерживайте под него {{ site.data.spells.sk }}.
- Используйте {{ site.data.spells.swg }} или мгновенные заклинания под {{ site.data.nathria.destructive_stomp }}, {{ site.data.nathria.falling_rubble }}, {{ site.data.nathria.chain_slam }}, и {{ site.data.nathria.seismic_shift }} (на Эпохальной сложности).

**Защита и сейвы:**
- Используйте {{ site.data.spells.as }} на {{ site.data.nathria.colossal_roar }} и {{ site.data.nathria.destructive_impact }}.
- За счет постоянного урона от {{ site.data.nathria.chain_link }} и {{ site.data.nathria.collapsing_foundation }}, {{ site.data.spells.eshield }} может быть хорошим вариантом для отхила.

**Вспомогательные способности:**
- Используйте {{ site.data.spells.wrt }} для помощи союзникам под {{ site.data.nathria.destructive_stomp }} и {{ site.data.nathria.falling_rubble }}.

**Способности ковенантов:**

- <span style="color:#68ccef;font-size:1em;">**Кирии**</span>: {{ site.data.covenants.phial }} снимает эффект кровотечения от способности [Кровавая цепь](https://ru.wowhead.com/spell=339189) на Эпохальном уровне сложности.

**Заметки:**
- За счет механики {{ site.data.nathria.chain_link }} будьте осторожны при использовании {{ site.data.spells.wolf }}, особенно если вас связало с менее мобильным классом.

## Генералы Каменного легиона


**Тип боя:** AoE / Клив

**Таланты:**
* **15**: {{ site.data.spells.eote }}
* **25**: {{ site.data.spells.afs }} или {{ site.data.spells.eb }}
* **30**: {{ site.data.spells.spirit_wolf }} или {{ site.data.spells.eshield }}
* **35**: {{ site.data.spells.mote }}
* **40**: {{ site.data.spells.ng }} или {{ site.data.spells.wrt }}
* **45**: {{ site.data.spells.primal_elem }}
* **50**: {{ site.data.spells.sk }}

**Легендарные предметы:**
- {{ site.data.legend.fire }}
- {{ site.data.legend.eogs }}

**Нанесение урона:**
- Поддерживайте {{ site.data.spells.fs }} на максимально возможном количестве целей.
- Используйте {{ site.data.spells.quake }}, когда рядом стоят две или более цели, а также {{ site.data.spells.cl }}, если целей больше трех.
- Если вы используете {{ site.data.legend.eogs }}, постарайтесь придержать прок этой легендарки под их появление.
- Используйте {{ site.data.spells.swg }} или мгновенные заклинания под такие механики, как {{ site.data.nathria.wicked_blade }}, {{ site.data.nathria.seismic_upheaval }}, и {{ site.data.nathria.reverberating_eruption }}.

**Защита и сейвы:**
- Используйте {{ site.data.spells.as }} и {{ site.data.spells.harden_skin }} (при взятом {{ site.data.spells.primal_elem }}) под {{ site.data.nathria.pulverizing_meteor }} и {{ site.data.nathria.heart_hemorrhage }}.
- Так как вы будете получать постоянный урон от {{ site.data.nathria.wicked_laceration }} и {{ site.data.nathria.heart_rend }}, {{ site.data.spells.eshield }} может быть хорошим вариантом для дополнительного отхила.

**Вспомогательные способности:**
- Используйте {{ site.data.spells.wrt }} для помощи союзникам во время {{ site.data.nathria.stonegale_effigy }} или {{ site.data.nathria.shattering_blast }}.

**Заметки:**
- При использовании {{ site.data.spells.primal_elem }} для баффа {{ site.data.spells.harden_skin }}, убедитесь, что вы не помешаете вашим танкам, так как {{ site.data.spells.igor }} будет их переагривать.

## Сир Денатрий (Героический)

{% include youtube.html id="tMZsNSkDLm0" %}

**Тип боя:** ST / Клив / Клив разрозненных целей

**Таланты:**
* **15**: {{ site.data.spells.eote }}
* **25**: {{ site.data.spells.eb }}
* **30**: {{ site.data.spells.spirit_wolf }}
* **35**: {{ site.data.spells.mote }}
* **40**: {{ site.data.spells.wrt }}
* **45**: {{ site.data.spells.primal_elem }}
* **50**: {{ site.data.spells.sk }}

**Легендарные предметы:**
- {{ site.data.legend.fire }}
- {{ site.data.legend.lava }}

**Нанесение урона:**

Первая фаза:
- Накопите энергию Водоворота и придержите {{ site.data.spells.sk }} перед спавном аддов {{ site.data.nathria.echo_of_sin }}.
- Второй заряд первого {{ site.data.spells.sk }} можно потратить на спавн аддов, даже если вы используете его за 5 секунд до пула.
- {{ site.data.spells.swg }} лучше всего использовать под перебежку.
- В конце первой фазы, как только вы добежали до центра комнаты, можно продолжать бить босса.

Вторая фаза:
- Поддерживайте {{ site.data.spells.fs }} на {{ site.data.nathria.sire_denathrius }}, {{ site.data.nathria.remornia }}, и на всех возможных аддах.
- Используйте {{ site.data.spells.quake }}, когда рядом стоят две или более цели, а также {{ site.data.spells.cl }}, если целей больше трех.
- В зависимости от таймингов, вы можете придержать энергию Водоворота и кулдауны под применение боссом {{ site.data.nathria.wracking_pain }} на аддов.

Третья фаза:
- Используйте {{ site.data.spells.swg }} или мгновенные заклинания под  {{ site.data.nathria.fatal_finesse }} и при поглощении {{ site.data.nathria.smoldering_ire }}.

**Защита и сейвы:**

Первая фаза:
- Используйте {{ site.data.spells.as }} и {{ site.data.spells.harden_skin }} (при взятом {{ site.data.spells.primal_elem }}) под {{ site.data.nathria.feeding_time }} (способность аддов {{ site.data.nathria.night_hunter }} на Героической и Эпохальной сложностях), {{ site.data.nathria.blood_price }}, или {{ site.data.nathria.cleansing_pain }}.

Вторая фаза:
- Используйте {{ site.data.spells.as }} и {{ site.data.spells.harden_skin }} (при взятом {{ site.data.spells.primal_elem }}) под {{ site.data.nathria.impale }} или на большом количестве стаков {{ site.data.nathria.crimson_chorus }}.

Третья фаза:
- Используйте {{ site.data.spells.as }} и {{ site.data.spells.harden_skin }} (при взятом {{ site.data.spells.primal_elem }}) под {{ site.data.nathria.fatal_finesse }} или {{ site.data.nathria.smoldering_ire }}.

- Во время всего боя будет очень много передвижения, поэтому дополнительная скорость от {{ site.data.spells.spirit_wolf }} будет достаточно полезна. 

**Лечение:**

Конец первой фазы:
- Если вы стопаете урон на первой фазе чтобы не перевести босса раньше времени, потратьте это время на лечение.

**Вспомогательные способности:**

Первая фаза:
- Используйте {{ site.data.spells.wrt }} для быстрого перемещения из зоны {{ site.data.nathria.ravage }}.

Вторая фаза:
- Используйте {{ site.data.spells.wrt }} для избегания {{ site.data.nathria.massacre }} и {{ site.data.nathria.hand_of_destruction }}.

Третья фаза:
- Используйте {{ site.data.spells.wrt }} на таких механиках, как {{ site.data.nathria.shattering_pain }}, {{ site.data.nathria.hand_of_destruction }}, {{ site.data.nathria.ravage }} и {{ site.data.nathria.massacre }}.

**Способности ковенантов:**

- <span style="color:#68ccef;font-size:1em;">**Кирии**</span>: {{ site.data.covenants.phial }} снимает эффект кровотечения от способности [Бойня](https://ru.wowhead.com/spell=329906).

**Заметки:**
- За счет того, что {{ site.data.spells.wolf }} не позволяет замедлить вас ниже **100%** скорости передвижения, Шаман может полностью игнорировать механику {{ site.data.nathria.march_of_the_penitent }} в конце первой фазы, а также игнорировать очищение стаков {{ site.data.nathria.burden_of_sin }} в течение всей фазы. Не забудьте зайти в форму {{ site.data.spells.wolf }} **до** начала переходки, желательно на **71%** здоровья босса. 
- При использовании {{ site.data.spells.primal_elem }} для баффа {{ site.data.spells.harden_skin }}, убедитесь, что вы не помешаете вашим танкам, так как {{ site.data.spells.igor }} будет их переагривать.

