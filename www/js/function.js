
/*global cordova*/
$('#connectB').on('click',function(){

    bluetoothSerial.list(function(device) {
        alert(device[0]+device[1])
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
