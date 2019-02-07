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


        // $("#home").data("data-image-src", "images/portfolio/gallery/6.jpg");
        // $('#home').css('background', 'url("images/portfolio/gallery/6.jpg")  no-repeat center center fixed');
        x = 0;
    } else {
        console.log("hero");
        $(".parallax-slider").attr("src","images/hero-bg.jpg");
        // $(#home").attr('src', 'images/hero-bg.jpg');
        // document.getElementById("home").setAttribute("data-image-src","images/hero-bg.jpg");
        // $('#home').css('background', 'url("images/hero-bg.jpg")  no-repeat center center fixed');
        // $("#home").data("data-image-src", "images/hero-bg.jpg");
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
    setInterval(test,5000);
});

$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 160,
    horizontalOrder: true
});

$("#contact_us").click(function (){
    alert("Submit");
});
