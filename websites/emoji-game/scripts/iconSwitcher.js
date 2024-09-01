const favicon = document.querySelector('link[rel="icon"]');
var icons = ["favicon.ico", "favicon1.ico"]
var current = 0
switch_icon()

function switch_icon() {
    if (current == 0) {
        current = 1
        favicon.href = icons[current];
    } else {
        current = 0
        favicon.href = icons[current];
    }
    setTimeout(() => { switch_icon() }, 1000)
}