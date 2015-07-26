
/*global cordova*/
$('#connectB').on('click',function(){

    bluetoothSerial.list(function(device) {
    bluetoothSerial.connect(device[0].address, conexionExito, conexionFallo);
    }, function() {

    });
})   

 function conexionExito() {
    var data = "texto \r\n";
    bluetoothSerial.write(data, impresionExito, impresionFallo);
}

 function conexionFallo() {
    //var data = "texto \r\n";
    alert('fallo')
}
