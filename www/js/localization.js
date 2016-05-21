	$(document).ready(function(){
		$('#localizationbutton').click(function(){
			
			var onSuccess = function(position) {
				var note = $('#noteText').val();
				$('#noteText').val(note + "\n" +
					  'Latitude: '          + position.coords.latitude          + '\n' +
			          'Longitude: '         + position.coords.longitude         + '\n' +
			          'Altitude: '          + position.coords.altitude          + '\n' +
			          'Accuracy: '          + position.coords.accuracy          + '\n' +
			          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
			          'Heading: '           + position.coords.heading           + '\n' +
			          'Speed: '             + position.coords.speed             + '\n' +
			          'Timestamp: '         + position.timestamp                + '\n');
			};

			// onError Callback receives a PositionError object
			//
			var onErrorF = function onError(error) {
			    alert('code: '    + error.code    + '\n' +
			          'message: ' + error.message + '\n');
			}
			navigator.geolocation.getCurrentPosition(onSuccess, onErrorF);

	});
	});
	$(document).ready(function(){
		$('#datebutton').click(function(){
			alert("begin");

			var options = {
					  date: new Date(),
					  mode: 'date'
					};

					datePicker.show(options, function(date){
						var note = $('#noteText').val();
						$('#noteText').val(note + "\n" + "date result " + date);  
					});

	});
	});