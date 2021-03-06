console.log("editor/PropertyMotionBody.js");
import 'jquery';
import PropertyBase from './PropertyBase';
let DraggableNumber = require('draggable-number.js');

let tpl_property = require('../templates/propertyMotionBody.tpl.html');

export default class PropertyMotionBody extends PropertyBase {
  // instance_property: The current property on the data object.
  // lineData: The line data object.
  constructor(instance_property, lineData, editor, key_val = false) {
    super(instance_property, lineData, editor, key_val);
    this.onInputChange = this.onInputChange.bind(this);
    this.$input = this.$el.find('input');
  }

  getInputVal() {
    return parseFloat(this.$el.find('input').val());
  }

  render() {
    super.render();
    // By default assign the property default value
    var val = this.getCurrentVal();
    var dx = this.getCurrentX();
    var x_time = this.getCurrentXTime();
    var dy = this.getCurrentY();
    var y_time = this.getCurrentYTime();
    var video = this.getCurrentVideo();
    var audio = this.getCurrentAudio();
    var led = this.getCurrentLed();

    var data = {
      id: this.instance_property.name, // "circleRadius" instead of "circle radius"
      label: this.instance_property.label || this.instance_property.name,
      val: val,
      x: dx,
      x_time:x_time,
      y: dy,
      y_time:y_time,
      video : video,
      audio : audio,
      led :led
    };

    var view = tpl_property(data);
    this.$el = $(view);
    this.$el.find('.property__key').click(this.onKeyClick);

    var $input = this.$el.find('input');

    var onChangeEnd = () => {
      this.editor.undoManager.addState();
    };

    var draggableOptions = {
      changeCallback: () => this.onInputChange(),
      endCallback: () => onChangeEnd()
    };
    // Set min & max if they are defined.
    if ('min' in this.instance_property) {
      draggableOptions.min = this.instance_property.min;
    }
    if ('max' in this.instance_property) {
      draggableOptions.max = this.instance_property.max;
    }

    var draggable = new DraggableNumber($input.get(0), draggableOptions);
    $input.data('draggable', draggable);
    $input.change(this.onInputChange);
  }

  remove() {
    super.render();
    if (this.$input.data('draggable')) {
      this.$input.data('draggable').destroy();
    }

    delete this.$input;
    delete this.$el;
  }

  update() {
    super.render();
    var val = this.getCurrentVal();
    var draggable = this.$input.data('draggable');

    if (draggable) {
      draggable.set(val.toFixed(3));
    }
    else {
      this.$input.val(val.toFixed(3));
    }
  }
}
