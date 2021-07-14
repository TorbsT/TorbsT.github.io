/*class Stat {
    constructor() {
        this.resetAll();
        this.setExercise(null);
    }
    resetAll() {

    }
    setExercise(id) {
        this.exerciseId = id;
        this.updateSpecs();
    }
    updateSpecs() {

    }
}
class Spec {
    constructor()
}
*/
function reset() {
    exerciseEL = document.getElementById("exercise");
    if (exerciseEL === undefined) console.error("No <div id='exercise'> found in document");
    exerciseEL.innerHTML = "";

    logSessionModeEL = document.createElement("button");
    logSessionModeEL.innerText = "Log new session";
    logSessionModeEL.mode = logSessionTag;
    logSessionModeEL.addEventListener("click", setMode);

    contentEL = document.createElement("div");
    contentEL.className = "exercise-content";

    exerciseEL.appendChild(logSessionModeEL);
    exerciseEL.appendChild(contentEL);
}
function setMode(el) {
    if (el == null) console.error("setMode button is null");
    var mode = el.target.mode;
    if (mode == null) console.error("setMode button doesn't have a mode");
    
    contentEL.innerHTML = "";
    if (mode == logSessionTag) setLogSessionMode();
}
function setLogSessionMode() {
    var dateInputEL = document.createElement("input");
    dateInputEL.type = "date";

    var addStatEL = document.createElement("button");
    addStatEL.innerText = "Add statistic to session";
    addStatEL.addEventListener("click", addStat);

    var statsEL = document.createElement("div");
    statsEL.id = statsId;

    var notesEL = document.createElement("textarea");
    notesEL.innerText = "Max 256 letters";

    var submitEL = document.createElement("input");
    submitEL.type = "submit";
    submitEL.innerText = "Sub2mit";

    contentEL.appendChild(dateInputEL);
    contentEL.appendChild(addStatEL);
    contentEL.appendChild(statsEL);
    contentEL.appendChild(notesEL);
    contentEL.appendChild(submitEL);
}
function addStat() {
    var statsEL = getStatsEL();

    var newStatEL = document.createElement("div");
    var date = new Date();
    newStatEL.innerText = "Hello there "+date.getSeconds();
    
    var selectExEL = document.createElement("select");
    addExSelectOptions(selectExEL);

    var specsEL = document.createElement("span");
    fillSpecs(specsEL);

    var removeStatWrapperEL = document.createElement("span");
    var removeStatEL = document.createElement("button");
    removeStatEL.innerText = "X";
    removeStatEL.addEventListener("click", removeStat);

    removeStatWrapperEL.appendChild(removeStatEL);

    newStatEL.appendChild(selectExEL);
    newStatEL.appendChild(specsEL);
    newStatEL.appendChild(removeStatWrapperEL);

    statsEL.appendChild(newStatEL);
}
function addExSelectOptions(selectEL) {
    for (var i = 0; i < 10; i++) {
        var optionEL = document.createElement("option");
        optionEL.value = i;
        optionEL.innerText = "Ex "+i;
        selectEL.appendChild(optionEL);
    }
}
function fillSpecs(specsEL) {
    specsEL.innerHTML = "asdsad";
}
function removeStat(e) {
    if (e === undefined) console.error("Called removeStat with undefined");
    var statEL = e.target.parentNode.parentNode;
    if (statEL == null) console.error("statEL is null");
    getStatsEL().removeChild(statEL);
}

function getStatsEL() {
    var statsEL = document.getElementById(statsId);
    if (statsEL === undefined) console.error("Couldn't find <div id='"+statsId+"'> in document");
    return statsEL;
}
var exerciseEL;
var logSessionModeEL;
var contentEL;

var logSessionTag = "logSession";
var statsId = "add-stats";

reset();