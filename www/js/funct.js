connectButton1.addEventListener('touchend', mConnection, false);

mConnection: function() {
	bluetoothSerial.isConnected(
	    function() {
	        console.log("Bluetooth is connected");
	        alert('connected')
	    },
	    function() {
	        console.log("Bluetooth is *not* connected");
	        alert('notconected')
	    }
	);
}
alert(2) 