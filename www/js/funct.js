
$('#connectButton1').on('click',function(){
	imprimirEjemplo(); 
})
	

	function imprimirEjemplo() {
		bluetoothSerial.list(function(device) {
alert(device[0].address);
		bluetoothSerial.connect(device[0].address, conexionExito, function() {alert('no connected')});
		}, function() {

	});}

	function conexionExito() {
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
