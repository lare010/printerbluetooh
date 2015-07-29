
/*global cordova
$('#connectB').on('click',function(){

    bluetoothSerial.list(function(device) {

        nname= device[0].name;
        ndir= device[0].address;

    bluetoothSerial.connect(ndir, conexionExito, conexionFallo);

    })
});*/
  
$(document).ready(function() {

    $("#testco").click(function() {
        bluetoothSerial.connect("00:01:90:C1:A9:32", connectSuccess, connectFailure);
    });


    $("#listnwrite").click(function() {
        alert(2)
            bluetoothSerial.list(function(devices) {
                alert(device)
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

    connectSuccess:function(){
        alert('bien');
    }

    connectFailure:function(){
        alert('fallo');
    }

});