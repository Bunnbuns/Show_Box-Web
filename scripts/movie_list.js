//tv_list.js

// --- Set vars --- //

window.onload = function() {
    //window is loaded, send requests

}
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.status == 200 || this.status == 302) {
        //go ahead and do stuff:
        document.getElementById("list").innerHTML = "";
        
    var tmp = JSON.parse(xhttp.responseText);
    for (var i = 0; i < 35; i++){
            document.getElementById("list").innerHTML = document.getElementById("list").innerHTML.concat('<a href=""><div class="movie"><h5>'+tmp[i].title+'</h5><img id="poster" style="max-width:100%;" src="'+tmp[i].poster+'"></div></a>');
        }

    }
};
xhttp.open("GET", "https://dev.benworld.net/sbrapi.cc/api/serials/movies_list/?", true);
xhttp.send();

var more = new XMLHttpRequest();
more.onreadystatechange = function() {
    if (this.status == 200 || this.status == 302) {
        //go ahead and do stuff:
        var tmp = JSON.parse(more.responseText);
        
        document.getElementById("list").innerHTML = "";
        
        for (var i = 0; i < tmp.length; i++){
            document.getElementById("list").innerHTML += '<a href=""><div class="movie"><h5>'+tmp[i].title+'</h5><img id="poster" style="max-width:100%;" src="'+tmp[i].poster+'"></div></a>';
        }

        }
};
more.open("GET", "https://dev.benworld.net/sbrapi.cc/api/serials/movies_list/?", true);


// --- Functions --- //
    function loadMore(){
    document.getElementById("list").innerHTML = '<h1>Loading...</h1>';
    more.send();
}