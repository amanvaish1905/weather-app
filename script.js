$(document).ready(function(){

    var typed = new Typed('.typed', {
        strings: ['Hello', 'LIVE WeatherInfo here!'],
        smartBackspace: true ,
        loop:false,
        typespeed:75,
      });
    $("#searchInput").on("keyup",function(e){
        var cityname=e.target.value;
        const APIKey="94515104f5547730ae5340fb72fed1bd";
        //make request to server
        $.ajax({
            url:`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKey}&units=metric`

        }).done(function(weatherdata){
          console.log(weatherdata);
          $("#profile").html(
           `<div class=container>
            <div class="row">
                   <div class="card" style="width: 18rem;">
                         <img class="card-img-top" src="http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png" alt="Card image cap">
                         <div class="card-body">
                             <h5 class="card-title">Weather:${weatherdata.weather[0].description}</h5>
                             <p class="card-text">The Temperature at ${cityname} is =${weatherdata.main.temp} &#8451 and it feels like it is ${weatherdata.main.feels_like}</p>
                             <p class="card-text">Country:${weatherdata.sys.country}</p>
                             <a href="https://www.google.com/search?q=${cityname}" class="btn btn-primary">Learn more about this place</a>
                         </div>
                   </div>
             </div> 
             </div>`
          ); 
        })
    });
});