HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
function listeners() {
    let inputs = document.getElementsByTagName("input");
    for (let i of inputs) {
        if (i.type == "radio") {
            change_listener(i);
            i.dispatchEvent(new Event("change"));
        }
    }
}

function pick_talents(talents) {
    talents.forEach(function(talent) {
        let input = document.getElementById(talent + "-radio");
        input.checked = true;
        input.dispatchEvent(new Event("change"));
    });
}

function change_listener(element) {
    element.addEventListener("change", function(e) {
        let siblings = document.getElementsByName(e.target.name);

        for (let radio of siblings) {
            if (radio.checked == true) {
                $("td#rotation_switch_" + radio.id.split('-')[0]).addClass("talent-active");
            } else {
                $("td#rotation_switch_" + radio.id.split('-')[0]).removeClass("talent-active");
            }
            let apl_elems = document.querySelectorAll("." + radio.id.split('-')[0] + "-apl, " + ".no-" + radio.id.split('-')[0] + "-apl");

            for (let item of apl_elems) {
                if (radio.checked == true) {
                    item.classList.remove("no-" + radio.id.split('-')[0] + "-apl");
                    item.classList.add(radio.id.split('-')[0] + "-apl");
                    item.style.display = "list-item";

                    for (let className of item.classList) {
                        if (className.includes("no-")) {
                            item.style.display = "none";
                            break;
                        }
                    }
                } else {
                    item.classList.remove(radio.id.split('-')[0] + "-apl");
                    item.classList.add("no-" + radio.id.split('-')[0] + "-apl");
                    item.style.display = "none";
                }
            }
        }

        if ($(this).is("input[covenant][name='legendaries']")) {
            let item = $("input[covenant='" + $(this).attr('covenant') + "'][name='covenants']")[0];
            if (this.checked && !item.checked) {
                item.checked = true;
                item.dispatchEvent(new Event("change"));
            }
        }
    });
}

listeners();

$('.switch-link').on('click touchend', function(e) {
    this.parentNode.click();
    e.stopPropagation();
    e.preventDefault();
});

$('a#mplus_build_enh').on('click', function(e) {
    pick_talents(["lf", "hh", "fn", "sunder", "spirits", "actuators", "pw"]);
    return false;
});

$('a#raid_build_enh').on('click', function(e) {
    pick_talents(["eb", "hh", "ea", "sunder", "spirits", "wolf", "ft"]);
    return false;
});

$('a#mplus_build_ele').on('click', function(e) {
    pick_talents(["eote", "afs", "storm", "primal_elem", "sk", "eogs"]);
    return false;
});

$('a#raid_build_ele').on('click', function(e) {
    pick_talents(["eote", "eb", "mote", "if", "sk", "lava"]);
    return false;
});

