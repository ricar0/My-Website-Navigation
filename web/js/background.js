let len = 5
let cur = -1
const dict = [];

function ChangeBackground() {
    var ans = Math.floor(Math.random() * dict.length);
    while (ans === cur) {
        ans = Math.floor(Math.random() * dict.length);
    }
    console.log(dict[ans])
    document.getElementById("body").style.backgroundImage = "url('basic/background/" + dict[ans] + ".jpg')"
    cur = dict[ans];
}

function initBG() {
    for (let i = 1; i <= len; ++i) {
        dict.push(i);
    }
    ChangeBackground();
}