
/*global cordova*/
$('#connectB').on('click',function(){

    bluetoothSerial.list(function(device) {

        nname= device[0].name;
        ndir= device[0].address;

    bluetoothSerial.connect(ndir, conexionExito, conexionFallo);

    })
});
  
 function conexionExito() {
  // string
  bluetoothSerial.write("hello, world", success, failure);

  // array of int (or bytes)
  bluetoothSerial.write([186, 220, 222], success, failure);

  // Typed Array
  var data = new Uint8Array(4);
  data[0] = 0x41;
  data[1] = 0x42;
  data[2] = 0x43;
  data[3] = 0x44;
  bluetoothSerial.write(data, success, failure);

  // Array Buffer
  bluetoothSerial.write(data.buffer, success, failure);
  alert(12)
}

function success(){
    alert('imprimio impresionExito')
}

function failure(){
    alert('fallo la impresionFallo')
}

 function conexionFallo() {
    //var data = "texto \r\n";
    alert('fallo')
}
