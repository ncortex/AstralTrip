/**
 * @license
 * Visual Blocks Language
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
 * @fileoverview Generating JavaScript for colour blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.JavaScript.at_events');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['trig_event'] = function(block) {
  var text_event_name = block.getFieldValue('event_name');
  var code = 'event_'+text_event_name+'();\n';
  return code;
};

Blockly.JavaScript['trig_event_ext'] = function(block) {
  var value_event_name = Blockly.JavaScript.valueToCode(block, 'event_name', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'event_'+value_event_name+'();\n';
  return code;
};

Blockly.JavaScript['when_event__happen'] = function(block) {
  var text_event_name = block.getFieldValue('event_name');
  var statements_function_code = Blockly.JavaScript.statementToCode(block, 'function_code');
  
  var code = 'function event_'+text_event_name+'(){'+statements_function_code+'};\n';
  return code;
};
