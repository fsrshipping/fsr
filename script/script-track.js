$(document).ready(function() {
    $("#trackbutton").click(function() {
        let getNumber = $("#trackingnumber").val();
        let link = "https://fsr-shipping.netlify.app/trk/" + getNumber + ".html"
        $("#tracking-main").load(link);
    });

    $('#trackingnumber').on('keypress', function (e) {
        if(e.which === 13){
            let getNumber = $("#trackingnumber").val();
            let link = "https://fsr-shipping.netlify.app/trk/" + getNumber + ".html"
            $("#tracking-main").load(link);
           
        }
    });

});


  