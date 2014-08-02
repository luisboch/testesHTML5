
var GWorld = {};

GWorld.b2d = {};

/**
 * @type b2World
 */
GWorld.b2d.world;


GWorld._handlers = [];

GWorld.setup = function() {
    var worldAABB = new b2AABB();
    worldAABB.minVertex.Set(-1000, -1000);
    worldAABB.maxVertex.Set(1000, 1000);
    
    var gravity = new b2Vec2(0, 0);
    var doSleep = false;
    GWorld.b2d.world = new b2World(worldAABB, gravity, doSleep);

    GUtils.createGround(GWorld.b2d.world);
    GUtils.createBox(GWorld.b2d.world, 0, 250, 10, 500);
    GUtils.createBox(GWorld.b2d.world, 1000, 250, 10, 500);

    window.setInterval(function() {

        GWorld.b2d.world.Step(1 / 30, 10);
        
        for (i = 0; i < GWorld._handlers.length; i++) {
            var h = GWorld._handlers[i];
            h();
        }
    }, 1/60);

};

GWorld.init = function() {
    GWorld.b2d.world.Step(1 / 30, 10);
};

GWorld.handler = function(fn) {
    GWorld._handlers.push(fn);
};


