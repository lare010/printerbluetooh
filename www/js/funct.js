
$('#connectButton1').on('click',function(){

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

})
