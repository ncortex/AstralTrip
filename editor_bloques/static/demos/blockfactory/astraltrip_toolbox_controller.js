
function getElementFromHTML(html){
	var aux=document.createElement('div');
	aux.innerHTML = html;
	return aux.firstChild;
}

function getXML(){


}

function appendXMLtoolboxes(){
	var xmlhttp, xmlhttp2, xmlhttp3;
	if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
		xmlhttp2 = new XMLHttpRequest();
		xmlhttp3 = new XMLHttpRequest();
	}
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		    document.body.appendChild(getElementFromHTML(xmlhttp.responseText));
		}
	}
	
	xmlhttp2.onreadystatechange = function() {
		if (xmlhttp2.readyState == 4 && xmlhttp2.status == 200) {
		    document.body.appendChild(getElementFromHTML(xmlhttp2.responseText));
		}
	}
	
	xmlhttp3.onreadystatechange = function() {
		if (xmlhttp3.readyState == 4 && xmlhttp3.status == 200) {
		    document.body.appendChild(getElementFromHTML(xmlhttp3.responseText));
		    Blockly.mainWorkspace.updateToolbox(xmlhttp3.responseText);
		}
	}
	
	xmlhttp.open("GET", "toolbox_workspacefactory.xml", true);
	xmlhttp.send();
	
	xmlhttp2.open("GET", "toolbox_blockfactory.xml", true);
	xmlhttp2.send();

	xmlhttp3.open("GET", "toolbox_main.xml", true);
	xmlhttp3.send();
}
