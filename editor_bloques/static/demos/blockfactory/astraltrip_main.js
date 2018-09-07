const low = require('lowdb')
require('electron-chromecast');
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
const fs = require('fs')
const {dialog} = require('electron').remote
const {app, BrowserWindow, ipcMain} = require('electron');
const {download} = require('electron-dl');
var cambiosCodigoGuardados=true;
var cambiosProyectoGuardados=true;
var pathProyectoActual=null;
var runtime_code="";
var runtime_code_setup="";
var runtime_preload="";
var ejecutando_sketch=false;
var livecoding_activo=false;
var window_sketch;
var sketchFile ;
var nombresSonidos = [];
// Set some defaults (required if your JSON file is empty)
db.defaults({ blocks: [], projects: [], codigo_actual:'' })
	.write()

function evaluar_codigo_bloques_db(){
	bloques=db.get("blocks").value();
	bloques.forEach(function(element) {
		eval(element.codigo);
	});
}

function reset_workspace(){
	
}

function load_sound(){
	console.log("load sound");
	pathSonido = dialog.showOpenDialog({properties:['openFile']});
	nombre=pathSonido[0].replace(/^.*[\\\/]/, '').replace(/\.[^/.]+$/, "");
	nombresSonidos.push(nombre);
	runtime_code_setup+="sound_"+nombre+"=loadSound('"+pathSonido[0]+"');\n";
	nuevo_bloque=Blockly.mainWorkspace.newBlock('at_sound_variable');
	Blockly.mainWorkspace.addTopBlock(nuevo_bloque);
	
}


function guardar_codigo(){
 // if(document.getElementById("codigo_guardado").innerHTML)
	document.getElementById("codigo_guardado").innerHTML= document.getElementById("codigaso").value;
	document.getElementById("codigaso").innerText=document.getElementById("codigo_guardado").innerText;
	cambiosCodigoGuardados=false;
	blocklyFactory.blockLibraryController.updateButtons(cambiosCodigoGuardados);
} 

function inicializarCodigoNuevoBloque(){
 document.getElementById("codigo_guardado").innerHTML="// TODO: Assemble JavaScript into code variable.\nvar code = '...;\\n';\n";
 document.getElementById("codigaso").innerText="// TODO: Assemble JavaScript into code variable.\nvar code = '...;\\n';\n";
 document.getElementById("codigaso").value="// TODO: Assemble JavaScript into code variable.\nvar code = '...;\\n';\n";
}

function guardar_bloque(tipo, codigo, json_definicion){
	// Add a post
	db.get('blocks')
		.push({ id: tipo, codigo: codigo, json: json_definicion})
		.write();
	cambiosCodigoGuardados=true;
}

function get_json_bloques(){
  var resultado=db.get("blocks").value();
  return resultado;
}

/* Guarda el toolbox de la factoria para que se use en el workspace principal
function guardar_toolbox(){
  console.log(blocklyFactory.exportXmlFile(WorkspaceFactoryController.MODE_TOOLBOX))
  stash.put('toolbox',(blocklyFactory.exportXmlFile(WorkspaceFactoryController.MODE_TOOLBOX)))
}*/

// Restaura el toolbox en el editor para que el usuario lo personalice
function restaurar_toolbox(){
  
}

function guardar_toolbox(toolbox){
  stash.set('toolbox',toolbox)
}

function get_json_proyecto(){
	var json_a_devolver
	json_a_devolver = { 
		"workspace": Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(Blockly.mainWorkspace)),
		"blocks": get_json_bloques()
	}

	return JSON.stringify(json_a_devolver);
}

function new_project(inicializar=false){
	console.log("new_project");
	
	pathProyectoActual=null;
	document.title="AstralTrip";
	Blockly.mainWorkspace.clear();
	cambiosCodigoGuardados=true;
	cambiosProyectoGuardados=true;
	runtime_code="";
	runtime_code_setup="";
	runtime_preload="";
	ejecutando_sketch=false;
	
	if(inicializar==true){
		Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom('<xml xmlns=\"http://www.w3.org/1999/xhtml\"><variables></variables><block type=\"at_setup3\" id=\"ZsPQ6)}TeH}13LpN9%gR\" x=\"191\" y=\"68\"><statement name=\"codigo\"><block type=\"at_canvas_size\" id=\"QqOiup[rx1X2ivc;yHBA\"><field name=\"tresd\">FALSE</field><value name=\"w\"><block type=\"at_sys_variables\" id=\"X+UXhIjkFjl5,5#lu$jD\"><field name=\"variable\">windowWidth</field></block></value><value name=\"h\"><block type=\"at_sys_variables\" id=\"t[_6abF`3J#{oddLp^7o\"><field name=\"variable\">windowHeight</field></block></value></block></statement></block><block type=\"at_draw\" id=\"Qz7%[YU(+X+S8%wNN~8=\" x=\"190\" y=\"183\"><statement name=\"codigo\"><block type=\"at_background_color\" id=\"^y$BPgJmLo@v^c]R8#R5\"><value name=\"color\"><shadow type=\"colour_picker\" id=\".ZL!#,.,kE9/[G#|XZ)J\"><field name=\"COLOUR\">#00ACAB</field></shadow><block type=\"colour_random\" id=\"eZ(~4QVY5V1x@f=7U0?9\"></block></value></block></statement></block></xml>'), Blockly.mainWorkspace)
	}
	if(window_sketch!=null){
		window_sketch.close();
	}
}

