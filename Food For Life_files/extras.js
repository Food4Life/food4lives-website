// setInterval(function() {
//     console.log("Image Change: "+($("#home").attr('data-image-src'))+"; place: "+window.location.href);
//     // var val = $('#home');
//     // val['data-image-src'] = 'images/portfolio/gallery/6.jpg';
//     // $('#home').attr('data-image-src','images/portfolio/gallery/6.jpg');
//     $( document ).ready(function() {
//         console.log( "ready!" );
//         $('#home').attr('data-image-src','images/portfolio/gallery/6.jpg');
//
//     });
//     // $('#home').load(window.location.href +  ' #home');
// },  3000);
var x = 1;
function test() {
    if (x === 1) {
        console.log("gallery");
        // $(#home").attr('src', 'images/portfolio/gallery/6.jpg');
        $(".parallax-slider").attr("src","images/Main1.jpeg");
        x = 2;
    } else if (x == 2){
        $(".parallax-slider").attr("src","images/Carousel-01.jpg");
        x = 3;
    }else if (x == 3){
        $(".parallax-slider").attr("src","images/Carousel-02.jpg");
        x = 4;
    }else if (x == 4){
        $(".parallax-slider").attr("src","images/Carousel-03.jpg");
        x = 5;
    }else if (x == 5){
        $(".parallax-slider").attr("src","images/Carousel-04.jpg");
        x = 6;
    }else if (x == 6){
        $(".parallax-slider").attr("src","images/Carousel-05.jpg");
        x = 0;
    }else {
        console.log("hero");
        $(".parallax-slider").attr("src","images/hero-bg.jpg");
        x = 1;
    }
    // $(document).ready(function(){
    //     console.log("Image Change: " + ($("#home").attr('data-image-src')) + "; place: " + window.location.href);
    //     $("#home").attr("data-image-src", "images/portfolio/gallery/6.jpg");
    // });
    // if ( jQuery.isReady ) {
    //
    // }
}
$(document).ready(function(){
    // $("#home").attr("data-image-src", "images/portfolio/gallery/6.jpg");
    setInterval(test,3000);
});

$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 160,
    horizontalOrder: true
});

$("#contact_us").click(function (){
    alert("Submit");
});
