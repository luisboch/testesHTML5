jQuery.noConflict();
var jump;
jQuery(document).ready(function() {

    var canvas = jQuery('#container').get(0);

    canvasWidth = parseInt(jQuery(canvas).outerWidth(false));
    canvasHeight = parseInt(jQuery(canvas).outerHeight(false));
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


