var data = window.location.search;
var parms = new URLSearchParams(data);
//document.getElementById("result").innerHTML = parms.get("fname");
var page = parms.get("page");
//alert(page);
var xmlhttp = new XMLHttpRequest();
var urlKey = "./json/key.json";
if (page == null) {
	//alert ("page is null");
	urlKey = "./html/json/key.json";
} else {
	urlKey = "./json/key.json"
}

//------Start reading json------------
//alert("Started");
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    //alert("I am ok");
    if (page == null || page == "key") {
		myHomePage(myArr);
	} else {
		let element = myArr.find(({ sourceid }) => sourceid === page);
		//alert("got element id " +element.sourceid);
		getSlideData(element);
	}
    
  }
};
//alert("Before get");
xmlhttp.open("GET", urlKey, true);
xmlhttp.send();
//---------------end reading json---------------

function getSlideData(element) {
	var dataUrl = "./json/" +element.sourceid + ".json";
	//alert("in getSlideData1 " + dataUrl + " topic = " + element.topic);
	document.getElementById("subject").innerHTML = element.topic;
	document.getElementById("slidedataurl").href = "./slidedata.html?page="+ element.sourceid;
	xmlhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	    var myArr = JSON.parse(this.responseText);
	    //alert("I am in getSlideData 2 length = "+myArr.length);
			handleQuestions(myArr);
		
	  }
	};
	//alert("Before get dataUrl = " + dataUrl);
	xmlhttp.open("GET", dataUrl, true);
	xmlhttp.send();
	
}

//--------------Start index page and key display-----------------------------------------------


function myHomePage(arr) {
	
  var i;
  if (page == "key") {
	  //alert(arr[0].sourceid);
		$(document).ready(function() {

			// Use the given data to create  
			// the table and display it 
			$('table').bootstrapTable({
				data : arr
			});
		});
  } else if (page == null){
	  //alert ("in tile");
	  //document.getElementById("count").innerHTML = arr[0].sourceid + " " +arr[2].sourceid;
	  //k = arr[3].display + " " + arr[3].url;
  	  var out = "";
  		for(i = 0; i < arr.length; i++) {
		    out = out + "<a href=\"./html/slide.html?page=" + arr[i].sourceid +  "\">" +
		    "<h2 class=\"column-4 " + arr[i].tileclass + "\">" +
		    arr[i].tilename + "</h2></a>";
		    //out = out + " " + arr[i].display + " " + arr[i].url;
    	}
    	document.getElementById("tilecontainer").innerHTML = out;
  }
  
}

//---------------------------------------------------------------------

var indexNum = 0;
let holddesc = "";
let shuffledGlossary = []; //empty array to hold shuffled selected questions
//let originalLength = glossary.length; set to 20 for now
let length = 19;  
//handleQuestions();

function handleQuestions(glossary) { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    let shuffled = [];
    //alert ("glossary length = " +glossary.length);
    //alert ("length of shuffel = " + length + " glossary length = " + glossary.length);
    if (glossary.length < length) {
		length = glossary.length - 1;
	}
	//alert ("length of shuffel 2 = " + length);
    while (shuffled.length <= length) {
        const random = glossary[Math.floor(Math.random() * glossary.length)]
        if (!shuffled.includes(random)) {
            shuffled.push(random);
        }
    }
    const dummydata = document.getElementById("dummydata");
    //var stringdata = shuffledGlossary.toString;
    //var stringdata = JSON.parse(shuffledGlossary);
    //alert("String data = " + stringdata);
    dummydata.dataset.value = JSON.stringify(shuffled);
    //alert("Dummy data = " + dummydata.dataset.value);
    
}

function NextQuestion(index) {
	//alert("In nextqueston shuffledGlossary 1 = " + shuffledGlossary);
	populateShuffledData();
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

function populateShuffledData(){
	//alert("I am in populateData");
	if (shuffledGlossary == "" ) {
		//alert("I am in if condition of populateData");
		document.getElementById("preB").disabled = true;
		const dummydata = document.getElementById("dummydata");
		//alert("Dymmydata in Next Q = " + dummydata.dataset.value);
		shuffledGlossary = JSON.parse(dummydata.dataset.value);
		//alert("In nextqueston shuffledGlossary 2  = " + shuffledGlossary);
	 }
}
function listData() {
	  //let text = "";
	  populateShuffledData();
	  
	  //alert(document.getElementById("listdata").dataset.value);
	  
	  if (document.getElementById("listdata").dataset.value == 0) {
		  document.getElementById("listdata").dataset.value = 1;
		  document.getElementById("listdata").innerHTML = "Hide List All";
		  document.getElementById("list").style.display = "block";
	  } else {
		  document.getElementById("listdata").dataset.value = 0;
		  document.getElementById("listdata").innerHTML = "List All";
		  document.getElementById("list").style.display = "none";
	  }
	  
     $(document).ready(function() {
			$('#list').bootstrapTable({
				data : shuffledGlossary
			});
		});
 }
  
function popupCenter(url, title, w, h) {
	var left = (screen.width/2)-(w/2);
	var top = (screen.height/2)-(h/2);
	return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
}