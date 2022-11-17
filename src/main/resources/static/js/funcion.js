$(document).ready(function() {        

    $('form').submit(function() {   
         
        var api_key = '5a7916e6eb876ada6bf535c3c63e24a6';            
        var ciudad = $('#buscaCiudad').val();
        
        let tempe = "";
        let estado= "";
        let pais= "";            

        $.get('http://api.openweathermap.org/data/2.5/weather?q=' + ciudad + '&units=metric&lang=es' + '&appid=' + api_key, function(res) {
                    
            pais = res.sys.country;
            estado = res.weather[0].description;
            tempe = res.main.temp;                

            $("#temperatura").append("Ciudad: "+ciudad+", "+pais+"<br>");
            $("#temperatura").append("Pronostico: "+estado+"<br>");
            $("#temperatura").append("Temperatura: "+tempe+" º Farenheit"+"<br>");

            //mapa google
            var mapa = '';
            mapa += "<iframe src=https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25400.155220397537!2d" 
            + res['coord']['lon'] + "!3d" + res['coord']['lat'] 
            + "!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2scl!4v1621262229113!5m2!1ses!2scl" 
            + " width='400'" + " height='400'" + " style='border:1px solid blue;'" + " allowfullscreen=''" 
            + " loading='lazy'" + "></iframe>"
            $('#map').html(mapa);
               
    }, 'json');
    
    return false;
    });
 
});       