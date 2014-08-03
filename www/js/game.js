jQuery.noConflict();
var jump;
jQuery(document).ready(function() {

    var canvas = jQuery('#container').get(0);
    
    jQuery(canvas).attr("width", GConfig.WORLD_SIZE+'px');
    jQuery(canvas).attr("height", GConfig.WORLD_SIZE+'px');
    
    canvasWidth = parseInt(GConfig.WORLD_SIZE);
    canvasHeight = parseInt(GConfig.WORLD_SIZE);
    canvasTop = 0;
    canvasLeft = 0;

    var context = canvas.getContext('2d');

    GWorld.setup();
    GWorld.init();
    KeyBoard.setup();

    GWorld.player = new Player();

    GWorld.counter = 0
    GWorld.handler(function() {

        if (GConfig.DEBUG) {
            context.clearRect(0, 0, canvasWidth, canvasHeight);
            GUtils.debugWorld(GWorld.b2d.world, context);
        }

        GWorld.counter++;
    });

    jQuery('#container').click(function(evt) {
        if (Math.random() < 0.5) {
            GUtils.createBall(GWorld.b2d.world, evt.clientX - canvasLeft, evt.clientY - canvasTop);
        }
        else {
            GUtils.createBox(GWorld.b2d.world, evt.clientX - canvasLeft, evt.clientY - canvasTop, 10, 10, false);
        }
    });
});


