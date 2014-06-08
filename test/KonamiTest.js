KonamiTest = TestCase("KonamiTest", {

    "setUp" : function() {
        this.konami = new Konami();
    },

    "test konami can register a key stroke": function() {
        this.konami.addKeyCode(0);
        assertEquals(1, this.konami.inputs.length);
        assertEquals(0, this.konami.inputs[0]);
    },

    "test konami can register some key strokes": function() {
        this.konami.addKeyCode(0);
        this.konami.addKeyCode(1);
        this.konami.addKeyCode(2);
        assertEquals(3, this.konami.inputs.length);
        assertEquals([0, 1, 2], this.konami.inputs);
    },

    "test konami register no more than 10 inputs": function() {
        this.konami.inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.konami.addKeyCode(11);
        assertEquals(10, this.konami.inputs.length);
    },

    "test konami remove the oldest input first": function() {
        this.konami.inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.konami.addKeyCode(11);
        assertEquals([2, 3, 4, 5, 6, 7, 8, 9, 10, 11], this.konami.inputs);
    },

    "test konami can tell when konami code is not performed": function() {
        assertEquals(false, this.konami.isCodePerformed());
    },

    "test konami can tell when konami code is performed": function() {
        this.konami.inputs = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
        assertEquals(true, this.konami.isCodePerformed());
    },

    "test konami trigger a function when konami code is performed": function() {
        var functionHasBeenTriggered = false;
        var functionToCall = function() { functionHasBeenTriggered = true; };
        this.konami = new Konami(functionToCall);
        this.konami.inputs = [38, 38, 40, 40, 37, 39, 37, 39, 66];
        this.konami.addKeyCode(65);
        assertEquals(true, functionHasBeenTriggered);
    }
});

