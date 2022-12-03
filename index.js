var unityLabel = { text:"Unity", bgcolor: "purple"};
var gddLabel = { text:"GDD", bgcolor: "purple", full:"Game Design Document"};
var csharpLabel = { text:"C#", bgcolor: "#871F78"};
var reactLabel = { text:"React", bgcolor: "blue"};
var htmlLabel = { text:"HTML", bgcolor: "red"};
var jsLabel = { text:"JS", bgcolor: "orange", full:"JavaScript"};
var cssLabel = { text:"CSS", bgcolor: "green"};
var phpLabel = { text:"PHP", bgcolor: "violet"};
var javaLabel = { text:"Java", bgcolor:"red"};
var mcLabel = {text:"MC", bgcolor:"green", full:"Minecraft"};
var cmdblockLabel = {text:"Command blocks", bgcolor:"magenta"};
var releasedLabel = {text:"Released", bgcolor:"green"};
var wipLabel = {text:"WIP", bgcolor:"red", full:"Work In Progress"};
var teamLabel = {text:"Team", bgcolor:"orange", full:"Made in teams"};
var soloLabel = {text:"Solo", bgcolor:"purple", full:"Made only by TorbsT"};
var jamLabel = {text:"Game jam", bgcolor:"red", full:"Made in a game jam"};
var sdLabel = {text:"Stable diffusion", bgcolor:"blue", full:"Made using stable diffusion (AI)"};
var firebaseLabel = {text:"Firebase", bgcolor:"orange", full:"Made using firebase"};

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
        title:"<h1>TorbuTils</h1>",
        desc:"<p>Utilities package for Unity. Includes functionality for graphs, noise generation, animations, and object pooling.</p>",
        img:"imgs/torbutils.png",
        github:"https://github.com/TorbsT/Torbutils",
        labels:[unityLabel, csharpLabel, releasedLabel, soloLabel],
        startyear:2021,
    },
    {
        title:"<h2>Battle for Hermannia</h2>",
        desc:"<p>Turn-based strategy game. Based on the board game with the same name. Made in collaboration with Immerse NTNU.</p>",
        img:"imgs/bfh.png",
        github:"https://github.com/immerse-ntnu/bfh-client",
        labels:[unityLabel, csharpLabel, wipLabel, teamLabel],
        startyear:2022,
    },
    {
        title:"<h1>Tech Through Time</h1>",
        desc:"<p>Tech Through Time is a design concept for a learning game. The idea is to progress through different eras while learning how to make real-world technology.</p>",
        youtube:"https://www.youtube.com/embed/McMZpKEG3_A",
        labels:[gddLabel, releasedLabel, teamLabel],
        pdf:"imgs/techthroughtime.pdf",
        startyear:2022,
        endyear:2022,
    },
    {
        title:"<h1>FitFighter</h1>",
        desc:"<p>Concept for an exergame. Players fight in one-on-one virtual boxing matches, and the one with better speed and skill wins. The game features pre-match warmups and post-match briefs to improve performance and health.</p>",
        youtube:"https://www.youtube.com/embed/rmNXm5p2Uu8",
        labels:[gddLabel, releasedLabel, teamLabel],
        pdf:"imgs/fitfighter.pdf",
        startyear:2022,
        endyear:2022,
    },
    {
        title:"<h1>GamerMeet</h1>",
        desc:"<p>Game design document providing an idea for gamifying social interaction. Users get rewards in partnered video games when completing challenges in the GamerMeet app. Challenges are powered by machine learning which helps people start socializing at a reasonable pace.</p>",
        youtube:"https://www.youtube.com/embed/x0e2AxPa-KE",
        labels:[gddLabel, releasedLabel, teamLabel, sdLabel],
        pdf:"imgs/gamermeet.pdf",
        startyear:2022,
        endyear:2022,
    },
    {
        title:"<h1>Hexaphobia</h1>",
        desc:"<p>Hexaphobia is a game about that scary number between 5 and 7. The game jam's theme was 'Roll of the dice', which I implemented as a high-risk high-reward ability where you quite literally roll the dice.</p>",
        img:"imgs/hexaphobia.png",
        labels:[unityLabel, csharpLabel, releasedLabel, soloLabel, jamLabel],
        startyear:2022,
        endyear:2022,
        github:"https://github.com/TorbsT/Hexaphobia",
        itch:"https://torbst.itch.io/hexaphobia",
    },
    {
        title:"<h1>Tiss</h1>",
        desc:"<p>Top-down horde/survival game. In order to survive for long, players must build and maintain a base. The problem is that the environment rotates and completely changes the map layout on a regular basis.</p>",
        youtube:"https://www.youtube.com/embed/5fmsrvn3kyU",
        labels:[unityLabel, csharpLabel, releasedLabel, soloLabel],
        startyear:2022,
        endyear:2022,
        github:"https://github.com/TorbsT/Tiss",
        itch:"https://torbst.itch.io/tiss",
    },
    {
        title:"<h1>DishWish</h1>",
        labels:[reactLabel, htmlLabel, jsLabel, cssLabel, firebaseLabel, releasedLabel, teamLabel],
        startyear:2022,
        endyear:2022,
        desc:"<p>A website for finding and sharing cooking recipes. Uses React, Firebase, and authentication through Google. Created by a diverse team practising agile development.</p>",
        img:"imgs/dishwish.png",
        gitlab:"https://gitlab.stud.idi.ntnu.no/tdt4140-2022/landsby-3/40/dishwish",
        webp:"https://dishwish.herokuapp.com"
    },
    {
        title:"<h1>Talgdat</h1>",
        desc:"<p>A unity application that can visualize the process of various sorting algorithms.</p>",
        vid:"imgs/talgdat.mp4",
        startyear:2021,
        endyear:2021,
        labels:[csharpLabel, unityLabel, releasedLabel, soloLabel],
        github:"https://github.com/TorbsT/Talgdat"
    },
    {
        title:"<h2>O'Burger: Barackening</h2>",
        desc:"<p>App for ordering food from O'Burger.</p><p>A continuation of the legendary O'Burger series, which now supports sending and retrieving orders on an external server.</p><p>This was our project for the course IT1901. Made by a team of four practising agile development.</p>",
        img:"imgs/oburger-barackening.png",
        startyear:2021,
        endyear:2021,
        labels:[javaLabel, releasedLabel, teamLabel],
        gitlab:"https://gitlab.stud.idi.ntnu.no/it1901/groups-2021/gr2137/gr2137",
        width:900
    },
    {
        title:"<h2>Allied Abductees</h2>",
        desc:"<p>Submission for the 2021 GMTK game jam.</p><p>Made in 48 hours with Unity and C# by a team of three. The theme was 'Joined together', which we implemented as controlling multiple conjoined characters.</p>",
        vid:"imgs/alliedabductees.mp4",
        startyear:2021,
        endyear:2021,
        labels:[unityLabel, csharpLabel, releasedLabel, teamLabel, jamLabel],
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
        labels:[javaLabel, teamLabel],
        gitlab:"https://gitlab.stud.idi.ntnu.no/tdt4100/v2021/student_projects/tdt4100-prosjekt-marcussn"
    },
    {
        title:"<h1>O'Burger</h1>",
        desc:"<p>Obama's <i>very</i> official burger website</p><p>Made with HTML, JS and CSS by a team of five. This was our project for the course IT2805 (2020).</p>",
        img:"imgs/oburger.GIF",
        startyear:2020,
        endyear:2020,
        labels:[htmlLabel, jsLabel, cssLabel, releasedLabel, teamLabel],
        github:"https://github.com/sindrimt/O-Burger",
        webp:"https://folk.ntnu.no/torbjss/Documents/html/"
    },

    {
        title:"<h2>The maze runner</h2>",
        desc:"<p>One of my first large projects. This adventure map in Minecraft is based on the popular franchise with the same name.</p><p>I have since release lost access to the world files, which gave me a good reason to learn Git.</p>",
        img:"imgs/mazeRunner.gif",
        startyear:2015,
        endyear:2016,
        labels:[mcLabel, cmdblockLabel, soloLabel],
        width:900
    },
    /*
    {
        title:"<h1>Research tracker</h1>",
        desc:"<p>Ballse. Cock, Even. random text stuffs at the very least</p>",
        img:"imgs/mazeRunner.gif",
        startyear:2019,
        endyear:2019,
        labels:[htmlLabel, cssLabel, phpLabel, soloLabel],
        width:900
    },
    */
    {
        title:"<h1>Frontegy</h1>",
        desc:"<p>A mix of chess and poker.</p><p>Frontegy was primarily a sandbox for me to experiment with different coding strategies. At the time I was inexperienced with Unity development and could therefore not make a finished product.</p>",
        img:"imgs/frontegy.PNG",
        startyear:2020,
        endyear:2021,
        labels:[unityLabel, csharpLabel, soloLabel],
        github:"https://github.com/TorbsT/Frontegy"
    }
];
var alwaysPlay = true;
var wrapperEL = document.getElementById("projectswrapper");

