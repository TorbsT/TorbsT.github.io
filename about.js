var music3x3 = [
    {text:"<h1>System Of A Down</h1>", img:"soad.jpg"},
    {text:"<h1>FalKKonE</h1>", img:"falkkone.jpg"},
    {text:"<h1>Depeche Mode</h1>", img:"depechemode.jpg"},

    {text:"<h1>Nightwish</h1>", img:"nightwish.jpg"},
    {text:"<h1>Rammstein</h1>", img:"rammstein.jpg"},
    {text:"<h1>Lindemann</h1>", img:"lindemann.png"},

    {text:"<h1>妖精帝國</h1>", img:"youseiteikoku.jpg"},
    {text:"<h1>菅野 祐悟</h1>", img:"yugokanno.png"},
    {text:"<h1>Myth & Roid</h1>", img:"mythroid.jpg"},
];
var game3x3 = [
    {text:"<h1>Deathgarden</h1>", img:"deathgarden.jpg"},
    {text:"<h1>Undertale</h1>", img:"undertale.png"},
    {text:"<h1>Getting Over It with Bennett Foddy</h1>", img:"goi.webp"},
    
    {text:"<h1>Dead by Daylight</h1>", img:"dbd.jpg"},
    {text:"<h1>Minecraft</h1>", img:"minecraft.png"},
    {text:"<h1>The Binding of Isaac: Rebirth</h1>", img:"tboi.jpg"},

    {text:"<h1>Metroid Prime 3: Corruption</h1>", img:"mp3.jpg"},
    {text:"<h1>The Battle for Middle Earth: The Rise of the Witch King</h1>", img:"rotwk.jpg"},
    {text:"<h1>Spooky's Jump Scare Mansion</h1>", img:"spookys.webp"},
];

var music3x3EL = document.getElementById("music3x3");
var game3x3EL = document.getElementById("game3x3");

function fill3x3(el, data, path) {
    var tableEL = document.createElement("table");
    el.appendChild(tableEL);
    el.className = "centered tableWrapper";
    var rowEL;
    for (var i = 0; i < data.length; i++) {
        if (i % 3 == 0) {
            rowEL = document.createElement("tr");
            tableEL.appendChild(rowEL);
        }
        var cellEL = document.createElement("td");
        var wrapperEL = document.createElement("div");
        var imgEL = document.createElement("img");
        var blackEL = document.createElement("div");
        var textEL = document.createElement("div");

        textEL.innerHTML = data[i].text;
        imgEL.src = path+data[i].img;
        wrapperEL.className = "hiddenOverflow celldiv";
        imgEL.className = "cellimg";
        blackEL.className = "cellblack";
        textEL.className = "celltext";

        wrapperEL.appendChild(blackEL);
        wrapperEL.appendChild(textEL);
        wrapperEL.appendChild(imgEL);
        cellEL.appendChild(wrapperEL);
        rowEL.appendChild(cellEL);
    }
}

fill3x3(music3x3EL, music3x3, "imgs/about/");
fill3x3(game3x3EL, game3x3, "imgs/about/");

var birthday = new Date(2001, 09, 22);
var yearsOldEL = document.getElementById("yearsold");
yearsOldEL.innerText = Math.abs(new Date(Date.now() - birthday).getUTCFullYear() - 1970);