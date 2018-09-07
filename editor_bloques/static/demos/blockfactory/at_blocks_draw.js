Blockly.JavaScript['colour_random'] = function(block) {
  // Generate a random colour.
  var code = 'p.color(p.random(255),p.random(255),p.random(255))';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['math_random_int'] = function(block) {
  // Random integer between [X] and [Y].
  var argument0 = Blockly.JavaScript.valueToCode(block, 'FROM',
      Blockly.JavaScript.ORDER_COMMA) || '0';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'TO',
      Blockly.JavaScript.ORDER_COMMA) || '0';
  var functionName = Blockly.JavaScript.provideFunction_(
      'mathRandomInt',
      ['p.' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '= function' +
          '(a, b) {',
       '  if (a > b) {',
       '    // Swap a and b to ensure a is smalleh.',
       '    var c = a;',
       '    a = b;',
       '    b = c;',
       '  }',
       '  return Math.floor(Math.random() * (b - a + 1) + a);',
       '};']);
  var code = 'p.' + functionName + '(' + argument0 + ', ' + argument1 + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['colour_blend'] = function(block) {
  // Blend two colours together.
  var c1 = Blockly.JavaScript.valueToCode(block, 'COLOUR1',
      Blockly.JavaScript.ORDER_COMMA) || '\'#000000\'';
  var c2 = Blockly.JavaScript.valueToCode(block, 'COLOUR2',
      Blockly.JavaScript.ORDER_COMMA) || '\'#000000\'';
  var ratio = Blockly.JavaScript.valueToCode(block, 'RATIO',
      Blockly.JavaScript.ORDER_COMMA) || 0.5;
  var functionName = Blockly.JavaScript.provideFunction_(
      'colourBlend',
      ['p.' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + " = function" +
          '(c1, c2, ratio) {',
       '  ratio = Math.max(Math.min(Number(ratio), 1), 0);',
       '  var r1 = parseInt(c1.substring(1, 3), 16);',
       '  var g1 = parseInt(c1.substring(3, 5), 16);',
       '  var b1 = parseInt(c1.substring(5, 7), 16);',
       '  var r2 = parseInt(c2.substring(1, 3), 16);',
       '  var g2 = parseInt(c2.substring(3, 5), 16);',
       '  var b2 = parseInt(c2.substring(5, 7), 16);',
       '  var r = Math.round(r1 * (1 - ratio) + r2 * ratio);',
       '  var g = Math.round(g1 * (1 - ratio) + g2 * ratio);',
       '  var b = Math.round(b1 * (1 - ratio) + b2 * ratio);',
       '  r = (\'0\' + (r || 0).toString(16)).slice(-2);',
       '  g = (\'0\' + (g || 0).toString(16)).slice(-2);',
       '  b = (\'0\' + (b || 0).toString(16)).slice(-2);',
       '  return \'#\' + r + g + b;',
       '};']);
  var code = "p." + functionName + '(' + c1 + ', ' + c2 + ', ' + ratio + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['colour_picker'] = function(block) {
  // Colour picker.
  var code = 'p.color(\'' + block.getFieldValue('COLOUR') + '\')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['at_stroke_size'] = function(block) {
  var value_size = Blockly.JavaScript.valueToCode(block, 'size', Blockly.JavaScript.ORDER_ATOMIC);
  //inicio_codigo_usuario
  var code = 'p.strokeWeight('+value_size+');\n';
  //fin_codigo_usuario
  
  return code;
};

Blockly.Blocks['at_stroke_size'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_stroke_size\",\n  \"message0\": \"Set stroke size to: %1\",\n  \"args0\": [\n    {\n      \"type\": \"input_value\",\n      \"name\": \"size\",\n      \"check\": \"Number\"\n    }\n  ],\n  \"previousStatement\": \"setup\",\n  \"nextStatement\": \"setup\",\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
};

Blockly.JavaScript['at_color_blend'] = function(block) {
  var value_c1 = Blockly.JavaScript.valueToCode(block, 'c1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_c2 = Blockly.JavaScript.valueToCode(block, 'c2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ratio = Blockly.JavaScript.valueToCode(block, 'ratio', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = 'p.lerpColor('+value_c1+','+value_c2+','+value_ratio+')';     

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['at_color_blend'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_color_blend\",\n  \"message0\": \"Blend %1 and %2 with ratio %3\",\n  \"args0\": [\n    {\n      \"type\": \"input_value\",\n      \"name\": \"c1\",\n      \"check\": \"Colour\",\n      \"align\": \"RIGHT\"\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"c2\",\n      \"check\": \"Colour\",\n      \"align\": \"RIGHT\"\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"ratio\",\n      \"check\": \"Number\"\n    }\n  ],\n  \"output\": \"Colour\",\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
};

Blockly.JavaScript['at_noise_seed'] = function(block) {
  var value_seed = Blockly.JavaScript.valueToCode(block, 'seed', Blockly.JavaScript.ORDER_ATOMIC);
  //inicio_codigo_usuario
var code = 'p.noiseSeed('+value_seed+');\n';
//fin_codigo_usuario
  return code;
};

Blockly.Blocks['at_noise_seed'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_noise_seed\",\n  \"message0\": \"Set random seed %1\",\n  \"args0\": [\n    {\n      \"type\": \"input_value\",\n      \"name\": \"seed\",\n      \"check\": \"Number\"\n    }\n  ],\n  \"inputsInline\": false,\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
};

Blockly.JavaScript['at_noise'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
var code = 'p.noise('+value_x+','+value_y+','+value_z+')\n';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['at_noise'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_noise\",\n  \"message0\": \"Noise x: %1 [y]: %2 [z]: %3\",\n  \"args0\": [\n    {\n      \"type\": \"input_value\",\n      \"name\": \"x\",\n      \"check\": \"Number\"\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"y\",\n      \"check\": \"Number\",\n      \"align\": \"RIGHT\"\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"z\",\n      \"check\": \"Number\",\n      \"align\": \"RIGHT\"\n    }\n  ],\n  \"inputsInline\": false,\n  \"output\": \"Number\",\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
};

Blockly.JavaScript['at_random_gaussian'] = function(block) {
  var value_mean = Blockly.JavaScript.valueToCode(block, 'mean', Blockly.JavaScript.ORDER_ATOMIC);
  var value_sd = Blockly.JavaScript.valueToCode(block, 'sd', Blockly.JavaScript.ORDER_ATOMIC);
var code = 'p.randomGaussian('+value_mean+','+value_sd+')\n';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['at_random_gaussian'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_random_gaussian\",\n  \"message0\": \"Gaussian random with mean: %1 standard deviation: %2\",\n  \"args0\": [\n    {\n      \"type\": \"input_value\",\n      \"name\": \"mean\",\n      \"check\": \"Number\"\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"sd\",\n      \"check\": \"Number\",\n      \"align\": \"RIGHT\"\n    }\n  ],\n  \"inputsInline\": false,\n  \"output\": \"Number\",\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
};

Blockly.JavaScript['at_random_seed'] = function(block) {
  var value_seed = Blockly.JavaScript.valueToCode(block, 'seed', Blockly.JavaScript.ORDER_ATOMIC);
var code = 'p.randomSeed('+value_seed+')\n';
  return code;
};

Blockly.Blocks['at_random_seed'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_random_seed\",\n  \"message0\": \"Set random seed %1\",\n  \"args0\": [\n    {\n      \"type\": \"input_value\",\n      \"name\": \"seed\",\n      \"check\": \"Number\"\n    }\n  ],\n  \"inputsInline\": false,\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
};

Blockly.JavaScript['at_random_fraction'] = function(block) {
	var code = 'p.random()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['at_random_fraction'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_random_fraction\",\n  \"message0\": \"Random fraction\",\n  \"inputsInline\": true,\n  \"output\": \"Number\",\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
};

Blockly.JavaScript['at_random_from_to'] = function(block) {
  var value_from = Blockly.JavaScript.valueToCode(block, 'from', Blockly.JavaScript.ORDER_ATOMIC);
  var value_to = Blockly.JavaScript.valueToCode(block, 'to', Blockly.JavaScript.ORDER_ATOMIC);
	var code = 'p.random('+value_from+','+value_to+')\n';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['at_random_from_to'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_random_from_to\",\n  \"message0\": \"Random int from %1 to %2\",\n  \"args0\": [\n    {\n      \"type\": \"input_value\",\n      \"name\": \"from\",\n      \"check\": \"Number\"\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"to\",\n      \"check\": \"Number\"\n    }\n  ],\n  \"inputsInline\": true,\n  \"output\": \"Number\",\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
};

Blockly.JavaScript['at_blendmode'] = function(block) {
  var dropdown_mode = block.getFieldValue('mode');
  //inicio_codigo_usuario
  var code = 'p.blendMode('+dropdown_mode+');\n';     
  //fin_codigo_usuario
  return code;
};

Blockly.Blocks['at_blendmode'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_blendmode\",\n  \"message0\": \"Change blend mode to:  %1\",\n  \"args0\": [\n    {\n      \"type\": \"field_dropdown\",\n      \"name\": \"mode\",\n      \"options\": [\n        [\n          \"NORMAL\",\n          \"p.NORMAL\"\n        ],\n        [\n          \"ADD\",\n          \"p.ADD\"\n        ],\n        [\n          \"DARK\",\n          \"p.DARK\"\n        ],\n        [\n          \"DARKEST\",\n          \"p.DARKEST\"\n        ],\n        [\n          \"LIGHTEST\",\n          \"p.LIGHTEST\"\n        ],\n        [\n          \"DIFFERENCE\",\n          \"p.DIFFERENCE\"\n        ],\n        [\n          \"EXCLUSION\",\n          \"p.EXCLUSION\"\n        ],\n        [\n          \"MULTIPLY\",\n          \"p.MULTIPLY\"\n        ],\n        [\n          \"SCREEN\",\n          \"p.SCREEN\"\n        ],\n        [\n          \"REPLACE\",\n          \"p.REPLACE\"\n        ],\n        [\n          \"OVERLAY\",\n          \"p.OVERLAY\"\n        ],\n        [\n          \"HARD_LIGHT\",\n          \"p.HARD_LIGHT\"\n        ],\n        [\n          \"SOFT_LIGHT\",\n          \"p.SOFT_LIGHT\"\n        ],\n        [\n          \"DODGE\",\n          \"p.DODGE\"\n        ],\n        [\n          \"BURN\",\n          \"p.BURN\"\n        ],\n        [\n          \"BLEND\",\n          \"p.BLEND\"\n        ]\n      ]\n    }\n  ],\n  \"inputsInline\": false,\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
};

Blockly.JavaScript['at_text'] = function(block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  //inicio_codigo_usuario
var code = 'p.text('+value_text+','+value_x+','+value_y+');\n'; 
//fin_codigo_usuario
  return code;
};

Blockly.Blocks['at_text'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_text\",\n  \"message0\": \"draw text: %1 at x: %2 y: %3\",\n  \"args0\": [\n    {\n      \"type\": \"input_value\",\n      \"name\": \"text\"\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"x\",\n      \"align\": \"RIGHT\"\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"y\",\n      \"align\": \"RIGHT\"\n    }\n  ],\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
};

Blockly.JavaScript['at_text_leading'] = function(block) {
  var value_leading = Blockly.JavaScript.valueToCode(block, 'leading', Blockly.JavaScript.ORDER_ATOMIC);
  //inicio_codigo_usuario
var code = 'p.textLeading('+value_leading+');\n'; 
//fin_codigo_usuario
  return code;
};

Blockly.Blocks['at_text_leading'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_text_leading\",\n  \"message0\": \"Set text leading to: %1\",\n  \"args0\": [\n    {\n      \"type\": \"input_value\",\n      \"name\": \"leading\"\n    }\n  ],\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
};

Blockly.JavaScript['at_text_style'] = function(block) {
  var dropdown_style = block.getFieldValue('style');
  //inicio_codigo_usuario
 var code = 'p.textStyle('+dropdown_style+');\n';
//fin_codigo_usuario
  return code;
};

Blockly.Blocks['at_text_style'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_text_style\",\n  \"message0\": \"Set text style to: %1\",\n  \"args0\": [\n    {\n      \"type\": \"field_dropdown\",\n      \"name\": \"style\",\n      \"options\": [\n        [\n          \"NORMAL\",\n          \"p.NORMAL\"\n        ],\n        [\n          \"ITALIC\",\n          \"p.ITALIC\"\n        ],\n        [\n          \"BOLD\",\n          \"p.BOLD\"\n        ]\n      ]\n    }\n  ],\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
};

Blockly.JavaScript['at_text_align'] = function(block) {
  var dropdown_align = block.getFieldValue('align');
  //inicio_codigo_usuario
// TODO: Assemble JavaScript into code variable.
var code = 'p.textAlign('+dropdown_align+');\n'; 
//fin_codigo_usuario
  return code;
};

Blockly.Blocks['at_text_align'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_text_align\",\n  \"message0\": \"Set text align to: %1\",\n  \"args0\": [\n    {\n      \"type\": \"field_dropdown\",\n      \"name\": \"align\",\n      \"options\": [\n        [\n          \"RIGHT\",\n          \"p.RIGHT\"\n        ],\n        [\n          \"CENTER\",\n          \"p.CENTER\"\n        ],\n        [\n          \"LEFT\",\n          \"p.LEFT\"\n        ]\n      ]\n    }\n  ],\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
};

Blockly.JavaScript['at_text_size'] = function(block) {
  var value_size = Blockly.JavaScript.valueToCode(block, 'size', Blockly.JavaScript.ORDER_ATOMIC);
  //inicio_codigo_usuario
var code = 'p.textSize('+value_size+');\n'; 
//fin_codigo_usuario
  return code;
};

Blockly.Blocks['at_text_size'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_text_size\",\n  \"message0\": \"Set text size to: %1\",\n  \"args0\": [\n    {\n      \"type\": \"input_value\",\n      \"name\": \"size\"\n    }\n  ],\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
};

Blockly.JavaScript['at_event_to_tune_desk'] = function(block) {
  var dropdown_input_type = block.getFieldValue('input_type');
  var statements_codigo = Blockly.JavaScript.statementToCode(block, 'codigo');
  var text_event_label = block.getFieldValue('event_label');
  //inicio_codigo_usuario
  var code = 'addEventToTuneDesk("'+statements_codigo+'","'+dropdown_input_type+'","'+text_event_label+'");\n';      
  //fin_codigo_usuario
  return code;
};

Blockly.Blocks['at_event_to_tune_desk'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_event_to_tune_desk\",\n  \"message0\": \"Add  %1 to tune desk %2 to trigger: %3 With label: %4\",\n  \"args0\": [\n    {\n      \"type\": \"field_dropdown\",\n      \"name\": \"input_type\",\n      \"options\": [\n        [\n          \"button\",\n          \"button\"\n        ]\n      ]\n    },\n    {\n      \"type\": \"input_dummy\"\n    },\n    {\n      \"type\": \"input_statement\",\n      \"name\": \"codigo\"\n    },\n    {\n      \"type\": \"field_input\",\n      \"name\": \"event_label\",\n      \"text\": \"label\"\n    }\n  ],\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
};

Blockly.JavaScript['at_apply_matrix'] = function(block) {
  var value_a = Blockly.JavaScript.valueToCode(block, 'a', Blockly.JavaScript.ORDER_ATOMIC);
  var value_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
  var value_c = Blockly.JavaScript.valueToCode(block, 'c', Blockly.JavaScript.ORDER_ATOMIC);
  var value_d = Blockly.JavaScript.valueToCode(block, 'd', Blockly.JavaScript.ORDER_ATOMIC);
  var value_e = Blockly.JavaScript.valueToCode(block, 'e', Blockly.JavaScript.ORDER_ATOMIC);
  var value_f = Blockly.JavaScript.valueToCode(block, 'f', Blockly.JavaScript.ORDER_ATOMIC);
  //inicio_codigo_usuario
code="p.applyMatrix("+value_a+","+value_b+","+value_c+","+value_d+","+value_e+","+value_f+");\n";  
//fin_codigo_usuario
  return code;
};

Blockly.Blocks['at_apply_matrix'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_apply_matrix\",\n  \"message0\": \"Apply matrix: a: %1 (only 2D mode) b: %2 %3 c: %4 d: %5 e: %6 f: %7\",\n  \"args0\": [\n    {\n      \"type\": \"input_value\",\n      \"name\": \"a\",\n      \"check\": \"Number\",\n      \"align\": \"RIGHT\"\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"b\",\n      \"check\": \"Number\",\n      \"align\": \"RIGHT\"\n    },\n    {\n      \"type\": \"field_image\",\n      \"src\": \"https://p5js.org/reference/assets/transformation-matrix.png\",\n      \"width\": 80,\n      \"height\": 80,\n      \"alt\": \"*\"\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"c\",\n      \"check\": \"Number\",\n      \"align\": \"RIGHT\"\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"d\",\n      \"check\": \"Number\",\n      \"align\": \"RIGHT\"\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"e\",\n      \"check\": \"Number\",\n      \"align\": \"RIGHT\"\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"f\",\n      \"check\": \"Number\",\n      \"align\": \"RIGHT\"\n    }\n  ],\n  \"inputsInline\": false,\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
}

Blockly.JavaScript['at_loop'] = function(block) {
  //inicio_codigo_usuario
var code = 'p.loop();\n';

//fin_codigo_usuario
  return code;
};

Blockly.Blocks['at_loop'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_loop\",\n  \"message0\": \"Loop\",\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
}

Blockly.JavaScript['at_no_stroke'] = function(block) {
  //inicio_codigo_usuario
code="p.noStroke();\n"; 
//fin_codigo_usuario
  return code;
};

Blockly.Blocks['at_no_stroke'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_no_stroke\",\n  \"message0\": \"No stroke\",\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
}

Blockly.JavaScript['at_fill_color'] = function(block) {
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  //inicio_codigo_usuario
var code = 'p.fill('+value_color+');\n';

//fin_codigo_usuario
  return code;
};

Blockly.Blocks['at_fill_color'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_fill_color\",\n  \"message0\": \"Set fill color to: %1\",\n  \"args0\": [\n    {\n      \"type\": \"input_value\",\n      \"name\": \"color\",\n      \"check\": \"Colour\"\n    }\n  ],\n  \"previousStatement\": \"setup\",\n  \"nextStatement\": \"setup\",\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
}

Blockly.JavaScript['at_canvas_size'] = function(block) {
  var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
  var checkbox_tresd = block.getFieldValue('tresd') == 'TRUE';
  var value_h = Blockly.JavaScript.valueToCode(block, 'h', Blockly.JavaScript.ORDER_ATOMIC);
  if(checkbox_tresd){ 
  var code = 'p.createCanvas('+value_w+','+value_h+',p.WEBGL);\n';  
}else{
  var code = 'p.createCanvas('+value_w+','+value_h+');\n';  
}
//fin_codigo_usuario
  return code;
};

Blockly.Blocks['at_canvas_size'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_canvas_size\",\n  \"message0\": \"Set canvas size to w: %1 %2 3D \\t            \\t\\t\\t\\t\\t\\t h: %3\",\n  \"args0\": [\n    {\n      \"type\": \"input_value\",\n      \"name\": \"w\",\n      \"check\": \"Number\"\n    },\n    {\n      \"type\": \"field_checkbox\",\n      \"name\": \"tresd\",\n      \"checked\": true\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"h\",\n      \"check\": \"Number\",\n      \"align\": \"RIGHT\"\n    }\n  ],\n  \"previousStatement\": \"setup\",\n  \"nextStatement\": \"setup\",\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
}

Blockly.JavaScript['at_reset_matrix'] = function(block) {
  //inicio_codigo_usuario
  code="p.resetMatrix();\n";  
  //fin_codigo_usuario
  return code;
};

Blockly.Blocks['at_reset_matrix'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_reset_matrix\",\n  \"message0\": \"Reset transformation matrix\",\n  \"inputsInline\": false,\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
}

Blockly.JavaScript['at_background_color'] = function(block) {
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  //inicio_codigo_usuario
var code = 'p.background('+value_color+');\n';    
//fin_codigo_usuario
  return code;
};

Blockly.Blocks['at_background_color'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_background_color\",\n  \"message0\": \"Set background to: %1\",\n  \"args0\": [\n    {\n      \"type\": \"input_value\",\n      \"name\": \"color\",\n      \"check\": \"Colour\"\n    }\n  ],\n  \"inputsInline\": false,\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
}

Blockly.JavaScript['at_setup3'] = function(block) {
  var statements_codigo = Blockly.JavaScript.statementToCode(block, 'codigo');
  //inicio_codigo_usuario
var code = 'p.setup = function() {'+statements_codigo+'eval(runtime_code_setup);openTuneDesk();};\n';     
 
//fin_codigo_usuario
  return code;
};

Blockly.Blocks['at_setup3'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_setup3\",\n  \"message0\": \"Setup %1 %2\",\n  \"args0\": [\n    {\n      \"type\": \"input_dummy\"\n    },\n    {\n      \"type\": \"input_statement\",\n      \"name\": \"codigo\"\n    }\n  ],\n  \"colour\": 105,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
}

Blockly.JavaScript['at_draw'] = function(block) {
  var statements_codigo = Blockly.JavaScript.statementToCode(block, 'codigo');
  //inicio_codigo_usuario
var code = 'p.draw = function() {'+statements_codigo+'eval(runtime_code);};\n';     
  
//fin_codigo_usuario
  return code;
};

Blockly.Blocks['at_draw'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_draw\",\n  \"message0\": \"Draw %1 %2\",\n  \"args0\": [\n    {\n      \"type\": \"input_dummy\"\n    },\n    {\n      \"type\": \"input_statement\",\n      \"name\": \"codigo\"\n    }\n  ],\n  \"colour\": 105,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
}

Blockly.JavaScript['at_stroke_color'] = function(block) {
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  //inicio_codigo_usuario
var code = 'p.stroke('+value_color+');\n';

//fin_codigo_usuario
  return code;
};

Blockly.Blocks['at_stroke_color'] = {
  	init: function() {
  		this.jsonInit(JSON.parse( "{\n  \"type\": \"at_stroke_color\",\n  \"message0\": \"Set stroke color to: %1\",\n  \"args0\": [\n    {\n      \"type\": \"input_value\",\n      \"name\": \"color\",\n      \"check\": \"Colour\"\n    }\n  ],\n  \"previousStatement\": \"setup\",\n  \"nextStatement\": \"setup\",\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
}

Blockly.JavaScript['at_add_to_tune_desk'] = function(block) {
  var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
  var dropdown_input_type = block.getFieldValue('input_type');
  //inicio_codigo_usuario
var code = 'addToTuneDesk("'+variable_var+'","'+dropdown_input_type+'");\n';

//fin_codigo_usuario
  return code;
};

Blockly.Blocks['at_add_to_tune_desk'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_add_to_tune_desk\",\n  \"message0\": \"Tune %1 with %2\",\n  \"args0\": [\n    {\n      \"type\": \"field_variable\",\n      \"name\": \"var\",\n      \"variable\": \"item\"\n    },\n    {\n      \"type\": \"field_dropdown\",\n      \"name\": \"input_type\",\n      \"options\": [\n        [\n          \"slider\",\n          \"slider\"\n        ]\n      ]\n    }\n  ],\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
}

Blockly.JavaScript['at_sys_variables'] = function(block) {
  var dropdown_variable = block.getFieldValue('variable');
  var code = " p."+dropdown_variable+" ";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['at_sys_variables'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_sys_variables\",\n  \"message0\": \"%1\",\n  \"args0\": [\n    {\n      \"type\": \"field_dropdown\",\n      \"name\": \"variable\",\n      \"options\": [\n        [\n          \"frameCount\",\n          \"frameCount\"\n        ],\n        [\n          \"focused\",\n          \"focused\"\n        ],\n        [\n          \"displayWidth\",\n          \"displayWidth\"\n        ],\n        [\n          \"displayHeight\",\n          \"displayHeight\"\n        ],\n        [\n          \"windowWidth\",\n          \"windowWidth\"\n        ],\n        [\n          \"windowHeight\",\n          \"windowHeight\"\n        ],\n        [\n          \"width\",\n          \"width\"\n        ],\n        [\n          \"height\",\n          \"height\"\n        ]\n      ]\n    }\n  ],\n  \"output\": null,\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
}

Blockly.JavaScript['at_key_event'] = function(block) {
  var dropdown_keyevent = block.getFieldValue('keyevent');
  // TODO: Assemble JavaScript into code variable.
  var code = ' p.'+dropdown_keyevent+" ";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['at_key_event'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_key_event\",\n  \"message0\": \"%1\",\n  \"args0\": [\n    {\n      \"type\": \"field_dropdown\",\n      \"name\": \"keyevent\",\n      \"options\": [\n        [\n          \"mouseIsPressed\",\n          \"mouseIsPressed\"\n        ],\n        [\n          \"mouseButton\",\n          \"mouseButton\"\n        ],\n        [\n          \"mouseX\",\n          \"mouseX\"\n        ],\n        [\n          \"mouseY\",\n          \"mouseY\"\n        ],\n        [\n          \"pmouseX\",\n          \"pmouseX\"\n        ],\n        [\n          \"pmouseY\",\n          \"pmouseY\"\n        ],\n        [\n          \"keyIsPressed\",\n          \"keyIsPressed\"\n        ],\n        [\n          \"key\",\n          \"key\"\n        ]\n      ]\n    }\n  ],\n  \"output\": null,\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
}

Blockly.JavaScript['at_sound_variable'] = function(block) {
  var text_soundvar = block.getFieldValue('soundvar');
  //inicio_codigo_usuario
var code = " "+text_soundvar+" ";  
//fin_codigo_usuario
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['at_sound_variable'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_sound_variable\",\n  \"message0\": \"♪♫♬ %1\",\n  \"args0\": [\n    {\n      \"type\": \"field_input\",\n      \"name\": \"soundvar\",\n      \"text\": \"default\"\n    }\n  ],\n  \"output\": null,\n  \"colour\": 165,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
}
Blockly.JavaScript['at_translate'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
  //inicio_codigo_usuario
code = "p.translate("+value_x+","+value_y+","+value_z+");\n";   
//fin_codigo_usuario
  return code;
};

Blockly.Blocks['at_translate'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_translate\",\n  \"message0\": \"Translate x: %1 y: %2 [z]: %3\",\n  \"args0\": [\n    {\n      \"type\": \"input_value\",\n      \"name\": \"x\",\n      \"check\": \"Number\"\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"y\",\n      \"check\": \"Number\",\n      \"align\": \"RIGHT\"\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"z\",\n      \"check\": \"Number\",\n      \"align\": \"RIGHT\"\n    }\n  ],\n  \"inputsInline\": false,\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
}

Blockly.JavaScript['at_rotate'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  //inicio_codigo_usuario
code = "p.rotate("+value_x+");\n";   
//fin_codigo_usuario
  return code;
};

Blockly.Blocks['at_rotate'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_rotate\",\n  \"message0\": \"Rotate : %1\",\n  \"args0\": [\n    {\n      \"type\": \"input_value\",\n      \"name\": \"x\",\n      \"check\": \"Number\"\n    }\n  ],\n  \"inputsInline\": false,\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
}

Blockly.JavaScript['at_no_fill'] = function(block) {
  //inicio_codigo_usuario
code = "p.noFill();\n";   
//fin_codigo_usuario
  return code;
};

Blockly.Blocks['at_no_fill'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_no_fill\",\n  \"message0\": \"No fill\",\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
}

Blockly.JavaScript['at_angle_mode'] = function(block) {
  var dropdown_mode = block.getFieldValue('mode');
  //inicio_codigo_usuario
code = "p.angleMode("+dropdown_mode+");\n";   
//fin_codigo_usuario
  return code;
};

Blockly.Blocks['at_angle_mode'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_angle_mode\",\n  \"message0\": \"Set angle mode to: %1\",\n  \"args0\": [\n    {\n      \"type\": \"field_dropdown\",\n      \"name\": \"mode\",\n      \"options\": [\n        [\n          \"Degrees\",\n          \"p.DEGREES\"\n        ],\n        [\n          \"Radians\",\n          \"p.RADIANS\"\n        ]\n      ]\n    }\n  ],\n  \"inputsInline\": false,\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
}

Blockly.JavaScript['at_rotate2'] = function(block) {
  var angle_x = block.getFieldValue('x');
  //inicio_codigo_usuario
code = "p.rotate("+angle_x+");\n"; 
//fin_codigo_usuario
  return code;
};

Blockly.Blocks['at_rotate2'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_rotate2\",\n  \"message0\": \"Rotate : %1\",\n  \"args0\": [\n    {\n      \"type\": \"field_angle\",\n      \"name\": \"x\",\n      \"angle\": 90\n    }\n  ],\n  \"inputsInline\": false,\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
}

Blockly.JavaScript['at_smooth'] = function(block) {
  //inicio_codigo_usuario
code = "p.smooth();\n"; 
//fin_codigo_usuario
  return code;
};

Blockly.Blocks['at_smooth'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_smooth\",\n  \"message0\": \"Set smooth on\",\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
}

Blockly.JavaScript['at_no_smooth'] = function(block) {
  //inicio_codigo_usuario
code = "p.noSmooth();\n"; 
//fin_codigo_usuario
  return code;
};

Blockly.Blocks['at_no_smooth'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_no_smooth\",\n  \"message0\": \"Set smooth off\",\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
}

Blockly.JavaScript['at_rotatex'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  //inicio_codigo_usuario
code = "p.rotateX("+value_x+");\n";  
//fin_codigo_usuario
  return code;
};

Blockly.Blocks['at_rotatex'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_rotatex\",\n  \"message0\": \"Rotate around x : %1\",\n  \"args0\": [\n    {\n      \"type\": \"input_value\",\n      \"name\": \"x\",\n      \"check\": \"Number\"\n    }\n  ],\n  \"inputsInline\": false,\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
}

Blockly.JavaScript['at_rotatey'] = function(block) {
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  //inicio_codigo_usuario
code = "p.rotateY("+value_y+");\n";  
//fin_codigo_usuario
  return code;
};

Blockly.Blocks['at_rotatey'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_rotatey\",\n  \"message0\": \"Rotate around y : %1\",\n  \"args0\": [\n    {\n      \"type\": \"input_value\",\n      \"name\": \"y\",\n      \"check\": \"Number\"\n    }\n  ],\n  \"inputsInline\": false,\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
}

Blockly.JavaScript['at_scale'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
  //inicio_codigo_usuario
code = "p.scale("+value_x+","+value_y+","+value_z+");\n"; 
//fin_codigo_usuario
  return code;
};

Blockly.Blocks['at_scale'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_scale\",\n  \"message0\": \"Scale x: %1 [y]: %2 [z]: %3\",\n  \"args0\": [\n    {\n      \"type\": \"input_value\",\n      \"name\": \"x\",\n      \"check\": \"Number\"\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"y\",\n      \"check\": \"Number\",\n      \"align\": \"RIGHT\"\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"z\",\n      \"check\": \"Number\",\n      \"align\": \"RIGHT\"\n    }\n  ],\n  \"inputsInline\": false,\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
}

Blockly.JavaScript['at_rotatez'] = function(block) {
  var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
  //inicio_codigo_usuario
code = "p.rotateZ("+value_z+");\n"; 
//fin_codigo_usuario
  return code;
};


Blockly.Blocks['at_rotatez'] = {
  	init: function() {
  		this.jsonInit(JSON.parse("{\n  \"type\": \"at_rotatez\",\n  \"message0\": \"Rotate around z : %1\",\n  \"args0\": [\n    {\n      \"type\": \"input_value\",\n      \"name\": \"z\",\n      \"check\": \"Number\"\n    }\n  ],\n  \"inputsInline\": false,\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 230,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}"));
  	}
}
Blockly.JavaScript['at_set_framerate'] = function(block) {
  var value_framerate = Blockly.JavaScript.valueToCode(block, 'framerate', Blockly.JavaScript.ORDER_ATOMIC);
    //inicio_codigo_usuario
    var code = 'p.frameRate('+value_framerate+');\n';
    //fin_codigo_usuario
    return code;
};

Blockly.JavaScript['at_draw_line_2d'] = function(block) {
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1 = Blockly.JavaScript.valueToCode(block, 'y1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y2 = Blockly.JavaScript.valueToCode(block, 'y2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p.line('+value_x1+','+value_y1+','+value_x2+','+value_y2+');\n';
  return code;
};

Blockly.JavaScript['at_draw_arc_2d'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
  var value_h = Blockly.JavaScript.valueToCode(block, 'h', Blockly.JavaScript.ORDER_ATOMIC);
  var angle_start = block.getFieldValue('start');
  var angle_end = block.getFieldValue('end');
  var code = 'p.arc('+value_x+','+value_y+','+value_w+','+value_h+','+angle_start+','+angle_end+');\n';  
  return code;
};

Blockly.JavaScript['at_draw_rect_2d'] = function(block) {
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1 = Blockly.JavaScript.valueToCode(block, 'y1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
  var value_h = Blockly.JavaScript.valueToCode(block, 'h', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_mode = block.getFieldValue('mode');
  if(dropdown_mode=="center"){
  	var code = 'p.rectMode(p.CENTER);\n'
  }else{
  	var code = 'p.rectMode(p.CORNER);\n'
  }
  code += 'p.rect('+value_x1+','+value_y1+','+value_w+','+value_h+');\n';
  return code;
};

Blockly.JavaScript['at_draw_round_rect_2d'] = function(block) {
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_mode = block.getFieldValue('mode');
  var value_y1 = Blockly.JavaScript.valueToCode(block, 'y1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
  var value_h = Blockly.JavaScript.valueToCode(block, 'h', Blockly.JavaScript.ORDER_ATOMIC);
  var value_tlradius = Blockly.JavaScript.valueToCode(block, 'tlradius', Blockly.JavaScript.ORDER_ATOMIC);
  var value_trradius = Blockly.JavaScript.valueToCode(block, 'trradius', Blockly.JavaScript.ORDER_ATOMIC);
  var value_blradius = Blockly.JavaScript.valueToCode(block, 'blradius', Blockly.JavaScript.ORDER_ATOMIC);
  var value_brradius = Blockly.JavaScript.valueToCode(block, 'brradius', Blockly.JavaScript.ORDER_ATOMIC);
  if(dropdown_mode=="center"){
  	var code = 'p.rectMode(p.CENTER);\n'
  }else{
  	var code = 'p.rectMode(p.CORNER);\n'
  }
  code += 'p.rect('+value_x1+','+value_y1+','+value_w+','+value_h+','+value_tlradius+','+value_trradius+','+value_brradius+','+value_blradius+');\n';  
  return code;
};

Blockly.JavaScript['at_draw_ellipse_2d'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
  var value_h = Blockly.JavaScript.valueToCode(block, 'h', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_mode = block.getFieldValue('mode');
  if(dropdown_mode=="center"){
  	var code = 'p.ellipseMode(p.CENTER);\n'
  }else{
  	var code = 'p.ellipseMode(p.CORNER);\n'
  }
  code += 'p.ellipse('+value_x+','+value_y+','+value_w+','+value_h+');\n';
  return code;
};

Blockly.JavaScript['at_draw_point_2d'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p.point('+value_x+','+value_y+');\n';
  return code;
};

Blockly.JavaScript['at_draw_quad_2d'] = function(block) {
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1 = Blockly.JavaScript.valueToCode(block, 'y1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y2 = Blockly.JavaScript.valueToCode(block, 'y2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x3 = Blockly.JavaScript.valueToCode(block, 'x3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y3 = Blockly.JavaScript.valueToCode(block, 'y3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x4 = Blockly.JavaScript.valueToCode(block, 'x4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y4 = Blockly.JavaScript.valueToCode(block, 'y4', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p.quad('+value_x1+','+value_y1+','+value_x2+','+value_y2+','+value_x3+','+value_y3+','+value_x4+','+value_y4+');\n';
  return code;
};

Blockly.JavaScript['at_draw_triangle_2d'] = function(block) {
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1 = Blockly.JavaScript.valueToCode(block, 'y1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y2 = Blockly.JavaScript.valueToCode(block, 'y2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x3 = Blockly.JavaScript.valueToCode(block, 'x3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y3 = Blockly.JavaScript.valueToCode(block, 'y3', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p.triangle('+value_x1+','+value_y1+','+value_x2+','+value_y2+','+value_x3+','+value_y3+');\n';
  return code;
};

Blockly.JavaScript['at_transform_translate'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p.translate('+value_x+','+value_y+');\n';
  return code;
};

Blockly.JavaScript['at_transform_rotate'] = function(block) {
  var angle_amount = block.getFieldValue('amount');
  var code = 'p.rotate('+angle_amount+');\n';
  return code;
};

Blockly.JavaScript['at_transform_scale'] = function(block) {
  var value_amount = Blockly.JavaScript.valueToCode(block, 'amount', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p.scale('+value_amount+');\n';
  return code;
};

Blockly.JavaScript['at_smooth'] = function(block) {
  var code = 'p.smooth();\n';
  return code;
};

Blockly.JavaScript['at_smooth_no'] = function(block) {
  var code = 'p.noSmooth();\n';
  return code;
};

Blockly.JavaScript['at_draw_box_3d'] = function(block) {
  var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
  var value_h = Blockly.JavaScript.valueToCode(block, 'h', Blockly.JavaScript.ORDER_ATOMIC);
  var value_d = Blockly.JavaScript.valueToCode(block, 'd', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p.box('+value_w+','+value_h+','+value_d+');\n';
  return code;
};

Blockly.JavaScript['at_draw_sphere_3d'] = function(block) {
  var value_radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p.sphere('+value_radius+');\n';
  return code;
};

Blockly.JavaScript['at_draw_cylinder_3d'] = function(block) {
  var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
  var value_h = Blockly.JavaScript.valueToCode(block, 'h', Blockly.JavaScript.ORDER_ATOMIC);
  var checkbox_top = block.getFieldValue('top') == 'TRUE';
  var value_dx = Blockly.JavaScript.valueToCode(block, 'dx', Blockly.JavaScript.ORDER_ATOMIC);
  var checkbox_bottom = block.getFieldValue('bottom') == 'TRUE';
  var value_dy = Blockly.JavaScript.valueToCode(block, 'dy', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p.cylinder('+value_w+','+value_h+','+value_dx+','+value_dy+','+checkbox_top+','+checkbox_bottom+');\n';
  return code;
};

Blockly.Blocks['at_draw_cylinder_3d'] = {
  init: function() {
JSON.parse("{\n  \"type\": \"at_draw_cylinder_3d\",\n  \"message0\": \"Draw cylinder 3D. Radius: %1 h: %2 %3 Top cap            X detail: %4 %5 Bottom cap      X detail: %6\",\n  \"args0\": [\n    {\n      \"type\": \"input_value\",\n      \"name\": \"w\",\n      \"check\": \"Number\"\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"h\",\n      \"check\": \"Number\",\n      \"align\": \"RIGHT\"\n    },\n    {\n      \"type\": \"field_checkbox\",\n      \"name\": \"top\",\n      \"checked\": true\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"dx\",\n      \"check\": \"Number\",\n      \"align\": \"RIGHT\"\n    },\n    {\n      \"type\": \"field_checkbox\",\n      \"name\": \"bottom\",\n      \"checked\": true\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"dy\",\n      \"check\": \"Number\",\n      \"align\": \"RIGHT\"\n    }\n  ],\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 75,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}")
  }
};


Blockly.JavaScript['at_draw_plane_3d'] = function(block) {
  var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
  var value_h = Blockly.JavaScript.valueToCode(block, 'h', Blockly.JavaScript.ORDER_ATOMIC);
  var value_dx = Blockly.JavaScript.valueToCode(block, 'dx', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_dy = Blockly.JavaScript.valueToCode(block, 'dy', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p.plane('+value_w+','+value_h+','+value_dx+','+value_dy+');\n';
  return code;
};

Blockly.Blocks['at_draw_plane_3d'] = {
  init: function() {
JSON.parse("{\n  \"type\": \"at_draw_plane_3d\",\n  \"message0\": \"Draw plane 3D w: %1 h: %2 X detail %3 Y detail %4\",\n  \"args0\": [\n    {\n      \"type\": \"input_value\",\n      \"name\": \"w\",\n      \"check\": \"Number\"\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"h\",\n      \"check\": \"Number\",\n      \"align\": \"RIGHT\"\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"dx\",\n      \"check\": \"Number\",\n      \"align\": \"RIGHT\"\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"dy\",\n      \"check\": \"Number\",\n      \"align\": \"RIGHT\"\n    }\n  ],\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 75,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}")
  }
};

Blockly.JavaScript['at_draw_torus_3d'] = function(block) {
  var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
  var value_h = Blockly.JavaScript.valueToCode(block, 'h', Blockly.JavaScript.ORDER_ATOMIC);
  var value_dx = Blockly.JavaScript.valueToCode(block, 'dx', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_dy = Blockly.JavaScript.valueToCode(block, 'dy', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p.torus('+value_w+','+value_h+','+value_dx+','+value_dy+');\n';
  return code;
};

Blockly.Blocks['at_draw_plane_3d'] = {
  init: function() {
JSON.parse("{\n  \"type\": \"at_draw_torus_3d\",\n  \"message0\": \"Draw torus 3D. Radius: %1 Tube radius: %2 X detail %3 Y detail %4\",\n  \"args0\": [\n    {\n      \"type\": \"input_value\",\n      \"name\": \"w\",\n      \"check\": \"Number\"\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"h\",\n      \"check\": \"Number\",\n      \"align\": \"RIGHT\"\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"dx\",\n      \"check\": \"Number\",\n      \"align\": \"RIGHT\"\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"dy\",\n      \"check\": \"Number\",\n      \"align\": \"RIGHT\"\n    }\n  ],\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 75,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}")
  }
};


Blockly.JavaScript['at_draw_ellipsoid_3d'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
  var value_dx = Blockly.JavaScript.valueToCode(block, 'dx', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_dy = Blockly.JavaScript.valueToCode(block, 'dy', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p.ellipsoid('+value_x+','+value_y+','+value_z+','+value_dx+','+value_dy+');\n';
  return code;
};

Blockly.Blocks['at_draw_ellipsoid_3d'] = {
  init: function() {
JSON.parse("{\n  \"type\": \"at_draw_ellipsoid_3d\",\n  \"message0\": \"Draw ellipsoid 3D x: %1 y: %2 z: %3 X detail %4 Y detail %5\",\n  \"args0\": [\n    {\n      \"type\": \"input_value\",\n      \"name\": \"x\",\n      \"check\": \"Number\"\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"y\",\n      \"check\": \"Number\",\n      \"align\": \"RIGHT\"\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"z\",\n      \"check\": \"Number\",\n      \"align\": \"RIGHT\"\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"dx\",\n      \"check\": \"Number\",\n      \"align\": \"RIGHT\"\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"dy\",\n      \"check\": \"Number\",\n      \"align\": \"RIGHT\"\n    }\n  ],\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 75,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}")
  }
};

Blockly.JavaScript['at_draw_cone_3d'] = function(block) {
  var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
  var value_h = Blockly.JavaScript.valueToCode(block, 'h', Blockly.JavaScript.ORDER_ATOMIC);
  var value_dx = Blockly.JavaScript.valueToCode(block, 'dx', Blockly.JavaScript.ORDER_ATOMIC);
  var checkbox_cap = block.getFieldValue('cap') == 'TRUE';
  var value_dy = Blockly.JavaScript.valueToCode(block, 'dy', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p.cone('+value_w+','+value_h+','+value_dx+','+value_dy+','+checkbox_cap+');\n';
  return code;
};

Blockly.Blocks['at_draw_cone_3d'] = {
  init: function() {
JSON.parse("{\n  \"type\": \"at_draw_cone_3d\",\n  \"message0\": \"Draw cone 3D. Radius: %1 h: %2  X detail: %3 %4 Cap                  Y detail: %5\",\n  \"args0\": [\n    {\n      \"type\": \"input_value\",\n      \"name\": \"w\",\n      \"check\": \"Number\"\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"h\",\n      \"check\": \"Number\",\n      \"align\": \"RIGHT\"\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"dx\",\n      \"check\": \"Number\",\n      \"align\": \"RIGHT\"\n    },\n    {\n      \"type\": \"field_checkbox\",\n      \"name\": \"cap\",\n      \"checked\": true\n    },\n    {\n      \"type\": \"input_value\",\n      \"name\": \"dy\",\n      \"check\": \"Number\",\n      \"align\": \"RIGHT\"\n    }\n  ],\n  \"previousStatement\": null,\n  \"nextStatement\": null,\n  \"colour\": 75,\n  \"tooltip\": \"\",\n  \"helpUrl\": \"\"\n}")
  }
};


/*
Blockly.JavaScript['at_draw'] = function(block) {
  var statements_codigo = Blockly.JavaScript.statementToCode(block, 'codigo');
  var code = 'void draw(){'+statements_codigo+'};\n';  
  return code;
};

Blockly.JavaScript['at_setup'] = function(block) {
  var statements_codigo = Blockly.JavaScript.statementToCode(block, 'codigo');
  var code = 'void setup(){'+statements_codigo+'};\n';  
  return code;
};*/

Blockly.JavaScript['at_set_background_color'] = function(block) {
  var colour_name = block.getFieldValue('NAME');
  var code = 'p.background('+colour_name+');\n';
  return code;
};

Blockly.JavaScript['at_set_fill_color'] = function(block) {
  var colour_name = block.getFieldValue('NAME');
  var code = 'p.fill('+colour_name+');\n';
  return code;
};

Blockly.JavaScript['at_set_stroke_color'] = function(block) {
  var colour_name = block.getFieldValue('NAME');
  var code = 'p.stroke('+colour_name+');\n';
  return code;
};




// Definiciones
Blockly.Blocks['at_draw_line_2d'] = {
  init: function() {
    this.appendValueInput("x1")
        .setCheck("Number")
        .appendField("Draw line 2D  x1:");
    this.appendValueInput("y1")
        .setCheck("Number")
        .appendField("y1:");
    this.appendValueInput("x2")
        .setCheck("Number")
        .appendField("x2:");
    this.appendValueInput("y2")
        .setCheck("Number")
        .appendField("y2:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['at_draw_arc_2d'] = {
  init: function() {
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("Draw arc 2D  x:");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y:");
    this.appendValueInput("w")
        .setCheck("Number")
        .appendField("w:");
    this.appendValueInput("h")
        .setCheck("Number")
        .appendField("h:");
    this.appendDummyInput()
        .appendField("start:")
        .appendField(new Blockly.FieldAngle(0), "start");
    this.appendDummyInput()
        .appendField("end:")
        .appendField(new Blockly.FieldAngle(90), "end");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['at_draw_rect_2d'] = {
  init: function() {
    this.appendValueInput("x1")
        .setCheck("Number")
        .appendField("Draw rectangle 2D   x1:");
    this.appendValueInput("y1")
        .setCheck("Number")
        .appendField("y1:");
    this.appendValueInput("w")
        .setCheck("Number")
        .appendField("w:");
    this.appendValueInput("h")
        .setCheck("Number")
        .appendField("h:");
    this.appendDummyInput()
        .appendField("mode:")
        .appendField(new Blockly.FieldDropdown([["Center","center"], ["Corner","corner"]]), "mode");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['at_draw_round_rect_2d'] = {
  init: function() {
    this.appendValueInput("x1")
        .setCheck("Number")
        .appendField("Draw round-corner rectangle 2D   x1:");
    this.appendValueInput("y1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("mode:")
        .appendField(new Blockly.FieldDropdown([["Center","center"], ["Corner","corner"]]), "mode")
        .appendField("\t   ")
        .appendField("      |  y1:");
    this.appendValueInput("w")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("w:");
    this.appendValueInput("h")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("h:");
    this.appendValueInput("tlradius")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Top-left radius");
    this.appendValueInput("trradius")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Top-right radius");
    this.appendValueInput("blradius")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Bottom-left radius");
    this.appendValueInput("brradius")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Botom-right radius");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['at_draw_ellipse_2d'] = {
  init: function() {
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("Draw ellipse 2D  x:");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y:");
    this.appendValueInput("w")
        .setCheck("Number")
        .appendField("w:");
    this.appendValueInput("h")
        .setCheck("Number")
        .appendField("h:");
    this.appendDummyInput()
        .appendField("mode:")
        .appendField(new Blockly.FieldDropdown([["Center","center"], ["Corner","corner"]]), "mode");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['at_draw_point_2d'] = {
  init: function() {
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("Draw point 2D  x:");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['at_draw_quad_2d'] = {
  init: function() {
    this.appendValueInput("x1")
        .setCheck("Number")
        .appendField("Draw quad 2D   x1:");
    this.appendValueInput("y1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y1:");
    this.appendValueInput("x2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x2:");
    this.appendValueInput("y2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y2:");
    this.appendValueInput("x3")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x3:");
    this.appendValueInput("y3")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y3:");
    this.appendValueInput("x4")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x4:");
    this.appendValueInput("y4")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y4:");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['at_draw_triangle_2d'] = {
  init: function() {
    this.appendValueInput("x1")
        .setCheck("Number")
        .appendField("Draw triangle 2D   x1:");
    this.appendValueInput("y1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y1:");
    this.appendValueInput("x2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x2:");
    this.appendValueInput("y2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y2:");
    this.appendValueInput("x3")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x3:");
    this.appendValueInput("y3")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y3:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['at_transform_translate'] = {
  init: function() {
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("Translate  x:");
    this.appendValueInput("y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['at_transform_rotate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Rotate")
        .appendField(new Blockly.FieldAngle(90), "amount")
        .appendField("degrees");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['at_transform_scale'] = {
  init: function() {
    this.appendValueInput("amount")
        .setCheck("Number")
        .appendField("Scale by: ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['at_smooth'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Activate Smooth");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['at_smooth_no'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Deactivate Smooth");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['at_draw_box_3d'] = {
  init: function() {
    this.appendValueInput("w")
        .setCheck("Number")
        .appendField("Draw box 3D  w:");
    this.appendValueInput("h")
        .setCheck("Number")
        .appendField("h:");
    this.appendValueInput("d")
        .setCheck("Number")
        .appendField("d:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(50);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['at_draw_sphere_3d'] = {
  init: function() {
    this.appendValueInput("radius")
        .setCheck("Number")
        .appendField("Draw sphere 3D  Radius:");
    //this.appendValueInput("detail")
    //    .setCheck("Number")
    //    .appendField("detail:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(50);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['at_draw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("draw");
    this.appendStatementInput("codigo")
        .setCheck(null);
    this.setInputsInline(false);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['at_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("setup");
    this.appendStatementInput("codigo")
        .setCheck(null);
    this.setInputsInline(false);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['at_set_background_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set background to")
        .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(75);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['at_set_fill_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set fill color to")
        .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(75);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['at_set_stroke_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set stroke color to")
        .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(75);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
