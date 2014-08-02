function Player() {

    this.b2d = {};
    this.b2d.element = null;
    var _player = this;

    GWorld.handler(function() {
        
        var velocity = _player.b2d.element.GetLinearVelocity();
        if (KeyBoard.UP) {
            if ((velocity.y * -1) < GConfig.MAX_VELOCITY) {
                velocity.y -= GConfig.ACCEL_FACTOR;
            }
        } else {
            if ((velocity.y * -1) > 0) {
                velocity.y += GConfig.ACCEL_FACTOR;
            }
        }

        if (KeyBoard.DOWN) {
            if (velocity.y < GConfig.MAX_VELOCITY) {
                velocity.y += GConfig.ACCEL_FACTOR;
            }
        } else {
            if (velocity.y > 0) {
                velocity.y -= GConfig.ACCEL_FACTOR;
            }
        }

        if (KeyBoard.LEFT) {
            if ((velocity.x * -1) < GConfig.MAX_VELOCITY) {
                velocity.x -= GConfig.ACCEL_FACTOR;
            }
        } else {
            if ((velocity.x * -1) > 0) {
                velocity.x += GConfig.ACCEL_FACTOR;
            }
        }

        if (KeyBoard.RIGHT) {
            if (velocity.x < GConfig.MAX_VELOCITY) {
                velocity.x += GConfig.ACCEL_FACTOR;
            }
        } else {
            if (velocity.x > 0) {
                velocity.x -= GConfig.ACCEL_FACTOR;
            }
        }
        
        // Round value 
        
    });
}

