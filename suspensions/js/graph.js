$(document).ready(function() {

    var options = {
        chart: {
            renderTo: 'container',
            type: 'spline'
        },
        series: [{}]
    };
    $.getJSON('suspensions.json', function(data) {
        options.series[0].data = data;
        var chart = new Highcharts.Chart(options);
    });

});
