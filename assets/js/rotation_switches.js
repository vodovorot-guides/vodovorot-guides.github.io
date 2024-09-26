HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
function listeners() {
    let inputs = document.getElementsByTagName("input");
    for (let i of inputs) {
        if (i.type == "checkbox" && i.id.includes("rotation_switch")) {
            change_listener(i);
            i.dispatchEvent(new Event("change"));
        }
    }
}

function reset_selections() {
    let inputs = document.getElementsByTagName("input");
    for (let i of inputs) {
        if (i.type == "checkbox" && i.id.includes("rotation_switch") && i.checked) {
            i.checked = false;
            i.dispatchEvent(new Event("change"));
        }
    }
}

function pick_talents(talents) {
    talents.forEach(function(talent) {
        let input = document.getElementById("rotation_switch_" + talent);
        input.checked = true;
        input.dispatchEvent(new Event("change"));
    });
}

function change_listener(element) {
    element.addEventListener("change", function(e) {
        reset_buttons_state();

        let radio = e.target;

        let elem_name = radio.id.split('_')[2];
        let apl_elem_name = elem_name + "-apl";
        let no_apl_elem_name = "no-" + elem_name + "-apl";

        let apl_elems = document.querySelectorAll("." + elem_name + "-apl, " + ".no-" + elem_name + "-apl");

        for (let item of apl_elems) {
            if (item.classList.contains(no_apl_elem_name)) {
                item.classList.remove(no_apl_elem_name);
                item.classList.add(apl_elem_name);
            } else if (item.classList.contains(apl_elem_name)) {
                item.classList.remove(apl_elem_name);
                item.classList.add(no_apl_elem_name);
            }

            let has_exclude = false;
            for (let className of item.classList) {
                if (className.includes("no-")) {
                    has_exclude = true;
                    break;
                }
            }


            if (has_exclude || !isEnoughTargets(item)) {
                item.style.display = "none";
            } else {
                item.style.display = "list-item";
            }
        }
    });
}

function isEnoughTargets(item) {
    if (item.hasAttribute("targets")) {
        let target_n = $("button.active[id^='target_']").attr("id").split("_")[1];
        if (target_n == "p") target_n = "100";

        let exprs = item.getAttribute("targets").split(" ");

        for (let expr of exprs) {
            /<|>/i.test(expr) ? expr = target_n + expr : expr += "==" + target_n;
            if (eval(expr)) {
                return true;
            }
        }

        return false;
    }

    return true;
}

listeners();

$('.switch-link').on('click touchend', function(e) {
    this.parentNode.click();
    e.stopPropagation();
    e.preventDefault();
});

function reset_buttons_state() {
    $("button[id^='build_']").removeClass("active");
}

function reset_target_buttons_state() {
    $("button[id^='target_']").removeClass("active");
}

function on_build_button_click(button, talent_list) {
    reset_selections();
    pick_talents(talent_list);
    // reset_buttons_state();
    button.classList.add("active");
    button.blur();
}


$('button#build_ele_storm_raid').on('click', function() {
    on_build_button_click(this, ["sop", "ns"]);
    return false;
});

$('button#build_ele_storm_mplus').on('click', function() {
    on_build_button_click(this, ["sop", "lmt", "tempest"]);
    return false;
});

$('button#build_ele_fire_raid').on('click', function() {
    on_build_button_click(this, ["eb", "fire", "if", "pw", "asc"]);
    return false;
});

$('button#build_ele_fire_mplus').on('click', function() {
    on_build_button_click(this, ["eb", "fire", "if", "lmt", "pw", "asc", "eogs"]);
    return false;
});

$('button#build_enh_elem_st').on('click', function() {
    on_build_button_click(this, ["asc", "ic", "hs", "pw", "hh", "lf", "eb"]);
    return false;
});

$('button#build_enh_elem_aoe').on('click', function() {
    on_build_button_click(this, ["cl", "asc", "fn", "sunder", "pw", "hh", "lf"]);
    return false;
});

$('button#build_enh_storm_st').on('click', function() {
    on_build_button_click(this, ["asc", "ic", "hs", "dw", "pw", "eb"]);
    return false;
});

$('button#build_enh_storm_aoe').on('click', function() {
    on_build_button_click(this, ["cl", "dre", "fn", "sunder", "dw", "pw"]);
    return false;
});



$("button[id^='target_']").on('click', function() {
    reset_target_buttons_state();
    this.classList.add("active");
    this.blur();

    if (this.id == "target_1") {
        $("div#st").show();
        $("div#aoe").hide();
    } else {
        $("div#st").hide();
        $("div#aoe").show();
        process_target_button();
    }
});

function process_target_button() {
    $("[targets]").each(function(index) {
        let has_exclude = false;

        for (let className of this.classList) {
            if (className.includes("no-")) {
                has_exclude = true;
                break;
            }
        }

        if (has_exclude || !isEnoughTargets(this)) {
            $(this).css("display", "none");
        } else {
            $(this).css("display", "list-item");
        }
    });
}
