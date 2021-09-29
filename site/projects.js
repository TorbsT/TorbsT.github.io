var unityLabel = { text:"Unity", bgcolor: "purple"};
var csharpLabel = { text:"C#", bgcolor: "#871F78"};
var htmlLabel = { text:"HTML", bgcolor: "red"};
var jsLabel = { text:"JS", bgcolor: "orange", full:"JavaScript"};
var cssLabel = { text:"CSS", bgcolor: "green"};
var javaLabel = { text:"Java", bgcolor:"red"};
var mcLabel = {text:"MC", bgcolor:"green", full:"Minecraft"};
var cmdblockLabel = {text:"Command blocks", bgcolor:"magenta"};

var projects =
[
    /*
    {
        title:"<h1>a very long title i made in order to see how the sections behave when the text becomes too word-y</h1>",
        desc:"<p>an even longerer description because more space is allocated to it. Including this fact, description text is also smaller, making overall possible word count even bigger. However, I am trying my best to exceed this word count limit. As you can probably tell, my strategy consists mostly of spouting out random sentences without actually getting anywhere. As a consequence of this, no message in particular is conveyed, and as such nobody learns anything useful.</p>",
        vid:"imgs/alliedabductees.mp4",
        startyear:200,
        endyear:200,
        labels:[unityLabel,csharpLabel,htmlLabel,javaLabel,jsLabel],
        github:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    */
    {
        title:"<h2>O'Burger: Barackening</h2>",
        desc:"<p>App for ordering food from O'Burger</p><p>A continuation of the legendary O'Burger series, which now supports sending and retrieving orders on an external server.</p><p>This was our project for the course IT1901. Made by a team of four practicing agile development.</p>",
        img:"imgs/barackening.png",
        startyear:2021,
        endyear:2021,
        labels:[javaLabel],
        gitlab:"https://gitlab.stud.idi.ntnu.no/it1901/groups-2021/gr2137/gr2137",
        width:900
    },
    {
        title:"<h2>The maze runner</h2>",
        desc:"<p>One of my first large projects. This adventure map in Minecraft is based on the popular franchise with the same name.</p><p>I have since release lost access to the world files, which gave me a good reason to learn Git.</p>",
        img:"imgs/mazeRunner.gif",
        startyear:2015,
        endyear:2016,
        labels:[mcLabel, cmdblockLabel],
        width:900
    },

    {
        title:"<h2>Allied Abductees</h2>",
        desc:"<p>Submission for the 2021 GMTK game jam</p><p>Made in 48 hours with Unity and C# by a team of three.</p>",
        vid:"imgs/alliedabductees.mp4",
        startyear:2021,
        endyear:2021,
        labels:[unityLabel, csharpLabel],
        github:"https://github.com/TorbsT/AlliedAbductees",
        itch:"https://torbst.itch.io/allied-abductees",
        width:900

    },
    {
        title:"<h2>Memory game</h2>",
        desc:"<p>A memory game about matching pictures of various environments.</p><p>Made with Java by a team of two. This was our project for the course TDT4100 (2021).</p>",
        img:"imgs/memorygame.PNG",
        startyear:2021,
        endyear:2021,
        labels:[javaLabel],
        gitlab:"https://gitlab.stud.idi.ntnu.no/tdt4100/v2021/student_projects/tdt4100-prosjekt-marcussn"
    },
    {
        title:"<h1>O'Burger</h1>",
        desc:"<p>Obama's very official burger website</p><p>Made with HTML, JS and CSS by a team of five. This was our project for the course IT2805 (2020).</p>",
        img:"imgs/oburger.GIF",
        startyear:2020,
        endyear:2020,
        labels:[htmlLabel, jsLabel, cssLabel],
        github:"https://github.com/sindrimt/O-Burger",
        webp:"https://folk.ntnu.no/torbjss/Documents/html/"
    },

    {
        title:"<h1>(WIP) Frontegy</h1>",
        desc:"<p>A mix of chess and poker</p><p>Made in Unity/C# by me. This project is largely a sandbox for me to experiment with different code structures (2020-present).</p>",
        img:"imgs/frontegy.PNG",
        startyear:2020,
        //endyear:current
        labels:[unityLabel, csharpLabel],
        github:"https://github.com/TorbsT/Frontegy"
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

        console.log("c");

        var flexyEL = document.createElement("div");
        flexyEL.className = "flexy";

        var txtEL = document.createElement("div");
        txtEL.className = "txt";
        var titleEL = document.createElement("div");
        var descEL = document.createElement("div");
        titleEL.className = "title";
        descEL.className = "desc";
        titleEL.innerHTML = project.title;
        

        var descTextEL = document.createElement("div");
        descTextEL.innerHTML = project.desc;

        if (true) {
            var labelsEL = document.createElement("div");
            labelsEL.className = "labels";
            console.log("b");
    
            // Year
            var startyear = project.startyear;
            var endyear = project.endyear;
            if (startyear != null || endyear != null) {
                var label = {};
                label.bgcolor = "black";
                var txt = "";
                if (startyear == endyear) txt = startyear;
                else {
                    if (startyear != null) txt += startyear;
                    else txt += "unknown";
    
                    txt += " - ";
    
                    if (endyear != null) txt += endyear;
                    else txt += "present";
                }
                label.text = txt;
                addLabel(labelsEL, label);
            }
    
            // Languages/shit
            if (project.labels != null) {
                console.log("a");
                console.log(project.title + " has project label");
                for (var j = 0; j < project.labels.length; j++) {
                    var label = project.labels[j];
                    addLabel(labelsEL, label);
                }
            }
    
            }


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
            imgEL.className = "unselectable";
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
        
        descEL.appendChild(labelsEL);
        descEL.appendChild(descTextEL);
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

    anchorEL.className = "tooltip unselectable";

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
function sortByStartYear() {
    projects = projects.sort(function(a, b){ return b.startyear-a.startyear});
}
function sortByEndYear() {
    projects = projects.sort(function(a, b) { 
        if (b.endyear == null) return 1;
        if (a.endyear == null) return -1;
        return b.endyear-a.endyear;
    });
}
function addLabel(el, label) {
    console.log("Processing "+label.text);
    var labEL = document.createElement("div");
    labEL.className = "label unselectable";
    labEL.innerText = label.text;
    labEL.style.backgroundColor = label.bgcolor;
    labEL.style.color = "white";
    
    if (label.full != null) labEL.title = label.full;
    else labEL.title = label.text;

    el.appendChild(labEL);
}
console.log(projects);
sortByEndYear();
console.log(projects);
addProjects();