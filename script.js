$(document).ready(function () {
    var lonNumb;
    var latNumb;

    $.getJSON('http://ip-api.com/json', function (data2) {
        latNumb = data2.lat;
        lonNumb = data2.lon;

        var urlMetric = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latNumb + '&lon=' + lonNumb + '&appid=568fd160190f43aabe5500e65768a59d&units=metric';

        var urlImperial = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latNumb + '&lon=' + lonNumb + '&appid=568fd160190f43aabe5500e65768a59d&units=imperial';

        $.getJSON(urlMetric, function (data) {
            var temperatureCelsius = data.main.temp + '°C';
            $('#temp').html(temperatureCelsius);

            $.getJSON(urlImperial, function (data3) {
                var temperatureFahrenheit = data3.main.temp + '°F';

                $('#unitFahrenheit').click(function () {
                    $('#temp').html(temperatureFahrenheit);
                    $('#unitFahrenheit').hide();
                    $('#unitCelsius').show();

                });

                $('#unitCelsius').click(function () {
                    $('#temp').html(temperatureCelsius);
                    $('#unitCelsius').hide();
                    $('#unitFahrenheit').show();

                });

                if (data3.main.temp >= 80 || data.main.temp >= (80 - 32) * 5 / 9) {
                    $('#sunny').show();
                    $('#sunnyQuote').show();

                } else if (data3.main.temp <= 50 || data.main.temp <= (50 - 32) * 5 / 9) {
                    $('#snowFlake').show();
                    $('#snowQuote').show();

                } else {
                    $('#pleasantWeather').show();
                    $('#pleasantQuote').show();

                }

            });
        });
    });
});
