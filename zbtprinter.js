/*
 * cordova.plugins.zbtprinter.print = function(str, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'ZebraBluetoothPrinter', 'print', [str]);
};
*/

//var ZebraBluetoothPrinterLoader = function (require, exports, module) {

	var exec = require("cordova/exec");
 
 	function ZebraBluetoothPrinter() {
    }

    ZebraBluetoothPrinter.prototype.esegui = function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'ZebraBluetoothPrinter', 'print', ["ciccio"]);
    };
    var bluetoothPrinter = new ZebraBluetoothPrinter();
    module.exports = bluetoothPrinter;


    cordova.plugins.zbtprinter.print("^XA^FO10,10^AFN,26,13^FDHello, World!^FS^XZ",
    function(success) { 
        alert("Print ok"); 
    }, function(fail) { 
        alert(fail); 
    }

alert(12)

);
//};

//ZebraBluetoothPrinterLoader(require, exports, module);
//cordova.define("cordova/plugins/zbtprinter", ZebraBluetoothPrinter);
