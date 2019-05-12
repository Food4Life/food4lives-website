var x = 1;
function carouselMover() {
    if (x === 1) {
        console.log("gallery");
        $(".parallax-slider").attr("src","images/Carousel-01.jpg");
        x = 2;
    } else if (x == 2){
        $(".parallax-slider").attr("src","images/Carousel-02.jpg");
        x = 3;
    }else if (x == 3){
        $(".parallax-slider").attr("src","images/Carousel-03.jpg");
        x = 4;
    }else if (x == 4){
        $(".parallax-slider").attr("src","images/Carousel-04.jpg");
        x = 0;
    }else{
        $(".parallax-slider").attr("src","images/Carousel-05.jpg");
        x = 1;
    }
}
$(document).ready(function(){
    setInterval(carouselMover,5000);
    // $("#submitSubscribe").on('click', function() {
    //     alert("This email: "+ $(".email").val() + "  is now Subscribed.");
    // });

    let width = $(document).width();
    let orWidth = $(window).width();

    addHeader();


    if (width < 800 || orWidth < 800) {
        //#gofundmead original height: 70px;
        $(".gofundmead-text").html(' Help fund our new kitchen: \n' +
            '                <a href="https://www.gofundme.com/feed-atlanta039s-homeless-with-food4lives"\n' +
            '                    target="_blank" style="text-decoration: underline; color: white;">GoFundMe</a>');

        $("#gofundmead").css({ 'height': 50 + "px" });

        // $("#gofundmead").css({ 'height': 150 + "px" });
        // //originaly 65px
        // $(".s-header").css({ 'height': 195 + "px" });
        // //original top: 12.5px;
        // $(".nav-buttons").css({ 'top': 140 + "px" });
        // //originally     top: 30px;
        // $(".header-logo").css({ 'top': 160 + "px" });
        //
        // $("#gofundmead").css({ 'visibility': 'visible' });
        //
        // $(".header-nav").css({ 'top': 180 + "px" });
        // $(".header-menu-toggle").css({ 'top': 140 + "px" });

    } else {
        $("#gofundmead").css({ 'height': 70 + "px" });
    }
    // else {
        //originaly 65px
        $(".s-header").css({ 'height': 145 + "px" });
        //original top: 12.5px;
        $(".nav-buttons").css({ 'top': 90 + "px" });
        //originally     top: 30px;
        $(".header-logo").css({ 'top': 110 + "px" });

        $("#gofundmead").css({ 'visibility': 'visible' });

        $(".header-nav").css({ 'top': 130 + "px" });
        $(".header-menu-toggle").css({ 'top': 90 + "px" });

    // }
    $("#gofundmead-close").on('click', function() {
        $("#gofundmead").css({ 'height': 70 + "px" });
        // alert("close");
        $("#gofundmead-close").css({ 'visibility': 'hidden' });
        $("#gofundmead").css({ 'visibility': 'hidden' });
        //originaly 65px
        $(".s-header").css({ 'height': 65 + "px" });
        //original top: 12.5px;
        $(".nav-buttons").css({ 'top': 12.5 + "px" });
        //originally     top: 30px;
        $(".header-logo").css({ 'top': 30 + "px" });

        $(".header-nav").css({ 'top': 50 + "px" });
        $(".header-menu-toggle").css({ 'top': 10 + "px" });

    });
});

$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 160,
    horizontalOrder: true
});

$("#contact_us").click(function (){
    alert("Submit");
});
