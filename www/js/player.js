function Player() {

    this.b2d = {};
    this.b2d.element = GUtils.createPlayer(
            GWorld.b2d.world,
            canvasWidth / 2 - 5,
            canvasHeight / 2 - 8.5, 30);
    var _player = this;

    GWorld.handler(function() {

        var velocity = _player.b2d.element.GetLinearVelocity();
        if (KeyBoard.UP) {
            velocity.y = GConfig.MAX_VELOCITY * -1;
        } else if (!KeyBoard.DOWN) {
            velocity.y = 0;
        }

        if (KeyBoard.DOWN) {
            velocity.y = GConfig.MAX_VELOCITY;
        } else if (!KeyBoard.UP) {
            velocity.y = 0;
        }

        if (KeyBoard.LEFT) {
            velocity.x = GConfig.MAX_VELOCITY * -1;
        } else if (!KeyBoard.RIGHT) {
            velocity.x = 0;
        }

        if (KeyBoard.RIGHT) {
            velocity.x = GConfig.MAX_VELOCITY;
        } else if (!KeyBoard.LEFT) {
            velocity.x = 0;
        }

    });
}

