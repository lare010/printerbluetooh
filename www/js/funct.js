
$('#connectButton1').on('click',function(){
	imprimirEjemplo(); 
})
	

	function imprimirEjemplo() {
		bluetoothSerial.list(function(device) {
			macAddress = "00:01:90:C1:A9:32";
		alert(macAddress);
		bluetoothSerial.connect(macAddress, Exito, function() {alert('no connected')});
		}, function(error) {alert(error)}
	)}

	function Exito() {
		var data = "texto \r\n";
		bluetoothSerial.write(data, function() {alert('impreso')}, function() {alert('fallotecnico')}); 
	}

/*		bluetoothSerial.isConnected(
		    function() {
		        console.log("Bluetooth is connected");
		        alert('connected')
		        
				var data = "texto \r\n";
				bluetoothSerial.write(data, function() {alert('impreso')}, function() {alert('fallotecnico')}); 
		    },
		    function() {
		        console.log("Bluetooth is *not* connected");
		        alert('Bluetooth is *not* connected')
		    }
		);*/
