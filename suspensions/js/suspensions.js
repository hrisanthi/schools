
          $.getJSON( "suspensions.json", function( data ) {
              console.log('loaded');

              var name = []; // create array here
              $.each(data.schools, function (index, schools) {
                  name.push(schools.name); //push values here
              });
              console.log(name); // see the output here

              var americanIndian = []; // create array here
              $.each(data.schools, function (index, schools) {
                  americanIndian.push(schools.americanIndian); //push values here
              });
              console.log(americanIndian);

              var black = []; // create array here
              $.each(data.schools, function (index, schools) {
                  black.push(schools.black); //push values here
              });
              console.log(americanIndian);

              var hispanic = []; // create array here
              $.each(data.schools, function (index, schools) {
                  hispanic.push(schools.hispanic); //push values here
              });
              console.log(hispanic);

              var multiracial = []; // create array here
              $.each(data.schools, function (index, schools) {
                  multiracial.push(schools.multiracial); //push values here
              });
              console.log(multiracial);

              var white = []; // create array here
              $.each(data.schools, function (index, schools) {
                  white.push(schools.white); //push values here
              });
              console.log(white);
          });


        // These would come from your JSON data
        var series = 

        // This part just puts it in a bar based percentage of total values
        $('#schoolName').text(name);
        var total = 0;
        $.each(series,function() { total += this; });

        for (i = 0; i < series.length; i++)
        {
          $('#sb'+(i+1)).css('width',(series[i]/total)*100 + '%');
          $('#sb'+(i+1)).text(series[i]);
        }
