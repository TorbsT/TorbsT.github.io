const adjectives = ["AWESOME", "cool", "EPIC", "LEGENDARY", "CRAZY", "SICK", "WILD", "INSANE", "RADICAL", "NEXT-LEVEL", "BOSS", "UNREAL", "GOATED", "TUBULAR", "LIT", "BANGIN’", "FIRE", "SWAGGY", "OFF-THE-CHARTS", "ABSOLUTELY BONKERS", "HIGH-KEY ICONIC", "STELLAR", "MEGA", "ULTRA", "JAW-DROPPING", "MIND-BLOWING", "SUS (but in a good way)", "OMEGA", "MAXIMUM OVERDRIVE", "GIGA-CHAD", "TOO POWERFUL", "GOD-TIER", "ULTIMATE", "SO 2012", "FACE-MELTING", "BIBLICALLY ACCURATE", "YEET-WORTHY"];
const endings = ["!", "!!", "!!!", "!!!!"];
const adjectiveChance = 0.4;
const endingChance = 1;

let themeBarEL = document.getElementById("theme");
themeBarEL.className = "sticky";
let theme = "dark";

makeButton("dark", "darkmode.png");
makeButton("light", "lightmode.png");
makeButton("silly", "sillymode.png");

function makeButton(name, imgname) {
    let buttonEL = document.createElement("div");
    buttonEL.className = "themebutton";
    
    let imgEL = document.createElement("img");
    buttonEL.addEventListener("click", buttonClicked);
    buttonEL.dataset.theme = name;
    imgEL.dataset.theme = name;
    imgEL.className = "centered";
    imgEL.src = "imgs/"+imgname;
    buttonEL.appendChild(imgEL);
    themeBarEL.appendChild(buttonEL);
}
function buttonClicked(e) {
    setTheme(e.target.dataset.theme);
}
// --- Cookie helpers ---
function setCookie(name, value, days = 365) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
}

function getCookie(name) {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=');
        return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, null);
}

// --- Theme logic ---
function setTheme(newTheme) {
    setCookie("theme", newTheme);  // 💾 store theme in cookie
    console.log("theme is " + newTheme);

    // Change themebar button thing
    for (var i = 0; i < themeBarEL.childElementCount; i++) {
        const el = themeBarEL.children[i];
        if (el.dataset.theme == newTheme)
            el.classList.add("selected");
        else
            el.classList.remove("selected");
    }

    // Change theme
    let elstochange = Array.from(document.getElementsByClassName(theme));  // Use old theme
    console.log(elstochange.length);
    for (var i = 0; i < elstochange.length; i++) {
        var list = elstochange[i].classList;
        list.remove(theme);
        list.add(newTheme);
    }

    // Enable/disable sillies
    let sillyELs = document.getElementsByClassName("sillyshow");
    for (var i = 0; i < sillyELs.length; i++) {
        var element = sillyELs[i];
        const d = newTheme != "silly";
        element.hidden = d;
    }

    let unsillyELs = document.getElementsByClassName("sillyhide");
    for (var i = 0; i < unsillyELs.length; i++) {
        var element = unsillyELs[i];
        const d = newTheme == "silly";
        element.hidden = d;
    }

    if (newTheme == "silly")
        setSillyTheme();

    theme = newTheme;
}

function init() {
    replaceTextNodes(document.body, "¤", adjectiveChance, randomAdjective, "");
    replaceTextNodes(document.body, ".", endingChance, randomEnding, ".");

    let newTheme = getCookie("theme");  // 🍪 get theme from cookie
    if (newTheme == null) {
        newTheme = "dark";
    }
    setTheme(newTheme);
}


function randomAdjective() {
    return adjectives[Math.floor(Math.random() * adjectives.length)] + "&nbsp;";
}

function randomEnding() {
    return endings[Math.floor(Math.random() * endings.length)];
}

function replaceTextNodes(node, repl, chance, funcy, unsillydefault) {
    if (node.nodeType === 3 && node.nodeValue.includes(repl)) { // If it's a text node with "¤"
        let parent = node.parentNode;
        let parts = node.nodeValue.split(repl); // Split text by "¤"

        parts.forEach((part, index) => {
            if (index > 0) { // Every time we see "¤", we need to insert two <span> elements
                // Create the "silly" span with a random adjective
                let sillySpan = document.createElement("span");
                sillySpan.className = "sillyshow";
                let sillyText = funcy();  // Call funcy() to get a random adjective
                sillySpan.innerHTML = Math.random() < chance ? sillyText : "";

                // Create the "unsilly" span with the unsillydefault
                let unsillySpan = document.createElement("span");
                unsillySpan.className = "sillyhide";
                unsillySpan.innerHTML = unsillydefault;

                // Insert both spans into the parent
                parent.insertBefore(sillySpan, node); // Insert the silly span before the text node
                parent.insertBefore(unsillySpan, node); // Insert the unsilly span right after
            }

            if (part) {
                let textNode = document.createTextNode(part);
                parent.insertBefore(textNode, node); // Insert the part of the original text
            }
        });

        parent.removeChild(node); // Remove the old text node
    } else {
        [...node.childNodes].forEach(childNode => replaceTextNodes(childNode, repl, chance, funcy, unsillydefault)); // Recursively process child nodes
    }
}





function setSillyTheme() {

}

init();