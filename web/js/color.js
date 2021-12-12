cur = 0;
function changecolor() {
    var rnd = Math.floor(Math.random() * 4);
    while (rnd === cur) {
        rnd = Math.floor(Math.random() * 4);
    }
    if (rnd === 0) {
        document.body.style.setProperty('--mainColor', '#063146');
        document.body.style.setProperty('--fontColor', '#fff');
    } else if (rnd === 1) {
        document.body.style.setProperty('--mainColor', '#7FFFAA');
        document.body.style.setProperty('--fontColor', '#fff');
    } else if (rnd === 2) {
        document.body.style.setProperty('--mainColor', '#FFB6C1');
        document.body.style.setProperty('--fontColor', '#fff');
    } else if (rnd === 3) {
        document.body.style.setProperty('--mainColor', '#fff');
        document.body.style.setProperty('--fontColor', '#000');
    }
    cur = rnd;
}
