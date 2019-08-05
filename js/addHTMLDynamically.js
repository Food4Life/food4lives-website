function addHeader() {
    $("#header-get-area").replaceWith(`
        <header class="s-header card">
                <div class="header-logo"  style="left: 45%;">
            <a class="site-logo" href="index.html">
                <img src="images/logo.svg" alt="Homepage">
            </a>
        </div>
        </header>
       <header class="s-header card" style="margin-top: 65px;" id="Header2">

        <span style="text-align: center;  display: flex; align-items: center; justify-content: center;">
            <a id="donors-nav" class=" nav-buttons" href="about.html">About</a>
            <a id="donors-nav" class=" nav-buttons" href="donors.html">Monthly Donors</a>
            <a id="volunteer-nav" class=" nav-buttons" href="events.html">Volunteer</a>
            <a id="donate-nav" class=" nav-buttons" href="donate-things.html">Give Items</a>
            <a id="sponsor-nav" class="pure-material-button-contained nav-buttons custom-dbox-popup"
            href="https://donorbox.org/food4lives-donation">Sponsor A Meal</a>
        </span>

<!--        <a id="sponsor-nav" class="pure-material-button-contained nav-buttons custom-dbox-popup"-->
<!--            href="https://donorbox.org/food4lives-donation" style="margin-top: 65px;">Sponsor A Meal</a>-->
<!--        <a id="donate-nav" class=" nav-buttons" href="donate-things.html" style="margin-top: 65px;">Give Items</a>-->
<!--        <a id="volunteer-nav" class=" nav-buttons" href="events.html" style="margin-top: 65px;">Volunteer</a>-->
<!--        <a id="donors-nav" class=" nav-buttons" href="donors.html" style="margin-top: 65px;">Monthly Donors</a>-->

        <!--<button id="donate-nav" class="pure-material-button-contained">Donate</button>-->

        <nav class="header-nav" style="background-color: #000; margin-top: 65px;">

            <a href="#0" class="header-nav__close" title="close"><span>Close</span></a>
            <div class="header-nav__content" style="background-color: #000">
                <h3 style="color: #ff7043">Navigation</h3>

                <ul class="header-nav__list">
                    <li class="current"><a class="" href="index.html" title="home">Home</a></li>
                    <li><a class="custom-dbox-popup" href="https://donorbox.org/food4lives-donation"
                            title="events">Sponsor A Meal</a></li>
                    <li><a class="" href="donate-things.html" title="about">Give Items</a></li>
                    <li><a class="" href="events.html" title="services">Volunteer</a></li>
                    <li><a class="" href="donors.html" title="donors">Monthly Donors</a></li>
                    <!--<li><a class="smoothscroll"  href="#works" title="works">Works</a></li>-->
                    <!--<li><a class="smoothscroll"  href="#volunteers" title="volunteers">Volunteers</a></li>-->
                    <!--<li><a class="smoothscroll"  href="#contact" title="contact">Contact</a></li>-->
                    <!--<li><a class="smoothscroll"  href="#home" title="donate">Donate</a></li>-->
                </ul>

                <!-- <p>Perspiciatis hic praesentium nesciunt. Et neque a dolorum <a href='#0'>voluptatem</a> porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis neque reprehenderit.</p> -->
                <p>Food for lives is the organization, working to focus on underserved and low-resourced communities.
                    Volunteers plays a vital role in our efforts to end hunger in the United States.
                    With the support of volunteers, the food for life is helping homeless to build a better future.</p>

                <ul class="header-nav__social">
                    <li>
                        <a href="#"><i class="fa fa-facebook"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-behance"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-dribbble"></i></a>
                    </li>
                </ul>

            </div> <!-- end header-nav__content -->

        </nav> <!-- end header-nav -->

        <a class="header-menu-toggle" href="#0">
            <span class="header-menu-text">Menu</span>
            <span class="header-menu-icon"></span>
        </a>

    </header> <!-- end s-header -->
    
    <!-- Load font awesome icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
    <!-- The social media icon bar -->
    <div class="icon-bar">
      <a href="https://www.facebook.com/Food4Lives" class="facebook" target="_blank"><i class="fa fa-facebook"></i></a> 
      <a href="https://twitter.com/Food_For_Lives" class="twitter" target="_blank"><i class="fa fa-twitter"></i></a> 
<!--      <a href="#" class="google" target="_blank"><i class="fa fa-google"></i></a> -->
<!--      <a href="#" class="linkedin" target="_blank"><i class="fa fa-linkedin"></i></a>-->
      <a href="https://www.youtube.com/channel/UCZ5EhUlijz4xwjaNUrtGXSw" class="youtube" target="_blank"><i class="fa fa-youtube"></i></a> 
    </div>
    
<!--    <a href="https://twitter.com/minimalmonkey" class="icon-button twitter"><i class="icon-twitter"></i><span></span></a><br>-->
<!--<a href="https://facebook.com" class="icon-button facebook"><i class="icon-facebook"></i><span></span></a><br>-->
<!--<a href="https://plus.google.com" class="icon-button google-plus"><i class="icon-google-plus"></i><span></span></a>-->
<!--    <aside id="sticky-social">-->
<!--    <ul>-->
<!--        <li><a href="#" class="entypo-facebook" target="_blank"><span>Facebook</span></a></li>-->
<!--        <li><a href="#" class="entypo-twitter" target="_blank"><span>Twitter</span></a></li>-->
<!--        <li><a href="#" class="entypo-gplus" target="_blank"><span>Google+</span></a></li>-->
<!--        <li><a href="#" class="entypo-linkedin" target="_blank"><span>LinkedIn</span></a></li>-->
<!--        <li><a href="#" class="entypo-instagrem" target="_blank"><span>Instagram</span></a></li>-->
<!--        <li><a href="#" class="entypo-stumbleupon" target="_blank"><span>StumbleUpon</span></a></li>-->
<!--        <li><a href="#" class="entypo-pinterest" target="_blank"><span>Pinterest</span></a></li>-->
<!--        <li><a href="#" class="entypo-flickr" target="_blank"><span>Flickr</span></a></li>-->
<!--        <li><a href="#" class="entypo-tumblr" target="_blank"><span>Tumblr</span></a></li>-->
<!--    </ul>-->
<!--</aside>-->
    `);
}
//     <header class="s-header card">
//     <!--display: flex; width: 100%;align-items: stretch;-->
//     <div id="gofundmead" class="" style="visibility: hidden; display: flex;">
//         <!--flex: 0 0 65%;  flex-grow: 1;-->
//         <div class="gofundmead-text"
//             style="color: white; line-height: 50px;vertical-align: center;text-align: center;font-family: 'Josefin Sans', sans-serif;   flex: 0 0 85%;  flex-shrink: 0;flex-grow: 1; ">
//             Help fund our new kitchen
//             <div class="container" style="display:inline-block;">
//                 <div class="progress2 progress-moved">
//                     <div class="progress-bar2" >
//                     </div>
//                 </div>
//             </div>
//             <a href="https://www.gofundme.com/feed-atlanta039s-homeless-with-food4lives"
//                 target="_blank" style="text-decoration: underline; color: white;">Donate at GoFundMe</a>
//             <div style="margin-top: -20px">
//                 ~2% Raised by 63 People
//             </div>
//         </div>
//         <!--flex: 1;   flex-grow: 1;-->
//         <div class="gofundmead-button col" style="flex: 1;   flex-shrink: 0;flex-grow: 1;">
//             <button id="gofundmead-close"
//                 style="background-color: transparent;border-color: transparent; float: right; vertical-align: center;"><i
//                     class="fa  fa-times" style="color: white; font-size: 2.5rem;"></i></button>
//         </div>
//     </div>
//
