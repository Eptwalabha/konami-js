Konami = function(functionToCall, element) {
    this.inputs = [];
    this.konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    this.functionToCall = functionToCall;

    var konami = this;
    if (element === undefined)
        element = document.body;
    element.onkeyup = function(event) {konami.addKeyCode(event.keyCode);};
};

Konami.prototype.addKeyCode = function(input) {
    this.inputs.push(input);
    if (this.inputs.length > 10) {
        this.inputs.shift();
    }
    if (this.isCodePerformed() && this.functionToCall !== undefined) {
        this.functionToCall();
    }
};

Konami.prototype.isCodePerformed = function() {
    if (this.inputs.length < 10) {
        return false;
    }
    for (var i = 0; i < 10; i++) {
        if (this.inputs[i] != this.konamiCode[i]) {
            return false;
        }
    }
    return true;
};
