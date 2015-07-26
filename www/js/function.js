
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
