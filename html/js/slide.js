
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
    document.getElementById("word").innerHTML = current.id + " - " + current.word;
    //document.getElementById("desc").innerHTML = current.desc;
    holddesc = current.desc;
    //indexNum =indexNum++;

}

function onClickNext() {
	holddesc = "";
	document.getElementById("desc").innerHTML = "Check!";
	//document.getElementById("show").disabled = false;
    indexNum++;
    NextQuestion(indexNum);
    buttonEnable();
    //alert("from next " + indexNum);

}

function onClickPrevious() {
	holddesc = "";
	document.getElementById("desc").innerHTML = "Click!";
	//document.getElementById("show").disabled = false;
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
	//document.getElementById("show").disabled = true;
}

function myFunction() {
	  let text = "";
      for (let i = 0; i < shuffledGlossary.length; i++) {
      text += shuffledGlossary[i].id + " - " +shuffledGlossary[i].word + "<br>";
    }
     document.getElementById("data1").innerHTML = text;
  }
  
function popupCenter(url, title, w, h) {
	var left = (screen.width/2)-(w/2);
	var top = (screen.height/2)-(h/2);
	return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
}