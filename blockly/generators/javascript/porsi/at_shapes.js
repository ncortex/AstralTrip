'use strict';

goog.provide('Blockly.JavaScript.at_shapes');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['_2d_line'] = function(block) {
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1 = Blockly.JavaScript.valueToCode(block, 'y1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y2 = Blockly.JavaScript.valueToCode(block, 'y2', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = 'line('+value_x1+','+value_y1+','+value_x2+','+value_y2+');\n';
  return code;
};


Blockly.JavaScript['draw_2_points'] = function(block) {
  var dropdown_tipo = block.getFieldValue('tipo');
  var dropdown_mode = block.getFieldValue('mode');
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1 = Blockly.JavaScript.valueToCode(block, 'y1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y2 = Blockly.JavaScript.valueToCode(block, 'y2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.

  if(dropdown_tipo=="point"){
  	var code='point('+value_x1+','+value_y1+');\n';
  }
  if(dropdown_tipo=="line"){
  	var code = 'line('+value_x1+','+value_y1+','+value_x2+','+value_y2+');\n';
  }
  if(dropdown_tipo=="square"){
  	var code = 'line('+value_x1+','+value_y1+','+value_x2+','+value_y2+');\n';
  }
  if(dropdown_tipo=="triangle"){
  	if(dropdown_mode=="1"){
  		
  		//var code = 'triangle('+value_x1+','+value_y1+','+value_x2+','+value_y2+');\n';

  	}
  	if(dropdown_mode=="2")
  }
  }
  var code = dropdown_tipo+';\n';
  return code;
};