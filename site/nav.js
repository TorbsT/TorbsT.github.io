function resetNav() {
    getNav().innerHTML = "";
    forAllPages(createNavItem);
    window.addEventListener("resize", updateNavWidths);  // maybe don't run multiple times
    updateNavWidths();
}

function getNavItems() {
    var buttonWrappers = getNav().children;
    if (buttonWrappers.length == 0) console.error("nav has no pages");
    return buttonWrappers;
}
function getNav() {
    var nav = document.getElementsByTagName("nav");
    if (nav.length == 0) console.error("Couldn't find <nav> in HTML");
    else if (nav.length > 1) console.error("Multiple <nav>s found in HTML");
    return nav[0];
}


function updateNavWidths() {
    updatePageStyles();
    // Sets the width of nav items to width in the corresponding pages.
    var items = getNavItems();
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var correspondingPage = pages[i];
        item.style.width = correspondingPage["width"]+"px";
    }
}
function updatePageStyles() {
    var widthLeft = Math.floor(getNav().getBoundingClientRect().width);  // floor since it rounds otherwise
    
    console.log("Total width is "+widthLeft);
    for (var i = 0; i < pages.length; i++) {
        var page = pages[i];
        var pagesLeft = pages.length - i;
        var dedicatedWidth = Math.ceil(widthLeft/pagesLeft);
        page["width"] = dedicatedWidth;
        widthLeft -= dedicatedWidth;
    }
}

function createNavItem(i) {
    var item = document.createElement("div");
    var page = pages[i];

    var interactable = document.createElement("button");
    interactable.innerText = page["name"];
    interactable.index = i;
    interactable.addEventListener("click", interactableClicked);

    item.appendChild(interactable);
    getNav().appendChild(item);
}
function forAllPages(f) {
    for (var i = 0; i < pages.length; i++) {
        f(i);
    }
}
function interactableClicked(el) {
    var index = el.target.index;
    if (index === undefined) console.error("index of navInteractable is undefined");
    if (index < 0) console.error("index of navInteractable is negative");
    else if (index >= pages.length) console.error("index of navInteractable is larger than pages.length");

    var page = pages[index];
    var link = page["link"];
    if (link === undefined) return;
    goTo(link);
}
function goTo(link) {
    window.location.href = link;
}

var pages = [
    {"name":"Home", "link":"_index.html"},
    {"name":"My projects", "link":"projects.html"},
    {"name":"Very long name for a navthing"}
]


resetNav();