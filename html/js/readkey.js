var data = window.location.search;
var parms = new URLSearchParams(data);
//document.getElementById("result").innerHTML = parms.get("fname");
var page = parms.get("page");
alert(page);
var xmlhttp = new XMLHttpRequest();
//var url = "../html/json/key.json";
var url = "./json/key.json";
if (page == null) {
	alert ("page is null");
	url = "./html/json/key.json";
} else {
	url = "./json/key.json"
}

//var tilelist = [];
alert("Started");
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    //tilelist = myArr;
    //alert("First " + tilelist[0].id);
    alert("I am ok");
    myHomePage(myArr);
  }
};
alert("Before get");
xmlhttp.open("GET", url, true);
xmlhttp.send();
//alert(tilelist[0].id);

//myFunction(tilelist);

function myHomePage(arr) {
	
  var i;
  if (page == "key") {
	  alert(arr[0].sourceid);
		$(document).ready(function() {

			// Use the given data to create  
			// the table and display it 
			$('table').bootstrapTable({
				data : arr
			});
		});
  } else if (page == null){
	  alert ("in tile");
	  document.getElementById("count").innerHTML = arr[0].sourceid + " " +arr[2].sourceid;
	  //k = arr[3].display + " " + arr[3].url;
  	  var out = "";
  		for(i = 0; i < arr.length; i++) {
		    out = out + "<a href=\"./html/slide.html?page=" + arr[i].sourceid +  "\">" +
		    "<h2 class=\"" + arr[i].tileclass + "\">" +
		    arr[i].tilename + "</h2></a>";
		    //out = out + " " + arr[i].display + " " + arr[i].url;
    	}
    	document.getElementById("tilecontainer").innerHTML = out;
  }
  
}
function popupCenter(url, title, w, h) {
	var left = (screen.width/2)-(w/2);
	var top = (screen.height/2)-(h/2);
	return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
}


