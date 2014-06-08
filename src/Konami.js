Konami = function(functionToCall, element, propagation) {
    this.inputs = [];
    this.konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    this.functionToCall = functionToCall;

    if (element === undefined) {
        element = document.body;
    }
    if (propagation === undefined) {
        propagation = true;
    }

    var konami = this;
    element.onkeyup = function(event) {
        konami.addKeyCode(event.keyCode);
        if (!propagation) {
            event.stopPropagation();
            event.cancelBubble = true
        }
    }
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
