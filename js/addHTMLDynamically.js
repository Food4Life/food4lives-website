function addHeader() {
    $("#header-get-area").replaceWith(`
        <header class="s-header card">
         <div class="header-logo">
            <a class="site-logo" href="index.html">
                <img src="images/logo.svg" alt="Homepage">
            </a>
        </div>
        </header>
       <header class="s-header card" style="" id="Header2">

        <span style="text-align: center;  display: flex; align-items: center; justify-content: center;">
            <a id="donors-nav" class=" nav-buttons" href="contact.html">Contact Us</a>
            <a id="donors-nav" class=" nav-buttons" href="about.html">About</a>
            <a id="donors-nav" class=" nav-buttons" href="donors.html">Donors</a>
            <a id="volunteer-nav" class=" nav-buttons" href="volunteer.html">Volunteer</a>
            <a id="donate-nav" class=" nav-buttons" href="donate-things.html">Give Items</a>
<!--            <a id="sponsor-nav" class="pure-material-button-contained nav-buttons custom-dbox-popup"-->
<!--            href="https://donorbox.org/food4lives-donation">Donate</a>-->
            <a id="sponsor-nav" class="pure-material-button-contained nav-buttons" href="donate.html">Donate</a>
            <a id="sponsor-nav" class="custom-dbox-popup pure-material-button-contained nav-buttons" style="font-size:12px;color: white;background: rgb(65, 113, 255);" href="https://donorbox.org/coronavirus-relief-fund-1">Coronavirus Relief Fund</a>
        </span>

<!--        <a id="sponsor-nav" class="pure-material-button-contained nav-buttons custom-dbox-popup"-->
<!--            href="https://donorbox.org/food4lives-donation" style="margin-top: 65px;">Donate</a>-->
<!--        <a id="donate-nav" class=" nav-buttons" href="donate-things.html" style="margin-top: 65px;">Give Items</a>-->
<!--        <a id="volunteer-nav" class=" nav-buttons" href="volunteer.html" style="margin-top: 65px;">Volunteer</a>-->
<!--        <a id="donors-nav" class=" nav-buttons" href="donors.html" style="margin-top: 65px;">Donors</a>-->

        <!--<button id="donate-nav" class="pure-material-button-contained">Donate</button>-->

        <nav class="header-nav" style="background-color: #000; margin-top: 65px; top: 0;">

            <a href="#0" class="header-nav__close" title="close"><span>Close</span></a>
            <div class="header-nav__content" style="background-color: #000">

                <ul class="header-nav__list">
                    <li class="current"><a class="" href="index.html" title="home">Home</a></li>
                    <li><a class="" href="contact.html" title="contact">Contact Us</a></li>
                    <li class=""><a class="" href="about.html" title="about">About</a></li>
<!--                    <li><a class="custom-dbox-popup" href="https://donorbox.org/food4lives-donation" title="events">Donate</a></li>-->
                    <li><a class="" href="donate-things.html" title="about">Give Items</a></li>
                    <li><a class="" href="volunteer.html" title="services">Volunteer</a></li>
                    <li><a class="" href="donors.html" title="donors">Donors</a></li>
                    <li><a class="pure-material-button-contained" style="color: white;background: rgb(255, 112, 67);" href="donate.html">Donate</a></li>
                    <li><a class="custom-dbox-popup pure-material-button-contained" style="font-size:12px;color: white;background: rgb(65, 113, 255);" href="https://donorbox.org/coronavirus-relief-fund-1">Coronavirus Relief Fund</a></li>
                    <!--<li><a class="smoothscroll"  href="#works" title="works">Works</a></li>-->
                    <!--<li><a class="smoothscroll"  href="#volunteers" title="volunteers">Volunteers</a></li>-->
                    <!--<li><a class="smoothscroll"  href="#contact" title="contact">Contact</a></li>-->
                    <!--<li><a class="smoothscroll"  href="#home" title="donate">Donate</a></li>-->
                </ul>

                <!-- <p>Perspiciatis hic praesentium nesciunt. Et neque a dolorum <a href='#0'>voluptatem</a> porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis neque reprehenderit.</p> -->
                <p>Food for lives is the organization, working to focus on underserved and low-resourced communities.
                    Volunteers plays a vital role in our efforts to end hunger in the United States.
                    With the support of volunteers, the food for life is helping homeless to build a better future.</p>

                <ul class="header-nav__social ">
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
      <a href="https://www.facebook.com/food4livesatl" class="facebook" target="_blank"><i class="fa fa-facebook"></i></a> 
      <a href="https://twitter.com/Food_For_Lives" class="twitter" target="_blank"><i class="fa fa-twitter"></i></a> 
      <a href="https://www.instagram.com/food4livesatl" class="instagram" target="_blank"><i class="fa fa-instagram"></i></a> 
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


function addContact() {
    $("#contact-us-dynamic").replaceWith(`
        <!-- contact
    ================================================== -->
    <section id="contact" class="s-contact">

        <div class="overlay"></div>
        <!--<div class="contact__line"></div>-->

        <div class="row section-header" data-aos="fade-up">
            <div class="col-full">
                <h3 class="subhead">Contact Us</h3>
                <h1 class="display-2 display-2--light">Please Reach out for next Event </h1>
            </div>
        </div>

        <div class="row contact-content" data-aos="fade-up">

            <div class="contact-primary">

                <h3 class="h6">Send Us A Message</h3>
                <form action="https://formspree.io/food4life.volunteers@gmail.com" method="POST">
                    <fieldset>
                        <div class="form-field" style="color: white;">
                            <input type="text" name="name" id="contactName" placeholder="Your Name" value=""
                                minlength="2" required="" aria-required="true" class="full-width" style="color: white;">
                        </div>
                        <div class="form-field">
                            <input type="email" name="email" id="contactEmail" placeholder="Your Email" value=""
                                required="" aria-required="true" class="full-width">
                        </div>
                        <div class="form-field">
                            <textarea type="text" name="extra_mesage" id="contactMessage" placeholder="Your Message"
                                rows="10" cols="50" required="" aria-required="true" class="full-width"></textarea>
                        </div>
                        <div class="form-field">
                            <input type="submit" value="Submit" class="full-width btn--primary" id="contact_us">
                            <div class="submit-loader">
                                <div class="text-loader">Sending...</div>
                                <div class="s-loader">
                                    <div class="bounce1"></div>
                                    <div class="bounce2"></div>
                                    <div class="bounce3"></div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
                <!-- contact-warning -->
                <div class="message-warning">
                    Something went wrong. Please try again.
                </div>

                <!-- contact-success -->
                <div class="message-success">
                    Your message was sent, thank you!<br>
                </div>

            </div>

            <div class="contact-secondary">
                <div class="contact-info">

                    <h3 class="h6 hide-on-fullwidth">Contact Info</h3>

                    <div class="cinfo">
                        <h5>Where to Find Us</h5>
                        <p>
                            1122 Old Chattahoochee Ave NW, <br>
                            Atlanta, GA <br>
                            30318 US
                        </p>
                    </div>

                    <div class="cinfo">
                        <h5>Email Us At</h5>
                        <p>
                            contact@food4lives.org<br>

                        </p>
                    </div>

                    <div class="cinfo">
                        <h5>Call Us At</h5>
                        <p>
                            Phone: +1(404) 542-2572<br>
                        </p>
                    </div>

                    <!-- <ul class="contact-social">
                        <li>
                            <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-behance" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
                        </li>
                    </ul>  end contact-social -->

                </div> <!-- end contact-info -->
            </div> <!-- end contact-secondary -->

        </div> <!-- end contact-content -->

    </section> <!-- end s-contact -->
    `);
}

function addFooter() {
    $("#footer-dynamic").replaceWith(`
     <!-- footer
================================================== -->
<footer style="margin-top: 0px;
/*position:fixed;*/
/*    bottom:0px;*/
    ">

    <div class="row footer-main">

        <div class="col-full tab-full left footer-desc" style="font-family: 'Josefin Sans', sans-serif; text-align: center;">

        
        <div style="text-align: center;">
                <div class="footer-logo" style="display: inline-block;"></div>
            </div>
            Food for lives is the organization, working to focus on underserved and low-resourced communities.
            Volunteers plays a vital role in our efforts to end hunger in the United States.
            With the support of volunteers, the food for life is helping homeless to build a better future.


        </div>

        <div style="text-align: center;">
            <a href="https://www.guidestar.org/profile/83-1082695" target="_blank">
                <img style="margin-top:20px;" src="https://widgets.guidestar.org/gximage2?o=9748149&l=v4" />
            </a>  
        </div>

        <!--<div class="col-six tab-full right footer-subscribe">-->

        <!--<h4>Get Notified</h4>-->
        <!--<p>Please Subscribe to our weekly Event Notification and Updates. It includes picks and events for Feeding Homeless people.</p>-->

        <!--<div class="subscribe-form">-->
        <!--<form id="mc-form" class="group" novalidate="true">-->
        <!--<input type="email"  value="" name="EMAIL" class="email" id="mc-email" placeholder="Email Address" required="">-->
        <!--<input type="submit" name="subscribe" value="Subscribe" id="submitSubscribe">-->
        <!--&lt;!&ndash;<label for="mc-email" class="subscribe-message"></label>&ndash;&gt;-->
        <!--</form>-->
        <!--</div>-->

        <!--</div>-->

    </div> <!-- end footer-main -->

    <div class="row footer-bottom">

        <div class="col-twelve">

            <div class="go-top">
                <a class="smoothscroll" title="Back to Top" href="#top"><i class="icon-arrow-up"
                                                                           aria-hidden="true"></i></a>
            </div>
        </div>

    </div> <!-- end footer-bottom -->

    <h4 style="font-family: 'Josefin Sans', sans-serif;">Desiretreefoundation inc is a 501(c)(3) tax-exempt
        organization. Donations and contributions are tax deductible as allowed by law.<br>
        1122 Old Chattahoochee Ave NW, Atlanta, GA 30318 US</h4>

    <!--<iframe height="500px" width="100%" src="https://www.gofundme.com/mvc.php?route=widgets/mediawidget&fund=https://www.gofundme.com/feed-atlanta039s-homeless-with-food4lives&image=1&coinfo=1&preview=1" type="text/html"></iframe>-->



</footer> <!-- end footer -->


<!-- photoswipe background
================================================== -->
<div aria-hidden="true" class="pswp" role="dialog" tabindex="-1">

    <div class="pswp__bg"></div>
    <div class="pswp__scroll-wrap">

        <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
        </div>

        <div class="pswp__ui pswp__ui--hidden">
            <div class="pswp__top-bar">
                <div class="pswp__counter"></div><button class="pswp__button pswp__button--close"
                title="Close (Esc)"></button> <button class="pswp__button pswp__button--share"
                title="Share"></button> <button class="pswp__button pswp__button--fs"
                title="Toggle fullscreen"></button> <button class="pswp__button pswp__button--zoom"
                title="Zoom in/out"></button>
                <div class="pswp__preloader">
                    <div class="pswp__preloader__icn">
                        <div class="pswp__preloader__cut">
                            <div class="pswp__preloader__donut"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div class="pswp__share-tooltip"></div>
            </div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
            <div class="pswp__caption">
                <div class="pswp__caption__center"></div>
            </div>
        </div>

    </div>

</div> <!-- end photoSwipe background -->


<!-- preloader
================================================== -->
<div id="preloader">
    <div id="loader">
        <div class="line-scale-pulse-out">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</div>


<!--&lt;!&ndash; Java Script-->
<!--================================================== &ndash;&gt;-->
<!--<script src="js/jquery-3.2.1.min.js"></script>-->
<!--<script src="js/plugins.js"></script>-->
<!--<script src="js/main.js"></script>-->
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"-->
<!--        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"-->
<!--        crossorigin="anonymous"></script>-->

    `);
}
