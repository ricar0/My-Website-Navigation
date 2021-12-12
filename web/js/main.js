document.onkeydown = function EnterPress(e) {
  if (e.keyCode === 13) {
    searchs();
    window.open(But.href);
  }
};

function init() {
  search_init();
  initBG();
}
