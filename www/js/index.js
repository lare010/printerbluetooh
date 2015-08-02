/*
    SimpleSerial index.js
    Created 7 May 2013
    Modified 9 May 2013
    by Tom Igoe
*/
var macPrinter='';
var namPrinter='';

var app = {
    macAddress: "",//"00:01:90:C1:A9:32",  // get your mac address from bluetoothSerial.list
    chars: "",

/*
    Application constructor
 */
    initialize: function() {
        this.bindEvents();
        console.log("Starting SimpleSerial app");
    },
/*
    bind any events that are required on startup to listeners:
*/
    bindEvents: function() {
        //document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('deviceready', app.manageConnection, false);
        connectButton.addEventListener('touchend', app.manageConnection, false);
        cButton.addEventListener('touchend', app.mdesconectar, false);
        bprint.addEventListener('touchend', app.Bimprimir, false);
    },


/*
    Connects if not connected, and disconnects if connected:
*/
    Bimprimir: function(){

        var data = "texto \r\n"; 
        
        bluetoothSerial.write(data, 
            function(){
                alert('print');
            }, 
            function(){
                alert('not print');
            }
        );
    },

    mdesconectar: function() {
        bluetoothSerial.isConnected(
            function() {
                app.display("attempting to disconnect");
                bluetoothSerial.disconnect(
                    app.closePort,     // stop listening to the port
                    app.showError      // show the error if you fail
                );
            },
            function() {
                console.log("Bluetooth is *not* connected");
            }
        );    
    },

    manageConnection: function() {

        bluetoothSerial.list(
            function(results) {
                macPrinter= results[0].address;
                namPrinter= results[0].name;
                
                // here's the real action of the manageConnection function:
                //bluetoothSerial.isConnected(disconnect(), connect());
                bluetoothSerial.isConnected(
                    function() {
                        //console.log("Bluetooth is connected");
                        alert('Bluetooth esta conectedo');
                    },
                    function() {
                        // attempt to connect:
                        bluetoothSerial.connect(
                            macPrinter,//app.macAddress,  // device to connect to
                            app.openPort,    // start listening if you succeed
                            app.showError    // show the error if you fail
                        );
                    }
                );
            },
            function(error) {
               alert(error); //app.display(JSON.stringify(error));
            }
        );
    },
/*
    subscribes to a Bluetooth serial listener for newline
    and changes the button:
*/
    openPort: function() {
        // if you get a good Bluetooth serial connection:
        app.clear();
        app.display("Conectado al printer: " +namPrinter+" mac: "+ macPrinter);
        
        // change the button's name:
        connectButton.innerHTML = "Disconnect";
        // set up a listener to listen for newlines
        // and display any new data that's come in since
        // the last newline:
        bluetoothSerial.subscribe('\n', function (data) {
            app.clear();
            app.display(data);
        });
    },

/*
    unsubscribes from any Bluetooth serial listener and changes the button:
*/
    closePort: function() {
        // if you get a good Bluetooth serial connection:
        app.clear();
        app.display("Disconnected from: " +namPrinter+" mac: "+ macPrinter);
        // change the button's name:
        connectButton.innerHTML = "Connect";
        // unsubscribe from listening:
        bluetoothSerial.unsubscribe(
                function (data) {
                    app.display(data);
                },
                app.showError
        );
    },
/*
    appends @error to the message div:
*/
    showError: function(error) {
        // if not connected, do this:
        // clear the screen and display an attempt to connect
        app.clear();
        app.display("El intento de conectarse. " +
            "Asegurese de que el puerto serie esta abierto en el dispositivo de destino.");
        app.display(error);
    },

/*
    appends @message to the message div:
*/
    display: function(message) {
        var display = document.getElementById("message"), // the message div
            lineBreak = document.createElement("br"),     // a line break
            label = document.createTextNode(message);     // create the label

        display.appendChild(lineBreak);          // add a line break
        display.appendChild(label);              // add the message node
    },
/*
    clears the message div:
*/
    clear: function() {
        var display = document.getElementById("message");
        display.innerHTML = "";
    }
};      // end of app

