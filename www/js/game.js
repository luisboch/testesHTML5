jQuery.noConflict();

jQuery(document).ready(function() {

    var canvas = jQuery('#container').get(0);

    canvasWidth = parseInt(jQuery(canvas).outerWidth(false));
    canvasHeight = parseInt(jQuery(canvas).outerHeight(false));
    canvasTop = 0;
    canvasLeft = 0;

    var context = canvas.getContext('2d');

    GWorld.setup();
    GWorld.init();

    var player =
            GUtils.createBox(GWorld.b2d.world, canvasWidth / 2 - 5, canvasHeight / 2 - 08.5, 10, 17.0, false);
    GWorld.player = new Player();
    GWorld.player.b2d.element = player;
    
    

    GWorld.handler(function() {
        if (GConfig.DEBUG) {
            context.clearRect(0, 0, canvasWidth, canvasHeight);
            GUtils.debugWorld(GWorld.b2d.world, context);
        }
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


