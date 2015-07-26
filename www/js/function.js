
/*global cordova*/
$('#connectB').on('click',function(){

    bluetoothSerial.list(function(device) {
<<<<<<< HEAD
        nname= device[0].name;
        ndir= device[0].address

    bluetoothSerial.connect(ndir, conexionExito, conexionFallo);
=======
        
        serial= JSON.stringify(device);
        alert(serial);
        alert(serial[0].name);
        alert(serial[0].address);

    })

    /*    //alert()
    bluetoothSerial.connect(device[0].address, conexionExito, conexionFallo);
>>>>>>> parent of 243818e... 1
    }, function() {

    });
})   

 function conexionExito() {
    var data = "texto \r\n";
    
    //bluetoothSerial.write(data, impresionExito, impresionFallo);
    `//bluetoothSerial.write(data, success, failure); 
// put your setup code here, to run once:
      Serial.begin(9600);   // opens serial port, sets data rate to 9600 bps
      Serial.flush();
      bluetooth.begin(9600);
      //enter command mode
      bluetooth.println("$$$");
      Serial.println("setup complete.");
      alert('correcto');

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
