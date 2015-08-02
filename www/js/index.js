var app = {
    macAddress: "00:01:90:C1:A9:32",  // get your mac address from bluetoothSerial.list
    chars: "",

/*  Application constructor */
    initialize: function() {
        this.bindEvents();
        console.log("Starting SimpleSerial app");
    },

/*  bind any events that are required on startup to listeners: */
    bindEvents: function() {
        document.addEventListener('deviceready', app.manageConnection, false);
        connectButton.addEventListener('touchend', app.manageConnection, false);
        alert(11)
        //cButton.addEventListener('touchend', app.mdesconectar, false);
        //bprint.addEventListener('touchend', app.Bimprimir, false);
    },

    manageConnection: function() {

    	bluetoothSerial.connect(
            app.macAddress,  // device to connect to
            app.openPort,    // start listening if you succeed
            app.showError    // show the error if you fail
        );
    bluetoothSerial.prueba();
    },

    openPort: function() {
        // if you get a good Bluetooth serial connection:
        app.clear();
        app.display("Conectado al printer:  mac: "+ macAddress);
        
        // change the button's name:
        connectButton.innerHTML = "Disconnect";
        // set up a listener to listen for newlines
        // and display any new data that's come in since
        // the last newline:
        /*bluetoothSerial.subscribe('\n', function (data) {
            app.clear();
            app.display(data);
        });*/
    },

    showError: function(error) {
        // if not connected, do this:
        // clear the screen and display an attempt to connect
        app.clear();
        app.display("El intento de conectarse. " +
            "Asegurese de que el puerto serie esta abierto en el dispositivo de destino.");
        app.display(error);
    }

};


/*
$('#connectButton').on('click',function(){
	alert(22)
})


function imprimirEjemplo() {
	bluetoothSerial.list(function(device) {
	bluetoothSerial.connect(device[0].address, conexionExito, conexionFallo);
	}, function() {

});}

//Con esta mando a imprimir algo.
function conexionExito() {
	var data = "texto \r\n";
	bluetoothSerial.write(data, impresionExito, impresionFallo);
}*/

