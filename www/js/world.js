
var GWorld = {};

GWorld.b2d = {};

/**
 * @type b2World
 */
GWorld.b2d.world;


GWorld._handlers = [];

GWorld.setup = function() {
    var worldAABB = new b2AABB();

    worldAABB.minVertex.Set(GConfig.WORLD_SIZE * -1, GConfig.WORLD_SIZE * -1);
    worldAABB.maxVertex.Set(GConfig.WORLD_SIZE, GConfig.WORLD_SIZE);

    var gravity = new b2Vec2(0, 0);
    var doSleep = false;
    GWorld.b2d.world = new b2World(worldAABB, gravity, doSleep);

    GUtils.createGround(GWorld.b2d.world);
    GUtils.createBox(GWorld.b2d.world, 0, GConfig.WORLD_SIZE / 4, GConfig.WORLD_SIZE / 100, GConfig.WORLD_SIZE);
    GUtils.createBox(GWorld.b2d.world,
            GConfig.WORLD_SIZE, GConfig.WORLD_SIZE / 4,
            GConfig.WORLD_SIZE / 100, GConfig.WORLD_SIZE);
    GUtils.createBox(GWorld.b2d.world, 0, 0, GConfig.WORLD_SIZE, GConfig.WORLD_SIZE / 100);

    window.setInterval(function() {

        GWorld.b2d.world.Step(1 / 20, 3);

        for (i = 0; i < GWorld._handlers.length; i++) {
            var fn = GWorld._handlers[i];
            if (fn) {
                fn();
            }
        }
    }, 1 / 20);

};

GWorld.init = function() {

};

GWorld.handler = function(fn) {
    GWorld._handlers.push(fn);
};


