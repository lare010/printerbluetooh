
/*global cordova*/
$('#connectB').on('click',function(){

    bluetoothSerial.list(function(device) {
        //m= device.split();
        serial= JSON.stringify(device);

        alert(serial);
        alert(serial[0].name);
        alert(serial[0].address);
        alert(device[0].address);
        alert(device[0].address);

    })

    /*    //alert()
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
}*/
})
