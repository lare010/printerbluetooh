var exec = require('cordova/exec');

var BluetoothSerial = {
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
        exec(onSuccess, onError, 'BluetoothSerial', 'connect', [address]);
    },

    disconnect: function(onSuccess, onError) {
        exec(onSuccess, onError, 'BluetoothSerial', 'disconnect', []);
    },

    init: function(onSuccess, onError) {
        exec(onSuccess, onError, 'BluetoothSerial', 'init', []);
    },

    finish: function(onSuccess, onError) {
        exec(onSuccess, onError, 'BluetoothSerial', 'finish', []);
    },

    reset: function(onSuccess, onError) {
        exec(onSuccess, onError, 'BluetoothSerial', 'reset', []);
    },

    printText: function(text, charset, onSuccess, onError) {
        exec(onSuccess, onError, 'BluetoothSerial', 'printText', [text, charset]);
    },

    printTaggedText: function(text, charset, onSuccess, onError) {
        exec(onSuccess, onError, 'BluetoothSerial', 'printTaggedText', [text, charset]);
    },

    feedPaper: function(lines, onSuccess, onError) {
        exec(onSuccess, onError, 'BluetoothSerial', 'feedPaper', [lines]);
    },

    flush: function(onSuccess, onError) {
        exec(onSuccess, onError, 'BluetoothSerial', 'flush', []);
    },

    selectPageMode: function(onSuccess, onError) {
        exec(onSuccess, onError, 'BluetoothSerial', 'selectPageMode', []);
    },

    selectStandardMode: function(onSuccess, onError) {
        exec(onSuccess, onError, 'BluetoothSerial', 'selectStandardMode', []);
    },

    printPage: function(onSuccess, onError) {
        exec(onSuccess, onError, 'BluetoothSerial', 'printPage', []);
    },

    setAlign: function(align, onSuccess, onError) {
        exec(onSuccess, onError, 'BluetoothSerial', 'setAlign', [align]);
    },

    printSelfTest: function(onSuccess, onError) {
        exec(onSuccess, onError, 'BluetoothSerial', 'printSelfTest', []);
    },
    
    printBarcode: function(qrcode, onSuccess, onError) {
        exec(onSuccess, onError, 'BluetoothSerial', 'printBarcode', [qrcode]);
    },
    
    printImage: function(imagem, onSuccess, onError) {
        exec(onSuccess, onError, 'BluetoothSerial', 'printImage', [imagem]);
    }
};

module.exports = BluetoothSerial;
