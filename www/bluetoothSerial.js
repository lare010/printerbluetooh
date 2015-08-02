var exec = require('cordova/exec');

var bluetoothSerial = {
    platforms: ['android'],

    isSupported: function() {
        if (window.device) {
            var platform = window.device.platform;
            if ((platform !== undefined) && (platform !== null)) {
                return (this.platforms.indexOf(platform.toLowerCase()) >= 0);
            }
        }
        return false;
    },

    connect: function(address, onSuccess, onError) {
        exec(onSuccess, onError, 'bluetoothSerial', 'connect', [address]);
    },

    prueba:function(){
        alert('prueba')
    },

    disconnect: function(onSuccess, onError) {
        exec(onSuccess, onError, 'bluetoothSerial', 'disconnect', []);
    },

    init: function(onSuccess, onError) {
        exec(onSuccess, onError, 'bluetoothSerial', 'init', []);
    },

    finish: function(onSuccess, onError) {
        exec(onSuccess, onError, 'bluetoothSerial', 'finish', []);
    },

    reset: function(onSuccess, onError) {
        exec(onSuccess, onError, 'bluetoothSerial', 'reset', []);
    },

    printText: function(text, charset, onSuccess, onError) {
        exec(onSuccess, onError, 'bluetoothSerial', 'printText', [text, charset]);
    },

    printTaggedText: function(text, charset, onSuccess, onError) {
        exec(onSuccess, onError, 'bluetoothSerial', 'printTaggedText', [text, charset]);
    },

    feedPaper: function(lines, onSuccess, onError) {
        exec(onSuccess, onError, 'bluetoothSerial', 'feedPaper', [lines]);
    },

    flush: function(onSuccess, onError) {
        exec(onSuccess, onError, 'bluetoothSerial', 'flush', []);
    },

    selectPageMode: function(onSuccess, onError) {
        exec(onSuccess, onError, 'bluetoothSerial', 'selectPageMode', []);
    },

    selectStandardMode: function(onSuccess, onError) {
        exec(onSuccess, onError, 'bluetoothSerial', 'selectStandardMode', []);
    },

    printPage: function(onSuccess, onError) {
        exec(onSuccess, onError, 'bluetoothSerial', 'printPage', []);
    },

    setAlign: function(align, onSuccess, onError) {
        exec(onSuccess, onError, 'bluetoothSerial', 'setAlign', [align]);
    },

    printSelfTest: function(onSuccess, onError) {
        exec(onSuccess, onError, 'bluetoothSerial', 'printSelfTest', []);
    },
    
    printBarcode: function(qrcode, onSuccess, onError) {
        exec(onSuccess, onError, 'bluetoothSerial', 'printBarcode', [qrcode]);
    },
    
    printImage: function(imagem, onSuccess, onError) {
        exec(onSuccess, onError, 'bluetoothSerial', 'printImage', [imagem]);
    }
};

module.exports = bluetoothSerial;
