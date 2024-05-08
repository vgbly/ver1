
let shuffledGlossary = []; //empty array to hold shuffled selected questions
//let originalLength = glossary.length; set to 20 for now

let length = 19;  
function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledGlossary.length <= length) {
        const random = glossary[Math.floor(Math.random() * glossary.length)]
        if (!shuffledGlossary.includes(random)) {
            shuffledGlossary.push(random);
        }
    }
}

var indexNum = 0;
handleQuestions();
document.getElementById("preB").disabled = true;

let holddesc = "";

function NextQuestion(index) {
    //alert(index);
    //handleQuestions();
    const current = shuffledGlossary[index];
    document.getElementById("word").innerHTML = current.word;
    //document.getElementById("desc").innerHTML = current.desc;
    holddesc = current.desc;
    //indexNum =indexNum++;

}

function onClickNext() {
	holddesc = "";
	document.getElementById("desc").innerHTML = "Check!";
	document.getElementById("show").disabled = false;
    indexNum++;
    NextQuestion(indexNum);
    buttonEnable();
    //alert("from next " + indexNum);

}

function onClickPrevious() {
	holddesc = "";
	document.getElementById("desc").innerHTML = "Click!";
	document.getElementById("show").disabled = false;
    indexNum--;
    NextQuestion(indexNum);
    buttonEnable();
    //alert("from pre " + indexNum);
}

function buttonEnable() {
    if (indexNum == 0) {
        document.getElementById("preB").disabled = true;
        document.getElementById("nextB").disabled = false;
    } else if (indexNum == shuffledGlossary.length - 1) {
        document.getElementById("preB").disabled = false;
        document.getElementById("nextB").disabled = true;
    } else {
        document.getElementById("preB").disabled = false;
        document.getElementById("nextB").disabled = false;
    }
}

function showDesc() {
	document.getElementById("desc").innerHTML = holddesc;
	document.getElementById("show").disabled = true;
}