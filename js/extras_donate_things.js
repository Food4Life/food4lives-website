// var x = 1;
// function carouselMover() {
//     if (x === 1) {
//         console.log("gallery");
//         $(".parallax-slider").attr("src","images/Main1.jpeg");
//         x = 2;
//     } else if (x == 2){
//         $(".parallax-slider").attr("src","images/Carousel-01.jpg");
//         x = 3;
//     }else if (x == 3){
//         $(".parallax-slider").attr("src","images/Carousel-02.jpg");
//         x = 4;
//     }else if (x == 4){
//         $(".parallax-slider").attr("src","images/Carousel-03.jpg");
//         x = 5;
//     }else if (x == 5){
//         $(".parallax-slider").attr("src","images/Carousel-04.jpg");
//         x = 6;
//     }else if (x == 6){
//         $(".parallax-slider").attr("src","images/Carousel-05.jpg");
//         x = 0;
//     }else {
//         console.log("hero");
//         $(".parallax-slider").attr("src","images/hero-bg.jpg");
//         x = 1;
//     }
// }
$(document).ready(function(){
    // setInterval(carouselMover,5000);
    // $("#submitSubscribe").on('click', function() {
    //     alert("This email: "+ $(".email").val() + "  is now Subscribed.");
    // });


    // //originaly 65px
    // $(".s-header").css({ 'height': 135 + "px" });
    // //original top: 12.5px;
    // $(".nav-buttons").css({ 'top': 80 + "px" });
    // //originally     top: 30px;
    // $(".header-logo").css({ 'top': 100 + "px" });
    //
    // $("#gofundmead").css({ 'visibility': 'visible' });
    //
    // $(".header-nav").css({ 'top': 120 + "px" });
    // $(".header-menu-toggle").css({ 'top': 80 + "px" });
    //
    // $("#gofundmead-close").on('click', function() {
    //     // alert("close");
    //     $("#gofundmead-close").css({ 'visibility': 'hidden' });
    //     $("#gofundmead").css({ 'visibility': 'hidden' });
    //     //originaly 65px
    //     $(".s-header").css({ 'height': 65 + "px" });
    //     //original top: 12.5px;
    //     $(".nav-buttons").css({ 'top': 12.5 + "px" });
    //     //originally     top: 30px;
    //     $(".header-logo").css({ 'top': 30 + "px" });
    //
    //     $(".header-nav").css({ 'top': 50 + "px" });
    //     $(".header-menu-toggle").css({ 'top': 10 + "px" });
    //
    // });

    //originaly 65px
    $(".s-header").css({ 'height': 150 + "px" });
    //original top: 12.5px;
    $(".nav-buttons").css({ 'top': 80 + "px" });
    //originally     top: 30px;
    $(".header-logo").css({ 'top': 100 + "px" });

    $("#gofundmead").css({ 'visibility': 'visible' });

    $(".header-nav").css({ 'top': 120 + "px" });
    $(".header-menu-toggle").css({ 'top': 80 + "px" });

    $("#gofundmead-close").on('click', function() {
        // alert("close");
        $("#gofundmead-close").css({ 'visibility': 'hidden' });
        $("#gofundmead").css({ 'visibility': 'hidden' });
        //originaly 65px
        $(".s-header").css({ 'height': 80 + "px" });
        //original top: 12.5px;
        $(".nav-buttons").css({ 'top': 12.5 + "px" });
        //originally     top: 30px;
        $(".header-logo").css({ 'top': 30 + "px" });

        $(".header-nav").css({ 'top': 50 + "px" });
        $(".header-menu-toggle").css({ 'top': 10 + "px" });

    });
});
//
// $('.grid').masonry({
//     itemSelector: '.grid-item',
//     columnWidth: 160,
//     horizontalOrder: true
// });
//
// $("#contact_us").click(function (){
//     alert("Submit");
// });
