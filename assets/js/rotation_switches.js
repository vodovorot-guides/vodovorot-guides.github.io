HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
function listeners() {
    let inputs = document.getElementsByTagName("input");
    for (let i of inputs) {
        if (i.type == "checkbox") {
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

            if (has_exclude) {
                item.style.display = "none";
            } else {
                item.style.display = "list-item";
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
    pick_talents(["lf", "hh", "ea", "sunder", "spirits", "wolf", "ft"]);
    return false;
});

$('a#mplus_build_ele').on('click', function(e) {
    pick_talents(["eote", "afs", "storm", "primal_elem", "sk", "eogs"]);
    return false;
});

$('a#raid_build_ele').on('click', function(e) {
    pick_talents(["eote", "eb", "mote", "primal_elem", "sk", "lava"]);
    return false;
});

