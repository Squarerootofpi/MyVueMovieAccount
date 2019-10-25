let searchMovie = function(event) {
    //   event.preventDefault();

    const movie = document.getElementById("movieTitle").value;
    const url = "http://www.omdbapi.com/?t=" + movie + "&apikey=ae3a1bc8";
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(json);
            var results = "";
            if(json.Response == "False"){
                results += json.Error;
            }
            else{
            results += "<h3>" + json.Title + "</h3>"
            results += "<ul>";
            results += "<li><b>Released: </b>" + json.Released + "</li>";
            results += "<li><b>Actors: </b>" + json.Actors + "</li>";
            results += "<li><b>Plot: </b>" + json.Plot + "</li>";
            results += '<div id="detail">';
            results += '<button type="button">More Details?</button><br>'
            results += '</div>'
            results += "</ul>";
            results += "<img class=\"image-fluid\" src=\"" + json.Poster + " alt=\"Poster\">";
            }
            
            
            document.getElementById("result").innerHTML = results;
            
            document.getElementById("detail").addEventListener("click", function(event) {
                var details = "";
                var ratings = "";
                details += '<li><b>Director: </b>' + json.Director + '</li>';
                details += '<li><b>Production: </b>' + json.Production + '</li>';
                details += '<li><b>Awards: </b>' + json.Awards + '</li>';
                details += '<li><b>Genre: </b>' + json.Genre + '</li>';
                details += '<li><b>Ratings: </b>';
                for(let i = 0; i < json.Ratings.length; i++){
                 ratings += "<br>" + json.Ratings[i].Source + ': ' + json.Ratings[i].Value;
                }
                details += ratings + '</li>';
                //
                console.log(details);
                document.getElementById("detail").innerHTML = details;
            })
        
        })
        
}

