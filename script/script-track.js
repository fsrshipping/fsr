const track = document.getElementById("trackbutton");


track.addEventListener("click", trackParcel);

function trackParcel() {
    console.log("click");
    let trackingnumber = document.getElementById("trackingnumber").value;
    console.log(trackingnumber);
    window.location=`http://fsr-shipping.netlify.app/trk/${trackingnumber}.html`;
}

