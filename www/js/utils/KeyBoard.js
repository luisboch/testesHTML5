var KeyBoard = {};

KeyBoard.UP = false;
KeyBoard.DOWN = false;
KeyBoard.LEFT = false;
KeyBoard.RIGHT = false;


KeyBoard.setup = function() {
    
    jQuery(document).keydown(function(e) {
        switch (e.keyCode) {
            case KeyBoardKeys.A:
            case KeyBoardKeys.LEFT:
                KeyBoard.LEFT = true;
                return false;

            case KeyBoardKeys.D:
            case KeyBoardKeys.RIGHT:
                KeyBoard.RIGHT = true;
                return false;

            case KeyBoardKeys.W:
            case KeyBoardKeys.UP:
                KeyBoard.UP = true;
                return false;

            case KeyBoardKeys.S:
            case KeyBoardKeys.DOWN:
                KeyBoard.DOWN = true;
                return false;
            case KeyBoardKeys.Q:
                return false;
            case KeyBoardKeys.ENTER:
                return false;
        }
    });
    
    jQuery(document).keyup(function(e) {
        switch (e.keyCode) {
            case KeyBoardKeys.A:
            case KeyBoardKeys.LEFT:
                KeyBoard.LEFT = false;
                return false;

            case KeyBoardKeys.D:
            case KeyBoardKeys.RIGHT:
                KeyBoard.RIGHT = false;
                return false;

            case KeyBoardKeys.W:
            case KeyBoardKeys.UP:
                KeyBoard.UP = false;
                return false;

            case KeyBoardKeys.S:
            case KeyBoardKeys.DOWN:
                KeyBoard.DOWN = false;
                return false;
            case KeyBoardKeys.Q:
                return false;
            case KeyBoardKeys.ENTER:
                return false;
        }
    });
};





var KeyBoardKeys = {};

KeyBoardKeys.ENTER = 13;
KeyBoardKeys.SPACE = 32;
KeyBoardKeys.UP = 38;
KeyBoardKeys.LEFT = 37;
KeyBoardKeys.RIGHT = 39;
KeyBoardKeys.DOWN = 40;
KeyBoardKeys.W = 87;
KeyBoardKeys.A = 65;
KeyBoardKeys.D = 68;
KeyBoardKeys.S = 83;
KeyBoardKeys.Q = 81;
