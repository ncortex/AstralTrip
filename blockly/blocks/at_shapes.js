
goog.provide('Blockly.Blocks.shapes');  // Deprecated
goog.provide('Blockly.Constants.shapes');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([
{
  "type": "_2d_line",
  "message0": "Draw line 2D x1: %1 y1: %2 x2: %3 y2: %4",
  "args0": [
    {
      "type": "input_value",
      "name": "x1",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y1",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "x2",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y2",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "draw_2_points",
  "message0": "Draw %1 x1: %2 mode: %3 y1: %4 x2: %5 y2: %6",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "tipo",
      "options": [
        [
          "point",
          "point"
        ],
        [
          "line",
          "line"
        ],
        [
          "triangle",
          "triangle"
        ],
        [
          {
            "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
            "width": 15,
            "height": 15,
            "alt": "*"
          },
          "OPTIONNAME"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "x1",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "field_dropdown",
      "name": "mode",
      "options": [
        [
          "1",
          "1"
        ],
        [
          "2",
          "2"
        ],
        [
          "3",
          "3"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "y1",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "x2",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y2",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
]
);  // END JSON EXTRACT (Do not delete this comment.)
