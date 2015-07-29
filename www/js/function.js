$(document).ready(function() {

    $("#testco").click(function() {
        bluetoothSerial.connect("00:01:90:C1:A9:32", connectSuccess, connectFailure);
    });


    $("#listnwrite").click(function() {
            bluetoothSerial.list(function(devices) {
                devices.forEach(function(device) {
                    var data = "something \r\n";
                    alert(device.address);
                    bluetoothSerial.connect(device.address, connectSuccess, connectFailure);
                    bluetoothSerial.write(data, success, failure);
                })
            }, connectFailure);
     });

    $("#insecure").click(function() {
        bluetoothSerial.connectInsecure("00:01:90:C1:A9:32", connectSuccess, connectFailure);
    });

    $("#deco").click(function() {
        bluetoothSerial.disconnect(sucessdeco, faildeco);
    });

});