


'use strict';
goog.provide('Blockly.Blocks.robotyoyo');

goog.require('Blockly.Blocks');

Blockly.Blocks['yoyo'] = {
       init: function() {
        this.jsonInit({
            "message0": 'YoYo',
            "args0": [
                {
                    "type": "input_value",
                    "name": "BOOL",
                    "check": "Boolean"
                }
            ],
            "output": "Boolean",
            "colour": Blockly.Blocks.logic.HUE,
            "tooltip": Blockly.Msg.LOGIC_NEGATE_TOOLTIP,
            "helpUrl": Blockly.Msg.LOGIC_NEGATE_HELPURL
        });
    }
};


Blockly.Blocks['text_length2'] = {
    init: function() {
        this.setColour(160);
        this.appendValueInput('VALUE')
            .setCheck('String')
            .appendField('length 2of');
        this.setOutput(true, 'Number');
        this.setTooltip('Returns number of letters in the provided text.');
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
    }
};



