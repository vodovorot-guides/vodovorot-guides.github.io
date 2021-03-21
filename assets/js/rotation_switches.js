HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
function listeners() {
    let inputs = document.getElementsByTagName("input")
    for (i of inputs) {
        if (i.type == "radio") {
            change_listener(i);   
            i.dispatchEvent(new Event("change"))
        }
    }
}

function pick_talents(talents) {
    let inputs = document.getElementsByTagName("input");
    talents.forEach(function(talent) {
        input = document.getElementById(talent + "-radio");
        input.checked = true;
        input.dispatchEvent(new Event("change"))
    });
}

function change_listener(element) {
    element.addEventListener("change", function(e) {
        let siblings = document.getElementsByName(e.target.name);
        for (radio of siblings) {
            if (radio.checked == true) {
                $("td#rotation_switch_" + radio.id.split('-')[0]).addClass("talent-active");
            } else {
                $("td#rotation_switch_" + radio.id.split('-')[0]).removeClass("talent-active");
            }
            let apl_elems = document.getElementsByClassName(radio.id.split('-')[0] + "-apl");
            for (item of apl_elems) {
                if (radio.checked == true) {
                    item.style.display = "list-item";
                } else {
                    item.style.display = "none";
                }
            }
        }
    });
}

listeners()

$('.switch-link').on('click', function (e) {
    this.parentNode.click();
    e.stopPropagation();
    e.preventDefault();
})

$('a#mplus_build').on('click', function(e) {
    pick_talents(["eote", "afs", "mote", "primal_elem", "sk", "eogs"]);
    return false;
})

$('a#raid_build').on('click', function(e) {
    pick_talents(["eote", "eb", "mote", "if", "sk", "lava"]);
    return false;
})
