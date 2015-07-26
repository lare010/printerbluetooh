
/*global cordova*/
$('#connectB').on('click',function(){

    bluetoothSerial.list(function(device) {
        
        serial= JSON.stringify(device);
        var arr = [];
        for (var prop in serial) {
            arr.push(serial[prop]);
        }
 
        alert(arr);
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
