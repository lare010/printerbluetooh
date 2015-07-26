
/*global cordova*/
$('#connectB').on('click',function(){

    bluetoothSerial.list(function(device) {
        
        serial= toJSON(device);
        alert(device)
        alert(serial);
        alert(serial[0]);
        alert(serial[0][0]);

        //alert()
    bluetoothSerial.connect(device[0].address, conexionExito, conexionFallo);
    }, function() {

    });
})   

 function conexionExito() {
    var data = "texto \r\n";
    alert('correcto');
    bluetoothSerial.write(data, impresionExito, impresionFallo);
}

 function conexionFallo() {
    //var data = "texto \r\n";
    alert('fallo')
}
