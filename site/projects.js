var projects =
[
    {
        title:"<h2>Allied Abductees</h2>",
        desc:"<p>Submission for the 2021 GMTK game jam</p><p>Made in 48 hours with Unity and C# by a team of three.</p>",
        vid:"imgs/alliedabductees.mp4",
        github:"https://github.com/TorbsT/AlliedAbductees",
        itch:"https://torbst.itch.io/allied-abductees",
        width:900

    },
    {
        title:"<h1>O'Burger</h1>",
        desc:"<p>Obama's very official burger website</p><p>Made with HTML, JS and CSS by a team of five. This was our project for the course IT2805 (2020).</p>",
        img:"imgs/oburger.GIF",
        github:"https://github.com/sindrimt/O-Burger",
        webp:"https://folk.ntnu.no/torbjss/Documents/html/"
    },
    {
        title:"<h2>Memory game</h2>",
        desc:"<p>A memory game about matching pictures of various environments.</p><p>Made with Java by a team of two. This was our project for the course TDT4100 (2021).</p>",
        img:"imgs/memorygame.PNG",
        gitlab:"https://gitlab.stud.idi.ntnu.no/tdt4100/v2021/student_projects/tdt4100-prosjekt-marcussn"
    },
    {
        title:"<h1>(WIP) Frontegy</h1>",
        desc:"<p>Chess with a twist</p><p>Made in Unity/C# by me. This project is largely a sandbox for me to experiment with different code structures (2020-present).</p>",
        img:"imgs/frontegy.PNG",
        github:"https://github.com/TorbsT/Frontegy"
    },


    {
        title:"<h1>a very long title i made in order to see how the sections behave when the text becomes too word-y</h1>",
        desc:"<p>an even longerer description because more space is allocated to it. Including this fact, description text is also smaller, making overall possible word count even bigger. However, I am trying my best to exceed this word count limit. As you can probably tell, my strategy consists mostly of spouting out random sentences without actually getting anywhere. As a consequence of this, no message in particular is conveyed, and as such nobody learns anything useful.</p>",
        vid:"imgs/alliedabductees.mp4",
        github:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
];
var alwaysPlay = true;
var wrapperEL = document.getElementById("projectswrapper");


function addProjects() {
    for (var i = 0; i < projects.length; i++) {
        var project = projects[i];

        var sectionEL = document.createElement("section");
        //sectionEL.dataset.scrollscalarx = "-0.6";
        //sectionEL.dataset.scrolloffsetx = "-200"*i+100;
        //sectionEL.dataset.doscrollx = true;
        sectionEL.className = "";
        sectionEL.link = project.link;
        //sectionEL.style.width = project.width+"px";

        var contentEL = document.createElement("div");
        contentEL.className = "content half";

        var flexyEL = document.createElement("div");
        flexyEL.className = "flexy";

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
        if (project.gitlab) linksEL.appendChild(addLink("imgs/gitlab.PNG", project.gitlab, "View source code on Gitlab"));
        

        var imgWrapperEL = document.createElement("div");
        imgWrapperEL.className = "imgwrapper half";

        if (project.img)
        {
            var imgEL = document.createElement("img");
            imgEL.src = project.img;
            imgWrapperEL.appendChild(imgEL);
        }
        else if (project.vid) {
            var vidEL = document.createElement("video");

            vidEL.src = project.vid;
            //vidEL.width = "500";
            //vidEL.height = "300";
            vidEL.muted = true;
            vidEL.autoplay = false;
            vidEL.controls = false;
            vidEL.loop = true;
            if (alwaysPlay) vidEL.play();
            else {
            vidEL.addEventListener("mouseenter", expandvid);
            vidEL.addEventListener("mouseleave", minimizevid);
            }
            imgWrapperEL.appendChild(vidEL);
        }
        

        txtEL.appendChild(titleEL);
        txtEL.appendChild(descEL);

        linksWrapperEL.appendChild(linksEL);
        flexyEL.appendChild(txtEL);
        flexyEL.appendChild(linksWrapperEL);
        contentEL.appendChild(flexyEL);

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
function expandvid(e) {
    var vidEL = e.target;
    vidEL.play();
    var sectionEL = vidEL.parentElement.parentElement;
    //sectionEL.style.width = "883px";
}
function minimizevid(e) {
    var vidEL = e.target;
    vidEL.pause();
    var sectionEL = vidEL.parentElement.parentElement;
    //sectionEL.style.width = "100%";
}

addProjects();