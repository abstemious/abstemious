
			function datediff(startdate, location){
			
			var checkindatestr = startdate;
			var dateParts = checkindatestr.split("-");
			
			var checkindate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
			var now = new Date();
			var difference = now - checkindate;
			var days = difference / (1000*60*60*24);   
			    
			    
			$( "#"+location ).text(days.toFixed(0) +" days" );
			
			
			
			}
