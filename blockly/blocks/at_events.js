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

goog.provide('Blockly.Blocks.at_events');  // Deprecated
goog.provide('Blockly.Constants.at_events');

goog.require('Blockly.Blocks');
goog.require('Blockly');



Blockly.defineBlocksWithJsonArray(  // BEGIN JSON EXTRACT
[{
  "type": "trig_event",
  "message0": "Trigger event %1",
  "args0": [
    {
      "type": "field_input",
      "name": "event_name",
      "colour": "event_name",
      "text": "event_name"
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
  "type": "trig_event_ext",
  "message0": "Trigger event %1",
  "args0": [
    {
      "type": "input_value",
      "name": "event_name",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "when_event__happen",
  "message0": "When %1 happens: %2 %3",
  "args0": [
    {
      "type": "field_input",
      "name": "event_name",
      "text": "event_name"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "function_code"
    }
  ],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]

);  // END JSON EXTRACT (Do not delete this comment.)
