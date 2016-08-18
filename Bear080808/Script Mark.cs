//Alice--Setting Left Line Label
E:\Bear0808\src\scripts\graph\Properties.js
subGrp.append('text')
        .attr('class', 'line-label line-label--small')
        .attr('x', self.timeline.label_position_x + 10)
        .attr('y', 15)
        .text(function(d) {
          return d.group;
        });
		
//Alice--render left label
E:\Bear0808\src\scripts\graph\Timeline.js
this.properties = new Properties(this);

//Alice--render left label number
E:\Bear0808\src\scripts\graph\Properties.js
  var propKey = function(d) {
      //return d.name;
      return d.group;
    };
	
//Alice---Right Title Setting
E:\Bear0808\src\scripts\editor\Property.js


//Alice---Setting Left Every Group hight(可能是，還沒改好)
E:\Bear0808\src\scripts\graph\Items.js
 //return prop.keys.length;
return prop.label.length;

// Add tween select if we are editing a key, so only if there is property_name.