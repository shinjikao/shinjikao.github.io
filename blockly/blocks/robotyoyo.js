


'use strict';
goog.provide('Blockly.Blocks.asus');

goog.require('Blockly.Blocks');

Blockly.Blocks['yoyo'] = {
    /**
     * Block for negation.
     * @this Blockly.Block
     */
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



