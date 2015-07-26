
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
    var data = "texto \r\n";
    alert('correcto');
    //bluetoothSerial.write(data, impresionExito, impresionFallo);
    bluetoothSerial.write(data, success, failure); 
}

function success{
    alert('imprimio impresionExito')
}

function failure{
    alert('fallo la impresionFallo')
}

 function conexionFallo() {
    //var data = "texto \r\n";
    alert('fallo')
}
