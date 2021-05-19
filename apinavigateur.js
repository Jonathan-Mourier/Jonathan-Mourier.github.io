let x=document.getElementById("lat");
let buttonlatitude=document.getElementById("latitude");
buttonlatitude.addEventListener("click",getLatitude);
function getLatitude(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            x.innerHTML="Latitude: "+position.coords.latitude;
        });
    }else{
        lat.innerHTML="Geolocation is not supported by this browser.";
    }
}

let y=document.getElementById("long");
let buttonlongitude=document.getElementById("longitude");
buttonlongitude.addEventListener("click",getLongitude);
function getLongitude(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            y.innerHTML="Longitude: "+position.coords.longitude;
        });
    }else{
        y.innerHTML="Geolocation is not supported by this browser.";
    }
}

let buttonreculer=document.getElementById("reculer");
buttonreculer.addEventListener("click",gotohistory);
function gotohistory(){
    let val1=document.getElementById("nbpages").value;
    window.history.go(-val1);
}