var projectELs = [];
var foundprojectsEL = document.getElementById("foundprojects");
var searchEL = document.getElementById("search");
var searchModeEL = document.getElementById("searchmode");
var searchHelpEL = document.getElementById("searchhelp");
var searchHelpTxtEL = document.getElementById("searchhelptxt");
searchHelpEL.addEventListener("mouseenter", showSearchHelp);
searchHelpEL.addEventListener("mouseleave", hideSearchHelp);
searchEL.addEventListener("input", search);
searchModeEL.addEventListener("click", search);

function search() {
    var input = searchEL.value;
    query = input.split(",");
    console.log(query);
    var union = searchModeEL.checked;
    var visibleCount = 0;
    for (var i = 0; i < projects.length; i++) {
        var matchProject = false;
        var projectEL = projectELs[i];
        var project = projects[i];
        for (var j = 0; j < query.length; j++) {
            var sentence = query[j].trim();
            var positiveSearch = true;
            if (sentence.startsWith("-")) {
                sentence = sentence.slice(1);
                positiveSearch = false;
            }
            sentence = sentence.trim().toLowerCase();
            
            var match = matchSentence(project, sentence);
            if (!positiveSearch) match = !match;

            if (union && match) {
                matchProject = true;
                break;
            }
            if (!union && !match) {
                break;
            }
            if (!union && match && j == query.length-1) matchProject = true;
        }

        if (matchProject) {
            projectEL.style.display = "block";
            visibleCount++;
        }
        else projectEL.style.display = "none";
    }

    foundprojectsEL.innerText = "Found "+visibleCount+" projects";

    function matchSentence(project, sentence) {
        
        if (project.title && project.title.toLowerCase().includes(sentence)) return true;
        if (project.itch && "itch.io".includes(sentence)) return true;
        if (project.github && "github".includes(sentence)) return true;
        if (project.gitlab && "gitlab".includes(sentence)) return true;
        if (project.pdf && "pdf".includes(sentence)) return true;
        if (project.labels) {
            for (var i = 0; i < project.labels.length; i++) {
                var lbl = project.labels[i];
                if (lbl.text && lbl.text.toLowerCase().includes(sentence)) return true;
                if (lbl.full && lbl.full.toLowerCase().includes(sentence)) return true;
                if (lbl.search && lbl.search.toLowerCase().includes(sentence)) return true;
            }
        }
        if (project.desc && project.desc.toLowerCase().includes(sentence)) return true; 
        if (project.startyear) {
            var currentYear = new Date().getFullYear();
            var fromYear = parseInt(project.startyear);
            var toYear;
            if (project.endyear) toYear = parseInt(project.endyear);
            else toYear = currentYear;

            for (var i = fromYear; i < toYear+1; i++) {
                if (i.toString().includes(sentence)) return true;
            }
        }
        return false;
    }
}
function showSearchHelp() {
    searchHelpTxtEL.style.display = "block";
}
function hideSearchHelp() {
    searchHelpTxtEL.style.display = "none";
}
function showLabelInfo(event) {
    var labEL = event.target;
    var label = labEL.label;

}
function clickLabel(event) {
    var labEL = event.target;
    var label = labEL.label;

    var sentence;
    if (label.search) sentence = label.search;
    else sentence = label.text;

    var query = searchEL.value;
    if (query == "") searchEL.value = sentence;
    else {
        // Check if it is already a criteria
        var sentences = query.split(",");
        var found = false;
        var prevNegative = false;
        for (var i = 0; i < sentences.length; i++) {
            var s = sentences[i].trim();
            var posS = s;
            if (s.startsWith("-")) {
                posS = s.slice(1);
                prevNegative = true;
            }
            
            console.log(posS);
            if (posS.toLowerCase() == sentence.toString().toLowerCase()) {
                sentences[i] = posS;
                found = true;
            } else {
                sentences[i] = s;
            }
            
        }

        if (found) searchEL.value = sentences.join(", ");
        else searchEL.value += ", "+sentence;
    }
    search();
}

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
                label.search = startyear;
                addLabel(labelsEL, label);
            }
    
            // Languages/shit
            if (project.labels != null) {
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
        if (project.pdf) linksEL.appendChild(addLink("imgs/pdf.PNG", project.pdf, "View PDF"));
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
        else if (project.youtube) {
            var iframeEL = document.createElement("iframe");
            iframeEL.src = project.youtube;
            iframeEL.width = "540";
            iframeEL.height = "300";
            iframeEL.frameborder = "0";
            iframeEL.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen";
            iframeEL.style.border = "none";
            iframeEL.allowFullscreen;
            imgWrapperEL.appendChild(iframeEL);
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
        projectELs.push(sectionEL);
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
    var labEL = document.createElement("div");
    labEL.label = label;
    labEL.addEventListener("click", clickLabel);
    labEL.className = "label unselectable";
    labEL.innerText = label.text;
    labEL.style.backgroundColor = label.bgcolor;
    labEL.style.color = "white";
    
    el.appendChild(labEL);
}
console.log(projects);
sortByEndYear();
console.log(projects);
addProjects();
search();  // Update "found X projects"