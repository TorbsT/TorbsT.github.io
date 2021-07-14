var projects =
[
    {github:"https://github.com/TorbsT/AlliedAbductees", itch:"https://torbst.itch.io/allied-abductees", img:"imgs/alliedAbductees.PNG", title:"<h2>Allied Abductees</h2>", desc:"<p>Submission for the 2021 GMTK game jam</p><p>Made with Unity and C#</p>"},
    {github:"https://github.com/sindrimt/O-Burger", webp:"https://folk.ntnu.no/torbjss/Documents/html/", img:"imgs/oburger.PNG",         title:"<h1>O'Burger</h1>",         desc:"<p>Obama's very official burger website (2020)</p><p>Made with HTML, JS and CSS</p>"},
    {github:"https://www.youtube.com/watch?v=dQw4w9WgXcQ", title:"<h1>a very long title i made in order to see how the sections behave when the text becomes too word-y</h1>", desc:"<p>an even longerer description because more space is allocated to it. Including this fact, description text is also smaller, making overall possible word count even bigger. However, I am trying my best to exceed this word count limit. As you can probably tell, my strategy consists mostly of spouting out random sentences without actually getting anywhere. As a consequence of this, no message in particular is conveyed, and as such nobody learns anything useful.</p>"}
];
var wrapperEL = document.getElementById("projectswrapper");


function addProjects() {
    for (var i = 0; i < projects.length; i++) {
        var project = projects[i];

        var sectionEL = document.createElement("section");
        //sectionEL.dataset.scrollscalarx = "-0.6";
        //sectionEL.dataset.scrolloffsetx = "-200"*i+100;
        //sectionEL.dataset.doscrollx = true;
        sectionEL.className = "unselectable lightmode";
        sectionEL.link = project.link;

        var contentEL = document.createElement("div");
        contentEL.className = "content half";

        var txtEL = document.createElement("div");
        txtEL.className = "txt";

        var titleEL = document.createElement("div");
        var descEL = document.createElement("div");
        titleEL.className = "title";
        descEL.className = "desc";
        titleEL.innerHTML = project.title;
        descEL.innerHTML = project.desc;

        var linksWrapperEL = document.createElement("div");
        linksWrapperEL.className = "linkswrapper";

        var linksEL = document.createElement("ul");
        if (project.webp) linksEL.appendChild(addLink("imgs/webp.PNG", project.webp, "Visit webpage"));
        if (project.itch) linksEL.appendChild(addLink("imgs/itch.PNG", project.itch, "View submission on itch.io"));
        if (project.github) linksEL.appendChild(addLink("imgs/github.PNG", project.github, "View source code on Github"));
        

        var imgWrapperEL = document.createElement("div");
        imgWrapperEL.className = "imgwrapper half";
        var imgEL = document.createElement("img");
        if (project.img != undefined) imgEL.src = project.img;
        imgWrapperEL.appendChild(imgEL);

        txtEL.appendChild(titleEL);
        txtEL.appendChild(descEL);

        linksWrapperEL.appendChild(linksEL);
        contentEL.appendChild(txtEL);
        contentEL.appendChild(linksWrapperEL);

        sectionEL.appendChild(contentEL);
        sectionEL.appendChild(imgWrapperEL);
        wrapperEL.appendChild(sectionEL);
    }
}
function addLink(img, link, tooltip) {
    var liEL = document.createElement("li");
    var anchorEL = document.createElement("a");
    var imgEL = document.createElement("img");
    var imgTextEL = document.createElement("div");
    imgTextEL.className = "tooltiptext";
    imgTextEL.innerText = tooltip;
    imgEL.src = img;
    imgEL.alt = tooltip;

    anchorEL.className = "tooltip";

    anchorEL.href = link;
    anchorEL.appendChild(imgEL);
    liEL.appendChild(anchorEL);
    liEL.appendChild(imgTextEL);
    return liEL;
}
function click(e) {
    var link = getLinkOf(e.target);
    window.location = link;
}
function getLinkOf(inputElement) {
    var el = inputElement;
    var link;
    while (true) {
        link = el.link;
        if (link == undefined) el = el.parentElement;
        else return link;
    }
}

addProjects();