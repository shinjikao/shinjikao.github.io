/* Jackal's Scratch Extension */



new (function() {
    var ext = this;

    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.getRobotYoYo = function(Username, callback) {
        console.log("TEST");
        // Make an AJAX call to the Open Weather Maps API
        $.ajax({
              //url: 'http://api.openweathermap.org/data/2.5/weather?q='+location+'&units=imperial',
              url: 'http://192.168.43.97:8080/?getYoyo='+ Username, dataType: 'jsonp',
              success: function( responsedata ) {
                  console.log('success');
                  $("#div1").html('success');
                  // Got the data - parse it and return the temperature
                  console.log(responsedata);
              }
        });
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['', 'Robot YoYo %s', 'getRobotYoYo', 'JJJackal'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('ASUS Robot extension', descriptor, ext);
})();