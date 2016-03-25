


'use strict';
goog.provide('Blockly.JavaScript.robotyoyo');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['yoyo'] = function(block) {
    // Search the text for a substring.
    var operator = block.getFieldValue('END') == 'FIRST' ? 'indexOf' : 'lastIndexOf';
    var argument0 = Blockly.JavaScript.valueToCode(block, 'FIND',
            Blockly.JavaScript.ORDER_NONE) || '\'\'';
    var argument1 = Blockly.JavaScript.valueToCode(block, 'VALUE',
            Blockly.JavaScript.ORDER_MEMBER) || '\'\'';
    var code = argument1 + '.' + operator + '(' + argument0 + ') + 1';
    return [code, Blockly.JavaScript.ORDER_MEMBER];
};




Blockly.JavaScript['text_length2'] = function(block) {
    // Search the text for a substring.
    var operator = block.getFieldValue('END') == 'FIRST' ? 'indexOf' : 'lastIndexOf';
    var argument0 = Blockly.JavaScript.valueToCode(block, 'FIND',
            Blockly.JavaScript.ORDER_NONE) || '\'\'';
    var argument1 = Blockly.JavaScript.valueToCode(block, 'VALUE',
            Blockly.JavaScript.ORDER_MEMBER) || '\'\'';
    var code = argument1 + '.' + operator + '(' + argument0 + ') + 1';
    return [code, Blockly.JavaScript.ORDER_MEMBER];
};

