
/*global cordova*/
$('#connectB').on('click',function(){

    bluetoothSerial.list(function(device) {
        alert(JSON.stringify(device[0]));
        alert(JSON.stringify(device[1]));
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
