Blockly.JavaScript['at_draw_line_2d'] = function(block) {
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1 = Blockly.JavaScript.valueToCode(block, 'y1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y2 = Blockly.JavaScript.valueToCode(block, 'y2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'line('+value_x1+','+value_y1+','+value_x2+','+value_y2+');\n';
  return code;
};

Blockly.JavaScript['at_draw_arc_2d'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
  var value_h = Blockly.JavaScript.valueToCode(block, 'h', Blockly.JavaScript.ORDER_ATOMIC);
  var angle_start = block.getFieldValue('start');
  var angle_end = block.getFieldValue('end');
  var code = 'arc('+value_x+','+value_y+','+value_w+','+value_h+','+angle_start+','+angle_end+');\n';  
  return code;
};

Blockly.JavaScript['at_draw_rect_2d'] = function(block) {
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1 = Blockly.JavaScript.valueToCode(block, 'y1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
  var value_h = Blockly.JavaScript.valueToCode(block, 'h', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_mode = block.getFieldValue('mode');
  if(dropdown_mode=="center"){
  	var code = 'rectMode(CENTER);\n'
  }else{
  	var code = 'rectMode(CORNER);\n'
  }
  code = code + 'rect('+value_x1+','+value_y1+','+value_w+','+value_h+');\n';
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
  	code = 'rectMode(CENTER);\n'
  }else{
  	code = 'rectMode(CORNER);\n'
  }
  var code += 'rect('+value_x1+','+value_y1+','+value_w+','+value_h+','+value_tlradius+','+value_trradius+','+value_brradius+','+value_blradius+');\n';  
  return code;
};

Blockly.JavaScript['at_draw_ellipse_2d'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
  var value_h = Blockly.JavaScript.valueToCode(block, 'h', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_mode = block.getFieldValue('mode');
  if(dropdown_mode=="center"){
  	code = 'ellipseMode(CENTER);\n'
  }else{
  	code = 'ellipseMode(CORNER);\n'
  }
  var code += 'ellipse('+value_x1+','+value_y1+','+value_w+','+value_h+');\n';
  return code;
};

Blockly.JavaScript['at_draw_point_2d'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'point('+value_x1+','+value_y1+');\n';
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
  var code = 'quad('+value_x1+','+value_y1+','+value_x2+','+value_y2+','+value_x3+','+value_y3+','+value_x4+','+value_y4+');\n';
  return code;
};

Blockly.JavaScript['at_draw_triangle_2d'] = function(block) {
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1 = Blockly.JavaScript.valueToCode(block, 'y1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y2 = Blockly.JavaScript.valueToCode(block, 'y2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x3 = Blockly.JavaScript.valueToCode(block, 'x3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y3 = Blockly.JavaScript.valueToCode(block, 'y3', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'triangle('+value_x1+','+value_y1+','+value_x2+','+value_y2+','+value_x3+','+value_y3+');\n';
  return code;
};

Blockly.JavaScript['at_transform_translate'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'translate('+value_x+','+value_y+');\n';
  return code;
};

Blockly.JavaScript['at_transform_rotate'] = function(block) {
  var angle_amount = block.getFieldValue('amount');
  var code = 'rotate('+angle_amount+');\n';
  return code;
};

Blockly.JavaScript['at_transform_scale'] = function(block) {
  var value_amount = Blockly.JavaScript.valueToCode(block, 'amount', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'scale('+value_amount+');\n';
  return code;
};

Blockly.JavaScript['at_smooth'] = function(block) {
  var code = 'smooth();\n';
  return code;
};

Blockly.JavaScript['at_smooth_no'] = function(block) {
  var code = 'noSmooth();\n';
  return code;
};

Blockly.JavaScript['at_draw_box_3d'] = function(block) {
  var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
  var value_h = Blockly.JavaScript.valueToCode(block, 'h', Blockly.JavaScript.ORDER_ATOMIC);
  var value_d = Blockly.JavaScript.valueToCode(block, 'd', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'box('+value_w+','+value_h+','+value_d+');\n';
  return code;
};

Blockly.JavaScript['at_draw_sphere_3d'] = function(block) {
  var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'sphere('+value_w+');\n';
  return code;
};

Blockly.JavaScript['at_draw'] = function(block) {
  var statements_codigo = Blockly.JavaScript.statementToCode(block, 'codigo');
  var code = 'void draw(){'+statements_codigo+'};\n';  
  return code;
};

Blockly.JavaScript['at_setup'] = function(block) {
  var statements_codigo = Blockly.JavaScript.statementToCode(block, 'codigo');
  var code = 'void setup(){'+statements_codigo+'};\n';  
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
    this.appendValueInput("x2")
        .setCheck("Number")
        .appendField("x2:");
    this.appendValueInput("y2")
        .setCheck("Number")
        .appendField("y2:");
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
    this.appendValueInput("x2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x2:");
    this.appendValueInput("y2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y2:");
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
    this.appendValueInput("detail")
        .setCheck("Number")
        .appendField("detail:");
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
