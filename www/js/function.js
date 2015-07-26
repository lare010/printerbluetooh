
/*global cordova*/
$('#connectB').on('click',function(){

    bluetoothSerial.list(function(device) {
        nname= device[0].name;
        ndir= device[0].address

    bluetoothSerial.connect(ndir, conexionExito, conexionFallo);
    }, function() {

    });
})   

 function conexionExito() {
    var data = "texto \n";
    alert('correcto');
    //bluetoothSerial.write(data, impresionExito, impresionFallo);
    bluetoothSerial.println("Hello, world?");
}

 function conexionFallo() {
    //var data = "texto \r\n";
    alert('fallo')
}