function save_project(saveAs=false){
	console.log("save_project");
	console.log(saveAs);
	if(pathProyectoActual==null || saveAs==true){
		pathProyectoActual = dialog.showSaveDialog({properties:['saveFile']});
	}
		//console.log('Jsonpryecto'+fs.writeFileSync(pathProyectoActual[0], get_json_proyecto()));
		//fs.writeFileSync(pathProyectoActual[0], get_json_proyecto());
		//sketchFile = fs.createWriteStream(pathProyectoActual[0], {flags: 'wr', encoding: 'utf-8',mode: 0666});
		//sketchFile.write(get_json_proyecto());
		//sketchFile.end();
		//download(BrowserWindow.getFocusedWindow(), pathProyectoActual[0]).then(dl => console.log(dl.getSavePath())).catch(console.error);
	if(pathProyectoActual.constructor === Array){
		pathProyectoActual = pathProyectoActual[0];
	}
	fs.writeFile(pathProyectoActual, get_json_proyecto(), function (err) {
		if (err) return console.log('Failed to save the file at '+pathProyectoActual);
		document.title=pathProyectoActual+" - AstralTrip";
		cambiosProyectoGuardados=true;
	});
}

function open_project(){
	console.log("open_project");
	new_project();
	pathProyectoActual = dialog.showOpenDialog({properties:['openFile']});
    
  try {
    var data=JSON.parse(fs.readFileSync(pathProyectoActual[0],'utf-8'));
    console.log(data['workspace'])
    document.title=pathProyectoActual+" - AstralTrip"
	
    Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(data['workspace']), Blockly.mainWorkspace)
    console.log("AA"+Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(Blockly.mainWorkspace)));
  }catch(err){
    console.log('Failed to load the file at '+pathProyectoActual); 
  }
}

function run_project(){
	console.log("running");
	//db.set("codigo_actual",String(Blockly.JavaScript.workspaceToCode(workspacePlayground))).write();
	stash.set("codigo_actual",("function preload(){\n"+runtime_preload+"\n}\n"+String(Blockly.JavaScript.workspaceToCode(workspacePlayground)).replace(/(\r\n\t|\n|\r\t)/gm," ")));
	if(ejecutando_sketch){return null}
	window_sketch= window.open("frame_sketch3.html","sketchprocessing","name=sketchprocessing,titlebar=no");
	var timer = setInterval(function() { 
		if(window_sketch.closed) {
		   clearInterval(timer);
		   ejecutando_sketch=false;
		   document.getElementById("runButton").innerText="Run";
		}
	}, 100);
	ejecutando_sketch=true;
	document.getElementById("runButton").innerText="Reload";
	//window_sketch.onload = function() {
		//	document.getElementById("scriptetaso").innerText=Blockly.JavaScript.workspaceToCode(workspacePlayground);
		//};


}

function activar_livecoding(siono){
	if(siono){
		Blockly.mainWorkspace.addChangeListener(run_project);
	}else{
		Blockly.mainWorkspace.removeChangeListener(run_project);
	}
}

function guardar_bloque_pro(tipo, codigo, json_definicion, json_definicion_molde){
	console.log(json_definicion_molde);
	var bloque = db.get('blocks').find({ id: tipo });
	if(bloque){
		db.get('blocks').remove({ id: tipo }).write();
	}
	db.get('blocks')
		.push({ id: tipo, codigo: codigo, json: json_definicion, json_molde: json_definicion_molde })
		.write();
	cambiosCodigoGuardados=true;
	eval(codigo);
}
function onclickgenerateBlockLibraryButton(){
	var block = FactoryUtils.getRootBlock(BlockFactory.mainWorkspace);
	var block_preview = BlockFactory.previewWorkspace.getAllBlocks()[0];
	
	var cleanCode = String(document.getElementById('generatorPre').innerHTML).replace('<textarea id=\"codigaso\" oninput=\"guardar_codigo()\" style=\"width: 95%;height: 3em;\">', '//inicio_codigo_usuario\n').replace("</textarea>",'\n//fin_codigo_usuario');
	var nombreBloque= getTipoBloqueActual();
	//console.log(String(Blockly.Xml.blockToDom(block_preview).outerHTML));
	guardar_bloque_pro(nombreBloque,
					   cleanCode,
					   document.getElementById('languagePre').innerHTML,
					   String(Blockly.Xml.blockToDomWithXY(block).outerHTML));		 
}

function restaurar_codigo_bloque(tipoBloque){
	var bloque = db.get('blocks').find({ id: tipoBloque });
	console.log("aaa"+tipoBloque);
	var cleanCode = bloque.get('codigo').value();
	// Deshace las sustituciones que hizo en la funcion onclickgenerateBlockLibraryButton
	var dirtyCode = cleanCode.replace('//inicio_codigo_usuario\n', '<textarea id=\"codigaso\" oninput=\"guardar_codigo()\" style=\"width: 95%;height: 3em;\">').replace("\n//fin_codigo_usuario",'</textarea>');
	//console.log(dirtyCode);
	var veryCleanCode = cleanCode.split('//inicio_codigo_usuario\n')[1].split('\n//fin_codigo_usuario')[0];
	console.log(veryCleanCode);
	//expresion = /(capítulo \d+(\.\d)*)/i;
	set_codigo_guardado(veryCleanCode);
	document.getElementById('generatorPre').innerHTML = dirtyCode;
	cambiosCodigoGuardados=true;
}


function set_codigo_guardado(nuevo_codigo){
 // if(document.getElementById("codigo_guardado").innerHTML)
	document.getElementById("codigo_guardado").innerHTML= nuevo_codigo;
 // document.getElementById("codigaso").innerText=document.getElementById("codigo_guardado").innerText;
} 

function getTipoBloqueActual(){
	return String(document.getElementById('saveToBlockLibraryButton').innerHTML).split('"')[1];
}

function borrarBloqueDB(tipoBloque){
	db.get('blocks').remove({ id: tipoBloque }).write();
}

function borrarBloqueActualDB(){
	borrarBloqueDB(getTipoBloqueActual());
}
