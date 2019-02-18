//tv_show.js

// --- Set vars --- //
var id = getAllUrlParams().id;
var season = "1";
//season = getAllUrlParams().season;
var seasons = "";
var eps ="";
var titles="";
window.onload = function() {
    //window is loaded, send requests
    xhttp.send();
}
// start making requests //
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.status == 200 || this.status == 302) {
//go ahead and do stuff:
    var tmp = JSON.parse(xhttp.responseText);
  document.getElementById("desc").innerHTML = tmp.description;
  document.getElementById("imdb_id").innerHTML = tmp.imdb_id;
  document.getElementById("imdb_id").href = 'https://www.imdb.com/title/'+tmp.imdb_id;
  document.getElementById("seasons").selectedIndex = tmp.season;
  //document.getElementById("seasons").innerHTML = tmp.seasons[0];

    for(var key in tmp.seasons) {
        seasons += "<option value="+tmp.seasons[key]+">" +tmp.seasons[key]+ "</option>"
    }
    document.getElementById("seasons").innerHTML = seasons;

    titles = Object.keys(tmp.titles).length;
    for(var i = 1; i < titles+1; i++) {
          //eps += i+'<br />';
          eps += '<div class="ep"><h5>['+i+'] '+tmp.titles[i]+'</h5><img id="poster" style="max-width:100%;" src="'+tmp.thumbs[i]+'"></div>';
        }
      document.getElementById("list").innerHTML = eps;

    }//end of request
};
xhttp.open("GET", "https://dev.benworld.net/sbrapi.cc/api/serials/es/?id="+id+"&season="+season, true);







// --- Functions --- //
function goSeason(value){
    window.location.href ='tv_show.html?id='+id+'&season='+value;
}