/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Colour blocks for Blockly.
 *
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.at_escena');  // Deprecated
goog.provide('Blockly.Constants.at_escena');

goog.require('Blockly.Blocks');
goog.require('Blockly');



Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
 {
  "type": "background_color",
  "message0": "Background color %1 Red %2 Green %3 <br> Blue %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "r",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "g",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "b",
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
  "type": "set",
  "message0": "set %1 = %2",
  "args0": [
    {
      "type": "field_input",
      "name": "var_name",
      "text": "variable"
    },
    {
      "type": "input_value",
      "name": "var_value"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "get",
  "message0": "get %1",
  "args0": [
    {
      "type": "field_input",
      "name": "var_name",
      "text": "variable"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "cast",
  "message0": "( %1 ) %2",
  "args0": [
    {
      "type": "field_input",
      "name": "var_type",
      "text": "int"
    },
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
]
);  // END JSON EXTRACT (Do not delete this comment.)
