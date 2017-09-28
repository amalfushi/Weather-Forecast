$(document).ready(function(){
    $('form').submit(function(){
        var key ='98a6e08a1fb21f0d49925610af989639';
        var url='https://api.openweathermap.org/data/2.5/weather?q=';
        url += $('input').val();
        url+='&&appid='
        url+=key;

        $.get(url, function(res){
            console.log(res);
            var temp = Math.round((res.main['temp']*(9/5))-459.67);
            $('#forecast').html(
                '<h1>'+res.name+'</h1><h3>Temperature: '+temp+' °F<h3>'
            );
            $('input').val("");
        }, 'json');
        return false;
    });
});