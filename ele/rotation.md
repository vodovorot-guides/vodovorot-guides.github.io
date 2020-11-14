---
title: Ротация
layout: page
last_update: 2020-10-03 
wow: 8.3.0
toc: true
---

15 | <input type="radio" id="er-radio" name="15" value="1"/><label for="er-radio" > Earthen Rage</label> | <input type="radio" id="eote-radio" name="15" value="2"  checked/><label for="eote-radio"> Echo of the Elements</label> | <input type="radio" id="eb-radio" name="15" value="3" /><label for="eb-radio"> Elemental Blast</label>
30 | <input type="radio" id="afs-radio" name="30" value="1" /><label for="afs-radio"> Aftershock</label> | <input type="radio" id="ctt-radio" name="30" value="2" /><label for="ctt-radio"> Call the Thunder</label> | <input type="radio" id="tm-radio" name="30" value="3" checked /><label for="tm-radio"> Totem Mastery</label>
60 | <input type="radio" id="mote-radio" name="60" value="1" checked /><label for="mote-radio"> Master of the Elements</label> | <input type="radio" id="se-radio" name="60" value="2"/><label for="se-radio"> Storm Elemental</label> | <input type="radio" id="lmt-radio" name="60" value="3" /><label for="lmt-radio"> Liquid Magma Totem</label>
90 | <input type="radio" id="sop-radio" name="90" value="1" /><label for="sop-radio"> Surge of Power</label> | <input type="radio" id="pe-radio" name="90" value="2" /><label for="pe-radio"> Primal Elementalist</label> | <input type="radio" id="if-radio" name="90" value="3" checked /><label for="if-radio"> Icefury</label>
100 | <input type="radio" id="up-radio" name="100" value="1" /><label for="up-radio"> Unlimited Power</label> | <input type="radio" id="sk-radio" name="100" value="2" checked/><label for="sk-radio"> Stormkeeper</label> | <input type="radio" id="asc-radio" name="100" value="3"/><label for="asc-radio"> Ascendance</label>


<div class="apl" style="max-width: 100%; text-align:justify;" markdown="0">
    <ol>
        <li class="pe-apl" style="display: none;"> Cast {{ site.data.spell.meteor }} / {{ site.data.spell.eye_of_the_storm }} if no multi-target will happen soon. Make sure {{ site.data.talent.se }} buffs itself with {{ site.data.spell.call_lightning }} before you activate {{ site.data.spell.eye_of_the_storm }}.</li>
        <li class="tm-apl" style="display: list-item;">Cast {{ site.data.talent.tm }} when any of the following are true:
            <ul>
                <li>It is not active or you are out of range of the existing totems.</li>
                <li class="asc-apl" style="display:none;">You are about to enter {{site.data.talent.asc}}, and the buff would expire during {{site.data.talent.asc}}.</li>
            </ul>
        </li>
        <li> Cast {{ site.data.spell.fe }} / {{ site.data.talent.se }} / {{site.data.spell.ee}} on cooldown. But don't screw your group with {{ site.data.spell.ee }}.</li>
        <li> Cast {{ site.data.spell.fs }} when any of the following are true:
            <ul>
                <li>It is not active on the target.</li>
                <li class="asc-apl" style="display:none;">You are about to enter {{site.data.talent.asc}}.</li>
                <li>The debuff's duration is at or below 7 seconds remaining.</li>
                <li class="se-apl" style="display: none;"><strong>Special warning:</strong> Don't refresh {{ site.data.spell.fs }} if you have 14 stacks or more of {{ site.data.spell.wind_gust }} during {{ site.data.talent.se }}. Unless you have {{ site.data.azerite.igneous_potential }} at least twice. </li>
            </ul>
        </li>
        <li class="asc-apl" style="display:none;">Cast {{ site.data.talent.asc }} on cooldown, if neither {{ site.data.talent.se }} is active, nor {{ site.data.spell.lvb }} is available, nor {{ site.data.talent.if }} is active.</li>
        <li class="eb-apl" style="display:none;">Cast {{ site.data.talent.eb }} on cooldown, if neither {{ site.data.talent.se }} is active nor you could cast a {{ site.data.talent.mote }} empowered {{ site.data.spell.es }} instead.</li>
        <li class="sk-apl" style="display: list-item;"> Cast {{ site.data.talent.sk }} on cooldown and ideally game it with {{ site.data.talent.sop }} if you selected this talent. See special cases below for more information.</li>
        <li class="lmt-apl" style="display:none;">Cast {{ site.data.talent.lmt }} on cooldown. Ideally paired with {{ site.data.azerite.worldvein }}, if that's your major essence.</li>
        <li>Cast {{ site.data.spell.eq }} if you're fighting 2 or more enemies and it can do at least 8 ticks. If you use {{ site.data.azerite.lava_shock }} this changes to using {{ site.data.spell.eq }} at three or more targets.</li>
        <li class="sk-apl" style="display: list-item;">Cast {{ site.data.spell.lb }} if {{ site.data.talent.sk }} is active and when any of the following are true (if you don't see any following conditions, ignore this line):
            <ul>
                <li class="mote-apl" style="display: list-item;">{{ site.data.talent.mote }} is active and {{ site.data.talent.sop }} is NOT selected.</li>
                <li class="sop-apl" style="display: none;">{{ site.data.talent.sop }} is active.</li>
            </ul>
        </li>
        <li>Cast {{ site.data.spell.es }}. But read the special cases about delaying {{ site.data.spell.es }} casts.</li>
        <li class="se-apl" style="display: none;">Cast {{ site.data.spell.lvb }} while {{ site.data.talent.se }} is active if any of the following conditions are met:
            <ul>
                <li class="se-apl" style="display: none;">You have 2 or more {{ site.data.azerite.igneous_potential }} traits.</li>
                <li class="se-apl" style="display: none;">You have a {{ site.data.spell.lava_surge }} proc.</li>
                <li class="se-apl" style="display: none;">You have fewer than 14 {{ site.data.spell.wind_gust }} stacks.</li>
            </ul>
        </li>
        <li class="se-apl" style="display: none;">Cast {{ site.data.spell.lb }} if {{ site.data.talent.se }} is active.</li>
        <li class="if-apl" style="display: list-item;">Cast {{ site.data.spell.frs }} with the {{ site.data.talent.if }} buff and {{ site.data.talent.mote }} buff active.</li>
        <li class="asc-apl" style="display:none;">Cast {{ site.data.spell.lvb }} if {{ site.data.talent.asc }} is active.</li>
        <li class="sop-apl" style="display: none;">Cast {{ site.data.spell.lvb }} with {{ site.data.talent.sop }} if you could get another use out of {{ site.data.talent.se }}/{{ site.data.spell.fe }} or lengthen its last possible duration within the fight.</li>
        <li class="sop-apl" style="display: none;">Cast {{ site.data.spell.lb }} with {{ site.data.talent.sop }} buff active.</li>
        <li>Cast {{site.data.spell.lvb }}.</li>
        <li class="if-apl" style="display: list-item;">Cast {{ site.data.spell.frs }} with the {{ site.data.talent.if }} buff active.</li>
        <li class="if-apl" style="display: list-item;">Cast {{ site.data.talent.if }} on cooldown.</li>
        <li class="tm-apl" style="display: list-item;">Refresh {{ site.data.talent.tm }} if its duration is at or below 9 seconds remaining.</li>
        <li>Cast {{ site.data.spell.lb }} as a filler.</li>
        <li>Cast {{ site.data.spell.frs }} in place of {{ site.data.spell.lb }} while moving, even if you do not have {{ site.data.talent.if }}.</li>
    </ol>
</div>
