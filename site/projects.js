var projects =
[
    {link:"https://folk.ntnu.no/torbjss/Documents/html/", img:"imgs/oburger.PNG",         title:"O'Burger",         desc:"Obama's official burger website<br>Made with HTML, JS and CSS"},
    {link:"https://torbst.itch.io/allied-abductees",      img:"imgs/alliedAbductees.PNG", title:"Allied Abductees", desc:"Submission for the 2021 GMTK game jam<br>Made with Unity and C#"}
];
var wrapperEL = document.getElementById("projectswrapper");


function addProjects() {
    for (var i = 0; i < projects.length; i++) {
        var project = projects[i];

        var sectionEL = document.createElement("section");
        sectionEL.className = "unselectable lightmode";
        sectionEL.link = project.link;
        sectionEL.addEventListener("click", click);

        var contentEL = document.createElement("div");
        contentEL.className = "content";
        contentEL.innerHTML = project.title + "<hr>" + project.desc;

        var imgWrapperEL = document.createElement("div");
        imgWrapperEL.className = "imgwrapper";
        var imgEL = document.createElement("img");
        imgEL.src = project.img;
        imgWrapperEL.appendChild(imgEL);

        sectionEL.appendChild(contentEL);
        sectionEL.appendChild(imgWrapperEL);
        wrapperEL.appendChild(sectionEL);
    }
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