function addHeader() {
    $("#header-get-area").html(`
        <header class="s-header card">
        <!--display: flex; width: 100%;align-items: stretch;-->
        <div id="gofundmead" class="" style="visibility: hidden; display: flex;">
            <!--flex: 0 0 65%;  flex-grow: 1;-->
            <div class="gofundmead-text"
                style="color: white; line-height: 50px;vertical-align: center;text-align: center;font-family: 'Josefin Sans', sans-serif;   flex: 0 0 85%;  flex-shrink: 0;flex-grow: 1; ">
                Help fund our new kitchen
                <div class="container" style="display:inline-block;">
                    <div class="progress2 progress-moved">
                        <div class="progress-bar2" >
                        </div>
                    </div>
                </div>
                <a href="https://www.gofundme.com/feed-atlanta039s-homeless-with-food4lives"
                    target="_blank" style="text-decoration: underline; color: white;">Donate at GoFundMe</a>
                <div style="margin-top: -20px">
                    2% Raised by 60 People
                </div>
            </div>
            <!--flex: 1;   flex-grow: 1;-->
            <div class="gofundmead-button col" style="flex: 1;   flex-shrink: 0;flex-grow: 1;">
                <button id="gofundmead-close"
                    style="background-color: transparent;border-color: transparent; float: right; vertical-align: center;"><i
                        class="fa  fa-times" style="color: white; font-size: 2.5rem;"></i></button>
            </div>
        </div>

        <div class="header-logo">
            <a class="site-logo" href="index.html">
                <img src="images/logo.svg" alt="Homepage">
            </a>
        </div>
        <a id="sponsor-nav" class="pure-material-button-contained nav-buttons custom-dbox-popup"
            href="https://donorbox.org/food4lives-donation">Sponsor A Meal</a>
        <a id="donate-nav" class=" nav-buttons" href="donate-things.html">Give Items</a>
        <a id="volunteer-nav" class=" nav-buttons" href="events.html">Volunteer</a>

        <!--<button id="donate-nav" class="pure-material-button-contained">Donate</button>-->

        <nav class="header-nav" style="background-color: #000">

            <a href="#0" class="header-nav__close" title="close"><span>Close</span></a>
            <div class="header-nav__content" style="background-color: #000">
                <h3 style="color: #ff7043">Navigation</h3>

                <ul class="header-nav__list">
                    <li class="current"><a class="" href="index.html" title="home">Home</a></li>
                    <li><a class="custom-dbox-popup" href="https://donorbox.org/food4lives-donation"
                            title="events">Sponsor A Meal</a></li>
                    <li><a class="" href="donate-things.html" title="about">Give Items</a></li>
                    <li><a class="" href="events.html" title="services">Volunteer</a></li>
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
    `);
}
