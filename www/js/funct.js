
$('#connectButton1').on('click',function(){

		bluetoothSerial.isConnected(
		    function() {
		        //console.log("Bluetooth is connected");
		        alert('connected')
		        // string
				bluetoothSerial.write("hello, world", function() {alert('impreso')}, function() {alert('fallotecnico')});
		    },
		    function() {
		        console.log("Bluetooth is *not* connected");
		        //alert('notconected')
		    }
		);

})
