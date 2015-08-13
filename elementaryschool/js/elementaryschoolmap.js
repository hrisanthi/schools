function initialize() {
  // Create a simple map.
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 10,
    center: {lat: 35.052664, lng: -78.878358}

  });

  // Load a GeoJSON from the same server as our demo.
  map.data.loadGeoJson('elementaryschool.json');


  infoWindow = new google.maps.InfoWindow({
  		      content: ""
  		  	});
            map.data.addListener('click', function(event) {
				//show an infowindow on click
				infoWindow.setContent('<div id="schoolname"> <strong>School Name: </strong>'+
											event.feature.getProperty("name") + "</div>");
				var anchor = new google.maps.MVCObject();
				anchor.set("position",event.latLng);
				infoWindow.open(map,anchor);
			});
            map.data.addListener('click', function(event) {
                document.getElementById('name').textContent=
                    event.feature.getProperty("name");
                document.getElementById("grade").textContent=
                    event.feature.getProperty("spggrade");
                document.getElementById("reading").textContent=
                        event.feature.getProperty("spggrade_reading");
                document.getElementById("math").textContent=
                        event.feature.getProperty("spggrade_math");
                document.getElementById("growth").textContent=
                        event.feature.getProperty("evassgrowth_status");
                document.getElementById("needy").textContent=
                        event.feature.getProperty("needy_perc");
                document.getElementById("progress").textContent=
                        event.feature.getProperty("achievment_score");

              });

            }

google.maps.event.addDomListener(window, 'load', initialize);
