let defaultSel = 1;
let search_unextend = 0;

let SearchEg = [];
let curSearch = 0;

function createSearchEg(name, urls, se) {
    let object = {};
    object.name = name;
    object.urls = urls;
    object.search_engine = se;
    return object;
}

function search_data_init() {
    SearchEg.push(createSearchEg("Google", "https://www.google.com/search?q=", "Search in Google"));
    SearchEg.push(createSearchEg("百度", "https://www.baidu.com/#ie={inputEncoding}&wd=", "Search in Baidu"));
    SearchEg.push(createSearchEg("谷歌翻译", "https://translate.google.com/?source=osdd#auto|auto|", "Google Translate"));
    SearchEg.push(createSearchEg("百度翻译", "https://fanyi.baidu.com/#auto/auto/", "Baidu Translate"));
    SearchEg.push(createSearchEg("GitHub", "https://github.com/search?q=", "Search in GitHub"));
    SearchEg.push(createSearchEg("BiliBili", "https://search.bilibili.com/all?keyword=", "哔哩哔哩 (゜-゜)つロ 干杯~"));
    SearchEg.push(createSearchEg("维基百科", "https://zh.wikipedia.org/wiki/", "维基百科-中文"));
    SearchEg.push(createSearchEg("Wikipedia", "https://en.wikipedia.org/wiki/", "Wikipedia-English"));
    SearchEg.push(createSearchEg("CSDN", "https://so.csdn.net/so/search/s.do?q=", "Search in CSDN"));
    SearchEg.push(createSearchEg("CPP", "https://zh.cppreference.com/mwiki/index.php?search=", "Search in CPP"));
    SearchEg.push(createSearchEg("OEIS", "http://oeis.org/search?q=", "1,2,3,6,11,23,47,106,235"));
}

function search_init() {
    search_data_init();
    curSearch = defaultSel;
    But = document.getElementById("button");
    Inp = document.getElementById("input");
    Sel = document.getElementById("selects");

    for (var i = 0; i < SearchEg.length; ++i) {
        Sel.innerHTML += '<option value="' + i + '">' + SearchEg[i].name + '</option>'
    }
    Sel.value = defaultSel;
    changes();
    if (search_unextend === 1) {
        document.getElementById('search-div').style.width = '400px';
        document.getElementById('selects').style.width = '100px';
        document.getElementById('input').style.width = '240px';
    }
}

function searchs() {
    But.href = SearchEg[curSearch].urls + encodeURIComponent(Inp.value);
    Inp.value = "";
    Sel.value = defaultSel;
    curSearch = defaultSel;
    Inp.placeholder = SearchEg[curSearch].search_engine;
}

function changes() {
    curSearch = Sel.value;
    Inp.placeholder = SearchEg[curSearch].search_engine;
}
